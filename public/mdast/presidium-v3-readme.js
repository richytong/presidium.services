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
          type: 'text',
          value: 'License: ',
          position: {
            start: { line: 4, column: 1, offset: 80 },
            end: { line: 4, column: 10, offset: 89 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://cloutsworld.com/en-us/legal/license/cfoss',
          children: [
            {
              type: 'text',
              value: 'CFOSS',
              position: {
                start: { line: 4, column: 11, offset: 90 },
                end: { line: 4, column: 16, offset: 95 }
              }
            }
          ],
          position: {
            start: { line: 4, column: 10, offset: 89 },
            end: { line: 4, column: 68, offset: 147 }
          }
        }
      ],
      position: {
        start: { line: 4, column: 1, offset: 80 },
        end: { line: 4, column: 68, offset: 147 }
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
            start: { line: 6, column: 1, offset: 149 },
            end: { line: 6, column: 87, offset: 235 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 6, column: 87, offset: 235 },
            end: { line: 7, column: 1, offset: 236 }
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
                start: { line: 7, column: 2, offset: 237 },
                end: { line: 7, column: 85, offset: 320 }
              }
            }
          ],
          position: {
            start: { line: 7, column: 1, offset: 236 },
            end: { line: 7, column: 129, offset: 364 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 7, column: 129, offset: 364 },
            end: { line: 8, column: 1, offset: 365 }
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
                start: { line: 8, column: 2, offset: 366 },
                end: { line: 8, column: 71, offset: 435 }
              }
            }
          ],
          position: {
            start: { line: 8, column: 1, offset: 365 },
            end: { line: 8, column: 113, offset: 477 }
          }
        }
      ],
      position: {
        start: { line: 6, column: 1, offset: 149 },
        end: { line: 8, column: 113, offset: 477 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A library for creating web services.',
          position: {
            start: { line: 10, column: 1, offset: 479 },
            end: { line: 10, column: 37, offset: 515 }
          }
        }
      ],
      position: {
        start: { line: 10, column: 1, offset: 479 },
        end: { line: 10, column: 37, offset: 515 }
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
            start: { line: 12, column: 4, offset: 520 },
            end: { line: 12, column: 16, offset: 532 }
          }
        }
      ],
      position: {
        start: { line: 12, column: 1, offset: 517 },
        end: { line: 12, column: 16, offset: 532 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 13, column: 1, offset: 533 },
            end: { line: 13, column: 6, offset: 538 }
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
                start: { line: 13, column: 7, offset: 539 },
                end: { line: 13, column: 10, offset: 542 }
              }
            }
          ],
          position: {
            start: { line: 13, column: 6, offset: 538 },
            end: { line: 13, column: 78, offset: 610 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 13, column: 78, offset: 610 },
            end: { line: 13, column: 79, offset: 611 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 533 },
        end: { line: 13, column: 79, offset: 611 }
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i presidium',
      position: {
        start: { line: 14, column: 1, offset: 612 },
        end: { line: 16, column: 4, offset: 639 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'require Presidium in ',
          position: {
            start: { line: 18, column: 1, offset: 641 },
            end: { line: 18, column: 22, offset: 662 }
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
                start: { line: 18, column: 23, offset: 663 },
                end: { line: 18, column: 31, offset: 671 }
              }
            }
          ],
          position: {
            start: { line: 18, column: 22, offset: 662 },
            end: { line: 18, column: 106, offset: 746 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 18, column: 106, offset: 746 },
            end: { line: 18, column: 107, offset: 747 }
          }
        }
      ],
      position: {
        start: { line: 18, column: 1, offset: 641 },
        end: { line: 18, column: 107, offset: 747 }
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
        start: { line: 19, column: 1, offset: 748 },
        end: { line: 31, column: 4, offset: 1111 }
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
                start: { line: 33, column: 5, offset: 1117 },
                end: { line: 33, column: 16, offset: 1128 }
              }
            }
          ],
          position: {
            start: { line: 33, column: 4, offset: 1116 },
            end: { line: 33, column: 55, offset: 1167 }
          }
        }
      ],
      position: {
        start: { line: 33, column: 1, offset: 1113 },
        end: { line: 33, column: 55, offset: 1167 }
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
        start: { line: 34, column: 1, offset: 1168 },
        end: { line: 50, column: 4, offset: 1599 }
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
                start: { line: 52, column: 5, offset: 1605 },
                end: { line: 52, column: 33, offset: 1633 }
              }
            }
          ],
          position: {
            start: { line: 52, column: 4, offset: 1604 },
            end: { line: 52, column: 77, offset: 1677 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 1601 },
        end: { line: 52, column: 77, offset: 1677 }
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
        start: { line: 53, column: 1, offset: 1678 },
        end: { line: 74, column: 4, offset: 2231 }
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
                start: { line: 76, column: 5, offset: 2237 },
                end: { line: 76, column: 62, offset: 2294 }
              }
            }
          ],
          position: {
            start: { line: 76, column: 4, offset: 2236 },
            end: { line: 76, column: 110, offset: 2342 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 2233 },
        end: { line: 76, column: 110, offset: 2342 }
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
        start: { line: 77, column: 1, offset: 2343 },
        end: { line: 178, column: 4, offset: 5322 }
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
                start: { line: 180, column: 5, offset: 5328 },
                end: { line: 180, column: 33, offset: 5356 }
              }
            }
          ],
          position: {
            start: { line: 180, column: 4, offset: 5327 },
            end: { line: 180, column: 82, offset: 5405 }
          }
        }
      ],
      position: {
        start: { line: 180, column: 1, offset: 5324 },
        end: { line: 180, column: 82, offset: 5405 }
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
        start: { line: 181, column: 1, offset: 5406 },
        end: { line: 222, column: 4, offset: 6604 }
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
                start: { line: 224, column: 5, offset: 6610 },
                end: { line: 224, column: 36, offset: 6641 }
              }
            }
          ],
          position: {
            start: { line: 224, column: 4, offset: 6609 },
            end: { line: 224, column: 79, offset: 6684 }
          }
        }
      ],
      position: {
        start: { line: 224, column: 1, offset: 6606 },
        end: { line: 224, column: 79, offset: 6684 }
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
        start: { line: 225, column: 1, offset: 6685 },
        end: { line: 248, column: 4, offset: 7289 }
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
                start: { line: 250, column: 5, offset: 7295 },
                end: { line: 250, column: 33, offset: 7323 }
              }
            }
          ],
          position: {
            start: { line: 250, column: 4, offset: 7294 },
            end: { line: 250, column: 74, offset: 7364 }
          }
        }
      ],
      position: {
        start: { line: 250, column: 1, offset: 7291 },
        end: { line: 250, column: 74, offset: 7364 }
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
        start: { line: 251, column: 1, offset: 7365 },
        end: { line: 289, column: 4, offset: 8147 }
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
                start: { line: 291, column: 5, offset: 8153 },
                end: { line: 291, column: 26, offset: 8174 }
              }
            }
          ],
          position: {
            start: { line: 291, column: 4, offset: 8152 },
            end: { line: 291, column: 67, offset: 8215 }
          }
        }
      ],
      position: {
        start: { line: 291, column: 1, offset: 8149 },
        end: { line: 291, column: 67, offset: 8215 }
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
        start: { line: 292, column: 1, offset: 8216 },
        end: { line: 305, column: 4, offset: 8519 }
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
                start: { line: 307, column: 5, offset: 8525 },
                end: { line: 307, column: 33, offset: 8553 }
              }
            }
          ],
          position: {
            start: { line: 307, column: 4, offset: 8524 },
            end: { line: 307, column: 74, offset: 8594 }
          }
        }
      ],
      position: {
        start: { line: 307, column: 1, offset: 8521 },
        end: { line: 307, column: 74, offset: 8594 }
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
        start: { line: 308, column: 1, offset: 8595 },
        end: { line: 324, column: 4, offset: 8952 }
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
                start: { line: 326, column: 5, offset: 8958 },
                end: { line: 326, column: 50, offset: 9003 }
              }
            }
          ],
          position: {
            start: { line: 326, column: 4, offset: 8957 },
            end: { line: 326, column: 105, offset: 9058 }
          }
        }
      ],
      position: {
        start: { line: 326, column: 1, offset: 8954 },
        end: { line: 326, column: 105, offset: 9058 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const GoogleChromeForTesting = require('presidium/GoogleChromeForTesting')\n" +
        "const GoogleChromeDevTools = require('presidium/GoogleChromeDevTools')\n" +
        '\n' +
        'const googleChromeForTesting = new GoogleChromeForTesting()\n' +
        'await googleChromeForTesting.init() // downloads Google Chrome for Testing\n' +
        '\n' +
        'const googleChromeDevTools = new GoogleChromeDevTools(googleChromeForTesting)\n' +
        'await googleChromeDevTools.init() // connects to the DevTools server\n' +
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
        start: { line: 327, column: 1, offset: 9059 },
        end: { line: 353, column: 4, offset: 10035 }
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
            start: { line: 355, column: 3, offset: 10039 },
            end: { line: 355, column: 10, offset: 10046 }
          }
        }
      ],
      position: {
        start: { line: 355, column: 1, offset: 10037 },
        end: { line: 355, column: 10, offset: 10046 }
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
                    start: { line: 356, column: 4, offset: 10050 },
                    end: { line: 356, column: 31, offset: 10077 }
                  }
                }
              ],
              position: {
                start: { line: 356, column: 4, offset: 10050 },
                end: { line: 356, column: 31, offset: 10077 }
              }
            }
          ],
          position: {
            start: { line: 356, column: 2, offset: 10048 },
            end: { line: 356, column: 31, offset: 10077 }
          }
        }
      ],
      position: {
        start: { line: 356, column: 2, offset: 10048 },
        end: { line: 356, column: 31, offset: 10077 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 357, column: 1, offset: 10078 }
  }
}