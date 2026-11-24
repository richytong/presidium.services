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
          'Registers and initializes a [DiskHashTable](/docs/DiskHashTable) instance on the database server.\n' +
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
                    value: 'Registers and initializes a ',
                    position: {
                      start: { line: 10, column: 1, offset: 176 },
                      end: { line: 10, column: 29, offset: 204 }
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
                          start: { line: 10, column: 30, offset: 205 },
                          end: { line: 10, column: 43, offset: 218 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 10, column: 29, offset: 204 },
                      end: { line: 10, column: 65, offset: 240 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' instance on the database server.',
                    position: {
                      start: { line: 10, column: 65, offset: 240 },
                      end: { line: 10, column: 98, offset: 273 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 176 },
                  end: { line: 10, column: 98, offset: 273 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 12, column: 1, offset: 275 },
                      end: { line: 12, column: 11, offset: 285 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 1, offset: 275 },
                  end: { line: 12, column: 11, offset: 285 }
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
                              start: { line: 13, column: 5, offset: 290 },
                              end: { line: 13, column: 16, offset: 301 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 13, column: 16, offset: 301 },
                              end: { line: 13, column: 19, offset: 304 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 13, column: 19, offset: 304 },
                              end: { line: 13, column: 27, offset: 312 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the name of the registered DiskHashTable instance.',
                            position: {
                              start: { line: 13, column: 27, offset: 312 },
                              end: { line: 13, column: 80, offset: 365 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 13, column: 5, offset: 290 },
                          end: { line: 13, column: 80, offset: 365 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 13, column: 3, offset: 288 },
                      end: { line: 13, column: 80, offset: 365 }
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
                              start: { line: 14, column: 5, offset: 370 },
                              end: { line: 14, column: 13, offset: 378 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 14, column: 5, offset: 370 },
                          end: { line: 14, column: 13, offset: 378 }
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
                                        offset: 385
                                      },
                                      end: {
                                        line: 15,
                                        column: 22,
                                        offset: 400
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
                                        offset: 400
                                      },
                                      end: {
                                        line: 15,
                                        column: 25,
                                        offset: 403
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
                                        offset: 403
                                      },
                                      end: {
                                        line: 15,
                                        column: 33,
                                        offset: 411
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
                                        offset: 411
                                      },
                                      end: {
                                        line: 15,
                                        column: 110,
                                        offset: 488
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
                                        offset: 488
                                      },
                                      end: {
                                        line: 15,
                                        column: 151,
                                        offset: 529
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
                                        offset: 529
                                      },
                                      end: {
                                        line: 15,
                                        column: 170,
                                        offset: 548
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 15, column: 7, offset: 385 },
                                  end: {
                                    line: 15,
                                    column: 170,
                                    offset: 548
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 15, column: 5, offset: 383 },
                              end: { line: 15, column: 170, offset: 548 }
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
                                        offset: 555
                                      },
                                      end: {
                                        line: 16,
                                        column: 17,
                                        offset: 565
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
                                        offset: 565
                                      },
                                      end: {
                                        line: 16,
                                        column: 20,
                                        offset: 568
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
                                        offset: 568
                                      },
                                      end: {
                                        line: 16,
                                        column: 28,
                                        offset: 576
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
                                        offset: 576
                                      },
                                      end: {
                                        line: 16,
                                        column: 162,
                                        offset: 710
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 16, column: 7, offset: 555 },
                                  end: {
                                    line: 16,
                                    column: 162,
                                    offset: 710
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 16, column: 5, offset: 553 },
                              end: { line: 16, column: 162, offset: 710 }
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
                                        offset: 717
                                      },
                                      end: {
                                        line: 17,
                                        column: 20,
                                        offset: 730
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
                                        offset: 730
                                      },
                                      end: {
                                        line: 17,
                                        column: 23,
                                        offset: 733
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
                                        offset: 733
                                      },
                                      end: {
                                        line: 17,
                                        column: 31,
                                        offset: 741
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
                                        offset: 741
                                      },
                                      end: {
                                        line: 17,
                                        column: 179,
                                        offset: 889
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 17, column: 7, offset: 717 },
                                  end: {
                                    line: 17,
                                    column: 179,
                                    offset: 889
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 17, column: 5, offset: 715 },
                              end: { line: 17, column: 179, offset: 889 }
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
                                        offset: 896
                                      },
                                      end: {
                                        line: 18,
                                        column: 21,
                                        offset: 910
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
                                        offset: 910
                                      },
                                      end: {
                                        line: 18,
                                        column: 24,
                                        offset: 913
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
                                        offset: 913
                                      },
                                      end: {
                                        line: 18,
                                        column: 32,
                                        offset: 921
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
                                        offset: 921
                                      },
                                      end: {
                                        line: 18,
                                        column: 153,
                                        offset: 1042
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 18, column: 7, offset: 896 },
                                  end: {
                                    line: 18,
                                    column: 153,
                                    offset: 1042
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 18, column: 5, offset: 894 },
                              end: { line: 18, column: 153, offset: 1042 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 15, column: 5, offset: 383 },
                          end: { line: 18, column: 153, offset: 1042 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 14, column: 3, offset: 368 },
                      end: { line: 18, column: 153, offset: 1042 }
                    }
                  }
                ],
                position: {
                  start: { line: 13, column: 3, offset: 288 },
                  end: { line: 18, column: 153, offset: 1042 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 20, column: 1, offset: 1044 },
                      end: { line: 20, column: 8, offset: 1051 }
                    }
                  }
                ],
                position: {
                  start: { line: 20, column: 1, offset: 1044 },
                  end: { line: 20, column: 8, offset: 1051 }
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
                              start: { line: 21, column: 5, offset: 1056 },
                              end: { line: 21, column: 19, offset: 1070 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 5, offset: 1056 },
                          end: { line: 21, column: 19, offset: 1070 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 21, column: 3, offset: 1054 },
                      end: { line: 21, column: 19, offset: 1070 }
                    }
                  }
                ],
                position: {
                  start: { line: 21, column: 3, offset: 1054 },
                  end: { line: 21, column: 19, offset: 1070 }
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
                  start: { line: 23, column: 1, offset: 1072 },
                  end: { line: 28, column: 4, offset: 1187 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 28, column: 4, offset: 1187 }
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
          'Registers and initializes a [DiskSortedHashTable](/docs/DiskSortedHashTable) instance on the database server.\n' +
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
                    value: 'Registers and initializes a ',
                    position: {
                      start: { line: 12, column: 1, offset: 261 },
                      end: { line: 12, column: 29, offset: 289 }
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
                          start: { line: 12, column: 30, offset: 290 },
                          end: { line: 12, column: 49, offset: 309 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 29, offset: 289 },
                      end: { line: 12, column: 77, offset: 337 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' instance on the database server.',
                    position: {
                      start: { line: 12, column: 77, offset: 337 },
                      end: { line: 12, column: 110, offset: 370 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 1, offset: 261 },
                  end: { line: 12, column: 110, offset: 370 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 14, column: 1, offset: 372 },
                      end: { line: 14, column: 11, offset: 382 }
                    }
                  }
                ],
                position: {
                  start: { line: 14, column: 1, offset: 372 },
                  end: { line: 14, column: 11, offset: 382 }
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
                              start: { line: 15, column: 5, offset: 387 },
                              end: { line: 15, column: 16, offset: 398 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 15, column: 16, offset: 398 },
                              end: { line: 15, column: 19, offset: 401 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 15, column: 19, offset: 401 },
                              end: { line: 15, column: 27, offset: 409 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the name of the registered DiskSortedHashTable instance.',
                            position: {
                              start: { line: 15, column: 27, offset: 409 },
                              end: { line: 15, column: 86, offset: 468 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 15, column: 5, offset: 387 },
                          end: { line: 15, column: 86, offset: 468 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 15, column: 3, offset: 385 },
                      end: { line: 15, column: 86, offset: 468 }
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
                              start: { line: 16, column: 5, offset: 473 },
                              end: { line: 16, column: 13, offset: 481 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 16, column: 5, offset: 473 },
                          end: { line: 16, column: 13, offset: 481 }
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
                                        offset: 488
                                      },
                                      end: {
                                        line: 17,
                                        column: 22,
                                        offset: 503
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
                                        offset: 503
                                      },
                                      end: {
                                        line: 17,
                                        column: 25,
                                        offset: 506
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
                                        offset: 506
                                      },
                                      end: {
                                        line: 17,
                                        column: 33,
                                        offset: 514
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
                                        offset: 514
                                      },
                                      end: {
                                        line: 17,
                                        column: 117,
                                        offset: 598
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
                                        offset: 598
                                      },
                                      end: {
                                        line: 17,
                                        column: 158,
                                        offset: 639
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
                                        offset: 639
                                      },
                                      end: {
                                        line: 17,
                                        column: 177,
                                        offset: 658
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 17, column: 7, offset: 488 },
                                  end: {
                                    line: 17,
                                    column: 177,
                                    offset: 658
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 17, column: 5, offset: 486 },
                              end: { line: 17, column: 177, offset: 658 }
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
                                        offset: 665
                                      },
                                      end: {
                                        line: 18,
                                        column: 17,
                                        offset: 675
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
                                        offset: 675
                                      },
                                      end: {
                                        line: 18,
                                        column: 20,
                                        offset: 678
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
                                        offset: 678
                                      },
                                      end: {
                                        line: 18,
                                        column: 28,
                                        offset: 686
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
                                        offset: 686
                                      },
                                      end: {
                                        line: 18,
                                        column: 173,
                                        offset: 831
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 18, column: 7, offset: 665 },
                                  end: {
                                    line: 18,
                                    column: 173,
                                    offset: 831
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 18, column: 5, offset: 663 },
                              end: { line: 18, column: 173, offset: 831 }
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
                                        offset: 838
                                      },
                                      end: {
                                        line: 19,
                                        column: 22,
                                        offset: 853
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
                                        offset: 853
                                      },
                                      end: {
                                        line: 19,
                                        column: 25,
                                        offset: 856
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
                                        offset: 856
                                      },
                                      end: {
                                        line: 19,
                                        column: 69,
                                        offset: 900
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
                                        offset: 900
                                      },
                                      end: {
                                        line: 19,
                                        column: 280,
                                        offset: 1111
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 19, column: 7, offset: 838 },
                                  end: {
                                    line: 19,
                                    column: 280,
                                    offset: 1111
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 19, column: 5, offset: 836 },
                              end: { line: 19, column: 280, offset: 1111 }
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
                                        offset: 1118
                                      },
                                      end: {
                                        line: 20,
                                        column: 20,
                                        offset: 1131
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
                                        offset: 1131
                                      },
                                      end: {
                                        line: 20,
                                        column: 23,
                                        offset: 1134
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
                                        offset: 1134
                                      },
                                      end: {
                                        line: 20,
                                        column: 31,
                                        offset: 1142
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
                                        offset: 1142
                                      },
                                      end: {
                                        line: 20,
                                        column: 186,
                                        offset: 1297
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 20, column: 7, offset: 1118 },
                                  end: {
                                    line: 20,
                                    column: 186,
                                    offset: 1297
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 20, column: 5, offset: 1116 },
                              end: { line: 20, column: 186, offset: 1297 }
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
                                        offset: 1304
                                      },
                                      end: {
                                        line: 21,
                                        column: 21,
                                        offset: 1318
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
                                        offset: 1318
                                      },
                                      end: {
                                        line: 21,
                                        column: 24,
                                        offset: 1321
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
                                        offset: 1321
                                      },
                                      end: {
                                        line: 21,
                                        column: 32,
                                        offset: 1329
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
                                        offset: 1329
                                      },
                                      end: {
                                        line: 21,
                                        column: 160,
                                        offset: 1457
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 21, column: 7, offset: 1304 },
                                  end: {
                                    line: 21,
                                    column: 160,
                                    offset: 1457
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 5, offset: 1302 },
                              end: { line: 21, column: 160, offset: 1457 }
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
                                        offset: 1464
                                      },
                                      end: {
                                        line: 22,
                                        column: 15,
                                        offset: 1472
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
                                        offset: 1472
                                      },
                                      end: {
                                        line: 22,
                                        column: 18,
                                        offset: 1475
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
                                        offset: 1475
                                      },
                                      end: {
                                        line: 22,
                                        column: 26,
                                        offset: 1483
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
                                        offset: 1483
                                      },
                                      end: {
                                        line: 22,
                                        column: 181,
                                        offset: 1638
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 22, column: 7, offset: 1464 },
                                  end: {
                                    line: 22,
                                    column: 181,
                                    offset: 1638
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
                                                offset: 1647
                                              },
                                              end: {
                                                line: 23,
                                                column: 50,
                                                offset: 1688
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
                                                offset: 1688
                                              },
                                              end: {
                                                line: 23,
                                                column: 62,
                                                offset: 1700
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 23,
                                            column: 9,
                                            offset: 1647
                                          },
                                          end: {
                                            line: 23,
                                            column: 62,
                                            offset: 1700
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 7,
                                        offset: 1645
                                      },
                                      end: {
                                        line: 23,
                                        column: 62,
                                        offset: 1700
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
                                                offset: 1709
                                              },
                                              end: {
                                                line: 24,
                                                column: 50,
                                                offset: 1750
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
                                                offset: 1750
                                              },
                                              end: {
                                                line: 24,
                                                column: 68,
                                                offset: 1768
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 24,
                                            column: 9,
                                            offset: 1709
                                          },
                                          end: {
                                            line: 24,
                                            column: 68,
                                            offset: 1768
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 7,
                                        offset: 1707
                                      },
                                      end: {
                                        line: 24,
                                        column: 68,
                                        offset: 1768
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
                                                offset: 1777
                                              },
                                              end: {
                                                line: 25,
                                                column: 53,
                                                offset: 1821
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
                                                offset: 1821
                                              },
                                              end: {
                                                line: 25,
                                                column: 61,
                                                offset: 1829
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 25,
                                            column: 9,
                                            offset: 1777
                                          },
                                          end: {
                                            line: 25,
                                            column: 61,
                                            offset: 1829
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 25,
                                        column: 7,
                                        offset: 1775
                                      },
                                      end: {
                                        line: 25,
                                        column: 61,
                                        offset: 1829
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
                                                offset: 1838
                                              },
                                              end: {
                                                line: 26,
                                                column: 53,
                                                offset: 1882
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
                                                offset: 1882
                                              },
                                              end: {
                                                line: 26,
                                                column: 65,
                                                offset: 1894
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 26,
                                            column: 9,
                                            offset: 1838
                                          },
                                          end: {
                                            line: 26,
                                            column: 65,
                                            offset: 1894
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 26,
                                        column: 7,
                                        offset: 1836
                                      },
                                      end: {
                                        line: 26,
                                        column: 65,
                                        offset: 1894
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 23, column: 7, offset: 1645 },
                                  end: {
                                    line: 26,
                                    column: 65,
                                    offset: 1894
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 22, column: 5, offset: 1462 },
                              end: { line: 26, column: 65, offset: 1894 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 17, column: 5, offset: 486 },
                          end: { line: 26, column: 65, offset: 1894 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 16, column: 3, offset: 471 },
                      end: { line: 26, column: 65, offset: 1894 }
                    }
                  }
                ],
                position: {
                  start: { line: 15, column: 3, offset: 385 },
                  end: { line: 26, column: 65, offset: 1894 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 28, column: 1, offset: 1896 },
                      end: { line: 28, column: 8, offset: 1903 }
                    }
                  }
                ],
                position: {
                  start: { line: 28, column: 1, offset: 1896 },
                  end: { line: 28, column: 8, offset: 1903 }
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
                              start: { line: 29, column: 5, offset: 1908 },
                              end: { line: 29, column: 19, offset: 1922 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 29, column: 5, offset: 1908 },
                          end: { line: 29, column: 19, offset: 1922 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 29, column: 3, offset: 1906 },
                      end: { line: 29, column: 19, offset: 1922 }
                    }
                  }
                ],
                position: {
                  start: { line: 29, column: 3, offset: 1906 },
                  end: { line: 29, column: 19, offset: 1922 }
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
                  start: { line: 31, column: 1, offset: 1924 },
                  end: { line: 36, column: 4, offset: 2039 }
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
                      start: { line: 38, column: 4, offset: 2044 },
                      end: { line: 38, column: 48, offset: 2088 }
                    }
                  }
                ],
                position: {
                  start: { line: 38, column: 1, offset: 2041 },
                  end: { line: 38, column: 48, offset: 2088 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'The value of ',
                    position: {
                      start: { line: 39, column: 1, offset: 2089 },
                      end: { line: 39, column: 14, offset: 2102 }
                    }
                  },
                  {
                    type: 'inlineCode',
                    value: 'degree',
                    position: {
                      start: { line: 39, column: 14, offset: 2102 },
                      end: { line: 39, column: 22, offset: 2110 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' determines the structure of the internal b-tree of the disk sorted hash table. A higher value for ',
                    position: {
                      start: { line: 39, column: 22, offset: 2110 },
                      end: { line: 39, column: 121, offset: 2209 }
                    }
                  },
                  {
                    type: 'inlineCode',
                    value: 'degree',
                    position: {
                      start: { line: 39, column: 121, offset: 2209 },
                      end: { line: 39, column: 129, offset: 2217 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' results in a shorter b-tree and more items per b-tree node, while a lower value results in a taller b-tree and fewer items per b-tree node. The default value of 2 is good for any number of items.',
                    position: {
                      start: { line: 39, column: 129, offset: 2217 },
                      end: { line: 39, column: 325, offset: 2413 }
                    }
                  }
                ],
                position: {
                  start: { line: 39, column: 1, offset: 2089 },
                  end: { line: 39, column: 325, offset: 2413 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 39, column: 325, offset: 2413 }
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
          'Registers and initializes a [DiskHashTable](/docs/DiskHashTable) instance on the database server.\n' +
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
                    value: 'Registers and initializes a ',
                    position: {
                      start: { line: 5, column: 1, offset: 43 },
                      end: { line: 5, column: 29, offset: 71 }
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
                          start: { line: 5, column: 30, offset: 72 },
                          end: { line: 5, column: 43, offset: 85 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 5, column: 29, offset: 71 },
                      end: { line: 5, column: 65, offset: 107 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' instance on the database server.',
                    position: {
                      start: { line: 5, column: 65, offset: 107 },
                      end: { line: 5, column: 98, offset: 140 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 43 },
                  end: { line: 5, column: 98, offset: 140 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 142 },
                      end: { line: 7, column: 11, offset: 152 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 142 },
                  end: { line: 7, column: 11, offset: 152 }
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
                              start: { line: 8, column: 5, offset: 157 },
                              end: { line: 8, column: 11, offset: 163 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 157 },
                          end: { line: 8, column: 11, offset: 163 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 155 },
                      end: { line: 8, column: 11, offset: 163 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 155 },
                  end: { line: 8, column: 11, offset: 163 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 165 },
                      end: { line: 10, column: 8, offset: 172 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 165 },
                  end: { line: 10, column: 8, offset: 172 }
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
                              start: { line: 11, column: 5, offset: 177 },
                              end: { line: 11, column: 19, offset: 191 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 177 },
                          end: { line: 11, column: 19, offset: 191 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 175 },
                      end: { line: 11, column: 19, offset: 191 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 175 },
                  end: { line: 11, column: 19, offset: 191 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await ht.register()',
                position: {
                  start: { line: 13, column: 1, offset: 193 },
                  end: { line: 15, column: 4, offset: 230 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 230 }
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
          'count() -> Promise<number>\n' +
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
                    value: 'Returns the number of items in the disk hash table on the database server.',
                    position: {
                      start: { line: 5, column: 1, offset: 46 },
                      end: { line: 5, column: 75, offset: 120 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 46 },
                  end: { line: 5, column: 75, offset: 120 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 122 },
                      end: { line: 7, column: 11, offset: 132 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 122 },
                  end: { line: 7, column: 11, offset: 132 }
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
                              start: { line: 8, column: 5, offset: 137 },
                              end: { line: 8, column: 11, offset: 143 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 137 },
                          end: { line: 8, column: 11, offset: 143 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 135 },
                      end: { line: 8, column: 11, offset: 143 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 135 },
                  end: { line: 8, column: 11, offset: 143 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 145 },
                      end: { line: 10, column: 8, offset: 152 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 145 },
                  end: { line: 10, column: 8, offset: 152 }
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
                              start: { line: 11, column: 5, offset: 157 },
                              end: { line: 11, column: 22, offset: 174 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a promise of the number of items in the disk hash table on the database server.',
                            position: {
                              start: { line: 11, column: 22, offset: 174 },
                              end: { line: 11, column: 104, offset: 256 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 157 },
                          end: { line: 11, column: 104, offset: 256 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 155 },
                      end: { line: 11, column: 104, offset: 256 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 155 },
                  end: { line: 11, column: 104, offset: 256 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const count = ht.count()',
                position: {
                  start: { line: 13, column: 1, offset: 258 },
                  end: { line: 15, column: 4, offset: 300 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 300 }
            }
          }
        }
      },
      {
        name: 'iterator',
        docs: '```specscript\n' +
          'iterator() -> values AsyncIterator<string>\n' +
          '\n' +
          'iterator(options {\n' +
          '  valueType: "string"|"binary",\n' +
          '}) -> values AsyncIterator<string|Buffer>\n' +
          '```\n' +
          '\n' +
          'Returns an async iterator of the values of all items in the disk hash table on the database server. Item values are yielded in reverse insertion order.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the values of all items in the disk hash table on the database server.\n' +
          '  * `options`\n' +
          "    * `valueType` - `'string'|'binary'` - the type of value that the async iterator yields. Defaults to `'string'`.\n" +
          "      * `'string'` - async iterator yields `string` values.\n" +
          "      * `'binary'` - async iterator yields `Buffer` values.\n" +
          '\n' +
          'Return:\n' +
          '  * `values` - `AsyncIterator<string|Buffer>` - an async iterator of the values of all items in the disk hash table on the database server sorted by reverse insertion order.\n' +
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
                value: 'iterator() -> values AsyncIterator<string>\n' +
                  '\n' +
                  'iterator(options {\n' +
                  '  valueType: "string"|"binary",\n' +
                  '}) -> values AsyncIterator<string|Buffer>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 7, column: 4, offset: 154 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns an async iterator of the values of all items in the disk hash table on the database server. Item values are yielded in reverse insertion order.',
                    position: {
                      start: { line: 9, column: 1, offset: 156 },
                      end: { line: 9, column: 152, offset: 307 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 1, offset: 156 },
                  end: { line: 9, column: 152, offset: 307 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 11, column: 1, offset: 309 },
                      end: { line: 11, column: 11, offset: 319 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 309 },
                  end: { line: 11, column: 11, offset: 319 }
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
                              start: { line: 12, column: 5, offset: 324 },
                              end: { line: 12, column: 94, offset: 413 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 324 },
                          end: { line: 12, column: 94, offset: 413 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 322 },
                      end: { line: 12, column: 94, offset: 413 }
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
                              start: { line: 13, column: 5, offset: 418 },
                              end: { line: 13, column: 14, offset: 427 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 13, column: 5, offset: 418 },
                          end: { line: 13, column: 14, offset: 427 }
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
                                        offset: 434
                                      },
                                      end: {
                                        line: 14,
                                        column: 18,
                                        offset: 445
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
                                        offset: 445
                                      },
                                      end: {
                                        line: 14,
                                        column: 21,
                                        offset: 448
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
                                        offset: 448
                                      },
                                      end: {
                                        line: 14,
                                        column: 40,
                                        offset: 467
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the type of value that the async iterator yields. Defaults to ',
                                    position: {
                                      start: {
                                        line: 14,
                                        column: 40,
                                        offset: 467
                                      },
                                      end: {
                                        line: 14,
                                        column: 105,
                                        offset: 532
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: "'string'",
                                    position: {
                                      start: {
                                        line: 14,
                                        column: 105,
                                        offset: 532
                                      },
                                      end: {
                                        line: 14,
                                        column: 115,
                                        offset: 542
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: '.',
                                    position: {
                                      start: {
                                        line: 14,
                                        column: 115,
                                        offset: 542
                                      },
                                      end: {
                                        line: 14,
                                        column: 116,
                                        offset: 543
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 14, column: 7, offset: 434 },
                                  end: {
                                    line: 14,
                                    column: 116,
                                    offset: 543
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
                                                offset: 552
                                              },
                                              end: {
                                                line: 15,
                                                column: 19,
                                                offset: 562
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - async iterator yields ',
                                            position: {
                                              start: {
                                                line: 15,
                                                column: 19,
                                                offset: 562
                                              },
                                              end: {
                                                line: 15,
                                                column: 44,
                                                offset: 587
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'string',
                                            position: {
                                              start: {
                                                line: 15,
                                                column: 44,
                                                offset: 587
                                              },
                                              end: {
                                                line: 15,
                                                column: 52,
                                                offset: 595
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 15,
                                                column: 52,
                                                offset: 595
                                              },
                                              end: {
                                                line: 15,
                                                column: 60,
                                                offset: 603
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 15,
                                            column: 9,
                                            offset: 552
                                          },
                                          end: {
                                            line: 15,
                                            column: 60,
                                            offset: 603
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 15,
                                        column: 7,
                                        offset: 550
                                      },
                                      end: {
                                        line: 15,
                                        column: 60,
                                        offset: 603
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
                                                offset: 612
                                              },
                                              end: {
                                                line: 16,
                                                column: 19,
                                                offset: 622
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - async iterator yields ',
                                            position: {
                                              start: {
                                                line: 16,
                                                column: 19,
                                                offset: 622
                                              },
                                              end: {
                                                line: 16,
                                                column: 44,
                                                offset: 647
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'Buffer',
                                            position: {
                                              start: {
                                                line: 16,
                                                column: 44,
                                                offset: 647
                                              },
                                              end: {
                                                line: 16,
                                                column: 52,
                                                offset: 655
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 16,
                                                column: 52,
                                                offset: 655
                                              },
                                              end: {
                                                line: 16,
                                                column: 60,
                                                offset: 663
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 16,
                                            column: 9,
                                            offset: 612
                                          },
                                          end: {
                                            line: 16,
                                            column: 60,
                                            offset: 663
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 16,
                                        column: 7,
                                        offset: 610
                                      },
                                      end: {
                                        line: 16,
                                        column: 60,
                                        offset: 663
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 15, column: 7, offset: 550 },
                                  end: { line: 16, column: 60, offset: 663 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 14, column: 5, offset: 432 },
                              end: { line: 16, column: 60, offset: 663 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 14, column: 5, offset: 432 },
                          end: { line: 16, column: 60, offset: 663 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 13, column: 3, offset: 416 },
                      end: { line: 16, column: 60, offset: 663 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 322 },
                  end: { line: 16, column: 60, offset: 663 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 18, column: 1, offset: 665 },
                      end: { line: 18, column: 8, offset: 672 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 1, offset: 665 },
                  end: { line: 18, column: 8, offset: 672 }
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
                              start: { line: 19, column: 5, offset: 677 },
                              end: { line: 19, column: 13, offset: 685 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 19, column: 13, offset: 685 },
                              end: { line: 19, column: 16, offset: 688 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncIterator<string|Buffer>',
                            position: {
                              start: { line: 19, column: 16, offset: 688 },
                              end: { line: 19, column: 46, offset: 718 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the values of all items in the disk hash table on the database server sorted by reverse insertion order.',
                            position: {
                              start: { line: 19, column: 46, offset: 718 },
                              end: { line: 19, column: 174, offset: 846 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 677 },
                          end: { line: 19, column: 174, offset: 846 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 19, column: 3, offset: 675 },
                      end: { line: 19, column: 174, offset: 846 }
                    }
                  }
                ],
                position: {
                  start: { line: 19, column: 3, offset: 675 },
                  end: { line: 19, column: 174, offset: 846 }
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
                  start: { line: 21, column: 1, offset: 848 },
                  end: { line: 31, column: 4, offset: 1097 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 31, column: 4, offset: 1097 }
            }
          }
        }
      },
      {
        name: 'entriesIterator',
        docs: '```specscript\n' +
          'entriesIterator() -> entries AsyncIterator<[key string, value string]>\n' +
          '\n' +
          'entriesIterator(options {\n' +
          '  valueType: "string"|"binary",\n' +
          '}) -> entries AsyncIterator<[key string, value string|Buffer]>\n' +
          '```\n' +
          '\n' +
          'Returns an async iterator of the entries (keys and values) of all items in the disk hash table on the database server. Item entries are yielded in reverse insertion order.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the entries of all items in the disk hash table on the database server.\n' +
          '  * `options`\n' +
          "    * `valueType` - `'string'|'binary'` - the type of value that the async iterator yields. Defaults to `'string'`.\n" +
          "      * `'string'` - async iterator yields entries with `string` values.\n" +
          "      * `'binary'` - async iterator yields entries with `Buffer` values.\n" +
          '\n' +
          'Return:\n' +
          '  * `entries` - `AsyncIterator<[key string, value string|Buffer]>` - an async iterator of the entries of all items in the disk hash table on the database server sorted by reverse insertion order.\n' +
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
                value: 'entriesIterator() -> entries AsyncIterator<[key string, value string]>\n' +
                  '\n' +
                  'entriesIterator(options {\n' +
                  '  valueType: "string"|"binary",\n' +
                  '}) -> entries AsyncIterator<[key string, value string|Buffer]>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 7, column: 4, offset: 210 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns an async iterator of the entries (keys and values) of all items in the disk hash table on the database server. Item entries are yielded in reverse insertion order.',
                    position: {
                      start: { line: 9, column: 1, offset: 212 },
                      end: { line: 9, column: 172, offset: 383 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 1, offset: 212 },
                  end: { line: 9, column: 172, offset: 383 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 11, column: 1, offset: 385 },
                      end: { line: 11, column: 11, offset: 395 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 385 },
                  end: { line: 11, column: 11, offset: 395 }
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
                              start: { line: 12, column: 5, offset: 400 },
                              end: { line: 12, column: 95, offset: 490 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 400 },
                          end: { line: 12, column: 95, offset: 490 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 398 },
                      end: { line: 12, column: 95, offset: 490 }
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
                              start: { line: 13, column: 5, offset: 495 },
                              end: { line: 13, column: 14, offset: 504 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 13, column: 5, offset: 495 },
                          end: { line: 13, column: 14, offset: 504 }
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
                                        offset: 511
                                      },
                                      end: {
                                        line: 14,
                                        column: 18,
                                        offset: 522
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
                                        offset: 522
                                      },
                                      end: {
                                        line: 14,
                                        column: 21,
                                        offset: 525
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
                                        offset: 525
                                      },
                                      end: {
                                        line: 14,
                                        column: 40,
                                        offset: 544
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the type of value that the async iterator yields. Defaults to ',
                                    position: {
                                      start: {
                                        line: 14,
                                        column: 40,
                                        offset: 544
                                      },
                                      end: {
                                        line: 14,
                                        column: 105,
                                        offset: 609
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: "'string'",
                                    position: {
                                      start: {
                                        line: 14,
                                        column: 105,
                                        offset: 609
                                      },
                                      end: {
                                        line: 14,
                                        column: 115,
                                        offset: 619
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: '.',
                                    position: {
                                      start: {
                                        line: 14,
                                        column: 115,
                                        offset: 619
                                      },
                                      end: {
                                        line: 14,
                                        column: 116,
                                        offset: 620
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 14, column: 7, offset: 511 },
                                  end: {
                                    line: 14,
                                    column: 116,
                                    offset: 620
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
                                                offset: 629
                                              },
                                              end: {
                                                line: 15,
                                                column: 19,
                                                offset: 639
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - async iterator yields entries with ',
                                            position: {
                                              start: {
                                                line: 15,
                                                column: 19,
                                                offset: 639
                                              },
                                              end: {
                                                line: 15,
                                                column: 57,
                                                offset: 677
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'string',
                                            position: {
                                              start: {
                                                line: 15,
                                                column: 57,
                                                offset: 677
                                              },
                                              end: {
                                                line: 15,
                                                column: 65,
                                                offset: 685
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 15,
                                                column: 65,
                                                offset: 685
                                              },
                                              end: {
                                                line: 15,
                                                column: 73,
                                                offset: 693
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 15,
                                            column: 9,
                                            offset: 629
                                          },
                                          end: {
                                            line: 15,
                                            column: 73,
                                            offset: 693
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 15,
                                        column: 7,
                                        offset: 627
                                      },
                                      end: {
                                        line: 15,
                                        column: 73,
                                        offset: 693
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
                                                offset: 702
                                              },
                                              end: {
                                                line: 16,
                                                column: 19,
                                                offset: 712
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - async iterator yields entries with ',
                                            position: {
                                              start: {
                                                line: 16,
                                                column: 19,
                                                offset: 712
                                              },
                                              end: {
                                                line: 16,
                                                column: 57,
                                                offset: 750
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'Buffer',
                                            position: {
                                              start: {
                                                line: 16,
                                                column: 57,
                                                offset: 750
                                              },
                                              end: {
                                                line: 16,
                                                column: 65,
                                                offset: 758
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 16,
                                                column: 65,
                                                offset: 758
                                              },
                                              end: {
                                                line: 16,
                                                column: 73,
                                                offset: 766
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 16,
                                            column: 9,
                                            offset: 702
                                          },
                                          end: {
                                            line: 16,
                                            column: 73,
                                            offset: 766
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 16,
                                        column: 7,
                                        offset: 700
                                      },
                                      end: {
                                        line: 16,
                                        column: 73,
                                        offset: 766
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 15, column: 7, offset: 627 },
                                  end: { line: 16, column: 73, offset: 766 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 14, column: 5, offset: 509 },
                              end: { line: 16, column: 73, offset: 766 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 14, column: 5, offset: 509 },
                          end: { line: 16, column: 73, offset: 766 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 13, column: 3, offset: 493 },
                      end: { line: 16, column: 73, offset: 766 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 398 },
                  end: { line: 16, column: 73, offset: 766 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 18, column: 1, offset: 768 },
                      end: { line: 18, column: 8, offset: 775 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 1, offset: 768 },
                  end: { line: 18, column: 8, offset: 775 }
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
                              start: { line: 19, column: 5, offset: 780 },
                              end: { line: 19, column: 14, offset: 789 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 19, column: 14, offset: 789 },
                              end: { line: 19, column: 17, offset: 792 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncIterator<[key string, value string|Buffer]>',
                            position: {
                              start: { line: 19, column: 17, offset: 792 },
                              end: { line: 19, column: 67, offset: 842 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the entries of all items in the disk hash table on the database server sorted by reverse insertion order.',
                            position: {
                              start: { line: 19, column: 67, offset: 842 },
                              end: { line: 19, column: 196, offset: 971 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 780 },
                          end: { line: 19, column: 196, offset: 971 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 19, column: 3, offset: 778 },
                      end: { line: 19, column: 196, offset: 971 }
                    }
                  }
                ],
                position: {
                  start: { line: 19, column: 3, offset: 778 },
                  end: { line: 19, column: 196, offset: 971 }
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
                  start: { line: 21, column: 1, offset: 973 },
                  end: { line: 31, column: 4, offset: 1266 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 31, column: 4, offset: 1266 }
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
      '\n' +
      'const compositeSortValueHt = new DiskSortedHashTableClient({\n' +
      '  storagePath: "/path/to/storage-file",\n' +
      '  headerPath: "/path/to/header-file",\n' +
      '  initialLength: 1024,\n' +
      '  itemSize: 512 * 1024,\n' +
      '  sortValueType: ["string", "number"],\n' +
      '  resizeRatio: 0.5,\n' +
      '  resizeFactor: 1000,\n' +
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
              '})\n' +
              '\n' +
              'const compositeSortValueHt = new DiskSortedHashTableClient({\n' +
              '  storagePath: "/path/to/storage-file",\n' +
              '  headerPath: "/path/to/header-file",\n' +
              '  initialLength: 1024,\n' +
              '  itemSize: 512 * 1024,\n' +
              '  sortValueType: ["string", "number"],\n' +
              '  resizeRatio: 0.5,\n' +
              '  resizeFactor: 1000,\n' +
              '  degree: 2,\n' +
              '})',
            position: {
              start: { line: 36, column: 1, offset: 2409 },
              end: { line: 56, column: 4, offset: 2939 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 56, column: 4, offset: 2939 }
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
          'Registers and initializes a [DiskSortedHashTable](/docs/DiskSortedHashTable) instance on the database server.\n' +
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
                    value: 'Registers and initializes a ',
                    position: {
                      start: { line: 5, column: 1, offset: 43 },
                      end: { line: 5, column: 29, offset: 71 }
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
                          start: { line: 5, column: 30, offset: 72 },
                          end: { line: 5, column: 49, offset: 91 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 5, column: 29, offset: 71 },
                      end: { line: 5, column: 77, offset: 119 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' instance on the database server.',
                    position: {
                      start: { line: 5, column: 77, offset: 119 },
                      end: { line: 5, column: 110, offset: 152 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 43 },
                  end: { line: 5, column: 110, offset: 152 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 154 },
                      end: { line: 7, column: 11, offset: 164 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 154 },
                  end: { line: 7, column: 11, offset: 164 }
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
                              start: { line: 8, column: 5, offset: 169 },
                              end: { line: 8, column: 11, offset: 175 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 169 },
                          end: { line: 8, column: 11, offset: 175 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 167 },
                      end: { line: 8, column: 11, offset: 175 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 167 },
                  end: { line: 8, column: 11, offset: 175 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 177 },
                      end: { line: 10, column: 8, offset: 184 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 177 },
                  end: { line: 10, column: 8, offset: 184 }
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
                              start: { line: 11, column: 5, offset: 189 },
                              end: { line: 11, column: 19, offset: 203 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 189 },
                          end: { line: 11, column: 19, offset: 203 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 187 },
                      end: { line: 11, column: 19, offset: 203 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 187 },
                  end: { line: 11, column: 19, offset: 203 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await ht.register()',
                position: {
                  start: { line: 13, column: 1, offset: 205 },
                  end: { line: 15, column: 4, offset: 242 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 242 }
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
          'Returns an async iterator of the values of all items in the disk sorted hash table on the database server sorted by sort value. Item values are yielded in ascending order.\n' +
          '\n' +
          'If a starting sort value and ending sort value are provided, the async iterator returns only values of items with sort values between the starting and ending sort values, including values of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the async iterator returns values of items with sort values greater than or equal to the starting sort value. If only an ending sort value is provided, the async iterator returns values of items with sort values less than or equal to the ending sort value.\n' +
          '\n' +
          'If an exclusive start key is provided, the async iterator returns values of items with sort values greater than or equal to the sort value of the item at the exclusive start key, not including the value of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the values of all items in the disk sorted hash table on the database server.\n' +
          '  * `options`\n' +
          '    * `exclusiveStartKey` - `string` - the key after which to start iterating.\n' +
          '    * `startingSortValue` - `string|number|Array<string|number>` - the sort value from which to start iterating. If this value is an array, the starting sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.\n' +
          '    * `endingSortValue` - `string|number|Array<string|number>` - the sort value at which to stop iterating. If this value is an array, the ending sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.\n' +
          '    * `valueType` - `"string"|"binary"` - the type of value that the async iterator yields. Defaults to `"string"`.\n' +
          '      * `"string"` - async iterator yields `string` values.\n' +
          '      * `"binary"` - async iterator yields `Buffer` values.\n' +
          '    * `limit` - `number` - the maximum number of values to yield from the async iterator.\n' +
          '\n' +
          'Return:\n' +
          '  * `values` - `AsyncIterator<string|Buffer>` - an async iterator of the values of all items in the disk sorted hash table on the database server sorted by sort value in ascending order.\n' +
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
                    value: 'Returns an async iterator of the values of all items in the disk sorted hash table on the database server sorted by sort value. Item values are yielded in ascending order.',
                    position: {
                      start: { line: 11, column: 1, offset: 278 },
                      end: { line: 11, column: 172, offset: 449 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 278 },
                  end: { line: 11, column: 172, offset: 449 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If a starting sort value and ending sort value are provided, the async iterator returns only values of items with sort values between the starting and ending sort values, including values of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the async iterator returns values of items with sort values greater than or equal to the starting sort value. If only an ending sort value is provided, the async iterator returns values of items with sort values less than or equal to the ending sort value.',
                    position: {
                      start: { line: 13, column: 1, offset: 451 },
                      end: { line: 13, column: 560, offset: 1010 }
                    }
                  }
                ],
                position: {
                  start: { line: 13, column: 1, offset: 451 },
                  end: { line: 13, column: 560, offset: 1010 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If an exclusive start key is provided, the async iterator returns values of items with sort values greater than or equal to the sort value of the item at the exclusive start key, not including the value of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.',
                    position: {
                      start: { line: 15, column: 1, offset: 1012 },
                      end: { line: 15, column: 314, offset: 1325 }
                    }
                  }
                ],
                position: {
                  start: { line: 15, column: 1, offset: 1012 },
                  end: { line: 15, column: 314, offset: 1325 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 17, column: 1, offset: 1327 },
                      end: { line: 17, column: 11, offset: 1337 }
                    }
                  }
                ],
                position: {
                  start: { line: 17, column: 1, offset: 1327 },
                  end: { line: 17, column: 11, offset: 1337 }
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
                              start: { line: 18, column: 5, offset: 1342 },
                              end: { line: 18, column: 101, offset: 1438 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 18, column: 5, offset: 1342 },
                          end: { line: 18, column: 101, offset: 1438 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 18, column: 3, offset: 1340 },
                      end: { line: 18, column: 101, offset: 1438 }
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
                              start: { line: 19, column: 5, offset: 1443 },
                              end: { line: 19, column: 14, offset: 1452 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 1443 },
                          end: { line: 19, column: 14, offset: 1452 }
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
                                        offset: 1459
                                      },
                                      end: {
                                        line: 20,
                                        column: 26,
                                        offset: 1478
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
                                        offset: 1478
                                      },
                                      end: {
                                        line: 20,
                                        column: 29,
                                        offset: 1481
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
                                        offset: 1481
                                      },
                                      end: {
                                        line: 20,
                                        column: 37,
                                        offset: 1489
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
                                        offset: 1489
                                      },
                                      end: {
                                        line: 20,
                                        column: 79,
                                        offset: 1531
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 20, column: 7, offset: 1459 },
                                  end: {
                                    line: 20,
                                    column: 79,
                                    offset: 1531
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 20, column: 5, offset: 1457 },
                              end: { line: 20, column: 79, offset: 1531 }
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
                                        offset: 1538
                                      },
                                      end: {
                                        line: 21,
                                        column: 26,
                                        offset: 1557
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
                                        offset: 1557
                                      },
                                      end: {
                                        line: 21,
                                        column: 29,
                                        offset: 1560
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
                                        offset: 1560
                                      },
                                      end: {
                                        line: 21,
                                        column: 65,
                                        offset: 1596
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
                                        offset: 1596
                                      },
                                      end: {
                                        line: 21,
                                        column: 277,
                                        offset: 1808
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 21, column: 7, offset: 1538 },
                                  end: {
                                    line: 21,
                                    column: 277,
                                    offset: 1808
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 5, offset: 1536 },
                              end: { line: 21, column: 277, offset: 1808 }
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
                                        offset: 1815
                                      },
                                      end: {
                                        line: 22,
                                        column: 24,
                                        offset: 1832
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
                                        offset: 1832
                                      },
                                      end: {
                                        line: 22,
                                        column: 27,
                                        offset: 1835
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
                                        offset: 1835
                                      },
                                      end: {
                                        line: 22,
                                        column: 63,
                                        offset: 1871
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
                                        offset: 1871
                                      },
                                      end: {
                                        line: 22,
                                        column: 270,
                                        offset: 2078
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 22, column: 7, offset: 1815 },
                                  end: {
                                    line: 22,
                                    column: 270,
                                    offset: 2078
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 22, column: 5, offset: 1813 },
                              end: { line: 22, column: 270, offset: 2078 }
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
                                        offset: 2085
                                      },
                                      end: {
                                        line: 23,
                                        column: 18,
                                        offset: 2096
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
                                        offset: 2096
                                      },
                                      end: {
                                        line: 23,
                                        column: 21,
                                        offset: 2099
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
                                        offset: 2099
                                      },
                                      end: {
                                        line: 23,
                                        column: 40,
                                        offset: 2118
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the type of value that the async iterator yields. Defaults to ',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 40,
                                        offset: 2118
                                      },
                                      end: {
                                        line: 23,
                                        column: 105,
                                        offset: 2183
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: '"string"',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 105,
                                        offset: 2183
                                      },
                                      end: {
                                        line: 23,
                                        column: 115,
                                        offset: 2193
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: '.',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 115,
                                        offset: 2193
                                      },
                                      end: {
                                        line: 23,
                                        column: 116,
                                        offset: 2194
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 23, column: 7, offset: 2085 },
                                  end: {
                                    line: 23,
                                    column: 116,
                                    offset: 2194
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
                                                offset: 2203
                                              },
                                              end: {
                                                line: 24,
                                                column: 19,
                                                offset: 2213
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - async iterator yields ',
                                            position: {
                                              start: {
                                                line: 24,
                                                column: 19,
                                                offset: 2213
                                              },
                                              end: {
                                                line: 24,
                                                column: 44,
                                                offset: 2238
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'string',
                                            position: {
                                              start: {
                                                line: 24,
                                                column: 44,
                                                offset: 2238
                                              },
                                              end: {
                                                line: 24,
                                                column: 52,
                                                offset: 2246
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 24,
                                                column: 52,
                                                offset: 2246
                                              },
                                              end: {
                                                line: 24,
                                                column: 60,
                                                offset: 2254
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 24,
                                            column: 9,
                                            offset: 2203
                                          },
                                          end: {
                                            line: 24,
                                            column: 60,
                                            offset: 2254
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 7,
                                        offset: 2201
                                      },
                                      end: {
                                        line: 24,
                                        column: 60,
                                        offset: 2254
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
                                                offset: 2263
                                              },
                                              end: {
                                                line: 25,
                                                column: 19,
                                                offset: 2273
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - async iterator yields ',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 19,
                                                offset: 2273
                                              },
                                              end: {
                                                line: 25,
                                                column: 44,
                                                offset: 2298
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'Buffer',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 44,
                                                offset: 2298
                                              },
                                              end: {
                                                line: 25,
                                                column: 52,
                                                offset: 2306
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 52,
                                                offset: 2306
                                              },
                                              end: {
                                                line: 25,
                                                column: 60,
                                                offset: 2314
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 25,
                                            column: 9,
                                            offset: 2263
                                          },
                                          end: {
                                            line: 25,
                                            column: 60,
                                            offset: 2314
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 25,
                                        column: 7,
                                        offset: 2261
                                      },
                                      end: {
                                        line: 25,
                                        column: 60,
                                        offset: 2314
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 24, column: 7, offset: 2201 },
                                  end: {
                                    line: 25,
                                    column: 60,
                                    offset: 2314
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 23, column: 5, offset: 2083 },
                              end: { line: 25, column: 60, offset: 2314 }
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
                                        offset: 2321
                                      },
                                      end: {
                                        line: 26,
                                        column: 14,
                                        offset: 2328
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
                                        offset: 2328
                                      },
                                      end: {
                                        line: 26,
                                        column: 17,
                                        offset: 2331
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
                                        offset: 2331
                                      },
                                      end: {
                                        line: 26,
                                        column: 25,
                                        offset: 2339
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the maximum number of values to yield from the async iterator.',
                                    position: {
                                      start: {
                                        line: 26,
                                        column: 25,
                                        offset: 2339
                                      },
                                      end: {
                                        line: 26,
                                        column: 90,
                                        offset: 2404
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 26, column: 7, offset: 2321 },
                                  end: {
                                    line: 26,
                                    column: 90,
                                    offset: 2404
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 26, column: 5, offset: 2319 },
                              end: { line: 26, column: 90, offset: 2404 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 20, column: 5, offset: 1457 },
                          end: { line: 26, column: 90, offset: 2404 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 19, column: 3, offset: 1441 },
                      end: { line: 26, column: 90, offset: 2404 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 3, offset: 1340 },
                  end: { line: 26, column: 90, offset: 2404 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 28, column: 1, offset: 2406 },
                      end: { line: 28, column: 8, offset: 2413 }
                    }
                  }
                ],
                position: {
                  start: { line: 28, column: 1, offset: 2406 },
                  end: { line: 28, column: 8, offset: 2413 }
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
                              start: { line: 29, column: 5, offset: 2418 },
                              end: { line: 29, column: 13, offset: 2426 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 29, column: 13, offset: 2426 },
                              end: { line: 29, column: 16, offset: 2429 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncIterator<string|Buffer>',
                            position: {
                              start: { line: 29, column: 16, offset: 2429 },
                              end: { line: 29, column: 46, offset: 2459 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the values of all items in the disk sorted hash table on the database server sorted by sort value in ascending order.',
                            position: {
                              start: { line: 29, column: 46, offset: 2459 },
                              end: { line: 29, column: 187, offset: 2600 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 29, column: 5, offset: 2418 },
                          end: { line: 29, column: 187, offset: 2600 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 29, column: 3, offset: 2416 },
                      end: { line: 29, column: 187, offset: 2600 }
                    }
                  }
                ],
                position: {
                  start: { line: 29, column: 3, offset: 2416 },
                  end: { line: 29, column: 187, offset: 2600 }
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
                  start: { line: 31, column: 1, offset: 2602 },
                  end: { line: 71, column: 4, offset: 3812 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 71, column: 4, offset: 3812 }
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
          'Returns an async iterator of the values of all items in the disk sorted hash table on the database server sorted by sort value. Item values are yielded in descending order.\n' +
          '\n' +
          'If a starting sort value and ending sort value are provided, the async iterator returns only values of items with sort values between the starting and ending sort values, including values of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the async iterator returns values of items with sort values less than or equal to the starting sort value.\n' +
          '\n' +
          'If an exclusive start key is provided, the async iterator returns values of items with sort values less than or equal to the sort value of the item at the exclusive start key, not including the value of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the values of all items in the disk sorted hash table on the database server.\n' +
          '  * `options`\n' +
          '    * `exclusiveStartKey` - `string` - the key after which to start iterating.\n' +
          '    * `startingSortValue` - `string|number|Array<string|number>` - the sort value from which to start iterating. If this value is an array, the starting sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.\n' +
          '    * `endingSortValue` - `string|number|Array<string|number>` - the sort value at which to stop iterating. If this value is an array, the ending sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.\n' +
          '    * `valueType` - `"string"|"binary"` - the type of value that the async iterator yields. Defaults to `"string"`.\n' +
          '      * `string` - async iterator yields `string` values.\n' +
          '      * `binary` - async iterator yields `Buffer` values.\n' +
          '    * `limit` - `number` - the maximum number of values to yield from the async iterator.\n' +
          '\n' +
          'Return:\n' +
          '  * `values` - `AsyncIterator<string|Buffer>` - an async iterator of the values of all items in the disk sorted hash table on the database server sorted by sort value in descending order.\n' +
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
                    value: 'Returns an async iterator of the values of all items in the disk sorted hash table on the database server sorted by sort value. Item values are yielded in descending order.',
                    position: {
                      start: { line: 11, column: 1, offset: 278 },
                      end: { line: 11, column: 173, offset: 450 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 278 },
                  end: { line: 11, column: 173, offset: 450 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If a starting sort value and ending sort value are provided, the async iterator returns only values of items with sort values between the starting and ending sort values, including values of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the async iterator returns values of items with sort values less than or equal to the starting sort value.',
                    position: {
                      start: { line: 13, column: 1, offset: 452 },
                      end: { line: 13, column: 410, offset: 861 }
                    }
                  }
                ],
                position: {
                  start: { line: 13, column: 1, offset: 452 },
                  end: { line: 13, column: 410, offset: 861 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If an exclusive start key is provided, the async iterator returns values of items with sort values less than or equal to the sort value of the item at the exclusive start key, not including the value of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.',
                    position: {
                      start: { line: 15, column: 1, offset: 863 },
                      end: { line: 15, column: 311, offset: 1173 }
                    }
                  }
                ],
                position: {
                  start: { line: 15, column: 1, offset: 863 },
                  end: { line: 15, column: 311, offset: 1173 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 17, column: 1, offset: 1175 },
                      end: { line: 17, column: 11, offset: 1185 }
                    }
                  }
                ],
                position: {
                  start: { line: 17, column: 1, offset: 1175 },
                  end: { line: 17, column: 11, offset: 1185 }
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
                              start: { line: 18, column: 5, offset: 1190 },
                              end: { line: 18, column: 101, offset: 1286 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 18, column: 5, offset: 1190 },
                          end: { line: 18, column: 101, offset: 1286 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 18, column: 3, offset: 1188 },
                      end: { line: 18, column: 101, offset: 1286 }
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
                              start: { line: 19, column: 5, offset: 1291 },
                              end: { line: 19, column: 14, offset: 1300 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 1291 },
                          end: { line: 19, column: 14, offset: 1300 }
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
                                        offset: 1307
                                      },
                                      end: {
                                        line: 20,
                                        column: 26,
                                        offset: 1326
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
                                        offset: 1326
                                      },
                                      end: {
                                        line: 20,
                                        column: 29,
                                        offset: 1329
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
                                        offset: 1329
                                      },
                                      end: {
                                        line: 20,
                                        column: 37,
                                        offset: 1337
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
                                        offset: 1337
                                      },
                                      end: {
                                        line: 20,
                                        column: 79,
                                        offset: 1379
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 20, column: 7, offset: 1307 },
                                  end: {
                                    line: 20,
                                    column: 79,
                                    offset: 1379
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 20, column: 5, offset: 1305 },
                              end: { line: 20, column: 79, offset: 1379 }
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
                                        offset: 1386
                                      },
                                      end: {
                                        line: 21,
                                        column: 26,
                                        offset: 1405
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
                                        offset: 1405
                                      },
                                      end: {
                                        line: 21,
                                        column: 29,
                                        offset: 1408
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
                                        offset: 1408
                                      },
                                      end: {
                                        line: 21,
                                        column: 65,
                                        offset: 1444
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
                                        offset: 1444
                                      },
                                      end: {
                                        line: 21,
                                        column: 277,
                                        offset: 1656
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 21, column: 7, offset: 1386 },
                                  end: {
                                    line: 21,
                                    column: 277,
                                    offset: 1656
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 5, offset: 1384 },
                              end: { line: 21, column: 277, offset: 1656 }
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
                                        offset: 1663
                                      },
                                      end: {
                                        line: 22,
                                        column: 24,
                                        offset: 1680
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
                                        offset: 1680
                                      },
                                      end: {
                                        line: 22,
                                        column: 27,
                                        offset: 1683
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
                                        offset: 1683
                                      },
                                      end: {
                                        line: 22,
                                        column: 63,
                                        offset: 1719
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
                                        offset: 1719
                                      },
                                      end: {
                                        line: 22,
                                        column: 270,
                                        offset: 1926
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 22, column: 7, offset: 1663 },
                                  end: {
                                    line: 22,
                                    column: 270,
                                    offset: 1926
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 22, column: 5, offset: 1661 },
                              end: { line: 22, column: 270, offset: 1926 }
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
                                        offset: 1933
                                      },
                                      end: {
                                        line: 23,
                                        column: 18,
                                        offset: 1944
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
                                        offset: 1944
                                      },
                                      end: {
                                        line: 23,
                                        column: 21,
                                        offset: 1947
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
                                        offset: 1947
                                      },
                                      end: {
                                        line: 23,
                                        column: 40,
                                        offset: 1966
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the type of value that the async iterator yields. Defaults to ',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 40,
                                        offset: 1966
                                      },
                                      end: {
                                        line: 23,
                                        column: 105,
                                        offset: 2031
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: '"string"',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 105,
                                        offset: 2031
                                      },
                                      end: {
                                        line: 23,
                                        column: 115,
                                        offset: 2041
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: '.',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 115,
                                        offset: 2041
                                      },
                                      end: {
                                        line: 23,
                                        column: 116,
                                        offset: 2042
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 23, column: 7, offset: 1933 },
                                  end: {
                                    line: 23,
                                    column: 116,
                                    offset: 2042
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
                                                offset: 2051
                                              },
                                              end: {
                                                line: 24,
                                                column: 17,
                                                offset: 2059
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - async iterator yields ',
                                            position: {
                                              start: {
                                                line: 24,
                                                column: 17,
                                                offset: 2059
                                              },
                                              end: {
                                                line: 24,
                                                column: 42,
                                                offset: 2084
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'string',
                                            position: {
                                              start: {
                                                line: 24,
                                                column: 42,
                                                offset: 2084
                                              },
                                              end: {
                                                line: 24,
                                                column: 50,
                                                offset: 2092
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 24,
                                                column: 50,
                                                offset: 2092
                                              },
                                              end: {
                                                line: 24,
                                                column: 58,
                                                offset: 2100
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 24,
                                            column: 9,
                                            offset: 2051
                                          },
                                          end: {
                                            line: 24,
                                            column: 58,
                                            offset: 2100
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 7,
                                        offset: 2049
                                      },
                                      end: {
                                        line: 24,
                                        column: 58,
                                        offset: 2100
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
                                                offset: 2109
                                              },
                                              end: {
                                                line: 25,
                                                column: 17,
                                                offset: 2117
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - async iterator yields ',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 17,
                                                offset: 2117
                                              },
                                              end: {
                                                line: 25,
                                                column: 42,
                                                offset: 2142
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'Buffer',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 42,
                                                offset: 2142
                                              },
                                              end: {
                                                line: 25,
                                                column: 50,
                                                offset: 2150
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 50,
                                                offset: 2150
                                              },
                                              end: {
                                                line: 25,
                                                column: 58,
                                                offset: 2158
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 25,
                                            column: 9,
                                            offset: 2109
                                          },
                                          end: {
                                            line: 25,
                                            column: 58,
                                            offset: 2158
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 25,
                                        column: 7,
                                        offset: 2107
                                      },
                                      end: {
                                        line: 25,
                                        column: 58,
                                        offset: 2158
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 24, column: 7, offset: 2049 },
                                  end: {
                                    line: 25,
                                    column: 58,
                                    offset: 2158
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 23, column: 5, offset: 1931 },
                              end: { line: 25, column: 58, offset: 2158 }
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
                                        offset: 2165
                                      },
                                      end: {
                                        line: 26,
                                        column: 14,
                                        offset: 2172
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
                                        offset: 2172
                                      },
                                      end: {
                                        line: 26,
                                        column: 17,
                                        offset: 2175
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
                                        offset: 2175
                                      },
                                      end: {
                                        line: 26,
                                        column: 25,
                                        offset: 2183
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the maximum number of values to yield from the async iterator.',
                                    position: {
                                      start: {
                                        line: 26,
                                        column: 25,
                                        offset: 2183
                                      },
                                      end: {
                                        line: 26,
                                        column: 90,
                                        offset: 2248
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 26, column: 7, offset: 2165 },
                                  end: {
                                    line: 26,
                                    column: 90,
                                    offset: 2248
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 26, column: 5, offset: 2163 },
                              end: { line: 26, column: 90, offset: 2248 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 20, column: 5, offset: 1305 },
                          end: { line: 26, column: 90, offset: 2248 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 19, column: 3, offset: 1289 },
                      end: { line: 26, column: 90, offset: 2248 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 3, offset: 1188 },
                  end: { line: 26, column: 90, offset: 2248 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 28, column: 1, offset: 2250 },
                      end: { line: 28, column: 8, offset: 2257 }
                    }
                  }
                ],
                position: {
                  start: { line: 28, column: 1, offset: 2250 },
                  end: { line: 28, column: 8, offset: 2257 }
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
                              start: { line: 29, column: 5, offset: 2262 },
                              end: { line: 29, column: 13, offset: 2270 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 29, column: 13, offset: 2270 },
                              end: { line: 29, column: 16, offset: 2273 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncIterator<string|Buffer>',
                            position: {
                              start: { line: 29, column: 16, offset: 2273 },
                              end: { line: 29, column: 46, offset: 2303 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the values of all items in the disk sorted hash table on the database server sorted by sort value in descending order.',
                            position: {
                              start: { line: 29, column: 46, offset: 2303 },
                              end: { line: 29, column: 188, offset: 2445 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 29, column: 5, offset: 2262 },
                          end: { line: 29, column: 188, offset: 2445 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 29, column: 3, offset: 2260 },
                      end: { line: 29, column: 188, offset: 2445 }
                    }
                  }
                ],
                position: {
                  start: { line: 29, column: 3, offset: 2260 },
                  end: { line: 29, column: 188, offset: 2445 }
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
                  start: { line: 31, column: 1, offset: 2447 },
                  end: { line: 71, column: 4, offset: 3657 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 71, column: 4, offset: 3657 }
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
          'forwardEntriesIterator() -> entries AsyncIterator<[\n' +
          '  key string,\n' +
          '  value string|Buffer,\n' +
          '  sortValue string|number,\n' +
          ']>\n' +
          '\n' +
          'forwardEntriesIterator() -> entries AsyncIterator<[\n' +
          '  key string,\n' +
          '  value string|Buffer,\n' +
          '  ...sortValue Array<string|number>,\n' +
          ']>\n' +
          '\n' +
          'forwardEntriesIterator(options) -> entries AsyncIterator<[\n' +
          '  key string,\n' +
          '  value string|Buffer,\n' +
          '  sortValue string|number,\n' +
          ']>\n' +
          '\n' +
          'forwardEntriesIterator(options) -> entries AsyncIterator<[\n' +
          '  key string,\n' +
          '  value string|Buffer,\n' +
          '  ...sortValue Array<string|number>,\n' +
          ']>\n' +
          '```\n' +
          '\n' +
          'Returns an async iterator of the entries (key, value, and sort value) of all items in the disk sorted hash table on the database server sorted by sort value. Item entries are yielded in ascending order.\n' +
          '\n' +
          'If a starting sort value and ending sort value are provided, the async iterator returns only entries of items with sort values between the starting and ending sort values, including entries of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the async iterator returns entries of items with sort values greater than or equal to the starting sort value. If only an ending sort value is provided, the async iterator returns entries of items with sort values less than or equal to the ending sort value.\n' +
          '\n' +
          'If an exclusive start key is provided, the async iterator returns entries of items with sort values greater than or equal to the sort value of the item at the exclusive start key, not including the entry of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the entries of all items in the disk sorted hash table on the database server.\n' +
          '  * `options`\n' +
          '    * `exclusiveStartKey` - `string` - the key after which to start iterating.\n' +
          '    * `startingSortValue` - `string|number|Array<string|number>` - the sort value from which to start iterating. If this value is an array, the starting sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.\n' +
          '    * `endingSortValue` - `string|number|Array<string|number>` - the sort value at which to stop iterating. If this value is an array, the ending sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.\n' +
          '    * `valueType` - `"string"|"binary"` - the type of value that the async iterator yields. Defaults to `"string"`.\n' +
          '      * `"string"` - async iterator yields entries with `string` values.\n' +
          '      * `"binary"` - async iterator yields entries with `Buffer` values.\n' +
          '    * `limit` - `number` - the maximum number of entries to yield from the async iterator.\n' +
          '\n' +
          'Return:\n' +
          '  * `entries` - `AsyncIterator<[key string, value string|Buffer, sortValue string|number]>` - an async iterator of the entries of all items in the disk sorted hash table on the database server sorted by sort value in ascending order.\n' +
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
                  'forwardEntriesIterator() -> entries AsyncIterator<[\n' +
                  '  key string,\n' +
                  '  value string|Buffer,\n' +
                  '  sortValue string|number,\n' +
                  ']>\n' +
                  '\n' +
                  'forwardEntriesIterator() -> entries AsyncIterator<[\n' +
                  '  key string,\n' +
                  '  value string|Buffer,\n' +
                  '  ...sortValue Array<string|number>,\n' +
                  ']>\n' +
                  '\n' +
                  'forwardEntriesIterator(options) -> entries AsyncIterator<[\n' +
                  '  key string,\n' +
                  '  value string|Buffer,\n' +
                  '  sortValue string|number,\n' +
                  ']>\n' +
                  '\n' +
                  'forwardEntriesIterator(options) -> entries AsyncIterator<[\n' +
                  '  key string,\n' +
                  '  value string|Buffer,\n' +
                  '  ...sortValue Array<string|number>,\n' +
                  ']>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 33, column: 4, offset: 733 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns an async iterator of the entries (key, value, and sort value) of all items in the disk sorted hash table on the database server sorted by sort value. Item entries are yielded in ascending order.',
                    position: {
                      start: { line: 35, column: 1, offset: 735 },
                      end: { line: 35, column: 203, offset: 937 }
                    }
                  }
                ],
                position: {
                  start: { line: 35, column: 1, offset: 735 },
                  end: { line: 35, column: 203, offset: 937 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If a starting sort value and ending sort value are provided, the async iterator returns only entries of items with sort values between the starting and ending sort values, including entries of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the async iterator returns entries of items with sort values greater than or equal to the starting sort value. If only an ending sort value is provided, the async iterator returns entries of items with sort values less than or equal to the ending sort value.',
                    position: {
                      start: { line: 37, column: 1, offset: 939 },
                      end: { line: 37, column: 564, offset: 1502 }
                    }
                  }
                ],
                position: {
                  start: { line: 37, column: 1, offset: 939 },
                  end: { line: 37, column: 564, offset: 1502 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If an exclusive start key is provided, the async iterator returns entries of items with sort values greater than or equal to the sort value of the item at the exclusive start key, not including the entry of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.',
                    position: {
                      start: { line: 39, column: 1, offset: 1504 },
                      end: { line: 39, column: 315, offset: 1818 }
                    }
                  }
                ],
                position: {
                  start: { line: 39, column: 1, offset: 1504 },
                  end: { line: 39, column: 315, offset: 1818 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 41, column: 1, offset: 1820 },
                      end: { line: 41, column: 11, offset: 1830 }
                    }
                  }
                ],
                position: {
                  start: { line: 41, column: 1, offset: 1820 },
                  end: { line: 41, column: 11, offset: 1830 }
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
                              start: { line: 42, column: 5, offset: 1835 },
                              end: { line: 42, column: 102, offset: 1932 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 42, column: 5, offset: 1835 },
                          end: { line: 42, column: 102, offset: 1932 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 42, column: 3, offset: 1833 },
                      end: { line: 42, column: 102, offset: 1932 }
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
                              start: { line: 43, column: 5, offset: 1937 },
                              end: { line: 43, column: 14, offset: 1946 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 43, column: 5, offset: 1937 },
                          end: { line: 43, column: 14, offset: 1946 }
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
                                        offset: 1953
                                      },
                                      end: {
                                        line: 44,
                                        column: 26,
                                        offset: 1972
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
                                        offset: 1972
                                      },
                                      end: {
                                        line: 44,
                                        column: 29,
                                        offset: 1975
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
                                        offset: 1975
                                      },
                                      end: {
                                        line: 44,
                                        column: 37,
                                        offset: 1983
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
                                        offset: 1983
                                      },
                                      end: {
                                        line: 44,
                                        column: 79,
                                        offset: 2025
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 44, column: 7, offset: 1953 },
                                  end: {
                                    line: 44,
                                    column: 79,
                                    offset: 2025
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 44, column: 5, offset: 1951 },
                              end: { line: 44, column: 79, offset: 2025 }
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
                                        offset: 2032
                                      },
                                      end: {
                                        line: 45,
                                        column: 26,
                                        offset: 2051
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
                                        offset: 2051
                                      },
                                      end: {
                                        line: 45,
                                        column: 29,
                                        offset: 2054
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
                                        offset: 2054
                                      },
                                      end: {
                                        line: 45,
                                        column: 65,
                                        offset: 2090
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
                                        offset: 2090
                                      },
                                      end: {
                                        line: 45,
                                        column: 277,
                                        offset: 2302
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 45, column: 7, offset: 2032 },
                                  end: {
                                    line: 45,
                                    column: 277,
                                    offset: 2302
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 45, column: 5, offset: 2030 },
                              end: { line: 45, column: 277, offset: 2302 }
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
                                        offset: 2309
                                      },
                                      end: {
                                        line: 46,
                                        column: 24,
                                        offset: 2326
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
                                        offset: 2326
                                      },
                                      end: {
                                        line: 46,
                                        column: 27,
                                        offset: 2329
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
                                        offset: 2329
                                      },
                                      end: {
                                        line: 46,
                                        column: 63,
                                        offset: 2365
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
                                        offset: 2365
                                      },
                                      end: {
                                        line: 46,
                                        column: 270,
                                        offset: 2572
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 46, column: 7, offset: 2309 },
                                  end: {
                                    line: 46,
                                    column: 270,
                                    offset: 2572
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 46, column: 5, offset: 2307 },
                              end: { line: 46, column: 270, offset: 2572 }
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
                                        offset: 2579
                                      },
                                      end: {
                                        line: 47,
                                        column: 18,
                                        offset: 2590
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
                                        offset: 2590
                                      },
                                      end: {
                                        line: 47,
                                        column: 21,
                                        offset: 2593
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
                                        offset: 2593
                                      },
                                      end: {
                                        line: 47,
                                        column: 40,
                                        offset: 2612
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the type of value that the async iterator yields. Defaults to ',
                                    position: {
                                      start: {
                                        line: 47,
                                        column: 40,
                                        offset: 2612
                                      },
                                      end: {
                                        line: 47,
                                        column: 105,
                                        offset: 2677
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: '"string"',
                                    position: {
                                      start: {
                                        line: 47,
                                        column: 105,
                                        offset: 2677
                                      },
                                      end: {
                                        line: 47,
                                        column: 115,
                                        offset: 2687
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: '.',
                                    position: {
                                      start: {
                                        line: 47,
                                        column: 115,
                                        offset: 2687
                                      },
                                      end: {
                                        line: 47,
                                        column: 116,
                                        offset: 2688
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 47, column: 7, offset: 2579 },
                                  end: {
                                    line: 47,
                                    column: 116,
                                    offset: 2688
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
                                                offset: 2697
                                              },
                                              end: {
                                                line: 48,
                                                column: 19,
                                                offset: 2707
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - async iterator yields entries with ',
                                            position: {
                                              start: {
                                                line: 48,
                                                column: 19,
                                                offset: 2707
                                              },
                                              end: {
                                                line: 48,
                                                column: 57,
                                                offset: 2745
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'string',
                                            position: {
                                              start: {
                                                line: 48,
                                                column: 57,
                                                offset: 2745
                                              },
                                              end: {
                                                line: 48,
                                                column: 65,
                                                offset: 2753
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 48,
                                                column: 65,
                                                offset: 2753
                                              },
                                              end: {
                                                line: 48,
                                                column: 73,
                                                offset: 2761
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 48,
                                            column: 9,
                                            offset: 2697
                                          },
                                          end: {
                                            line: 48,
                                            column: 73,
                                            offset: 2761
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 48,
                                        column: 7,
                                        offset: 2695
                                      },
                                      end: {
                                        line: 48,
                                        column: 73,
                                        offset: 2761
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
                                                offset: 2770
                                              },
                                              end: {
                                                line: 49,
                                                column: 19,
                                                offset: 2780
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - async iterator yields entries with ',
                                            position: {
                                              start: {
                                                line: 49,
                                                column: 19,
                                                offset: 2780
                                              },
                                              end: {
                                                line: 49,
                                                column: 57,
                                                offset: 2818
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'Buffer',
                                            position: {
                                              start: {
                                                line: 49,
                                                column: 57,
                                                offset: 2818
                                              },
                                              end: {
                                                line: 49,
                                                column: 65,
                                                offset: 2826
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 49,
                                                column: 65,
                                                offset: 2826
                                              },
                                              end: {
                                                line: 49,
                                                column: 73,
                                                offset: 2834
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 49,
                                            column: 9,
                                            offset: 2770
                                          },
                                          end: {
                                            line: 49,
                                            column: 73,
                                            offset: 2834
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 49,
                                        column: 7,
                                        offset: 2768
                                      },
                                      end: {
                                        line: 49,
                                        column: 73,
                                        offset: 2834
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 48, column: 7, offset: 2695 },
                                  end: {
                                    line: 49,
                                    column: 73,
                                    offset: 2834
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 47, column: 5, offset: 2577 },
                              end: { line: 49, column: 73, offset: 2834 }
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
                                        offset: 2841
                                      },
                                      end: {
                                        line: 50,
                                        column: 14,
                                        offset: 2848
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
                                        offset: 2848
                                      },
                                      end: {
                                        line: 50,
                                        column: 17,
                                        offset: 2851
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
                                        offset: 2851
                                      },
                                      end: {
                                        line: 50,
                                        column: 25,
                                        offset: 2859
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the maximum number of entries to yield from the async iterator.',
                                    position: {
                                      start: {
                                        line: 50,
                                        column: 25,
                                        offset: 2859
                                      },
                                      end: {
                                        line: 50,
                                        column: 91,
                                        offset: 2925
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 50, column: 7, offset: 2841 },
                                  end: {
                                    line: 50,
                                    column: 91,
                                    offset: 2925
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 50, column: 5, offset: 2839 },
                              end: { line: 50, column: 91, offset: 2925 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 44, column: 5, offset: 1951 },
                          end: { line: 50, column: 91, offset: 2925 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 43, column: 3, offset: 1935 },
                      end: { line: 50, column: 91, offset: 2925 }
                    }
                  }
                ],
                position: {
                  start: { line: 42, column: 3, offset: 1833 },
                  end: { line: 50, column: 91, offset: 2925 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 52, column: 1, offset: 2927 },
                      end: { line: 52, column: 8, offset: 2934 }
                    }
                  }
                ],
                position: {
                  start: { line: 52, column: 1, offset: 2927 },
                  end: { line: 52, column: 8, offset: 2934 }
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
                              start: { line: 53, column: 5, offset: 2939 },
                              end: { line: 53, column: 14, offset: 2948 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 53, column: 14, offset: 2948 },
                              end: { line: 53, column: 17, offset: 2951 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncIterator<[key string, value string|Buffer, sortValue string|number]>',
                            position: {
                              start: { line: 53, column: 17, offset: 2951 },
                              end: { line: 53, column: 92, offset: 3026 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the entries of all items in the disk sorted hash table on the database server sorted by sort value in ascending order.',
                            position: {
                              start: { line: 53, column: 92, offset: 3026 },
                              end: { line: 53, column: 234, offset: 3168 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 53, column: 5, offset: 2939 },
                          end: { line: 53, column: 234, offset: 3168 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 53, column: 3, offset: 2937 },
                      end: { line: 53, column: 234, offset: 3168 }
                    }
                  }
                ],
                position: {
                  start: { line: 53, column: 3, offset: 2937 },
                  end: { line: 53, column: 234, offset: 3168 }
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
                  start: { line: 55, column: 1, offset: 3170 },
                  end: { line: 95, column: 4, offset: 4818 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 95, column: 4, offset: 4818 }
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
          'reverseEntriesIterator() -> entries AsyncIterator<[\n' +
          '  key string,\n' +
          '  value string|Buffer,\n' +
          '  sortValue string|number,\n' +
          ']>\n' +
          '\n' +
          'reverseEntriesIterator() -> entries AsyncIterator<[\n' +
          '  key string,\n' +
          '  value string|Buffer,\n' +
          '  ...sortValue Array<string|number>,\n' +
          ']>\n' +
          '\n' +
          'reverseEntriesIterator(options) -> entries AsyncIterator<[\n' +
          '  key string,\n' +
          '  value string|Buffer,\n' +
          '  sortValue string|number,\n' +
          ']>\n' +
          '\n' +
          'reverseEntriesIterator(options) -> entries AsyncIterator<[\n' +
          '  key string,\n' +
          '  value string|Buffer,\n' +
          '  ...sortValue Array<string|number>,\n' +
          ']>\n' +
          '```\n' +
          '\n' +
          'Returns an async iterator of the entries (key, value, and sort value) of all items in the disk sorted hash table on the database server sorted by sort value. Item entries are yielded in descending order.\n' +
          '\n' +
          'If a starting sort value and ending sort value are provided, the async iterator returns only entries of items with sort values between the starting and ending sort values, including entries of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the async iterator returns entries of items with sort values less than or equal to the starting sort value.\n' +
          '\n' +
          'If an exclusive start key is provided, the async iterator returns entries of items with sort values less than or equal to the sort value of the item at the exclusive start key, not including the entry of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the entries of all items in the disk sorted hash table on the database server.\n' +
          '  * `options`\n' +
          '    * `exclusiveStartKey` - `string` - the key after which to start iterating.\n' +
          '    * `startingSortValue` - `string|number|Array<string|number>` - the sort value from which to start iterating. If this value is an array, the starting sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.\n' +
          '    * `endingSortValue` - `string|number|Array<string|number>` - the sort value at which to stop iterating. If this value is an array, the ending sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.\n' +
          '    * `valueType` - `"string"|"binary"` - the type of value that the async iterator yields. Defaults to `"string"`.\n' +
          '      * `string` - async iterator yields entries with `string` values.\n' +
          '      * `binary` - async iterator yields entries with `Buffer` values.\n' +
          '    * `limit` - `number` - the maximum number of entries to yield from the async iterator.\n' +
          '\n' +
          'Return:\n' +
          '  * `entries` - `AsyncIterator<[key string, value string|Buffer, sortValue string|number]>` - an async iterator of the entries of all items in the disk sorted hash table on the database server sorted by sort value in descending order.\n' +
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
                  'reverseEntriesIterator() -> entries AsyncIterator<[\n' +
                  '  key string,\n' +
                  '  value string|Buffer,\n' +
                  '  sortValue string|number,\n' +
                  ']>\n' +
                  '\n' +
                  'reverseEntriesIterator() -> entries AsyncIterator<[\n' +
                  '  key string,\n' +
                  '  value string|Buffer,\n' +
                  '  ...sortValue Array<string|number>,\n' +
                  ']>\n' +
                  '\n' +
                  'reverseEntriesIterator(options) -> entries AsyncIterator<[\n' +
                  '  key string,\n' +
                  '  value string|Buffer,\n' +
                  '  sortValue string|number,\n' +
                  ']>\n' +
                  '\n' +
                  'reverseEntriesIterator(options) -> entries AsyncIterator<[\n' +
                  '  key string,\n' +
                  '  value string|Buffer,\n' +
                  '  ...sortValue Array<string|number>,\n' +
                  ']>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 33, column: 4, offset: 733 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns an async iterator of the entries (key, value, and sort value) of all items in the disk sorted hash table on the database server sorted by sort value. Item entries are yielded in descending order.',
                    position: {
                      start: { line: 35, column: 1, offset: 735 },
                      end: { line: 35, column: 204, offset: 938 }
                    }
                  }
                ],
                position: {
                  start: { line: 35, column: 1, offset: 735 },
                  end: { line: 35, column: 204, offset: 938 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If a starting sort value and ending sort value are provided, the async iterator returns only entries of items with sort values between the starting and ending sort values, including entries of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the async iterator returns entries of items with sort values less than or equal to the starting sort value.',
                    position: {
                      start: { line: 37, column: 1, offset: 940 },
                      end: { line: 37, column: 413, offset: 1352 }
                    }
                  }
                ],
                position: {
                  start: { line: 37, column: 1, offset: 940 },
                  end: { line: 37, column: 413, offset: 1352 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If an exclusive start key is provided, the async iterator returns entries of items with sort values less than or equal to the sort value of the item at the exclusive start key, not including the entry of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.',
                    position: {
                      start: { line: 39, column: 1, offset: 1354 },
                      end: { line: 39, column: 312, offset: 1665 }
                    }
                  }
                ],
                position: {
                  start: { line: 39, column: 1, offset: 1354 },
                  end: { line: 39, column: 312, offset: 1665 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 41, column: 1, offset: 1667 },
                      end: { line: 41, column: 11, offset: 1677 }
                    }
                  }
                ],
                position: {
                  start: { line: 41, column: 1, offset: 1667 },
                  end: { line: 41, column: 11, offset: 1677 }
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
                              start: { line: 42, column: 5, offset: 1682 },
                              end: { line: 42, column: 102, offset: 1779 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 42, column: 5, offset: 1682 },
                          end: { line: 42, column: 102, offset: 1779 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 42, column: 3, offset: 1680 },
                      end: { line: 42, column: 102, offset: 1779 }
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
                              start: { line: 43, column: 5, offset: 1784 },
                              end: { line: 43, column: 14, offset: 1793 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 43, column: 5, offset: 1784 },
                          end: { line: 43, column: 14, offset: 1793 }
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
                                        offset: 1800
                                      },
                                      end: {
                                        line: 44,
                                        column: 26,
                                        offset: 1819
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
                                        offset: 1819
                                      },
                                      end: {
                                        line: 44,
                                        column: 29,
                                        offset: 1822
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
                                        offset: 1822
                                      },
                                      end: {
                                        line: 44,
                                        column: 37,
                                        offset: 1830
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
                                        offset: 1830
                                      },
                                      end: {
                                        line: 44,
                                        column: 79,
                                        offset: 1872
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 44, column: 7, offset: 1800 },
                                  end: {
                                    line: 44,
                                    column: 79,
                                    offset: 1872
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 44, column: 5, offset: 1798 },
                              end: { line: 44, column: 79, offset: 1872 }
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
                                        offset: 1879
                                      },
                                      end: {
                                        line: 45,
                                        column: 26,
                                        offset: 1898
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
                                        offset: 1898
                                      },
                                      end: {
                                        line: 45,
                                        column: 29,
                                        offset: 1901
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
                                        offset: 1901
                                      },
                                      end: {
                                        line: 45,
                                        column: 65,
                                        offset: 1937
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
                                        offset: 1937
                                      },
                                      end: {
                                        line: 45,
                                        column: 277,
                                        offset: 2149
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 45, column: 7, offset: 1879 },
                                  end: {
                                    line: 45,
                                    column: 277,
                                    offset: 2149
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 45, column: 5, offset: 1877 },
                              end: { line: 45, column: 277, offset: 2149 }
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
                                        offset: 2156
                                      },
                                      end: {
                                        line: 46,
                                        column: 24,
                                        offset: 2173
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
                                        offset: 2173
                                      },
                                      end: {
                                        line: 46,
                                        column: 27,
                                        offset: 2176
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
                                        offset: 2176
                                      },
                                      end: {
                                        line: 46,
                                        column: 63,
                                        offset: 2212
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
                                        offset: 2212
                                      },
                                      end: {
                                        line: 46,
                                        column: 270,
                                        offset: 2419
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 46, column: 7, offset: 2156 },
                                  end: {
                                    line: 46,
                                    column: 270,
                                    offset: 2419
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 46, column: 5, offset: 2154 },
                              end: { line: 46, column: 270, offset: 2419 }
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
                                        offset: 2426
                                      },
                                      end: {
                                        line: 47,
                                        column: 18,
                                        offset: 2437
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
                                        offset: 2437
                                      },
                                      end: {
                                        line: 47,
                                        column: 21,
                                        offset: 2440
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
                                        offset: 2440
                                      },
                                      end: {
                                        line: 47,
                                        column: 40,
                                        offset: 2459
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the type of value that the async iterator yields. Defaults to ',
                                    position: {
                                      start: {
                                        line: 47,
                                        column: 40,
                                        offset: 2459
                                      },
                                      end: {
                                        line: 47,
                                        column: 105,
                                        offset: 2524
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: '"string"',
                                    position: {
                                      start: {
                                        line: 47,
                                        column: 105,
                                        offset: 2524
                                      },
                                      end: {
                                        line: 47,
                                        column: 115,
                                        offset: 2534
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: '.',
                                    position: {
                                      start: {
                                        line: 47,
                                        column: 115,
                                        offset: 2534
                                      },
                                      end: {
                                        line: 47,
                                        column: 116,
                                        offset: 2535
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 47, column: 7, offset: 2426 },
                                  end: {
                                    line: 47,
                                    column: 116,
                                    offset: 2535
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
                                                offset: 2544
                                              },
                                              end: {
                                                line: 48,
                                                column: 17,
                                                offset: 2552
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - async iterator yields entries with ',
                                            position: {
                                              start: {
                                                line: 48,
                                                column: 17,
                                                offset: 2552
                                              },
                                              end: {
                                                line: 48,
                                                column: 55,
                                                offset: 2590
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'string',
                                            position: {
                                              start: {
                                                line: 48,
                                                column: 55,
                                                offset: 2590
                                              },
                                              end: {
                                                line: 48,
                                                column: 63,
                                                offset: 2598
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 48,
                                                column: 63,
                                                offset: 2598
                                              },
                                              end: {
                                                line: 48,
                                                column: 71,
                                                offset: 2606
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 48,
                                            column: 9,
                                            offset: 2544
                                          },
                                          end: {
                                            line: 48,
                                            column: 71,
                                            offset: 2606
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 48,
                                        column: 7,
                                        offset: 2542
                                      },
                                      end: {
                                        line: 48,
                                        column: 71,
                                        offset: 2606
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
                                                offset: 2615
                                              },
                                              end: {
                                                line: 49,
                                                column: 17,
                                                offset: 2623
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - async iterator yields entries with ',
                                            position: {
                                              start: {
                                                line: 49,
                                                column: 17,
                                                offset: 2623
                                              },
                                              end: {
                                                line: 49,
                                                column: 55,
                                                offset: 2661
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'Buffer',
                                            position: {
                                              start: {
                                                line: 49,
                                                column: 55,
                                                offset: 2661
                                              },
                                              end: {
                                                line: 49,
                                                column: 63,
                                                offset: 2669
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 49,
                                                column: 63,
                                                offset: 2669
                                              },
                                              end: {
                                                line: 49,
                                                column: 71,
                                                offset: 2677
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 49,
                                            column: 9,
                                            offset: 2615
                                          },
                                          end: {
                                            line: 49,
                                            column: 71,
                                            offset: 2677
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 49,
                                        column: 7,
                                        offset: 2613
                                      },
                                      end: {
                                        line: 49,
                                        column: 71,
                                        offset: 2677
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 48, column: 7, offset: 2542 },
                                  end: {
                                    line: 49,
                                    column: 71,
                                    offset: 2677
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 47, column: 5, offset: 2424 },
                              end: { line: 49, column: 71, offset: 2677 }
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
                                        offset: 2684
                                      },
                                      end: {
                                        line: 50,
                                        column: 14,
                                        offset: 2691
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
                                        offset: 2691
                                      },
                                      end: {
                                        line: 50,
                                        column: 17,
                                        offset: 2694
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
                                        offset: 2694
                                      },
                                      end: {
                                        line: 50,
                                        column: 25,
                                        offset: 2702
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the maximum number of entries to yield from the async iterator.',
                                    position: {
                                      start: {
                                        line: 50,
                                        column: 25,
                                        offset: 2702
                                      },
                                      end: {
                                        line: 50,
                                        column: 91,
                                        offset: 2768
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 50, column: 7, offset: 2684 },
                                  end: {
                                    line: 50,
                                    column: 91,
                                    offset: 2768
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 50, column: 5, offset: 2682 },
                              end: { line: 50, column: 91, offset: 2768 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 44, column: 5, offset: 1798 },
                          end: { line: 50, column: 91, offset: 2768 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 43, column: 3, offset: 1782 },
                      end: { line: 50, column: 91, offset: 2768 }
                    }
                  }
                ],
                position: {
                  start: { line: 42, column: 3, offset: 1680 },
                  end: { line: 50, column: 91, offset: 2768 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 52, column: 1, offset: 2770 },
                      end: { line: 52, column: 8, offset: 2777 }
                    }
                  }
                ],
                position: {
                  start: { line: 52, column: 1, offset: 2770 },
                  end: { line: 52, column: 8, offset: 2777 }
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
                              start: { line: 53, column: 5, offset: 2782 },
                              end: { line: 53, column: 14, offset: 2791 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 53, column: 14, offset: 2791 },
                              end: { line: 53, column: 17, offset: 2794 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncIterator<[key string, value string|Buffer, sortValue string|number]>',
                            position: {
                              start: { line: 53, column: 17, offset: 2794 },
                              end: { line: 53, column: 92, offset: 2869 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the entries of all items in the disk sorted hash table on the database server sorted by sort value in descending order.',
                            position: {
                              start: { line: 53, column: 92, offset: 2869 },
                              end: { line: 53, column: 235, offset: 3012 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 53, column: 5, offset: 2782 },
                          end: { line: 53, column: 235, offset: 3012 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 53, column: 3, offset: 2780 },
                      end: { line: 53, column: 235, offset: 3012 }
                    }
                  }
                ],
                position: {
                  start: { line: 53, column: 3, offset: 2780 },
                  end: { line: 53, column: 235, offset: 3012 }
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
                  start: { line: 55, column: 1, offset: 3014 },
                  end: { line: 95, column: 4, offset: 4662 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 95, column: 4, offset: 4662 }
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