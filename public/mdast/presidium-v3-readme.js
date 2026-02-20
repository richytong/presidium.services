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
          url: 'https://rubico.land/assets/presidium-logo-3-w200.jpg',
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
          value: 'Installation',
          position: {
            start: { line: 10, column: 4, offset: 451 },
            end: { line: 10, column: 16, offset: 463 }
          }
        }
      ],
      position: {
        start: { line: 10, column: 1, offset: 448 },
        end: { line: 10, column: 16, offset: 463 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 11, column: 1, offset: 464 },
            end: { line: 11, column: 6, offset: 469 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://docs.npmjs.com/downloading-and-installing-node-js-and-npm',
          children: [
            {
              type: 'text',
              value: 'npm',
              position: {
                start: { line: 11, column: 7, offset: 470 },
                end: { line: 11, column: 10, offset: 473 }
              }
            }
          ],
          position: {
            start: { line: 11, column: 6, offset: 469 },
            end: { line: 11, column: 78, offset: 541 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 11, column: 78, offset: 541 },
            end: { line: 11, column: 79, offset: 542 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 464 },
        end: { line: 11, column: 79, offset: 542 }
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i presidium',
      position: {
        start: { line: 12, column: 1, offset: 543 },
        end: { line: 14, column: 4, offset: 570 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'require Presidium in ',
          position: {
            start: { line: 16, column: 1, offset: 572 },
            end: { line: 16, column: 22, offset: 593 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://nodejs.org/docs/latest/api/modules.html#modules-commonjs-modules',
          children: [
            {
              type: 'text',
              value: 'CommonJS',
              position: {
                start: { line: 16, column: 23, offset: 594 },
                end: { line: 16, column: 31, offset: 602 }
              }
            }
          ],
          position: {
            start: { line: 16, column: 22, offset: 593 },
            end: { line: 16, column: 106, offset: 677 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 16, column: 106, offset: 677 },
            end: { line: 16, column: 107, offset: 678 }
          }
        }
      ],
      position: {
        start: { line: 16, column: 1, offset: 572 },
        end: { line: 16, column: 107, offset: 678 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// import Presidium globally\n' +
        "require('presidium/global')\n" +
        '\n' +
        '// import Presidium\n' +
        "const presidium = require('presidium')\n" +
        '\n' +
        '// import Presidium clients\n' +
        "const DynamoDBTable = require('presidium/DynamoDBTable')\n" +
        "const S3Bucket = require('presidium/S3Bucket')\n" +
        "const WebSocket = require('presidium/WebSocket')\n" +
        "const Readable = require('presidium/Readable')",
      position: {
        start: { line: 17, column: 1, offset: 679 },
        end: { line: 29, column: 4, offset: 1042 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://presidium.services/docs/HTTP',
          children: [
            {
              type: 'text',
              value: 'Handle HTTP',
              position: {
                start: { line: 31, column: 5, offset: 1048 },
                end: { line: 31, column: 16, offset: 1059 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 4, offset: 1047 },
            end: { line: 31, column: 55, offset: 1098 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 1044 },
        end: { line: 31, column: 55, offset: 1098 }
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
        start: { line: 32, column: 1, offset: 1099 },
        end: { line: 48, column: 4, offset: 1530 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://presidium.services/docs/WebSocket',
          children: [
            {
              type: 'text',
              value: 'Send messages with WebSocket',
              position: {
                start: { line: 50, column: 5, offset: 1536 },
                end: { line: 50, column: 33, offset: 1564 }
              }
            }
          ],
          position: {
            start: { line: 50, column: 4, offset: 1535 },
            end: { line: 50, column: 77, offset: 1608 }
          }
        }
      ],
      position: {
        start: { line: 50, column: 1, offset: 1532 },
        end: { line: 50, column: 77, offset: 1608 }
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
        start: { line: 51, column: 1, offset: 1609 },
        end: { line: 72, column: 4, offset: 2162 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://presidium.services/docs/DynamoDBTable',
          children: [
            {
              type: 'text',
              value: 'Create, read, update, delete, and query with AWS DynamoDB',
              position: {
                start: { line: 74, column: 5, offset: 2168 },
                end: { line: 74, column: 62, offset: 2225 }
              }
            }
          ],
          position: {
            start: { line: 74, column: 4, offset: 2167 },
            end: { line: 74, column: 110, offset: 2273 }
          }
        }
      ],
      position: {
        start: { line: 74, column: 1, offset: 2164 },
        end: { line: 74, column: 110, offset: 2273 }
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
        start: { line: 75, column: 1, offset: 2274 },
        end: { line: 176, column: 4, offset: 5253 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://presidium.services/docs/DynamoDBStream',
          children: [
            {
              type: 'text',
              value: 'Consume AWS DynamoDB Streams',
              position: {
                start: { line: 178, column: 5, offset: 5259 },
                end: { line: 178, column: 33, offset: 5287 }
              }
            }
          ],
          position: {
            start: { line: 178, column: 4, offset: 5258 },
            end: { line: 178, column: 82, offset: 5336 }
          }
        }
      ],
      position: {
        start: { line: 178, column: 1, offset: 5255 },
        end: { line: 178, column: 82, offset: 5336 }
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
        start: { line: 179, column: 1, offset: 5337 },
        end: { line: 220, column: 4, offset: 6535 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://presidium.services/docs/S3Bucket',
          children: [
            {
              type: 'text',
              value: 'Download and upload with AWS S3',
              position: {
                start: { line: 222, column: 5, offset: 6541 },
                end: { line: 222, column: 36, offset: 6572 }
              }
            }
          ],
          position: {
            start: { line: 222, column: 4, offset: 6540 },
            end: { line: 222, column: 79, offset: 6615 }
          }
        }
      ],
      position: {
        start: { line: 222, column: 1, offset: 6537 },
        end: { line: 222, column: 79, offset: 6615 }
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
        start: { line: 223, column: 1, offset: 6616 },
        end: { line: 246, column: 4, offset: 7220 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://presidium.services/docs/Docker',
          children: [
            {
              type: 'text',
              value: 'Build and push Docker images',
              position: {
                start: { line: 248, column: 5, offset: 7226 },
                end: { line: 248, column: 33, offset: 7254 }
              }
            }
          ],
          position: {
            start: { line: 248, column: 4, offset: 7225 },
            end: { line: 248, column: 74, offset: 7295 }
          }
        }
      ],
      position: {
        start: { line: 248, column: 1, offset: 7222 },
        end: { line: 248, column: 74, offset: 7295 }
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
        '\n' +
        "buildStream.on('end', () => {\n" +
        '  const pushStream = await docker.pushImage({\n' +
        '    image: myImage,\n' +
        "    repository: 'my-registry.io',\n" +
        '  })\n' +
        '  pushStream.pipe(process.stdout)\n' +
        '})\n',
      position: {
        start: { line: 249, column: 1, offset: 7296 },
        end: { line: 287, column: 4, offset: 8078 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://presidium.services/docs/Docker',
          children: [
            {
              type: 'text',
              value: 'Run Docker containers',
              position: {
                start: { line: 289, column: 5, offset: 8084 },
                end: { line: 289, column: 26, offset: 8105 }
              }
            }
          ],
          position: {
            start: { line: 289, column: 4, offset: 8083 },
            end: { line: 289, column: 67, offset: 8146 }
          }
        }
      ],
      position: {
        start: { line: 289, column: 1, offset: 8080 },
        end: { line: 289, column: 67, offset: 8146 }
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
        start: { line: 290, column: 1, offset: 8147 },
        end: { line: 303, column: 4, offset: 8450 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://presidium.services/docs/Docker',
          children: [
            {
              type: 'text',
              value: 'Deploy Docker Swarm services',
              position: {
                start: { line: 305, column: 5, offset: 8456 },
                end: { line: 305, column: 33, offset: 8484 }
              }
            }
          ],
          position: {
            start: { line: 305, column: 4, offset: 8455 },
            end: { line: 305, column: 74, offset: 8525 }
          }
        }
      ],
      position: {
        start: { line: 305, column: 1, offset: 8452 },
        end: { line: 305, column: 74, offset: 8525 }
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
        start: { line: 306, column: 1, offset: 8526 },
        end: { line: 322, column: 4, offset: 8883 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://presidium.services/docs/GoogleChromeDevTools',
          children: [
            {
              type: 'text',
              value: 'Automate tests with Google Chrome for Testing',
              position: {
                start: { line: 324, column: 5, offset: 8889 },
                end: { line: 324, column: 50, offset: 8934 }
              }
            }
          ],
          position: {
            start: { line: 324, column: 4, offset: 8888 },
            end: { line: 324, column: 105, offset: 8989 }
          }
        }
      ],
      position: {
        start: { line: 324, column: 1, offset: 8885 },
        end: { line: 324, column: 105, offset: 8989 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const GoogleChromeDevTools = require('presidium/GoogleChromeDevTools')\n" +
        '\n' +
        'const googleChromeDevTools = new GoogleChromeDevTools()\n' +
        'await googleChromeDevTools.init() // downloads Google Chrome for Testing\n' +
        '\n' +
        '// get targets\n' +
        'const targetsData = await googleChromeDevTools.Target.getTargets()\n' +
        "const pageTarget = targetsData.result.targetInfos.find(info => info.type == 'page')\n" +
        '\n' +
        '// attach to target\n' +
        'const attachToTargetData = await googleChromeDevTools.Target.attachToTarget({\n' +
        '  targetId: this.pageTarget.targetId,\n' +
        '  flatten: true,\n' +
        '})\n' +
        'const sessionId = attachToTargetData.result.sessionId\n' +
        '\n' +
        '// navigate to the home page\n' +
        'const data = await googleChromeDevTools.Page.navigate({\n' +
        '  sessionId: this.sessionId,\n' +
        '  url: `http://localhost:3000/`,\n' +
        '})',
      position: {
        start: { line: 325, column: 1, offset: 8990 },
        end: { line: 347, column: 4, offset: 9737 }
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
            start: { line: 349, column: 3, offset: 9741 },
            end: { line: 349, column: 10, offset: 9748 }
          }
        }
      ],
      position: {
        start: { line: 349, column: 1, offset: 9739 },
        end: { line: 349, column: 10, offset: 9748 }
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
                    start: { line: 350, column: 4, offset: 9752 },
                    end: { line: 350, column: 31, offset: 9779 }
                  }
                }
              ],
              position: {
                start: { line: 350, column: 4, offset: 9752 },
                end: { line: 350, column: 31, offset: 9779 }
              }
            }
          ],
          position: {
            start: { line: 350, column: 2, offset: 9750 },
            end: { line: 350, column: 31, offset: 9779 }
          }
        }
      ],
      position: {
        start: { line: 350, column: 2, offset: 9750 },
        end: { line: 350, column: 31, offset: 9779 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 351, column: 1, offset: 9780 }
  }
}