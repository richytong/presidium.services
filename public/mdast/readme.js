export default {
  type: 'root',
  children: [
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Presidium',
          position: {
            start: { line: 1, column: 3, offset: 2 },
            end: { line: 1, column: 12, offset: 11 }
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 1, column: 12, offset: 11 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: 'https://rubico.land/assets/presidium-logo-2-w200.jpg',
          alt: 'presidium',
          position: {
            start: { line: 2, column: 1, offset: 12 },
            end: { line: 2, column: 67, offset: 78 }
          }
        }
      ],
      position: {
        start: { line: 2, column: 1, offset: 12 },
        end: { line: 2, column: 67, offset: 78 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: 'https://github.com/richytong/presidium/workflows/Node.js%20CI/badge.svg',
          alt: 'Node.js CI',
          position: {
            start: { line: 4, column: 1, offset: 80 },
            end: { line: 4, column: 87, offset: 166 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 4, column: 87, offset: 166 },
            end: { line: 5, column: 1, offset: 167 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://codecov.io/gh/richytong/presidium',
          children: [
            {
              type: 'image',
              title: null,
              url: 'https://codecov.io/gh/richytong/presidium/branch/master/graph/badge.svg',
              alt: 'codecov',
              position: {
                start: { line: 5, column: 2, offset: 168 },
                end: { line: 5, column: 85, offset: 251 }
              }
            }
          ],
          position: {
            start: { line: 5, column: 1, offset: 167 },
            end: { line: 5, column: 129, offset: 295 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 5, column: 129, offset: 295 },
            end: { line: 6, column: 1, offset: 296 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://www.npmjs.com/package/presidium',
          children: [
            {
              type: 'image',
              title: null,
              url: 'https://img.shields.io/npm/v/presidium.svg?style=flat',
              alt: 'npm version',
              position: {
                start: { line: 6, column: 2, offset: 297 },
                end: { line: 6, column: 71, offset: 366 }
              }
            }
          ],
          position: {
            start: { line: 6, column: 1, offset: 296 },
            end: { line: 6, column: 113, offset: 408 }
          }
        }
      ],
      position: {
        start: { line: 4, column: 1, offset: 80 },
        end: { line: 6, column: 113, offset: 408 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A library for creating web services.',
          position: {
            start: { line: 8, column: 1, offset: 410 },
            end: { line: 8, column: 37, offset: 446 }
          }
        }
      ],
      position: {
        start: { line: 8, column: 1, offset: 410 },
        end: { line: 8, column: 37, offset: 446 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Handle HTTP',
          position: {
            start: { line: 10, column: 4, offset: 451 },
            end: { line: 10, column: 15, offset: 462 }
          }
        }
      ],
      position: {
        start: { line: 10, column: 1, offset: 448 },
        end: { line: 10, column: 15, offset: 462 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const HTTP = require('presidium/HTTP')\n" +
        '\n' +
        'const server = HTTP.Server((request, response) => {\n' +
        "  response.writeHead(200, { 'Content-Type': 'application/json' })\n" +
        "  response.write(JSON.stringify({ greeting: 'Hello World' }))\n" +
        '  response.end()\n' +
        '})\n' +
        '\n' +
        'server.listen(3000)\n' +
        '\n' +
        "const http = new HTTP('http://localhost:3000/')\n" +
        '\n' +
        "http.get('/')\n" +
        '  .then(response => response.json())\n' +
        "  .then(console.log) // { greeting: 'Hello World' }",
      position: {
        start: { line: 11, column: 1, offset: 463 },
        end: { line: 27, column: 4, offset: 894 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Handle WebSocket',
          position: {
            start: { line: 29, column: 4, offset: 899 },
            end: { line: 29, column: 20, offset: 915 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 896 },
        end: { line: 29, column: 20, offset: 915 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const WebSocket = require('presidium/WebSocket')\n" +
        '\n' +
        'const server = new WebSocket.Server(websocket => {\n' +
        "  websocket.on('message', message => {\n" +
        "    console.log('Message from client:', message)\n" +
        "    websocket.send('Hello Client!')\n" +
        '  })\n' +
        "  websocket.on('close', () => {\n" +
        "    console.log('websocket closed')\n" +
        '  })\n' +
        '})\n' +
        'server.listen(1337)\n' +
        '\n' +
        "const websocket = new WebSocket('ws://localhost:1337/')\n" +
        "websocket.on('open', () => {\n" +
        "  websocket.send('Hello Server!')\n" +
        '})\n' +
        "websocket.on('message', message => {\n" +
        "  console.log('Message from server:', message)\n" +
        '})',
      position: {
        start: { line: 30, column: 1, offset: 916 },
        end: { line: 51, column: 4, offset: 1469 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'CRUD and Query DynamoDB',
          position: {
            start: { line: 53, column: 4, offset: 1474 },
            end: { line: 53, column: 27, offset: 1497 }
          }
        }
      ],
      position: {
        start: { line: 53, column: 1, offset: 1471 },
        end: { line: 53, column: 27, offset: 1497 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const DynamoDBTable = require('presidium/DynamoDBTable')\n" +
        'const DynamoDBGlobalSecondaryIndex =\n' +
        "require('presidium/DynamoDBGlobalSecondaryIndex')\n" +
        '\n' +
        'const awsCreds = {\n' +
        '  accessKeyId: process.env.AWS_ACCESS_KEY_ID,\n' +
        '  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,\n' +
        '  region: process.env.AWS_REGION,\n' +
        '}\n' +
        '\n' +
        'const myTable = new DynamoDBTable({\n' +
        "  name: 'my-table',\n" +
        "  key: [{ id: 'string' }],\n" +
        '  ...awsCreds,\n' +
        '})\n' +
        'await myTable.ready\n' +
        '\n' +
        'const myTypeAgeIndex = new DynamoDBGlobalSecondaryIndex({\n' +
        "  table: 'my-table',\n" +
        "  key: [{ type: 'string' }, { age: 'number' }],\n" +
        '  ...awsCreds,\n' +
        '})\n' +
        'await myTypeAgeIndex.ready\n' +
        '\n' +
        "await myTable.putItem({ id: { S: '1' }, name: { S: 'John' }, type: { S: 'person' } })\n" +
        "await myTable.updateItem({ id: { S: '1' } }, { age: { N: '32' } })\n" +
        '\n' +
        "await myTable.putItemJSON({ id: '2', name: 'Joe', age: 19, type: 'person' })\n" +
        "await myTable.putItemJSON({ id: '3', name: 'Jane', age: 33, type: 'person' })\n" +
        '\n' +
        '{\n' +
        "  const response = await myTable.getItem({ id: { S: '1' } }),\n" +
        '  console.log(response)\n' +
        "  // { Item: { id: { S: '1' }, name: { S: 'John' }, age: { N: '32' } } }\n" +
        '}\n' +
        '\n' +
        '{\n' +
        "  const response = await myTable.getItemJSON({ id: '1' })\n" +
        '  console.log(response)\n' +
        "  // { item: { id: '1', name: 'John', age: 32 } }\n" +
        '}\n' +
        '\n' +
        '{\n' +
        '  const response = await myTypeAgeIndex.query(\n' +
        "    'type = :type AND age < :age',\n" +
        "    { type: { S: 'person' }, age: { N: '100' } },\n" +
        '    { Limit: 2, ScanIndexForward: true },\n' +
        '  )\n' +
        '  console.log(response)\n' +
        '  // {\n' +
        '  //   Items: [\n' +
        "  //     { id: { S: '1' }, name: { S: 'John' }, age: { N: '32' }, type: { S: 'person' } },\n" +
        "  //     { id: { S: '2' }, name: { S: 'Joe' }, age: { N: '19' }, type: { S: 'person' } },\n" +
        '  //   ],\n' +
        '  //   Count: 2,\n' +
        '  //   ScannedCount: 2,\n' +
        '  // }\n' +
        '}\n' +
        '\n' +
        '{\n' +
        '  const response = await myTypeAgeIndex.queryJSON(\n' +
        "    'type = :type AND age < :age',\n" +
        "    { type: 'person', age: 100 },\n" +
        '    { Limit: 2, ScanIndexForward: true },\n' +
        '  )\n' +
        '  console.log(response)\n' +
        '  // {\n' +
        '  //   ItemsJSON: [\n' +
        "  //     { id: '1', name: 'John', age: 32, type: 'person' },\n" +
        "  //     { id: '2', name: 'Joe', age: 19, type: 'person' },\n" +
        '  //   ],\n' +
        '  //   Count: 2,\n' +
        '  //   ScannedCount: 2,\n' +
        '  // }\n' +
        '}\n' +
        '\n' +
        '{\n' +
        '  const ItemIterator = myTypeAgeIndex.queryItemsIterator(\n' +
        "    'type = :type AND age < :age',\n" +
        "    { type: { S: 'person' }, age: { N: '100' } },\n" +
        '    { ScanIndexForward: true },\n' +
        '  )\n' +
        '  for await (const Item of ItemIterator) {\n' +
        '    console.log(Item)\n' +
        "    // { id: { S: '2' }, name: { S: 'Joe' }, age: { N: '19' }, type: { S: 'person' } },\n" +
        "    // { id: { S: '1' }, name: { S: 'John' }, age: { N: '32' }, type: { S: 'person' } },\n" +
        "    // { id: { S: '3' }, name: { S: 'Jane' }, age: { N: '33' }, type: { S: 'person' } },\n" +
        '  }\n' +
        '}\n' +
        '\n' +
        '{\n' +
        '  const itemsIterator = myTypeAgeIndex.queryItemsIteratorJSON(\n' +
        "    'type = :type AND age < :age',\n" +
        "    { type: 'person', age: 100 },\n" +
        '    { ScanIndexForward: true },\n' +
        '  )\n' +
        '  for await (const item of itemsIterator) {\n' +
        '    console.log(item)\n' +
        "    // { id: '2', name: 'Joe', age: 19, type: 'person' }\n" +
        "    // { id: '1', name: 'John', age: 32, type: 'person' }\n" +
        "    // { id: '3', name: 'Jane', age: 33, type: 'person' }\n" +
        '  }\n' +
        '}',
      position: {
        start: { line: 54, column: 1, offset: 1498 },
        end: { line: 158, column: 4, offset: 4526 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Consume DynamoDB Streams',
          position: {
            start: { line: 160, column: 4, offset: 4531 },
            end: { line: 160, column: 28, offset: 4555 }
          }
        }
      ],
      position: {
        start: { line: 160, column: 1, offset: 4528 },
        end: { line: 160, column: 28, offset: 4555 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const DynamoDBTable = require('presidium/DynamoDBTable')\n" +
        "const DynamoDBStream = require('presidium/DynamoDBStream')\n" +
        '\n' +
        'const awsCreds = {\n' +
        '  accessKeyId: process.env.AWS_ACCESS_KEY_ID,\n' +
        '  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,\n' +
        '  region: process.env.AWS_REGION,\n' +
        '}\n' +
        '\n' +
        'const myTable = new DynamoDBTable({\n' +
        "  name: 'my-table',\n" +
        "  key: [{ id: 'string' }],\n" +
        '  ...awsCreds,\n' +
        '})\n' +
        'await myTable.ready\n' +
        '\n' +
        'const myStream = new DynamoDBStream({\n' +
        "  table: 'my-table',\n" +
        '  ...awsCreds,\n' +
        '})\n' +
        'await myStream.ready\n' +
        '\n' +
        'for await (const record of myStream) {\n' +
        '  console.log(record)\n' +
        '  // { dynamodb: { Keys: {...}, NewImage: {...}, OldImage: {...} }  }\n' +
        '  // { dynamodb: { Keys: {...}, NewImage: {...}, OldImage: {...} }  }\n' +
        '  // { dynamodb: { Keys: {...}, NewImage: {...}, OldImage: {...} }  }\n' +
        '}\n' +
        '\n' +
        'const myStreamJSON = new DynamoDBStream({\n' +
        "  table: 'my-table',\n" +
        '  ...awsCreds,\n' +
        '  JSON: true,\n' +
        '})\n' +
        'await myStream.ready\n' +
        '\n' +
        'for await (const record of myStreamJSON) {\n' +
        '  console.log(record)\n' +
        '  // { dynamodb: { KeysJSON: {...}, NewImageJSON: {...}, OldImageJSON: {...} }  }\n' +
        '  // { dynamodb: { KeysJSON: {...}, NewImageJSON: {...}, OldImageJSON: {...} }  }\n' +
        '  // { dynamodb: { KeysJSON: {...}, NewImageJSON: {...}, OldImageJSON: {...} }  }\n' +
        '}',
      position: {
        start: { line: 161, column: 1, offset: 4556 },
        end: { line: 204, column: 4, offset: 5771 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Upload to S3',
          position: {
            start: { line: 206, column: 4, offset: 5776 },
            end: { line: 206, column: 16, offset: 5788 }
          }
        }
      ],
      position: {
        start: { line: 206, column: 1, offset: 5773 },
        end: { line: 206, column: 16, offset: 5788 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const S3Bucket = require('presidium/S3Bucket')\n" +
        '\n' +
        'const awsCreds = {\n' +
        '  accessKeyId: process.env.AWS_ACCESS_KEY_ID,\n' +
        '  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,\n' +
        '  region: process.env.AWS_REGION,\n' +
        '}\n' +
        '\n' +
        'const myBucket = new S3Bucket({\n' +
        "  name: 'my-bucket',\n" +
        '  ...awsCreds,\n' +
        '})\n' +
        'await myBucket.ready\n' +
        '\n' +
        `await myBucket.putObject('some-key', '{"hello":"world"}', {\n` +
        "  ContentType: 'application/json',\n" +
        '})\n' +
        '\n' +
        '{\n' +
        "  const response = await myBucket.getObject('some-key')\n" +
        `  console.log(response) // { Etag: '...', Body: '{"hello":"world"}', ContentType: 'application/json' }\n` +
        '}\n' +
        '\n' +
        'await myBucket.deleteAllObjects()\n' +
        'await myBucket.delete()',
      position: {
        start: { line: 207, column: 1, offset: 5789 },
        end: { line: 233, column: 4, offset: 6424 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Build and Push Docker Images',
          position: {
            start: { line: 235, column: 4, offset: 6429 },
            end: { line: 235, column: 32, offset: 6457 }
          }
        }
      ],
      position: {
        start: { line: 235, column: 1, offset: 6426 },
        end: { line: 235, column: 32, offset: 6457 }
      }
    },
    {
      type: 'blockquote',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'No more --build-arg for npm tokens!',
              position: {
                start: { line: 236, column: 3, offset: 6460 },
                end: { line: 236, column: 38, offset: 6495 }
              }
            }
          ],
          position: {
            start: { line: 236, column: 3, offset: 6460 },
            end: { line: 236, column: 38, offset: 6495 }
          }
        }
      ],
      position: {
        start: { line: 236, column: 1, offset: 6458 },
        end: { line: 236, column: 38, offset: 6495 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const Docker = require('presidium/Docker')\n" +
        '\n' +
        "const myImage = 'my-app:1.0.0'\n" +
        '\n' +
        'const buildStream = await docker.buildImage(__dirname, {\n' +
        '  image: myImage,\n' +
        "  ignore: ['.github', 'node_modules'],\n" +
        '  archive: {\n' +
        '    Dockerfile: `\n' +
        'FROM node:15-alpine\n' +
        'WORKDIR /opt\n' +
        'COPY . .\n' +
        'RUN echo //registry.npmjs.org/:_authToken=${myNpmToken} > .npmrc \\\n' +
        '  && npm i \\\n' +
        '  && rm .npmrc\n' +
        '  && rm Dockerfile\n' +
        'EXPOSE 8080\n' +
        'CMD ["npm", "start"]\n' +
        '    `,\n' +
        '  },\n' +
        '})\n' +
        '\n' +
        'buildStream.pipe(process.stdout)\n' +
        '\n' +
        "buildStream.on('end', () => {\n" +
        '  const pushStream = await docker.pushImage({\n' +
        '    image: myImage,\n' +
        "    repository: 'my-registry.io',\n" +
        '  })\n' +
        '  pushStream.pipe(process.stdout)\n' +
        '})',
      position: {
        start: { line: 237, column: 1, offset: 6496 },
        end: { line: 269, column: 4, offset: 7145 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Run Docker Containers',
          position: {
            start: { line: 271, column: 4, offset: 7150 },
            end: { line: 271, column: 25, offset: 7171 }
          }
        }
      ],
      position: {
        start: { line: 271, column: 1, offset: 7147 },
        end: { line: 271, column: 25, offset: 7171 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const Docker = require('presidium/Docker')\n" +
        '\n' +
        'const docker = new Docker()\n' +
        '\n' +
        'const runStream = await docker.runContainer({\n' +
        "  image: 'node:15-alpine',\n" +
        "  env: { FOO: 'Example' },\n" +
        "  cmd: ['node', '-e', 'console.log(process.env.FOO)'],\n" +
        '  rm: true,\n' +
        '})\n' +
        '\n' +
        'runStream.pipe(process.stdout) // Example',
      position: {
        start: { line: 272, column: 1, offset: 7172 },
        end: { line: 285, column: 4, offset: 7475 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Deploy Docker Swarm Services',
          position: {
            start: { line: 287, column: 4, offset: 7480 },
            end: { line: 287, column: 32, offset: 7508 }
          }
        }
      ],
      position: {
        start: { line: 287, column: 1, offset: 7477 },
        end: { line: 287, column: 32, offset: 7508 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const Docker = require('presidium/Docker')\n" +
        '\n' +
        'const docker = new Docker()\n' +
        '\n' +
        '// initialize docker swarm\n' +
        "await docker.initSwarm('eth0:2377')\n" +
        '\n' +
        'const myService = await docker.createService({\n' +
        "  name: 'my-service',\n" +
        "  image: 'nginx:1.19',\n" +
        '  publish: { 80: 80 },\n' +
        "  healthCheck: ['curl', '[::1]'],\n" +
        '  replicas: 5,\n' +
        '})\n' +
        '// new nginx service is deploying to the docker swarm',
      position: {
        start: { line: 288, column: 1, offset: 7509 },
        end: { line: 304, column: 4, offset: 7884 }
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Support',
          position: {
            start: { line: 306, column: 3, offset: 7888 },
            end: { line: 306, column: 10, offset: 7895 }
          }
        }
      ],
      position: {
        start: { line: 306, column: 1, offset: 7886 },
        end: { line: 306, column: 10, offset: 7895 }
      }
    },
    {
      type: 'list',
      ordered: false,
      start: null,
      spread: false,
      children: [
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: 'minimum Node.js version: 16',
                  position: {
                    start: { line: 307, column: 4, offset: 7899 },
                    end: { line: 307, column: 31, offset: 7926 }
                  }
                }
              ],
              position: {
                start: { line: 307, column: 4, offset: 7899 },
                end: { line: 307, column: 31, offset: 7926 }
              }
            }
          ],
          position: {
            start: { line: 307, column: 2, offset: 7897 },
            end: { line: 307, column: 31, offset: 7926 }
          }
        }
      ],
      position: {
        start: { line: 307, column: 2, offset: 7897 },
        end: { line: 307, column: 31, offset: 7926 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 308, column: 1, offset: 7927 }
  }
}