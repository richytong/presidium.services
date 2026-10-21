---
title: Blue-Green Deployments with Presidium and Docker
author: Richard Tong, King of Technology at CLOUŢ
date: 2026-10-12
updated: 2026-10-12
path: /blog/blue-green-deployments-with-presidium-and-docker
description: Reliably deploy with zero downtime with blue-green deployments with Presidium and Docker
image: /assets/docker-mark-deep-blue.png
image-max-height: 300px
static: true
---

Blue-green deployment is a deployment strategy for the deployment phase of the DevOps lifecycle in software engineering. In blue-green deployment with Presidium and Docker, the Docker Swarm container orchestration technology manages the deployment of containers across two networks of remote physical or virtual servers, each with an identical production environment. A Docker daemon connects each server of a network on a Docker overlay network. The Docker Swarm technology manages the lifecycle of containers across each server via the Docker daemon, including resolving the appropriate server to host a container, pulling in an image of application software onto the appropriate server, running the image of application software on the appropriate server in a container, and load balancing traffic to a container across the network of servers.

A container is one or more processes started from an image using container management software such as Docker. An image is data including all files of the application software, binary and library dependencies of the application software, and configurations for running a container from the image of the application software.

## Purpose
The purpose of blue-green deployment is to achieve reliability and zero downtime when deploying application software as software services such as web servers for the world wide web.

## Architecture
The essential components of an architecture for blue-green deployment with Presidium and Docker is two networks of remote physical or virtual servers connected and load balanced by Docker and one load balancer directing traffic between the two networks. One of the networks is designated as the blue network, and the other network as the green network.

## Procedure
A blue-green deployment with Presidium and Docker starts with a new release of application software. The release is first containerized with the Presidium Docker client into an image and pushed up to an image registry on a remote server.

The following `build-push` script builds and pushes a release of a web server to a private repository of Docker Hub with the Presidium Docker client.
```javascript
#!/usr/bin/env node

const Docker = require("presidium/Docker")

setImmediate(async function () {
  const docker = new Docker({ apiVersion: "1.52" })

  const projectName = "my-web-server"
  const version = "11.3.2"
  const image = `${projectName}:${version}`
  const username = "my_dockerhub_username"
  const pat = "my_pat"

  const buildStream = await docker.buildImage(__dirname, {
    ignore: [".git", ".github", "build-push", "deploy", "test"],
    image,
    platform: "x86_64",
    archive: {
      Dockerfile: `
FROM node:26-alpine
WORKDIR /home/node
COPY . .
RUN apk add curl \
  && chmod +x ./run \
  && rm Dockerfile
USER node
      `.trim()
    },
  })

  buildStream.on("data", chunk => {
    const message = chunk.toString("utf8")
    if (message.includes("error")) {
      throw new Error(message)
    }
  })

  buildStream.pipe(process.stdout)

  await new Promise(resolve => buildStream.on("end", resolve))

  await docker.tagImage(image, `${username}/${image}`)

  const pushStream = await docker.pushImage({
    image,
    registry: username,
    username,
    password: pat,
  })

  pushStream.on("data", chunk => {
    const message = chunk.toString("utf8")
    if (message.includes("error")) {
      throw new Error(message)
    }
  })

  pushStream.pipe(process.stdout)

  await new Promise(resolve => pushStream.on("end", resolve))
})
```

The following `run` script contains the code of the web server of the release, and is copied into the image.

```javascript
#!/usr/bin/env node

const http = require("http")

const run = async function () {
  const server = http.createServer((request, response) => {
    response.writeHead(200, {
      "Content-Type": "text/plain",
    })
    response.end("OK")
  })

  server.listen(8080, () => {
    console.log("HTTP server listening on port 8080")
  })
}

if (process.argv[1] == __filename) {
  run()
}

module.exports = run
```

Next, a network administrator manages the load balancer that directs traffic between the blue and the green network. The traffic is initially evenly split between the two networks. The network administrator first identifies either the blue or the green network to deploy the image of the release and directs traffic via the load balancer away from the identified network. The network administrator logs into a manager node of the identified network and deploys the image of the release.

The following `deploy` script deploys the image of the release as a Docker Service onto the Docker Swarm of the identified network.
```javascript
#!/usr/bin/env node

const Docker = require("presidium/Docker")

setImmediate(async () => {
  const docker = new Docker({ apiVersion: "1.52" })

  const projectName = "my-web-server"
  const version = "11.3.1"
  const image = `${projectName}:${version}`
  const username = "my_dockerhub_username"
  const pat = "my_pat"

  const serviceOptions = {
    image: `${username}/${image}`,
    cmd: ["./run"],
    healthCmd: ["curl", "http://localhost:8080/"],
    env: {
      NODE_ENV: "production",
    },
    publish: {
      3001: 8080,
    },
    replicas: 1,
    restart: "any",
    username,
    password: pat,
  }

  console.log(`Deploying ${projectName}@${version}...`)
  try {
    await docker.createService(projectName, serviceOptions)
  } catch {
    await docker.updateService(projectName, serviceOptions)
  }
})
```

When the Docker Service is initially deployed, it is in the "new" state. The network administrator must wait for the Docker Service to be in the "running" state. While the Docker Service is deploying onto the Docker Swarm, the network administrator can check the current state of the service with `docker service ps <service_name>`.

Following a successful deploy, the network administrator directs traffic via the load balancer to the network of the successful deployment, and directs traffic away from the other blue or green network.

The network administrator then logs into a manager node of the other network and deploys the image of the release.

Following a successful deploy of the image of the release on the other network, the network administrator directs traffic back to the other network so that the traffic is once again evenly split between the blue and the green networks.

## Conclusion
With blue-green deployments, you can reliably deploy with zero downtime. Presidium allows for convenient scripting in JavaScript with Docker, the foundation and cornerstone technology of containers for distributed services for the world wide web.

To get started with Presidium and Docker, please see the Presidium installation on the  [Presidium Home Page](https://presidium.services/#installation).
