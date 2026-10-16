export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: Blue-Green Deployments with Presidium and Docker\n' +
        'author: Richard Tong, King of Technology at CLOUŢ\n' +
        'date: 2026-10-12\n' +
        'updated: 2026-10-12\n' +
        'path: /blog/blue-green-deployments-with-presidium-and-docker\n' +
        'description: Reliably deploy with zero downtime with blue-green deployments with Presidium and Docker\n' +
        'image: /assets/docker-mark-deep-blue.png\n' +
        'image-max-height: 300px\n' +
        'static: true',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 11, column: 4, offset: 391 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Blue-green deployment is a deployment strategy for the deployment phase of the DevOps lifecycle in software engineering. In blue-green deployment with Presidium and Docker, the Docker Swarm container orchestration technology manages the deployment of containers across two networks of remote physical or virtual servers, each with an identical production environment. A Docker daemon connects each server of a network on a Docker overlay network. The Docker Swarm technology manages the lifecycle of containers across each server via the Docker daemon, including resolving the appropriate server to host a container, pulling in an image of application software onto the appropriate server, running the image of application software on the appropriate server in a container, and load balancing traffic to a container across the network of servers.',
          position: {
            start: { line: 13, column: 1, offset: 393 },
            end: { line: 13, column: 847, offset: 1239 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 393 },
        end: { line: 13, column: 847, offset: 1239 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A container is one or more processes started from an image using container management software such as Docker. An image is data including all files of the application software, binary and library dependencies of the application software, and configurations for running a container from the image of the application software.',
          position: {
            start: { line: 15, column: 1, offset: 1241 },
            end: { line: 15, column: 325, offset: 1565 }
          }
        }
      ],
      position: {
        start: { line: 15, column: 1, offset: 1241 },
        end: { line: 15, column: 325, offset: 1565 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Purpose',
          position: {
            start: { line: 17, column: 4, offset: 1570 },
            end: { line: 17, column: 11, offset: 1577 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 1567 },
        end: { line: 17, column: 11, offset: 1577 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The purpose of blue-green deployment is to achieve reliability and zero downtime when deploying application software as software services such as web servers for the world wide web.',
          position: {
            start: { line: 18, column: 1, offset: 1578 },
            end: { line: 18, column: 182, offset: 1759 }
          }
        }
      ],
      position: {
        start: { line: 18, column: 1, offset: 1578 },
        end: { line: 18, column: 182, offset: 1759 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Architecture',
          position: {
            start: { line: 20, column: 4, offset: 1764 },
            end: { line: 20, column: 16, offset: 1776 }
          }
        }
      ],
      position: {
        start: { line: 20, column: 1, offset: 1761 },
        end: { line: 20, column: 16, offset: 1776 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The essential components of an architecture for blue-green deployment with Presidium and Docker is two networks of remote physical or virtual servers connected and load balanced by Docker and one load balancer directing traffic between the two networks. One of the networks is designated as the blue network, and the other network as the green network.',
          position: {
            start: { line: 21, column: 1, offset: 1777 },
            end: { line: 21, column: 353, offset: 2129 }
          }
        }
      ],
      position: {
        start: { line: 21, column: 1, offset: 1777 },
        end: { line: 21, column: 353, offset: 2129 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Procedure',
          position: {
            start: { line: 23, column: 4, offset: 2134 },
            end: { line: 23, column: 13, offset: 2143 }
          }
        }
      ],
      position: {
        start: { line: 23, column: 1, offset: 2131 },
        end: { line: 23, column: 13, offset: 2143 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A blue-green deployment with Presidium and Docker starts with a new release of application software. The release is first containerized with the Presidium Docker client into an image and pushed up to an image registry on a remote server.',
          position: {
            start: { line: 24, column: 1, offset: 2144 },
            end: { line: 24, column: 238, offset: 2381 }
          }
        }
      ],
      position: {
        start: { line: 24, column: 1, offset: 2144 },
        end: { line: 24, column: 238, offset: 2381 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following ',
          position: {
            start: { line: 26, column: 1, offset: 2383 },
            end: { line: 26, column: 15, offset: 2397 }
          }
        },
        {
          type: 'inlineCode',
          value: 'build-push',
          position: {
            start: { line: 26, column: 15, offset: 2397 },
            end: { line: 26, column: 27, offset: 2409 }
          }
        },
        {
          type: 'text',
          value: ' script builds and pushes a release of a web server to a private repository of Docker Hub with the Presidium Docker client.',
          position: {
            start: { line: 26, column: 27, offset: 2409 },
            end: { line: 26, column: 150, offset: 2532 }
          }
        }
      ],
      position: {
        start: { line: 26, column: 1, offset: 2383 },
        end: { line: 26, column: 150, offset: 2532 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '#!/usr/bin/env node\n' +
        '\n' +
        'const Docker = require("presidium/Docker")\n' +
        '\n' +
        'setImmediate(async function () {\n' +
        '  const docker = new Docker({ apiVersion: "1.52" })\n' +
        '\n' +
        '  const projectName = "my-web-server"\n' +
        '  const version = "11.3.2"\n' +
        '  const image = `${projectName}:${version}`\n' +
        '  const username = "my_dockerhub_username"\n' +
        '  const pat = "my_pat"\n' +
        '\n' +
        '  const buildStream = await docker.buildImage(__dirname, {\n' +
        '    ignore: [".git", ".github", "build-push", "deploy", "test"],\n' +
        '    image,\n' +
        '    platform: "x86_64",\n' +
        '    archive: {\n' +
        '      Dockerfile: `\n' +
        'FROM node:26-alpine\n' +
        'WORKDIR /home/node\n' +
        'COPY . .\n' +
        'RUN apk add curl \\\n' +
        '  && chmod +x ./run \\\n' +
        '  && rm Dockerfile\n' +
        'USER node\n' +
        '      `.trim()\n' +
        '    },\n' +
        '  })\n' +
        '\n' +
        '  buildStream.on("data", chunk => {\n' +
        '    const message = chunk.toString("utf8")\n' +
        '    if (message.includes("error")) {\n' +
        '      throw new Error(message)\n' +
        '    }\n' +
        '  })\n' +
        '\n' +
        '  buildStream.pipe(process.stdout)\n' +
        '\n' +
        '  await new Promise(resolve => buildStream.on("end", resolve))\n' +
        '\n' +
        '  await docker.tagImage(image, `${username}/${image}`)\n' +
        '\n' +
        '  const pushStream = await docker.pushImage({\n' +
        '    image,\n' +
        '    registry: username,\n' +
        '    username,\n' +
        '    password: pat,\n' +
        '  })\n' +
        '\n' +
        '  pushStream.on("data", chunk => {\n' +
        '    const message = chunk.toString("utf8")\n' +
        '    if (message.includes("error")) {\n' +
        '      throw new Error(message)\n' +
        '    }\n' +
        '  })\n' +
        '\n' +
        '  pushStream.pipe(process.stdout)\n' +
        '\n' +
        '  await new Promise(resolve => pushStream.on("end", resolve))\n' +
        '})',
      position: {
        start: { line: 27, column: 1, offset: 2533 },
        end: { line: 89, column: 4, offset: 3910 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following ',
          position: {
            start: { line: 91, column: 1, offset: 3912 },
            end: { line: 91, column: 15, offset: 3926 }
          }
        },
        {
          type: 'inlineCode',
          value: 'run',
          position: {
            start: { line: 91, column: 15, offset: 3926 },
            end: { line: 91, column: 20, offset: 3931 }
          }
        },
        {
          type: 'text',
          value: ' script contains the code of the web server of the release, and is copied into the image.',
          position: {
            start: { line: 91, column: 20, offset: 3931 },
            end: { line: 91, column: 109, offset: 4020 }
          }
        }
      ],
      position: {
        start: { line: 91, column: 1, offset: 3912 },
        end: { line: 91, column: 109, offset: 4020 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '#!/usr/bin/env node\n' +
        '\n' +
        'const http = require("http")\n' +
        '\n' +
        'const run = async function () {\n' +
        '  const server = http.createServer((request, response) => {\n' +
        '    response.writeHead(200, {\n' +
        '      "Content-Type": "text/plain",\n' +
        '    })\n' +
        '    response.end("OK")\n' +
        '  })\n' +
        '\n' +
        '  server.listen(8080, () => {\n' +
        '    console.log("HTTP server listening on port 8080")\n' +
        '  })\n' +
        '}\n' +
        '\n' +
        'if (process.argv[1] == __filename) {\n' +
        '  run()\n' +
        '}\n' +
        '\n' +
        'module.exports = run',
      position: {
        start: { line: 93, column: 1, offset: 4022 },
        end: { line: 116, column: 4, offset: 4445 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Next, a network administrator manages the load balancer that directs traffic between the blue and the green network. The traffic is initially evenly split between the two networks. The network administrator first identifies either the blue or the green network to deploy the image of the release and directs traffic via the load balancer away from the identified network. The network administrator logs into a manager node of the identified network and deploys the image of the release.',
          position: {
            start: { line: 118, column: 1, offset: 4447 },
            end: { line: 118, column: 487, offset: 4933 }
          }
        }
      ],
      position: {
        start: { line: 118, column: 1, offset: 4447 },
        end: { line: 118, column: 487, offset: 4933 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following ',
          position: {
            start: { line: 120, column: 1, offset: 4935 },
            end: { line: 120, column: 15, offset: 4949 }
          }
        },
        {
          type: 'inlineCode',
          value: 'deploy',
          position: {
            start: { line: 120, column: 15, offset: 4949 },
            end: { line: 120, column: 23, offset: 4957 }
          }
        },
        {
          type: 'text',
          value: ' script deploys the image of the release as a Docker Service onto the Docker Swarm of the identified network.',
          position: {
            start: { line: 120, column: 23, offset: 4957 },
            end: { line: 120, column: 132, offset: 5066 }
          }
        }
      ],
      position: {
        start: { line: 120, column: 1, offset: 4935 },
        end: { line: 120, column: 132, offset: 5066 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '#!/usr/bin/env node\n' +
        '\n' +
        'const Docker = require("presidium/Docker")\n' +
        '\n' +
        'setImmediate(async () => {\n' +
        '  const docker = new Docker({ apiVersion: "1.52" })\n' +
        '\n' +
        '  const projectName = "my-web-server"\n' +
        '  const version = "11.3.1"\n' +
        '  const image = `${projectName}:${version}`\n' +
        '  const username = "my_dockerhub_username"\n' +
        '  const pat = "my_pat"\n' +
        '\n' +
        '  const serviceOptions = {\n' +
        '    image: `${username}/${image}`,\n' +
        '    cmd: ["./run"],\n' +
        '    healthCmd: ["curl", "http://localhost:8080/"],\n' +
        '    env: {\n' +
        '      NODE_ENV: "production",\n' +
        '    },\n' +
        '    publish: {\n' +
        '      3001: 8080,\n' +
        '    },\n' +
        '    replicas: 1,\n' +
        '    restart: "any",\n' +
        '    username,\n' +
        '    password: pat,\n' +
        '  }\n' +
        '\n' +
        '  console.log(`Deploying ${projectName}@${version}...`)\n' +
        '  try {\n' +
        '    await docker.createService(projectName, serviceOptions)\n' +
        '  } catch {\n' +
        '    await docker.updateService(projectName, serviceOptions)\n' +
        '  }\n' +
        '})',
      position: {
        start: { line: 121, column: 1, offset: 5067 },
        end: { line: 158, column: 4, offset: 5904 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When the Docker Service is initially deployed, it is in the "new" state. The network administrator must wait for the Docker Service to be in the "running" state. While the Docker Service is deploying onto the Docker Swarm, the network administrator can check the current state of the service with ',
          position: {
            start: { line: 160, column: 1, offset: 5906 },
            end: { line: 160, column: 298, offset: 6203 }
          }
        },
        {
          type: 'inlineCode',
          value: 'docker service ps <service_name>',
          position: {
            start: { line: 160, column: 298, offset: 6203 },
            end: { line: 160, column: 332, offset: 6237 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 160, column: 332, offset: 6237 },
            end: { line: 160, column: 333, offset: 6238 }
          }
        }
      ],
      position: {
        start: { line: 160, column: 1, offset: 5906 },
        end: { line: 160, column: 333, offset: 6238 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Following a successful deploy, the network administrator directs traffic via the load balancer to the network of the successful deployment, and directs traffic away from the other blue or green network.',
          position: {
            start: { line: 162, column: 1, offset: 6240 },
            end: { line: 162, column: 203, offset: 6442 }
          }
        }
      ],
      position: {
        start: { line: 162, column: 1, offset: 6240 },
        end: { line: 162, column: 203, offset: 6442 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The network administrator then logs into a manager node of the other network and deploys the image of the release.',
          position: {
            start: { line: 164, column: 1, offset: 6444 },
            end: { line: 164, column: 115, offset: 6558 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 1, offset: 6444 },
        end: { line: 164, column: 115, offset: 6558 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Following a successful deploy of the image of the release on the other network, the network administrator directs traffic back to the other network so that the traffic is once again evenly split between the blue and the green networks.',
          position: {
            start: { line: 166, column: 1, offset: 6560 },
            end: { line: 166, column: 236, offset: 6795 }
          }
        }
      ],
      position: {
        start: { line: 166, column: 1, offset: 6560 },
        end: { line: 166, column: 236, offset: 6795 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Conclusion',
          position: {
            start: { line: 168, column: 4, offset: 6800 },
            end: { line: 168, column: 14, offset: 6810 }
          }
        }
      ],
      position: {
        start: { line: 168, column: 1, offset: 6797 },
        end: { line: 168, column: 14, offset: 6810 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With blue-green deployments, you can reliably deploy with zero downtime. Presidium allows for convenient scripting in JavaScript with Docker, the foundation and cornerstone technology of containers for distributed services for the world wide web.',
          position: {
            start: { line: 169, column: 1, offset: 6811 },
            end: { line: 169, column: 247, offset: 7057 }
          }
        }
      ],
      position: {
        start: { line: 169, column: 1, offset: 6811 },
        end: { line: 169, column: 247, offset: 7057 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To get started with Presidium and Docker, please see the Presidium installation on the  ',
          position: {
            start: { line: 171, column: 1, offset: 7059 },
            end: { line: 171, column: 89, offset: 7147 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://presidium.services/#installation',
          children: [
            {
              type: 'text',
              value: 'Presidium Home Page',
              position: {
                start: { line: 171, column: 90, offset: 7148 },
                end: { line: 171, column: 109, offset: 7167 }
              }
            }
          ],
          position: {
            start: { line: 171, column: 89, offset: 7147 },
            end: { line: 171, column: 152, offset: 7210 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 171, column: 152, offset: 7210 },
            end: { line: 171, column: 153, offset: 7211 }
          }
        }
      ],
      position: {
        start: { line: 171, column: 1, offset: 7059 },
        end: { line: 171, column: 153, offset: 7211 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 172, column: 1, offset: 7212 }
  }
}