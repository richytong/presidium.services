export default [
  {
    name: 'ArrayEventEmitter',
    docs: '```specscript\n' +
      'module EventEmitter "./specscript/EventEmitter.ss"\n' +
      '\n' +
      'ArrayEventEmitter(array Array<string|Buffer>) -> EventEmitter\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'ArrayEventEmitter',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 18, offset: 17 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 18, offset: 17 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 18, offset: 17 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'specscript',
            meta: null,
            value: 'module EventEmitter "./specscript/EventEmitter.ss"\n' +
              '\n' +
              'ArrayEventEmitter(array Array<string|Buffer>) -> EventEmitter',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 131 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 131 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/ArrayEventEmitter.js'
  },
  {
    name: 'fromEvents',
    docs: '```specscript\n' +
      'module EventEmitter "./specscript/EventEmitter.ss"\n' +
      '\n' +
      'fromEvents(events EventEmitter) -> AsyncIterator\n' +
      'fromEvents(events EventEmitter, dataEventName string) -> AsyncIterator\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'fromEvents',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'specscript',
            meta: null,
            value: 'module EventEmitter "./specscript/EventEmitter.ss"\n' +
              '\n' +
              'fromEvents(events EventEmitter) -> AsyncIterator\n' +
              'fromEvents(events EventEmitter, dataEventName string) -> AsyncIterator',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 189 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 189 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/AsyncIterator.js'
  },
  {
    name: 'BinaryEntriesStream',
    docs: '```coffeescript [specscript]\n' +
      "module stream 'https://nodejs.org/docs/latest-v26.x/api/stream.html'\n" +
      "module events 'https://nodejs.org/docs/latest-v26.x/api/events.html'\n" +
      '\n' +
      'BinaryEntriesStream(\n' +
      '  readable stream.Readable,\n' +
      '  entryLength number,\n' +
      '  delimiter string\n' +
      ') -> binaryEntriesStream events.EventEmitter\n' +
      '\n' +
      'binaryEntriesStream.on("entry", (entry Array<Buffer>, keyEncoding string) -> ())\n' +
      '\n' +
      'binaryEntriesStream.on("end", () -> ())\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'BinaryEntriesStream',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 20, offset: 19 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 20, offset: 19 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 20, offset: 19 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: "module stream 'https://nodejs.org/docs/latest-v26.x/api/stream.html'\n" +
              "module events 'https://nodejs.org/docs/latest-v26.x/api/events.html'\n" +
              '\n' +
              'BinaryEntriesStream(\n' +
              '  readable stream.Readable,\n' +
              '  entryLength number,\n' +
              '  delimiter string\n' +
              ') -> binaryEntriesStream events.EventEmitter\n' +
              '\n' +
              'binaryEntriesStream.on("entry", (entry Array<Buffer>, keyEncoding string) -> ())\n' +
              '\n' +
              'binaryEntriesStream.on("end", () -> ())',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 14, column: 4, offset: 429 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 14, column: 4, offset: 429 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/BinaryEntriesStream.js'
  },
  {
    name: 'BinaryStream',
    docs: '```coffeescript [specscript]\n' +
      "module stream 'https://nodejs.org/docs/latest-v26.x/api/stream.html'\n" +
      "module events 'https://nodejs.org/docs/latest-v26.x/api/events.html'\n" +
      '\n' +
      'BinaryStream(readable stream.Readable, delimiter string) -> binaryStream events.EventEmitter\n' +
      '\n' +
      'textStream.on("data", chunk Buffer -> ())\n' +
      '\n' +
      'textStream.on("end", () -> ())\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'BinaryStream',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 13, offset: 12 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 13, offset: 12 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: "module stream 'https://nodejs.org/docs/latest-v26.x/api/stream.html'\n" +
              "module events 'https://nodejs.org/docs/latest-v26.x/api/events.html'\n" +
              '\n' +
              'BinaryStream(readable stream.Readable, delimiter string) -> binaryStream events.EventEmitter\n' +
              '\n' +
              'textStream.on("data", chunk Buffer -> ())\n' +
              '\n' +
              'textStream.on("end", () -> ())',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 10, column: 4, offset: 339 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 10, column: 4, offset: 339 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/BinaryStream.js'
  },
  {
    name: 'DatabaseLoadBalancer',
    docs: '```specscript\n' +
      'module http "https://nodejs.org/api/http.html"\n' +
      '\n' +
      'type HttpHandler(http.ClientRequest, http.ServerResponse) -> Promise<>|undefined\n' +
      '\n' +
      'new DatabaseLoadBalancer(options {\n' +
      '  serverAddresses: Array<string>|Array<Array<string>>,\n' +
      '}, ...handlers Arguments<HttpHandler>) -> server DatabaseLoadBalancer\n' +
      '\n' +
      'hash(\n' +
      '  tableName string,\n' +
      '  key string,\n' +
      '  serverAddressesLength number\n' +
      ') -> serverIndex Promise|number\n' +
      '\n' +
      'new DatabaseLoadBalancer(hash, options {\n' +
      '  serverAddresses: Array<string>|Array<Array<string>>,\n' +
      '}, ...handlers Arguments<HttpHandler>) -> DatabaseLoadBalancer\n' +
      '```\n' +
      '\n' +
      'Presidium DatabaseLoadBalancer class. Creates a database load balancer server.\n' +
      '\n' +
      'Arguments:\n' +
      '  * `options`\n' +
      '    * `serverAddresses` - `Array<string>|Array<Array<string>>` - the server addresses to load balance. An array of arrays of server addresses means the request data should be replicated across the array of server addresses indicated by the hash function.\n' +
      '  * `hash` - `function` - a function that resolves the index of the server address to route a request. Defaults to an MD5 hash function.\n' +
      '  * `handlers` - `Arguments<HttpHandler>` - HTTP handlers that process the request in order before it is processed by the database load balancer server.\n' +
      '\n' +
      'Return:\n' +
      '  * `server` - [`DatabaseLoadBalancer`](/docs/DatabaseLoadBalancer) - a DatabaseLoadBalancer instance.\n' +
      '\n' +
      '```javascript\n' +
      'const server = new DatabaseLoadBalancer({\n' +
      '  serverAddresses: ["10.0.0.1:8080", "10.0.0.2:8080", "10.0.0.3:8080"],\n' +
      '})\n' +
      '\n' +
      'server.listen(8080, () => {\n' +
      '  console.log("Database load balancer server listening on port 8080")\n' +
      '})\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'DatabaseLoadBalancer',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 21, offset: 20 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 21, offset: 20 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 21, offset: 20 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'specscript',
            meta: null,
            value: 'module http "https://nodejs.org/api/http.html"\n' +
              '\n' +
              'type HttpHandler(http.ClientRequest, http.ServerResponse) -> Promise<>|undefined\n' +
              '\n' +
              'new DatabaseLoadBalancer(options {\n' +
              '  serverAddresses: Array<string>|Array<Array<string>>,\n' +
              '}, ...handlers Arguments<HttpHandler>) -> server DatabaseLoadBalancer\n' +
              '\n' +
              'hash(\n' +
              '  tableName string,\n' +
              '  key string,\n' +
              '  serverAddressesLength number\n' +
              ') -> serverIndex Promise|number\n' +
              '\n' +
              'new DatabaseLoadBalancer(hash, options {\n' +
              '  serverAddresses: Array<string>|Array<Array<string>>,\n' +
              '}, ...handlers Arguments<HttpHandler>) -> DatabaseLoadBalancer',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 19, column: 4, offset: 571 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Presidium DatabaseLoadBalancer class. Creates a database load balancer server.',
                position: {
                  start: { line: 21, column: 1, offset: 573 },
                  end: { line: 21, column: 79, offset: 651 }
                }
              }
            ],
            position: {
              start: { line: 21, column: 1, offset: 573 },
              end: { line: 21, column: 79, offset: 651 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Arguments:',
                position: {
                  start: { line: 23, column: 1, offset: 653 },
                  end: { line: 23, column: 11, offset: 663 }
                }
              }
            ],
            position: {
              start: { line: 23, column: 1, offset: 653 },
              end: { line: 23, column: 11, offset: 663 }
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
                        type: 'inlineCode',
                        value: 'options',
                        position: {
                          start: { line: 24, column: 5, offset: 668 },
                          end: { line: 24, column: 14, offset: 677 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 24, column: 5, offset: 668 },
                      end: { line: 24, column: 14, offset: 677 }
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
                                type: 'inlineCode',
                                value: 'serverAddresses',
                                position: {
                                  start: { line: 25, column: 7, offset: 684 },
                                  end: { line: 25, column: 24, offset: 701 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 25, column: 24, offset: 701 },
                                  end: { line: 25, column: 27, offset: 704 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'Array<string>|Array<Array<string>>',
                                position: {
                                  start: { line: 25, column: 27, offset: 704 },
                                  end: { line: 25, column: 63, offset: 740 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the server addresses to load balance. An array of arrays of server addresses means the request data should be replicated across the array of server addresses indicated by the hash function.',
                                position: {
                                  start: { line: 25, column: 63, offset: 740 },
                                  end: {
                                    line: 25,
                                    column: 255,
                                    offset: 932
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 25, column: 7, offset: 684 },
                              end: { line: 25, column: 255, offset: 932 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 25, column: 5, offset: 682 },
                          end: { line: 25, column: 255, offset: 932 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 25, column: 5, offset: 682 },
                      end: { line: 25, column: 255, offset: 932 }
                    }
                  }
                ],
                position: {
                  start: { line: 24, column: 3, offset: 666 },
                  end: { line: 25, column: 255, offset: 932 }
                }
              },
              {
                type: 'listItem',
                spread: false,
                checked: null,
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'inlineCode',
                        value: 'hash',
                        position: {
                          start: { line: 26, column: 5, offset: 937 },
                          end: { line: 26, column: 11, offset: 943 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 26, column: 11, offset: 943 },
                          end: { line: 26, column: 14, offset: 946 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'function',
                        position: {
                          start: { line: 26, column: 14, offset: 946 },
                          end: { line: 26, column: 24, offset: 956 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - a function that resolves the index of the server address to route a request. Defaults to an MD5 hash function.',
                        position: {
                          start: { line: 26, column: 24, offset: 956 },
                          end: { line: 26, column: 137, offset: 1069 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 26, column: 5, offset: 937 },
                      end: { line: 26, column: 137, offset: 1069 }
                    }
                  }
                ],
                position: {
                  start: { line: 26, column: 3, offset: 935 },
                  end: { line: 26, column: 137, offset: 1069 }
                }
              },
              {
                type: 'listItem',
                spread: false,
                checked: null,
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'inlineCode',
                        value: 'handlers',
                        position: {
                          start: { line: 27, column: 5, offset: 1074 },
                          end: { line: 27, column: 15, offset: 1084 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 27, column: 15, offset: 1084 },
                          end: { line: 27, column: 18, offset: 1087 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'Arguments<HttpHandler>',
                        position: {
                          start: { line: 27, column: 18, offset: 1087 },
                          end: { line: 27, column: 42, offset: 1111 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - HTTP handlers that process the request in order before it is processed by the database load balancer server.',
                        position: {
                          start: { line: 27, column: 42, offset: 1111 },
                          end: { line: 27, column: 153, offset: 1222 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 27, column: 5, offset: 1074 },
                      end: { line: 27, column: 153, offset: 1222 }
                    }
                  }
                ],
                position: {
                  start: { line: 27, column: 3, offset: 1072 },
                  end: { line: 27, column: 153, offset: 1222 }
                }
              }
            ],
            position: {
              start: { line: 24, column: 3, offset: 666 },
              end: { line: 27, column: 153, offset: 1222 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Return:',
                position: {
                  start: { line: 29, column: 1, offset: 1224 },
                  end: { line: 29, column: 8, offset: 1231 }
                }
              }
            ],
            position: {
              start: { line: 29, column: 1, offset: 1224 },
              end: { line: 29, column: 8, offset: 1231 }
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
                        type: 'inlineCode',
                        value: 'server',
                        position: {
                          start: { line: 30, column: 5, offset: 1236 },
                          end: { line: 30, column: 13, offset: 1244 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 30, column: 13, offset: 1244 },
                          end: { line: 30, column: 16, offset: 1247 }
                        }
                      },
                      {
                        type: 'link',
                        title: null,
                        url: '/docs/DatabaseLoadBalancer',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'DatabaseLoadBalancer',
                            position: {
                              start: { line: 30, column: 17, offset: 1248 },
                              end: { line: 30, column: 39, offset: 1270 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 30, column: 16, offset: 1247 },
                          end: { line: 30, column: 68, offset: 1299 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - a DatabaseLoadBalancer instance.',
                        position: {
                          start: { line: 30, column: 68, offset: 1299 },
                          end: { line: 30, column: 103, offset: 1334 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 30, column: 5, offset: 1236 },
                      end: { line: 30, column: 103, offset: 1334 }
                    }
                  }
                ],
                position: {
                  start: { line: 30, column: 3, offset: 1234 },
                  end: { line: 30, column: 103, offset: 1334 }
                }
              }
            ],
            position: {
              start: { line: 30, column: 3, offset: 1234 },
              end: { line: 30, column: 103, offset: 1334 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: 'const server = new DatabaseLoadBalancer({\n' +
              '  serverAddresses: ["10.0.0.1:8080", "10.0.0.2:8080", "10.0.0.3:8080"],\n' +
              '})\n' +
              '\n' +
              'server.listen(8080, () => {\n' +
              '  console.log("Database load balancer server listening on port 8080")\n' +
              '})',
            position: {
              start: { line: 32, column: 1, offset: 1336 },
              end: { line: 40, column: 4, offset: 1572 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 40, column: 4, offset: 1572 }
        }
      }
    },
    methods: [
      {
        name: 'listen',
        docs: '```specscript\n' +
          'listen(port number) -> undefined\n' +
          'listen(port number, callback function) -> undefined\n' +
          '```\n' +
          '\n' +
          'Starts the database load balancer server listening on the specified port with an optional callback function.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `port` - `number` - the port on which the database load balancer server will listen.\n' +
          '  * `callback` - `function` - a callback function to call once the database load balancer server has started listening.\n' +
          '\n' +
          'Return:\n' +
          '  * `undefined`\n' +
          '\n' +
          '```javascript\n' +
          'server.listen(8080)\n' +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'listen',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 7, offset: 6 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'listen(port number) -> undefined\n' +
                  'listen(port number, callback function) -> undefined',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 4, column: 4, offset: 102 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Starts the database load balancer server listening on the specified port with an optional callback function.',
                    position: {
                      start: { line: 6, column: 1, offset: 104 },
                      end: { line: 6, column: 109, offset: 212 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 1, offset: 104 },
                  end: { line: 6, column: 109, offset: 212 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 8, column: 1, offset: 214 },
                      end: { line: 8, column: 11, offset: 224 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 1, offset: 214 },
                  end: { line: 8, column: 11, offset: 224 }
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
                            type: 'inlineCode',
                            value: 'port',
                            position: {
                              start: { line: 9, column: 5, offset: 229 },
                              end: { line: 9, column: 11, offset: 235 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 9, column: 11, offset: 235 },
                              end: { line: 9, column: 14, offset: 238 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'number',
                            position: {
                              start: { line: 9, column: 14, offset: 238 },
                              end: { line: 9, column: 22, offset: 246 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the port on which the database load balancer server will listen.',
                            position: {
                              start: { line: 9, column: 22, offset: 246 },
                              end: { line: 9, column: 89, offset: 313 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 9, column: 5, offset: 229 },
                          end: { line: 9, column: 89, offset: 313 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 3, offset: 227 },
                      end: { line: 9, column: 89, offset: 313 }
                    }
                  },
                  {
                    type: 'listItem',
                    spread: false,
                    checked: null,
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'callback',
                            position: {
                              start: { line: 10, column: 5, offset: 318 },
                              end: { line: 10, column: 15, offset: 328 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 10, column: 15, offset: 328 },
                              end: { line: 10, column: 18, offset: 331 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'function',
                            position: {
                              start: { line: 10, column: 18, offset: 331 },
                              end: { line: 10, column: 28, offset: 341 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a callback function to call once the database load balancer server has started listening.',
                            position: {
                              start: { line: 10, column: 28, offset: 341 },
                              end: { line: 10, column: 120, offset: 433 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 10, column: 5, offset: 318 },
                          end: { line: 10, column: 120, offset: 433 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 10, column: 3, offset: 316 },
                      end: { line: 10, column: 120, offset: 433 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 3, offset: 227 },
                  end: { line: 10, column: 120, offset: 433 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 12, column: 1, offset: 435 },
                      end: { line: 12, column: 8, offset: 442 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 1, offset: 435 },
                  end: { line: 12, column: 8, offset: 442 }
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
                            type: 'inlineCode',
                            value: 'undefined',
                            position: {
                              start: { line: 13, column: 5, offset: 447 },
                              end: { line: 13, column: 16, offset: 458 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 13, column: 5, offset: 447 },
                          end: { line: 13, column: 16, offset: 458 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 13, column: 3, offset: 445 },
                      end: { line: 13, column: 16, offset: 458 }
                    }
                  }
                ],
                position: {
                  start: { line: 13, column: 3, offset: 445 },
                  end: { line: 13, column: 16, offset: 458 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'server.listen(8080)',
                position: {
                  start: { line: 15, column: 1, offset: 460 },
                  end: { line: 17, column: 4, offset: 497 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 17, column: 4, offset: 497 }
            }
          }
        }
      },
      {
        name: 'close',
        docs: '```specscript\n' +
          'close() -> undefined\n' +
          '```\n' +
          '\n' +
          'Closes the database load balancer server.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none)\n' +
          '\n' +
          'Return:\n' +
          '  * `undefined`\n' +
          '\n' +
          '```javascript\n' +
          'server.close()\n' +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'close',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 6, offset: 5 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'close() -> undefined',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 38 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Closes the database load balancer server.',
                    position: {
                      start: { line: 5, column: 1, offset: 40 },
                      end: { line: 5, column: 42, offset: 81 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 40 },
                  end: { line: 5, column: 42, offset: 81 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 83 },
                      end: { line: 7, column: 11, offset: 93 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 83 },
                  end: { line: 7, column: 11, offset: 93 }
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
                            value: '(none)',
                            position: {
                              start: { line: 8, column: 5, offset: 98 },
                              end: { line: 8, column: 11, offset: 104 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 98 },
                          end: { line: 8, column: 11, offset: 104 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 96 },
                      end: { line: 8, column: 11, offset: 104 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 96 },
                  end: { line: 8, column: 11, offset: 104 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 106 },
                      end: { line: 10, column: 8, offset: 113 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 106 },
                  end: { line: 10, column: 8, offset: 113 }
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
                            type: 'inlineCode',
                            value: 'undefined',
                            position: {
                              start: { line: 11, column: 5, offset: 118 },
                              end: { line: 11, column: 16, offset: 129 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 118 },
                          end: { line: 11, column: 16, offset: 129 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 116 },
                      end: { line: 11, column: 16, offset: 129 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 116 },
                  end: { line: 11, column: 16, offset: 129 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'server.close()',
                position: {
                  start: { line: 13, column: 1, offset: 131 },
                  end: { line: 15, column: 4, offset: 163 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 163 }
            }
          }
        }
      }
    ],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/DatabaseLoadBalancer.js'
  },
  {
    name: 'DatabaseServer',
    docs: '```specscript\n' +
      'module http "https://nodejs.org/api/http.html"\n' +
      '\n' +
      'type HttpHandler(http.ClientRequest, http.ServerResponse) -> Promise<>|undefined\n' +
      '\n' +
      'new DatabaseServer(options {\n' +
      '  databasePath: string,\n' +
      '  delimiter: string,\n' +
      '}, ...handlers Arguments<HttpHandler>) -> server DatabaseServer\n' +
      '```\n' +
      '\n' +
      'Presidium DatabaseServer class. Creates a database server.\n' +
      '\n' +
      'Arguments:\n' +
      '  * `options`\n' +
      '    * `databasePath` - `string` - the absolute path on the machine running the database server to the database files.\n' +
      '    * `delimiter` - `string` - a character or string that will separate chunks of data as they are sent to the database client. Defaults to the escape character "^[".\n' +
      '  * `handlers` - `Arguments<HttpHandler>` - HTTP handlers that process the request in order before it is processed by the database server.\n' +
      '\n' +
      'Return:\n' +
      '  * `server` - [`DatabaseServer`](/docs/DatabaseServer) - a DatabaseServer instance.\n' +
      '\n' +
      '```javascript\n' +
      'const server = new DatabaseServer({\n' +
      '  databasePath: `${__dirname}/database`,\n' +
      '})\n' +
      '\n' +
      'server.listen(8080, () => {\n' +
      '  console.log("Database server listening on port 8080")\n' +
      '})\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'DatabaseServer',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 15, offset: 14 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 15, offset: 14 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'specscript',
            meta: null,
            value: 'module http "https://nodejs.org/api/http.html"\n' +
              '\n' +
              'type HttpHandler(http.ClientRequest, http.ServerResponse) -> Promise<>|undefined\n' +
              '\n' +
              'new DatabaseServer(options {\n' +
              '  databasePath: string,\n' +
              '  delimiter: string,\n' +
              '}, ...handlers Arguments<HttpHandler>) -> server DatabaseServer',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 10, column: 4, offset: 285 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Presidium DatabaseServer class. Creates a database server.',
                position: {
                  start: { line: 12, column: 1, offset: 287 },
                  end: { line: 12, column: 59, offset: 345 }
                }
              }
            ],
            position: {
              start: { line: 12, column: 1, offset: 287 },
              end: { line: 12, column: 59, offset: 345 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Arguments:',
                position: {
                  start: { line: 14, column: 1, offset: 347 },
                  end: { line: 14, column: 11, offset: 357 }
                }
              }
            ],
            position: {
              start: { line: 14, column: 1, offset: 347 },
              end: { line: 14, column: 11, offset: 357 }
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
                        type: 'inlineCode',
                        value: 'options',
                        position: {
                          start: { line: 15, column: 5, offset: 362 },
                          end: { line: 15, column: 14, offset: 371 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 15, column: 5, offset: 362 },
                      end: { line: 15, column: 14, offset: 371 }
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
                                type: 'inlineCode',
                                value: 'databasePath',
                                position: {
                                  start: { line: 16, column: 7, offset: 378 },
                                  end: { line: 16, column: 21, offset: 392 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 16, column: 21, offset: 392 },
                                  end: { line: 16, column: 24, offset: 395 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'string',
                                position: {
                                  start: { line: 16, column: 24, offset: 395 },
                                  end: { line: 16, column: 32, offset: 403 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the absolute path on the machine running the database server to the database files.',
                                position: {
                                  start: { line: 16, column: 32, offset: 403 },
                                  end: {
                                    line: 16,
                                    column: 118,
                                    offset: 489
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 16, column: 7, offset: 378 },
                              end: { line: 16, column: 118, offset: 489 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 16, column: 5, offset: 376 },
                          end: { line: 16, column: 118, offset: 489 }
                        }
                      },
                      {
                        type: 'listItem',
                        spread: false,
                        checked: null,
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'inlineCode',
                                value: 'delimiter',
                                position: {
                                  start: { line: 17, column: 7, offset: 496 },
                                  end: { line: 17, column: 18, offset: 507 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 17, column: 18, offset: 507 },
                                  end: { line: 17, column: 21, offset: 510 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'string',
                                position: {
                                  start: { line: 17, column: 21, offset: 510 },
                                  end: { line: 17, column: 29, offset: 518 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - a character or string that will separate chunks of data as they are sent to the database client. Defaults to the escape character "^[".',
                                position: {
                                  start: { line: 17, column: 29, offset: 518 },
                                  end: {
                                    line: 17,
                                    column: 167,
                                    offset: 656
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 17, column: 7, offset: 496 },
                              end: { line: 17, column: 167, offset: 656 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 17, column: 5, offset: 494 },
                          end: { line: 17, column: 167, offset: 656 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 16, column: 5, offset: 376 },
                      end: { line: 17, column: 167, offset: 656 }
                    }
                  }
                ],
                position: {
                  start: { line: 15, column: 3, offset: 360 },
                  end: { line: 17, column: 167, offset: 656 }
                }
              },
              {
                type: 'listItem',
                spread: false,
                checked: null,
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'inlineCode',
                        value: 'handlers',
                        position: {
                          start: { line: 18, column: 5, offset: 661 },
                          end: { line: 18, column: 15, offset: 671 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 18, column: 15, offset: 671 },
                          end: { line: 18, column: 18, offset: 674 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'Arguments<HttpHandler>',
                        position: {
                          start: { line: 18, column: 18, offset: 674 },
                          end: { line: 18, column: 42, offset: 698 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - HTTP handlers that process the request in order before it is processed by the database server.',
                        position: {
                          start: { line: 18, column: 42, offset: 698 },
                          end: { line: 18, column: 139, offset: 795 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 18, column: 5, offset: 661 },
                      end: { line: 18, column: 139, offset: 795 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 3, offset: 659 },
                  end: { line: 18, column: 139, offset: 795 }
                }
              }
            ],
            position: {
              start: { line: 15, column: 3, offset: 360 },
              end: { line: 18, column: 139, offset: 795 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Return:',
                position: {
                  start: { line: 20, column: 1, offset: 797 },
                  end: { line: 20, column: 8, offset: 804 }
                }
              }
            ],
            position: {
              start: { line: 20, column: 1, offset: 797 },
              end: { line: 20, column: 8, offset: 804 }
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
                        type: 'inlineCode',
                        value: 'server',
                        position: {
                          start: { line: 21, column: 5, offset: 809 },
                          end: { line: 21, column: 13, offset: 817 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 21, column: 13, offset: 817 },
                          end: { line: 21, column: 16, offset: 820 }
                        }
                      },
                      {
                        type: 'link',
                        title: null,
                        url: '/docs/DatabaseServer',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'DatabaseServer',
                            position: {
                              start: { line: 21, column: 17, offset: 821 },
                              end: { line: 21, column: 33, offset: 837 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 16, offset: 820 },
                          end: { line: 21, column: 56, offset: 860 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - a DatabaseServer instance.',
                        position: {
                          start: { line: 21, column: 56, offset: 860 },
                          end: { line: 21, column: 85, offset: 889 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 21, column: 5, offset: 809 },
                      end: { line: 21, column: 85, offset: 889 }
                    }
                  }
                ],
                position: {
                  start: { line: 21, column: 3, offset: 807 },
                  end: { line: 21, column: 85, offset: 889 }
                }
              }
            ],
            position: {
              start: { line: 21, column: 3, offset: 807 },
              end: { line: 21, column: 85, offset: 889 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: 'const server = new DatabaseServer({\n' +
              '  databasePath: `${__dirname}/database`,\n' +
              '})\n' +
              '\n' +
              'server.listen(8080, () => {\n' +
              '  console.log("Database server listening on port 8080")\n' +
              '})',
            position: {
              start: { line: 23, column: 1, offset: 891 },
              end: { line: 31, column: 4, offset: 1076 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 31, column: 4, offset: 1076 }
        }
      }
    },
    methods: [
      {
        name: 'listen',
        docs: '```specscript\n' +
          'listen(port number) -> undefined\n' +
          'listen(port number, callback function) -> undefined\n' +
          '```\n' +
          '\n' +
          'Starts the database server listening on the specified port with an optional callback function.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `port` - `number` - the port on which the database server will listen.\n' +
          '  * `callback` - `function` - a callback function to call once the database server has started listening.\n' +
          '\n' +
          'Return:\n' +
          '  * `undefined`\n' +
          '\n' +
          '```javascript\n' +
          'server.listen(8080)\n' +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'listen',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 7, offset: 6 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'listen(port number) -> undefined\n' +
                  'listen(port number, callback function) -> undefined',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 4, column: 4, offset: 102 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Starts the database server listening on the specified port with an optional callback function.',
                    position: {
                      start: { line: 6, column: 1, offset: 104 },
                      end: { line: 6, column: 95, offset: 198 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 1, offset: 104 },
                  end: { line: 6, column: 95, offset: 198 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 8, column: 1, offset: 200 },
                      end: { line: 8, column: 11, offset: 210 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 1, offset: 200 },
                  end: { line: 8, column: 11, offset: 210 }
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
                            type: 'inlineCode',
                            value: 'port',
                            position: {
                              start: { line: 9, column: 5, offset: 215 },
                              end: { line: 9, column: 11, offset: 221 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 9, column: 11, offset: 221 },
                              end: { line: 9, column: 14, offset: 224 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'number',
                            position: {
                              start: { line: 9, column: 14, offset: 224 },
                              end: { line: 9, column: 22, offset: 232 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the port on which the database server will listen.',
                            position: {
                              start: { line: 9, column: 22, offset: 232 },
                              end: { line: 9, column: 75, offset: 285 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 9, column: 5, offset: 215 },
                          end: { line: 9, column: 75, offset: 285 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 3, offset: 213 },
                      end: { line: 9, column: 75, offset: 285 }
                    }
                  },
                  {
                    type: 'listItem',
                    spread: false,
                    checked: null,
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'callback',
                            position: {
                              start: { line: 10, column: 5, offset: 290 },
                              end: { line: 10, column: 15, offset: 300 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 10, column: 15, offset: 300 },
                              end: { line: 10, column: 18, offset: 303 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'function',
                            position: {
                              start: { line: 10, column: 18, offset: 303 },
                              end: { line: 10, column: 28, offset: 313 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a callback function to call once the database server has started listening.',
                            position: {
                              start: { line: 10, column: 28, offset: 313 },
                              end: { line: 10, column: 106, offset: 391 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 10, column: 5, offset: 290 },
                          end: { line: 10, column: 106, offset: 391 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 10, column: 3, offset: 288 },
                      end: { line: 10, column: 106, offset: 391 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 3, offset: 213 },
                  end: { line: 10, column: 106, offset: 391 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 12, column: 1, offset: 393 },
                      end: { line: 12, column: 8, offset: 400 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 1, offset: 393 },
                  end: { line: 12, column: 8, offset: 400 }
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
                            type: 'inlineCode',
                            value: 'undefined',
                            position: {
                              start: { line: 13, column: 5, offset: 405 },
                              end: { line: 13, column: 16, offset: 416 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 13, column: 5, offset: 405 },
                          end: { line: 13, column: 16, offset: 416 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 13, column: 3, offset: 403 },
                      end: { line: 13, column: 16, offset: 416 }
                    }
                  }
                ],
                position: {
                  start: { line: 13, column: 3, offset: 403 },
                  end: { line: 13, column: 16, offset: 416 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'server.listen(8080)',
                position: {
                  start: { line: 15, column: 1, offset: 418 },
                  end: { line: 17, column: 4, offset: 455 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 17, column: 4, offset: 455 }
            }
          }
        }
      },
      {
        name: 'close',
        docs: '```specscript\n' +
          'close() -> undefined\n' +
          '```\n' +
          '\n' +
          'Closes the database server.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none)\n' +
          '\n' +
          'Return:\n' +
          '  * `undefined`\n' +
          '\n' +
          '```javascript\n' +
          'server.close()\n' +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'close',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 6, offset: 5 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'close() -> undefined',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 38 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Closes the database server.',
                    position: {
                      start: { line: 5, column: 1, offset: 40 },
                      end: { line: 5, column: 28, offset: 67 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 40 },
                  end: { line: 5, column: 28, offset: 67 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 69 },
                      end: { line: 7, column: 11, offset: 79 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 69 },
                  end: { line: 7, column: 11, offset: 79 }
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
                            value: '(none)',
                            position: {
                              start: { line: 8, column: 5, offset: 84 },
                              end: { line: 8, column: 11, offset: 90 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 84 },
                          end: { line: 8, column: 11, offset: 90 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 82 },
                      end: { line: 8, column: 11, offset: 90 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 82 },
                  end: { line: 8, column: 11, offset: 90 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 92 },
                      end: { line: 10, column: 8, offset: 99 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 92 },
                  end: { line: 10, column: 8, offset: 99 }
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
                            type: 'inlineCode',
                            value: 'undefined',
                            position: {
                              start: { line: 11, column: 5, offset: 104 },
                              end: { line: 11, column: 16, offset: 115 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 104 },
                          end: { line: 11, column: 16, offset: 115 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 102 },
                      end: { line: 11, column: 16, offset: 115 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 102 },
                  end: { line: 11, column: 16, offset: 115 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'server.close()',
                position: {
                  start: { line: 13, column: 1, offset: 117 },
                  end: { line: 15, column: 4, offset: 149 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 149 }
            }
          }
        }
      },
      {
        name: 'registerDiskHashTable',
        docs: '```specscript\n' +
          'registerDiskHashTable(tableName string, config {\n' +
          '  initialLength: number,\n' +
          '  itemSize: number,\n' +
          '  resizeRatio: number,\n' +
          '  resizeFactor: number,\n' +
          '}) -> Promise<>\n' +
          '```\n' +
          '\n' +
          'Registers a [DiskHashTable](/docs/DiskHashTable) instance with the database server. Initializes the specified table.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `tableName` - `string` - the name of the registered DiskHashTable instance.\n' +
          '  * `config`\n' +
          '    * `initialLength` - `number` - the initial length of the disk hash table. Minimum value 1, maximum value `Math.floor(9007199254740991 / itemSize)`. Defaults to 1024.\n' +
          '    * `itemSize` - `number` - the size in bytes of each item (including internal item info, key, and value) stored on disk. Minimum value 17. Defaults to 524288.\n' +
          '    * `resizeRatio` - `number` - the ratio of number of items to table length at which to resize the disk hash table. Minimum value 0 (no resize), maximum value 1. Defaults to 0.\n' +
          "    * `resizeFactor` - `number` - the factor that is multiplied with the disk hash table's current length to determine the new table length on a resize.\n" +
          '\n' +
          'Return:\n' +
          '  * Empty promise.\n' +
          '\n' +
          '```javascript\n' +
          'await server.registerDiskHashTable("Profile", {\n' +
          '  initialLength: 1073741824,\n' +
          '  itemSize: 4096,\n' +
          '})\n' +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'registerDiskHashTable',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 22, offset: 21 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 22, offset: 21 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 22, offset: 21 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'registerDiskHashTable(tableName string, config {\n' +
                  '  initialLength: number,\n' +
                  '  itemSize: number,\n' +
                  '  resizeRatio: number,\n' +
                  '  resizeFactor: number,\n' +
                  '}) -> Promise<>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 8, column: 4, offset: 174 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Registers a ',
                    position: {
                      start: { line: 10, column: 1, offset: 176 },
                      end: { line: 10, column: 13, offset: 188 }
                    }
                  },
                  {
                    type: 'link',
                    title: null,
                    url: '/docs/DiskHashTable',
                    children: [
                      {
                        type: 'text',
                        value: 'DiskHashTable',
                        position: {
                          start: { line: 10, column: 14, offset: 189 },
                          end: { line: 10, column: 27, offset: 202 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 10, column: 13, offset: 188 },
                      end: { line: 10, column: 49, offset: 224 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' instance with the database server. Initializes the specified table.',
                    position: {
                      start: { line: 10, column: 49, offset: 224 },
                      end: { line: 10, column: 117, offset: 292 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 176 },
                  end: { line: 10, column: 117, offset: 292 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 12, column: 1, offset: 294 },
                      end: { line: 12, column: 11, offset: 304 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 1, offset: 294 },
                  end: { line: 12, column: 11, offset: 304 }
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
                            type: 'inlineCode',
                            value: 'tableName',
                            position: {
                              start: { line: 13, column: 5, offset: 309 },
                              end: { line: 13, column: 16, offset: 320 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 13, column: 16, offset: 320 },
                              end: { line: 13, column: 19, offset: 323 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 13, column: 19, offset: 323 },
                              end: { line: 13, column: 27, offset: 331 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the name of the registered DiskHashTable instance.',
                            position: {
                              start: { line: 13, column: 27, offset: 331 },
                              end: { line: 13, column: 80, offset: 384 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 13, column: 5, offset: 309 },
                          end: { line: 13, column: 80, offset: 384 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 13, column: 3, offset: 307 },
                      end: { line: 13, column: 80, offset: 384 }
                    }
                  },
                  {
                    type: 'listItem',
                    spread: false,
                    checked: null,
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'config',
                            position: {
                              start: { line: 14, column: 5, offset: 389 },
                              end: { line: 14, column: 13, offset: 397 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 14, column: 5, offset: 389 },
                          end: { line: 14, column: 13, offset: 397 }
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
                                    type: 'inlineCode',
                                    value: 'initialLength',
                                    position: {
                                      start: {
                                        line: 15,
                                        column: 7,
                                        offset: 404
                                      },
                                      end: {
                                        line: 15,
                                        column: 22,
                                        offset: 419
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 15,
                                        column: 22,
                                        offset: 419
                                      },
                                      end: {
                                        line: 15,
                                        column: 25,
                                        offset: 422
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'number',
                                    position: {
                                      start: {
                                        line: 15,
                                        column: 25,
                                        offset: 422
                                      },
                                      end: {
                                        line: 15,
                                        column: 33,
                                        offset: 430
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the initial length of the disk hash table. Minimum value 1, maximum value ',
                                    position: {
                                      start: {
                                        line: 15,
                                        column: 33,
                                        offset: 430
                                      },
                                      end: {
                                        line: 15,
                                        column: 110,
                                        offset: 507
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'Math.floor(9007199254740991 / itemSize)',
                                    position: {
                                      start: {
                                        line: 15,
                                        column: 110,
                                        offset: 507
                                      },
                                      end: {
                                        line: 15,
                                        column: 151,
                                        offset: 548
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: '. Defaults to 1024.',
                                    position: {
                                      start: {
                                        line: 15,
                                        column: 151,
                                        offset: 548
                                      },
                                      end: {
                                        line: 15,
                                        column: 170,
                                        offset: 567
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 15, column: 7, offset: 404 },
                                  end: {
                                    line: 15,
                                    column: 170,
                                    offset: 567
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 15, column: 5, offset: 402 },
                              end: { line: 15, column: 170, offset: 567 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'itemSize',
                                    position: {
                                      start: {
                                        line: 16,
                                        column: 7,
                                        offset: 574
                                      },
                                      end: {
                                        line: 16,
                                        column: 17,
                                        offset: 584
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 16,
                                        column: 17,
                                        offset: 584
                                      },
                                      end: {
                                        line: 16,
                                        column: 20,
                                        offset: 587
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'number',
                                    position: {
                                      start: {
                                        line: 16,
                                        column: 20,
                                        offset: 587
                                      },
                                      end: {
                                        line: 16,
                                        column: 28,
                                        offset: 595
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the size in bytes of each item (including internal item info, key, and value) stored on disk. Minimum value 17. Defaults to 524288.',
                                    position: {
                                      start: {
                                        line: 16,
                                        column: 28,
                                        offset: 595
                                      },
                                      end: {
                                        line: 16,
                                        column: 162,
                                        offset: 729
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 16, column: 7, offset: 574 },
                                  end: {
                                    line: 16,
                                    column: 162,
                                    offset: 729
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 16, column: 5, offset: 572 },
                              end: { line: 16, column: 162, offset: 729 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'resizeRatio',
                                    position: {
                                      start: {
                                        line: 17,
                                        column: 7,
                                        offset: 736
                                      },
                                      end: {
                                        line: 17,
                                        column: 20,
                                        offset: 749
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 17,
                                        column: 20,
                                        offset: 749
                                      },
                                      end: {
                                        line: 17,
                                        column: 23,
                                        offset: 752
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'number',
                                    position: {
                                      start: {
                                        line: 17,
                                        column: 23,
                                        offset: 752
                                      },
                                      end: {
                                        line: 17,
                                        column: 31,
                                        offset: 760
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the ratio of number of items to table length at which to resize the disk hash table. Minimum value 0 (no resize), maximum value 1. Defaults to 0.',
                                    position: {
                                      start: {
                                        line: 17,
                                        column: 31,
                                        offset: 760
                                      },
                                      end: {
                                        line: 17,
                                        column: 179,
                                        offset: 908
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 17, column: 7, offset: 736 },
                                  end: {
                                    line: 17,
                                    column: 179,
                                    offset: 908
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 17, column: 5, offset: 734 },
                              end: { line: 17, column: 179, offset: 908 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'resizeFactor',
                                    position: {
                                      start: {
                                        line: 18,
                                        column: 7,
                                        offset: 915
                                      },
                                      end: {
                                        line: 18,
                                        column: 21,
                                        offset: 929
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 18,
                                        column: 21,
                                        offset: 929
                                      },
                                      end: {
                                        line: 18,
                                        column: 24,
                                        offset: 932
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'number',
                                    position: {
                                      start: {
                                        line: 18,
                                        column: 24,
                                        offset: 932
                                      },
                                      end: {
                                        line: 18,
                                        column: 32,
                                        offset: 940
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: " - the factor that is multiplied with the disk hash table's current length to determine the new table length on a resize.",
                                    position: {
                                      start: {
                                        line: 18,
                                        column: 32,
                                        offset: 940
                                      },
                                      end: {
                                        line: 18,
                                        column: 153,
                                        offset: 1061
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 18, column: 7, offset: 915 },
                                  end: {
                                    line: 18,
                                    column: 153,
                                    offset: 1061
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 18, column: 5, offset: 913 },
                              end: { line: 18, column: 153, offset: 1061 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 15, column: 5, offset: 402 },
                          end: { line: 18, column: 153, offset: 1061 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 14, column: 3, offset: 387 },
                      end: { line: 18, column: 153, offset: 1061 }
                    }
                  }
                ],
                position: {
                  start: { line: 13, column: 3, offset: 307 },
                  end: { line: 18, column: 153, offset: 1061 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 20, column: 1, offset: 1063 },
                      end: { line: 20, column: 8, offset: 1070 }
                    }
                  }
                ],
                position: {
                  start: { line: 20, column: 1, offset: 1063 },
                  end: { line: 20, column: 8, offset: 1070 }
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
                            value: 'Empty promise.',
                            position: {
                              start: { line: 21, column: 5, offset: 1075 },
                              end: { line: 21, column: 19, offset: 1089 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 5, offset: 1075 },
                          end: { line: 21, column: 19, offset: 1089 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 21, column: 3, offset: 1073 },
                      end: { line: 21, column: 19, offset: 1089 }
                    }
                  }
                ],
                position: {
                  start: { line: 21, column: 3, offset: 1073 },
                  end: { line: 21, column: 19, offset: 1089 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await server.registerDiskHashTable("Profile", {\n' +
                  '  initialLength: 1073741824,\n' +
                  '  itemSize: 4096,\n' +
                  '})',
                position: {
                  start: { line: 23, column: 1, offset: 1091 },
                  end: { line: 28, column: 4, offset: 1206 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 28, column: 4, offset: 1206 }
            }
          }
        }
      },
      {
        name: 'registerDiskSortedHashTable',
        docs: '```specscript\n' +
          'registerDiskSortedHashTable(tableName string, config {\n' +
          '  initialLength: number,\n' +
          '  itemSize: number,\n' +
          '  sortValueType: "string"|"number"|Array<"string"|"number">,\n' +
          '  resizeRatio: number,\n' +
          '  resizeFactor: number,\n' +
          '  degree: number,\n' +
          '}) -> Promise<>\n' +
          '```\n' +
          '\n' +
          'Registers a [DiskSortedHashTable](/docs/DiskSortedHashTable) instance with the database server. Initializes the specified table.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `tableName` - `string` - the name of the registered DiskSortedHashTable instance.\n' +
          '  * `config`\n' +
          '    * `initialLength` - `number` - the initial length of the disk sorted hash table. Minimum value 1, maximum value `Math.floor(9007199254740991 / itemSize)`. Defaults to 1024.\n' +
          '    * `itemSize` - `number` - the size in bytes of each item (including internal item info, key, value, and sortValue) stored on disk. Minimum value 54. Defaults to 524288.\n' +
          '    * `sortValueType` - `"string"|"number"|Array<"string"|"number">` - the type of the disk sorted hash table sort values. If this value is an array, the sort value will be treated as a composite sort value. A composite sort value has each element of the array compared in order.\n' +
          '    * `resizeRatio` - `number` - the ratio of number of items to table length at which to resize the disk sorted hash table. Minimum value 0 (no resize), maximum value 1. Defaults to 0.\n' +
          "    * `resizeFactor` - `number` - the factor that is multiplied with the disk sorted hash table's current length to determine the new table length on a resize.\n" +
          '    * `degree` - `number` - minimum value 2, defaults to 2 - defines the following parameters for the internal b-tree that organizes all of the items in the disk sorted hash table:\n' +
          '      * Minimum number of items per b-tree node: `degree - 1`\n' +
          '      * Maximum number of items per b-tree node: `(2 * degree) - 1`\n' +
          '      * Minimum number of children per b-tree node: `degree`\n' +
          '      * Maximum number of children per b-tree node: `2 * degree`\n' +
          '\n' +
          'Return:\n' +
          '  * Empty promise.\n' +
          '\n' +
          '```javascript\n' +
          'await server.registerDiskHashTable("Profile", {\n' +
          '  initialLength: 1073741824,\n' +
          '  itemSize: 4096,\n' +
          '})\n' +
          '```\n' +
          '\n' +
          '## Optimizing the disk sorted hash table b-tree\n' +
          'The value of `degree` determines the structure of the internal b-tree of the disk sorted hash table. A higher value for `degree` results in a shorter b-tree and more items per b-tree node, while a lower value results in a taller b-tree and fewer items per b-tree node. The default value of 2 is good for any number of items.',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'registerDiskSortedHashTable',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 28, offset: 27 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 28, offset: 27 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 28, offset: 27 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'registerDiskSortedHashTable(tableName string, config {\n' +
                  '  initialLength: number,\n' +
                  '  itemSize: number,\n' +
                  '  sortValueType: "string"|"number"|Array<"string"|"number">,\n' +
                  '  resizeRatio: number,\n' +
                  '  resizeFactor: number,\n' +
                  '  degree: number,\n' +
                  '}) -> Promise<>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 10, column: 4, offset: 259 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Registers a ',
                    position: {
                      start: { line: 12, column: 1, offset: 261 },
                      end: { line: 12, column: 13, offset: 273 }
                    }
                  },
                  {
                    type: 'link',
                    title: null,
                    url: '/docs/DiskSortedHashTable',
                    children: [
                      {
                        type: 'text',
                        value: 'DiskSortedHashTable',
                        position: {
                          start: { line: 12, column: 14, offset: 274 },
                          end: { line: 12, column: 33, offset: 293 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 13, offset: 273 },
                      end: { line: 12, column: 61, offset: 321 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' instance with the database server. Initializes the specified table.',
                    position: {
                      start: { line: 12, column: 61, offset: 321 },
                      end: { line: 12, column: 129, offset: 389 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 1, offset: 261 },
                  end: { line: 12, column: 129, offset: 389 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 14, column: 1, offset: 391 },
                      end: { line: 14, column: 11, offset: 401 }
                    }
                  }
                ],
                position: {
                  start: { line: 14, column: 1, offset: 391 },
                  end: { line: 14, column: 11, offset: 401 }
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
                            type: 'inlineCode',
                            value: 'tableName',
                            position: {
                              start: { line: 15, column: 5, offset: 406 },
                              end: { line: 15, column: 16, offset: 417 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 15, column: 16, offset: 417 },
                              end: { line: 15, column: 19, offset: 420 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 15, column: 19, offset: 420 },
                              end: { line: 15, column: 27, offset: 428 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the name of the registered DiskSortedHashTable instance.',
                            position: {
                              start: { line: 15, column: 27, offset: 428 },
                              end: { line: 15, column: 86, offset: 487 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 15, column: 5, offset: 406 },
                          end: { line: 15, column: 86, offset: 487 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 15, column: 3, offset: 404 },
                      end: { line: 15, column: 86, offset: 487 }
                    }
                  },
                  {
                    type: 'listItem',
                    spread: false,
                    checked: null,
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'config',
                            position: {
                              start: { line: 16, column: 5, offset: 492 },
                              end: { line: 16, column: 13, offset: 500 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 16, column: 5, offset: 492 },
                          end: { line: 16, column: 13, offset: 500 }
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
                                    type: 'inlineCode',
                                    value: 'initialLength',
                                    position: {
                                      start: {
                                        line: 17,
                                        column: 7,
                                        offset: 507
                                      },
                                      end: {
                                        line: 17,
                                        column: 22,
                                        offset: 522
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 17,
                                        column: 22,
                                        offset: 522
                                      },
                                      end: {
                                        line: 17,
                                        column: 25,
                                        offset: 525
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'number',
                                    position: {
                                      start: {
                                        line: 17,
                                        column: 25,
                                        offset: 525
                                      },
                                      end: {
                                        line: 17,
                                        column: 33,
                                        offset: 533
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the initial length of the disk sorted hash table. Minimum value 1, maximum value ',
                                    position: {
                                      start: {
                                        line: 17,
                                        column: 33,
                                        offset: 533
                                      },
                                      end: {
                                        line: 17,
                                        column: 117,
                                        offset: 617
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'Math.floor(9007199254740991 / itemSize)',
                                    position: {
                                      start: {
                                        line: 17,
                                        column: 117,
                                        offset: 617
                                      },
                                      end: {
                                        line: 17,
                                        column: 158,
                                        offset: 658
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: '. Defaults to 1024.',
                                    position: {
                                      start: {
                                        line: 17,
                                        column: 158,
                                        offset: 658
                                      },
                                      end: {
                                        line: 17,
                                        column: 177,
                                        offset: 677
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 17, column: 7, offset: 507 },
                                  end: {
                                    line: 17,
                                    column: 177,
                                    offset: 677
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 17, column: 5, offset: 505 },
                              end: { line: 17, column: 177, offset: 677 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'itemSize',
                                    position: {
                                      start: {
                                        line: 18,
                                        column: 7,
                                        offset: 684
                                      },
                                      end: {
                                        line: 18,
                                        column: 17,
                                        offset: 694
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 18,
                                        column: 17,
                                        offset: 694
                                      },
                                      end: {
                                        line: 18,
                                        column: 20,
                                        offset: 697
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'number',
                                    position: {
                                      start: {
                                        line: 18,
                                        column: 20,
                                        offset: 697
                                      },
                                      end: {
                                        line: 18,
                                        column: 28,
                                        offset: 705
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the size in bytes of each item (including internal item info, key, value, and sortValue) stored on disk. Minimum value 54. Defaults to 524288.',
                                    position: {
                                      start: {
                                        line: 18,
                                        column: 28,
                                        offset: 705
                                      },
                                      end: {
                                        line: 18,
                                        column: 173,
                                        offset: 850
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 18, column: 7, offset: 684 },
                                  end: {
                                    line: 18,
                                    column: 173,
                                    offset: 850
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 18, column: 5, offset: 682 },
                              end: { line: 18, column: 173, offset: 850 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'sortValueType',
                                    position: {
                                      start: {
                                        line: 19,
                                        column: 7,
                                        offset: 857
                                      },
                                      end: {
                                        line: 19,
                                        column: 22,
                                        offset: 872
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 19,
                                        column: 22,
                                        offset: 872
                                      },
                                      end: {
                                        line: 19,
                                        column: 25,
                                        offset: 875
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: '"string"|"number"|Array<"string"|"number">',
                                    position: {
                                      start: {
                                        line: 19,
                                        column: 25,
                                        offset: 875
                                      },
                                      end: {
                                        line: 19,
                                        column: 69,
                                        offset: 919
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the type of the disk sorted hash table sort values. If this value is an array, the sort value will be treated as a composite sort value. A composite sort value has each element of the array compared in order.',
                                    position: {
                                      start: {
                                        line: 19,
                                        column: 69,
                                        offset: 919
                                      },
                                      end: {
                                        line: 19,
                                        column: 280,
                                        offset: 1130
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 19, column: 7, offset: 857 },
                                  end: {
                                    line: 19,
                                    column: 280,
                                    offset: 1130
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 19, column: 5, offset: 855 },
                              end: { line: 19, column: 280, offset: 1130 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'resizeRatio',
                                    position: {
                                      start: {
                                        line: 20,
                                        column: 7,
                                        offset: 1137
                                      },
                                      end: {
                                        line: 20,
                                        column: 20,
                                        offset: 1150
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 20,
                                        column: 20,
                                        offset: 1150
                                      },
                                      end: {
                                        line: 20,
                                        column: 23,
                                        offset: 1153
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'number',
                                    position: {
                                      start: {
                                        line: 20,
                                        column: 23,
                                        offset: 1153
                                      },
                                      end: {
                                        line: 20,
                                        column: 31,
                                        offset: 1161
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the ratio of number of items to table length at which to resize the disk sorted hash table. Minimum value 0 (no resize), maximum value 1. Defaults to 0.',
                                    position: {
                                      start: {
                                        line: 20,
                                        column: 31,
                                        offset: 1161
                                      },
                                      end: {
                                        line: 20,
                                        column: 186,
                                        offset: 1316
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 20, column: 7, offset: 1137 },
                                  end: {
                                    line: 20,
                                    column: 186,
                                    offset: 1316
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 20, column: 5, offset: 1135 },
                              end: { line: 20, column: 186, offset: 1316 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'resizeFactor',
                                    position: {
                                      start: {
                                        line: 21,
                                        column: 7,
                                        offset: 1323
                                      },
                                      end: {
                                        line: 21,
                                        column: 21,
                                        offset: 1337
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 21,
                                        column: 21,
                                        offset: 1337
                                      },
                                      end: {
                                        line: 21,
                                        column: 24,
                                        offset: 1340
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'number',
                                    position: {
                                      start: {
                                        line: 21,
                                        column: 24,
                                        offset: 1340
                                      },
                                      end: {
                                        line: 21,
                                        column: 32,
                                        offset: 1348
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: " - the factor that is multiplied with the disk sorted hash table's current length to determine the new table length on a resize.",
                                    position: {
                                      start: {
                                        line: 21,
                                        column: 32,
                                        offset: 1348
                                      },
                                      end: {
                                        line: 21,
                                        column: 160,
                                        offset: 1476
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 21, column: 7, offset: 1323 },
                                  end: {
                                    line: 21,
                                    column: 160,
                                    offset: 1476
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 5, offset: 1321 },
                              end: { line: 21, column: 160, offset: 1476 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'degree',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 7,
                                        offset: 1483
                                      },
                                      end: {
                                        line: 22,
                                        column: 15,
                                        offset: 1491
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 15,
                                        offset: 1491
                                      },
                                      end: {
                                        line: 22,
                                        column: 18,
                                        offset: 1494
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'number',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 18,
                                        offset: 1494
                                      },
                                      end: {
                                        line: 22,
                                        column: 26,
                                        offset: 1502
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - minimum value 2, defaults to 2 - defines the following parameters for the internal b-tree that organizes all of the items in the disk sorted hash table:',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 26,
                                        offset: 1502
                                      },
                                      end: {
                                        line: 22,
                                        column: 181,
                                        offset: 1657
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 22, column: 7, offset: 1483 },
                                  end: {
                                    line: 22,
                                    column: 181,
                                    offset: 1657
                                  }
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
                                            value: 'Minimum number of items per b-tree node: ',
                                            position: {
                                              start: {
                                                line: 23,
                                                column: 9,
                                                offset: 1666
                                              },
                                              end: {
                                                line: 23,
                                                column: 50,
                                                offset: 1707
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'degree - 1',
                                            position: {
                                              start: {
                                                line: 23,
                                                column: 50,
                                                offset: 1707
                                              },
                                              end: {
                                                line: 23,
                                                column: 62,
                                                offset: 1719
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 23,
                                            column: 9,
                                            offset: 1666
                                          },
                                          end: {
                                            line: 23,
                                            column: 62,
                                            offset: 1719
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 7,
                                        offset: 1664
                                      },
                                      end: {
                                        line: 23,
                                        column: 62,
                                        offset: 1719
                                      }
                                    }
                                  },
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
                                            value: 'Maximum number of items per b-tree node: ',
                                            position: {
                                              start: {
                                                line: 24,
                                                column: 9,
                                                offset: 1728
                                              },
                                              end: {
                                                line: 24,
                                                column: 50,
                                                offset: 1769
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: '(2 * degree) - 1',
                                            position: {
                                              start: {
                                                line: 24,
                                                column: 50,
                                                offset: 1769
                                              },
                                              end: {
                                                line: 24,
                                                column: 68,
                                                offset: 1787
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 24,
                                            column: 9,
                                            offset: 1728
                                          },
                                          end: {
                                            line: 24,
                                            column: 68,
                                            offset: 1787
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 7,
                                        offset: 1726
                                      },
                                      end: {
                                        line: 24,
                                        column: 68,
                                        offset: 1787
                                      }
                                    }
                                  },
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
                                            value: 'Minimum number of children per b-tree node: ',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 9,
                                                offset: 1796
                                              },
                                              end: {
                                                line: 25,
                                                column: 53,
                                                offset: 1840
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'degree',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 53,
                                                offset: 1840
                                              },
                                              end: {
                                                line: 25,
                                                column: 61,
                                                offset: 1848
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 25,
                                            column: 9,
                                            offset: 1796
                                          },
                                          end: {
                                            line: 25,
                                            column: 61,
                                            offset: 1848
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 25,
                                        column: 7,
                                        offset: 1794
                                      },
                                      end: {
                                        line: 25,
                                        column: 61,
                                        offset: 1848
                                      }
                                    }
                                  },
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
                                            value: 'Maximum number of children per b-tree node: ',
                                            position: {
                                              start: {
                                                line: 26,
                                                column: 9,
                                                offset: 1857
                                              },
                                              end: {
                                                line: 26,
                                                column: 53,
                                                offset: 1901
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: '2 * degree',
                                            position: {
                                              start: {
                                                line: 26,
                                                column: 53,
                                                offset: 1901
                                              },
                                              end: {
                                                line: 26,
                                                column: 65,
                                                offset: 1913
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 26,
                                            column: 9,
                                            offset: 1857
                                          },
                                          end: {
                                            line: 26,
                                            column: 65,
                                            offset: 1913
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 26,
                                        column: 7,
                                        offset: 1855
                                      },
                                      end: {
                                        line: 26,
                                        column: 65,
                                        offset: 1913
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 23, column: 7, offset: 1664 },
                                  end: {
                                    line: 26,
                                    column: 65,
                                    offset: 1913
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 22, column: 5, offset: 1481 },
                              end: { line: 26, column: 65, offset: 1913 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 17, column: 5, offset: 505 },
                          end: { line: 26, column: 65, offset: 1913 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 16, column: 3, offset: 490 },
                      end: { line: 26, column: 65, offset: 1913 }
                    }
                  }
                ],
                position: {
                  start: { line: 15, column: 3, offset: 404 },
                  end: { line: 26, column: 65, offset: 1913 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 28, column: 1, offset: 1915 },
                      end: { line: 28, column: 8, offset: 1922 }
                    }
                  }
                ],
                position: {
                  start: { line: 28, column: 1, offset: 1915 },
                  end: { line: 28, column: 8, offset: 1922 }
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
                            value: 'Empty promise.',
                            position: {
                              start: { line: 29, column: 5, offset: 1927 },
                              end: { line: 29, column: 19, offset: 1941 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 29, column: 5, offset: 1927 },
                          end: { line: 29, column: 19, offset: 1941 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 29, column: 3, offset: 1925 },
                      end: { line: 29, column: 19, offset: 1941 }
                    }
                  }
                ],
                position: {
                  start: { line: 29, column: 3, offset: 1925 },
                  end: { line: 29, column: 19, offset: 1941 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await server.registerDiskHashTable("Profile", {\n' +
                  '  initialLength: 1073741824,\n' +
                  '  itemSize: 4096,\n' +
                  '})',
                position: {
                  start: { line: 31, column: 1, offset: 1943 },
                  end: { line: 36, column: 4, offset: 2058 }
                }
              },
              {
                type: 'heading',
                depth: 2,
                children: [
                  {
                    type: 'text',
                    value: 'Optimizing the disk sorted hash table b-tree',
                    position: {
                      start: { line: 38, column: 4, offset: 2063 },
                      end: { line: 38, column: 48, offset: 2107 }
                    }
                  }
                ],
                position: {
                  start: { line: 38, column: 1, offset: 2060 },
                  end: { line: 38, column: 48, offset: 2107 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'The value of ',
                    position: {
                      start: { line: 39, column: 1, offset: 2108 },
                      end: { line: 39, column: 14, offset: 2121 }
                    }
                  },
                  {
                    type: 'inlineCode',
                    value: 'degree',
                    position: {
                      start: { line: 39, column: 14, offset: 2121 },
                      end: { line: 39, column: 22, offset: 2129 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' determines the structure of the internal b-tree of the disk sorted hash table. A higher value for ',
                    position: {
                      start: { line: 39, column: 22, offset: 2129 },
                      end: { line: 39, column: 121, offset: 2228 }
                    }
                  },
                  {
                    type: 'inlineCode',
                    value: 'degree',
                    position: {
                      start: { line: 39, column: 121, offset: 2228 },
                      end: { line: 39, column: 129, offset: 2236 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' results in a shorter b-tree and more items per b-tree node, while a lower value results in a taller b-tree and fewer items per b-tree node. The default value of 2 is good for any number of items.',
                    position: {
                      start: { line: 39, column: 129, offset: 2236 },
                      end: { line: 39, column: 325, offset: 2432 }
                    }
                  }
                ],
                position: {
                  start: { line: 39, column: 1, offset: 2108 },
                  end: { line: 39, column: 325, offset: 2432 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 39, column: 325, offset: 2432 }
            }
          }
        }
      }
    ],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/DatabaseServer.js'
  },
  {
    name: 'DiskHashTableClient',
    docs: '```specscript\n' +
      'new DiskHashTableClient(options {\n' +
      '  serverUrl: string,\n' +
      '  tableName: string,\n' +
      '  delimiter: string,\n' +
      '  initialLength: number,\n' +
      '  itemSize: number,\n' +
      '  resizeRatio: number,\n' +
      '  resizeFactor: number,\n' +
      '}) -> ht DiskHashTableClient\n' +
      '```\n' +
      '\n' +
      'Presidium DiskHashTableClient class. Creates a disk hash table client that represents a Presidium [DiskHashTable](/docs/DiskHashTable) instance on a database server.\n' +
      '\n' +
      'Arguments:\n' +
      '  * `options`\n' +
      '    * `serverUrl` - `string` - the url of the database server.\n' +
      '    * `tableName` - `string` - the name of the DiskHashTable instance on the database server.\n' +
      '    * `delimiter` - `string` - a character or string that will separate chunks of data as they are sent to the database client. Defaults to the escape character "^[".\n' +
      '    * `initialLength` - `number` - the initial length of the disk hash table. Minimum value 1, maximum value `Math.floor(9007199254740991 / itemSize)`. Defaults to 1024.\n' +
      '    * `itemSize` - `number` - the size in bytes of each item (including internal item info, key, and value) stored on disk. Minimum value 17. Defaults to 524288.\n' +
      '    * `resizeRatio` - `number` - the ratio of number of items to table length at which to resize the disk hash table. Minimum value 0 (no resize), maximum value 1. Defaults to 0.\n' +
      "    * `resizeFactor` - `number` - the factor that is multiplied with the disk hash table's current length to determine the new table length on a resize.\n" +
      '\n' +
      'Return:\n' +
      '  * `ht` - [`DiskHashTableClient`](/docs/DiskHashTableClient) - a DiskHashTableClient instance.\n' +
      '\n' +
      '```javascript\n' +
      'const ht = new DiskHashTableClient({\n' +
      '  serverUrl: "http://your-database-load-balancer-server:8080",\n' +
      '  tableName: "Profile",\n' +
      '  initialLength: 1073741824,\n' +
      '  itemSize: 4096,\n' +
      '})\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'DiskHashTableClient',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 20, offset: 19 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 20, offset: 19 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 20, offset: 19 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'specscript',
            meta: null,
            value: 'new DiskHashTableClient(options {\n' +
              '  serverUrl: string,\n' +
              '  tableName: string,\n' +
              '  delimiter: string,\n' +
              '  initialLength: number,\n' +
              '  itemSize: number,\n' +
              '  resizeRatio: number,\n' +
              '  resizeFactor: number,\n' +
              '}) -> ht DiskHashTableClient',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 11, column: 4, offset: 235 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Presidium DiskHashTableClient class. Creates a disk hash table client that represents a Presidium ',
                position: {
                  start: { line: 13, column: 1, offset: 237 },
                  end: { line: 13, column: 99, offset: 335 }
                }
              },
              {
                type: 'link',
                title: null,
                url: '/docs/DiskHashTable',
                children: [
                  {
                    type: 'text',
                    value: 'DiskHashTable',
                    position: {
                      start: { line: 13, column: 100, offset: 336 },
                      end: { line: 13, column: 113, offset: 349 }
                    }
                  }
                ],
                position: {
                  start: { line: 13, column: 99, offset: 335 },
                  end: { line: 13, column: 135, offset: 371 }
                }
              },
              {
                type: 'text',
                value: ' instance on a database server.',
                position: {
                  start: { line: 13, column: 135, offset: 371 },
                  end: { line: 13, column: 166, offset: 402 }
                }
              }
            ],
            position: {
              start: { line: 13, column: 1, offset: 237 },
              end: { line: 13, column: 166, offset: 402 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Arguments:',
                position: {
                  start: { line: 15, column: 1, offset: 404 },
                  end: { line: 15, column: 11, offset: 414 }
                }
              }
            ],
            position: {
              start: { line: 15, column: 1, offset: 404 },
              end: { line: 15, column: 11, offset: 414 }
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
                        type: 'inlineCode',
                        value: 'options',
                        position: {
                          start: { line: 16, column: 5, offset: 419 },
                          end: { line: 16, column: 14, offset: 428 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 16, column: 5, offset: 419 },
                      end: { line: 16, column: 14, offset: 428 }
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
                                type: 'inlineCode',
                                value: 'serverUrl',
                                position: {
                                  start: { line: 17, column: 7, offset: 435 },
                                  end: { line: 17, column: 18, offset: 446 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 17, column: 18, offset: 446 },
                                  end: { line: 17, column: 21, offset: 449 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'string',
                                position: {
                                  start: { line: 17, column: 21, offset: 449 },
                                  end: { line: 17, column: 29, offset: 457 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the url of the database server.',
                                position: {
                                  start: { line: 17, column: 29, offset: 457 },
                                  end: { line: 17, column: 63, offset: 491 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 17, column: 7, offset: 435 },
                              end: { line: 17, column: 63, offset: 491 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 17, column: 5, offset: 433 },
                          end: { line: 17, column: 63, offset: 491 }
                        }
                      },
                      {
                        type: 'listItem',
                        spread: false,
                        checked: null,
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'inlineCode',
                                value: 'tableName',
                                position: {
                                  start: { line: 18, column: 7, offset: 498 },
                                  end: { line: 18, column: 18, offset: 509 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 18, column: 18, offset: 509 },
                                  end: { line: 18, column: 21, offset: 512 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'string',
                                position: {
                                  start: { line: 18, column: 21, offset: 512 },
                                  end: { line: 18, column: 29, offset: 520 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the name of the DiskHashTable instance on the database server.',
                                position: {
                                  start: { line: 18, column: 29, offset: 520 },
                                  end: { line: 18, column: 94, offset: 585 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 18, column: 7, offset: 498 },
                              end: { line: 18, column: 94, offset: 585 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 18, column: 5, offset: 496 },
                          end: { line: 18, column: 94, offset: 585 }
                        }
                      },
                      {
                        type: 'listItem',
                        spread: false,
                        checked: null,
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'inlineCode',
                                value: 'delimiter',
                                position: {
                                  start: { line: 19, column: 7, offset: 592 },
                                  end: { line: 19, column: 18, offset: 603 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 19, column: 18, offset: 603 },
                                  end: { line: 19, column: 21, offset: 606 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'string',
                                position: {
                                  start: { line: 19, column: 21, offset: 606 },
                                  end: { line: 19, column: 29, offset: 614 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - a character or string that will separate chunks of data as they are sent to the database client. Defaults to the escape character "^[".',
                                position: {
                                  start: { line: 19, column: 29, offset: 614 },
                                  end: {
                                    line: 19,
                                    column: 167,
                                    offset: 752
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 19, column: 7, offset: 592 },
                              end: { line: 19, column: 167, offset: 752 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 590 },
                          end: { line: 19, column: 167, offset: 752 }
                        }
                      },
                      {
                        type: 'listItem',
                        spread: false,
                        checked: null,
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'inlineCode',
                                value: 'initialLength',
                                position: {
                                  start: { line: 20, column: 7, offset: 759 },
                                  end: { line: 20, column: 22, offset: 774 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 20, column: 22, offset: 774 },
                                  end: { line: 20, column: 25, offset: 777 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: { line: 20, column: 25, offset: 777 },
                                  end: { line: 20, column: 33, offset: 785 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the initial length of the disk hash table. Minimum value 1, maximum value ',
                                position: {
                                  start: { line: 20, column: 33, offset: 785 },
                                  end: {
                                    line: 20,
                                    column: 110,
                                    offset: 862
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'Math.floor(9007199254740991 / itemSize)',
                                position: {
                                  start: {
                                    line: 20,
                                    column: 110,
                                    offset: 862
                                  },
                                  end: {
                                    line: 20,
                                    column: 151,
                                    offset: 903
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: '. Defaults to 1024.',
                                position: {
                                  start: {
                                    line: 20,
                                    column: 151,
                                    offset: 903
                                  },
                                  end: {
                                    line: 20,
                                    column: 170,
                                    offset: 922
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 20, column: 7, offset: 759 },
                              end: { line: 20, column: 170, offset: 922 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 20, column: 5, offset: 757 },
                          end: { line: 20, column: 170, offset: 922 }
                        }
                      },
                      {
                        type: 'listItem',
                        spread: false,
                        checked: null,
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'inlineCode',
                                value: 'itemSize',
                                position: {
                                  start: { line: 21, column: 7, offset: 929 },
                                  end: { line: 21, column: 17, offset: 939 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 21, column: 17, offset: 939 },
                                  end: { line: 21, column: 20, offset: 942 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: { line: 21, column: 20, offset: 942 },
                                  end: { line: 21, column: 28, offset: 950 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the size in bytes of each item (including internal item info, key, and value) stored on disk. Minimum value 17. Defaults to 524288.',
                                position: {
                                  start: { line: 21, column: 28, offset: 950 },
                                  end: {
                                    line: 21,
                                    column: 162,
                                    offset: 1084
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 7, offset: 929 },
                              end: { line: 21, column: 162, offset: 1084 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 5, offset: 927 },
                          end: { line: 21, column: 162, offset: 1084 }
                        }
                      },
                      {
                        type: 'listItem',
                        spread: false,
                        checked: null,
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'inlineCode',
                                value: 'resizeRatio',
                                position: {
                                  start: { line: 22, column: 7, offset: 1091 },
                                  end: {
                                    line: 22,
                                    column: 20,
                                    offset: 1104
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: {
                                    line: 22,
                                    column: 20,
                                    offset: 1104
                                  },
                                  end: {
                                    line: 22,
                                    column: 23,
                                    offset: 1107
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: {
                                    line: 22,
                                    column: 23,
                                    offset: 1107
                                  },
                                  end: {
                                    line: 22,
                                    column: 31,
                                    offset: 1115
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the ratio of number of items to table length at which to resize the disk hash table. Minimum value 0 (no resize), maximum value 1. Defaults to 0.',
                                position: {
                                  start: {
                                    line: 22,
                                    column: 31,
                                    offset: 1115
                                  },
                                  end: {
                                    line: 22,
                                    column: 179,
                                    offset: 1263
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 22, column: 7, offset: 1091 },
                              end: { line: 22, column: 179, offset: 1263 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 22, column: 5, offset: 1089 },
                          end: { line: 22, column: 179, offset: 1263 }
                        }
                      },
                      {
                        type: 'listItem',
                        spread: false,
                        checked: null,
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'inlineCode',
                                value: 'resizeFactor',
                                position: {
                                  start: { line: 23, column: 7, offset: 1270 },
                                  end: {
                                    line: 23,
                                    column: 21,
                                    offset: 1284
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: {
                                    line: 23,
                                    column: 21,
                                    offset: 1284
                                  },
                                  end: {
                                    line: 23,
                                    column: 24,
                                    offset: 1287
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: {
                                    line: 23,
                                    column: 24,
                                    offset: 1287
                                  },
                                  end: {
                                    line: 23,
                                    column: 32,
                                    offset: 1295
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: " - the factor that is multiplied with the disk hash table's current length to determine the new table length on a resize.",
                                position: {
                                  start: {
                                    line: 23,
                                    column: 32,
                                    offset: 1295
                                  },
                                  end: {
                                    line: 23,
                                    column: 153,
                                    offset: 1416
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 23, column: 7, offset: 1270 },
                              end: { line: 23, column: 153, offset: 1416 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 23, column: 5, offset: 1268 },
                          end: { line: 23, column: 153, offset: 1416 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 17, column: 5, offset: 433 },
                      end: { line: 23, column: 153, offset: 1416 }
                    }
                  }
                ],
                position: {
                  start: { line: 16, column: 3, offset: 417 },
                  end: { line: 23, column: 153, offset: 1416 }
                }
              }
            ],
            position: {
              start: { line: 16, column: 3, offset: 417 },
              end: { line: 23, column: 153, offset: 1416 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Return:',
                position: {
                  start: { line: 25, column: 1, offset: 1418 },
                  end: { line: 25, column: 8, offset: 1425 }
                }
              }
            ],
            position: {
              start: { line: 25, column: 1, offset: 1418 },
              end: { line: 25, column: 8, offset: 1425 }
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
                        type: 'inlineCode',
                        value: 'ht',
                        position: {
                          start: { line: 26, column: 5, offset: 1430 },
                          end: { line: 26, column: 9, offset: 1434 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 26, column: 9, offset: 1434 },
                          end: { line: 26, column: 12, offset: 1437 }
                        }
                      },
                      {
                        type: 'link',
                        title: null,
                        url: '/docs/DiskHashTableClient',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'DiskHashTableClient',
                            position: {
                              start: { line: 26, column: 13, offset: 1438 },
                              end: { line: 26, column: 34, offset: 1459 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 26, column: 12, offset: 1437 },
                          end: { line: 26, column: 62, offset: 1487 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - a DiskHashTableClient instance.',
                        position: {
                          start: { line: 26, column: 62, offset: 1487 },
                          end: { line: 26, column: 96, offset: 1521 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 26, column: 5, offset: 1430 },
                      end: { line: 26, column: 96, offset: 1521 }
                    }
                  }
                ],
                position: {
                  start: { line: 26, column: 3, offset: 1428 },
                  end: { line: 26, column: 96, offset: 1521 }
                }
              }
            ],
            position: {
              start: { line: 26, column: 3, offset: 1428 },
              end: { line: 26, column: 96, offset: 1521 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: 'const ht = new DiskHashTableClient({\n' +
              '  serverUrl: "http://your-database-load-balancer-server:8080",\n' +
              '  tableName: "Profile",\n' +
              '  initialLength: 1073741824,\n' +
              '  itemSize: 4096,\n' +
              '})',
            position: {
              start: { line: 28, column: 1, offset: 1523 },
              end: { line: 35, column: 4, offset: 1714 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 35, column: 4, offset: 1714 }
        }
      }
    },
    methods: [
      {
        name: 'register',
        docs: '```specscript\n' +
          'register() -> Promise<>\n' +
          '```\n' +
          '\n' +
          'Registers the disk hash table client with the database server. Initializes a [DiskHashTable](/docs/DiskHashTable) on the database server.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none)\n' +
          '\n' +
          'Return:\n' +
          '  * Empty promise.\n' +
          '\n' +
          '```javascript\n' +
          'await ht.register()\n' +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'register',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 9, offset: 8 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 9, offset: 8 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'register() -> Promise<>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 41 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Registers the disk hash table client with the database server. Initializes a ',
                    position: {
                      start: { line: 5, column: 1, offset: 43 },
                      end: { line: 5, column: 78, offset: 120 }
                    }
                  },
                  {
                    type: 'link',
                    title: null,
                    url: '/docs/DiskHashTable',
                    children: [
                      {
                        type: 'text',
                        value: 'DiskHashTable',
                        position: {
                          start: { line: 5, column: 79, offset: 121 },
                          end: { line: 5, column: 92, offset: 134 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 5, column: 78, offset: 120 },
                      end: { line: 5, column: 114, offset: 156 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' on the database server.',
                    position: {
                      start: { line: 5, column: 114, offset: 156 },
                      end: { line: 5, column: 138, offset: 180 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 43 },
                  end: { line: 5, column: 138, offset: 180 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 182 },
                      end: { line: 7, column: 11, offset: 192 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 182 },
                  end: { line: 7, column: 11, offset: 192 }
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
                            value: '(none)',
                            position: {
                              start: { line: 8, column: 5, offset: 197 },
                              end: { line: 8, column: 11, offset: 203 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 197 },
                          end: { line: 8, column: 11, offset: 203 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 195 },
                      end: { line: 8, column: 11, offset: 203 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 195 },
                  end: { line: 8, column: 11, offset: 203 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 205 },
                      end: { line: 10, column: 8, offset: 212 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 205 },
                  end: { line: 10, column: 8, offset: 212 }
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
                            value: 'Empty promise.',
                            position: {
                              start: { line: 11, column: 5, offset: 217 },
                              end: { line: 11, column: 19, offset: 231 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 217 },
                          end: { line: 11, column: 19, offset: 231 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 215 },
                      end: { line: 11, column: 19, offset: 231 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 215 },
                  end: { line: 11, column: 19, offset: 231 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await ht.register()',
                position: {
                  start: { line: 13, column: 1, offset: 233 },
                  end: { line: 15, column: 4, offset: 270 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 270 }
            }
          }
        }
      },
      {
        name: 'clear',
        docs: '```specscript\n' +
          'clear() -> Promise<>\n' +
          '```\n' +
          '\n' +
          'Clears all data from the disk hash table on the database server. Reallocates the header and storage files.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none)\n' +
          '\n' +
          'Return:\n' +
          '  * Empty promise.\n' +
          '\n' +
          '```javascript\n' +
          'await ht.clear()\n' +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'clear',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 6, offset: 5 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'clear() -> Promise<>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 38 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Clears all data from the disk hash table on the database server. Reallocates the header and storage files.',
                    position: {
                      start: { line: 5, column: 1, offset: 40 },
                      end: { line: 5, column: 107, offset: 146 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 40 },
                  end: { line: 5, column: 107, offset: 146 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 148 },
                      end: { line: 7, column: 11, offset: 158 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 148 },
                  end: { line: 7, column: 11, offset: 158 }
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
                            value: '(none)',
                            position: {
                              start: { line: 8, column: 5, offset: 163 },
                              end: { line: 8, column: 11, offset: 169 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 163 },
                          end: { line: 8, column: 11, offset: 169 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 161 },
                      end: { line: 8, column: 11, offset: 169 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 161 },
                  end: { line: 8, column: 11, offset: 169 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 171 },
                      end: { line: 10, column: 8, offset: 178 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 171 },
                  end: { line: 10, column: 8, offset: 178 }
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
                            value: 'Empty promise.',
                            position: {
                              start: { line: 11, column: 5, offset: 183 },
                              end: { line: 11, column: 19, offset: 197 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 183 },
                          end: { line: 11, column: 19, offset: 197 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 181 },
                      end: { line: 11, column: 19, offset: 197 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 181 },
                  end: { line: 11, column: 19, offset: 197 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await ht.clear()',
                position: {
                  start: { line: 13, column: 1, offset: 199 },
                  end: { line: 15, column: 4, offset: 233 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 233 }
            }
          }
        }
      },
      {
        name: 'set',
        docs: '```specscript\n' +
          'set(key string, value string|Buffer|Uint8Array) -> Promise<>\n' +
          '```\n' +
          '\n' +
          'Sets and stores a value by key in the disk hash table on the database server.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `key` - `string` - the key to set.\n' +
          '  * `value` - `string|Buffer|Uint8Array` - the value to set corresponding to the key.\n' +
          '\n' +
          'Return:\n' +
          '  * Empty promise.\n' +
          '\n' +
          '```javascript\n' +
          "await ht.set('my-key', 'my-value')\n" +
          '\n' +
          "await ht.set('my-buffer', Buffer.from('binary'))\n" +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'set',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 4, offset: 3 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 4, offset: 3 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'set(key string, value string|Buffer|Uint8Array) -> Promise<>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 78 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Sets and stores a value by key in the disk hash table on the database server.',
                    position: {
                      start: { line: 5, column: 1, offset: 80 },
                      end: { line: 5, column: 78, offset: 157 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 80 },
                  end: { line: 5, column: 78, offset: 157 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 159 },
                      end: { line: 7, column: 11, offset: 169 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 159 },
                  end: { line: 7, column: 11, offset: 169 }
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
                            type: 'inlineCode',
                            value: 'key',
                            position: {
                              start: { line: 8, column: 5, offset: 174 },
                              end: { line: 8, column: 10, offset: 179 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 8, column: 10, offset: 179 },
                              end: { line: 8, column: 13, offset: 182 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 8, column: 13, offset: 182 },
                              end: { line: 8, column: 21, offset: 190 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the key to set.',
                            position: {
                              start: { line: 8, column: 21, offset: 190 },
                              end: { line: 8, column: 39, offset: 208 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 174 },
                          end: { line: 8, column: 39, offset: 208 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 172 },
                      end: { line: 8, column: 39, offset: 208 }
                    }
                  },
                  {
                    type: 'listItem',
                    spread: false,
                    checked: null,
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'value',
                            position: {
                              start: { line: 9, column: 5, offset: 213 },
                              end: { line: 9, column: 12, offset: 220 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 9, column: 12, offset: 220 },
                              end: { line: 9, column: 15, offset: 223 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string|Buffer|Uint8Array',
                            position: {
                              start: { line: 9, column: 15, offset: 223 },
                              end: { line: 9, column: 41, offset: 249 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the value to set corresponding to the key.',
                            position: {
                              start: { line: 9, column: 41, offset: 249 },
                              end: { line: 9, column: 86, offset: 294 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 9, column: 5, offset: 213 },
                          end: { line: 9, column: 86, offset: 294 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 3, offset: 211 },
                      end: { line: 9, column: 86, offset: 294 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 172 },
                  end: { line: 9, column: 86, offset: 294 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 11, column: 1, offset: 296 },
                      end: { line: 11, column: 8, offset: 303 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 296 },
                  end: { line: 11, column: 8, offset: 303 }
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
                            value: 'Empty promise.',
                            position: {
                              start: { line: 12, column: 5, offset: 308 },
                              end: { line: 12, column: 19, offset: 322 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 308 },
                          end: { line: 12, column: 19, offset: 322 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 306 },
                      end: { line: 12, column: 19, offset: 322 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 306 },
                  end: { line: 12, column: 19, offset: 322 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "await ht.set('my-key', 'my-value')\n" +
                  '\n' +
                  "await ht.set('my-buffer', Buffer.from('binary'))",
                position: {
                  start: { line: 14, column: 1, offset: 324 },
                  end: { line: 18, column: 4, offset: 426 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 18, column: 4, offset: 426 }
            }
          }
        }
      },
      {
        name: 'get',
        docs: '```specscript\n' +
          'get(key string) -> value Promise<string|undefined>\n' +
          '```\n' +
          '\n' +
          'Gets a value by key from the disk hash table on the database server.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `key` - `string` - the key corresponding to the value.\n' +
          '\n' +
          'Return:\n' +
          '  * `value` - `string` - the value corresponding to the key.\n' +
          '\n' +
          '```javascript\n' +
          "const value = await ht.get('my-key')\n" +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'get',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 4, offset: 3 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 4, offset: 3 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'get(key string) -> value Promise<string|undefined>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 68 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Gets a value by key from the disk hash table on the database server.',
                    position: {
                      start: { line: 5, column: 1, offset: 70 },
                      end: { line: 5, column: 69, offset: 138 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 70 },
                  end: { line: 5, column: 69, offset: 138 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 140 },
                      end: { line: 7, column: 11, offset: 150 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 140 },
                  end: { line: 7, column: 11, offset: 150 }
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
                            type: 'inlineCode',
                            value: 'key',
                            position: {
                              start: { line: 8, column: 5, offset: 155 },
                              end: { line: 8, column: 10, offset: 160 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 8, column: 10, offset: 160 },
                              end: { line: 8, column: 13, offset: 163 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 8, column: 13, offset: 163 },
                              end: { line: 8, column: 21, offset: 171 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the key corresponding to the value.',
                            position: {
                              start: { line: 8, column: 21, offset: 171 },
                              end: { line: 8, column: 59, offset: 209 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 155 },
                          end: { line: 8, column: 59, offset: 209 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 153 },
                      end: { line: 8, column: 59, offset: 209 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 153 },
                  end: { line: 8, column: 59, offset: 209 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 211 },
                      end: { line: 10, column: 8, offset: 218 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 211 },
                  end: { line: 10, column: 8, offset: 218 }
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
                            type: 'inlineCode',
                            value: 'value',
                            position: {
                              start: { line: 11, column: 5, offset: 223 },
                              end: { line: 11, column: 12, offset: 230 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 11, column: 12, offset: 230 },
                              end: { line: 11, column: 15, offset: 233 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 11, column: 15, offset: 233 },
                              end: { line: 11, column: 23, offset: 241 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the value corresponding to the key.',
                            position: {
                              start: { line: 11, column: 23, offset: 241 },
                              end: { line: 11, column: 61, offset: 279 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 223 },
                          end: { line: 11, column: 61, offset: 279 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 221 },
                      end: { line: 11, column: 61, offset: 279 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 221 },
                  end: { line: 11, column: 61, offset: 279 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "const value = await ht.get('my-key')",
                position: {
                  start: { line: 13, column: 1, offset: 281 },
                  end: { line: 15, column: 4, offset: 335 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 335 }
            }
          }
        }
      },
      {
        name: 'getBinary',
        docs: '```specscript\n' +
          'getBinary(key string) -> binaryValue Promise<Buffer|undefined>\n' +
          '```\n' +
          '\n' +
          'Gets a binary value by key from the disk hash table on the database server.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `key` - `string` - the key corresponding to the binary value.\n' +
          '\n' +
          'Return:\n' +
          '  * `binaryValue` - `Buffer` - the binary value corresponding to the key.\n' +
          '\n' +
          '```javascript\n' +
          "const buffer = await ht.getBinary('my-buffer')\n" +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'getBinary',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 10, offset: 9 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 10, offset: 9 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'getBinary(key string) -> binaryValue Promise<Buffer|undefined>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 80 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Gets a binary value by key from the disk hash table on the database server.',
                    position: {
                      start: { line: 5, column: 1, offset: 82 },
                      end: { line: 5, column: 76, offset: 157 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 82 },
                  end: { line: 5, column: 76, offset: 157 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 159 },
                      end: { line: 7, column: 11, offset: 169 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 159 },
                  end: { line: 7, column: 11, offset: 169 }
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
                            type: 'inlineCode',
                            value: 'key',
                            position: {
                              start: { line: 8, column: 5, offset: 174 },
                              end: { line: 8, column: 10, offset: 179 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 8, column: 10, offset: 179 },
                              end: { line: 8, column: 13, offset: 182 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 8, column: 13, offset: 182 },
                              end: { line: 8, column: 21, offset: 190 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the key corresponding to the binary value.',
                            position: {
                              start: { line: 8, column: 21, offset: 190 },
                              end: { line: 8, column: 66, offset: 235 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 174 },
                          end: { line: 8, column: 66, offset: 235 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 172 },
                      end: { line: 8, column: 66, offset: 235 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 172 },
                  end: { line: 8, column: 66, offset: 235 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 237 },
                      end: { line: 10, column: 8, offset: 244 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 237 },
                  end: { line: 10, column: 8, offset: 244 }
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
                            type: 'inlineCode',
                            value: 'binaryValue',
                            position: {
                              start: { line: 11, column: 5, offset: 249 },
                              end: { line: 11, column: 18, offset: 262 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 11, column: 18, offset: 262 },
                              end: { line: 11, column: 21, offset: 265 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'Buffer',
                            position: {
                              start: { line: 11, column: 21, offset: 265 },
                              end: { line: 11, column: 29, offset: 273 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the binary value corresponding to the key.',
                            position: {
                              start: { line: 11, column: 29, offset: 273 },
                              end: { line: 11, column: 74, offset: 318 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 249 },
                          end: { line: 11, column: 74, offset: 318 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 247 },
                      end: { line: 11, column: 74, offset: 318 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 247 },
                  end: { line: 11, column: 74, offset: 318 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "const buffer = await ht.getBinary('my-buffer')",
                position: {
                  start: { line: 13, column: 1, offset: 320 },
                  end: { line: 15, column: 4, offset: 384 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 384 }
            }
          }
        }
      },
      {
        name: 'delete',
        docs: '```specscript\n' +
          'delete(key string) -> didDelete Promise<boolean>\n' +
          '```\n' +
          '\n' +
          'Deletes an item by key from the disk hash table on the database server.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `key` - `string` - the key to delete.\n' +
          '\n' +
          'Return:\n' +
          '  * `didDelete` - `boolean` - a promise of whether the key and corresponding value were deleted.\n' +
          '\n' +
          '```javascript\n' +
          "const didDelete = await ht.delete('my-key')\n" +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'delete',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 7, offset: 6 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'delete(key string) -> didDelete Promise<boolean>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 66 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Deletes an item by key from the disk hash table on the database server.',
                    position: {
                      start: { line: 5, column: 1, offset: 68 },
                      end: { line: 5, column: 72, offset: 139 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 68 },
                  end: { line: 5, column: 72, offset: 139 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 141 },
                      end: { line: 7, column: 11, offset: 151 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 141 },
                  end: { line: 7, column: 11, offset: 151 }
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
                            type: 'inlineCode',
                            value: 'key',
                            position: {
                              start: { line: 8, column: 5, offset: 156 },
                              end: { line: 8, column: 10, offset: 161 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 8, column: 10, offset: 161 },
                              end: { line: 8, column: 13, offset: 164 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 8, column: 13, offset: 164 },
                              end: { line: 8, column: 21, offset: 172 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the key to delete.',
                            position: {
                              start: { line: 8, column: 21, offset: 172 },
                              end: { line: 8, column: 42, offset: 193 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 156 },
                          end: { line: 8, column: 42, offset: 193 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 154 },
                      end: { line: 8, column: 42, offset: 193 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 154 },
                  end: { line: 8, column: 42, offset: 193 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 195 },
                      end: { line: 10, column: 8, offset: 202 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 195 },
                  end: { line: 10, column: 8, offset: 202 }
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
                            type: 'inlineCode',
                            value: 'didDelete',
                            position: {
                              start: { line: 11, column: 5, offset: 207 },
                              end: { line: 11, column: 16, offset: 218 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 11, column: 16, offset: 218 },
                              end: { line: 11, column: 19, offset: 221 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'boolean',
                            position: {
                              start: { line: 11, column: 19, offset: 221 },
                              end: { line: 11, column: 28, offset: 230 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a promise of whether the key and corresponding value were deleted.',
                            position: {
                              start: { line: 11, column: 28, offset: 230 },
                              end: { line: 11, column: 97, offset: 299 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 207 },
                          end: { line: 11, column: 97, offset: 299 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 205 },
                      end: { line: 11, column: 97, offset: 299 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 205 },
                  end: { line: 11, column: 97, offset: 299 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "const didDelete = await ht.delete('my-key')",
                position: {
                  start: { line: 13, column: 1, offset: 301 },
                  end: { line: 15, column: 4, offset: 362 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 362 }
            }
          }
        }
      },
      {
        name: 'count',
        docs: '```specscript\n' +
          'count() -> ct Promise<number>\n' +
          '```\n' +
          '\n' +
          'Returns the number of items in the disk hash table on the database server.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none)\n' +
          '\n' +
          'Return:\n' +
          '  * `Promise<number>` - a promise of the number of items in the disk hash table on the database server.\n' +
          '\n' +
          '```javascript\n' +
          'const count = ht.count()\n' +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'count',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 6, offset: 5 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'count() -> ct Promise<number>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 47 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns the number of items in the disk hash table on the database server.',
                    position: {
                      start: { line: 5, column: 1, offset: 49 },
                      end: { line: 5, column: 75, offset: 123 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 49 },
                  end: { line: 5, column: 75, offset: 123 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 125 },
                      end: { line: 7, column: 11, offset: 135 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 125 },
                  end: { line: 7, column: 11, offset: 135 }
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
                            value: '(none)',
                            position: {
                              start: { line: 8, column: 5, offset: 140 },
                              end: { line: 8, column: 11, offset: 146 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 140 },
                          end: { line: 8, column: 11, offset: 146 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 138 },
                      end: { line: 8, column: 11, offset: 146 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 138 },
                  end: { line: 8, column: 11, offset: 146 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 148 },
                      end: { line: 10, column: 8, offset: 155 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 148 },
                  end: { line: 10, column: 8, offset: 155 }
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
                            type: 'inlineCode',
                            value: 'Promise<number>',
                            position: {
                              start: { line: 11, column: 5, offset: 160 },
                              end: { line: 11, column: 22, offset: 177 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a promise of the number of items in the disk hash table on the database server.',
                            position: {
                              start: { line: 11, column: 22, offset: 177 },
                              end: { line: 11, column: 104, offset: 259 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 160 },
                          end: { line: 11, column: 104, offset: 259 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 158 },
                      end: { line: 11, column: 104, offset: 259 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 158 },
                  end: { line: 11, column: 104, offset: 259 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const count = ht.count()',
                position: {
                  start: { line: 13, column: 1, offset: 261 },
                  end: { line: 15, column: 4, offset: 303 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 303 }
            }
          }
        }
      },
      {
        name: 'iterator',
        docs: '```specscript\n' +
          'iterator() -> values AsyncGenerator<string>\n' +
          '\n' +
          'iterator(options {\n' +
          '  valueType: "string"|"binary",\n' +
          '}) -> values AsyncGenerator<string|Buffer>\n' +
          '```\n' +
          '\n' +
          'Returns an iterator of the values of all items in the disk hash table on the database server. Item values are yielded in reverse insertion order.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the values of all items in the disk hash table on the database server.\n' +
          '  * `options`\n' +
          "    * `valueType` - `'string'|'binary'` - the type of value that the iterator yields. Defaults to `'string'`.\n" +
          "      * `'string'` - iterator yields `string` values.\n" +
          "      * `'binary'` - iterator yields `Buffer` values.\n" +
          '\n' +
          'Return:\n' +
          '  * `values` - `AsyncGenerator<string|Buffer>` - an async iterator of the values of all items in the disk hash table on the database server sorted by reverse insertion order.\n' +
          '\n' +
          '```javascript\n' +
          "await ht.set('key1', 'value1')\n" +
          "await ht.set('key2', 'value2')\n" +
          "await ht.set('key3', 'value3')\n" +
          '\n' +
          'for await (const value of ht.iterator()) {\n' +
          '  console.log(value) // value3\n' +
          '                     // value2\n' +
          '                     // value1\n' +
          '}\n' +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'iterator',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 9, offset: 8 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 9, offset: 8 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'iterator() -> values AsyncGenerator<string>\n' +
                  '\n' +
                  'iterator(options {\n' +
                  '  valueType: "string"|"binary",\n' +
                  '}) -> values AsyncGenerator<string|Buffer>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 7, column: 4, offset: 156 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns an iterator of the values of all items in the disk hash table on the database server. Item values are yielded in reverse insertion order.',
                    position: {
                      start: { line: 9, column: 1, offset: 158 },
                      end: { line: 9, column: 146, offset: 303 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 1, offset: 158 },
                  end: { line: 9, column: 146, offset: 303 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 11, column: 1, offset: 305 },
                      end: { line: 11, column: 11, offset: 315 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 305 },
                  end: { line: 11, column: 11, offset: 315 }
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
                            value: '(none) - retrieves the values of all items in the disk hash table on the database server.',
                            position: {
                              start: { line: 12, column: 5, offset: 320 },
                              end: { line: 12, column: 94, offset: 409 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 320 },
                          end: { line: 12, column: 94, offset: 409 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 318 },
                      end: { line: 12, column: 94, offset: 409 }
                    }
                  },
                  {
                    type: 'listItem',
                    spread: false,
                    checked: null,
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'options',
                            position: {
                              start: { line: 13, column: 5, offset: 414 },
                              end: { line: 13, column: 14, offset: 423 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 13, column: 5, offset: 414 },
                          end: { line: 13, column: 14, offset: 423 }
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
                                    type: 'inlineCode',
                                    value: 'valueType',
                                    position: {
                                      start: {
                                        line: 14,
                                        column: 7,
                                        offset: 430
                                      },
                                      end: {
                                        line: 14,
                                        column: 18,
                                        offset: 441
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 14,
                                        column: 18,
                                        offset: 441
                                      },
                                      end: {
                                        line: 14,
                                        column: 21,
                                        offset: 444
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: "'string'|'binary'",
                                    position: {
                                      start: {
                                        line: 14,
                                        column: 21,
                                        offset: 444
                                      },
                                      end: {
                                        line: 14,
                                        column: 40,
                                        offset: 463
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the type of value that the iterator yields. Defaults to ',
                                    position: {
                                      start: {
                                        line: 14,
                                        column: 40,
                                        offset: 463
                                      },
                                      end: {
                                        line: 14,
                                        column: 99,
                                        offset: 522
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: "'string'",
                                    position: {
                                      start: {
                                        line: 14,
                                        column: 99,
                                        offset: 522
                                      },
                                      end: {
                                        line: 14,
                                        column: 109,
                                        offset: 532
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: '.',
                                    position: {
                                      start: {
                                        line: 14,
                                        column: 109,
                                        offset: 532
                                      },
                                      end: {
                                        line: 14,
                                        column: 110,
                                        offset: 533
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 14, column: 7, offset: 430 },
                                  end: {
                                    line: 14,
                                    column: 110,
                                    offset: 533
                                  }
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
                                            type: 'inlineCode',
                                            value: "'string'",
                                            position: {
                                              start: {
                                                line: 15,
                                                column: 9,
                                                offset: 542
                                              },
                                              end: {
                                                line: 15,
                                                column: 19,
                                                offset: 552
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - iterator yields ',
                                            position: {
                                              start: {
                                                line: 15,
                                                column: 19,
                                                offset: 552
                                              },
                                              end: {
                                                line: 15,
                                                column: 38,
                                                offset: 571
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'string',
                                            position: {
                                              start: {
                                                line: 15,
                                                column: 38,
                                                offset: 571
                                              },
                                              end: {
                                                line: 15,
                                                column: 46,
                                                offset: 579
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 15,
                                                column: 46,
                                                offset: 579
                                              },
                                              end: {
                                                line: 15,
                                                column: 54,
                                                offset: 587
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 15,
                                            column: 9,
                                            offset: 542
                                          },
                                          end: {
                                            line: 15,
                                            column: 54,
                                            offset: 587
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 15,
                                        column: 7,
                                        offset: 540
                                      },
                                      end: {
                                        line: 15,
                                        column: 54,
                                        offset: 587
                                      }
                                    }
                                  },
                                  {
                                    type: 'listItem',
                                    spread: false,
                                    checked: null,
                                    children: [
                                      {
                                        type: 'paragraph',
                                        children: [
                                          {
                                            type: 'inlineCode',
                                            value: "'binary'",
                                            position: {
                                              start: {
                                                line: 16,
                                                column: 9,
                                                offset: 596
                                              },
                                              end: {
                                                line: 16,
                                                column: 19,
                                                offset: 606
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - iterator yields ',
                                            position: {
                                              start: {
                                                line: 16,
                                                column: 19,
                                                offset: 606
                                              },
                                              end: {
                                                line: 16,
                                                column: 38,
                                                offset: 625
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'Buffer',
                                            position: {
                                              start: {
                                                line: 16,
                                                column: 38,
                                                offset: 625
                                              },
                                              end: {
                                                line: 16,
                                                column: 46,
                                                offset: 633
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 16,
                                                column: 46,
                                                offset: 633
                                              },
                                              end: {
                                                line: 16,
                                                column: 54,
                                                offset: 641
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 16,
                                            column: 9,
                                            offset: 596
                                          },
                                          end: {
                                            line: 16,
                                            column: 54,
                                            offset: 641
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 16,
                                        column: 7,
                                        offset: 594
                                      },
                                      end: {
                                        line: 16,
                                        column: 54,
                                        offset: 641
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 15, column: 7, offset: 540 },
                                  end: { line: 16, column: 54, offset: 641 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 14, column: 5, offset: 428 },
                              end: { line: 16, column: 54, offset: 641 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 14, column: 5, offset: 428 },
                          end: { line: 16, column: 54, offset: 641 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 13, column: 3, offset: 412 },
                      end: { line: 16, column: 54, offset: 641 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 318 },
                  end: { line: 16, column: 54, offset: 641 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 18, column: 1, offset: 643 },
                      end: { line: 18, column: 8, offset: 650 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 1, offset: 643 },
                  end: { line: 18, column: 8, offset: 650 }
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
                            type: 'inlineCode',
                            value: 'values',
                            position: {
                              start: { line: 19, column: 5, offset: 655 },
                              end: { line: 19, column: 13, offset: 663 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 19, column: 13, offset: 663 },
                              end: { line: 19, column: 16, offset: 666 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncGenerator<string|Buffer>',
                            position: {
                              start: { line: 19, column: 16, offset: 666 },
                              end: { line: 19, column: 47, offset: 697 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the values of all items in the disk hash table on the database server sorted by reverse insertion order.',
                            position: {
                              start: { line: 19, column: 47, offset: 697 },
                              end: { line: 19, column: 175, offset: 825 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 655 },
                          end: { line: 19, column: 175, offset: 825 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 19, column: 3, offset: 653 },
                      end: { line: 19, column: 175, offset: 825 }
                    }
                  }
                ],
                position: {
                  start: { line: 19, column: 3, offset: 653 },
                  end: { line: 19, column: 175, offset: 825 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "await ht.set('key1', 'value1')\n" +
                  "await ht.set('key2', 'value2')\n" +
                  "await ht.set('key3', 'value3')\n" +
                  '\n' +
                  'for await (const value of ht.iterator()) {\n' +
                  '  console.log(value) // value3\n' +
                  '                     // value2\n' +
                  '                     // value1\n' +
                  '}',
                position: {
                  start: { line: 21, column: 1, offset: 827 },
                  end: { line: 31, column: 4, offset: 1076 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 31, column: 4, offset: 1076 }
            }
          }
        }
      },
      {
        name: 'entriesIterator',
        docs: '```specscript\n' +
          'entriesIterator() -> entries AsyncGenerator<[key string, value string]>\n' +
          '\n' +
          'entriesIterator(options {\n' +
          '  valueType: "string"|"binary",\n' +
          '}) -> entries AsyncGenerator<[key string, value string|Buffer]>\n' +
          '```\n' +
          '\n' +
          'Returns an iterator of the entries (keys and values) of all items in the disk hash table on the database server. Item entries are yielded in reverse insertion order.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the entries of all items in the disk hash table on the database server.\n' +
          '  * `options`\n' +
          "    * `valueType` - `'string'|'binary'` - the type of value that the iterator yields. Defaults to `'string'`.\n" +
          "      * `'string'` - iterator yields entries with `string` values.\n" +
          "      * `'binary'` - iterator yields entries with `Buffer` values.\n" +
          '\n' +
          'Return:\n' +
          '  * `entries` - `AsyncGenerator<[key string, value string|Buffer]>` - an async iterator of the entries of all items in the disk hash table on the database server sorted by reverse insertion order.\n' +
          '\n' +
          '```javascript\n' +
          "await ht.set('key1', 'value1')\n" +
          "await ht.set('key2', 'value2')\n" +
          "await ht.set('key3', 'value3')\n" +
          '\n' +
          'for await (const [key, value] of ht.entriesIterator()) {\n' +
          '  console.log(key, value) // key3 value3\n' +
          '                          // key2 value2\n' +
          '                          // key1 value1\n' +
          '}\n' +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'entriesIterator',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 16, offset: 15 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 16, offset: 15 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 16, offset: 15 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'entriesIterator() -> entries AsyncGenerator<[key string, value string]>\n' +
                  '\n' +
                  'entriesIterator(options {\n' +
                  '  valueType: "string"|"binary",\n' +
                  '}) -> entries AsyncGenerator<[key string, value string|Buffer]>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 7, column: 4, offset: 212 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns an iterator of the entries (keys and values) of all items in the disk hash table on the database server. Item entries are yielded in reverse insertion order.',
                    position: {
                      start: { line: 9, column: 1, offset: 214 },
                      end: { line: 9, column: 166, offset: 379 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 1, offset: 214 },
                  end: { line: 9, column: 166, offset: 379 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 11, column: 1, offset: 381 },
                      end: { line: 11, column: 11, offset: 391 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 381 },
                  end: { line: 11, column: 11, offset: 391 }
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
                            value: '(none) - retrieves the entries of all items in the disk hash table on the database server.',
                            position: {
                              start: { line: 12, column: 5, offset: 396 },
                              end: { line: 12, column: 95, offset: 486 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 396 },
                          end: { line: 12, column: 95, offset: 486 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 394 },
                      end: { line: 12, column: 95, offset: 486 }
                    }
                  },
                  {
                    type: 'listItem',
                    spread: false,
                    checked: null,
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'options',
                            position: {
                              start: { line: 13, column: 5, offset: 491 },
                              end: { line: 13, column: 14, offset: 500 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 13, column: 5, offset: 491 },
                          end: { line: 13, column: 14, offset: 500 }
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
                                    type: 'inlineCode',
                                    value: 'valueType',
                                    position: {
                                      start: {
                                        line: 14,
                                        column: 7,
                                        offset: 507
                                      },
                                      end: {
                                        line: 14,
                                        column: 18,
                                        offset: 518
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 14,
                                        column: 18,
                                        offset: 518
                                      },
                                      end: {
                                        line: 14,
                                        column: 21,
                                        offset: 521
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: "'string'|'binary'",
                                    position: {
                                      start: {
                                        line: 14,
                                        column: 21,
                                        offset: 521
                                      },
                                      end: {
                                        line: 14,
                                        column: 40,
                                        offset: 540
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the type of value that the iterator yields. Defaults to ',
                                    position: {
                                      start: {
                                        line: 14,
                                        column: 40,
                                        offset: 540
                                      },
                                      end: {
                                        line: 14,
                                        column: 99,
                                        offset: 599
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: "'string'",
                                    position: {
                                      start: {
                                        line: 14,
                                        column: 99,
                                        offset: 599
                                      },
                                      end: {
                                        line: 14,
                                        column: 109,
                                        offset: 609
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: '.',
                                    position: {
                                      start: {
                                        line: 14,
                                        column: 109,
                                        offset: 609
                                      },
                                      end: {
                                        line: 14,
                                        column: 110,
                                        offset: 610
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 14, column: 7, offset: 507 },
                                  end: {
                                    line: 14,
                                    column: 110,
                                    offset: 610
                                  }
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
                                            type: 'inlineCode',
                                            value: "'string'",
                                            position: {
                                              start: {
                                                line: 15,
                                                column: 9,
                                                offset: 619
                                              },
                                              end: {
                                                line: 15,
                                                column: 19,
                                                offset: 629
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - iterator yields entries with ',
                                            position: {
                                              start: {
                                                line: 15,
                                                column: 19,
                                                offset: 629
                                              },
                                              end: {
                                                line: 15,
                                                column: 51,
                                                offset: 661
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'string',
                                            position: {
                                              start: {
                                                line: 15,
                                                column: 51,
                                                offset: 661
                                              },
                                              end: {
                                                line: 15,
                                                column: 59,
                                                offset: 669
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 15,
                                                column: 59,
                                                offset: 669
                                              },
                                              end: {
                                                line: 15,
                                                column: 67,
                                                offset: 677
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 15,
                                            column: 9,
                                            offset: 619
                                          },
                                          end: {
                                            line: 15,
                                            column: 67,
                                            offset: 677
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 15,
                                        column: 7,
                                        offset: 617
                                      },
                                      end: {
                                        line: 15,
                                        column: 67,
                                        offset: 677
                                      }
                                    }
                                  },
                                  {
                                    type: 'listItem',
                                    spread: false,
                                    checked: null,
                                    children: [
                                      {
                                        type: 'paragraph',
                                        children: [
                                          {
                                            type: 'inlineCode',
                                            value: "'binary'",
                                            position: {
                                              start: {
                                                line: 16,
                                                column: 9,
                                                offset: 686
                                              },
                                              end: {
                                                line: 16,
                                                column: 19,
                                                offset: 696
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - iterator yields entries with ',
                                            position: {
                                              start: {
                                                line: 16,
                                                column: 19,
                                                offset: 696
                                              },
                                              end: {
                                                line: 16,
                                                column: 51,
                                                offset: 728
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'Buffer',
                                            position: {
                                              start: {
                                                line: 16,
                                                column: 51,
                                                offset: 728
                                              },
                                              end: {
                                                line: 16,
                                                column: 59,
                                                offset: 736
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 16,
                                                column: 59,
                                                offset: 736
                                              },
                                              end: {
                                                line: 16,
                                                column: 67,
                                                offset: 744
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 16,
                                            column: 9,
                                            offset: 686
                                          },
                                          end: {
                                            line: 16,
                                            column: 67,
                                            offset: 744
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 16,
                                        column: 7,
                                        offset: 684
                                      },
                                      end: {
                                        line: 16,
                                        column: 67,
                                        offset: 744
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 15, column: 7, offset: 617 },
                                  end: { line: 16, column: 67, offset: 744 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 14, column: 5, offset: 505 },
                              end: { line: 16, column: 67, offset: 744 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 14, column: 5, offset: 505 },
                          end: { line: 16, column: 67, offset: 744 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 13, column: 3, offset: 489 },
                      end: { line: 16, column: 67, offset: 744 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 394 },
                  end: { line: 16, column: 67, offset: 744 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 18, column: 1, offset: 746 },
                      end: { line: 18, column: 8, offset: 753 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 1, offset: 746 },
                  end: { line: 18, column: 8, offset: 753 }
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
                            type: 'inlineCode',
                            value: 'entries',
                            position: {
                              start: { line: 19, column: 5, offset: 758 },
                              end: { line: 19, column: 14, offset: 767 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 19, column: 14, offset: 767 },
                              end: { line: 19, column: 17, offset: 770 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncGenerator<[key string, value string|Buffer]>',
                            position: {
                              start: { line: 19, column: 17, offset: 770 },
                              end: { line: 19, column: 68, offset: 821 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the entries of all items in the disk hash table on the database server sorted by reverse insertion order.',
                            position: {
                              start: { line: 19, column: 68, offset: 821 },
                              end: { line: 19, column: 197, offset: 950 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 758 },
                          end: { line: 19, column: 197, offset: 950 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 19, column: 3, offset: 756 },
                      end: { line: 19, column: 197, offset: 950 }
                    }
                  }
                ],
                position: {
                  start: { line: 19, column: 3, offset: 756 },
                  end: { line: 19, column: 197, offset: 950 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "await ht.set('key1', 'value1')\n" +
                  "await ht.set('key2', 'value2')\n" +
                  "await ht.set('key3', 'value3')\n" +
                  '\n' +
                  'for await (const [key, value] of ht.entriesIterator()) {\n' +
                  '  console.log(key, value) // key3 value3\n' +
                  '                          // key2 value2\n' +
                  '                          // key1 value1\n' +
                  '}',
                position: {
                  start: { line: 21, column: 1, offset: 952 },
                  end: { line: 31, column: 4, offset: 1245 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 31, column: 4, offset: 1245 }
            }
          }
        }
      }
    ],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/DiskHashTableClient.js'
  },
  {
    name: 'DiskSortedHashTableClient',
    docs: '```specscript\n' +
      'new DiskSortedHashTableClient(options {\n' +
      '  serverUrl: string,\n' +
      '  tableName: string,\n' +
      '  delimiter: string,\n' +
      '  initialLength: number,\n' +
      '  itemSize: number,\n' +
      '  sortValueType: "string"|"number"|Array<"string"|"number">,\n' +
      '  resizeRatio: number,\n' +
      '  resizeFactor: number,\n' +
      '  degree: number,\n' +
      '}) -> DiskSortedHashTableClient\n' +
      '```\n' +
      '\n' +
      'Presidium DiskSortedHashTableClient class. Creates a disk sorted hash table client that represents a Presidium [DiskSortedHashTable](/docs/DiskSortedHashTable) instance on a database server.\n' +
      '\n' +
      'Arguments:\n' +
      '  * `options`\n' +
      '    * `serverUrl` - `string` - the url of the database server.\n' +
      '    * `tableName` - `string` - the name of the DiskSortedHashTable instance on the database server.\n' +
      '    * `delimiter` - `string` - a character or string that will separate chunks of data as they are sent to the database client. Defaults to the escape character "^[".\n' +
      '    * `initialLength` - `number` - the initial length of the disk sorted hash table. Minimum value 1, maximum value `Math.floor(9007199254740991 / itemSize)`. Defaults to 1024.\n' +
      '    * `itemSize` - `number` - the size in bytes of each item (including internal item info, key, value, and sortValue) stored on disk. Minimum value 54. Defaults to 524288.\n' +
      '    * `sortValueType` - `"string"|"number"|Array<"string"|"number">` - the type of the disk sorted hash table sort values. If this value is an array, the sort value will be treated as a composite sort value. A composite sort value has each element of the array compared in order.\n' +
      '    * `resizeRatio` - `number` - the ratio of number of items to table length at which to resize the disk sorted hash table. Minimum value 0 (no resize), maximum value 1. Defaults to 0.\n' +
      "    * `resizeFactor` - `number` - the factor that is multiplied with the disk sorted hash table's current length to determine the new table length on a resize.\n" +
      '    * `degree` - `number` - minimum value 2, defaults to 2 - defines the following parameters for the internal b-tree that organizes all of the items in the disk sorted hash table:\n' +
      '      * Minimum number of items per b-tree node: `degree - 1`\n' +
      '      * Maximum number of items per b-tree node: `(2 * degree) - 1`\n' +
      '      * Minimum number of children per b-tree node: `degree`\n' +
      '      * Maximum number of children per b-tree node: `2 * degree`\n' +
      '\n' +
      'Return:\n' +
      '  * `ht` - [`DiskSortedHashTableClient`](/docs/DiskSortedHashTableClient) - a DiskSortedHashTableClient instance.\n' +
      '\n' +
      '```javascript\n' +
      'const ht = new DiskSortedHashTableClient({\n' +
      '  serverUrl: "http://your-database-load-balancer-server:8080",\n' +
      '  tableName: "Post",\n' +
      '  initialLength: 1073741824,\n' +
      '  sortValueType: ["string", "number"],\n' +
      '  itemSize: 5120,\n' +
      '  degree: 2,\n' +
      '})\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'DiskSortedHashTableClient',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 26, offset: 25 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 26, offset: 25 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 26, offset: 25 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'specscript',
            meta: null,
            value: 'new DiskSortedHashTableClient(options {\n' +
              '  serverUrl: string,\n' +
              '  tableName: string,\n' +
              '  delimiter: string,\n' +
              '  initialLength: number,\n' +
              '  itemSize: number,\n' +
              '  sortValueType: "string"|"number"|Array<"string"|"number">,\n' +
              '  resizeRatio: number,\n' +
              '  resizeFactor: number,\n' +
              '  degree: number,\n' +
              '}) -> DiskSortedHashTableClient',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 13, column: 4, offset: 323 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Presidium DiskSortedHashTableClient class. Creates a disk sorted hash table client that represents a Presidium ',
                position: {
                  start: { line: 15, column: 1, offset: 325 },
                  end: { line: 15, column: 112, offset: 436 }
                }
              },
              {
                type: 'link',
                title: null,
                url: '/docs/DiskSortedHashTable',
                children: [
                  {
                    type: 'text',
                    value: 'DiskSortedHashTable',
                    position: {
                      start: { line: 15, column: 113, offset: 437 },
                      end: { line: 15, column: 132, offset: 456 }
                    }
                  }
                ],
                position: {
                  start: { line: 15, column: 112, offset: 436 },
                  end: { line: 15, column: 160, offset: 484 }
                }
              },
              {
                type: 'text',
                value: ' instance on a database server.',
                position: {
                  start: { line: 15, column: 160, offset: 484 },
                  end: { line: 15, column: 191, offset: 515 }
                }
              }
            ],
            position: {
              start: { line: 15, column: 1, offset: 325 },
              end: { line: 15, column: 191, offset: 515 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Arguments:',
                position: {
                  start: { line: 17, column: 1, offset: 517 },
                  end: { line: 17, column: 11, offset: 527 }
                }
              }
            ],
            position: {
              start: { line: 17, column: 1, offset: 517 },
              end: { line: 17, column: 11, offset: 527 }
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
                        type: 'inlineCode',
                        value: 'options',
                        position: {
                          start: { line: 18, column: 5, offset: 532 },
                          end: { line: 18, column: 14, offset: 541 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 18, column: 5, offset: 532 },
                      end: { line: 18, column: 14, offset: 541 }
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
                                type: 'inlineCode',
                                value: 'serverUrl',
                                position: {
                                  start: { line: 19, column: 7, offset: 548 },
                                  end: { line: 19, column: 18, offset: 559 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 19, column: 18, offset: 559 },
                                  end: { line: 19, column: 21, offset: 562 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'string',
                                position: {
                                  start: { line: 19, column: 21, offset: 562 },
                                  end: { line: 19, column: 29, offset: 570 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the url of the database server.',
                                position: {
                                  start: { line: 19, column: 29, offset: 570 },
                                  end: { line: 19, column: 63, offset: 604 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 19, column: 7, offset: 548 },
                              end: { line: 19, column: 63, offset: 604 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 546 },
                          end: { line: 19, column: 63, offset: 604 }
                        }
                      },
                      {
                        type: 'listItem',
                        spread: false,
                        checked: null,
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'inlineCode',
                                value: 'tableName',
                                position: {
                                  start: { line: 20, column: 7, offset: 611 },
                                  end: { line: 20, column: 18, offset: 622 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 20, column: 18, offset: 622 },
                                  end: { line: 20, column: 21, offset: 625 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'string',
                                position: {
                                  start: { line: 20, column: 21, offset: 625 },
                                  end: { line: 20, column: 29, offset: 633 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the name of the DiskSortedHashTable instance on the database server.',
                                position: {
                                  start: { line: 20, column: 29, offset: 633 },
                                  end: {
                                    line: 20,
                                    column: 100,
                                    offset: 704
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 20, column: 7, offset: 611 },
                              end: { line: 20, column: 100, offset: 704 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 20, column: 5, offset: 609 },
                          end: { line: 20, column: 100, offset: 704 }
                        }
                      },
                      {
                        type: 'listItem',
                        spread: false,
                        checked: null,
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'inlineCode',
                                value: 'delimiter',
                                position: {
                                  start: { line: 21, column: 7, offset: 711 },
                                  end: { line: 21, column: 18, offset: 722 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 21, column: 18, offset: 722 },
                                  end: { line: 21, column: 21, offset: 725 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'string',
                                position: {
                                  start: { line: 21, column: 21, offset: 725 },
                                  end: { line: 21, column: 29, offset: 733 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - a character or string that will separate chunks of data as they are sent to the database client. Defaults to the escape character "^[".',
                                position: {
                                  start: { line: 21, column: 29, offset: 733 },
                                  end: {
                                    line: 21,
                                    column: 167,
                                    offset: 871
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 7, offset: 711 },
                              end: { line: 21, column: 167, offset: 871 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 5, offset: 709 },
                          end: { line: 21, column: 167, offset: 871 }
                        }
                      },
                      {
                        type: 'listItem',
                        spread: false,
                        checked: null,
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'inlineCode',
                                value: 'initialLength',
                                position: {
                                  start: { line: 22, column: 7, offset: 878 },
                                  end: { line: 22, column: 22, offset: 893 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 22, column: 22, offset: 893 },
                                  end: { line: 22, column: 25, offset: 896 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: { line: 22, column: 25, offset: 896 },
                                  end: { line: 22, column: 33, offset: 904 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the initial length of the disk sorted hash table. Minimum value 1, maximum value ',
                                position: {
                                  start: { line: 22, column: 33, offset: 904 },
                                  end: {
                                    line: 22,
                                    column: 117,
                                    offset: 988
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'Math.floor(9007199254740991 / itemSize)',
                                position: {
                                  start: {
                                    line: 22,
                                    column: 117,
                                    offset: 988
                                  },
                                  end: {
                                    line: 22,
                                    column: 158,
                                    offset: 1029
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: '. Defaults to 1024.',
                                position: {
                                  start: {
                                    line: 22,
                                    column: 158,
                                    offset: 1029
                                  },
                                  end: {
                                    line: 22,
                                    column: 177,
                                    offset: 1048
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 22, column: 7, offset: 878 },
                              end: { line: 22, column: 177, offset: 1048 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 22, column: 5, offset: 876 },
                          end: { line: 22, column: 177, offset: 1048 }
                        }
                      },
                      {
                        type: 'listItem',
                        spread: false,
                        checked: null,
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'inlineCode',
                                value: 'itemSize',
                                position: {
                                  start: { line: 23, column: 7, offset: 1055 },
                                  end: {
                                    line: 23,
                                    column: 17,
                                    offset: 1065
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: {
                                    line: 23,
                                    column: 17,
                                    offset: 1065
                                  },
                                  end: {
                                    line: 23,
                                    column: 20,
                                    offset: 1068
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: {
                                    line: 23,
                                    column: 20,
                                    offset: 1068
                                  },
                                  end: {
                                    line: 23,
                                    column: 28,
                                    offset: 1076
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the size in bytes of each item (including internal item info, key, value, and sortValue) stored on disk. Minimum value 54. Defaults to 524288.',
                                position: {
                                  start: {
                                    line: 23,
                                    column: 28,
                                    offset: 1076
                                  },
                                  end: {
                                    line: 23,
                                    column: 173,
                                    offset: 1221
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 23, column: 7, offset: 1055 },
                              end: { line: 23, column: 173, offset: 1221 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 23, column: 5, offset: 1053 },
                          end: { line: 23, column: 173, offset: 1221 }
                        }
                      },
                      {
                        type: 'listItem',
                        spread: false,
                        checked: null,
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'inlineCode',
                                value: 'sortValueType',
                                position: {
                                  start: { line: 24, column: 7, offset: 1228 },
                                  end: {
                                    line: 24,
                                    column: 22,
                                    offset: 1243
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: {
                                    line: 24,
                                    column: 22,
                                    offset: 1243
                                  },
                                  end: {
                                    line: 24,
                                    column: 25,
                                    offset: 1246
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: '"string"|"number"|Array<"string"|"number">',
                                position: {
                                  start: {
                                    line: 24,
                                    column: 25,
                                    offset: 1246
                                  },
                                  end: {
                                    line: 24,
                                    column: 69,
                                    offset: 1290
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the type of the disk sorted hash table sort values. If this value is an array, the sort value will be treated as a composite sort value. A composite sort value has each element of the array compared in order.',
                                position: {
                                  start: {
                                    line: 24,
                                    column: 69,
                                    offset: 1290
                                  },
                                  end: {
                                    line: 24,
                                    column: 280,
                                    offset: 1501
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 24, column: 7, offset: 1228 },
                              end: { line: 24, column: 280, offset: 1501 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 24, column: 5, offset: 1226 },
                          end: { line: 24, column: 280, offset: 1501 }
                        }
                      },
                      {
                        type: 'listItem',
                        spread: false,
                        checked: null,
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'inlineCode',
                                value: 'resizeRatio',
                                position: {
                                  start: { line: 25, column: 7, offset: 1508 },
                                  end: {
                                    line: 25,
                                    column: 20,
                                    offset: 1521
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: {
                                    line: 25,
                                    column: 20,
                                    offset: 1521
                                  },
                                  end: {
                                    line: 25,
                                    column: 23,
                                    offset: 1524
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: {
                                    line: 25,
                                    column: 23,
                                    offset: 1524
                                  },
                                  end: {
                                    line: 25,
                                    column: 31,
                                    offset: 1532
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the ratio of number of items to table length at which to resize the disk sorted hash table. Minimum value 0 (no resize), maximum value 1. Defaults to 0.',
                                position: {
                                  start: {
                                    line: 25,
                                    column: 31,
                                    offset: 1532
                                  },
                                  end: {
                                    line: 25,
                                    column: 186,
                                    offset: 1687
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 25, column: 7, offset: 1508 },
                              end: { line: 25, column: 186, offset: 1687 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 25, column: 5, offset: 1506 },
                          end: { line: 25, column: 186, offset: 1687 }
                        }
                      },
                      {
                        type: 'listItem',
                        spread: false,
                        checked: null,
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'inlineCode',
                                value: 'resizeFactor',
                                position: {
                                  start: { line: 26, column: 7, offset: 1694 },
                                  end: {
                                    line: 26,
                                    column: 21,
                                    offset: 1708
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: {
                                    line: 26,
                                    column: 21,
                                    offset: 1708
                                  },
                                  end: {
                                    line: 26,
                                    column: 24,
                                    offset: 1711
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: {
                                    line: 26,
                                    column: 24,
                                    offset: 1711
                                  },
                                  end: {
                                    line: 26,
                                    column: 32,
                                    offset: 1719
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: " - the factor that is multiplied with the disk sorted hash table's current length to determine the new table length on a resize.",
                                position: {
                                  start: {
                                    line: 26,
                                    column: 32,
                                    offset: 1719
                                  },
                                  end: {
                                    line: 26,
                                    column: 160,
                                    offset: 1847
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 26, column: 7, offset: 1694 },
                              end: { line: 26, column: 160, offset: 1847 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 26, column: 5, offset: 1692 },
                          end: { line: 26, column: 160, offset: 1847 }
                        }
                      },
                      {
                        type: 'listItem',
                        spread: false,
                        checked: null,
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'inlineCode',
                                value: 'degree',
                                position: {
                                  start: { line: 27, column: 7, offset: 1854 },
                                  end: {
                                    line: 27,
                                    column: 15,
                                    offset: 1862
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: {
                                    line: 27,
                                    column: 15,
                                    offset: 1862
                                  },
                                  end: {
                                    line: 27,
                                    column: 18,
                                    offset: 1865
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: {
                                    line: 27,
                                    column: 18,
                                    offset: 1865
                                  },
                                  end: {
                                    line: 27,
                                    column: 26,
                                    offset: 1873
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - minimum value 2, defaults to 2 - defines the following parameters for the internal b-tree that organizes all of the items in the disk sorted hash table:',
                                position: {
                                  start: {
                                    line: 27,
                                    column: 26,
                                    offset: 1873
                                  },
                                  end: {
                                    line: 27,
                                    column: 181,
                                    offset: 2028
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 27, column: 7, offset: 1854 },
                              end: { line: 27, column: 181, offset: 2028 }
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
                                        value: 'Minimum number of items per b-tree node: ',
                                        position: {
                                          start: {
                                            line: 28,
                                            column: 9,
                                            offset: 2037
                                          },
                                          end: {
                                            line: 28,
                                            column: 50,
                                            offset: 2078
                                          }
                                        }
                                      },
                                      {
                                        type: 'inlineCode',
                                        value: 'degree - 1',
                                        position: {
                                          start: {
                                            line: 28,
                                            column: 50,
                                            offset: 2078
                                          },
                                          end: {
                                            line: 28,
                                            column: 62,
                                            offset: 2090
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 28,
                                        column: 9,
                                        offset: 2037
                                      },
                                      end: {
                                        line: 28,
                                        column: 62,
                                        offset: 2090
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 28, column: 7, offset: 2035 },
                                  end: {
                                    line: 28,
                                    column: 62,
                                    offset: 2090
                                  }
                                }
                              },
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
                                        value: 'Maximum number of items per b-tree node: ',
                                        position: {
                                          start: {
                                            line: 29,
                                            column: 9,
                                            offset: 2099
                                          },
                                          end: {
                                            line: 29,
                                            column: 50,
                                            offset: 2140
                                          }
                                        }
                                      },
                                      {
                                        type: 'inlineCode',
                                        value: '(2 * degree) - 1',
                                        position: {
                                          start: {
                                            line: 29,
                                            column: 50,
                                            offset: 2140
                                          },
                                          end: {
                                            line: 29,
                                            column: 68,
                                            offset: 2158
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 29,
                                        column: 9,
                                        offset: 2099
                                      },
                                      end: {
                                        line: 29,
                                        column: 68,
                                        offset: 2158
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 29, column: 7, offset: 2097 },
                                  end: {
                                    line: 29,
                                    column: 68,
                                    offset: 2158
                                  }
                                }
                              },
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
                                        value: 'Minimum number of children per b-tree node: ',
                                        position: {
                                          start: {
                                            line: 30,
                                            column: 9,
                                            offset: 2167
                                          },
                                          end: {
                                            line: 30,
                                            column: 53,
                                            offset: 2211
                                          }
                                        }
                                      },
                                      {
                                        type: 'inlineCode',
                                        value: 'degree',
                                        position: {
                                          start: {
                                            line: 30,
                                            column: 53,
                                            offset: 2211
                                          },
                                          end: {
                                            line: 30,
                                            column: 61,
                                            offset: 2219
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 30,
                                        column: 9,
                                        offset: 2167
                                      },
                                      end: {
                                        line: 30,
                                        column: 61,
                                        offset: 2219
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 30, column: 7, offset: 2165 },
                                  end: {
                                    line: 30,
                                    column: 61,
                                    offset: 2219
                                  }
                                }
                              },
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
                                        value: 'Maximum number of children per b-tree node: ',
                                        position: {
                                          start: {
                                            line: 31,
                                            column: 9,
                                            offset: 2228
                                          },
                                          end: {
                                            line: 31,
                                            column: 53,
                                            offset: 2272
                                          }
                                        }
                                      },
                                      {
                                        type: 'inlineCode',
                                        value: '2 * degree',
                                        position: {
                                          start: {
                                            line: 31,
                                            column: 53,
                                            offset: 2272
                                          },
                                          end: {
                                            line: 31,
                                            column: 65,
                                            offset: 2284
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 31,
                                        column: 9,
                                        offset: 2228
                                      },
                                      end: {
                                        line: 31,
                                        column: 65,
                                        offset: 2284
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 31, column: 7, offset: 2226 },
                                  end: {
                                    line: 31,
                                    column: 65,
                                    offset: 2284
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 28, column: 7, offset: 2035 },
                              end: { line: 31, column: 65, offset: 2284 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 27, column: 5, offset: 1852 },
                          end: { line: 31, column: 65, offset: 2284 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 19, column: 5, offset: 546 },
                      end: { line: 31, column: 65, offset: 2284 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 3, offset: 530 },
                  end: { line: 31, column: 65, offset: 2284 }
                }
              }
            ],
            position: {
              start: { line: 18, column: 3, offset: 530 },
              end: { line: 31, column: 65, offset: 2284 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Return:',
                position: {
                  start: { line: 33, column: 1, offset: 2286 },
                  end: { line: 33, column: 8, offset: 2293 }
                }
              }
            ],
            position: {
              start: { line: 33, column: 1, offset: 2286 },
              end: { line: 33, column: 8, offset: 2293 }
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
                        type: 'inlineCode',
                        value: 'ht',
                        position: {
                          start: { line: 34, column: 5, offset: 2298 },
                          end: { line: 34, column: 9, offset: 2302 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 34, column: 9, offset: 2302 },
                          end: { line: 34, column: 12, offset: 2305 }
                        }
                      },
                      {
                        type: 'link',
                        title: null,
                        url: '/docs/DiskSortedHashTableClient',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'DiskSortedHashTableClient',
                            position: {
                              start: { line: 34, column: 13, offset: 2306 },
                              end: { line: 34, column: 40, offset: 2333 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 34, column: 12, offset: 2305 },
                          end: { line: 34, column: 74, offset: 2367 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - a DiskSortedHashTableClient instance.',
                        position: {
                          start: { line: 34, column: 74, offset: 2367 },
                          end: { line: 34, column: 114, offset: 2407 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 34, column: 5, offset: 2298 },
                      end: { line: 34, column: 114, offset: 2407 }
                    }
                  }
                ],
                position: {
                  start: { line: 34, column: 3, offset: 2296 },
                  end: { line: 34, column: 114, offset: 2407 }
                }
              }
            ],
            position: {
              start: { line: 34, column: 3, offset: 2296 },
              end: { line: 34, column: 114, offset: 2407 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: 'const ht = new DiskSortedHashTableClient({\n' +
              '  serverUrl: "http://your-database-load-balancer-server:8080",\n' +
              '  tableName: "Post",\n' +
              '  initialLength: 1073741824,\n' +
              '  sortValueType: ["string", "number"],\n' +
              '  itemSize: 5120,\n' +
              '  degree: 2,\n' +
              '})',
            position: {
              start: { line: 36, column: 1, offset: 2409 },
              end: { line: 45, column: 4, offset: 2655 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 45, column: 4, offset: 2655 }
        }
      }
    },
    methods: [
      {
        name: 'register',
        docs: '```specscript\n' +
          'register() -> Promise<>\n' +
          '```\n' +
          '\n' +
          'Registers the disk sorted hash table client with the database server. Initializes a [DiskSortedHashTable](/docs/DiskSortedHashTable) on the database server.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none)\n' +
          '\n' +
          'Return:\n' +
          '  * Empty promise.\n' +
          '\n' +
          '```javascript\n' +
          'await ht.register()\n' +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'register',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 9, offset: 8 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 9, offset: 8 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'register() -> Promise<>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 41 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Registers the disk sorted hash table client with the database server. Initializes a ',
                    position: {
                      start: { line: 5, column: 1, offset: 43 },
                      end: { line: 5, column: 85, offset: 127 }
                    }
                  },
                  {
                    type: 'link',
                    title: null,
                    url: '/docs/DiskSortedHashTable',
                    children: [
                      {
                        type: 'text',
                        value: 'DiskSortedHashTable',
                        position: {
                          start: { line: 5, column: 86, offset: 128 },
                          end: { line: 5, column: 105, offset: 147 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 5, column: 85, offset: 127 },
                      end: { line: 5, column: 133, offset: 175 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' on the database server.',
                    position: {
                      start: { line: 5, column: 133, offset: 175 },
                      end: { line: 5, column: 157, offset: 199 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 43 },
                  end: { line: 5, column: 157, offset: 199 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 201 },
                      end: { line: 7, column: 11, offset: 211 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 201 },
                  end: { line: 7, column: 11, offset: 211 }
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
                            value: '(none)',
                            position: {
                              start: { line: 8, column: 5, offset: 216 },
                              end: { line: 8, column: 11, offset: 222 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 216 },
                          end: { line: 8, column: 11, offset: 222 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 214 },
                      end: { line: 8, column: 11, offset: 222 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 214 },
                  end: { line: 8, column: 11, offset: 222 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 224 },
                      end: { line: 10, column: 8, offset: 231 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 224 },
                  end: { line: 10, column: 8, offset: 231 }
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
                            value: 'Empty promise.',
                            position: {
                              start: { line: 11, column: 5, offset: 236 },
                              end: { line: 11, column: 19, offset: 250 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 236 },
                          end: { line: 11, column: 19, offset: 250 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 234 },
                      end: { line: 11, column: 19, offset: 250 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 234 },
                  end: { line: 11, column: 19, offset: 250 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await ht.register()',
                position: {
                  start: { line: 13, column: 1, offset: 252 },
                  end: { line: 15, column: 4, offset: 289 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 289 }
            }
          }
        }
      },
      {
        name: 'clear',
        docs: '```specscript\n' +
          'clear() -> Promise<>\n' +
          '```\n' +
          '\n' +
          'Clears all data from the disk sorted hash table on the database server. Reallocates the header and storage files.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none)\n' +
          '\n' +
          'Return:\n' +
          '  * Empty promise.\n' +
          '\n' +
          '```javascript\n' +
          'await sortedHt.clear()\n' +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'clear',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 6, offset: 5 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'clear() -> Promise<>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 38 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Clears all data from the disk sorted hash table on the database server. Reallocates the header and storage files.',
                    position: {
                      start: { line: 5, column: 1, offset: 40 },
                      end: { line: 5, column: 114, offset: 153 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 40 },
                  end: { line: 5, column: 114, offset: 153 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 155 },
                      end: { line: 7, column: 11, offset: 165 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 155 },
                  end: { line: 7, column: 11, offset: 165 }
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
                            value: '(none)',
                            position: {
                              start: { line: 8, column: 5, offset: 170 },
                              end: { line: 8, column: 11, offset: 176 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 170 },
                          end: { line: 8, column: 11, offset: 176 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 168 },
                      end: { line: 8, column: 11, offset: 176 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 168 },
                  end: { line: 8, column: 11, offset: 176 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 178 },
                      end: { line: 10, column: 8, offset: 185 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 178 },
                  end: { line: 10, column: 8, offset: 185 }
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
                            value: 'Empty promise.',
                            position: {
                              start: { line: 11, column: 5, offset: 190 },
                              end: { line: 11, column: 19, offset: 204 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 190 },
                          end: { line: 11, column: 19, offset: 204 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 188 },
                      end: { line: 11, column: 19, offset: 204 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 188 },
                  end: { line: 11, column: 19, offset: 204 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await sortedHt.clear()',
                position: {
                  start: { line: 13, column: 1, offset: 206 },
                  end: { line: 15, column: 4, offset: 246 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 246 }
            }
          }
        }
      },
      {
        name: 'set',
        docs: '```specscript\n' +
          'set(key string, value string|Buffer|Uint8Array, sortValue string|number) -> Promise<>\n' +
          '\n' +
          'set(key string, value string|Buffer|Uint8Array, ...sortValue Array<string|number>) -> Promise<>\n' +
          '```\n' +
          '\n' +
          'Sets and stores a value by key and sort value in the disk sorted hash table on the database server.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `key` - `string` - the key to set.\n' +
          '  * `value` - `string|Buffer|Uint8Array` - the value to set corresponding to the key.\n' +
          '  * `sortValues` - `Arguments<string|number>` - values by which the item is indexed and sorted in the disk sorted hash table on the database server. If multiple sort values are provided, the sort values are treated as a composite sort value. Composite sort values have each element of their arrays compared in order.\n' +
          '\n' +
          'Return:\n' +
          '  * Empty promise.\n' +
          '\n' +
          '```javascript\n' +
          'await ht.set("key1", "value1", 1)\n' +
          'await ht.set("key2", "value2", 2)\n' +
          'await ht.set("key3", "value3", 3)\n' +
          '\n' +
          'await ht.set("my-buffer", Buffer.from("binary"), 4)\n' +
          '\n' +
          'await compositeSortValueHt.set("key1", "value1", "index-key1", 1)\n' +
          'await compositeSortValueHt.set("key2", "value2", "index-key1", 2)\n' +
          'await compositeSortValueHt.set("key3", "value3", "index-key1", 3)\n' +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'set',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 4, offset: 3 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 4, offset: 3 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'set(key string, value string|Buffer|Uint8Array, sortValue string|number) -> Promise<>\n' +
                  '\n' +
                  'set(key string, value string|Buffer|Uint8Array, ...sortValue Array<string|number>) -> Promise<>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 5, column: 4, offset: 200 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Sets and stores a value by key and sort value in the disk sorted hash table on the database server.',
                    position: {
                      start: { line: 7, column: 1, offset: 202 },
                      end: { line: 7, column: 100, offset: 301 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 202 },
                  end: { line: 7, column: 100, offset: 301 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 9, column: 1, offset: 303 },
                      end: { line: 9, column: 11, offset: 313 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 1, offset: 303 },
                  end: { line: 9, column: 11, offset: 313 }
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
                            type: 'inlineCode',
                            value: 'key',
                            position: {
                              start: { line: 10, column: 5, offset: 318 },
                              end: { line: 10, column: 10, offset: 323 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 10, column: 10, offset: 323 },
                              end: { line: 10, column: 13, offset: 326 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 10, column: 13, offset: 326 },
                              end: { line: 10, column: 21, offset: 334 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the key to set.',
                            position: {
                              start: { line: 10, column: 21, offset: 334 },
                              end: { line: 10, column: 39, offset: 352 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 10, column: 5, offset: 318 },
                          end: { line: 10, column: 39, offset: 352 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 10, column: 3, offset: 316 },
                      end: { line: 10, column: 39, offset: 352 }
                    }
                  },
                  {
                    type: 'listItem',
                    spread: false,
                    checked: null,
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'value',
                            position: {
                              start: { line: 11, column: 5, offset: 357 },
                              end: { line: 11, column: 12, offset: 364 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 11, column: 12, offset: 364 },
                              end: { line: 11, column: 15, offset: 367 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string|Buffer|Uint8Array',
                            position: {
                              start: { line: 11, column: 15, offset: 367 },
                              end: { line: 11, column: 41, offset: 393 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the value to set corresponding to the key.',
                            position: {
                              start: { line: 11, column: 41, offset: 393 },
                              end: { line: 11, column: 86, offset: 438 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 357 },
                          end: { line: 11, column: 86, offset: 438 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 355 },
                      end: { line: 11, column: 86, offset: 438 }
                    }
                  },
                  {
                    type: 'listItem',
                    spread: false,
                    checked: null,
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'sortValues',
                            position: {
                              start: { line: 12, column: 5, offset: 443 },
                              end: { line: 12, column: 17, offset: 455 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 12, column: 17, offset: 455 },
                              end: { line: 12, column: 20, offset: 458 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'Arguments<string|number>',
                            position: {
                              start: { line: 12, column: 20, offset: 458 },
                              end: { line: 12, column: 46, offset: 484 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - values by which the item is indexed and sorted in the disk sorted hash table on the database server. If multiple sort values are provided, the sort values are treated as a composite sort value. Composite sort values have each element of their arrays compared in order.',
                            position: {
                              start: { line: 12, column: 46, offset: 484 },
                              end: { line: 12, column: 317, offset: 755 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 443 },
                          end: { line: 12, column: 317, offset: 755 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 441 },
                      end: { line: 12, column: 317, offset: 755 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 3, offset: 316 },
                  end: { line: 12, column: 317, offset: 755 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 14, column: 1, offset: 757 },
                      end: { line: 14, column: 8, offset: 764 }
                    }
                  }
                ],
                position: {
                  start: { line: 14, column: 1, offset: 757 },
                  end: { line: 14, column: 8, offset: 764 }
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
                            value: 'Empty promise.',
                            position: {
                              start: { line: 15, column: 5, offset: 769 },
                              end: { line: 15, column: 19, offset: 783 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 15, column: 5, offset: 769 },
                          end: { line: 15, column: 19, offset: 783 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 15, column: 3, offset: 767 },
                      end: { line: 15, column: 19, offset: 783 }
                    }
                  }
                ],
                position: {
                  start: { line: 15, column: 3, offset: 767 },
                  end: { line: 15, column: 19, offset: 783 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await ht.set("key1", "value1", 1)\n' +
                  'await ht.set("key2", "value2", 2)\n' +
                  'await ht.set("key3", "value3", 3)\n' +
                  '\n' +
                  'await ht.set("my-buffer", Buffer.from("binary"), 4)\n' +
                  '\n' +
                  'await compositeSortValueHt.set("key1", "value1", "index-key1", 1)\n' +
                  'await compositeSortValueHt.set("key2", "value2", "index-key1", 2)\n' +
                  'await compositeSortValueHt.set("key3", "value3", "index-key1", 3)',
                position: {
                  start: { line: 17, column: 1, offset: 785 },
                  end: { line: 27, column: 4, offset: 1156 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 27, column: 4, offset: 1156 }
            }
          }
        }
      },
      {
        name: 'get',
        docs: '```specscript\n' +
          'get(key string) -> value Promise<string|undefined>\n' +
          '```\n' +
          '\n' +
          'Gets a value by key from the disk sorted hash table on the database server.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `key` - `string` - the key corresponding to the value.\n' +
          '\n' +
          'Return:\n' +
          '  * `value` - `Promise<string|undefined>` - a promise of the string value corresponding to the key. If the key is not found, the promise resolves with `undefined`.\n' +
          '\n' +
          '```javascript\n' +
          'const value = await ht.get("my-key")\n' +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'get',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 4, offset: 3 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 4, offset: 3 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'get(key string) -> value Promise<string|undefined>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 68 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Gets a value by key from the disk sorted hash table on the database server.',
                    position: {
                      start: { line: 5, column: 1, offset: 70 },
                      end: { line: 5, column: 76, offset: 145 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 70 },
                  end: { line: 5, column: 76, offset: 145 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 147 },
                      end: { line: 7, column: 11, offset: 157 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 147 },
                  end: { line: 7, column: 11, offset: 157 }
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
                            type: 'inlineCode',
                            value: 'key',
                            position: {
                              start: { line: 8, column: 5, offset: 162 },
                              end: { line: 8, column: 10, offset: 167 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 8, column: 10, offset: 167 },
                              end: { line: 8, column: 13, offset: 170 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 8, column: 13, offset: 170 },
                              end: { line: 8, column: 21, offset: 178 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the key corresponding to the value.',
                            position: {
                              start: { line: 8, column: 21, offset: 178 },
                              end: { line: 8, column: 59, offset: 216 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 162 },
                          end: { line: 8, column: 59, offset: 216 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 160 },
                      end: { line: 8, column: 59, offset: 216 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 160 },
                  end: { line: 8, column: 59, offset: 216 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 218 },
                      end: { line: 10, column: 8, offset: 225 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 218 },
                  end: { line: 10, column: 8, offset: 225 }
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
                            type: 'inlineCode',
                            value: 'value',
                            position: {
                              start: { line: 11, column: 5, offset: 230 },
                              end: { line: 11, column: 12, offset: 237 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 11, column: 12, offset: 237 },
                              end: { line: 11, column: 15, offset: 240 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'Promise<string|undefined>',
                            position: {
                              start: { line: 11, column: 15, offset: 240 },
                              end: { line: 11, column: 42, offset: 267 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a promise of the string value corresponding to the key. If the key is not found, the promise resolves with ',
                            position: {
                              start: { line: 11, column: 42, offset: 267 },
                              end: { line: 11, column: 152, offset: 377 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'undefined',
                            position: {
                              start: { line: 11, column: 152, offset: 377 },
                              end: { line: 11, column: 163, offset: 388 }
                            }
                          },
                          {
                            type: 'text',
                            value: '.',
                            position: {
                              start: { line: 11, column: 163, offset: 388 },
                              end: { line: 11, column: 164, offset: 389 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 230 },
                          end: { line: 11, column: 164, offset: 389 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 228 },
                      end: { line: 11, column: 164, offset: 389 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 228 },
                  end: { line: 11, column: 164, offset: 389 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const value = await ht.get("my-key")',
                position: {
                  start: { line: 13, column: 1, offset: 391 },
                  end: { line: 15, column: 4, offset: 445 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 445 }
            }
          }
        }
      },
      {
        name: 'getBinary',
        docs: '```specscript\n' +
          'getBinary(key string) -> binaryValue Promise<Buffer|undefined>\n' +
          '```\n' +
          '\n' +
          'Gets a binary value by key from the disk sorted hash table on the database server.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `key` - `string` - the key corresponding to the binary value.\n' +
          '\n' +
          'Return:\n' +
          '  * `binaryValue` - `Promise<Buffer|undefined>` - a promise of the binary value corresponding to the key. If the key is not found, the promise resolves with `undefined`.\n' +
          '\n' +
          '```javascript\n' +
          'const buffer = await ht.getBinary("my-buffer")\n' +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'getBinary',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 10, offset: 9 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 10, offset: 9 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'getBinary(key string) -> binaryValue Promise<Buffer|undefined>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 80 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Gets a binary value by key from the disk sorted hash table on the database server.',
                    position: {
                      start: { line: 5, column: 1, offset: 82 },
                      end: { line: 5, column: 83, offset: 164 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 82 },
                  end: { line: 5, column: 83, offset: 164 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 166 },
                      end: { line: 7, column: 11, offset: 176 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 166 },
                  end: { line: 7, column: 11, offset: 176 }
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
                            type: 'inlineCode',
                            value: 'key',
                            position: {
                              start: { line: 8, column: 5, offset: 181 },
                              end: { line: 8, column: 10, offset: 186 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 8, column: 10, offset: 186 },
                              end: { line: 8, column: 13, offset: 189 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 8, column: 13, offset: 189 },
                              end: { line: 8, column: 21, offset: 197 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the key corresponding to the binary value.',
                            position: {
                              start: { line: 8, column: 21, offset: 197 },
                              end: { line: 8, column: 66, offset: 242 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 181 },
                          end: { line: 8, column: 66, offset: 242 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 179 },
                      end: { line: 8, column: 66, offset: 242 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 179 },
                  end: { line: 8, column: 66, offset: 242 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 244 },
                      end: { line: 10, column: 8, offset: 251 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 244 },
                  end: { line: 10, column: 8, offset: 251 }
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
                            type: 'inlineCode',
                            value: 'binaryValue',
                            position: {
                              start: { line: 11, column: 5, offset: 256 },
                              end: { line: 11, column: 18, offset: 269 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 11, column: 18, offset: 269 },
                              end: { line: 11, column: 21, offset: 272 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'Promise<Buffer|undefined>',
                            position: {
                              start: { line: 11, column: 21, offset: 272 },
                              end: { line: 11, column: 48, offset: 299 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a promise of the binary value corresponding to the key. If the key is not found, the promise resolves with ',
                            position: {
                              start: { line: 11, column: 48, offset: 299 },
                              end: { line: 11, column: 158, offset: 409 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'undefined',
                            position: {
                              start: { line: 11, column: 158, offset: 409 },
                              end: { line: 11, column: 169, offset: 420 }
                            }
                          },
                          {
                            type: 'text',
                            value: '.',
                            position: {
                              start: { line: 11, column: 169, offset: 420 },
                              end: { line: 11, column: 170, offset: 421 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 256 },
                          end: { line: 11, column: 170, offset: 421 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 254 },
                      end: { line: 11, column: 170, offset: 421 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 254 },
                  end: { line: 11, column: 170, offset: 421 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const buffer = await ht.getBinary("my-buffer")',
                position: {
                  start: { line: 13, column: 1, offset: 423 },
                  end: { line: 15, column: 4, offset: 487 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 487 }
            }
          }
        }
      },
      {
        name: 'forwardIterator',
        docs: '```specscript\n' +
          'forwardIterator(options {\n' +
          '  exclusiveStartKey: string, \n' +
          '  startingSortValue: string|number|Array<string|number>,\n' +
          '  endingSortValue: string|number|Array<string|number>,\n' +
          '  valueType: "string"|"binary",\n' +
          '  limit: number,\n' +
          '}) -> values AsyncIterator<string|Buffer>\n' +
          '```\n' +
          '\n' +
          'Returns an iterator of the values of all items in the disk sorted hash table on the database server sorted by sort value. Item values are yielded in ascending order.\n' +
          '\n' +
          'If a starting sort value and ending sort value are provided, the iterator returns only values of items with sort values between the starting and ending sort values, including values of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the iterator returns values of items with sort values greater than or equal to the starting sort value. If only an ending sort value is provided, the iterator returns values of items with sort values less than or equal to the ending sort value.\n' +
          '\n' +
          'If an exclusive start key is provided, the iterator returns values of items with sort values greater than or equal to the sort value of the item at the exclusive start key, not including the value of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the values of all items in the disk sorted hash table on the database server.\n' +
          '  * `options`\n' +
          '    * `exclusiveStartKey` - `string` - the key after which to start iterating.\n' +
          '    * `startingSortValue` - `string|number|Array<string|number>` - the sort value from which to start iterating. If this value is an array, the starting sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.\n' +
          '    * `endingSortValue` - `string|number|Array<string|number>` - the sort value at which to stop iterating. If this value is an array, the ending sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.\n' +
          '    * `valueType` - `"string"|"binary"` - the type of value that the iterator yields. Defaults to `"string"`.\n' +
          '      * `"string"` - iterator yields `string` values.\n' +
          '      * `"binary"` - iterator yields `Buffer` values.\n' +
          '    * `limit` - `number` - the maximum number of values to yield from the iterator.\n' +
          '\n' +
          'Return:\n' +
          '  * `values` - `AsyncGenerator<string|Buffer>` - an async generator of the values of all items in the disk sorted hash table on the database server sorted by sort value in ascending order.\n' +
          '\n' +
          '```javascript\n' +
          'await ht.set("key1", "value1", 1)\n' +
          'await ht.set("key2", "value2", 2)\n' +
          'await ht.set("key3", "value3", 3)\n' +
          '\n' +
          'for await (const value of ht.forwardIterator()) {\n' +
          '  console.log(value) // value1\n' +
          '                     // value2\n' +
          '                     // value3\n' +
          '}\n' +
          '\n' +
          'for await (const value of ht.forwardIterator({ limit: 1 })) {\n' +
          '  console.log(value) // value1\n' +
          '}\n' +
          '\n' +
          'for await (const value of ht.forwardIterator({ startingSortValue: 2, endingSortValue: 3 })) {\n' +
          '  console.log(value) // value2\n' +
          '                     // value3\n' +
          '}\n' +
          '\n' +
          'for await (const value of ht.forwardIterator({ exclusiveStartKey: "key1" })) {\n' +
          '  console.log(value) // value2\n' +
          '                     // value3\n' +
          '}\n' +
          '\n' +
          'for await (const value of ht.forwardIterator({ exclusiveStartKey: "key1", endingSortValue: 2 })) {\n' +
          '  console.log(value) // value2\n' +
          '}\n' +
          '\n' +
          'await compositeSortValueHt.set("key1", "value1", "index-key1", 1)\n' +
          'await compositeSortValueHt.set("key2", "value2", "index-key1", 2)\n' +
          'await compositeSortValueHt.set("key3", "value3", "index-key1", 3)\n' +
          '\n' +
          'for await (const value of compositeSortValueHt.forwardIterator({\n' +
          '  startingSortValue: ["index-key1", 2],\n' +
          '  endingSortValue: ["index-key1", 3],\n' +
          '})) {\n' +
          '  console.log(value) // value2\n' +
          '                     // value3\n' +
          '}\n' +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'forwardIterator',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 16, offset: 15 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 16, offset: 15 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 16, offset: 15 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'forwardIterator(options {\n' +
                  '  exclusiveStartKey: string, \n' +
                  '  startingSortValue: string|number|Array<string|number>,\n' +
                  '  endingSortValue: string|number|Array<string|number>,\n' +
                  '  valueType: "string"|"binary",\n' +
                  '  limit: number,\n' +
                  '}) -> values AsyncIterator<string|Buffer>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 9, column: 4, offset: 276 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns an iterator of the values of all items in the disk sorted hash table on the database server sorted by sort value. Item values are yielded in ascending order.',
                    position: {
                      start: { line: 11, column: 1, offset: 278 },
                      end: { line: 11, column: 166, offset: 443 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 278 },
                  end: { line: 11, column: 166, offset: 443 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If a starting sort value and ending sort value are provided, the iterator returns only values of items with sort values between the starting and ending sort values, including values of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the iterator returns values of items with sort values greater than or equal to the starting sort value. If only an ending sort value is provided, the iterator returns values of items with sort values less than or equal to the ending sort value.',
                    position: {
                      start: { line: 13, column: 1, offset: 445 },
                      end: { line: 13, column: 542, offset: 986 }
                    }
                  }
                ],
                position: {
                  start: { line: 13, column: 1, offset: 445 },
                  end: { line: 13, column: 542, offset: 986 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If an exclusive start key is provided, the iterator returns values of items with sort values greater than or equal to the sort value of the item at the exclusive start key, not including the value of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.',
                    position: {
                      start: { line: 15, column: 1, offset: 988 },
                      end: { line: 15, column: 308, offset: 1295 }
                    }
                  }
                ],
                position: {
                  start: { line: 15, column: 1, offset: 988 },
                  end: { line: 15, column: 308, offset: 1295 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 17, column: 1, offset: 1297 },
                      end: { line: 17, column: 11, offset: 1307 }
                    }
                  }
                ],
                position: {
                  start: { line: 17, column: 1, offset: 1297 },
                  end: { line: 17, column: 11, offset: 1307 }
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
                            value: '(none) - retrieves the values of all items in the disk sorted hash table on the database server.',
                            position: {
                              start: { line: 18, column: 5, offset: 1312 },
                              end: { line: 18, column: 101, offset: 1408 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 18, column: 5, offset: 1312 },
                          end: { line: 18, column: 101, offset: 1408 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 18, column: 3, offset: 1310 },
                      end: { line: 18, column: 101, offset: 1408 }
                    }
                  },
                  {
                    type: 'listItem',
                    spread: false,
                    checked: null,
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'options',
                            position: {
                              start: { line: 19, column: 5, offset: 1413 },
                              end: { line: 19, column: 14, offset: 1422 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 1413 },
                          end: { line: 19, column: 14, offset: 1422 }
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
                                    type: 'inlineCode',
                                    value: 'exclusiveStartKey',
                                    position: {
                                      start: {
                                        line: 20,
                                        column: 7,
                                        offset: 1429
                                      },
                                      end: {
                                        line: 20,
                                        column: 26,
                                        offset: 1448
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 20,
                                        column: 26,
                                        offset: 1448
                                      },
                                      end: {
                                        line: 20,
                                        column: 29,
                                        offset: 1451
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string',
                                    position: {
                                      start: {
                                        line: 20,
                                        column: 29,
                                        offset: 1451
                                      },
                                      end: {
                                        line: 20,
                                        column: 37,
                                        offset: 1459
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the key after which to start iterating.',
                                    position: {
                                      start: {
                                        line: 20,
                                        column: 37,
                                        offset: 1459
                                      },
                                      end: {
                                        line: 20,
                                        column: 79,
                                        offset: 1501
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 20, column: 7, offset: 1429 },
                                  end: {
                                    line: 20,
                                    column: 79,
                                    offset: 1501
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 20, column: 5, offset: 1427 },
                              end: { line: 20, column: 79, offset: 1501 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'startingSortValue',
                                    position: {
                                      start: {
                                        line: 21,
                                        column: 7,
                                        offset: 1508
                                      },
                                      end: {
                                        line: 21,
                                        column: 26,
                                        offset: 1527
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 21,
                                        column: 26,
                                        offset: 1527
                                      },
                                      end: {
                                        line: 21,
                                        column: 29,
                                        offset: 1530
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string|number|Array<string|number>',
                                    position: {
                                      start: {
                                        line: 21,
                                        column: 29,
                                        offset: 1530
                                      },
                                      end: {
                                        line: 21,
                                        column: 65,
                                        offset: 1566
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort value from which to start iterating. If this value is an array, the starting sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.',
                                    position: {
                                      start: {
                                        line: 21,
                                        column: 65,
                                        offset: 1566
                                      },
                                      end: {
                                        line: 21,
                                        column: 277,
                                        offset: 1778
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 21, column: 7, offset: 1508 },
                                  end: {
                                    line: 21,
                                    column: 277,
                                    offset: 1778
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 5, offset: 1506 },
                              end: { line: 21, column: 277, offset: 1778 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'endingSortValue',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 7,
                                        offset: 1785
                                      },
                                      end: {
                                        line: 22,
                                        column: 24,
                                        offset: 1802
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 24,
                                        offset: 1802
                                      },
                                      end: {
                                        line: 22,
                                        column: 27,
                                        offset: 1805
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string|number|Array<string|number>',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 27,
                                        offset: 1805
                                      },
                                      end: {
                                        line: 22,
                                        column: 63,
                                        offset: 1841
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort value at which to stop iterating. If this value is an array, the ending sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 63,
                                        offset: 1841
                                      },
                                      end: {
                                        line: 22,
                                        column: 270,
                                        offset: 2048
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 22, column: 7, offset: 1785 },
                                  end: {
                                    line: 22,
                                    column: 270,
                                    offset: 2048
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 22, column: 5, offset: 1783 },
                              end: { line: 22, column: 270, offset: 2048 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'valueType',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 7,
                                        offset: 2055
                                      },
                                      end: {
                                        line: 23,
                                        column: 18,
                                        offset: 2066
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 18,
                                        offset: 2066
                                      },
                                      end: {
                                        line: 23,
                                        column: 21,
                                        offset: 2069
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: '"string"|"binary"',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 21,
                                        offset: 2069
                                      },
                                      end: {
                                        line: 23,
                                        column: 40,
                                        offset: 2088
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the type of value that the iterator yields. Defaults to ',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 40,
                                        offset: 2088
                                      },
                                      end: {
                                        line: 23,
                                        column: 99,
                                        offset: 2147
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: '"string"',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 99,
                                        offset: 2147
                                      },
                                      end: {
                                        line: 23,
                                        column: 109,
                                        offset: 2157
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: '.',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 109,
                                        offset: 2157
                                      },
                                      end: {
                                        line: 23,
                                        column: 110,
                                        offset: 2158
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 23, column: 7, offset: 2055 },
                                  end: {
                                    line: 23,
                                    column: 110,
                                    offset: 2158
                                  }
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
                                            type: 'inlineCode',
                                            value: '"string"',
                                            position: {
                                              start: {
                                                line: 24,
                                                column: 9,
                                                offset: 2167
                                              },
                                              end: {
                                                line: 24,
                                                column: 19,
                                                offset: 2177
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - iterator yields ',
                                            position: {
                                              start: {
                                                line: 24,
                                                column: 19,
                                                offset: 2177
                                              },
                                              end: {
                                                line: 24,
                                                column: 38,
                                                offset: 2196
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'string',
                                            position: {
                                              start: {
                                                line: 24,
                                                column: 38,
                                                offset: 2196
                                              },
                                              end: {
                                                line: 24,
                                                column: 46,
                                                offset: 2204
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 24,
                                                column: 46,
                                                offset: 2204
                                              },
                                              end: {
                                                line: 24,
                                                column: 54,
                                                offset: 2212
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 24,
                                            column: 9,
                                            offset: 2167
                                          },
                                          end: {
                                            line: 24,
                                            column: 54,
                                            offset: 2212
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 7,
                                        offset: 2165
                                      },
                                      end: {
                                        line: 24,
                                        column: 54,
                                        offset: 2212
                                      }
                                    }
                                  },
                                  {
                                    type: 'listItem',
                                    spread: false,
                                    checked: null,
                                    children: [
                                      {
                                        type: 'paragraph',
                                        children: [
                                          {
                                            type: 'inlineCode',
                                            value: '"binary"',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 9,
                                                offset: 2221
                                              },
                                              end: {
                                                line: 25,
                                                column: 19,
                                                offset: 2231
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - iterator yields ',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 19,
                                                offset: 2231
                                              },
                                              end: {
                                                line: 25,
                                                column: 38,
                                                offset: 2250
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'Buffer',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 38,
                                                offset: 2250
                                              },
                                              end: {
                                                line: 25,
                                                column: 46,
                                                offset: 2258
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 46,
                                                offset: 2258
                                              },
                                              end: {
                                                line: 25,
                                                column: 54,
                                                offset: 2266
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 25,
                                            column: 9,
                                            offset: 2221
                                          },
                                          end: {
                                            line: 25,
                                            column: 54,
                                            offset: 2266
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 25,
                                        column: 7,
                                        offset: 2219
                                      },
                                      end: {
                                        line: 25,
                                        column: 54,
                                        offset: 2266
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 24, column: 7, offset: 2165 },
                                  end: {
                                    line: 25,
                                    column: 54,
                                    offset: 2266
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 23, column: 5, offset: 2053 },
                              end: { line: 25, column: 54, offset: 2266 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'limit',
                                    position: {
                                      start: {
                                        line: 26,
                                        column: 7,
                                        offset: 2273
                                      },
                                      end: {
                                        line: 26,
                                        column: 14,
                                        offset: 2280
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 26,
                                        column: 14,
                                        offset: 2280
                                      },
                                      end: {
                                        line: 26,
                                        column: 17,
                                        offset: 2283
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'number',
                                    position: {
                                      start: {
                                        line: 26,
                                        column: 17,
                                        offset: 2283
                                      },
                                      end: {
                                        line: 26,
                                        column: 25,
                                        offset: 2291
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the maximum number of values to yield from the iterator.',
                                    position: {
                                      start: {
                                        line: 26,
                                        column: 25,
                                        offset: 2291
                                      },
                                      end: {
                                        line: 26,
                                        column: 84,
                                        offset: 2350
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 26, column: 7, offset: 2273 },
                                  end: {
                                    line: 26,
                                    column: 84,
                                    offset: 2350
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 26, column: 5, offset: 2271 },
                              end: { line: 26, column: 84, offset: 2350 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 20, column: 5, offset: 1427 },
                          end: { line: 26, column: 84, offset: 2350 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 19, column: 3, offset: 1411 },
                      end: { line: 26, column: 84, offset: 2350 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 3, offset: 1310 },
                  end: { line: 26, column: 84, offset: 2350 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 28, column: 1, offset: 2352 },
                      end: { line: 28, column: 8, offset: 2359 }
                    }
                  }
                ],
                position: {
                  start: { line: 28, column: 1, offset: 2352 },
                  end: { line: 28, column: 8, offset: 2359 }
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
                            type: 'inlineCode',
                            value: 'values',
                            position: {
                              start: { line: 29, column: 5, offset: 2364 },
                              end: { line: 29, column: 13, offset: 2372 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 29, column: 13, offset: 2372 },
                              end: { line: 29, column: 16, offset: 2375 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncGenerator<string|Buffer>',
                            position: {
                              start: { line: 29, column: 16, offset: 2375 },
                              end: { line: 29, column: 47, offset: 2406 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async generator of the values of all items in the disk sorted hash table on the database server sorted by sort value in ascending order.',
                            position: {
                              start: { line: 29, column: 47, offset: 2406 },
                              end: { line: 29, column: 189, offset: 2548 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 29, column: 5, offset: 2364 },
                          end: { line: 29, column: 189, offset: 2548 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 29, column: 3, offset: 2362 },
                      end: { line: 29, column: 189, offset: 2548 }
                    }
                  }
                ],
                position: {
                  start: { line: 29, column: 3, offset: 2362 },
                  end: { line: 29, column: 189, offset: 2548 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await ht.set("key1", "value1", 1)\n' +
                  'await ht.set("key2", "value2", 2)\n' +
                  'await ht.set("key3", "value3", 3)\n' +
                  '\n' +
                  'for await (const value of ht.forwardIterator()) {\n' +
                  '  console.log(value) // value1\n' +
                  '                     // value2\n' +
                  '                     // value3\n' +
                  '}\n' +
                  '\n' +
                  'for await (const value of ht.forwardIterator({ limit: 1 })) {\n' +
                  '  console.log(value) // value1\n' +
                  '}\n' +
                  '\n' +
                  'for await (const value of ht.forwardIterator({ startingSortValue: 2, endingSortValue: 3 })) {\n' +
                  '  console.log(value) // value2\n' +
                  '                     // value3\n' +
                  '}\n' +
                  '\n' +
                  'for await (const value of ht.forwardIterator({ exclusiveStartKey: "key1" })) {\n' +
                  '  console.log(value) // value2\n' +
                  '                     // value3\n' +
                  '}\n' +
                  '\n' +
                  'for await (const value of ht.forwardIterator({ exclusiveStartKey: "key1", endingSortValue: 2 })) {\n' +
                  '  console.log(value) // value2\n' +
                  '}\n' +
                  '\n' +
                  'await compositeSortValueHt.set("key1", "value1", "index-key1", 1)\n' +
                  'await compositeSortValueHt.set("key2", "value2", "index-key1", 2)\n' +
                  'await compositeSortValueHt.set("key3", "value3", "index-key1", 3)\n' +
                  '\n' +
                  'for await (const value of compositeSortValueHt.forwardIterator({\n' +
                  '  startingSortValue: ["index-key1", 2],\n' +
                  '  endingSortValue: ["index-key1", 3],\n' +
                  '})) {\n' +
                  '  console.log(value) // value2\n' +
                  '                     // value3\n' +
                  '}',
                position: {
                  start: { line: 31, column: 1, offset: 2550 },
                  end: { line: 71, column: 4, offset: 3760 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 71, column: 4, offset: 3760 }
            }
          }
        }
      },
      {
        name: 'reverseIterator',
        docs: '```specscript\n' +
          'reverseIterator(options {\n' +
          '  exclusiveStartKey: string, \n' +
          '  startingSortValue: string|number|Array<string|number>,\n' +
          '  endingSortValue: string|number|Array<string|number>,\n' +
          '  valueType: "string"|"binary",\n' +
          '  limit: number,\n' +
          '}) -> values AsyncIterator<string|Buffer>\n' +
          '```\n' +
          '\n' +
          'Returns an iterator of the values of all items in the disk sorted hash table on the database server sorted by sort value. Item values are yielded in descending order.\n' +
          '\n' +
          'If a starting sort value and ending sort value are provided, the iterator returns only values of items with sort values between the starting and ending sort values, including values of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the iterator returns values of items with sort values less than or equal to the starting sort value.\n' +
          '\n' +
          'If an exclusive start key is provided, the iterator returns values of items with sort values less than or equal to the sort value of the item at the exclusive start key, not including the value of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the values of all items in the disk sorted hash table on the database server.\n' +
          '  * `options`\n' +
          '    * `exclusiveStartKey` - `string` - the key after which to start iterating.\n' +
          '    * `startingSortValue` - `string|number|Array<string|number>` - the sort value from which to start iterating. If this value is an array, the starting sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.\n' +
          '    * `endingSortValue` - `string|number|Array<string|number>` - the sort value at which to stop iterating. If this value is an array, the ending sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.\n' +
          '    * `valueType` - `"string"|"binary"` - the type of value that the iterator yields. Defaults to `"string"`.\n' +
          '      * `string` - iterator yields `string` values.\n' +
          '      * `binary` - iterator yields `Buffer` values.\n' +
          '    * `limit` - `number` - the maximum number of values to yield from the iterator.\n' +
          '\n' +
          'Return:\n' +
          '  * `values` - `AsyncGenerator<string|Buffer>` - an async generator of the values of all items in the disk sorted hash table on the database server sorted by sort value in descending order.\n' +
          '\n' +
          '```javascript\n' +
          'await ht.set("key1", "value1", 1)\n' +
          'await ht.set("key2", "value2", 2)\n' +
          'await ht.set("key3", "value3", 3)\n' +
          '\n' +
          'for await (const value of ht.reverseIterator()) {\n' +
          '  console.log(value) // value3\n' +
          '                     // value2\n' +
          '                     // value1\n' +
          '}\n' +
          '\n' +
          'for await (const value of ht.reverseIterator({ limit: 1 })) {\n' +
          '  console.log(value) // value3\n' +
          '}\n' +
          '\n' +
          'for await (const value of ht.reverseIterator({ startingSortValue: 2, endingSortValue: 1 })) {\n' +
          '  console.log(value) // value2\n' +
          '                     // value1\n' +
          '}\n' +
          '\n' +
          'for await (const value of ht.reverseIterator({ exclusiveStartKey: "key3" })) {\n' +
          '  console.log(value) // value2\n' +
          '                     // value1\n' +
          '}\n' +
          '\n' +
          'for await (const value of ht.reverseIterator({ exclusiveStartKey: "key3", endingSortValue: 2 })) {\n' +
          '  console.log(value) // value2\n' +
          '}\n' +
          '\n' +
          'await compositeSortValueHt.set("key1", "value1", "index-key1", 1)\n' +
          'await compositeSortValueHt.set("key2", "value2", "index-key1", 2)\n' +
          'await compositeSortValueHt.set("key3", "value3", "index-key1", 3)\n' +
          '\n' +
          'for await (const value of compositeSortValueHt.reverseIterator({\n' +
          '  startingSortValue: ["index-key1", 3],\n' +
          '  endingSortValue: ["index-key1", 2],\n' +
          '})) {\n' +
          '  console.log(value) // value3\n' +
          '                     // value2\n' +
          '}\n' +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'reverseIterator',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 16, offset: 15 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 16, offset: 15 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 16, offset: 15 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'reverseIterator(options {\n' +
                  '  exclusiveStartKey: string, \n' +
                  '  startingSortValue: string|number|Array<string|number>,\n' +
                  '  endingSortValue: string|number|Array<string|number>,\n' +
                  '  valueType: "string"|"binary",\n' +
                  '  limit: number,\n' +
                  '}) -> values AsyncIterator<string|Buffer>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 9, column: 4, offset: 276 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns an iterator of the values of all items in the disk sorted hash table on the database server sorted by sort value. Item values are yielded in descending order.',
                    position: {
                      start: { line: 11, column: 1, offset: 278 },
                      end: { line: 11, column: 167, offset: 444 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 278 },
                  end: { line: 11, column: 167, offset: 444 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If a starting sort value and ending sort value are provided, the iterator returns only values of items with sort values between the starting and ending sort values, including values of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the iterator returns values of items with sort values less than or equal to the starting sort value.',
                    position: {
                      start: { line: 13, column: 1, offset: 446 },
                      end: { line: 13, column: 398, offset: 843 }
                    }
                  }
                ],
                position: {
                  start: { line: 13, column: 1, offset: 446 },
                  end: { line: 13, column: 398, offset: 843 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If an exclusive start key is provided, the iterator returns values of items with sort values less than or equal to the sort value of the item at the exclusive start key, not including the value of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.',
                    position: {
                      start: { line: 15, column: 1, offset: 845 },
                      end: { line: 15, column: 305, offset: 1149 }
                    }
                  }
                ],
                position: {
                  start: { line: 15, column: 1, offset: 845 },
                  end: { line: 15, column: 305, offset: 1149 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 17, column: 1, offset: 1151 },
                      end: { line: 17, column: 11, offset: 1161 }
                    }
                  }
                ],
                position: {
                  start: { line: 17, column: 1, offset: 1151 },
                  end: { line: 17, column: 11, offset: 1161 }
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
                            value: '(none) - retrieves the values of all items in the disk sorted hash table on the database server.',
                            position: {
                              start: { line: 18, column: 5, offset: 1166 },
                              end: { line: 18, column: 101, offset: 1262 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 18, column: 5, offset: 1166 },
                          end: { line: 18, column: 101, offset: 1262 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 18, column: 3, offset: 1164 },
                      end: { line: 18, column: 101, offset: 1262 }
                    }
                  },
                  {
                    type: 'listItem',
                    spread: false,
                    checked: null,
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'options',
                            position: {
                              start: { line: 19, column: 5, offset: 1267 },
                              end: { line: 19, column: 14, offset: 1276 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 1267 },
                          end: { line: 19, column: 14, offset: 1276 }
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
                                    type: 'inlineCode',
                                    value: 'exclusiveStartKey',
                                    position: {
                                      start: {
                                        line: 20,
                                        column: 7,
                                        offset: 1283
                                      },
                                      end: {
                                        line: 20,
                                        column: 26,
                                        offset: 1302
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 20,
                                        column: 26,
                                        offset: 1302
                                      },
                                      end: {
                                        line: 20,
                                        column: 29,
                                        offset: 1305
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string',
                                    position: {
                                      start: {
                                        line: 20,
                                        column: 29,
                                        offset: 1305
                                      },
                                      end: {
                                        line: 20,
                                        column: 37,
                                        offset: 1313
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the key after which to start iterating.',
                                    position: {
                                      start: {
                                        line: 20,
                                        column: 37,
                                        offset: 1313
                                      },
                                      end: {
                                        line: 20,
                                        column: 79,
                                        offset: 1355
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 20, column: 7, offset: 1283 },
                                  end: {
                                    line: 20,
                                    column: 79,
                                    offset: 1355
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 20, column: 5, offset: 1281 },
                              end: { line: 20, column: 79, offset: 1355 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'startingSortValue',
                                    position: {
                                      start: {
                                        line: 21,
                                        column: 7,
                                        offset: 1362
                                      },
                                      end: {
                                        line: 21,
                                        column: 26,
                                        offset: 1381
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 21,
                                        column: 26,
                                        offset: 1381
                                      },
                                      end: {
                                        line: 21,
                                        column: 29,
                                        offset: 1384
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string|number|Array<string|number>',
                                    position: {
                                      start: {
                                        line: 21,
                                        column: 29,
                                        offset: 1384
                                      },
                                      end: {
                                        line: 21,
                                        column: 65,
                                        offset: 1420
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort value from which to start iterating. If this value is an array, the starting sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.',
                                    position: {
                                      start: {
                                        line: 21,
                                        column: 65,
                                        offset: 1420
                                      },
                                      end: {
                                        line: 21,
                                        column: 277,
                                        offset: 1632
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 21, column: 7, offset: 1362 },
                                  end: {
                                    line: 21,
                                    column: 277,
                                    offset: 1632
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 5, offset: 1360 },
                              end: { line: 21, column: 277, offset: 1632 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'endingSortValue',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 7,
                                        offset: 1639
                                      },
                                      end: {
                                        line: 22,
                                        column: 24,
                                        offset: 1656
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 24,
                                        offset: 1656
                                      },
                                      end: {
                                        line: 22,
                                        column: 27,
                                        offset: 1659
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string|number|Array<string|number>',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 27,
                                        offset: 1659
                                      },
                                      end: {
                                        line: 22,
                                        column: 63,
                                        offset: 1695
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort value at which to stop iterating. If this value is an array, the ending sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 63,
                                        offset: 1695
                                      },
                                      end: {
                                        line: 22,
                                        column: 270,
                                        offset: 1902
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 22, column: 7, offset: 1639 },
                                  end: {
                                    line: 22,
                                    column: 270,
                                    offset: 1902
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 22, column: 5, offset: 1637 },
                              end: { line: 22, column: 270, offset: 1902 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'valueType',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 7,
                                        offset: 1909
                                      },
                                      end: {
                                        line: 23,
                                        column: 18,
                                        offset: 1920
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 18,
                                        offset: 1920
                                      },
                                      end: {
                                        line: 23,
                                        column: 21,
                                        offset: 1923
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: '"string"|"binary"',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 21,
                                        offset: 1923
                                      },
                                      end: {
                                        line: 23,
                                        column: 40,
                                        offset: 1942
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the type of value that the iterator yields. Defaults to ',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 40,
                                        offset: 1942
                                      },
                                      end: {
                                        line: 23,
                                        column: 99,
                                        offset: 2001
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: '"string"',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 99,
                                        offset: 2001
                                      },
                                      end: {
                                        line: 23,
                                        column: 109,
                                        offset: 2011
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: '.',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 109,
                                        offset: 2011
                                      },
                                      end: {
                                        line: 23,
                                        column: 110,
                                        offset: 2012
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 23, column: 7, offset: 1909 },
                                  end: {
                                    line: 23,
                                    column: 110,
                                    offset: 2012
                                  }
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
                                            type: 'inlineCode',
                                            value: 'string',
                                            position: {
                                              start: {
                                                line: 24,
                                                column: 9,
                                                offset: 2021
                                              },
                                              end: {
                                                line: 24,
                                                column: 17,
                                                offset: 2029
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - iterator yields ',
                                            position: {
                                              start: {
                                                line: 24,
                                                column: 17,
                                                offset: 2029
                                              },
                                              end: {
                                                line: 24,
                                                column: 36,
                                                offset: 2048
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'string',
                                            position: {
                                              start: {
                                                line: 24,
                                                column: 36,
                                                offset: 2048
                                              },
                                              end: {
                                                line: 24,
                                                column: 44,
                                                offset: 2056
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 24,
                                                column: 44,
                                                offset: 2056
                                              },
                                              end: {
                                                line: 24,
                                                column: 52,
                                                offset: 2064
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 24,
                                            column: 9,
                                            offset: 2021
                                          },
                                          end: {
                                            line: 24,
                                            column: 52,
                                            offset: 2064
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 7,
                                        offset: 2019
                                      },
                                      end: {
                                        line: 24,
                                        column: 52,
                                        offset: 2064
                                      }
                                    }
                                  },
                                  {
                                    type: 'listItem',
                                    spread: false,
                                    checked: null,
                                    children: [
                                      {
                                        type: 'paragraph',
                                        children: [
                                          {
                                            type: 'inlineCode',
                                            value: 'binary',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 9,
                                                offset: 2073
                                              },
                                              end: {
                                                line: 25,
                                                column: 17,
                                                offset: 2081
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - iterator yields ',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 17,
                                                offset: 2081
                                              },
                                              end: {
                                                line: 25,
                                                column: 36,
                                                offset: 2100
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'Buffer',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 36,
                                                offset: 2100
                                              },
                                              end: {
                                                line: 25,
                                                column: 44,
                                                offset: 2108
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 44,
                                                offset: 2108
                                              },
                                              end: {
                                                line: 25,
                                                column: 52,
                                                offset: 2116
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 25,
                                            column: 9,
                                            offset: 2073
                                          },
                                          end: {
                                            line: 25,
                                            column: 52,
                                            offset: 2116
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 25,
                                        column: 7,
                                        offset: 2071
                                      },
                                      end: {
                                        line: 25,
                                        column: 52,
                                        offset: 2116
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 24, column: 7, offset: 2019 },
                                  end: {
                                    line: 25,
                                    column: 52,
                                    offset: 2116
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 23, column: 5, offset: 1907 },
                              end: { line: 25, column: 52, offset: 2116 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'limit',
                                    position: {
                                      start: {
                                        line: 26,
                                        column: 7,
                                        offset: 2123
                                      },
                                      end: {
                                        line: 26,
                                        column: 14,
                                        offset: 2130
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 26,
                                        column: 14,
                                        offset: 2130
                                      },
                                      end: {
                                        line: 26,
                                        column: 17,
                                        offset: 2133
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'number',
                                    position: {
                                      start: {
                                        line: 26,
                                        column: 17,
                                        offset: 2133
                                      },
                                      end: {
                                        line: 26,
                                        column: 25,
                                        offset: 2141
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the maximum number of values to yield from the iterator.',
                                    position: {
                                      start: {
                                        line: 26,
                                        column: 25,
                                        offset: 2141
                                      },
                                      end: {
                                        line: 26,
                                        column: 84,
                                        offset: 2200
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 26, column: 7, offset: 2123 },
                                  end: {
                                    line: 26,
                                    column: 84,
                                    offset: 2200
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 26, column: 5, offset: 2121 },
                              end: { line: 26, column: 84, offset: 2200 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 20, column: 5, offset: 1281 },
                          end: { line: 26, column: 84, offset: 2200 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 19, column: 3, offset: 1265 },
                      end: { line: 26, column: 84, offset: 2200 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 3, offset: 1164 },
                  end: { line: 26, column: 84, offset: 2200 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 28, column: 1, offset: 2202 },
                      end: { line: 28, column: 8, offset: 2209 }
                    }
                  }
                ],
                position: {
                  start: { line: 28, column: 1, offset: 2202 },
                  end: { line: 28, column: 8, offset: 2209 }
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
                            type: 'inlineCode',
                            value: 'values',
                            position: {
                              start: { line: 29, column: 5, offset: 2214 },
                              end: { line: 29, column: 13, offset: 2222 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 29, column: 13, offset: 2222 },
                              end: { line: 29, column: 16, offset: 2225 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncGenerator<string|Buffer>',
                            position: {
                              start: { line: 29, column: 16, offset: 2225 },
                              end: { line: 29, column: 47, offset: 2256 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async generator of the values of all items in the disk sorted hash table on the database server sorted by sort value in descending order.',
                            position: {
                              start: { line: 29, column: 47, offset: 2256 },
                              end: { line: 29, column: 190, offset: 2399 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 29, column: 5, offset: 2214 },
                          end: { line: 29, column: 190, offset: 2399 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 29, column: 3, offset: 2212 },
                      end: { line: 29, column: 190, offset: 2399 }
                    }
                  }
                ],
                position: {
                  start: { line: 29, column: 3, offset: 2212 },
                  end: { line: 29, column: 190, offset: 2399 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await ht.set("key1", "value1", 1)\n' +
                  'await ht.set("key2", "value2", 2)\n' +
                  'await ht.set("key3", "value3", 3)\n' +
                  '\n' +
                  'for await (const value of ht.reverseIterator()) {\n' +
                  '  console.log(value) // value3\n' +
                  '                     // value2\n' +
                  '                     // value1\n' +
                  '}\n' +
                  '\n' +
                  'for await (const value of ht.reverseIterator({ limit: 1 })) {\n' +
                  '  console.log(value) // value3\n' +
                  '}\n' +
                  '\n' +
                  'for await (const value of ht.reverseIterator({ startingSortValue: 2, endingSortValue: 1 })) {\n' +
                  '  console.log(value) // value2\n' +
                  '                     // value1\n' +
                  '}\n' +
                  '\n' +
                  'for await (const value of ht.reverseIterator({ exclusiveStartKey: "key3" })) {\n' +
                  '  console.log(value) // value2\n' +
                  '                     // value1\n' +
                  '}\n' +
                  '\n' +
                  'for await (const value of ht.reverseIterator({ exclusiveStartKey: "key3", endingSortValue: 2 })) {\n' +
                  '  console.log(value) // value2\n' +
                  '}\n' +
                  '\n' +
                  'await compositeSortValueHt.set("key1", "value1", "index-key1", 1)\n' +
                  'await compositeSortValueHt.set("key2", "value2", "index-key1", 2)\n' +
                  'await compositeSortValueHt.set("key3", "value3", "index-key1", 3)\n' +
                  '\n' +
                  'for await (const value of compositeSortValueHt.reverseIterator({\n' +
                  '  startingSortValue: ["index-key1", 3],\n' +
                  '  endingSortValue: ["index-key1", 2],\n' +
                  '})) {\n' +
                  '  console.log(value) // value3\n' +
                  '                     // value2\n' +
                  '}',
                position: {
                  start: { line: 31, column: 1, offset: 2401 },
                  end: { line: 71, column: 4, offset: 3611 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 71, column: 4, offset: 3611 }
            }
          }
        }
      },
      {
        name: 'forwardEntriesIterator',
        docs: '```specscript\n' +
          'options {\n' +
          '  exclusiveStartKey: string,\n' +
          '  startingSortValue: string|number|Array<string|number>,\n' +
          '  endingSortValue: string|number|Array<string|number>,\n' +
          '  valueType: "string"|"binary",\n' +
          '  limit: number,\n' +
          '}\n' +
          '\n' +
          'forwardEntriesIterator() -> entries AsyncGenerator<[\n' +
          '  key string,\n' +
          '  value string|Buffer,\n' +
          '  sortValue string|number,\n' +
          ']>\n' +
          '\n' +
          'forwardEntriesIterator() -> entries AsyncGenerator<[\n' +
          '  key string,\n' +
          '  value string|Buffer,\n' +
          '  ...sortValue Array<string|number>,\n' +
          ']>\n' +
          '\n' +
          'forwardEntriesIterator(options) -> entries AsyncGenerator<[\n' +
          '  key string,\n' +
          '  value string|Buffer,\n' +
          '  sortValue string|number,\n' +
          ']>\n' +
          '\n' +
          'forwardEntriesIterator(options) -> entries AsyncGenerator<[\n' +
          '  key string,\n' +
          '  value string|Buffer,\n' +
          '  ...sortValue Array<string|number>,\n' +
          ']>\n' +
          '```\n' +
          '\n' +
          'Returns an iterator of the entries (key, value, and sort value) of all items in the disk sorted hash table on the database server sorted by sort value. Item entries are yielded in ascending order.\n' +
          '\n' +
          'If a starting sort value and ending sort value are provided, the iterator returns only entries of items with sort values between the starting and ending sort values, including entries of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the iterator returns entries of items with sort values greater than or equal to the starting sort value. If only an ending sort value is provided, the iterator returns entries of items with sort values less than or equal to the ending sort value.\n' +
          '\n' +
          'If an exclusive start key is provided, the iterator returns entries of items with sort values greater than or equal to the sort value of the item at the exclusive start key, not including the entry of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the entries of all items in the disk sorted hash table on the database server.\n' +
          '  * `options`\n' +
          '    * `exclusiveStartKey` - `string` - the key after which to start iterating.\n' +
          '    * `startingSortValue` - `string|number|Array<string|number>` - the sort value from which to start iterating. If this value is an array, the starting sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.\n' +
          '    * `endingSortValue` - `string|number|Array<string|number>` - the sort value at which to stop iterating. If this value is an array, the ending sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.\n' +
          '    * `valueType` - `"string"|"binary"` - the type of value that the iterator yields. Defaults to `"string"`.\n' +
          '      * `"string"` - iterator yields entries with `string` values.\n' +
          '      * `"binary"` - iterator yields entries with `Buffer` values.\n' +
          '    * `limit` - `number` - the maximum number of entries to yield from the iterator.\n' +
          '\n' +
          'Return:\n' +
          '  * `entries` - `AsyncGenerator<[key string, value string|Buffer, sortValue string|number]>` - an async generator of the entries of all items in the disk sorted hash table on the database server sorted by sort value in ascending order.\n' +
          '\n' +
          '```javascript\n' +
          'await ht.set("key1", "value1", 1)\n' +
          'await ht.set("key2", "value2", 2)\n' +
          'await ht.set("key3", "value3", 3)\n' +
          '\n' +
          'for await (const [key, value, sortValue] of ht.forwardEntriesIterator()) {\n' +
          '  console.log(key, value, sortValue) // key1 value1 1\n' +
          '                                     // key2 value2 2\n' +
          '                                     // key3 value3 3\n' +
          '}\n' +
          '\n' +
          'for await (const [key, value, sortValue] of ht.forwardEntriesIterator({ limit: 1 })) {\n' +
          '  console.log(key, value, sortValue) // key1 value1 1\n' +
          '}\n' +
          '\n' +
          'for await (const [key, value, sortValue] of ht.forwardEntriesIterator({ startingSortValue: 2, endingSortValue: 3 })) {\n' +
          '  console.log(key, value, sortValue) // key2 value2 2\n' +
          '                                     // key3 value3 3\n' +
          '}\n' +
          '\n' +
          'for await (const [key, value, sortValue] of ht.forwardEntriesIterator({ exclusiveStartKey: "key1" })) {\n' +
          '  console.log(key, value, sortValue) // key2 value2 2\n' +
          '                                     // key3 value3 3\n' +
          '}\n' +
          '\n' +
          'for await (const [key, value, sortValue] of ht.forwardEntriesIterator({ exclusiveStartKey: "key1", endingSortValue: 2 })) {\n' +
          '  console.log(key, value, sortValue) // key2 value2 2\n' +
          '}\n' +
          '\n' +
          'await compositeSortValueHt.set("key1", "value1", "index-key1", 1)\n' +
          'await compositeSortValueHt.set("key2", "value2", "index-key1", 2)\n' +
          'await compositeSortValueHt.set("key3", "value3", "index-key1", 3)\n' +
          '\n' +
          'for await (const [key, value, ...sortValue] of compositeSortValueHt.forwardEntriesIterator({\n' +
          '  startingSortValue: ["index-key1", 2],\n' +
          '  endingSortValue: ["index-key1", 3],\n' +
          '})) {\n' +
          '  console.log(key, value, sortValue) // key2 value2 ["index-key1", 2]\n' +
          '                                     // key3 value3 ["index-key1", 3]\n' +
          '}\n' +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'forwardEntriesIterator',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 23, offset: 22 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 23, offset: 22 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 23, offset: 22 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'options {\n' +
                  '  exclusiveStartKey: string,\n' +
                  '  startingSortValue: string|number|Array<string|number>,\n' +
                  '  endingSortValue: string|number|Array<string|number>,\n' +
                  '  valueType: "string"|"binary",\n' +
                  '  limit: number,\n' +
                  '}\n' +
                  '\n' +
                  'forwardEntriesIterator() -> entries AsyncGenerator<[\n' +
                  '  key string,\n' +
                  '  value string|Buffer,\n' +
                  '  sortValue string|number,\n' +
                  ']>\n' +
                  '\n' +
                  'forwardEntriesIterator() -> entries AsyncGenerator<[\n' +
                  '  key string,\n' +
                  '  value string|Buffer,\n' +
                  '  ...sortValue Array<string|number>,\n' +
                  ']>\n' +
                  '\n' +
                  'forwardEntriesIterator(options) -> entries AsyncGenerator<[\n' +
                  '  key string,\n' +
                  '  value string|Buffer,\n' +
                  '  sortValue string|number,\n' +
                  ']>\n' +
                  '\n' +
                  'forwardEntriesIterator(options) -> entries AsyncGenerator<[\n' +
                  '  key string,\n' +
                  '  value string|Buffer,\n' +
                  '  ...sortValue Array<string|number>,\n' +
                  ']>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 33, column: 4, offset: 737 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns an iterator of the entries (key, value, and sort value) of all items in the disk sorted hash table on the database server sorted by sort value. Item entries are yielded in ascending order.',
                    position: {
                      start: { line: 35, column: 1, offset: 739 },
                      end: { line: 35, column: 197, offset: 935 }
                    }
                  }
                ],
                position: {
                  start: { line: 35, column: 1, offset: 739 },
                  end: { line: 35, column: 197, offset: 935 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If a starting sort value and ending sort value are provided, the iterator returns only entries of items with sort values between the starting and ending sort values, including entries of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the iterator returns entries of items with sort values greater than or equal to the starting sort value. If only an ending sort value is provided, the iterator returns entries of items with sort values less than or equal to the ending sort value.',
                    position: {
                      start: { line: 37, column: 1, offset: 937 },
                      end: { line: 37, column: 546, offset: 1482 }
                    }
                  }
                ],
                position: {
                  start: { line: 37, column: 1, offset: 937 },
                  end: { line: 37, column: 546, offset: 1482 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If an exclusive start key is provided, the iterator returns entries of items with sort values greater than or equal to the sort value of the item at the exclusive start key, not including the entry of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.',
                    position: {
                      start: { line: 39, column: 1, offset: 1484 },
                      end: { line: 39, column: 309, offset: 1792 }
                    }
                  }
                ],
                position: {
                  start: { line: 39, column: 1, offset: 1484 },
                  end: { line: 39, column: 309, offset: 1792 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 41, column: 1, offset: 1794 },
                      end: { line: 41, column: 11, offset: 1804 }
                    }
                  }
                ],
                position: {
                  start: { line: 41, column: 1, offset: 1794 },
                  end: { line: 41, column: 11, offset: 1804 }
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
                            value: '(none) - retrieves the entries of all items in the disk sorted hash table on the database server.',
                            position: {
                              start: { line: 42, column: 5, offset: 1809 },
                              end: { line: 42, column: 102, offset: 1906 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 42, column: 5, offset: 1809 },
                          end: { line: 42, column: 102, offset: 1906 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 42, column: 3, offset: 1807 },
                      end: { line: 42, column: 102, offset: 1906 }
                    }
                  },
                  {
                    type: 'listItem',
                    spread: false,
                    checked: null,
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'options',
                            position: {
                              start: { line: 43, column: 5, offset: 1911 },
                              end: { line: 43, column: 14, offset: 1920 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 43, column: 5, offset: 1911 },
                          end: { line: 43, column: 14, offset: 1920 }
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
                                    type: 'inlineCode',
                                    value: 'exclusiveStartKey',
                                    position: {
                                      start: {
                                        line: 44,
                                        column: 7,
                                        offset: 1927
                                      },
                                      end: {
                                        line: 44,
                                        column: 26,
                                        offset: 1946
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 44,
                                        column: 26,
                                        offset: 1946
                                      },
                                      end: {
                                        line: 44,
                                        column: 29,
                                        offset: 1949
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string',
                                    position: {
                                      start: {
                                        line: 44,
                                        column: 29,
                                        offset: 1949
                                      },
                                      end: {
                                        line: 44,
                                        column: 37,
                                        offset: 1957
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the key after which to start iterating.',
                                    position: {
                                      start: {
                                        line: 44,
                                        column: 37,
                                        offset: 1957
                                      },
                                      end: {
                                        line: 44,
                                        column: 79,
                                        offset: 1999
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 44, column: 7, offset: 1927 },
                                  end: {
                                    line: 44,
                                    column: 79,
                                    offset: 1999
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 44, column: 5, offset: 1925 },
                              end: { line: 44, column: 79, offset: 1999 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'startingSortValue',
                                    position: {
                                      start: {
                                        line: 45,
                                        column: 7,
                                        offset: 2006
                                      },
                                      end: {
                                        line: 45,
                                        column: 26,
                                        offset: 2025
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 45,
                                        column: 26,
                                        offset: 2025
                                      },
                                      end: {
                                        line: 45,
                                        column: 29,
                                        offset: 2028
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string|number|Array<string|number>',
                                    position: {
                                      start: {
                                        line: 45,
                                        column: 29,
                                        offset: 2028
                                      },
                                      end: {
                                        line: 45,
                                        column: 65,
                                        offset: 2064
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort value from which to start iterating. If this value is an array, the starting sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.',
                                    position: {
                                      start: {
                                        line: 45,
                                        column: 65,
                                        offset: 2064
                                      },
                                      end: {
                                        line: 45,
                                        column: 277,
                                        offset: 2276
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 45, column: 7, offset: 2006 },
                                  end: {
                                    line: 45,
                                    column: 277,
                                    offset: 2276
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 45, column: 5, offset: 2004 },
                              end: { line: 45, column: 277, offset: 2276 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'endingSortValue',
                                    position: {
                                      start: {
                                        line: 46,
                                        column: 7,
                                        offset: 2283
                                      },
                                      end: {
                                        line: 46,
                                        column: 24,
                                        offset: 2300
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 46,
                                        column: 24,
                                        offset: 2300
                                      },
                                      end: {
                                        line: 46,
                                        column: 27,
                                        offset: 2303
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string|number|Array<string|number>',
                                    position: {
                                      start: {
                                        line: 46,
                                        column: 27,
                                        offset: 2303
                                      },
                                      end: {
                                        line: 46,
                                        column: 63,
                                        offset: 2339
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort value at which to stop iterating. If this value is an array, the ending sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.',
                                    position: {
                                      start: {
                                        line: 46,
                                        column: 63,
                                        offset: 2339
                                      },
                                      end: {
                                        line: 46,
                                        column: 270,
                                        offset: 2546
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 46, column: 7, offset: 2283 },
                                  end: {
                                    line: 46,
                                    column: 270,
                                    offset: 2546
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 46, column: 5, offset: 2281 },
                              end: { line: 46, column: 270, offset: 2546 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'valueType',
                                    position: {
                                      start: {
                                        line: 47,
                                        column: 7,
                                        offset: 2553
                                      },
                                      end: {
                                        line: 47,
                                        column: 18,
                                        offset: 2564
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 47,
                                        column: 18,
                                        offset: 2564
                                      },
                                      end: {
                                        line: 47,
                                        column: 21,
                                        offset: 2567
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: '"string"|"binary"',
                                    position: {
                                      start: {
                                        line: 47,
                                        column: 21,
                                        offset: 2567
                                      },
                                      end: {
                                        line: 47,
                                        column: 40,
                                        offset: 2586
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the type of value that the iterator yields. Defaults to ',
                                    position: {
                                      start: {
                                        line: 47,
                                        column: 40,
                                        offset: 2586
                                      },
                                      end: {
                                        line: 47,
                                        column: 99,
                                        offset: 2645
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: '"string"',
                                    position: {
                                      start: {
                                        line: 47,
                                        column: 99,
                                        offset: 2645
                                      },
                                      end: {
                                        line: 47,
                                        column: 109,
                                        offset: 2655
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: '.',
                                    position: {
                                      start: {
                                        line: 47,
                                        column: 109,
                                        offset: 2655
                                      },
                                      end: {
                                        line: 47,
                                        column: 110,
                                        offset: 2656
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 47, column: 7, offset: 2553 },
                                  end: {
                                    line: 47,
                                    column: 110,
                                    offset: 2656
                                  }
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
                                            type: 'inlineCode',
                                            value: '"string"',
                                            position: {
                                              start: {
                                                line: 48,
                                                column: 9,
                                                offset: 2665
                                              },
                                              end: {
                                                line: 48,
                                                column: 19,
                                                offset: 2675
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - iterator yields entries with ',
                                            position: {
                                              start: {
                                                line: 48,
                                                column: 19,
                                                offset: 2675
                                              },
                                              end: {
                                                line: 48,
                                                column: 51,
                                                offset: 2707
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'string',
                                            position: {
                                              start: {
                                                line: 48,
                                                column: 51,
                                                offset: 2707
                                              },
                                              end: {
                                                line: 48,
                                                column: 59,
                                                offset: 2715
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 48,
                                                column: 59,
                                                offset: 2715
                                              },
                                              end: {
                                                line: 48,
                                                column: 67,
                                                offset: 2723
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 48,
                                            column: 9,
                                            offset: 2665
                                          },
                                          end: {
                                            line: 48,
                                            column: 67,
                                            offset: 2723
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 48,
                                        column: 7,
                                        offset: 2663
                                      },
                                      end: {
                                        line: 48,
                                        column: 67,
                                        offset: 2723
                                      }
                                    }
                                  },
                                  {
                                    type: 'listItem',
                                    spread: false,
                                    checked: null,
                                    children: [
                                      {
                                        type: 'paragraph',
                                        children: [
                                          {
                                            type: 'inlineCode',
                                            value: '"binary"',
                                            position: {
                                              start: {
                                                line: 49,
                                                column: 9,
                                                offset: 2732
                                              },
                                              end: {
                                                line: 49,
                                                column: 19,
                                                offset: 2742
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - iterator yields entries with ',
                                            position: {
                                              start: {
                                                line: 49,
                                                column: 19,
                                                offset: 2742
                                              },
                                              end: {
                                                line: 49,
                                                column: 51,
                                                offset: 2774
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'Buffer',
                                            position: {
                                              start: {
                                                line: 49,
                                                column: 51,
                                                offset: 2774
                                              },
                                              end: {
                                                line: 49,
                                                column: 59,
                                                offset: 2782
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 49,
                                                column: 59,
                                                offset: 2782
                                              },
                                              end: {
                                                line: 49,
                                                column: 67,
                                                offset: 2790
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 49,
                                            column: 9,
                                            offset: 2732
                                          },
                                          end: {
                                            line: 49,
                                            column: 67,
                                            offset: 2790
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 49,
                                        column: 7,
                                        offset: 2730
                                      },
                                      end: {
                                        line: 49,
                                        column: 67,
                                        offset: 2790
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 48, column: 7, offset: 2663 },
                                  end: {
                                    line: 49,
                                    column: 67,
                                    offset: 2790
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 47, column: 5, offset: 2551 },
                              end: { line: 49, column: 67, offset: 2790 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'limit',
                                    position: {
                                      start: {
                                        line: 50,
                                        column: 7,
                                        offset: 2797
                                      },
                                      end: {
                                        line: 50,
                                        column: 14,
                                        offset: 2804
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 50,
                                        column: 14,
                                        offset: 2804
                                      },
                                      end: {
                                        line: 50,
                                        column: 17,
                                        offset: 2807
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'number',
                                    position: {
                                      start: {
                                        line: 50,
                                        column: 17,
                                        offset: 2807
                                      },
                                      end: {
                                        line: 50,
                                        column: 25,
                                        offset: 2815
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the maximum number of entries to yield from the iterator.',
                                    position: {
                                      start: {
                                        line: 50,
                                        column: 25,
                                        offset: 2815
                                      },
                                      end: {
                                        line: 50,
                                        column: 85,
                                        offset: 2875
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 50, column: 7, offset: 2797 },
                                  end: {
                                    line: 50,
                                    column: 85,
                                    offset: 2875
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 50, column: 5, offset: 2795 },
                              end: { line: 50, column: 85, offset: 2875 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 44, column: 5, offset: 1925 },
                          end: { line: 50, column: 85, offset: 2875 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 43, column: 3, offset: 1909 },
                      end: { line: 50, column: 85, offset: 2875 }
                    }
                  }
                ],
                position: {
                  start: { line: 42, column: 3, offset: 1807 },
                  end: { line: 50, column: 85, offset: 2875 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 52, column: 1, offset: 2877 },
                      end: { line: 52, column: 8, offset: 2884 }
                    }
                  }
                ],
                position: {
                  start: { line: 52, column: 1, offset: 2877 },
                  end: { line: 52, column: 8, offset: 2884 }
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
                            type: 'inlineCode',
                            value: 'entries',
                            position: {
                              start: { line: 53, column: 5, offset: 2889 },
                              end: { line: 53, column: 14, offset: 2898 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 53, column: 14, offset: 2898 },
                              end: { line: 53, column: 17, offset: 2901 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncGenerator<[key string, value string|Buffer, sortValue string|number]>',
                            position: {
                              start: { line: 53, column: 17, offset: 2901 },
                              end: { line: 53, column: 93, offset: 2977 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async generator of the entries of all items in the disk sorted hash table on the database server sorted by sort value in ascending order.',
                            position: {
                              start: { line: 53, column: 93, offset: 2977 },
                              end: { line: 53, column: 236, offset: 3120 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 53, column: 5, offset: 2889 },
                          end: { line: 53, column: 236, offset: 3120 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 53, column: 3, offset: 2887 },
                      end: { line: 53, column: 236, offset: 3120 }
                    }
                  }
                ],
                position: {
                  start: { line: 53, column: 3, offset: 2887 },
                  end: { line: 53, column: 236, offset: 3120 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await ht.set("key1", "value1", 1)\n' +
                  'await ht.set("key2", "value2", 2)\n' +
                  'await ht.set("key3", "value3", 3)\n' +
                  '\n' +
                  'for await (const [key, value, sortValue] of ht.forwardEntriesIterator()) {\n' +
                  '  console.log(key, value, sortValue) // key1 value1 1\n' +
                  '                                     // key2 value2 2\n' +
                  '                                     // key3 value3 3\n' +
                  '}\n' +
                  '\n' +
                  'for await (const [key, value, sortValue] of ht.forwardEntriesIterator({ limit: 1 })) {\n' +
                  '  console.log(key, value, sortValue) // key1 value1 1\n' +
                  '}\n' +
                  '\n' +
                  'for await (const [key, value, sortValue] of ht.forwardEntriesIterator({ startingSortValue: 2, endingSortValue: 3 })) {\n' +
                  '  console.log(key, value, sortValue) // key2 value2 2\n' +
                  '                                     // key3 value3 3\n' +
                  '}\n' +
                  '\n' +
                  'for await (const [key, value, sortValue] of ht.forwardEntriesIterator({ exclusiveStartKey: "key1" })) {\n' +
                  '  console.log(key, value, sortValue) // key2 value2 2\n' +
                  '                                     // key3 value3 3\n' +
                  '}\n' +
                  '\n' +
                  'for await (const [key, value, sortValue] of ht.forwardEntriesIterator({ exclusiveStartKey: "key1", endingSortValue: 2 })) {\n' +
                  '  console.log(key, value, sortValue) // key2 value2 2\n' +
                  '}\n' +
                  '\n' +
                  'await compositeSortValueHt.set("key1", "value1", "index-key1", 1)\n' +
                  'await compositeSortValueHt.set("key2", "value2", "index-key1", 2)\n' +
                  'await compositeSortValueHt.set("key3", "value3", "index-key1", 3)\n' +
                  '\n' +
                  'for await (const [key, value, ...sortValue] of compositeSortValueHt.forwardEntriesIterator({\n' +
                  '  startingSortValue: ["index-key1", 2],\n' +
                  '  endingSortValue: ["index-key1", 3],\n' +
                  '})) {\n' +
                  '  console.log(key, value, sortValue) // key2 value2 ["index-key1", 2]\n' +
                  '                                     // key3 value3 ["index-key1", 3]\n' +
                  '}',
                position: {
                  start: { line: 55, column: 1, offset: 3122 },
                  end: { line: 95, column: 4, offset: 4770 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 95, column: 4, offset: 4770 }
            }
          }
        }
      },
      {
        name: 'reverseEntriesIterator',
        docs: '```specscript\n' +
          'options {\n' +
          '  exclusiveStartKey: string,\n' +
          '  startingSortValue: string|number|Array<string|number>,\n' +
          '  endingSortValue: string|number|Array<string|number>,\n' +
          '  valueType: "string"|"binary",\n' +
          '  limit: number,\n' +
          '}\n' +
          '\n' +
          'reverseEntriesIterator() -> entries AsyncGenerator<[\n' +
          '  key string,\n' +
          '  value string|Buffer,\n' +
          '  sortValue string|number,\n' +
          ']>\n' +
          '\n' +
          'reverseEntriesIterator() -> entries AsyncGenerator<[\n' +
          '  key string,\n' +
          '  value string|Buffer,\n' +
          '  ...sortValue Array<string|number>,\n' +
          ']>\n' +
          '\n' +
          'reverseEntriesIterator(options) -> entries AsyncGenerator<[\n' +
          '  key string,\n' +
          '  value string|Buffer,\n' +
          '  sortValue string|number,\n' +
          ']>\n' +
          '\n' +
          'reverseEntriesIterator(options) -> entries AsyncGenerator<[\n' +
          '  key string,\n' +
          '  value string|Buffer,\n' +
          '  ...sortValue Array<string|number>,\n' +
          ']>\n' +
          '```\n' +
          '\n' +
          'Returns an iterator of the entries (key, value, and sort value) of all items in the disk sorted hash table on the database server sorted by sort value. Item entries are yielded in descending order.\n' +
          '\n' +
          'If a starting sort value and ending sort value are provided, the iterator returns only entries of items with sort values between the starting and ending sort values, including entries of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the iterator returns entries of items with sort values less than or equal to the starting sort value.\n' +
          '\n' +
          'If an exclusive start key is provided, the iterator returns entries of items with sort values less than or equal to the sort value of the item at the exclusive start key, not including the entry of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the entries of all items in the disk sorted hash table on the database server.\n' +
          '  * `options`\n' +
          '    * `exclusiveStartKey` - `string` - the key after which to start iterating.\n' +
          '    * `startingSortValue` - `string|number|Array<string|number>` - the sort value from which to start iterating. If this value is an array, the starting sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.\n' +
          '    * `endingSortValue` - `string|number|Array<string|number>` - the sort value at which to stop iterating. If this value is an array, the ending sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.\n' +
          '    * `valueType` - `"string"|"binary"` - the type of value that the iterator yields. Defaults to `"string"`.\n' +
          '      * `string` - iterator yields entries with `string` values.\n' +
          '      * `binary` - iterator yields entries with `Buffer` values.\n' +
          '    * `limit` - `number` - the maximum number of entries to yield from the iterator.\n' +
          '\n' +
          'Return:\n' +
          '  * `entries` - `AsyncGenerator<[key string, value string|Buffer, sortValue string|number]>` - an async generator of the entries of all items in the disk sorted hash table on the database server sorted by sort value in descending order.\n' +
          '\n' +
          '```javascript\n' +
          'await ht.set("key1", "value1", 1)\n' +
          'await ht.set("key2", "value2", 2)\n' +
          'await ht.set("key3", "value3", 3)\n' +
          '\n' +
          'for await (const [key, value, sortValue] of ht.reverseEntriesIterator()) {\n' +
          '  console.log(key, value, sortValue) // key3 value3 3\n' +
          '                                     // key2 value2 2\n' +
          '                                     // key1 value1 1\n' +
          '}\n' +
          '\n' +
          'for await (const [key, value, sortValue] of ht.reverseEntriesIterator({ limit: 1 })) {\n' +
          '  console.log(key, value, sortValue) // key3 value3 3\n' +
          '}\n' +
          '\n' +
          'for await (const [key, value, sortValue] of ht.reverseEntriesIterator({ startingSortValue: 2, endingSortValue: 1 })) {\n' +
          '  console.log(key, value, sortValue) // key2 value2 2\n' +
          '                                     // key1 value1 1\n' +
          '}\n' +
          '\n' +
          'for await (const [key, value, sortValue] of ht.reverseEntriesIterator({ exclusiveStartKey: "key3" })) {\n' +
          '  console.log(key, value, sortValue) // key2 value2 2\n' +
          '                                     // key1 value1 1\n' +
          '}\n' +
          '\n' +
          'for await (const [key, value, sortValue] of ht.reverseEntriesIterator({ exclusiveStartKey: "key3", endingSortValue: 2 })) {\n' +
          '  console.log(key, value, sortValue) // key2 value2 2\n' +
          '}\n' +
          '\n' +
          'await compositeSortValueHt.set("key1", "value1", "index-key1", 1)\n' +
          'await compositeSortValueHt.set("key2", "value2", "index-key1", 2)\n' +
          'await compositeSortValueHt.set("key3", "value3", "index-key1", 3)\n' +
          '\n' +
          'for await (const [key, value, ...sortValue] of compositeSortValueHt.reverseEntriesIterator({\n' +
          '  startingSortValue: ["index-key1", 3],\n' +
          '  endingSortValue: ["index-key1", 2],\n' +
          '})) {\n' +
          '  console.log(key, value, sortValue) // key2 value2 ["index-key1", 3]\n' +
          '                                     // key3 value3 ["index-key1", 2]\n' +
          '}\n' +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'reverseEntriesIterator',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 23, offset: 22 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 23, offset: 22 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 23, offset: 22 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'options {\n' +
                  '  exclusiveStartKey: string,\n' +
                  '  startingSortValue: string|number|Array<string|number>,\n' +
                  '  endingSortValue: string|number|Array<string|number>,\n' +
                  '  valueType: "string"|"binary",\n' +
                  '  limit: number,\n' +
                  '}\n' +
                  '\n' +
                  'reverseEntriesIterator() -> entries AsyncGenerator<[\n' +
                  '  key string,\n' +
                  '  value string|Buffer,\n' +
                  '  sortValue string|number,\n' +
                  ']>\n' +
                  '\n' +
                  'reverseEntriesIterator() -> entries AsyncGenerator<[\n' +
                  '  key string,\n' +
                  '  value string|Buffer,\n' +
                  '  ...sortValue Array<string|number>,\n' +
                  ']>\n' +
                  '\n' +
                  'reverseEntriesIterator(options) -> entries AsyncGenerator<[\n' +
                  '  key string,\n' +
                  '  value string|Buffer,\n' +
                  '  sortValue string|number,\n' +
                  ']>\n' +
                  '\n' +
                  'reverseEntriesIterator(options) -> entries AsyncGenerator<[\n' +
                  '  key string,\n' +
                  '  value string|Buffer,\n' +
                  '  ...sortValue Array<string|number>,\n' +
                  ']>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 33, column: 4, offset: 737 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns an iterator of the entries (key, value, and sort value) of all items in the disk sorted hash table on the database server sorted by sort value. Item entries are yielded in descending order.',
                    position: {
                      start: { line: 35, column: 1, offset: 739 },
                      end: { line: 35, column: 198, offset: 936 }
                    }
                  }
                ],
                position: {
                  start: { line: 35, column: 1, offset: 739 },
                  end: { line: 35, column: 198, offset: 936 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If a starting sort value and ending sort value are provided, the iterator returns only entries of items with sort values between the starting and ending sort values, including entries of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the iterator returns entries of items with sort values less than or equal to the starting sort value.',
                    position: {
                      start: { line: 37, column: 1, offset: 938 },
                      end: { line: 37, column: 401, offset: 1338 }
                    }
                  }
                ],
                position: {
                  start: { line: 37, column: 1, offset: 938 },
                  end: { line: 37, column: 401, offset: 1338 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If an exclusive start key is provided, the iterator returns entries of items with sort values less than or equal to the sort value of the item at the exclusive start key, not including the entry of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.',
                    position: {
                      start: { line: 39, column: 1, offset: 1340 },
                      end: { line: 39, column: 306, offset: 1645 }
                    }
                  }
                ],
                position: {
                  start: { line: 39, column: 1, offset: 1340 },
                  end: { line: 39, column: 306, offset: 1645 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 41, column: 1, offset: 1647 },
                      end: { line: 41, column: 11, offset: 1657 }
                    }
                  }
                ],
                position: {
                  start: { line: 41, column: 1, offset: 1647 },
                  end: { line: 41, column: 11, offset: 1657 }
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
                            value: '(none) - retrieves the entries of all items in the disk sorted hash table on the database server.',
                            position: {
                              start: { line: 42, column: 5, offset: 1662 },
                              end: { line: 42, column: 102, offset: 1759 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 42, column: 5, offset: 1662 },
                          end: { line: 42, column: 102, offset: 1759 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 42, column: 3, offset: 1660 },
                      end: { line: 42, column: 102, offset: 1759 }
                    }
                  },
                  {
                    type: 'listItem',
                    spread: false,
                    checked: null,
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'options',
                            position: {
                              start: { line: 43, column: 5, offset: 1764 },
                              end: { line: 43, column: 14, offset: 1773 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 43, column: 5, offset: 1764 },
                          end: { line: 43, column: 14, offset: 1773 }
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
                                    type: 'inlineCode',
                                    value: 'exclusiveStartKey',
                                    position: {
                                      start: {
                                        line: 44,
                                        column: 7,
                                        offset: 1780
                                      },
                                      end: {
                                        line: 44,
                                        column: 26,
                                        offset: 1799
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 44,
                                        column: 26,
                                        offset: 1799
                                      },
                                      end: {
                                        line: 44,
                                        column: 29,
                                        offset: 1802
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string',
                                    position: {
                                      start: {
                                        line: 44,
                                        column: 29,
                                        offset: 1802
                                      },
                                      end: {
                                        line: 44,
                                        column: 37,
                                        offset: 1810
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the key after which to start iterating.',
                                    position: {
                                      start: {
                                        line: 44,
                                        column: 37,
                                        offset: 1810
                                      },
                                      end: {
                                        line: 44,
                                        column: 79,
                                        offset: 1852
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 44, column: 7, offset: 1780 },
                                  end: {
                                    line: 44,
                                    column: 79,
                                    offset: 1852
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 44, column: 5, offset: 1778 },
                              end: { line: 44, column: 79, offset: 1852 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'startingSortValue',
                                    position: {
                                      start: {
                                        line: 45,
                                        column: 7,
                                        offset: 1859
                                      },
                                      end: {
                                        line: 45,
                                        column: 26,
                                        offset: 1878
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 45,
                                        column: 26,
                                        offset: 1878
                                      },
                                      end: {
                                        line: 45,
                                        column: 29,
                                        offset: 1881
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string|number|Array<string|number>',
                                    position: {
                                      start: {
                                        line: 45,
                                        column: 29,
                                        offset: 1881
                                      },
                                      end: {
                                        line: 45,
                                        column: 65,
                                        offset: 1917
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort value from which to start iterating. If this value is an array, the starting sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.',
                                    position: {
                                      start: {
                                        line: 45,
                                        column: 65,
                                        offset: 1917
                                      },
                                      end: {
                                        line: 45,
                                        column: 277,
                                        offset: 2129
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 45, column: 7, offset: 1859 },
                                  end: {
                                    line: 45,
                                    column: 277,
                                    offset: 2129
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 45, column: 5, offset: 1857 },
                              end: { line: 45, column: 277, offset: 2129 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'endingSortValue',
                                    position: {
                                      start: {
                                        line: 46,
                                        column: 7,
                                        offset: 2136
                                      },
                                      end: {
                                        line: 46,
                                        column: 24,
                                        offset: 2153
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 46,
                                        column: 24,
                                        offset: 2153
                                      },
                                      end: {
                                        line: 46,
                                        column: 27,
                                        offset: 2156
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string|number|Array<string|number>',
                                    position: {
                                      start: {
                                        line: 46,
                                        column: 27,
                                        offset: 2156
                                      },
                                      end: {
                                        line: 46,
                                        column: 63,
                                        offset: 2192
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort value at which to stop iterating. If this value is an array, the ending sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.',
                                    position: {
                                      start: {
                                        line: 46,
                                        column: 63,
                                        offset: 2192
                                      },
                                      end: {
                                        line: 46,
                                        column: 270,
                                        offset: 2399
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 46, column: 7, offset: 2136 },
                                  end: {
                                    line: 46,
                                    column: 270,
                                    offset: 2399
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 46, column: 5, offset: 2134 },
                              end: { line: 46, column: 270, offset: 2399 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'valueType',
                                    position: {
                                      start: {
                                        line: 47,
                                        column: 7,
                                        offset: 2406
                                      },
                                      end: {
                                        line: 47,
                                        column: 18,
                                        offset: 2417
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 47,
                                        column: 18,
                                        offset: 2417
                                      },
                                      end: {
                                        line: 47,
                                        column: 21,
                                        offset: 2420
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: '"string"|"binary"',
                                    position: {
                                      start: {
                                        line: 47,
                                        column: 21,
                                        offset: 2420
                                      },
                                      end: {
                                        line: 47,
                                        column: 40,
                                        offset: 2439
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the type of value that the iterator yields. Defaults to ',
                                    position: {
                                      start: {
                                        line: 47,
                                        column: 40,
                                        offset: 2439
                                      },
                                      end: {
                                        line: 47,
                                        column: 99,
                                        offset: 2498
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: '"string"',
                                    position: {
                                      start: {
                                        line: 47,
                                        column: 99,
                                        offset: 2498
                                      },
                                      end: {
                                        line: 47,
                                        column: 109,
                                        offset: 2508
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: '.',
                                    position: {
                                      start: {
                                        line: 47,
                                        column: 109,
                                        offset: 2508
                                      },
                                      end: {
                                        line: 47,
                                        column: 110,
                                        offset: 2509
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 47, column: 7, offset: 2406 },
                                  end: {
                                    line: 47,
                                    column: 110,
                                    offset: 2509
                                  }
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
                                            type: 'inlineCode',
                                            value: 'string',
                                            position: {
                                              start: {
                                                line: 48,
                                                column: 9,
                                                offset: 2518
                                              },
                                              end: {
                                                line: 48,
                                                column: 17,
                                                offset: 2526
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - iterator yields entries with ',
                                            position: {
                                              start: {
                                                line: 48,
                                                column: 17,
                                                offset: 2526
                                              },
                                              end: {
                                                line: 48,
                                                column: 49,
                                                offset: 2558
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'string',
                                            position: {
                                              start: {
                                                line: 48,
                                                column: 49,
                                                offset: 2558
                                              },
                                              end: {
                                                line: 48,
                                                column: 57,
                                                offset: 2566
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 48,
                                                column: 57,
                                                offset: 2566
                                              },
                                              end: {
                                                line: 48,
                                                column: 65,
                                                offset: 2574
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 48,
                                            column: 9,
                                            offset: 2518
                                          },
                                          end: {
                                            line: 48,
                                            column: 65,
                                            offset: 2574
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 48,
                                        column: 7,
                                        offset: 2516
                                      },
                                      end: {
                                        line: 48,
                                        column: 65,
                                        offset: 2574
                                      }
                                    }
                                  },
                                  {
                                    type: 'listItem',
                                    spread: false,
                                    checked: null,
                                    children: [
                                      {
                                        type: 'paragraph',
                                        children: [
                                          {
                                            type: 'inlineCode',
                                            value: 'binary',
                                            position: {
                                              start: {
                                                line: 49,
                                                column: 9,
                                                offset: 2583
                                              },
                                              end: {
                                                line: 49,
                                                column: 17,
                                                offset: 2591
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - iterator yields entries with ',
                                            position: {
                                              start: {
                                                line: 49,
                                                column: 17,
                                                offset: 2591
                                              },
                                              end: {
                                                line: 49,
                                                column: 49,
                                                offset: 2623
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'Buffer',
                                            position: {
                                              start: {
                                                line: 49,
                                                column: 49,
                                                offset: 2623
                                              },
                                              end: {
                                                line: 49,
                                                column: 57,
                                                offset: 2631
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 49,
                                                column: 57,
                                                offset: 2631
                                              },
                                              end: {
                                                line: 49,
                                                column: 65,
                                                offset: 2639
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 49,
                                            column: 9,
                                            offset: 2583
                                          },
                                          end: {
                                            line: 49,
                                            column: 65,
                                            offset: 2639
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 49,
                                        column: 7,
                                        offset: 2581
                                      },
                                      end: {
                                        line: 49,
                                        column: 65,
                                        offset: 2639
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 48, column: 7, offset: 2516 },
                                  end: {
                                    line: 49,
                                    column: 65,
                                    offset: 2639
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 47, column: 5, offset: 2404 },
                              end: { line: 49, column: 65, offset: 2639 }
                            }
                          },
                          {
                            type: 'listItem',
                            spread: false,
                            checked: null,
                            children: [
                              {
                                type: 'paragraph',
                                children: [
                                  {
                                    type: 'inlineCode',
                                    value: 'limit',
                                    position: {
                                      start: {
                                        line: 50,
                                        column: 7,
                                        offset: 2646
                                      },
                                      end: {
                                        line: 50,
                                        column: 14,
                                        offset: 2653
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 50,
                                        column: 14,
                                        offset: 2653
                                      },
                                      end: {
                                        line: 50,
                                        column: 17,
                                        offset: 2656
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'number',
                                    position: {
                                      start: {
                                        line: 50,
                                        column: 17,
                                        offset: 2656
                                      },
                                      end: {
                                        line: 50,
                                        column: 25,
                                        offset: 2664
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the maximum number of entries to yield from the iterator.',
                                    position: {
                                      start: {
                                        line: 50,
                                        column: 25,
                                        offset: 2664
                                      },
                                      end: {
                                        line: 50,
                                        column: 85,
                                        offset: 2724
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 50, column: 7, offset: 2646 },
                                  end: {
                                    line: 50,
                                    column: 85,
                                    offset: 2724
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 50, column: 5, offset: 2644 },
                              end: { line: 50, column: 85, offset: 2724 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 44, column: 5, offset: 1778 },
                          end: { line: 50, column: 85, offset: 2724 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 43, column: 3, offset: 1762 },
                      end: { line: 50, column: 85, offset: 2724 }
                    }
                  }
                ],
                position: {
                  start: { line: 42, column: 3, offset: 1660 },
                  end: { line: 50, column: 85, offset: 2724 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 52, column: 1, offset: 2726 },
                      end: { line: 52, column: 8, offset: 2733 }
                    }
                  }
                ],
                position: {
                  start: { line: 52, column: 1, offset: 2726 },
                  end: { line: 52, column: 8, offset: 2733 }
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
                            type: 'inlineCode',
                            value: 'entries',
                            position: {
                              start: { line: 53, column: 5, offset: 2738 },
                              end: { line: 53, column: 14, offset: 2747 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 53, column: 14, offset: 2747 },
                              end: { line: 53, column: 17, offset: 2750 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncGenerator<[key string, value string|Buffer, sortValue string|number]>',
                            position: {
                              start: { line: 53, column: 17, offset: 2750 },
                              end: { line: 53, column: 93, offset: 2826 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async generator of the entries of all items in the disk sorted hash table on the database server sorted by sort value in descending order.',
                            position: {
                              start: { line: 53, column: 93, offset: 2826 },
                              end: { line: 53, column: 237, offset: 2970 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 53, column: 5, offset: 2738 },
                          end: { line: 53, column: 237, offset: 2970 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 53, column: 3, offset: 2736 },
                      end: { line: 53, column: 237, offset: 2970 }
                    }
                  }
                ],
                position: {
                  start: { line: 53, column: 3, offset: 2736 },
                  end: { line: 53, column: 237, offset: 2970 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await ht.set("key1", "value1", 1)\n' +
                  'await ht.set("key2", "value2", 2)\n' +
                  'await ht.set("key3", "value3", 3)\n' +
                  '\n' +
                  'for await (const [key, value, sortValue] of ht.reverseEntriesIterator()) {\n' +
                  '  console.log(key, value, sortValue) // key3 value3 3\n' +
                  '                                     // key2 value2 2\n' +
                  '                                     // key1 value1 1\n' +
                  '}\n' +
                  '\n' +
                  'for await (const [key, value, sortValue] of ht.reverseEntriesIterator({ limit: 1 })) {\n' +
                  '  console.log(key, value, sortValue) // key3 value3 3\n' +
                  '}\n' +
                  '\n' +
                  'for await (const [key, value, sortValue] of ht.reverseEntriesIterator({ startingSortValue: 2, endingSortValue: 1 })) {\n' +
                  '  console.log(key, value, sortValue) // key2 value2 2\n' +
                  '                                     // key1 value1 1\n' +
                  '}\n' +
                  '\n' +
                  'for await (const [key, value, sortValue] of ht.reverseEntriesIterator({ exclusiveStartKey: "key3" })) {\n' +
                  '  console.log(key, value, sortValue) // key2 value2 2\n' +
                  '                                     // key1 value1 1\n' +
                  '}\n' +
                  '\n' +
                  'for await (const [key, value, sortValue] of ht.reverseEntriesIterator({ exclusiveStartKey: "key3", endingSortValue: 2 })) {\n' +
                  '  console.log(key, value, sortValue) // key2 value2 2\n' +
                  '}\n' +
                  '\n' +
                  'await compositeSortValueHt.set("key1", "value1", "index-key1", 1)\n' +
                  'await compositeSortValueHt.set("key2", "value2", "index-key1", 2)\n' +
                  'await compositeSortValueHt.set("key3", "value3", "index-key1", 3)\n' +
                  '\n' +
                  'for await (const [key, value, ...sortValue] of compositeSortValueHt.reverseEntriesIterator({\n' +
                  '  startingSortValue: ["index-key1", 3],\n' +
                  '  endingSortValue: ["index-key1", 2],\n' +
                  '})) {\n' +
                  '  console.log(key, value, sortValue) // key2 value2 ["index-key1", 3]\n' +
                  '                                     // key3 value3 ["index-key1", 2]\n' +
                  '}',
                position: {
                  start: { line: 55, column: 1, offset: 2972 },
                  end: { line: 95, column: 4, offset: 4620 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 95, column: 4, offset: 4620 }
            }
          }
        }
      },
      {
        name: 'delete',
        docs: '```specscript\n' +
          'delete(key string) -> didDelete Promise<boolean>\n' +
          '```\n' +
          '\n' +
          'Deletes an item by key from the disk sorted hash table on the database server.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `key` - `string` - the key to delete.\n' +
          '\n' +
          'Return:\n' +
          '  * `didDelete` - `boolean` - a promise of whether the key and corresponding value were deleted.\n' +
          '\n' +
          '```javascript\n' +
          'const didDelete = await ht.delete("my-key")\n' +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'delete',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 7, offset: 6 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'delete(key string) -> didDelete Promise<boolean>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 66 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Deletes an item by key from the disk sorted hash table on the database server.',
                    position: {
                      start: { line: 5, column: 1, offset: 68 },
                      end: { line: 5, column: 79, offset: 146 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 68 },
                  end: { line: 5, column: 79, offset: 146 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 148 },
                      end: { line: 7, column: 11, offset: 158 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 148 },
                  end: { line: 7, column: 11, offset: 158 }
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
                            type: 'inlineCode',
                            value: 'key',
                            position: {
                              start: { line: 8, column: 5, offset: 163 },
                              end: { line: 8, column: 10, offset: 168 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 8, column: 10, offset: 168 },
                              end: { line: 8, column: 13, offset: 171 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 8, column: 13, offset: 171 },
                              end: { line: 8, column: 21, offset: 179 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the key to delete.',
                            position: {
                              start: { line: 8, column: 21, offset: 179 },
                              end: { line: 8, column: 42, offset: 200 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 163 },
                          end: { line: 8, column: 42, offset: 200 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 161 },
                      end: { line: 8, column: 42, offset: 200 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 161 },
                  end: { line: 8, column: 42, offset: 200 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 202 },
                      end: { line: 10, column: 8, offset: 209 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 202 },
                  end: { line: 10, column: 8, offset: 209 }
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
                            type: 'inlineCode',
                            value: 'didDelete',
                            position: {
                              start: { line: 11, column: 5, offset: 214 },
                              end: { line: 11, column: 16, offset: 225 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 11, column: 16, offset: 225 },
                              end: { line: 11, column: 19, offset: 228 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'boolean',
                            position: {
                              start: { line: 11, column: 19, offset: 228 },
                              end: { line: 11, column: 28, offset: 237 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a promise of whether the key and corresponding value were deleted.',
                            position: {
                              start: { line: 11, column: 28, offset: 237 },
                              end: { line: 11, column: 97, offset: 306 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 214 },
                          end: { line: 11, column: 97, offset: 306 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 212 },
                      end: { line: 11, column: 97, offset: 306 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 212 },
                  end: { line: 11, column: 97, offset: 306 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const didDelete = await ht.delete("my-key")',
                position: {
                  start: { line: 13, column: 1, offset: 308 },
                  end: { line: 15, column: 4, offset: 369 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 369 }
            }
          }
        }
      },
      {
        name: 'count',
        docs: '```specscript\n' +
          'count() -> Promise<number>\n' +
          '```\n' +
          '\n' +
          'Returns the number of items in the disk sorted hash table on the database server.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none)\n' +
          '\n' +
          'Return:\n' +
          '  * `Promise<number>` - a promise of the number of items in the disk sorted hash table on the database server.\n' +
          '\n' +
          '```javascript\n' +
          'const count = await ht.count()\n' +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'count',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 6, offset: 5 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'count() -> Promise<number>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 44 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns the number of items in the disk sorted hash table on the database server.',
                    position: {
                      start: { line: 5, column: 1, offset: 46 },
                      end: { line: 5, column: 82, offset: 127 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 46 },
                  end: { line: 5, column: 82, offset: 127 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 129 },
                      end: { line: 7, column: 11, offset: 139 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 129 },
                  end: { line: 7, column: 11, offset: 139 }
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
                            value: '(none)',
                            position: {
                              start: { line: 8, column: 5, offset: 144 },
                              end: { line: 8, column: 11, offset: 150 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 144 },
                          end: { line: 8, column: 11, offset: 150 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 142 },
                      end: { line: 8, column: 11, offset: 150 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 142 },
                  end: { line: 8, column: 11, offset: 150 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 152 },
                      end: { line: 10, column: 8, offset: 159 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 152 },
                  end: { line: 10, column: 8, offset: 159 }
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
                            type: 'inlineCode',
                            value: 'Promise<number>',
                            position: {
                              start: { line: 11, column: 5, offset: 164 },
                              end: { line: 11, column: 22, offset: 181 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a promise of the number of items in the disk sorted hash table on the database server.',
                            position: {
                              start: { line: 11, column: 22, offset: 181 },
                              end: { line: 11, column: 111, offset: 270 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 164 },
                          end: { line: 11, column: 111, offset: 270 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 162 },
                      end: { line: 11, column: 111, offset: 270 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 162 },
                  end: { line: 11, column: 111, offset: 270 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const count = await ht.count()',
                position: {
                  start: { line: 13, column: 1, offset: 272 },
                  end: { line: 15, column: 4, offset: 320 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 320 }
            }
          }
        }
      }
    ],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/DiskSortedHashTableClient.js'
  },
  {
    name: 'TextEntriesStream',
    docs: '```coffeescript [specscript]\n' +
      'module EventEmitter "./specscript/EventEmitter.ss"\n' +
      '\n' +
      'TextEntriesStream(\n' +
      '  readable stream.Readable,\n' +
      '  entryLength number,\n' +
      '  delimiter string\n' +
      ') -> textEntriesStream EventEmitter\n' +
      '\n' +
      'textEntriesStream.on("entry", (entry Array<string>, keyEncoding string) -> ())\n' +
      '\n' +
      'textEntriesStream.on("end", () -> ())\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'TextEntriesStream',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 18, offset: 17 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 18, offset: 17 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 18, offset: 17 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'module EventEmitter "./specscript/EventEmitter.ss"\n' +
              '\n' +
              'TextEntriesStream(\n' +
              '  readable stream.Readable,\n' +
              '  entryLength number,\n' +
              '  delimiter string\n' +
              ') -> textEntriesStream EventEmitter\n' +
              '\n' +
              'textEntriesStream.on("entry", (entry Array<string>, keyEncoding string) -> ())\n' +
              '\n' +
              'textEntriesStream.on("end", () -> ())',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 13, column: 4, offset: 327 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 13, column: 4, offset: 327 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/TextEntriesStream.js'
  },
  {
    name: 'TextStream',
    docs: '```coffeescript [specscript]\n' +
      "module stream 'https://nodejs.org/docs/latest-v26.x/api/stream.html'\n" +
      "module events 'https://nodejs.org/docs/latest-v26.x/api/events.html'\n" +
      '\n' +
      'TextStream(readable stream.Readable, delimiter string) -> textStream events.EventEmitter\n' +
      '\n' +
      'textStream.on("data", (text string, encoding string) -> ())\n' +
      '\n' +
      'textStream.on("end", () -> ())\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'TextStream',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: "module stream 'https://nodejs.org/docs/latest-v26.x/api/stream.html'\n" +
              "module events 'https://nodejs.org/docs/latest-v26.x/api/events.html'\n" +
              '\n' +
              'TextStream(readable stream.Readable, delimiter string) -> textStream events.EventEmitter\n' +
              '\n' +
              'textStream.on("data", (text string, encoding string) -> ())\n' +
              '\n' +
              'textStream.on("end", () -> ())',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 10, column: 4, offset: 353 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 10, column: 4, offset: 353 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/TextStream.js'
  },
  {
    name: 'buffersToEntry',
    docs: '```specscript\n' +
      'buffersToEntry(\n' +
      '  buffers Array<Buffer>,\n' +
      '  entryLength number,\n' +
      '  encoding string,\n' +
      '  valueType string,\n' +
      ') -> Array<string, Buffer>\n' +
      '\n' +
      'buffersToEntry(\n' +
      '  buffers Array<Buffer>,\n' +
      '  entryLength number,\n' +
      '  encoding string,\n' +
      '  valueType string,\n' +
      '  sortValueType "string"|"number"|Array<"string"|"number">\n' +
      ') -> Array<string, Buffer>\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'buffersToEntry',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 15, offset: 14 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 15, offset: 14 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'specscript',
            meta: null,
            value: 'buffersToEntry(\n' +
              '  buffers Array<Buffer>,\n' +
              '  entryLength number,\n' +
              '  encoding string,\n' +
              '  valueType string,\n' +
              ') -> Array<string, Buffer>\n' +
              '\n' +
              'buffersToEntry(\n' +
              '  buffers Array<Buffer>,\n' +
              '  entryLength number,\n' +
              '  encoding string,\n' +
              '  valueType string,\n' +
              '  sortValueType "string"|"number"|Array<"string"|"number">\n' +
              ') -> Array<string, Buffer>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 16, column: 4, offset: 335 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 16, column: 4, offset: 335 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/buffersToEntry.js'
  },
  {
    name: 'databaseHandler',
    docs: '```specscript\n' +
      'module DiskHashTable "https://presidium.services/docs/DiskHashTable"\n' +
      'module HTTP "https://presidium.services/docs/HTTP"\n' +
      '\n' +
      'databaseHandler(HTTP.Request, HTTP.Response) -> ()\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'databaseHandler',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 16, offset: 15 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 16, offset: 15 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 16, offset: 15 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'specscript',
            meta: null,
            value: 'module DiskHashTable "https://presidium.services/docs/DiskHashTable"\n' +
              'module HTTP "https://presidium.services/docs/HTTP"\n' +
              '\n' +
              'databaseHandler(HTTP.Request, HTTP.Response) -> ()',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 189 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 189 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/databaseHandler.js'
  },
  {
    name: 'errorHandler',
    docs: '```coffeescript [specscript]\n' +
      'errorHandler(\n' +
      '  error Error,\n' +
      '  request http.ClientRequest,\n' +
      '  response http.ServerResponse\n' +
      ') -> undefined\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'errorHandler',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 13, offset: 12 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 13, offset: 12 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'errorHandler(\n' +
              '  error Error,\n' +
              '  request http.ClientRequest,\n' +
              '  response http.ServerResponse\n' +
              ') -> undefined',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 137 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 137 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/errorHandler.js'
  },
  {
    name: 'exists',
    docs: '```specscript\nexists(value any) -> boolean\n```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'exists',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'specscript',
            meta: null,
            value: 'exists(value any) -> boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 46 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 46 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/exists.js'
  },
  {
    name: 'handleServerResponse',
    docs: '```specscript\n' +
      "module http 'https://nodejs.org/docs/latest-v26.x/api/http.html'\n" +
      "module events 'https://nodejs.org/docs/latest-v26.x/api/events.html'\n" +
      '\n' +
      'handleServerResponse(response http.ServerResponse, options {\n' +
      '  textStream: boolean,\n' +
      '  binaryStream: boolean,\n' +
      '  textEntriesStream: boolean,\n' +
      '  binaryEntriesStream: boolean,\n' +
      '  delimiter: string,\n' +
      '  entryLength: number,\n' +
      '}) -> data object|events.EventEmitter\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'handleServerResponse',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 21, offset: 20 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 21, offset: 20 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 21, offset: 20 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'specscript',
            meta: null,
            value: "module http 'https://nodejs.org/docs/latest-v26.x/api/http.html'\n" +
              "module events 'https://nodejs.org/docs/latest-v26.x/api/events.html'\n" +
              '\n' +
              'handleServerResponse(response http.ServerResponse, options {\n' +
              '  textStream: boolean,\n' +
              '  binaryStream: boolean,\n' +
              '  textEntriesStream: boolean,\n' +
              '  binaryEntriesStream: boolean,\n' +
              '  delimiter: string,\n' +
              '  entryLength: number,\n' +
              '}) -> data object|events.EventEmitter',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 13, column: 4, offset: 405 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 13, column: 4, offset: 405 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/handleServerResponse.js'
  },
  {
    name: 'hash',
    docs: '```specscript\n' +
      'hash(tableName string, key string, length number) -> index number\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'hash',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 5, offset: 4 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 5, offset: 4 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'specscript',
            meta: null,
            value: 'hash(tableName string, key string, length number) -> index number',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 83 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 83 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/hash.js'
  },
  {
    name: 'healthCheckHandler',
    docs: '```specscript\n' +
      'module HTTP "https://presidium.services/docs/HTTP"\n' +
      '\n' +
      'healthCheckHandler(request HTTP.Request, response HTTP.Response) -> ()\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'healthCheckHandler',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 19, offset: 18 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 19, offset: 18 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 19, offset: 18 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'specscript',
            meta: null,
            value: 'module HTTP "https://presidium.services/docs/HTTP"\n' +
              '\n' +
              'healthCheckHandler(request HTTP.Request, response HTTP.Response) -> ()',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 140 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 140 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/healthCheckHandler.js'
  },
  {
    name: 'getClient',
    docs: '```specscript\n' +
      'module HTTP "https://presidium.services/docs/HTTP"\n' +
      '\n' +
      'getClient(serverIp string) -> client HTTP\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'getClient',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 10, offset: 9 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 10, offset: 9 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'specscript',
            meta: null,
            value: 'module HTTP "https://presidium.services/docs/HTTP"\n' +
              '\n' +
              'getClient(serverIp string) -> client HTTP',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 111 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 111 }
        }
      }
    },
    methods: [
      {
        name: 'loadBalancerHandler',
        docs: '```specscript\n' +
          'module HTTP "https://presidium.services/docs/HTTP"\n' +
          '\n' +
          'loadBalancerHandler(HTTP.Request, HTTP.Response) -> ()\n' +
          '```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'loadBalancerHandler',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 20, offset: 19 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 20, offset: 19 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 20, offset: 19 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'specscript',
                meta: null,
                value: 'module HTTP "https://presidium.services/docs/HTTP"\n' +
                  '\n' +
                  'loadBalancerHandler(HTTP.Request, HTTP.Response) -> ()',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 5, column: 4, offset: 124 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 124 }
            }
          }
        }
      }
    ],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/loadBalancerHandler.js'
  },
  {
    name: 'notFoundHandler',
    docs: '```specscript\n' +
      'module HTTP "https://presidium.services/docs/HTTP"\n' +
      '\n' +
      'notFoundHandler(request HTTP.Request, response HTTP.Response) -> ()\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'notFoundHandler',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 16, offset: 15 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 16, offset: 15 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 16, offset: 15 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'specscript',
            meta: null,
            value: 'module HTTP "https://presidium.services/docs/HTTP"\n' +
              '\n' +
              'notFoundHandler(request HTTP.Request, response HTTP.Response) -> ()',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 137 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 137 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/notFoundHandler.js'
  },
  {
    name: 'parseString',
    docs: '```specscript\nparseString(s string) -> number|string\n```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'parseString',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 12, offset: 11 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 12, offset: 11 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 12, offset: 11 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'specscript',
            meta: null,
            value: 'parseString(s string) -> number|string',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 56 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 56 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/parseString.js'
  },
  {
    name: 'toString',
    docs: '```specscript\ntoString(value) -> string\n```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'toString',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 9, offset: 8 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 9, offset: 8 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'specscript',
            meta: null,
            value: 'toString(value) -> string',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 43 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 43 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/toString.js'
  }
]