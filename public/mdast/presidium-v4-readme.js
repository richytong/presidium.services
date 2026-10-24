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
          value: 'The Presidium library.',
          position: {
            start: { line: 4, column: 1, offset: 80 },
            end: { line: 4, column: 23, offset: 102 }
          }
        }
      ],
      position: {
        start: { line: 4, column: 1, offset: 80 },
        end: { line: 4, column: 23, offset: 102 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Source code: ',
          position: {
            start: { line: 6, column: 1, offset: 104 },
            end: { line: 6, column: 14, offset: 117 }
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
                start: { line: 6, column: 15, offset: 118 },
                end: { line: 6, column: 21, offset: 124 }
              }
            }
          ],
          position: {
            start: { line: 6, column: 14, offset: 117 },
            end: { line: 6, column: 62, offset: 165 }
          }
        },
        {
          type: 'text',
          value: ' |\nLicense: ',
          position: {
            start: { line: 6, column: 62, offset: 165 },
            end: { line: 7, column: 10, offset: 177 }
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
                start: { line: 7, column: 11, offset: 178 },
                end: { line: 7, column: 16, offset: 183 }
              }
            }
          ],
          position: {
            start: { line: 7, column: 10, offset: 177 },
            end: { line: 7, column: 68, offset: 235 }
          }
        }
      ],
      position: {
        start: { line: 6, column: 1, offset: 104 },
        end: { line: 7, column: 68, offset: 235 }
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
            start: { line: 9, column: 1, offset: 237 },
            end: { line: 9, column: 87, offset: 323 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 9, column: 87, offset: 323 },
            end: { line: 10, column: 1, offset: 324 }
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
                start: { line: 10, column: 2, offset: 325 },
                end: { line: 10, column: 85, offset: 408 }
              }
            }
          ],
          position: {
            start: { line: 10, column: 1, offset: 324 },
            end: { line: 10, column: 129, offset: 452 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 10, column: 129, offset: 452 },
            end: { line: 11, column: 1, offset: 453 }
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
                start: { line: 11, column: 2, offset: 454 },
                end: { line: 11, column: 71, offset: 523 }
              }
            }
          ],
          position: {
            start: { line: 11, column: 1, offset: 453 },
            end: { line: 11, column: 113, offset: 565 }
          }
        }
      ],
      position: {
        start: { line: 9, column: 1, offset: 237 },
        end: { line: 11, column: 113, offset: 565 }
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
            start: { line: 13, column: 5, offset: 571 },
            end: { line: 13, column: 24, offset: 590 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 567 },
        end: { line: 13, column: 24, offset: 590 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Source code: ',
          position: {
            start: { line: 15, column: 1, offset: 592 },
            end: { line: 15, column: 14, offset: 605 }
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
                start: { line: 15, column: 15, offset: 606 },
                end: { line: 15, column: 21, offset: 612 }
              }
            }
          ],
          position: {
            start: { line: 15, column: 14, offset: 605 },
            end: { line: 15, column: 72, offset: 663 }
          }
        },
        {
          type: 'text',
          value: ' |\nLicense: ',
          position: {
            start: { line: 15, column: 72, offset: 663 },
            end: { line: 16, column: 10, offset: 675 }
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
                start: { line: 16, column: 11, offset: 676 },
                end: { line: 16, column: 16, offset: 681 }
              }
            }
          ],
          position: {
            start: { line: 16, column: 10, offset: 675 },
            end: { line: 16, column: 68, offset: 733 }
          }
        }
      ],
      position: {
        start: { line: 15, column: 1, offset: 592 },
        end: { line: 16, column: 68, offset: 733 }
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
            start: { line: 18, column: 1, offset: 735 },
            end: { line: 18, column: 97, offset: 831 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 18, column: 97, offset: 831 },
            end: { line: 19, column: 1, offset: 832 }
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
                start: { line: 19, column: 2, offset: 833 },
                end: { line: 19, column: 95, offset: 926 }
              }
            }
          ],
          position: {
            start: { line: 19, column: 1, offset: 832 },
            end: { line: 19, column: 149, offset: 980 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 19, column: 149, offset: 980 },
            end: { line: 20, column: 1, offset: 981 }
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
                start: { line: 20, column: 2, offset: 982 },
                end: { line: 20, column: 81, offset: 1061 }
              }
            }
          ],
          position: {
            start: { line: 20, column: 1, offset: 981 },
            end: { line: 20, column: 133, offset: 1113 }
          }
        }
      ],
      position: {
        start: { line: 18, column: 1, offset: 735 },
        end: { line: 20, column: 133, offset: 1113 }
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
            start: { line: 22, column: 5, offset: 1119 },
            end: { line: 22, column: 17, offset: 1131 }
          }
        }
      ],
      position: {
        start: { line: 22, column: 1, offset: 1115 },
        end: { line: 22, column: 17, offset: 1131 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Source code: ',
          position: {
            start: { line: 24, column: 1, offset: 1133 },
            end: { line: 24, column: 14, offset: 1146 }
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
                start: { line: 24, column: 15, offset: 1147 },
                end: { line: 24, column: 21, offset: 1153 }
              }
            }
          ],
          position: {
            start: { line: 24, column: 14, offset: 1146 },
            end: { line: 24, column: 65, offset: 1197 }
          }
        },
        {
          type: 'text',
          value: ' |\nLicense: ',
          position: {
            start: { line: 24, column: 65, offset: 1197 },
            end: { line: 25, column: 10, offset: 1209 }
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
                start: { line: 25, column: 11, offset: 1210 },
                end: { line: 25, column: 16, offset: 1215 }
              }
            }
          ],
          position: {
            start: { line: 25, column: 10, offset: 1209 },
            end: { line: 25, column: 68, offset: 1267 }
          }
        }
      ],
      position: {
        start: { line: 24, column: 1, offset: 1133 },
        end: { line: 25, column: 68, offset: 1267 }
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
            start: { line: 27, column: 1, offset: 1269 },
            end: { line: 27, column: 90, offset: 1358 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 27, column: 90, offset: 1358 },
            end: { line: 28, column: 1, offset: 1359 }
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
                start: { line: 28, column: 2, offset: 1360 },
                end: { line: 28, column: 88, offset: 1446 }
              }
            }
          ],
          position: {
            start: { line: 28, column: 1, offset: 1359 },
            end: { line: 28, column: 135, offset: 1493 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 28, column: 135, offset: 1493 },
            end: { line: 29, column: 1, offset: 1494 }
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
                start: { line: 29, column: 2, offset: 1495 },
                end: { line: 29, column: 74, offset: 1567 }
              }
            }
          ],
          position: {
            start: { line: 29, column: 1, offset: 1494 },
            end: { line: 29, column: 119, offset: 1612 }
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 1269 },
        end: { line: 29, column: 119, offset: 1612 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Presidium DB Client and Server',
          position: {
            start: { line: 31, column: 5, offset: 1618 },
            end: { line: 31, column: 35, offset: 1648 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 1614 },
        end: { line: 31, column: 35, offset: 1648 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Source code: ',
          position: {
            start: { line: 33, column: 1, offset: 1650 },
            end: { line: 33, column: 14, offset: 1663 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://github.com/richytong/presidium-db-client-server',
          children: [
            {
              type: 'text',
              value: 'GitHub',
              position: {
                start: { line: 33, column: 15, offset: 1664 },
                end: { line: 33, column: 21, offset: 1670 }
              }
            }
          ],
          position: {
            start: { line: 33, column: 14, offset: 1663 },
            end: { line: 33, column: 79, offset: 1728 }
          }
        },
        {
          type: 'text',
          value: ' |\nLicense: ',
          position: {
            start: { line: 33, column: 79, offset: 1728 },
            end: { line: 34, column: 10, offset: 1740 }
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
                start: { line: 34, column: 11, offset: 1741 },
                end: { line: 34, column: 16, offset: 1746 }
              }
            }
          ],
          position: {
            start: { line: 34, column: 10, offset: 1740 },
            end: { line: 34, column: 68, offset: 1798 }
          }
        }
      ],
      position: {
        start: { line: 33, column: 1, offset: 1650 },
        end: { line: 34, column: 68, offset: 1798 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: 'https://github.com/richytong/presidium-db-client-server/workflows/Node.js%20CI/badge.svg',
          alt: 'Node.js CI',
          position: {
            start: { line: 36, column: 1, offset: 1800 },
            end: { line: 36, column: 104, offset: 1903 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 36, column: 104, offset: 1903 },
            end: { line: 37, column: 1, offset: 1904 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://codecov.io/gh/richytong/presidium-db-client-server',
          children: [
            {
              type: 'image',
              title: null,
              url: 'https://codecov.io/gh/richytong/presidium-db-client-server/graph/badge.svg?token=07P6G8GIOQ',
              alt: 'codecov',
              position: {
                start: { line: 37, column: 2, offset: 1905 },
                end: { line: 37, column: 105, offset: 2008 }
              }
            }
          ],
          position: {
            start: { line: 37, column: 1, offset: 1904 },
            end: { line: 37, column: 166, offset: 2069 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 37, column: 166, offset: 2069 },
            end: { line: 38, column: 1, offset: 2070 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://www.npmjs.com/package/presidium-db-client-server',
          children: [
            {
              type: 'image',
              title: null,
              url: 'https://img.shields.io/npm/v/presidium-db-client-server.svg?style=flat',
              alt: 'npm version',
              position: {
                start: { line: 38, column: 2, offset: 2071 },
                end: { line: 38, column: 88, offset: 2157 }
              }
            }
          ],
          position: {
            start: { line: 38, column: 1, offset: 2070 },
            end: { line: 38, column: 147, offset: 2216 }
          }
        }
      ],
      position: {
        start: { line: 36, column: 1, offset: 1800 },
        end: { line: 38, column: 147, offset: 2216 }
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
            start: { line: 40, column: 4, offset: 2221 },
            end: { line: 40, column: 16, offset: 2233 }
          }
        }
      ],
      position: {
        start: { line: 40, column: 1, offset: 2218 },
        end: { line: 40, column: 16, offset: 2233 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 41, column: 1, offset: 2234 },
            end: { line: 41, column: 6, offset: 2239 }
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
                start: { line: 41, column: 7, offset: 2240 },
                end: { line: 41, column: 10, offset: 2243 }
              }
            }
          ],
          position: {
            start: { line: 41, column: 6, offset: 2239 },
            end: { line: 41, column: 78, offset: 2311 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 41, column: 78, offset: 2311 },
            end: { line: 41, column: 79, offset: 2312 }
          }
        }
      ],
      position: {
        start: { line: 41, column: 1, offset: 2234 },
        end: { line: 41, column: 79, offset: 2312 }
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i presidium',
      position: {
        start: { line: 42, column: 1, offset: 2313 },
        end: { line: 44, column: 4, offset: 2340 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'require Presidium in ',
          position: {
            start: { line: 46, column: 1, offset: 2342 },
            end: { line: 46, column: 22, offset: 2363 }
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
                start: { line: 46, column: 23, offset: 2364 },
                end: { line: 46, column: 31, offset: 2372 }
              }
            }
          ],
          position: {
            start: { line: 46, column: 22, offset: 2363 },
            end: { line: 46, column: 106, offset: 2447 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 46, column: 106, offset: 2447 },
            end: { line: 46, column: 107, offset: 2448 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 2342 },
        end: { line: 46, column: 107, offset: 2448 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// import Presidium globally\n' +
        'require("presidium/global")\n' +
        '\n' +
        '// import Presidium\n' +
        'const presidium = require("presidium")\n' +
        '\n' +
        '// import Presidium clients\n' +
        'const DynamoDBTable = require("presidium/DynamoDBTable")\n' +
        'const S3Bucket = require("presidium/S3Bucket")\n' +
        'const WebSocket = require("presidium/WebSocket")\n' +
        'const Readable = require("presidium/Readable")',
      position: {
        start: { line: 47, column: 1, offset: 2449 },
        end: { line: 59, column: 4, offset: 2812 }
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
                start: { line: 61, column: 5, offset: 2818 },
                end: { line: 61, column: 16, offset: 2829 }
              }
            }
          ],
          position: {
            start: { line: 61, column: 4, offset: 2817 },
            end: { line: 61, column: 55, offset: 2868 }
          }
        }
      ],
      position: {
        start: { line: 61, column: 1, offset: 2814 },
        end: { line: 61, column: 55, offset: 2868 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const HTTP = require("presidium/HTTP")\n' +
        '\n' +
        'const server = HTTP.Server((request, response) => {\n' +
        '  response.writeHead(200, { "Content-Type": "application/json" })\n' +
        '  response.write(JSON.stringify({ greeting: "Hello World" }))\n' +
        '  response.end()\n' +
        '})\n' +
        '\n' +
        'server.listen(3000)\n' +
        '\n' +
        'const http = new HTTP("http://localhost:3000/")\n' +
        '\n' +
        'http.get("/")\n' +
        '  .then(response => response.json())\n' +
        '  .then(console.log) // { greeting: "Hello World" }',
      position: {
        start: { line: 62, column: 1, offset: 2869 },
        end: { line: 78, column: 4, offset: 3300 }
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
                start: { line: 80, column: 5, offset: 3306 },
                end: { line: 80, column: 33, offset: 3334 }
              }
            }
          ],
          position: {
            start: { line: 80, column: 4, offset: 3305 },
            end: { line: 80, column: 77, offset: 3378 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 3302 },
        end: { line: 80, column: 77, offset: 3378 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const WebSocket = require("presidium/WebSocket")\n' +
        '\n' +
        'const server = new WebSocket.Server(websocket => {\n' +
        '  websocket.on("message", message => {\n' +
        '    console.log("Message from client:", message)\n' +
        '    websocket.send("Hello Client!")\n' +
        '  })\n' +
        '  websocket.on("close", () => {\n' +
        '    console.log("websocket closed")\n' +
        '  })\n' +
        '})\n' +
        'server.listen(1337)\n' +
        '\n' +
        'const websocket = new WebSocket("ws://localhost:1337/")\n' +
        'websocket.on("open", () => {\n' +
        '  websocket.send("Hello Server!")\n' +
        '})\n' +
        'websocket.on("message", message => {\n' +
        '  console.log("Message from server:", message)\n' +
        '})',
      position: {
        start: { line: 81, column: 1, offset: 3379 },
        end: { line: 102, column: 4, offset: 3932 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://presidium.services/docs/Validator',
          children: [
            {
              type: 'text',
              value: 'Validate data',
              position: {
                start: { line: 104, column: 5, offset: 3938 },
                end: { line: 104, column: 18, offset: 3951 }
              }
            }
          ],
          position: {
            start: { line: 104, column: 4, offset: 3937 },
            end: { line: 104, column: 62, offset: 3995 }
          }
        }
      ],
      position: {
        start: { line: 104, column: 1, offset: 3934 },
        end: { line: 104, column: 62, offset: 3995 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const Validator = require("presidium/Validator")\n' +
        '\n' +
        'const {\n' +
        '  Object, Array, Number, String, Email, Boolean, OneOf, Optional,\n' +
        '} = Validator\n' +
        '\n' +
        'const validator = Object({\n' +
        '  Name: String,\n' +
        '  Email: Email,\n' +
        '  Password: String,\n' +
        '  Preferences: Object({\n' +
        '    Gender: OneOf("Male", "Female"),\n' +
        '  }),\n' +
        '  Gender: OneOf("Male", "Female"),\n' +
        '  IsReturning: Boolean,\n' +
        '  Time: Optional(Number),\n' +
        '  Media: Array(Object({\n' +
        '    MediaUrl: String,\n' +
        '    Description: String,\n' +
        '  })),\n' +
        '})\n' +
        '\n' +
        'const data = {\n' +
        '  Name: "Example Name",\n' +
        '  Email: "email@domain.com",\n' +
        '  Password: "************",\n' +
        '  Preferences: {\n' +
        '    Gender: "Male",\n' +
        '  },\n' +
        '  IsReturning: false,\n' +
        '  Media: [{\n' +
        '    MediaUrl: "https://cdn.my-website.com/assets/1.mp4",\n' +
        '    Description: "Example description.",\n' +
        '  }],\n' +
        '}\n' +
        '\n' +
        'validator(data)',
      position: {
        start: { line: 105, column: 1, offset: 3996 },
        end: { line: 143, column: 4, offset: 4760 }
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
                start: { line: 145, column: 5, offset: 4766 },
                end: { line: 145, column: 33, offset: 4794 }
              }
            }
          ],
          position: {
            start: { line: 145, column: 4, offset: 4765 },
            end: { line: 145, column: 74, offset: 4835 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 4762 },
        end: { line: 145, column: 74, offset: 4835 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const Docker = require("presidium/Docker")\n' +
        'const NpmToken = require("presidium/NpmToken")\n' +
        'const fs = require("fs")\n' +
        '\n' +
        'const myImage = "my-app:1.0.0"\n' +
        '\n' +
        'const npmrc = fs.createWriteStream(".npmrc")\n' +
        'npmrc.write(`//registry.npmjs.org/:_authToken=${await NpmToken()}`)\n' +
        'npmrc.end()\n' +
        '\n' +
        'const buildStream = await docker.buildImage(__dirname, {\n' +
        '  image: myImage,\n' +
        '  ignore: [".github", "node_modules"],\n' +
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
        'buildStream.on("end", () => {\n' +
        '  const pushStream = await docker.pushImage({\n' +
        '    image: myImage,\n' +
        '    repository: "my-registry.io",\n' +
        '  })\n' +
        '  pushStream.pipe(process.stdout)\n' +
        '})\n',
      position: {
        start: { line: 146, column: 1, offset: 4836 },
        end: { line: 184, column: 4, offset: 5618 }
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
                start: { line: 186, column: 5, offset: 5624 },
                end: { line: 186, column: 26, offset: 5645 }
              }
            }
          ],
          position: {
            start: { line: 186, column: 4, offset: 5623 },
            end: { line: 186, column: 67, offset: 5686 }
          }
        }
      ],
      position: {
        start: { line: 186, column: 1, offset: 5620 },
        end: { line: 186, column: 67, offset: 5686 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const Docker = require("presidium/Docker")\n' +
        '\n' +
        'const docker = new Docker()\n' +
        '\n' +
        'const runStream = await docker.runContainer({\n' +
        '  image: "node:15-alpine",\n' +
        '  env: { FOO: "Example" },\n' +
        '  cmd: ["node", "-e", "console.log(process.env.FOO)"],\n' +
        '  rm: true,\n' +
        '})\n' +
        '\n' +
        'runStream.pipe(process.stdout) // Example',
      position: {
        start: { line: 187, column: 1, offset: 5687 },
        end: { line: 200, column: 4, offset: 5990 }
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
                start: { line: 202, column: 5, offset: 5996 },
                end: { line: 202, column: 33, offset: 6024 }
              }
            }
          ],
          position: {
            start: { line: 202, column: 4, offset: 5995 },
            end: { line: 202, column: 74, offset: 6065 }
          }
        }
      ],
      position: {
        start: { line: 202, column: 1, offset: 5992 },
        end: { line: 202, column: 74, offset: 6065 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const Docker = require("presidium/Docker")\n' +
        '\n' +
        'const docker = new Docker()\n' +
        '\n' +
        '// initialize docker swarm\n' +
        'await docker.initSwarm("eth0:2377")\n' +
        '\n' +
        'await docker.createService({\n' +
        '  name: "my-service",\n' +
        '  image: "nginx:1.19",\n' +
        '  publish: { 80: 80 },\n' +
        '  healthCheck: ["curl", "[::1]"],\n' +
        '  replicas: 5,\n' +
        '})\n' +
        '// new nginx service is deploying to the docker swarm',
      position: {
        start: { line: 203, column: 1, offset: 6066 },
        end: { line: 219, column: 4, offset: 6423 }
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
                start: { line: 221, column: 5, offset: 6429 },
                end: { line: 221, column: 50, offset: 6474 }
              }
            }
          ],
          position: {
            start: { line: 221, column: 4, offset: 6428 },
            end: { line: 221, column: 105, offset: 6529 }
          }
        }
      ],
      position: {
        start: { line: 221, column: 1, offset: 6425 },
        end: { line: 221, column: 105, offset: 6529 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const GoogleChromeForTesting = require("presidium/GoogleChromeForTesting")\n' +
        'const GoogleChromeDevTools = require("presidium/GoogleChromeDevTools")\n' +
        '\n' +
        'const googleChromeForTesting = new GoogleChromeForTesting()\n' +
        'await googleChromeForTesting.init() // downloads Google Chrome for Testing\n' +
        '\n' +
        'const googleChromeDevTools = new GoogleChromeDevTools(googleChromeForTesting)\n' +
        'await googleChromeDevTools.init() // connects to the DevTools server\n' +
        '\n' +
        '// get targets\n' +
        'const targetsData = await googleChromeDevTools.Target.getTargets()\n' +
        'const pageTarget = targetsData.result.targetInfos.find(info => info.type == "page")\n' +
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
        start: { line: 222, column: 1, offset: 6530 },
        end: { line: 248, column: 4, offset: 7506 }
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
              value: 'Store data on disk in a hash table',
              position: {
                start: { line: 250, column: 5, offset: 7512 },
                end: { line: 250, column: 39, offset: 7546 }
              }
            }
          ],
          position: {
            start: { line: 250, column: 4, offset: 7511 },
            end: { line: 250, column: 87, offset: 7594 }
          }
        }
      ],
      position: {
        start: { line: 250, column: 1, offset: 7508 },
        end: { line: 250, column: 87, offset: 7594 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const DiskHashTable = require("presidium/DiskHashTable")\n' +
        '\n' +
        'const ht = new DiskHashTable({\n' +
        '  storageFilepath: "/path/to/ht-storage-file",\n' +
        '  headerFilepath: "/path/to/ht-header-file",\n' +
        '  initialLength: 1024,\n' +
        '})\n' +
        'await ht.init()\n' +
        '\n' +
        'await ht.set("my-key", "my-value")\n' +
        '\n' +
        'const myValue = await ht.get("my-key")\n' +
        'console.log(myValue) // my-value\n' +
        '\n' +
        'await ht.delete("my-key")',
      position: {
        start: { line: 251, column: 1, offset: 7595 },
        end: { line: 267, column: 4, offset: 7971 }
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
              value: 'Store data on disk in a sorted hash table',
              position: {
                start: { line: 269, column: 5, offset: 7977 },
                end: { line: 269, column: 46, offset: 8018 }
              }
            }
          ],
          position: {
            start: { line: 269, column: 4, offset: 7976 },
            end: { line: 269, column: 100, offset: 8072 }
          }
        }
      ],
      position: {
        start: { line: 269, column: 1, offset: 7973 },
        end: { line: 269, column: 100, offset: 8072 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const DiskSortedHashTable = require("presidium/DiskSortedHashTable")\n' +
        '\n' +
        'const sortedHt = new DiskSortedHashTable({\n' +
        '  storageFilepath: "/path/to/sortedHt-storage-file",\n' +
        '  headerFilepath: "/path/to/sortedHt-header-file",\n' +
        '  initialLength: 1024,\n' +
        '})\n' +
        'await sortedHt.init()\n' +
        '\n' +
        'await sortedHt.set("first-key", "first-value", 1)\n' +
        'await sortedHt.set("second-key", "second-value", 2)\n' +
        'await sortedHt.set("third-key", "third-value", 3)\n' +
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
        start: { line: 270, column: 1, offset: 8073 },
        end: { line: 305, column: 4, offset: 9196 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://presidium.services/docs/DatabaseServer',
          children: [
            {
              type: 'text',
              value: 'Host your own distributed database',
              position: {
                start: { line: 307, column: 5, offset: 9202 },
                end: { line: 307, column: 39, offset: 9236 }
              }
            }
          ],
          position: {
            start: { line: 307, column: 4, offset: 9201 },
            end: { line: 307, column: 88, offset: 9285 }
          }
        }
      ],
      position: {
        start: { line: 307, column: 1, offset: 9198 },
        end: { line: 307, column: 88, offset: 9285 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const DatabaseServer = require("presidium/DatabaseServer")\n' +
        '\n' +
        'const server = new DatabaseServer({\n' +
        '  databasePath: `${__dirname}/database`,\n' +
        '})\n' +
        'await server.init()\n' +
        '\n' +
        'await server.registerDiskHashTable("Session", {\n' +
        '  storagePath: `${this.databasePath}/Session/storage`,\n' +
        '  headerPath: `${this.databasePath}/Session/header`,\n' +
        '  initialLength: 536870912,\n' +
        '  itemSize: 512,\n' +
        '})\n' +
        '\n' +
        'await server.registerDiskSortedHashTable("Post", {\n' +
        '  storagePath: `${this.databasePath}/Post/storage`,\n' +
        '  headerPath: `${this.databasePath}/Post/header`,\n' +
        '  initialLength: 1048576,\n' +
        '  itemSize: 8192,\n' +
        '  sortValueType: "number",\n' +
        '  degree: 2,\n' +
        '})\n' +
        '\n' +
        'server.listen(5000, () => {\n' +
        '  console.log("Database server listening on port 5000")\n' +
        '})',
      position: {
        start: { line: 308, column: 1, offset: 9286 },
        end: { line: 335, column: 4, offset: 9997 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://presidium.services/docs/DiskHashTableClient',
          children: [
            {
              type: 'text',
              value: 'Call a database table from anywhere',
              position: {
                start: { line: 337, column: 5, offset: 10003 },
                end: { line: 337, column: 40, offset: 10038 }
              }
            }
          ],
          position: {
            start: { line: 337, column: 4, offset: 10002 },
            end: { line: 337, column: 94, offset: 10092 }
          }
        }
      ],
      position: {
        start: { line: 337, column: 1, offset: 9999 },
        end: { line: 337, column: 94, offset: 10092 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const DiskHashTableClient = require("presidium/DiskHashTableClient")\n' +
        '\n' +
        'const sessionHt = new DiskHashTableClient({\n' +
        '  serverUrl: "http://localhost:5000",\n' +
        '  tableName: "Session",\n' +
        '})\n' +
        '\n' +
        'const accessToken = "token"\n' +
        'const session = { accessToken }\n' +
        '\n' +
        'await sessionHt.set(accessToken, JSON.stringify(session))\n' +
        '\n' +
        'const sessionJson = await sessionHt.get(accessToken)\n' +
        '\n' +
        'await sessionHt.delete(accessToken)',
      position: {
        start: { line: 338, column: 1, offset: 10093 },
        end: { line: 354, column: 4, offset: 10500 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://presidium.services/docs/DiskSortedHashTableClient',
          children: [
            {
              type: 'text',
              value: 'Query a database table from anywhere',
              position: {
                start: { line: 356, column: 5, offset: 10506 },
                end: { line: 356, column: 41, offset: 10542 }
              }
            }
          ],
          position: {
            start: { line: 356, column: 4, offset: 10505 },
            end: { line: 356, column: 101, offset: 10602 }
          }
        }
      ],
      position: {
        start: { line: 356, column: 1, offset: 10502 },
        end: { line: 356, column: 101, offset: 10602 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const DiskSortedHashTableClient = require("presidium-db-client-server/DiskSortedHashTableClient")\n' +
        '\n' +
        'const postHt = new DiskSortedHashTableClient({\n' +
        '  serverUrl: "http://localhost:5000",\n' +
        '  tableName: "Post",\n' +
        '  sortValueType: "number",\n' +
        '})\n' +
        '\n' +
        'const post1 = {\n' +
        '  id: "post-1",\n' +
        '  images: ["/assets/post-1/image-1.jpg"],\n' +
        '  content: "First post",\n' +
        '  time: Date.now(),\n' +
        '}\n' +
        '\n' +
        'const post2 = {\n' +
        '  id: "post-2",\n' +
        '  images: ["/assets/post-2/image-2.jpg"],\n' +
        '  content: "Second post",\n' +
        '  time: Date.now(),\n' +
        '}\n' +
        '\n' +
        'const post3 = {\n' +
        '  id: "post-3",\n' +
        '  images: ["/assets/post-3/image-3.jpg"],\n' +
        '  content: "Third post",\n' +
        '  time: Date.now(),\n' +
        '}\n' +
        '\n' +
        'await postHt.set(post1.id, JSON.stringify(post1), post1.time)\n' +
        'await postHt.set(post2.id, JSON.stringify(post2), post2.time)\n' +
        'await postHt.set(post3.id, JSON.stringify(post3), post3.time)\n' +
        '\n' +
        'const myPosts = []\n' +
        'for await (const postJson of await postHt.reverseIterator()) {\n' +
        '  myPosts.push(JSON.parse(postJson))\n' +
        '}',
      position: {
        start: { line: 357, column: 1, offset: 10603 },
        end: { line: 395, column: 4, offset: 11531 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://presidium.services/docs/DatabaseLoadBalancer',
          children: [
            {
              type: 'text',
              value: 'Load balance your distributed database',
              position: {
                start: { line: 397, column: 5, offset: 11537 },
                end: { line: 397, column: 43, offset: 11575 }
              }
            }
          ],
          position: {
            start: { line: 397, column: 4, offset: 11536 },
            end: { line: 397, column: 98, offset: 11630 }
          }
        }
      ],
      position: {
        start: { line: 397, column: 1, offset: 11533 },
        end: { line: 397, column: 98, offset: 11630 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const DatabaseLoadBalancer = require("presidium/DatabaseLoadBalancer")\n' +
        '\n' +
        'function hash(tableName, key, length) {\n' +
        '  const value = `${tableName}${key}`\n' +
        '  const digest = crypto.createHash("md5").update(value).digest()\n' +
        '  const integerHash = digest.readUInt16BE(0)\n' +
        '  const index = Math.floor(integerHash / 65535 * length)\n' +
        '  return index\n' +
        '}\n' +
        '\n' +
        'const loadBalancer = new DatabaseLoadBalancer(hash, {\n' +
        '  serverIps: ["10.0.0.1:8080", "10.0.0.2:8080"],\n' +
        '})\n' +
        '\n' +
        'loadBalancer.listen(6333, () => {\n' +
        '  console.log("Database load balancer listening on port 6333")\n' +
        '})',
      position: {
        start: { line: 398, column: 1, offset: 11631 },
        end: { line: 416, column: 4, offset: 12189 }
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
            start: { line: 418, column: 4, offset: 12194 },
            end: { line: 418, column: 11, offset: 12201 }
          }
        }
      ],
      position: {
        start: { line: 418, column: 1, offset: 12191 },
        end: { line: 418, column: 11, offset: 12201 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Presidium is distributed under the ',
          position: {
            start: { line: 419, column: 1, offset: 12202 },
            end: { line: 419, column: 36, offset: 12237 }
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
                start: { line: 419, column: 37, offset: 12238 },
                end: { line: 419, column: 50, offset: 12251 }
              }
            }
          ],
          position: {
            start: { line: 419, column: 36, offset: 12237 },
            end: { line: 419, column: 102, offset: 12303 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 419, column: 102, offset: 12303 },
            end: { line: 419, column: 103, offset: 12304 }
          }
        }
      ],
      position: {
        start: { line: 419, column: 1, offset: 12202 },
        end: { line: 419, column: 103, offset: 12304 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Support',
          position: {
            start: { line: 421, column: 4, offset: 12309 },
            end: { line: 421, column: 11, offset: 12316 }
          }
        }
      ],
      position: {
        start: { line: 421, column: 1, offset: 12306 },
        end: { line: 421, column: 11, offset: 12316 }
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
                    start: { line: 422, column: 4, offset: 12320 },
                    end: { line: 422, column: 31, offset: 12347 }
                  }
                }
              ],
              position: {
                start: { line: 422, column: 4, offset: 12320 },
                end: { line: 422, column: 31, offset: 12347 }
              }
            }
          ],
          position: {
            start: { line: 422, column: 2, offset: 12318 },
            end: { line: 422, column: 31, offset: 12347 }
          }
        }
      ],
      position: {
        start: { line: 422, column: 2, offset: 12318 },
        end: { line: 422, column: 31, offset: 12347 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 423, column: 1, offset: 12348 }
  }
}