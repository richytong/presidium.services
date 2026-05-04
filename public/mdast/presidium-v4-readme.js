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
          value: 'A library for creating web services.',
          position: {
            start: { line: 4, column: 1, offset: 80 },
            end: { line: 4, column: 37, offset: 116 }
          }
        }
      ],
      position: {
        start: { line: 4, column: 1, offset: 80 },
        end: { line: 4, column: 37, offset: 116 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Source code: ',
          position: {
            start: { line: 6, column: 1, offset: 118 },
            end: { line: 6, column: 14, offset: 131 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://github.com/richytong/presidium',
          children: [
            {
              type: 'text',
              value: 'GitHub',
              position: {
                start: { line: 6, column: 15, offset: 132 },
                end: { line: 6, column: 21, offset: 138 }
              }
            }
          ],
          position: {
            start: { line: 6, column: 14, offset: 131 },
            end: { line: 6, column: 62, offset: 179 }
          }
        },
        {
          type: 'text',
          value: ' |\nLicense: ',
          position: {
            start: { line: 6, column: 62, offset: 179 },
            end: { line: 7, column: 10, offset: 191 }
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
                start: { line: 7, column: 11, offset: 192 },
                end: { line: 7, column: 16, offset: 197 }
              }
            }
          ],
          position: {
            start: { line: 7, column: 10, offset: 191 },
            end: { line: 7, column: 68, offset: 249 }
          }
        }
      ],
      position: {
        start: { line: 6, column: 1, offset: 118 },
        end: { line: 7, column: 68, offset: 249 }
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
            start: { line: 9, column: 1, offset: 251 },
            end: { line: 9, column: 87, offset: 337 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 9, column: 87, offset: 337 },
            end: { line: 10, column: 1, offset: 338 }
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
                start: { line: 10, column: 2, offset: 339 },
                end: { line: 10, column: 85, offset: 422 }
              }
            }
          ],
          position: {
            start: { line: 10, column: 1, offset: 338 },
            end: { line: 10, column: 129, offset: 466 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 10, column: 129, offset: 466 },
            end: { line: 11, column: 1, offset: 467 }
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
                start: { line: 11, column: 2, offset: 468 },
                end: { line: 11, column: 71, offset: 537 }
              }
            }
          ],
          position: {
            start: { line: 11, column: 1, offset: 467 },
            end: { line: 11, column: 113, offset: 579 }
          }
        }
      ],
      position: {
        start: { line: 9, column: 1, offset: 251 },
        end: { line: 11, column: 113, offset: 579 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Presidium WebSocket',
          position: {
            start: { line: 13, column: 5, offset: 585 },
            end: { line: 13, column: 24, offset: 604 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 581 },
        end: { line: 13, column: 24, offset: 604 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Source code: ',
          position: {
            start: { line: 15, column: 1, offset: 606 },
            end: { line: 15, column: 14, offset: 619 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://github.com/richytong/presidium-websocket',
          children: [
            {
              type: 'text',
              value: 'GitHub',
              position: {
                start: { line: 15, column: 15, offset: 620 },
                end: { line: 15, column: 21, offset: 626 }
              }
            }
          ],
          position: {
            start: { line: 15, column: 14, offset: 619 },
            end: { line: 15, column: 72, offset: 677 }
          }
        },
        {
          type: 'text',
          value: ' |\nLicense: ',
          position: {
            start: { line: 15, column: 72, offset: 677 },
            end: { line: 16, column: 10, offset: 689 }
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
                start: { line: 16, column: 11, offset: 690 },
                end: { line: 16, column: 16, offset: 695 }
              }
            }
          ],
          position: {
            start: { line: 16, column: 10, offset: 689 },
            end: { line: 16, column: 68, offset: 747 }
          }
        }
      ],
      position: {
        start: { line: 15, column: 1, offset: 606 },
        end: { line: 16, column: 68, offset: 747 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: 'https://github.com/richytong/presidium-websocket/workflows/Node.js%20CI/badge.svg',
          alt: 'Node.js CI',
          position: {
            start: { line: 18, column: 1, offset: 749 },
            end: { line: 18, column: 97, offset: 845 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 18, column: 97, offset: 845 },
            end: { line: 19, column: 1, offset: 846 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://codecov.io/gh/richytong/presidium-websocket',
          children: [
            {
              type: 'image',
              title: null,
              url: 'https://codecov.io/gh/richytong/presidium-websocket/branch/master/graph/badge.svg',
              alt: 'codecov',
              position: {
                start: { line: 19, column: 2, offset: 847 },
                end: { line: 19, column: 95, offset: 940 }
              }
            }
          ],
          position: {
            start: { line: 19, column: 1, offset: 846 },
            end: { line: 19, column: 149, offset: 994 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 19, column: 149, offset: 994 },
            end: { line: 20, column: 1, offset: 995 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://www.npmjs.com/package/presidium-websocket',
          children: [
            {
              type: 'image',
              title: null,
              url: 'https://img.shields.io/npm/v/presidium-websocket.svg?style=flat',
              alt: 'npm version',
              position: {
                start: { line: 20, column: 2, offset: 996 },
                end: { line: 20, column: 81, offset: 1075 }
              }
            }
          ],
          position: {
            start: { line: 20, column: 1, offset: 995 },
            end: { line: 20, column: 133, offset: 1127 }
          }
        }
      ],
      position: {
        start: { line: 18, column: 1, offset: 749 },
        end: { line: 20, column: 133, offset: 1127 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Presidium DB',
          position: {
            start: { line: 22, column: 5, offset: 1133 },
            end: { line: 22, column: 17, offset: 1145 }
          }
        }
      ],
      position: {
        start: { line: 22, column: 1, offset: 1129 },
        end: { line: 22, column: 17, offset: 1145 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Source code: ',
          position: {
            start: { line: 24, column: 1, offset: 1147 },
            end: { line: 24, column: 14, offset: 1160 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://github.com/richytong/presidium-db',
          children: [
            {
              type: 'text',
              value: 'GitHub',
              position: {
                start: { line: 24, column: 15, offset: 1161 },
                end: { line: 24, column: 21, offset: 1167 }
              }
            }
          ],
          position: {
            start: { line: 24, column: 14, offset: 1160 },
            end: { line: 24, column: 65, offset: 1211 }
          }
        },
        {
          type: 'text',
          value: ' |\nLicense: ',
          position: {
            start: { line: 24, column: 65, offset: 1211 },
            end: { line: 25, column: 10, offset: 1223 }
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
                start: { line: 25, column: 11, offset: 1224 },
                end: { line: 25, column: 16, offset: 1229 }
              }
            }
          ],
          position: {
            start: { line: 25, column: 10, offset: 1223 },
            end: { line: 25, column: 68, offset: 1281 }
          }
        }
      ],
      position: {
        start: { line: 24, column: 1, offset: 1147 },
        end: { line: 25, column: 68, offset: 1281 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: 'https://github.com/richytong/presidium-db/workflows/Node.js%20CI/badge.svg',
          alt: 'Node.js CI',
          position: {
            start: { line: 27, column: 1, offset: 1283 },
            end: { line: 27, column: 90, offset: 1372 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 27, column: 90, offset: 1372 },
            end: { line: 28, column: 1, offset: 1373 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://codecov.io/gh/richytong/presidium-db',
          children: [
            {
              type: 'image',
              title: null,
              url: 'https://codecov.io/gh/richytong/presidium-db/branch/master/graph/badge.svg',
              alt: 'codecov',
              position: {
                start: { line: 28, column: 2, offset: 1374 },
                end: { line: 28, column: 88, offset: 1460 }
              }
            }
          ],
          position: {
            start: { line: 28, column: 1, offset: 1373 },
            end: { line: 28, column: 135, offset: 1507 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 28, column: 135, offset: 1507 },
            end: { line: 29, column: 1, offset: 1508 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://www.npmjs.com/package/presidium-db',
          children: [
            {
              type: 'image',
              title: null,
              url: 'https://img.shields.io/npm/v/presidium-db.svg?style=flat',
              alt: 'npm version',
              position: {
                start: { line: 29, column: 2, offset: 1509 },
                end: { line: 29, column: 74, offset: 1581 }
              }
            }
          ],
          position: {
            start: { line: 29, column: 1, offset: 1508 },
            end: { line: 29, column: 119, offset: 1626 }
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 1283 },
        end: { line: 29, column: 119, offset: 1626 }
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
            start: { line: 31, column: 4, offset: 1631 },
            end: { line: 31, column: 16, offset: 1643 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 1628 },
        end: { line: 31, column: 16, offset: 1643 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 32, column: 1, offset: 1644 },
            end: { line: 32, column: 6, offset: 1649 }
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
                start: { line: 32, column: 7, offset: 1650 },
                end: { line: 32, column: 10, offset: 1653 }
              }
            }
          ],
          position: {
            start: { line: 32, column: 6, offset: 1649 },
            end: { line: 32, column: 78, offset: 1721 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 32, column: 78, offset: 1721 },
            end: { line: 32, column: 79, offset: 1722 }
          }
        }
      ],
      position: {
        start: { line: 32, column: 1, offset: 1644 },
        end: { line: 32, column: 79, offset: 1722 }
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i presidium',
      position: {
        start: { line: 33, column: 1, offset: 1723 },
        end: { line: 35, column: 4, offset: 1750 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'require Presidium in ',
          position: {
            start: { line: 37, column: 1, offset: 1752 },
            end: { line: 37, column: 22, offset: 1773 }
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
                start: { line: 37, column: 23, offset: 1774 },
                end: { line: 37, column: 31, offset: 1782 }
              }
            }
          ],
          position: {
            start: { line: 37, column: 22, offset: 1773 },
            end: { line: 37, column: 106, offset: 1857 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 37, column: 106, offset: 1857 },
            end: { line: 37, column: 107, offset: 1858 }
          }
        }
      ],
      position: {
        start: { line: 37, column: 1, offset: 1752 },
        end: { line: 37, column: 107, offset: 1858 }
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
        start: { line: 38, column: 1, offset: 1859 },
        end: { line: 50, column: 4, offset: 2222 }
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
                start: { line: 52, column: 5, offset: 2228 },
                end: { line: 52, column: 16, offset: 2239 }
              }
            }
          ],
          position: {
            start: { line: 52, column: 4, offset: 2227 },
            end: { line: 52, column: 55, offset: 2278 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 2224 },
        end: { line: 52, column: 55, offset: 2278 }
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
        start: { line: 53, column: 1, offset: 2279 },
        end: { line: 69, column: 4, offset: 2710 }
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
                start: { line: 71, column: 5, offset: 2716 },
                end: { line: 71, column: 33, offset: 2744 }
              }
            }
          ],
          position: {
            start: { line: 71, column: 4, offset: 2715 },
            end: { line: 71, column: 77, offset: 2788 }
          }
        }
      ],
      position: {
        start: { line: 71, column: 1, offset: 2712 },
        end: { line: 71, column: 77, offset: 2788 }
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
        start: { line: 72, column: 1, offset: 2789 },
        end: { line: 93, column: 4, offset: 3342 }
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
                start: { line: 95, column: 5, offset: 3348 },
                end: { line: 95, column: 62, offset: 3405 }
              }
            }
          ],
          position: {
            start: { line: 95, column: 4, offset: 3347 },
            end: { line: 95, column: 110, offset: 3453 }
          }
        }
      ],
      position: {
        start: { line: 95, column: 1, offset: 3344 },
        end: { line: 95, column: 110, offset: 3453 }
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
        start: { line: 96, column: 1, offset: 3454 },
        end: { line: 197, column: 4, offset: 6433 }
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
                start: { line: 199, column: 5, offset: 6439 },
                end: { line: 199, column: 33, offset: 6467 }
              }
            }
          ],
          position: {
            start: { line: 199, column: 4, offset: 6438 },
            end: { line: 199, column: 82, offset: 6516 }
          }
        }
      ],
      position: {
        start: { line: 199, column: 1, offset: 6435 },
        end: { line: 199, column: 82, offset: 6516 }
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
        start: { line: 200, column: 1, offset: 6517 },
        end: { line: 241, column: 4, offset: 7715 }
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
                start: { line: 243, column: 5, offset: 7721 },
                end: { line: 243, column: 36, offset: 7752 }
              }
            }
          ],
          position: {
            start: { line: 243, column: 4, offset: 7720 },
            end: { line: 243, column: 79, offset: 7795 }
          }
        }
      ],
      position: {
        start: { line: 243, column: 1, offset: 7717 },
        end: { line: 243, column: 79, offset: 7795 }
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
        start: { line: 244, column: 1, offset: 7796 },
        end: { line: 267, column: 4, offset: 8400 }
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
                start: { line: 269, column: 5, offset: 8406 },
                end: { line: 269, column: 33, offset: 8434 }
              }
            }
          ],
          position: {
            start: { line: 269, column: 4, offset: 8405 },
            end: { line: 269, column: 74, offset: 8475 }
          }
        }
      ],
      position: {
        start: { line: 269, column: 1, offset: 8402 },
        end: { line: 269, column: 74, offset: 8475 }
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
        start: { line: 270, column: 1, offset: 8476 },
        end: { line: 308, column: 4, offset: 9258 }
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
                start: { line: 310, column: 5, offset: 9264 },
                end: { line: 310, column: 26, offset: 9285 }
              }
            }
          ],
          position: {
            start: { line: 310, column: 4, offset: 9263 },
            end: { line: 310, column: 67, offset: 9326 }
          }
        }
      ],
      position: {
        start: { line: 310, column: 1, offset: 9260 },
        end: { line: 310, column: 67, offset: 9326 }
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
        start: { line: 311, column: 1, offset: 9327 },
        end: { line: 324, column: 4, offset: 9630 }
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
                start: { line: 326, column: 5, offset: 9636 },
                end: { line: 326, column: 33, offset: 9664 }
              }
            }
          ],
          position: {
            start: { line: 326, column: 4, offset: 9635 },
            end: { line: 326, column: 74, offset: 9705 }
          }
        }
      ],
      position: {
        start: { line: 326, column: 1, offset: 9632 },
        end: { line: 326, column: 74, offset: 9705 }
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
        start: { line: 327, column: 1, offset: 9706 },
        end: { line: 343, column: 4, offset: 10063 }
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
                start: { line: 345, column: 5, offset: 10069 },
                end: { line: 345, column: 50, offset: 10114 }
              }
            }
          ],
          position: {
            start: { line: 345, column: 4, offset: 10068 },
            end: { line: 345, column: 105, offset: 10169 }
          }
        }
      ],
      position: {
        start: { line: 345, column: 1, offset: 10065 },
        end: { line: 345, column: 105, offset: 10169 }
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
        start: { line: 346, column: 1, offset: 10170 },
        end: { line: 372, column: 4, offset: 11146 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://presidium.services/docs/DiskHashTable',
          children: [
            {
              type: 'text',
              value: 'Store data on disk as a hash table',
              position: {
                start: { line: 374, column: 5, offset: 11152 },
                end: { line: 374, column: 39, offset: 11186 }
              }
            }
          ],
          position: {
            start: { line: 374, column: 4, offset: 11151 },
            end: { line: 374, column: 87, offset: 11234 }
          }
        }
      ],
      position: {
        start: { line: 374, column: 1, offset: 11148 },
        end: { line: 374, column: 87, offset: 11234 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const DiskHashTable = require('presidium-db/DiskHashTable')\n" +
        '\n' +
        'const ht = new DiskHashTable({\n' +
        "  storageFilepath: '/path/to/ht-storage-file',\n" +
        "  headerFilepath: '/path/to/ht-header-file',\n" +
        '  initialLength: 1024,\n' +
        '})\n' +
        'await ht.init()\n' +
        '\n' +
        "await ht.set('my-key', 'my-value')\n" +
        '\n' +
        "const myValue = await ht.get('my-key')\n" +
        "console.log(myValue) // 'my-value'\n" +
        '\n' +
        "await ht.delete('my-key')",
      position: {
        start: { line: 375, column: 1, offset: 11235 },
        end: { line: 391, column: 4, offset: 11616 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://presidium.services/docs/DiskSortedHashTable',
          children: [
            {
              type: 'text',
              value: 'Store data on disk as a sorted hash table',
              position: {
                start: { line: 393, column: 5, offset: 11622 },
                end: { line: 393, column: 46, offset: 11663 }
              }
            }
          ],
          position: {
            start: { line: 393, column: 4, offset: 11621 },
            end: { line: 393, column: 100, offset: 11717 }
          }
        }
      ],
      position: {
        start: { line: 393, column: 1, offset: 11618 },
        end: { line: 393, column: 100, offset: 11717 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const DiskSortedHashTable = require('presidium-db/DiskSortedHashTable')\n" +
        '\n' +
        'const sortedHt = new DiskSortedHashTable({\n' +
        "  storageFilepath: '/path/to/sortedHt-storage-file',\n" +
        "  headerFilepath: '/path/to/sortedHt-header-file',\n" +
        '  initialLength: 1024,\n' +
        '})\n' +
        'await sortedHt.init()\n' +
        '\n' +
        "await sortedHt.set('first-key', 'first-value', 1)\n" +
        "await sortedHt.set('second-key', 'second-value', 2)\n" +
        "await sortedHt.set('third-key', 'third-value', 3)\n" +
        '\n' +
        'for await (const value of sortedHt.forwardIterator()) {\n' +
        '  console.log(value) // first-value\n' +
        '                     // second-value\n' +
        '                     // third-value\n' +
        '}\n' +
        '\n' +
        'for await (const value of sortedHt.reverseIterator()) {\n' +
        '  console.log(value) // third-value\n' +
        '                     // second-value\n' +
        '                     // first-value\n' +
        '}\n' +
        '\n' +
        'for await (const value of sortedHt.forwardIterator({ startingSortValue: 2, endingSortValue: 3 })) {\n' +
        '  console.log(value) // second-value\n' +
        '                     // third-value\n' +
        '}\n' +
        '\n' +
        'for await (const value of sortedHt.reverseIterator({ startingSortValue: 2, endingSortValue: 1 })) {\n' +
        '  console.log(value) // second-value\n' +
        '                     // first-value\n' +
        '}',
      position: {
        start: { line: 394, column: 1, offset: 11718 },
        end: { line: 429, column: 4, offset: 12844 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'License',
          position: {
            start: { line: 431, column: 4, offset: 12849 },
            end: { line: 431, column: 11, offset: 12856 }
          }
        }
      ],
      position: {
        start: { line: 431, column: 1, offset: 12846 },
        end: { line: 431, column: 11, offset: 12856 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Presidium is distributed under the ',
          position: {
            start: { line: 432, column: 1, offset: 12857 },
            end: { line: 432, column: 36, offset: 12892 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://cloutsworld.com/en-us/legal/license/cfoss',
          children: [
            {
              type: 'text',
              value: 'CFOSS License',
              position: {
                start: { line: 432, column: 37, offset: 12893 },
                end: { line: 432, column: 50, offset: 12906 }
              }
            }
          ],
          position: {
            start: { line: 432, column: 36, offset: 12892 },
            end: { line: 432, column: 102, offset: 12958 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 432, column: 102, offset: 12958 },
            end: { line: 432, column: 103, offset: 12959 }
          }
        }
      ],
      position: {
        start: { line: 432, column: 1, offset: 12857 },
        end: { line: 432, column: 103, offset: 12959 }
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
            start: { line: 434, column: 3, offset: 12963 },
            end: { line: 434, column: 10, offset: 12970 }
          }
        }
      ],
      position: {
        start: { line: 434, column: 1, offset: 12961 },
        end: { line: 434, column: 10, offset: 12970 }
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
                    start: { line: 435, column: 4, offset: 12974 },
                    end: { line: 435, column: 31, offset: 13001 }
                  }
                }
              ],
              position: {
                start: { line: 435, column: 4, offset: 12974 },
                end: { line: 435, column: 31, offset: 13001 }
              }
            }
          ],
          position: {
            start: { line: 435, column: 2, offset: 12972 },
            end: { line: 435, column: 31, offset: 13001 }
          }
        }
      ],
      position: {
        start: { line: 435, column: 2, offset: 12972 },
        end: { line: 435, column: 31, offset: 13001 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 436, column: 1, offset: 13002 }
  }
}