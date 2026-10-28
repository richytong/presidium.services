export default [
  {
    name: 'FileClient',
    docs: '```specscript\n' +
      'new FileClient(options {\n' +
      '  serverUrl: string,\n' +
      '}) -> FileClient\n' +
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
                value: 'FileClient',
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
            value: 'new FileClient(options {\n  serverUrl: string,\n}) -> FileClient',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 80 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 80 }
        }
      }
    },
    methods: [
      {
        name: 'write',
        docs: '```specscript\n' +
          'module stream "https://nodejs.org/api/stream.html"\n' +
          '\n' +
          'write(url string, fileStream stream.Readable, options {\n' +
          '  ContentType: string,\n' +
          '  ContentEncoding: string,\n' +
          '}) -> data Promise<{\n' +
          '  metadata: {\n' +
          '    Url: string,\n' +
          '    ContentLength: number,\n' +
          '    ContentType: string,\n' +
          '    ContentEncoding: string,\n' +
          '  },\n' +
          '}>\n' +
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
                    value: 'write',
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
                value: 'module stream "https://nodejs.org/api/stream.html"\n' +
                  '\n' +
                  'write(url string, fileStream stream.Readable, options {\n' +
                  '  ContentType: string,\n' +
                  '  ContentEncoding: string,\n' +
                  '}) -> data Promise<{\n' +
                  '  metadata: {\n' +
                  '    Url: string,\n' +
                  '    ContentLength: number,\n' +
                  '    ContentType: string,\n' +
                  '    ContentEncoding: string,\n' +
                  '  },\n' +
                  '}>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 15, column: 4, offset: 316 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 316 }
            }
          }
        }
      },
      {
        name: 'read',
        docs: '```specscript\n' +
          'module stream "https://nodejs.org/api/stream.html"\n' +
          '\n' +
          'read(url string) -> data Promise<{\n' +
          '  FileStream: stream.Readable,\n' +
          '  ContentLength: number,\n' +
          '  ContentType: string,\n' +
          '  ContentEncoding: string,\n' +
          '}>\n' +
          '\n' +
          'read(url string) -> Promise<undefined>\n' +
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
                    value: 'read',
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
                value: 'module stream "https://nodejs.org/api/stream.html"\n' +
                  '\n' +
                  'read(url string) -> data Promise<{\n' +
                  '  FileStream: stream.Readable,\n' +
                  '  ContentLength: number,\n' +
                  '  ContentType: string,\n' +
                  '  ContentEncoding: string,\n' +
                  '}>\n' +
                  '\n' +
                  'read(url string) -> Promise<undefined>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 12, column: 4, offset: 253 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 12, column: 4, offset: 253 }
            }
          }
        }
      },
      {
        name: 'delete',
        docs: '```specscript\n' +
          'module stream "https://nodejs.org/api/stream.html"\n' +
          '\n' +
          'delete(url string) -> didDelete Promise<boolean>\n' +
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
                value: 'module stream "https://nodejs.org/api/stream.html"\n' +
                  '\n' +
                  'delete(url string) -> didDelete Promise<boolean>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 5, column: 4, offset: 118 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 118 }
            }
          }
        }
      }
    ],
    fileName: '/home/richard/code/presidium.services/../presidium-file-client-server/FileClient.js'
  },
  {
    name: 'FileLoadBalancer',
    docs: '```specscript\n' +
      'module http "https://nodejs.org/api/http.html"\n' +
      '\n' +
      'type HttpHandler(http.ClientRequest, http.ServerResponse) -> Promise<>|undefined\n' +
      '\n' +
      'new FileLoadBalancer(options {\n' +
      '  serverIps: Array<string>|Array<Array<string>>,\n' +
      '}, ...handlers Arguments<HttpHandler>) -> FileLoadBalancer\n' +
      '\n' +
      'hash(fileUrl string, serverIpsLength number) -> serverIndex Promise|number\n' +
      '\n' +
      'new FileLoadBalancer(hash, options {\n' +
      '  serverIps: Array<string>|Array<Array<string>>,\n' +
      '}, ...handlers Arguments<HttpHandler>) -> FileLoadBalancer\n' +
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
                value: 'FileLoadBalancer',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 17, offset: 16 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 17, offset: 16 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 17, offset: 16 }
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
              'new FileLoadBalancer(options {\n' +
              '  serverIps: Array<string>|Array<Array<string>>,\n' +
              '}, ...handlers Arguments<HttpHandler>) -> FileLoadBalancer\n' +
              '\n' +
              'hash(fileUrl string, serverIpsLength number) -> serverIndex Promise|number\n' +
              '\n' +
              'new FileLoadBalancer(hash, options {\n' +
              '  serverIps: Array<string>|Array<Array<string>>,\n' +
              '}, ...handlers Arguments<HttpHandler>) -> FileLoadBalancer',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 508 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 15, column: 4, offset: 508 }
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
    fileName: '/home/richard/code/presidium.services/../presidium-file-client-server/FileLoadBalancer.js'
  },
  {
    name: 'FileServer',
    docs: '```specscript\n' +
      'module http "https://nodejs.org/api/http.html"\n' +
      '\n' +
      'type HttpHandler(request http.ClientRequest, response http.ServerResponse) -> ()\n' +
      '\n' +
      'new FileServer(options {\n' +
      '  dir: string,\n' +
      '  databasePath: string,\n' +
      '  metadataTableInitialLength: number,\n' +
      '  metadataTableItemSize: number,\n' +
      '}, ...handlers Array<HttpHandler>) -> FileServer\n' +
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
                value: 'FileServer',
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
            value: 'module http "https://nodejs.org/api/http.html"\n' +
              '\n' +
              'type HttpHandler(request http.ClientRequest, response http.ServerResponse) -> ()\n' +
              '\n' +
              'new FileServer(options {\n' +
              '  dir: string,\n' +
              '  databasePath: string,\n' +
              '  metadataTableInitialLength: number,\n' +
              '  metadataTableItemSize: number,\n' +
              '}, ...handlers Array<HttpHandler>) -> FileServer',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 12, column: 4, offset: 331 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 12, column: 4, offset: 331 }
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
      }
    ],
    fileName: '/home/richard/code/presidium.services/../presidium-file-client-server/FileServer.js'
  },
  {
    name: 'deleteFileHandler',
    docs: '```specscript\n' +
      'module http "https://nodejs.org/api/http.html"\n' +
      '\n' +
      'deleteFileHandler(request http.ClientRequest, response http.ServerResponse) -> Promise<>\n' +
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
                value: 'deleteFileHandler',
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
            value: 'module http "https://nodejs.org/api/http.html"\n' +
              '\n' +
              'deleteFileHandler(request http.ClientRequest, response http.ServerResponse) -> Promise<>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 154 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 154 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-file-client-server/deleteFileHandler.js'
  },
  {
    name: 'errorHandler',
    docs: '```coffeescript [specscript]\n' +
      'module http "https://nodejs.org/api/http.html"\n' +
      '\n' +
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
            value: 'module http "https://nodejs.org/api/http.html"\n' +
              '\n' +
              'errorHandler(\n' +
              '  error Error,\n' +
              '  request http.ClientRequest,\n' +
              '  response http.ServerResponse\n' +
              ') -> undefined',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 9, column: 4, offset: 185 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 185 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-file-client-server/errorHandler.js'
  },
  {
    name: 'healthCheckHandler',
    docs: '```coffeescript [specscript]\n' +
      'module http "https://nodejs.org/api/http.html"\n' +
      '\n' +
      'healthCheckHandler(\n' +
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
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'module http "https://nodejs.org/api/http.html"\n' +
              '\n' +
              'healthCheckHandler(\n' +
              '  request http.ClientRequest,\n' +
              '  response http.ServerResponse\n' +
              ') -> undefined',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 176 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 176 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-file-client-server/healthCheckHandler.js'
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
    fileName: '/home/richard/code/presidium.services/../presidium-file-client-server/loadBalancerHandler.js'
  },
  {
    name: 'notFoundHandler',
    docs: '```coffeescript [specscript]\n' +
      'module http "https://nodejs.org/api/http.html"\n' +
      '\n' +
      'notFoundHandler(\n' +
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
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'module http "https://nodejs.org/api/http.html"\n' +
              '\n' +
              'notFoundHandler(\n' +
              '  request http.ClientRequest,\n' +
              '  response http.ServerResponse\n' +
              ') -> undefined',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 173 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 173 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-file-client-server/notFoundHandler.js'
  },
  {
    name: 'optionsHandler',
    docs: '```coffeescript [specscript]\n' +
      'module http "https://nodejs.org/api/http.html"\n' +
      '\n' +
      'optionsHandler(\n' +
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
                value: 'optionsHandler',
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
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'module http "https://nodejs.org/api/http.html"\n' +
              '\n' +
              'optionsHandler(\n' +
              '  request http.ClientRequest,\n' +
              '  response http.ServerResponse\n' +
              ') -> undefined',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 172 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 172 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-file-client-server/optionsHandler.js'
  },
  {
    name: 'readFileHandler',
    docs: '```specscript\n' +
      'module http "https://nodejs.org/api/http.html"\n' +
      '\n' +
      'readFileHandler(request http.ClientRequest, response http.ServerResponse) -> Promise<>\n' +
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
                value: 'readFileHandler',
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
            value: 'module http "https://nodejs.org/api/http.html"\n' +
              '\n' +
              'readFileHandler(request http.ClientRequest, response http.ServerResponse) -> Promise<>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 152 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 152 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-file-client-server/readFileHandler.js'
  },
  {
    name: 'writeFileHandler',
    docs: '```specscript\n' +
      'module http "https://nodejs.org/api/http.html"\n' +
      '\n' +
      'writeFileHandler(request http.ClientRequest, response http.ServerResponse) -> Promise<>\n' +
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
                value: 'writeFileHandler',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 17, offset: 16 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 17, offset: 16 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 17, offset: 16 }
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
              'writeFileHandler(request http.ClientRequest, response http.ServerResponse) -> Promise<>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 153 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 153 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-file-client-server/writeFileHandler.js'
  }
]