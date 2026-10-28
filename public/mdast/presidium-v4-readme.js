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
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Presidium File Client and Server',
          position: {
            start: { line: 40, column: 5, offset: 2222 },
            end: { line: 40, column: 37, offset: 2254 }
          }
        }
      ],
      position: {
        start: { line: 40, column: 1, offset: 2218 },
        end: { line: 40, column: 37, offset: 2254 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Source code: ',
          position: {
            start: { line: 42, column: 1, offset: 2256 },
            end: { line: 42, column: 14, offset: 2269 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://github.com/richytong/presidium-file-client-server',
          children: [
            {
              type: 'text',
              value: 'GitHub',
              position: {
                start: { line: 42, column: 15, offset: 2270 },
                end: { line: 42, column: 21, offset: 2276 }
              }
            }
          ],
          position: {
            start: { line: 42, column: 14, offset: 2269 },
            end: { line: 42, column: 81, offset: 2336 }
          }
        },
        {
          type: 'text',
          value: ' |\nLicense: ',
          position: {
            start: { line: 42, column: 81, offset: 2336 },
            end: { line: 43, column: 10, offset: 2348 }
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
                start: { line: 43, column: 11, offset: 2349 },
                end: { line: 43, column: 16, offset: 2354 }
              }
            }
          ],
          position: {
            start: { line: 43, column: 10, offset: 2348 },
            end: { line: 43, column: 68, offset: 2406 }
          }
        }
      ],
      position: {
        start: { line: 42, column: 1, offset: 2256 },
        end: { line: 43, column: 68, offset: 2406 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: 'https://github.com/richytong/presidium-file-client-server/workflows/Node.js%20CI/badge.svg',
          alt: 'Node.js CI',
          position: {
            start: { line: 45, column: 1, offset: 2408 },
            end: { line: 45, column: 106, offset: 2513 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 45, column: 106, offset: 2513 },
            end: { line: 46, column: 1, offset: 2514 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://codecov.io/gh/richytong/presidium-file-client-server',
          children: [
            {
              type: 'image',
              title: null,
              url: 'https://codecov.io/gh/richytong/presidium-file-client-server/graph/badge.svg?token=07P6G8GIOQ',
              alt: 'codecov',
              position: {
                start: { line: 46, column: 2, offset: 2515 },
                end: { line: 46, column: 107, offset: 2620 }
              }
            }
          ],
          position: {
            start: { line: 46, column: 1, offset: 2514 },
            end: { line: 46, column: 170, offset: 2683 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 46, column: 170, offset: 2683 },
            end: { line: 47, column: 1, offset: 2684 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://www.npmjs.com/package/presidium-file-client-server',
          children: [
            {
              type: 'image',
              title: null,
              url: 'https://img.shields.io/npm/v/presidium-file-client-server.svg?style=flat',
              alt: 'npm version',
              position: {
                start: { line: 47, column: 2, offset: 2685 },
                end: { line: 47, column: 90, offset: 2773 }
              }
            }
          ],
          position: {
            start: { line: 47, column: 1, offset: 2684 },
            end: { line: 47, column: 151, offset: 2834 }
          }
        }
      ],
      position: {
        start: { line: 45, column: 1, offset: 2408 },
        end: { line: 47, column: 151, offset: 2834 }
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
            start: { line: 49, column: 4, offset: 2839 },
            end: { line: 49, column: 16, offset: 2851 }
          }
        }
      ],
      position: {
        start: { line: 49, column: 1, offset: 2836 },
        end: { line: 49, column: 16, offset: 2851 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 50, column: 1, offset: 2852 },
            end: { line: 50, column: 6, offset: 2857 }
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
                start: { line: 50, column: 7, offset: 2858 },
                end: { line: 50, column: 10, offset: 2861 }
              }
            }
          ],
          position: {
            start: { line: 50, column: 6, offset: 2857 },
            end: { line: 50, column: 78, offset: 2929 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 50, column: 78, offset: 2929 },
            end: { line: 50, column: 79, offset: 2930 }
          }
        }
      ],
      position: {
        start: { line: 50, column: 1, offset: 2852 },
        end: { line: 50, column: 79, offset: 2930 }
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i presidium',
      position: {
        start: { line: 51, column: 1, offset: 2931 },
        end: { line: 53, column: 4, offset: 2958 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'require Presidium in ',
          position: {
            start: { line: 55, column: 1, offset: 2960 },
            end: { line: 55, column: 22, offset: 2981 }
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
                start: { line: 55, column: 23, offset: 2982 },
                end: { line: 55, column: 31, offset: 2990 }
              }
            }
          ],
          position: {
            start: { line: 55, column: 22, offset: 2981 },
            end: { line: 55, column: 106, offset: 3065 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 55, column: 106, offset: 3065 },
            end: { line: 55, column: 107, offset: 3066 }
          }
        }
      ],
      position: {
        start: { line: 55, column: 1, offset: 2960 },
        end: { line: 55, column: 107, offset: 3066 }
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
        start: { line: 56, column: 1, offset: 3067 },
        end: { line: 68, column: 4, offset: 3430 }
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
                start: { line: 70, column: 5, offset: 3436 },
                end: { line: 70, column: 16, offset: 3447 }
              }
            }
          ],
          position: {
            start: { line: 70, column: 4, offset: 3435 },
            end: { line: 70, column: 55, offset: 3486 }
          }
        }
      ],
      position: {
        start: { line: 70, column: 1, offset: 3432 },
        end: { line: 70, column: 55, offset: 3486 }
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
        start: { line: 71, column: 1, offset: 3487 },
        end: { line: 87, column: 4, offset: 3918 }
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
                start: { line: 89, column: 5, offset: 3924 },
                end: { line: 89, column: 33, offset: 3952 }
              }
            }
          ],
          position: {
            start: { line: 89, column: 4, offset: 3923 },
            end: { line: 89, column: 77, offset: 3996 }
          }
        }
      ],
      position: {
        start: { line: 89, column: 1, offset: 3920 },
        end: { line: 89, column: 77, offset: 3996 }
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
        start: { line: 90, column: 1, offset: 3997 },
        end: { line: 111, column: 4, offset: 4550 }
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
                start: { line: 113, column: 5, offset: 4556 },
                end: { line: 113, column: 18, offset: 4569 }
              }
            }
          ],
          position: {
            start: { line: 113, column: 4, offset: 4555 },
            end: { line: 113, column: 62, offset: 4613 }
          }
        }
      ],
      position: {
        start: { line: 113, column: 1, offset: 4552 },
        end: { line: 113, column: 62, offset: 4613 }
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
        start: { line: 114, column: 1, offset: 4614 },
        end: { line: 152, column: 4, offset: 5378 }
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
                start: { line: 154, column: 5, offset: 5384 },
                end: { line: 154, column: 33, offset: 5412 }
              }
            }
          ],
          position: {
            start: { line: 154, column: 4, offset: 5383 },
            end: { line: 154, column: 74, offset: 5453 }
          }
        }
      ],
      position: {
        start: { line: 154, column: 1, offset: 5380 },
        end: { line: 154, column: 74, offset: 5453 }
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
        start: { line: 155, column: 1, offset: 5454 },
        end: { line: 193, column: 4, offset: 6236 }
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
                start: { line: 195, column: 5, offset: 6242 },
                end: { line: 195, column: 26, offset: 6263 }
              }
            }
          ],
          position: {
            start: { line: 195, column: 4, offset: 6241 },
            end: { line: 195, column: 67, offset: 6304 }
          }
        }
      ],
      position: {
        start: { line: 195, column: 1, offset: 6238 },
        end: { line: 195, column: 67, offset: 6304 }
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
        start: { line: 196, column: 1, offset: 6305 },
        end: { line: 209, column: 4, offset: 6608 }
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
                start: { line: 211, column: 5, offset: 6614 },
                end: { line: 211, column: 33, offset: 6642 }
              }
            }
          ],
          position: {
            start: { line: 211, column: 4, offset: 6613 },
            end: { line: 211, column: 74, offset: 6683 }
          }
        }
      ],
      position: {
        start: { line: 211, column: 1, offset: 6610 },
        end: { line: 211, column: 74, offset: 6683 }
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
        start: { line: 212, column: 1, offset: 6684 },
        end: { line: 228, column: 4, offset: 7041 }
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
                start: { line: 230, column: 5, offset: 7047 },
                end: { line: 230, column: 50, offset: 7092 }
              }
            }
          ],
          position: {
            start: { line: 230, column: 4, offset: 7046 },
            end: { line: 230, column: 105, offset: 7147 }
          }
        }
      ],
      position: {
        start: { line: 230, column: 1, offset: 7043 },
        end: { line: 230, column: 105, offset: 7147 }
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
        start: { line: 231, column: 1, offset: 7148 },
        end: { line: 257, column: 4, offset: 8124 }
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
                start: { line: 259, column: 5, offset: 8130 },
                end: { line: 259, column: 39, offset: 8164 }
              }
            }
          ],
          position: {
            start: { line: 259, column: 4, offset: 8129 },
            end: { line: 259, column: 87, offset: 8212 }
          }
        }
      ],
      position: {
        start: { line: 259, column: 1, offset: 8126 },
        end: { line: 259, column: 87, offset: 8212 }
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
        start: { line: 260, column: 1, offset: 8213 },
        end: { line: 276, column: 4, offset: 8589 }
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
                start: { line: 278, column: 5, offset: 8595 },
                end: { line: 278, column: 46, offset: 8636 }
              }
            }
          ],
          position: {
            start: { line: 278, column: 4, offset: 8594 },
            end: { line: 278, column: 100, offset: 8690 }
          }
        }
      ],
      position: {
        start: { line: 278, column: 1, offset: 8591 },
        end: { line: 278, column: 100, offset: 8690 }
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
        start: { line: 279, column: 1, offset: 8691 },
        end: { line: 314, column: 4, offset: 9814 }
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
                start: { line: 316, column: 5, offset: 9820 },
                end: { line: 316, column: 39, offset: 9854 }
              }
            }
          ],
          position: {
            start: { line: 316, column: 4, offset: 9819 },
            end: { line: 316, column: 88, offset: 9903 }
          }
        }
      ],
      position: {
        start: { line: 316, column: 1, offset: 9816 },
        end: { line: 316, column: 88, offset: 9903 }
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
        start: { line: 317, column: 1, offset: 9904 },
        end: { line: 344, column: 4, offset: 10615 }
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
                start: { line: 346, column: 5, offset: 10621 },
                end: { line: 346, column: 40, offset: 10656 }
              }
            }
          ],
          position: {
            start: { line: 346, column: 4, offset: 10620 },
            end: { line: 346, column: 94, offset: 10710 }
          }
        }
      ],
      position: {
        start: { line: 346, column: 1, offset: 10617 },
        end: { line: 346, column: 94, offset: 10710 }
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
        start: { line: 347, column: 1, offset: 10711 },
        end: { line: 363, column: 4, offset: 11118 }
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
                start: { line: 365, column: 5, offset: 11124 },
                end: { line: 365, column: 41, offset: 11160 }
              }
            }
          ],
          position: {
            start: { line: 365, column: 4, offset: 11123 },
            end: { line: 365, column: 101, offset: 11220 }
          }
        }
      ],
      position: {
        start: { line: 365, column: 1, offset: 11120 },
        end: { line: 365, column: 101, offset: 11220 }
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
        '  sortValueType: ["string", "number"],\n' +
        '})\n' +
        '\n' +
        'const post1 = {\n' +
        '  id: "post-1",\n' +
        '  profileId: "profile-1",\n' +
        '  images: ["/assets/post-1/image-1.jpg"],\n' +
        '  content: "First post",\n' +
        '  time: Date.now(),\n' +
        '}\n' +
        '\n' +
        'const post2 = {\n' +
        '  id: "post-2",\n' +
        '  profileId: "profile-1",\n' +
        '  images: ["/assets/post-2/image-2.jpg"],\n' +
        '  content: "Second post",\n' +
        '  time: Date.now(),\n' +
        '}\n' +
        '\n' +
        'const post3 = {\n' +
        '  id: "post-3",\n' +
        '  profileId: "profile-1",\n' +
        '  images: ["/assets/post-3/image-3.jpg"],\n' +
        '  content: "Third post",\n' +
        '  time: Date.now(),\n' +
        '}\n' +
        '\n' +
        'await postHt.set(post1.id, JSON.stringify(post1), "profile-1", post1.time)\n' +
        'await postHt.set(post2.id, JSON.stringify(post2), "profile-1", post2.time)\n' +
        'await postHt.set(post3.id, JSON.stringify(post3), "profile-1", post3.time)\n' +
        '\n' +
        'const myPosts = []\n' +
        'for await (const postJson of postHt.reverseIterator({\n' +
        '  startingSortValue: ["profile-1", Infinity],\n' +
        '  endingSortValue: ["profile-1", 0],\n' +
        '})) {\n' +
        '  myPosts.push(JSON.parse(postJson))\n' +
        '}',
      position: {
        start: { line: 366, column: 1, offset: 11221 },
        end: { line: 410, column: 4, offset: 12358 }
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
                start: { line: 412, column: 5, offset: 12364 },
                end: { line: 412, column: 43, offset: 12402 }
              }
            }
          ],
          position: {
            start: { line: 412, column: 4, offset: 12363 },
            end: { line: 412, column: 98, offset: 12457 }
          }
        }
      ],
      position: {
        start: { line: 412, column: 1, offset: 12360 },
        end: { line: 412, column: 98, offset: 12457 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const DatabaseLoadBalancer = require("presidium/DatabaseLoadBalancer")\n' +
        '\n' +
        'const loadBalancer = new DatabaseLoadBalancer({\n' +
        '  serverIps: ["10.0.0.1:8080", "10.0.0.2:8080"],\n' +
        '})\n' +
        '\n' +
        'loadBalancer.listen(6333, () => {\n' +
        '  console.log("Database load balancer listening on port 6333")\n' +
        '})',
      position: {
        start: { line: 413, column: 1, offset: 12458 },
        end: { line: 423, column: 4, offset: 12748 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://presidium.services/docs/FileServer',
          children: [
            {
              type: 'text',
              value: 'Host your own file service',
              position: {
                start: { line: 425, column: 5, offset: 12754 },
                end: { line: 425, column: 31, offset: 12780 }
              }
            }
          ],
          position: {
            start: { line: 425, column: 4, offset: 12753 },
            end: { line: 425, column: 76, offset: 12825 }
          }
        }
      ],
      position: {
        start: { line: 425, column: 1, offset: 12750 },
        end: { line: 425, column: 76, offset: 12825 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const FileServer = require("presidium/FileServer")\n' +
        '\n' +
        'const fileServer = new FileServer({\n' +
        '  dir: `${__dirname}/files`,\n' +
        '  databasePath: `${__dirname}/database`,\n' +
        '})\n' +
        'await fileServer.init()\n' +
        '\n' +
        'fileServer.listen(9000, () => {\n' +
        '  console.log("File server listening on port 9000")\n' +
        '})',
      position: {
        start: { line: 426, column: 1, offset: 12826 },
        end: { line: 438, column: 4, offset: 13116 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://presidium.services/docs/FileClient',
          children: [
            {
              type: 'text',
              value: 'Call your file service',
              position: {
                start: { line: 440, column: 5, offset: 13122 },
                end: { line: 440, column: 27, offset: 13144 }
              }
            }
          ],
          position: {
            start: { line: 440, column: 4, offset: 13121 },
            end: { line: 440, column: 72, offset: 13189 }
          }
        }
      ],
      position: {
        start: { line: 440, column: 1, offset: 13118 },
        end: { line: 440, column: 72, offset: 13189 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const FileClient = require("presidium/FileClient")\n' +
        '\n' +
        'const fileClient = new FileClient({\n' +
        '  serverUrl: "http://localhost:9000",\n' +
        '})\n' +
        '\n' +
        'const html = `\n' +
        '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>My Page</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '    <h1>My Page</h1>\n' +
        '</body>\n' +
        '</html>\n' +
        '`\n' +
        '\n' +
        'await fileClient.write("/public/my-page", html, {\n' +
        '  ContentType: "text/html",\n' +
        '})\n' +
        '\n' +
        'const data = await fileClient.read("/public/my-page")\n' +
        'data.FileStream.pipe(process.stdout)',
      position: {
        start: { line: 441, column: 1, offset: 13190 },
        end: { line: 467, column: 4, offset: 13674 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://presidium.services/docs/FileLoadBalancer',
          children: [
            {
              type: 'text',
              value: 'Load balance and distribute content from your file service',
              position: {
                start: { line: 469, column: 5, offset: 13680 },
                end: { line: 469, column: 63, offset: 13738 }
              }
            }
          ],
          position: {
            start: { line: 469, column: 4, offset: 13679 },
            end: { line: 469, column: 114, offset: 13789 }
          }
        }
      ],
      position: {
        start: { line: 469, column: 1, offset: 13676 },
        end: { line: 469, column: 114, offset: 13789 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const FileLoadBalancer = require("presidium/FileLoadBalancer")\n' +
        '\n' +
        'const loadBalancer = new FileLoadBalancer({\n' +
        '  serverIps: ["10.0.0.1:8080", "10.0.0.2:8080"],\n' +
        '})\n' +
        '\n' +
        'loadBalancer.listen(9000, () => {\n' +
        '  console.log("Database load balancer listening on port 9000")\n' +
        '})',
      position: {
        start: { line: 470, column: 1, offset: 13790 },
        end: { line: 480, column: 4, offset: 14068 }
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
            start: { line: 482, column: 4, offset: 14073 },
            end: { line: 482, column: 11, offset: 14080 }
          }
        }
      ],
      position: {
        start: { line: 482, column: 1, offset: 14070 },
        end: { line: 482, column: 11, offset: 14080 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Presidium is distributed under the ',
          position: {
            start: { line: 483, column: 1, offset: 14081 },
            end: { line: 483, column: 36, offset: 14116 }
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
                start: { line: 483, column: 37, offset: 14117 },
                end: { line: 483, column: 50, offset: 14130 }
              }
            }
          ],
          position: {
            start: { line: 483, column: 36, offset: 14116 },
            end: { line: 483, column: 102, offset: 14182 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 483, column: 102, offset: 14182 },
            end: { line: 483, column: 103, offset: 14183 }
          }
        }
      ],
      position: {
        start: { line: 483, column: 1, offset: 14081 },
        end: { line: 483, column: 103, offset: 14183 }
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
            start: { line: 485, column: 4, offset: 14188 },
            end: { line: 485, column: 11, offset: 14195 }
          }
        }
      ],
      position: {
        start: { line: 485, column: 1, offset: 14185 },
        end: { line: 485, column: 11, offset: 14195 }
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
                    start: { line: 486, column: 4, offset: 14199 },
                    end: { line: 486, column: 31, offset: 14226 }
                  }
                }
              ],
              position: {
                start: { line: 486, column: 4, offset: 14199 },
                end: { line: 486, column: 31, offset: 14226 }
              }
            }
          ],
          position: {
            start: { line: 486, column: 2, offset: 14197 },
            end: { line: 486, column: 31, offset: 14226 }
          }
        }
      ],
      position: {
        start: { line: 486, column: 2, offset: 14197 },
        end: { line: 486, column: 31, offset: 14226 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 487, column: 1, offset: 14227 }
  }
}