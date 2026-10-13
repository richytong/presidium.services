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
        'image-max-height: 300px',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 10, column: 4, offset: 378 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Blue-green deployment is a deployment strategy for the deployment phase of the DevOps lifecycle in software engineering. In blue-green deployment with Presidium and Docker, the Docker Swarm container orchestration technology manages the deployment of containers across two networks of remote physical or virtual servers, each with an identical production environment. A Docker daemon connects each server of a network on a Docker overlay network. The Docker Swarm technology manages the lifecycle of containers across each server via the Docker daemon, including resolving the appropriate server to host a container, pulling in an image of application software onto the appropriate server, running the image of application software on the appropriate server in a container, and load balancing traffic to a container across the network of servers.',
          position: {
            start: { line: 12, column: 1, offset: 380 },
            end: { line: 12, column: 847, offset: 1226 }
          }
        }
      ],
      position: {
        start: { line: 12, column: 1, offset: 380 },
        end: { line: 12, column: 847, offset: 1226 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A container is one or more processes started from an image using container management software such as Docker. An image is data including all files of the application software, binary and library dependencies of the application software, and configurations for running a container from the image of the application software.',
          position: {
            start: { line: 14, column: 1, offset: 1228 },
            end: { line: 14, column: 325, offset: 1552 }
          }
        }
      ],
      position: {
        start: { line: 14, column: 1, offset: 1228 },
        end: { line: 14, column: 325, offset: 1552 }
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
            start: { line: 16, column: 4, offset: 1557 },
            end: { line: 16, column: 11, offset: 1564 }
          }
        }
      ],
      position: {
        start: { line: 16, column: 1, offset: 1554 },
        end: { line: 16, column: 11, offset: 1564 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The purpose of blue-green deployment is to achieve reliability and zero downtime when deploying application software as software services such as web servers for the world wide web.',
          position: {
            start: { line: 17, column: 1, offset: 1565 },
            end: { line: 17, column: 182, offset: 1746 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 1565 },
        end: { line: 17, column: 182, offset: 1746 }
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
            start: { line: 19, column: 4, offset: 1751 },
            end: { line: 19, column: 16, offset: 1763 }
          }
        }
      ],
      position: {
        start: { line: 19, column: 1, offset: 1748 },
        end: { line: 19, column: 16, offset: 1763 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The essential components of an architecture for blue-green deployment with Presidium and Docker is two networks of remote physical or virtual servers connected and load balanced by Docker and one load balancer directing traffic between the two networks. One of the networks is designated as the blue network, and the other network as the green network.',
          position: {
            start: { line: 20, column: 1, offset: 1764 },
            end: { line: 20, column: 353, offset: 2116 }
          }
        }
      ],
      position: {
        start: { line: 20, column: 1, offset: 1764 },
        end: { line: 20, column: 353, offset: 2116 }
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
            start: { line: 22, column: 4, offset: 2121 },
            end: { line: 22, column: 13, offset: 2130 }
          }
        }
      ],
      position: {
        start: { line: 22, column: 1, offset: 2118 },
        end: { line: 22, column: 13, offset: 2130 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A blue-green deployment with Presidium and Docker starts with a new release of application software. The release is first containerized with the Presidium Docker client into an image and pushed up to an image registry on a remote server.',
          position: {
            start: { line: 23, column: 1, offset: 2131 },
            end: { line: 23, column: 238, offset: 2368 }
          }
        }
      ],
      position: {
        start: { line: 23, column: 1, offset: 2131 },
        end: { line: 23, column: 238, offset: 2368 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following ',
          position: {
            start: { line: 25, column: 1, offset: 2370 },
            end: { line: 25, column: 15, offset: 2384 }
          }
        },
        {
          type: 'inlineCode',
          value: 'build-push',
          position: {
            start: { line: 25, column: 15, offset: 2384 },
            end: { line: 25, column: 27, offset: 2396 }
          }
        },
        {
          type: 'text',
          value: ' script builds and pushes a release of a web server to a private repository of Docker Hub with the Presidium Docker client.',
          position: {
            start: { line: 25, column: 27, offset: 2396 },
            end: { line: 25, column: 150, offset: 2519 }
          }
        }
      ],
      position: {
        start: { line: 25, column: 1, offset: 2370 },
        end: { line: 25, column: 150, offset: 2519 }
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
        start: { line: 26, column: 1, offset: 2520 },
        end: { line: 88, column: 4, offset: 3897 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following ',
          position: {
            start: { line: 90, column: 1, offset: 3899 },
            end: { line: 90, column: 15, offset: 3913 }
          }
        },
        {
          type: 'inlineCode',
          value: 'run',
          position: {
            start: { line: 90, column: 15, offset: 3913 },
            end: { line: 90, column: 20, offset: 3918 }
          }
        },
        {
          type: 'text',
          value: ' script contains the code of the web server of the release, and is copied into the image.',
          position: {
            start: { line: 90, column: 20, offset: 3918 },
            end: { line: 90, column: 109, offset: 4007 }
          }
        }
      ],
      position: {
        start: { line: 90, column: 1, offset: 3899 },
        end: { line: 90, column: 109, offset: 4007 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '#!/usr/bin/env node\n' +
        '\n' +
        "const http = require('http')\n" +
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
        start: { line: 92, column: 1, offset: 4009 },
        end: { line: 115, column: 4, offset: 4432 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Next, a network administrator manages the load balancer that directs traffic between the blue and the green network. The traffic is initially evenly split between the two networks. The network administrator first identifies either the blue or the green network to deploy the image of the release and directs traffic via the load balancer away from the identified network. The network administrator logs into a manager node of the identified network and deploys the image of the release.',
          position: {
            start: { line: 117, column: 1, offset: 4434 },
            end: { line: 117, column: 487, offset: 4920 }
          }
        }
      ],
      position: {
        start: { line: 117, column: 1, offset: 4434 },
        end: { line: 117, column: 487, offset: 4920 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following ',
          position: {
            start: { line: 119, column: 1, offset: 4922 },
            end: { line: 119, column: 15, offset: 4936 }
          }
        },
        {
          type: 'inlineCode',
          value: 'deploy',
          position: {
            start: { line: 119, column: 15, offset: 4936 },
            end: { line: 119, column: 23, offset: 4944 }
          }
        },
        {
          type: 'text',
          value: ' script deploys the image of the release as a Docker Service onto the Docker Swarm of the identified network.',
          position: {
            start: { line: 119, column: 23, offset: 4944 },
            end: { line: 119, column: 132, offset: 5053 }
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 4922 },
        end: { line: 119, column: 132, offset: 5053 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '#!/usr/bin/env node\n' +
        '\n' +
        "const Docker = require('presidium/Docker')\n" +
        '\n' +
        'setImmediate(async () => {\n' +
        "  const docker = new Docker({ apiVersion: '1.52' })\n" +
        '\n' +
        '  const projectName = "my-web-server"\n' +
        '  const version = "11.3.1"\n' +
        '  const image = `${projectName}:${version}`\n' +
        '  const username = "my_dockerhub_username"\n' +
        '  const pat = "my_pat"\n' +
        '\n' +
        '  const serviceOptions = {\n' +
        '    image: `${username}/${image}`,\n' +
        "    cmd: ['./run'],\n" +
        "    healthCmd: ['curl', 'http://localhost:8080/'],\n" +
        '    env: {\n' +
        "      NODE_ENV: 'production',\n" +
        '    },\n' +
        '    publish: {\n' +
        '      3001: 8080,\n' +
        '    },\n' +
        '    replicas: 1,\n' +
        "    restart: 'any',\n" +
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
        start: { line: 120, column: 1, offset: 5054 },
        end: { line: 157, column: 4, offset: 5891 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When the Docker Service is initially deployed, it is in the "new" state. The network administrator must wait for the Docker Service to be in the "running" state. While the Docker Service is deploying onto the Docker Swarm, the network administrator can check the current state of the service with ',
          position: {
            start: { line: 159, column: 1, offset: 5893 },
            end: { line: 159, column: 298, offset: 6190 }
          }
        },
        {
          type: 'inlineCode',
          value: 'docker service ps <service_name>',
          position: {
            start: { line: 159, column: 298, offset: 6190 },
            end: { line: 159, column: 332, offset: 6224 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 159, column: 332, offset: 6224 },
            end: { line: 159, column: 333, offset: 6225 }
          }
        }
      ],
      position: {
        start: { line: 159, column: 1, offset: 5893 },
        end: { line: 159, column: 333, offset: 6225 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Following a successful deploy, the network administrator directs traffic via the load balancer to the network of the successful deployment, and directs traffic away from the other blue or green network.',
          position: {
            start: { line: 161, column: 1, offset: 6227 },
            end: { line: 161, column: 203, offset: 6429 }
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 6227 },
        end: { line: 161, column: 203, offset: 6429 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The network administrator then logs into a manager node of the other network and deploys the image of the release.',
          position: {
            start: { line: 163, column: 1, offset: 6431 },
            end: { line: 163, column: 115, offset: 6545 }
          }
        }
      ],
      position: {
        start: { line: 163, column: 1, offset: 6431 },
        end: { line: 163, column: 115, offset: 6545 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Following a successful deploy of the image of the release on the other network, the network administrator directs traffic back to the other network so that the traffic is once again evenly split between the blue and the green networks.',
          position: {
            start: { line: 165, column: 1, offset: 6547 },
            end: { line: 165, column: 236, offset: 6782 }
          }
        }
      ],
      position: {
        start: { line: 165, column: 1, offset: 6547 },
        end: { line: 165, column: 236, offset: 6782 }
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
            start: { line: 167, column: 4, offset: 6787 },
            end: { line: 167, column: 14, offset: 6797 }
          }
        }
      ],
      position: {
        start: { line: 167, column: 1, offset: 6784 },
        end: { line: 167, column: 14, offset: 6797 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With blue-green deployments, you can reliably deploy with zero downtime. Presidium allows for convenient scripting in JavaScript with Docker, the foundation and cornerstone technology of containers for distributed services for the world wide web.',
          position: {
            start: { line: 168, column: 1, offset: 6798 },
            end: { line: 168, column: 247, offset: 7044 }
          }
        }
      ],
      position: {
        start: { line: 168, column: 1, offset: 6798 },
        end: { line: 168, column: 247, offset: 7044 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To get started with Presidium and Docker, please see the Presidium installation on the  ',
          position: {
            start: { line: 170, column: 1, offset: 7046 },
            end: { line: 170, column: 89, offset: 7134 }
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
                start: { line: 170, column: 90, offset: 7135 },
                end: { line: 170, column: 109, offset: 7154 }
              }
            }
          ],
          position: {
            start: { line: 170, column: 89, offset: 7134 },
            end: { line: 170, column: 152, offset: 7197 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 170, column: 152, offset: 7197 },
            end: { line: 170, column: 153, offset: 7198 }
          }
        }
      ],
      position: {
        start: { line: 170, column: 1, offset: 7046 },
        end: { line: 170, column: 153, offset: 7198 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 171, column: 1, offset: 7199 }
  }
}