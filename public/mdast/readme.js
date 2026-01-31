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
        "const DynamoDBGlobalSecondaryIndex = require('presidium/DynamoDBGlobalSecondaryIndex')\n" +
        "const AwsCredentials = require('presidium/AwsCredentials')\n" +
        '\n' +
        "const awsCreds = await AwsCredentials('default')\n" +
        "awsCreds.region = 'us-east-1'\n" +
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
        "  const data = await myTable.getItem({ id: { S: '1' } }),\n" +
        '  console.log(data)\n' +
        "  // { Item: { id: { S: '1' }, name: { S: 'John' }, age: { N: '32' } } }\n" +
        '}\n' +
        '\n' +
        '{\n' +
        "  const data = await myTable.getItemJSON({ id: '1' })\n" +
        '  console.log(data)\n' +
        "  // { item: { id: '1', name: 'John', age: 32 } }\n" +
        '}\n' +
        '\n' +
        '{\n' +
        '  const data = await myTypeAgeIndex.query(\n' +
        "    'type = :type AND age < :age',\n" +
        "    { type: { S: 'person' }, age: { N: '100' } },\n" +
        '    { Limit: 2, ScanIndexForward: true },\n' +
        '  )\n' +
        '  console.log(data)\n' +
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
        '  const data = await myTypeAgeIndex.queryJSON(\n' +
        "    'type = :type AND age < :age',\n" +
        "    { type: 'person', age: 100 },\n" +
        '    { Limit: 2, ScanIndexForward: true },\n' +
        '  )\n' +
        '  console.log(data)\n' +
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
        end: { line: 155, column: 4, offset: 4477 }
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
            start: { line: 157, column: 4, offset: 4482 },
            end: { line: 157, column: 28, offset: 4506 }
          }
        }
      ],
      position: {
        start: { line: 157, column: 1, offset: 4479 },
        end: { line: 157, column: 28, offset: 4506 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const DynamoDBTable = require('presidium/DynamoDBTable')\n" +
        "const DynamoDBStream = require('presidium/DynamoDBStream')\n" +
        "const AwsCredentials = require('presidium/AwsCredentials')\n" +
        '\n' +
        "const awsCreds = await AwsCredentials('default')\n" +
        "awsCreds.region = 'us-east-1'\n" +
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
        start: { line: 158, column: 1, offset: 4507 },
        end: { line: 199, column: 4, offset: 5705 }
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
            start: { line: 201, column: 4, offset: 5710 },
            end: { line: 201, column: 16, offset: 5722 }
          }
        }
      ],
      position: {
        start: { line: 201, column: 1, offset: 5707 },
        end: { line: 201, column: 16, offset: 5722 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const S3Bucket = require('presidium/S3Bucket')\n" +
        "const AwsCredentials = require('presidium/AwsCredentials')\n" +
        '\n' +
        "const awsCreds = await AwsCredentials('default')\n" +
        "awsCreds.region = 'us-east-1'\n" +
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
        "const data = await myBucket.getObject('some-key')\n" +
        'console.log(data)\n' +
        "// { Etag: '...', Body: <Buffer 7b 22 68 ...>, ContentType: 'application/json' }\n" +
        '\n' +
        'await myBucket.deleteAllObjects()\n' +
        'await myBucket.delete()',
      position: {
        start: { line: 202, column: 1, offset: 5723 },
        end: { line: 225, column: 4, offset: 6327 }
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
            start: { line: 227, column: 4, offset: 6332 },
            end: { line: 227, column: 32, offset: 6360 }
          }
        }
      ],
      position: {
        start: { line: 227, column: 1, offset: 6329 },
        end: { line: 227, column: 32, offset: 6360 }
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
                start: { line: 228, column: 3, offset: 6363 },
                end: { line: 228, column: 38, offset: 6398 }
              }
            }
          ],
          position: {
            start: { line: 228, column: 3, offset: 6363 },
            end: { line: 228, column: 38, offset: 6398 }
          }
        }
      ],
      position: {
        start: { line: 228, column: 1, offset: 6361 },
        end: { line: 228, column: 38, offset: 6398 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const Docker = require('presidium/Docker')\n" +
        "const NpmToken = require('presidium/NpmToken')\n" +
        "const fs = require('fs')\n" +
        '\n' +
        "const myImage = 'my-app:1.0.0'\n" +
        '\n' +
        "const npmrc = fs.createWriteStream('.npmrc')\n" +
        'npmrc.write(`//registry.npmjs.org/:_authToken=${await NpmToken()}`)\n' +
        'npmrc.end()\n' +
        '\n' +
        'const buildStream = await docker.buildImage(__dirname, {\n' +
        '  image: myImage,\n' +
        "  ignore: ['.github', 'node_modules'],\n" +
        '  archive: {\n' +
        '    Dockerfile: `\n' +
        'FROM node:15-alpine\n' +
        'WORKDIR /opt\n' +
        'COPY . .\n' +
        'RUN npm i \\\n' +
        '  && rm .npmrc \\\n' +
        '  && rm Dockerfile\n' +
        'EXPOSE 8080\n' +
        'CMD ["npm", "start"]\n' +
        '    `,\n' +
        '  },\n' +
        '})\n' +
        '\n' +
        'buildStream.pipe(process.stdout)\n' +
        "await new Promise(resolve => buildStream.on('end', resolve))\n" +
        '\n' +
        'const pushStream = await docker.pushImage({\n' +
        '  image: myImage,\n' +
        "  repository: 'my-registry.io',\n" +
        '})\n' +
        'pushStream.pipe(process.stdout)',
      position: {
        start: { line: 229, column: 1, offset: 6399 },
        end: { line: 265, column: 4, offset: 7198 }
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
            start: { line: 267, column: 4, offset: 7203 },
            end: { line: 267, column: 25, offset: 7224 }
          }
        }
      ],
      position: {
        start: { line: 267, column: 1, offset: 7200 },
        end: { line: 267, column: 25, offset: 7224 }
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
        start: { line: 268, column: 1, offset: 7225 },
        end: { line: 281, column: 4, offset: 7528 }
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
            start: { line: 283, column: 4, offset: 7533 },
            end: { line: 283, column: 32, offset: 7561 }
          }
        }
      ],
      position: {
        start: { line: 283, column: 1, offset: 7530 },
        end: { line: 283, column: 32, offset: 7561 }
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
        'await docker.createService({\n' +
        "  name: 'my-service',\n" +
        "  image: 'nginx:1.19',\n" +
        '  publish: { 80: 80 },\n' +
        "  healthCheck: ['curl', '[::1]'],\n" +
        '  replicas: 5,\n' +
        '})\n' +
        '// new nginx service is deploying to the docker swarm',
      position: {
        start: { line: 284, column: 1, offset: 7562 },
        end: { line: 300, column: 4, offset: 7919 }
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
            start: { line: 302, column: 3, offset: 7923 },
            end: { line: 302, column: 10, offset: 7930 }
          }
        }
      ],
      position: {
        start: { line: 302, column: 1, offset: 7921 },
        end: { line: 302, column: 10, offset: 7930 }
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
                    start: { line: 303, column: 4, offset: 7934 },
                    end: { line: 303, column: 31, offset: 7961 }
                  }
                }
              ],
              position: {
                start: { line: 303, column: 4, offset: 7934 },
                end: { line: 303, column: 31, offset: 7961 }
              }
            }
          ],
          position: {
            start: { line: 303, column: 2, offset: 7932 },
            end: { line: 303, column: 31, offset: 7961 }
          }
        }
      ],
      position: {
        start: { line: 303, column: 2, offset: 7932 },
        end: { line: 303, column: 31, offset: 7961 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 304, column: 1, offset: 7962 }
  }
}