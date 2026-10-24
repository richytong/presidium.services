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
      'module HTTP "https://presidium.services/docs/HTTP"\n' +
      '\n' +
      'HTTP.Handler(HTTP.Request, HTTP.Response) -> ()\n' +
      '\n' +
      'new DatabaseLoadBalancer(\n' +
      '  hash(tableName string, key string, length number) -> Promise|number,\n' +
      '  options {\n' +
      '    serverIps: Array<string>|Array<Array<string>>,\n' +
      '  },\n' +
      '  ...handlers Arguments<HTTP.Handler>\n' +
      ')\n' +
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
            value: 'module HTTP "https://presidium.services/docs/HTTP"\n' +
              '\n' +
              'HTTP.Handler(HTTP.Request, HTTP.Response) -> ()\n' +
              '\n' +
              'new DatabaseLoadBalancer(\n' +
              '  hash(tableName string, key string, length number) -> Promise|number,\n' +
              '  options {\n' +
              '    serverIps: Array<string>|Array<Array<string>>,\n' +
              '  },\n' +
              '  ...handlers Arguments<HTTP.Handler>\n' +
              ')',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 13, column: 4, offset: 323 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 13, column: 4, offset: 323 }
        }
      }
    },
    methods: [
      {
        name: 'listen',
        docs: '```specscript\n' +
          'listen(port number) -> ()\n' +
          'listen(port number, callback function) -> ()\n' +
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
                value: 'listen(port number) -> ()\n' +
                  'listen(port number, callback function) -> ()',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 4, column: 4, offset: 88 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 4, column: 4, offset: 88 }
            }
          }
        }
      },
      {
        name: 'close',
        docs: '```specscript\nclose() -> ()\n```',
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
                value: 'close() -> ()',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 31 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 31 }
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
      'module HTTP "https://presidium.services/docs/HTTP"\n' +
      '\n' +
      'HTTP.Handler(request HTTP.Request, response HTTP.Response) -> ()\n' +
      '\n' +
      'new DatabaseServer(options {\n' +
      '  databasePath: string,\n' +
      '  manifestTableName: string,\n' +
      '  manifestTableInitialLength: number,\n' +
      '  manifestTableItemSize: number,\n' +
      '  defaultTableInitialLength: number,\n' +
      '  defaultTableItemSize: number,\n' +
      '  defaultDiskSortedHashTableDegree: number,\n' +
      '}, ...handlers Arguments<HTTP.Handler>) -> server DatabaseServer\n' +
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
            value: 'module HTTP "https://presidium.services/docs/HTTP"\n' +
              '\n' +
              'HTTP.Handler(request HTTP.Request, response HTTP.Response) -> ()\n' +
              '\n' +
              'new DatabaseServer(options {\n' +
              '  databasePath: string,\n' +
              '  manifestTableName: string,\n' +
              '  manifestTableInitialLength: number,\n' +
              '  manifestTableItemSize: number,\n' +
              '  defaultTableInitialLength: number,\n' +
              '  defaultTableItemSize: number,\n' +
              '  defaultDiskSortedHashTableDegree: number,\n' +
              '}, ...handlers Arguments<HTTP.Handler>) -> server DatabaseServer',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 466 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 15, column: 4, offset: 466 }
        }
      }
    },
    methods: [
      {
        name: 'init',
        docs: '```specscript\ninit() -> Promise<>\n```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'init',
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
                value: 'init() -> Promise<>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 37 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 37 }
            }
          }
        }
      },
      {
        name: 'listen',
        docs: '```specscript\n' +
          'listen(port number) -> ()\n' +
          'listen(port number, callback function) -> ()\n' +
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
                value: 'listen(port number) -> ()\n' +
                  'listen(port number, callback function) -> ()',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 4, column: 4, offset: 88 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 4, column: 4, offset: 88 }
            }
          }
        }
      },
      {
        name: 'close',
        docs: '```specscript\nclose() -> ()\n```',
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
                value: 'close() -> ()',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 31 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 31 }
            }
          }
        }
      },
      {
        name: 'registerDiskHashTable',
        docs: '```specscript\n' +
          'registerDiskHashTable(tableName string, config {\n' +
          '  storagePath: string,\n' +
          '  headerPath: string,\n' +
          '  initialLength: number,\n' +
          '  itemSize: number,\n' +
          '  resizeRatio: number,\n' +
          '  resizeFactor: number,\n' +
          '}) -> Promise<>\n' +
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
                  '  storagePath: string,\n' +
                  '  headerPath: string,\n' +
                  '  initialLength: number,\n' +
                  '  itemSize: number,\n' +
                  '  resizeRatio: number,\n' +
                  '  resizeFactor: number,\n' +
                  '}) -> Promise<>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 10, column: 4, offset: 219 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 10, column: 4, offset: 219 }
            }
          }
        }
      },
      {
        name: 'registerDiskSortedHashTable',
        docs: '```specscript\n' +
          'registerDiskSortedHashTable(tableName string, config {\n' +
          '  storagePath: string,\n' +
          '  headerPath: string,\n' +
          '  initialLength: number,\n' +
          '  itemSize: number,\n' +
          '  sortValueType: "number"|"string",\n' +
          '  degree: number,\n' +
          '  resizeRatio: number,\n' +
          '  resizeFactor: number,\n' +
          '}) -> Promise<>\n' +
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
                  '  storagePath: string,\n' +
                  '  headerPath: string,\n' +
                  '  initialLength: number,\n' +
                  '  itemSize: number,\n' +
                  '  sortValueType: "number"|"string",\n' +
                  '  degree: number,\n' +
                  '  resizeRatio: number,\n' +
                  '  resizeFactor: number,\n' +
                  '}) -> Promise<>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 12, column: 4, offset: 279 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 12, column: 4, offset: 279 }
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
      '}) -> DiskHashTableClient\n' +
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
              '}) -> DiskHashTableClient',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 140 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 140 }
        }
      }
    },
    methods: [
      {
        name: 'clear',
        docs: '```specscript\n' +
          'module DiskHashTable "https://presidium.services/docs/DiskHashTable"\n' +
          '\n' +
          'clear DiskHashTable.clear\n' +
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
                value: 'module DiskHashTable "https://presidium.services/docs/DiskHashTable"\n' +
                  '\n' +
                  'clear DiskHashTable.clear',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 5, column: 4, offset: 113 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 113 }
            }
          }
        }
      },
      {
        name: 'set',
        docs: '```specscript\n' +
          'module DiskHashTable "https://presidium.services/docs/DiskHashTable"\n' +
          '\n' +
          'set DiskHashTable.set\n' +
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
                value: 'module DiskHashTable "https://presidium.services/docs/DiskHashTable"\n' +
                  '\n' +
                  'set DiskHashTable.set',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 5, column: 4, offset: 109 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 109 }
            }
          }
        }
      },
      {
        name: 'get',
        docs: '```specscript\n' +
          'module DiskHashTable "https://presidium.services/docs/DiskHashTable"\n' +
          '\n' +
          'get DiskHashTable.get\n' +
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
                value: 'module DiskHashTable "https://presidium.services/docs/DiskHashTable"\n' +
                  '\n' +
                  'get DiskHashTable.get',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 5, column: 4, offset: 109 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 109 }
            }
          }
        }
      },
      {
        name: 'getBinary',
        docs: '```specscript\n' +
          'module DiskHashTable "https://presidium.services/docs/DiskHashTable"\n' +
          '\n' +
          'getBinary DiskHashTable.getBinary\n' +
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
                value: 'module DiskHashTable "https://presidium.services/docs/DiskHashTable"\n' +
                  '\n' +
                  'getBinary DiskHashTable.getBinary',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 5, column: 4, offset: 121 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 121 }
            }
          }
        }
      },
      {
        name: 'delete',
        docs: '```specscript\n' +
          'module DiskHashTable "https://presidium.services/docs/DiskHashTable"\n' +
          '\n' +
          'delete DiskHashTable.delete\n' +
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
                value: 'module DiskHashTable "https://presidium.services/docs/DiskHashTable"\n' +
                  '\n' +
                  'delete DiskHashTable.delete',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 5, column: 4, offset: 115 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 115 }
            }
          }
        }
      },
      {
        name: 'count',
        docs: '```specscript\ncount() -> Promise<number>\n```',
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
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 44 }
            }
          }
        }
      },
      {
        name: 'iterator',
        docs: '```specscript\n' +
          'iterator(options {\n' +
          '  valueType: "string"|"binary",\n' +
          '}) -> values AsyncIterator<string|Buffer>\n' +
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
                value: 'iterator(options {\n' +
                  '  valueType: "string"|"binary",\n' +
                  '}) -> values AsyncIterator<string|Buffer>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 5, column: 4, offset: 110 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 110 }
            }
          }
        }
      },
      {
        name: 'entriesIterator',
        docs: '```specscript\n' +
          'entriesIterator(options {\n' +
          "  valueType: 'string'|'binary',\n" +
          '}) -> entries AsyncIterator<[key string, value string|Buffer]>\n' +
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
                value: 'entriesIterator(options {\n' +
                  "  valueType: 'string'|'binary',\n" +
                  '}) -> entries AsyncIterator<[key string, value string|Buffer]>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 5, column: 4, offset: 138 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 138 }
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
      '  sortValueType: "string"|"number",\n' +
      '  degree: number,\n' +
      '  delimiter: string,\n' +
      '}) -> DiskSortedHashTableClient\n' +
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
              '  sortValueType: "string"|"number",\n' +
              '  degree: number,\n' +
              '  delimiter: string,\n' +
              '}) -> DiskSortedHashTableClient',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 9, column: 4, offset: 206 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 206 }
        }
      }
    },
    methods: [
      {
        name: 'clear',
        docs: '```specscript\n' +
          'module DiskSortedHashTable "https://presidium.services/docs/DiskSortedHashTable"\n' +
          '\n' +
          'clear DiskSortedHashTable.clear\n' +
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
                value: 'module DiskSortedHashTable "https://presidium.services/docs/DiskSortedHashTable"\n' +
                  '\n' +
                  'clear DiskSortedHashTable.clear',
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
        }
      },
      {
        name: 'set',
        docs: '```specscript\n' +
          'module DiskSortedHashTable "https://presidium.services/docs/DiskSortedHashTable"\n' +
          '\n' +
          'set DiskSortedHashTable.set\n' +
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
                value: 'module DiskSortedHashTable "https://presidium.services/docs/DiskSortedHashTable"\n' +
                  '\n' +
                  'set DiskSortedHashTable.set',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 5, column: 4, offset: 127 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 127 }
            }
          }
        }
      },
      {
        name: 'get',
        docs: '```specscript\n' +
          'module DiskSortedHashTable "https://presidium.services/docs/DiskSortedHashTable"\n' +
          '\n' +
          'get DiskSortedHashTable.get\n' +
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
                value: 'module DiskSortedHashTable "https://presidium.services/docs/DiskSortedHashTable"\n' +
                  '\n' +
                  'get DiskSortedHashTable.get',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 5, column: 4, offset: 127 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 127 }
            }
          }
        }
      },
      {
        name: 'getBinary',
        docs: '```specscript\n' +
          'module DiskSortedHashTable "https://presidium.services/docs/DiskSortedHashTable"\n' +
          '\n' +
          'getBinary DiskSortedHashTable.getBinary\n' +
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
                value: 'module DiskSortedHashTable "https://presidium.services/docs/DiskSortedHashTable"\n' +
                  '\n' +
                  'getBinary DiskSortedHashTable.getBinary',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 5, column: 4, offset: 139 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 139 }
            }
          }
        }
      },
      {
        name: 'forwardIterator',
        docs: '```specscript\n' +
          'forwardIterator(options {\n' +
          '  exclusiveStartKey: string, \n' +
          '  startingSortValue: string|number,\n' +
          '  endingSortValue: string|number,\n' +
          "  valueType: 'string'|'binary',\n" +
          '}) -> values AsyncIterator<string|Buffer>\n' +
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
                  '  startingSortValue: string|number,\n' +
                  '  endingSortValue: string|number,\n' +
                  "  valueType: 'string'|'binary',\n" +
                  '}) -> values AsyncIterator<string|Buffer>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 8, column: 4, offset: 217 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 217 }
            }
          }
        }
      },
      {
        name: 'reverseIterator',
        docs: '```specscript\n' +
          'reverseIterator(options {\n' +
          '  exclusiveStartKey: string, \n' +
          '  startingSortValue: string|number,\n' +
          '  endingSortValue: string|number,\n' +
          "  valueType: 'string'|'binary',\n" +
          '}) -> values AsyncIterator<string|Buffer>\n' +
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
                  '  startingSortValue: string|number,\n' +
                  '  endingSortValue: string|number,\n' +
                  "  valueType: 'string'|'binary',\n" +
                  '}) -> values AsyncIterator<string|Buffer>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 8, column: 4, offset: 217 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 217 }
            }
          }
        }
      },
      {
        name: 'forwardEntriesIterator',
        docs: '```specscript\n' +
          'forwardEntriesIterator(options {\n' +
          '  exclusiveStartKey: string, \n' +
          '  startingSortValue: string|number,\n' +
          '  endingSortValue: string|number,\n' +
          "  valueType: 'string'|'binary',\n" +
          '}) -> values AsyncIterator<string|Buffer>\n' +
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
                value: 'forwardEntriesIterator(options {\n' +
                  '  exclusiveStartKey: string, \n' +
                  '  startingSortValue: string|number,\n' +
                  '  endingSortValue: string|number,\n' +
                  "  valueType: 'string'|'binary',\n" +
                  '}) -> values AsyncIterator<string|Buffer>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 8, column: 4, offset: 224 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 224 }
            }
          }
        }
      },
      {
        name: 'reverseEntriesIterator',
        docs: '```specscript\n' +
          'module DiskSortedHashTable "https://presidium.services/docs/DiskSortedHashTable"\n' +
          '\n' +
          'reverseEntriesIterator DiskSortedHashTable.reverseEntriesIterator\n' +
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
                value: 'module DiskSortedHashTable "https://presidium.services/docs/DiskSortedHashTable"\n' +
                  '\n' +
                  'reverseEntriesIterator DiskSortedHashTable.reverseEntriesIterator',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 5, column: 4, offset: 165 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 165 }
            }
          }
        }
      },
      {
        name: 'delete',
        docs: '```specscript\n' +
          'module DiskSortedHashTable "https://presidium.services/docs/DiskSortedHashTable"\n' +
          '\n' +
          'delete DiskSortedHashTable.delete\n' +
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
                value: 'module DiskSortedHashTable "https://presidium.services/docs/DiskSortedHashTable"\n' +
                  '\n' +
                  'delete DiskSortedHashTable.delete',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 5, column: 4, offset: 133 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 133 }
            }
          }
        }
      },
      {
        name: 'count',
        docs: '```specscript\ncount() -> Promise<number>\n```',
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
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 44 }
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
      '  sortValueType string\n' +
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
              '  sortValueType string\n' +
              ') -> Array<string, Buffer>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 16, column: 4, offset: 299 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 16, column: 4, offset: 299 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/buffersToEntry.js'
  },
  {
    name: 'getHt',
    docs: '```specscript\n' +
      'module HTTP "https://presidium.services/docs/HTTP"\n' +
      '\n' +
      'getHt(tableName string, request HTTP.Request) -> ht DiskHashTable|DiskSortedHashTable\n' +
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
                value: 'getHt',
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
            value: 'module HTTP "https://presidium.services/docs/HTTP"\n' +
              '\n' +
              'getHt(tableName string, request HTTP.Request) -> ht DiskHashTable|DiskSortedHashTable',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 155 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 155 }
        }
      }
    },
    methods: [
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
        }
      }
    ],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/databaseHandler.js'
  },
  {
    name: 'errorHandler',
    docs: '```specscript\n' +
      'module HTTP "https://presidium.services/docs/HTTP"\n' +
      '\n' +
      'errorHandler(error Error, request HTTP.Request, response HTTP.Response) -> ()\n' +
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
            lang: 'specscript',
            meta: null,
            value: 'module HTTP "https://presidium.services/docs/HTTP"\n' +
              '\n' +
              'errorHandler(error Error, request HTTP.Request, response HTTP.Response) -> ()',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 147 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 147 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-db-client-server/errorHandler.js'
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
  }
]