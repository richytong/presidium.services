export default [
  {
    name: 'ServerWebSocket',
    docs: '```coffeescript [specscript]\n' +
      "module net 'https://nodejs.org/api/net.html'\n" +
      '\n' +
      'new ServerWebSocket(socket net.Socket, options {\n' +
      '  maxMessageLength: number\n' +
      '  socketBufferLength: number,\n' +
      '}) -> websocket ServerWebSocket\n' +
      '```\n' +
      '\n' +
      'Presidium ServerWebSocket class. Used by Presidium [WebSocketServer](/docs/WebSocketServer) and [WebSocketSecureServer](/docs/WebSocketSecureServer) classes.\n' +
      '\n' +
      'Arguments:\n' +
      "  * `socket` - an instance of a [Node.js net.Socket](https://nodejs.org/docs/latest-v24.x/api/net.html#class-netsocket). Represents the server's underlying TCP connection to the client.\n" +
      '  * `options`\n' +
      '    * `maxMessageLength` - the maximum length in bytes of sent messages. If a message is longer than `maxMessageLength`, it is split into fragmented messages that are reassembled by the receiver.\n' +
      '    * `socketBufferLength` - length in bytes of the internal buffer of the underlying [socket](https://nodejs.org/api/net.html#class-netsocket).\n' +
      '\n' +
      'Return:\n' +
      "  * `websocket` - a ServerWebSocket instance. Represents the server's WebSocket connection to the client.",
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'ServerWebSocket',
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
            value: "module net 'https://nodejs.org/api/net.html'\n" +
              '\n' +
              'new ServerWebSocket(socket net.Socket, options {\n' +
              '  maxMessageLength: number\n' +
              '  socketBufferLength: number,\n' +
              '}) -> websocket ServerWebSocket',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 216 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Presidium ServerWebSocket class. Used by Presidium ',
                position: {
                  start: { line: 10, column: 1, offset: 218 },
                  end: { line: 10, column: 52, offset: 269 }
                }
              },
              {
                type: 'link',
                title: null,
                url: '/docs/WebSocketServer',
                children: [
                  {
                    type: 'text',
                    value: 'WebSocketServer',
                    position: {
                      start: { line: 10, column: 53, offset: 270 },
                      end: { line: 10, column: 68, offset: 285 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 52, offset: 269 },
                  end: { line: 10, column: 92, offset: 309 }
                }
              },
              {
                type: 'text',
                value: ' and ',
                position: {
                  start: { line: 10, column: 92, offset: 309 },
                  end: { line: 10, column: 97, offset: 314 }
                }
              },
              {
                type: 'link',
                title: null,
                url: '/docs/WebSocketSecureServer',
                children: [
                  {
                    type: 'text',
                    value: 'WebSocketSecureServer',
                    position: {
                      start: { line: 10, column: 98, offset: 315 },
                      end: { line: 10, column: 119, offset: 336 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 97, offset: 314 },
                  end: { line: 10, column: 149, offset: 366 }
                }
              },
              {
                type: 'text',
                value: ' classes.',
                position: {
                  start: { line: 10, column: 149, offset: 366 },
                  end: { line: 10, column: 158, offset: 375 }
                }
              }
            ],
            position: {
              start: { line: 10, column: 1, offset: 218 },
              end: { line: 10, column: 158, offset: 375 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Arguments:',
                position: {
                  start: { line: 12, column: 1, offset: 377 },
                  end: { line: 12, column: 11, offset: 387 }
                }
              }
            ],
            position: {
              start: { line: 12, column: 1, offset: 377 },
              end: { line: 12, column: 11, offset: 387 }
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
                        value: 'socket',
                        position: {
                          start: { line: 13, column: 5, offset: 392 },
                          end: { line: 13, column: 13, offset: 400 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - an instance of a ',
                        position: {
                          start: { line: 13, column: 13, offset: 400 },
                          end: { line: 13, column: 33, offset: 420 }
                        }
                      },
                      {
                        type: 'link',
                        title: null,
                        url: 'https://nodejs.org/docs/latest-v24.x/api/net.html#class-netsocket',
                        children: [
                          {
                            type: 'text',
                            value: 'Node.js net.Socket',
                            position: {
                              start: { line: 13, column: 34, offset: 421 },
                              end: { line: 13, column: 52, offset: 439 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 13, column: 33, offset: 420 },
                          end: { line: 13, column: 120, offset: 507 }
                        }
                      },
                      {
                        type: 'text',
                        value: ". Represents the server's underlying TCP connection to the client.",
                        position: {
                          start: { line: 13, column: 120, offset: 507 },
                          end: { line: 13, column: 186, offset: 573 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 13, column: 5, offset: 392 },
                      end: { line: 13, column: 186, offset: 573 }
                    }
                  }
                ],
                position: {
                  start: { line: 13, column: 3, offset: 390 },
                  end: { line: 13, column: 186, offset: 573 }
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
                          start: { line: 14, column: 5, offset: 578 },
                          end: { line: 14, column: 14, offset: 587 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 14, column: 5, offset: 578 },
                      end: { line: 14, column: 14, offset: 587 }
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
                                value: 'maxMessageLength',
                                position: {
                                  start: { line: 15, column: 7, offset: 594 },
                                  end: { line: 15, column: 25, offset: 612 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the maximum length in bytes of sent messages. If a message is longer than ',
                                position: {
                                  start: { line: 15, column: 25, offset: 612 },
                                  end: {
                                    line: 15,
                                    column: 102,
                                    offset: 689
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'maxMessageLength',
                                position: {
                                  start: {
                                    line: 15,
                                    column: 102,
                                    offset: 689
                                  },
                                  end: {
                                    line: 15,
                                    column: 120,
                                    offset: 707
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ', it is split into fragmented messages that are reassembled by the receiver.',
                                position: {
                                  start: {
                                    line: 15,
                                    column: 120,
                                    offset: 707
                                  },
                                  end: {
                                    line: 15,
                                    column: 196,
                                    offset: 783
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 15, column: 7, offset: 594 },
                              end: { line: 15, column: 196, offset: 783 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 15, column: 5, offset: 592 },
                          end: { line: 15, column: 196, offset: 783 }
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
                                value: 'socketBufferLength',
                                position: {
                                  start: { line: 16, column: 7, offset: 790 },
                                  end: { line: 16, column: 27, offset: 810 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - length in bytes of the internal buffer of the underlying ',
                                position: {
                                  start: { line: 16, column: 27, offset: 810 },
                                  end: { line: 16, column: 87, offset: 870 }
                                }
                              },
                              {
                                type: 'link',
                                title: null,
                                url: 'https://nodejs.org/api/net.html#class-netsocket',
                                children: [
                                  {
                                    type: 'text',
                                    value: 'socket',
                                    position: {
                                      start: {
                                        line: 16,
                                        column: 88,
                                        offset: 871
                                      },
                                      end: {
                                        line: 16,
                                        column: 94,
                                        offset: 877
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 16, column: 87, offset: 870 },
                                  end: {
                                    line: 16,
                                    column: 144,
                                    offset: 927
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: '.',
                                position: {
                                  start: {
                                    line: 16,
                                    column: 144,
                                    offset: 927
                                  },
                                  end: {
                                    line: 16,
                                    column: 145,
                                    offset: 928
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 16, column: 7, offset: 790 },
                              end: { line: 16, column: 145, offset: 928 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 16, column: 5, offset: 788 },
                          end: { line: 16, column: 145, offset: 928 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 15, column: 5, offset: 592 },
                      end: { line: 16, column: 145, offset: 928 }
                    }
                  }
                ],
                position: {
                  start: { line: 14, column: 3, offset: 576 },
                  end: { line: 16, column: 145, offset: 928 }
                }
              }
            ],
            position: {
              start: { line: 13, column: 3, offset: 390 },
              end: { line: 16, column: 145, offset: 928 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Return:',
                position: {
                  start: { line: 18, column: 1, offset: 930 },
                  end: { line: 18, column: 8, offset: 937 }
                }
              }
            ],
            position: {
              start: { line: 18, column: 1, offset: 930 },
              end: { line: 18, column: 8, offset: 937 }
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
                        value: 'websocket',
                        position: {
                          start: { line: 19, column: 5, offset: 942 },
                          end: { line: 19, column: 16, offset: 953 }
                        }
                      },
                      {
                        type: 'text',
                        value: " - a ServerWebSocket instance. Represents the server's WebSocket connection to the client.",
                        position: {
                          start: { line: 19, column: 16, offset: 953 },
                          end: { line: 19, column: 106, offset: 1043 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 19, column: 5, offset: 942 },
                      end: { line: 19, column: 106, offset: 1043 }
                    }
                  }
                ],
                position: {
                  start: { line: 19, column: 3, offset: 940 },
                  end: { line: 19, column: 106, offset: 1043 }
                }
              }
            ],
            position: {
              start: { line: 19, column: 3, offset: 940 },
              end: { line: 19, column: 106, offset: 1043 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 19, column: 106, offset: 1043 }
        }
      }
    },
    methods: [
      {
        name: 'Event: open',
        docs: '```coffeescript [specscript]\n' +
          "emit('open')\n" +
          '```\n' +
          '\n' +
          'The `open` event. Emitted when the WebSocket connection is open.\n' +
          '\n' +
          'Event Data:\n' +
          '  * (none)\n' +
          '\n' +
          '```javascript\n' +
          "websocket.on('open', () => {\n" +
          "  console.log('Connection is open.')\n" +
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
                    value: 'Event: open',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: "emit('open')",
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 45 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'The ',
                    position: {
                      start: { line: 5, column: 1, offset: 47 },
                      end: { line: 5, column: 5, offset: 51 }
                    }
                  },
                  {
                    type: 'inlineCode',
                    value: 'open',
                    position: {
                      start: { line: 5, column: 5, offset: 51 },
                      end: { line: 5, column: 11, offset: 57 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' event. Emitted when the WebSocket connection is open.',
                    position: {
                      start: { line: 5, column: 11, offset: 57 },
                      end: { line: 5, column: 65, offset: 111 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 47 },
                  end: { line: 5, column: 65, offset: 111 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Event Data:',
                    position: {
                      start: { line: 7, column: 1, offset: 113 },
                      end: { line: 7, column: 12, offset: 124 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 113 },
                  end: { line: 7, column: 12, offset: 124 }
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
                              start: { line: 8, column: 5, offset: 129 },
                              end: { line: 8, column: 11, offset: 135 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 129 },
                          end: { line: 8, column: 11, offset: 135 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 127 },
                      end: { line: 8, column: 11, offset: 135 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 127 },
                  end: { line: 8, column: 11, offset: 135 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "websocket.on('open', () => {\n" +
                  "  console.log('Connection is open.')\n" +
                  '})',
                position: {
                  start: { line: 10, column: 1, offset: 137 },
                  end: { line: 14, column: 4, offset: 223 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 14, column: 4, offset: 223 }
            }
          }
        }
      },
      {
        name: 'Event: message',
        docs: '```coffeescript [specscript]\n' +
          "emit('message', message Buffer)\n" +
          '```\n' +
          '\n' +
          'The `message` event. Emitted upon receipt and successful decoding (and reassembly, if applicable) of an incoming message.\n' +
          '\n' +
          'Event Data:\n' +
          '  * `message` - a [Node.js buffer](https://nodejs.org/docs/latest-v24.x/api/buffer.html) of the received message.\n' +
          '\n' +
          '```javascript\n' +
          "websocket.on('message', message => {\n" +
          "  console.log('Message:', message.toString('utf8'))\n" +
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
                    value: 'Event: message',
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
                value: "emit('message', message Buffer)",
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 64 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'The ',
                    position: {
                      start: { line: 5, column: 1, offset: 66 },
                      end: { line: 5, column: 5, offset: 70 }
                    }
                  },
                  {
                    type: 'inlineCode',
                    value: 'message',
                    position: {
                      start: { line: 5, column: 5, offset: 70 },
                      end: { line: 5, column: 14, offset: 79 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' event. Emitted upon receipt and successful decoding (and reassembly, if applicable) of an incoming message.',
                    position: {
                      start: { line: 5, column: 14, offset: 79 },
                      end: { line: 5, column: 122, offset: 187 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 66 },
                  end: { line: 5, column: 122, offset: 187 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Event Data:',
                    position: {
                      start: { line: 7, column: 1, offset: 189 },
                      end: { line: 7, column: 12, offset: 200 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 189 },
                  end: { line: 7, column: 12, offset: 200 }
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
                            value: 'message',
                            position: {
                              start: { line: 8, column: 5, offset: 205 },
                              end: { line: 8, column: 14, offset: 214 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a ',
                            position: {
                              start: { line: 8, column: 14, offset: 214 },
                              end: { line: 8, column: 19, offset: 219 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/docs/latest-v24.x/api/buffer.html',
                            children: [
                              {
                                type: 'text',
                                value: 'Node.js buffer',
                                position: {
                                  start: { line: 8, column: 20, offset: 220 },
                                  end: { line: 8, column: 34, offset: 234 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 8, column: 19, offset: 219 },
                              end: { line: 8, column: 89, offset: 289 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' of the received message.',
                            position: {
                              start: { line: 8, column: 89, offset: 289 },
                              end: { line: 8, column: 114, offset: 314 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 205 },
                          end: { line: 8, column: 114, offset: 314 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 203 },
                      end: { line: 8, column: 114, offset: 314 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 203 },
                  end: { line: 8, column: 114, offset: 314 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "websocket.on('message', message => {\n" +
                  "  console.log('Message:', message.toString('utf8'))\n" +
                  '})',
                position: {
                  start: { line: 10, column: 1, offset: 316 },
                  end: { line: 14, column: 4, offset: 425 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 14, column: 4, offset: 425 }
            }
          }
        }
      },
      {
        name: 'Event: ping',
        docs: '```coffeescript [specscript]\n' +
          "emit('ping', payload Buffer)\n" +
          '```\n' +
          '\n' +
          'The `ping` event. Emitted upon receipt and successful decoding of an incoming "ping" message.\n' +
          '\n' +
          'Event Data:\n' +
          '  * `payload` - a [Node.js buffer](https://nodejs.org/docs/latest-v24.x/api/buffer.html) of the received payload.\n' +
          '\n' +
          '```javascript\n' +
          "websocket.on('ping', () => {\n" +
          "  console.log('Ping')\n" +
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
                    value: 'Event: ping',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: "emit('ping', payload Buffer)",
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 61 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'The ',
                    position: {
                      start: { line: 5, column: 1, offset: 63 },
                      end: { line: 5, column: 5, offset: 67 }
                    }
                  },
                  {
                    type: 'inlineCode',
                    value: 'ping',
                    position: {
                      start: { line: 5, column: 5, offset: 67 },
                      end: { line: 5, column: 11, offset: 73 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' event. Emitted upon receipt and successful decoding of an incoming "ping" message.',
                    position: {
                      start: { line: 5, column: 11, offset: 73 },
                      end: { line: 5, column: 94, offset: 156 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 63 },
                  end: { line: 5, column: 94, offset: 156 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Event Data:',
                    position: {
                      start: { line: 7, column: 1, offset: 158 },
                      end: { line: 7, column: 12, offset: 169 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 158 },
                  end: { line: 7, column: 12, offset: 169 }
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
                            value: 'payload',
                            position: {
                              start: { line: 8, column: 5, offset: 174 },
                              end: { line: 8, column: 14, offset: 183 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a ',
                            position: {
                              start: { line: 8, column: 14, offset: 183 },
                              end: { line: 8, column: 19, offset: 188 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/docs/latest-v24.x/api/buffer.html',
                            children: [
                              {
                                type: 'text',
                                value: 'Node.js buffer',
                                position: {
                                  start: { line: 8, column: 20, offset: 189 },
                                  end: { line: 8, column: 34, offset: 203 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 8, column: 19, offset: 188 },
                              end: { line: 8, column: 89, offset: 258 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' of the received payload.',
                            position: {
                              start: { line: 8, column: 89, offset: 258 },
                              end: { line: 8, column: 114, offset: 283 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 174 },
                          end: { line: 8, column: 114, offset: 283 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 172 },
                      end: { line: 8, column: 114, offset: 283 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 172 },
                  end: { line: 8, column: 114, offset: 283 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "websocket.on('ping', () => {\n  console.log('Ping')\n})",
                position: {
                  start: { line: 10, column: 1, offset: 285 },
                  end: { line: 14, column: 4, offset: 356 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 14, column: 4, offset: 356 }
            }
          }
        }
      },
      {
        name: 'Event: pong',
        docs: '```coffeescript [specscript]\n' +
          "emit('pong', payload Buffer)\n" +
          '```\n' +
          '\n' +
          'The `pong` event. Emitted upon receipt and successful decoding of an incoming "pong" message.\n' +
          '\n' +
          'Event Data:\n' +
          '  * `payload` - a [Node.js buffer](https://nodejs.org/docs/latest-v24.x/api/buffer.html) of the received payload.\n' +
          '\n' +
          '```javascript\n' +
          "websocket.on('pong', () => {\n" +
          "  console.log('Pong')\n" +
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
                    value: 'Event: pong',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: "emit('pong', payload Buffer)",
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 61 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'The ',
                    position: {
                      start: { line: 5, column: 1, offset: 63 },
                      end: { line: 5, column: 5, offset: 67 }
                    }
                  },
                  {
                    type: 'inlineCode',
                    value: 'pong',
                    position: {
                      start: { line: 5, column: 5, offset: 67 },
                      end: { line: 5, column: 11, offset: 73 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' event. Emitted upon receipt and successful decoding of an incoming "pong" message.',
                    position: {
                      start: { line: 5, column: 11, offset: 73 },
                      end: { line: 5, column: 94, offset: 156 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 63 },
                  end: { line: 5, column: 94, offset: 156 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Event Data:',
                    position: {
                      start: { line: 7, column: 1, offset: 158 },
                      end: { line: 7, column: 12, offset: 169 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 158 },
                  end: { line: 7, column: 12, offset: 169 }
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
                            value: 'payload',
                            position: {
                              start: { line: 8, column: 5, offset: 174 },
                              end: { line: 8, column: 14, offset: 183 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a ',
                            position: {
                              start: { line: 8, column: 14, offset: 183 },
                              end: { line: 8, column: 19, offset: 188 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/docs/latest-v24.x/api/buffer.html',
                            children: [
                              {
                                type: 'text',
                                value: 'Node.js buffer',
                                position: {
                                  start: { line: 8, column: 20, offset: 189 },
                                  end: { line: 8, column: 34, offset: 203 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 8, column: 19, offset: 188 },
                              end: { line: 8, column: 89, offset: 258 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' of the received payload.',
                            position: {
                              start: { line: 8, column: 89, offset: 258 },
                              end: { line: 8, column: 114, offset: 283 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 174 },
                          end: { line: 8, column: 114, offset: 283 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 172 },
                      end: { line: 8, column: 114, offset: 283 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 172 },
                  end: { line: 8, column: 114, offset: 283 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "websocket.on('pong', () => {\n  console.log('Pong')\n})",
                position: {
                  start: { line: 10, column: 1, offset: 285 },
                  end: { line: 14, column: 4, offset: 356 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 14, column: 4, offset: 356 }
            }
          }
        }
      },
      {
        name: 'Event: error',
        docs: '```coffeescript [specscript]\n' +
          "emit('error', error Error)\n" +
          '```\n' +
          '\n' +
          'The `error` event. Emitted if an error occurs on the ServerWebSocket instance or on its underlying [socket](https://nodejs.org/api/net.html#class-netsocket).\n' +
          '\n' +
          'Event Data:\n' +
          '  * `error` - an instance of a JavaScript [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error).\n' +
          '\n' +
          '```javascript\n' +
          "websocket.on('error', error => {\n" +
          "  console.error('Error:', error)\n" +
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
                    value: 'Event: error',
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
                value: "emit('error', error Error)",
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 59 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'The ',
                    position: {
                      start: { line: 5, column: 1, offset: 61 },
                      end: { line: 5, column: 5, offset: 65 }
                    }
                  },
                  {
                    type: 'inlineCode',
                    value: 'error',
                    position: {
                      start: { line: 5, column: 5, offset: 65 },
                      end: { line: 5, column: 12, offset: 72 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' event. Emitted if an error occurs on the ServerWebSocket instance or on its underlying ',
                    position: {
                      start: { line: 5, column: 12, offset: 72 },
                      end: { line: 5, column: 100, offset: 160 }
                    }
                  },
                  {
                    type: 'link',
                    title: null,
                    url: 'https://nodejs.org/api/net.html#class-netsocket',
                    children: [
                      {
                        type: 'text',
                        value: 'socket',
                        position: {
                          start: { line: 5, column: 101, offset: 161 },
                          end: { line: 5, column: 107, offset: 167 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 5, column: 100, offset: 160 },
                      end: { line: 5, column: 157, offset: 217 }
                    }
                  },
                  {
                    type: 'text',
                    value: '.',
                    position: {
                      start: { line: 5, column: 157, offset: 217 },
                      end: { line: 5, column: 158, offset: 218 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 61 },
                  end: { line: 5, column: 158, offset: 218 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Event Data:',
                    position: {
                      start: { line: 7, column: 1, offset: 220 },
                      end: { line: 7, column: 12, offset: 231 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 220 },
                  end: { line: 7, column: 12, offset: 231 }
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
                            value: 'error',
                            position: {
                              start: { line: 8, column: 5, offset: 236 },
                              end: { line: 8, column: 12, offset: 243 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an instance of a JavaScript ',
                            position: {
                              start: { line: 8, column: 12, offset: 243 },
                              end: { line: 8, column: 43, offset: 274 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error',
                            children: [
                              {
                                type: 'text',
                                value: 'Error',
                                position: {
                                  start: { line: 8, column: 44, offset: 275 },
                                  end: { line: 8, column: 49, offset: 280 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 8, column: 43, offset: 274 },
                              end: { line: 8, column: 138, offset: 369 }
                            }
                          },
                          {
                            type: 'text',
                            value: '.',
                            position: {
                              start: { line: 8, column: 138, offset: 369 },
                              end: { line: 8, column: 139, offset: 370 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 236 },
                          end: { line: 8, column: 139, offset: 370 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 234 },
                      end: { line: 8, column: 139, offset: 370 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 234 },
                  end: { line: 8, column: 139, offset: 370 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "websocket.on('error', error => {\n" +
                  "  console.error('Error:', error)\n" +
                  '})',
                position: {
                  start: { line: 10, column: 1, offset: 372 },
                  end: { line: 14, column: 4, offset: 458 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 14, column: 4, offset: 458 }
            }
          }
        }
      },
      {
        name: 'Event: close',
        docs: '```coffeescript [specscript]\n' +
          "emit('close')\n" +
          '```\n' +
          '\n' +
          'The `close` event. Emitted when the underlying [socket](https://nodejs.org/api/net.html#class-netsocket) is destroyed.\n' +
          '\n' +
          'Event Data:\n' +
          '  * (none)\n' +
          '\n' +
          '```javascript\n' +
          "websocket.on('close', () => {\n" +
          "  console.log('Connection is closed.')\n" +
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
                    value: 'Event: close',
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
                value: "emit('close')",
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 46 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'The ',
                    position: {
                      start: { line: 5, column: 1, offset: 48 },
                      end: { line: 5, column: 5, offset: 52 }
                    }
                  },
                  {
                    type: 'inlineCode',
                    value: 'close',
                    position: {
                      start: { line: 5, column: 5, offset: 52 },
                      end: { line: 5, column: 12, offset: 59 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' event. Emitted when the underlying ',
                    position: {
                      start: { line: 5, column: 12, offset: 59 },
                      end: { line: 5, column: 48, offset: 95 }
                    }
                  },
                  {
                    type: 'link',
                    title: null,
                    url: 'https://nodejs.org/api/net.html#class-netsocket',
                    children: [
                      {
                        type: 'text',
                        value: 'socket',
                        position: {
                          start: { line: 5, column: 49, offset: 96 },
                          end: { line: 5, column: 55, offset: 102 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 5, column: 48, offset: 95 },
                      end: { line: 5, column: 105, offset: 152 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' is destroyed.',
                    position: {
                      start: { line: 5, column: 105, offset: 152 },
                      end: { line: 5, column: 119, offset: 166 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 48 },
                  end: { line: 5, column: 119, offset: 166 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Event Data:',
                    position: {
                      start: { line: 7, column: 1, offset: 168 },
                      end: { line: 7, column: 12, offset: 179 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 168 },
                  end: { line: 7, column: 12, offset: 179 }
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
                              start: { line: 8, column: 5, offset: 184 },
                              end: { line: 8, column: 11, offset: 190 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 184 },
                          end: { line: 8, column: 11, offset: 190 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 182 },
                      end: { line: 8, column: 11, offset: 190 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 182 },
                  end: { line: 8, column: 11, offset: 190 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "websocket.on('close', () => {\n" +
                  "  console.log('Connection is closed.')\n" +
                  '})',
                position: {
                  start: { line: 10, column: 1, offset: 192 },
                  end: { line: 14, column: 4, offset: 281 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 14, column: 4, offset: 281 }
            }
          }
        }
      },
      {
        name: 'connect',
        docs: '```coffeescript [specscript]\n' +
          'websocket.connect() -> undefined\n' +
          '```\n' +
          '\n' +
          'Throws an error.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none)\n' +
          '\n' +
          'Return:\n' +
          '  * undefined\n' +
          '\n' +
          '```javascript\n' +
          'websocket.connect()\n' +
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
                    value: 'connect',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 8, offset: 7 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 8, offset: 7 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'websocket.connect() -> undefined',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 65 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Throws an error.',
                    position: {
                      start: { line: 5, column: 1, offset: 67 },
                      end: { line: 5, column: 17, offset: 83 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 67 },
                  end: { line: 5, column: 17, offset: 83 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 85 },
                      end: { line: 7, column: 11, offset: 95 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 85 },
                  end: { line: 7, column: 11, offset: 95 }
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
                              start: { line: 8, column: 5, offset: 100 },
                              end: { line: 8, column: 11, offset: 106 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 100 },
                          end: { line: 8, column: 11, offset: 106 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 98 },
                      end: { line: 8, column: 11, offset: 106 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 98 },
                  end: { line: 8, column: 11, offset: 106 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 108 },
                      end: { line: 10, column: 8, offset: 115 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 108 },
                  end: { line: 10, column: 8, offset: 115 }
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
                            value: 'undefined',
                            position: {
                              start: { line: 11, column: 5, offset: 120 },
                              end: { line: 11, column: 14, offset: 129 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 120 },
                          end: { line: 11, column: 14, offset: 129 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 118 },
                      end: { line: 11, column: 14, offset: 129 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 118 },
                  end: { line: 11, column: 14, offset: 129 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'websocket.connect()',
                position: {
                  start: { line: 13, column: 1, offset: 131 },
                  end: { line: 15, column: 4, offset: 168 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 168 }
            }
          }
        }
      },
      {
        name: 'send',
        docs: '```coffeescript [specscript]\n' +
          'websocket.send(payload Buffer|string) -> ()\n' +
          '```\n' +
          '\n' +
          'Sends a message to the client.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `message` - a [Node.js buffer](https://nodejs.org/docs/latest-v24.x/api/buffer.html) or string of the message to send.\n' +
          '\n' +
          'Return:\n' +
          '  * undefined\n' +
          '\n' +
          '```javascript\n' +
          "websocket.send('Example')\n" +
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
                    value: 'send',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'websocket.send(payload Buffer|string) -> ()',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 76 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Sends a message to the client.',
                    position: {
                      start: { line: 5, column: 1, offset: 78 },
                      end: { line: 5, column: 31, offset: 108 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 78 },
                  end: { line: 5, column: 31, offset: 108 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 110 },
                      end: { line: 7, column: 11, offset: 120 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 110 },
                  end: { line: 7, column: 11, offset: 120 }
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
                            value: 'message',
                            position: {
                              start: { line: 8, column: 5, offset: 125 },
                              end: { line: 8, column: 14, offset: 134 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a ',
                            position: {
                              start: { line: 8, column: 14, offset: 134 },
                              end: { line: 8, column: 19, offset: 139 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/docs/latest-v24.x/api/buffer.html',
                            children: [
                              {
                                type: 'text',
                                value: 'Node.js buffer',
                                position: {
                                  start: { line: 8, column: 20, offset: 140 },
                                  end: { line: 8, column: 34, offset: 154 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 8, column: 19, offset: 139 },
                              end: { line: 8, column: 89, offset: 209 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' or string of the message to send.',
                            position: {
                              start: { line: 8, column: 89, offset: 209 },
                              end: { line: 8, column: 123, offset: 243 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 125 },
                          end: { line: 8, column: 123, offset: 243 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 123 },
                      end: { line: 8, column: 123, offset: 243 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 123 },
                  end: { line: 8, column: 123, offset: 243 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 245 },
                      end: { line: 10, column: 8, offset: 252 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 245 },
                  end: { line: 10, column: 8, offset: 252 }
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
                            value: 'undefined',
                            position: {
                              start: { line: 11, column: 5, offset: 257 },
                              end: { line: 11, column: 14, offset: 266 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 257 },
                          end: { line: 11, column: 14, offset: 266 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 255 },
                      end: { line: 11, column: 14, offset: 266 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 255 },
                  end: { line: 11, column: 14, offset: 266 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "websocket.send('Example')",
                position: {
                  start: { line: 13, column: 1, offset: 268 },
                  end: { line: 15, column: 4, offset: 311 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 311 }
            }
          }
        }
      },
      {
        name: 'sendClose',
        docs: '```coffeescript [specscript]\n' +
          'websocket.sendClose() -> undefined\n' +
          'websocket.sendClose(payload Buffer|string) -> undefined\n' +
          '```\n' +
          '\n' +
          'Sends a close frame to the client.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `payload` - a [Node.js buffer](https://nodejs.org/docs/latest-v24.x/api/buffer.html) or string of the payload to send.\n' +
          '\n' +
          'Return:\n' +
          '  * undefined\n' +
          '\n' +
          '```javascript\n' +
          'websocket.sendClose()\n' +
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
                    value: 'sendClose',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'websocket.sendClose() -> undefined\n' +
                  'websocket.sendClose(payload Buffer|string) -> undefined',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 4, column: 4, offset: 123 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Sends a close frame to the client.',
                    position: {
                      start: { line: 6, column: 1, offset: 125 },
                      end: { line: 6, column: 35, offset: 159 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 1, offset: 125 },
                  end: { line: 6, column: 35, offset: 159 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 8, column: 1, offset: 161 },
                      end: { line: 8, column: 11, offset: 171 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 1, offset: 161 },
                  end: { line: 8, column: 11, offset: 171 }
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
                            value: 'payload',
                            position: {
                              start: { line: 9, column: 5, offset: 176 },
                              end: { line: 9, column: 14, offset: 185 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a ',
                            position: {
                              start: { line: 9, column: 14, offset: 185 },
                              end: { line: 9, column: 19, offset: 190 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/docs/latest-v24.x/api/buffer.html',
                            children: [
                              {
                                type: 'text',
                                value: 'Node.js buffer',
                                position: {
                                  start: { line: 9, column: 20, offset: 191 },
                                  end: { line: 9, column: 34, offset: 205 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 9, column: 19, offset: 190 },
                              end: { line: 9, column: 89, offset: 260 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' or string of the payload to send.',
                            position: {
                              start: { line: 9, column: 89, offset: 260 },
                              end: { line: 9, column: 123, offset: 294 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 9, column: 5, offset: 176 },
                          end: { line: 9, column: 123, offset: 294 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 3, offset: 174 },
                      end: { line: 9, column: 123, offset: 294 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 3, offset: 174 },
                  end: { line: 9, column: 123, offset: 294 }
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
                            value: 'undefined',
                            position: {
                              start: { line: 12, column: 5, offset: 308 },
                              end: { line: 12, column: 14, offset: 317 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 308 },
                          end: { line: 12, column: 14, offset: 317 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 306 },
                      end: { line: 12, column: 14, offset: 317 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 306 },
                  end: { line: 12, column: 14, offset: 317 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'websocket.sendClose()',
                position: {
                  start: { line: 14, column: 1, offset: 319 },
                  end: { line: 16, column: 4, offset: 358 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 16, column: 4, offset: 358 }
            }
          }
        }
      },
      {
        name: 'sendPing',
        docs: '```coffeescript [specscript]\n' +
          'websocket.sendPing() -> undefined\n' +
          'websocket.sendPing(payload Buffer|string) -> undefined\n' +
          '```\n' +
          '\n' +
          'Sends a ping frame to the client.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `payload` - a [Node.js buffer](https://nodejs.org/docs/latest-v24.x/api/buffer.html) or string of the payload to send.\n' +
          '\n' +
          'Return:\n' +
          '  * undefined\n' +
          '\n' +
          '```javascript\n' +
          'websocket.sendPing()\n' +
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
                    value: 'sendPing',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'websocket.sendPing() -> undefined\n' +
                  'websocket.sendPing(payload Buffer|string) -> undefined',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 4, column: 4, offset: 121 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Sends a ping frame to the client.',
                    position: {
                      start: { line: 6, column: 1, offset: 123 },
                      end: { line: 6, column: 34, offset: 156 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 1, offset: 123 },
                  end: { line: 6, column: 34, offset: 156 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 8, column: 1, offset: 158 },
                      end: { line: 8, column: 11, offset: 168 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 1, offset: 158 },
                  end: { line: 8, column: 11, offset: 168 }
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
                            value: 'payload',
                            position: {
                              start: { line: 9, column: 5, offset: 173 },
                              end: { line: 9, column: 14, offset: 182 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a ',
                            position: {
                              start: { line: 9, column: 14, offset: 182 },
                              end: { line: 9, column: 19, offset: 187 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/docs/latest-v24.x/api/buffer.html',
                            children: [
                              {
                                type: 'text',
                                value: 'Node.js buffer',
                                position: {
                                  start: { line: 9, column: 20, offset: 188 },
                                  end: { line: 9, column: 34, offset: 202 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 9, column: 19, offset: 187 },
                              end: { line: 9, column: 89, offset: 257 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' or string of the payload to send.',
                            position: {
                              start: { line: 9, column: 89, offset: 257 },
                              end: { line: 9, column: 123, offset: 291 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 9, column: 5, offset: 173 },
                          end: { line: 9, column: 123, offset: 291 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 3, offset: 171 },
                      end: { line: 9, column: 123, offset: 291 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 3, offset: 171 },
                  end: { line: 9, column: 123, offset: 291 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 11, column: 1, offset: 293 },
                      end: { line: 11, column: 8, offset: 300 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 293 },
                  end: { line: 11, column: 8, offset: 300 }
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
                            value: 'undefined',
                            position: {
                              start: { line: 12, column: 5, offset: 305 },
                              end: { line: 12, column: 14, offset: 314 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 305 },
                          end: { line: 12, column: 14, offset: 314 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 303 },
                      end: { line: 12, column: 14, offset: 314 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 303 },
                  end: { line: 12, column: 14, offset: 314 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'websocket.sendPing()',
                position: {
                  start: { line: 14, column: 1, offset: 316 },
                  end: { line: 16, column: 4, offset: 354 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 16, column: 4, offset: 354 }
            }
          }
        }
      },
      {
        name: 'sendPong',
        docs: '```coffeescript [specscript]\n' +
          'websocket.sendPong() -> undefined\n' +
          'websocket.sendPong(payload Buffer|string) -> undefined\n' +
          '```\n' +
          '\n' +
          'Sends a pong frame to the client.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `payload` - a [Node.js buffer](https://nodejs.org/docs/latest-v24.x/api/buffer.html) or string of the payload to send.\n' +
          '\n' +
          'Return:\n' +
          '  * undefined\n' +
          '\n' +
          '```javascript\n' +
          'websocket.sendPong()\n' +
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
                    value: 'sendPong',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'websocket.sendPong() -> undefined\n' +
                  'websocket.sendPong(payload Buffer|string) -> undefined',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 4, column: 4, offset: 121 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Sends a pong frame to the client.',
                    position: {
                      start: { line: 6, column: 1, offset: 123 },
                      end: { line: 6, column: 34, offset: 156 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 1, offset: 123 },
                  end: { line: 6, column: 34, offset: 156 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 8, column: 1, offset: 158 },
                      end: { line: 8, column: 11, offset: 168 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 1, offset: 158 },
                  end: { line: 8, column: 11, offset: 168 }
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
                            value: 'payload',
                            position: {
                              start: { line: 9, column: 5, offset: 173 },
                              end: { line: 9, column: 14, offset: 182 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a ',
                            position: {
                              start: { line: 9, column: 14, offset: 182 },
                              end: { line: 9, column: 19, offset: 187 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/docs/latest-v24.x/api/buffer.html',
                            children: [
                              {
                                type: 'text',
                                value: 'Node.js buffer',
                                position: {
                                  start: { line: 9, column: 20, offset: 188 },
                                  end: { line: 9, column: 34, offset: 202 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 9, column: 19, offset: 187 },
                              end: { line: 9, column: 89, offset: 257 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' or string of the payload to send.',
                            position: {
                              start: { line: 9, column: 89, offset: 257 },
                              end: { line: 9, column: 123, offset: 291 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 9, column: 5, offset: 173 },
                          end: { line: 9, column: 123, offset: 291 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 3, offset: 171 },
                      end: { line: 9, column: 123, offset: 291 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 3, offset: 171 },
                  end: { line: 9, column: 123, offset: 291 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 11, column: 1, offset: 293 },
                      end: { line: 11, column: 8, offset: 300 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 293 },
                  end: { line: 11, column: 8, offset: 300 }
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
                            value: 'undefined',
                            position: {
                              start: { line: 12, column: 5, offset: 305 },
                              end: { line: 12, column: 14, offset: 314 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 305 },
                          end: { line: 12, column: 14, offset: 314 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 303 },
                      end: { line: 12, column: 14, offset: 314 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 303 },
                  end: { line: 12, column: 14, offset: 314 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'websocket.sendPong()',
                position: {
                  start: { line: 14, column: 1, offset: 316 },
                  end: { line: 16, column: 4, offset: 354 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 16, column: 4, offset: 354 }
            }
          }
        }
      },
      {
        name: 'close',
        docs: '```coffeescript [specscript]\n' +
          'websocket.close() -> undefined\n' +
          'websocket.close(payload Buffer|string) -> undefined\n' +
          '```\n' +
          '\n' +
          'Closes the connection to the client.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `payload` - a [Node.js buffer](https://nodejs.org/docs/latest-v24.x/api/buffer.html) or string of the payload to send.\n' +
          '\n' +
          'Return:\n' +
          '  * undefined\n' +
          '\n' +
          '```javascript\n' +
          'websocket.close()\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'websocket.close() -> undefined\n' +
                  'websocket.close(payload Buffer|string) -> undefined',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 4, column: 4, offset: 115 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Closes the connection to the client.',
                    position: {
                      start: { line: 6, column: 1, offset: 117 },
                      end: { line: 6, column: 37, offset: 153 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 1, offset: 117 },
                  end: { line: 6, column: 37, offset: 153 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 8, column: 1, offset: 155 },
                      end: { line: 8, column: 11, offset: 165 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 1, offset: 155 },
                  end: { line: 8, column: 11, offset: 165 }
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
                            value: 'payload',
                            position: {
                              start: { line: 9, column: 5, offset: 170 },
                              end: { line: 9, column: 14, offset: 179 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a ',
                            position: {
                              start: { line: 9, column: 14, offset: 179 },
                              end: { line: 9, column: 19, offset: 184 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/docs/latest-v24.x/api/buffer.html',
                            children: [
                              {
                                type: 'text',
                                value: 'Node.js buffer',
                                position: {
                                  start: { line: 9, column: 20, offset: 185 },
                                  end: { line: 9, column: 34, offset: 199 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 9, column: 19, offset: 184 },
                              end: { line: 9, column: 89, offset: 254 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' or string of the payload to send.',
                            position: {
                              start: { line: 9, column: 89, offset: 254 },
                              end: { line: 9, column: 123, offset: 288 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 9, column: 5, offset: 170 },
                          end: { line: 9, column: 123, offset: 288 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 3, offset: 168 },
                      end: { line: 9, column: 123, offset: 288 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 3, offset: 168 },
                  end: { line: 9, column: 123, offset: 288 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 11, column: 1, offset: 290 },
                      end: { line: 11, column: 8, offset: 297 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 290 },
                  end: { line: 11, column: 8, offset: 297 }
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
                            value: 'undefined',
                            position: {
                              start: { line: 12, column: 5, offset: 302 },
                              end: { line: 12, column: 14, offset: 311 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 302 },
                          end: { line: 12, column: 14, offset: 311 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 300 },
                      end: { line: 12, column: 14, offset: 311 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 300 },
                  end: { line: 12, column: 14, offset: 311 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'websocket.close()',
                position: {
                  start: { line: 14, column: 1, offset: 313 },
                  end: { line: 16, column: 4, offset: 348 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 16, column: 4, offset: 348 }
            }
          }
        }
      },
      {
        name: 'destroy',
        docs: '```coffeescript [specscript]\n' +
          'websocket.destroy() -> undefined\n' +
          'websocket.destroy(payload Buffer|string) -> undefined\n' +
          '```\n' +
          '\n' +
          'Destroys the underlying [socket](https://nodejs.org/api/net.html#class-netsocket).\n' +
          '\n' +
          'Arguments:\n' +
          '  * `payload` - a [Node.js buffer](https://nodejs.org/docs/latest-v24.x/api/buffer.html) or string of the payload to send.\n' +
          '\n' +
          'Return:\n' +
          '  * undefined\n' +
          '\n' +
          '```javascript\n' +
          'websocket.destroy()\n' +
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
                    value: 'destroy',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 8, offset: 7 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 8, offset: 7 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'websocket.destroy() -> undefined\n' +
                  'websocket.destroy(payload Buffer|string) -> undefined',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 4, column: 4, offset: 119 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Destroys the underlying ',
                    position: {
                      start: { line: 6, column: 1, offset: 121 },
                      end: { line: 6, column: 25, offset: 145 }
                    }
                  },
                  {
                    type: 'link',
                    title: null,
                    url: 'https://nodejs.org/api/net.html#class-netsocket',
                    children: [
                      {
                        type: 'text',
                        value: 'socket',
                        position: {
                          start: { line: 6, column: 26, offset: 146 },
                          end: { line: 6, column: 32, offset: 152 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 6, column: 25, offset: 145 },
                      end: { line: 6, column: 82, offset: 202 }
                    }
                  },
                  {
                    type: 'text',
                    value: '.',
                    position: {
                      start: { line: 6, column: 82, offset: 202 },
                      end: { line: 6, column: 83, offset: 203 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 1, offset: 121 },
                  end: { line: 6, column: 83, offset: 203 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 8, column: 1, offset: 205 },
                      end: { line: 8, column: 11, offset: 215 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 1, offset: 205 },
                  end: { line: 8, column: 11, offset: 215 }
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
                            value: 'payload',
                            position: {
                              start: { line: 9, column: 5, offset: 220 },
                              end: { line: 9, column: 14, offset: 229 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a ',
                            position: {
                              start: { line: 9, column: 14, offset: 229 },
                              end: { line: 9, column: 19, offset: 234 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/docs/latest-v24.x/api/buffer.html',
                            children: [
                              {
                                type: 'text',
                                value: 'Node.js buffer',
                                position: {
                                  start: { line: 9, column: 20, offset: 235 },
                                  end: { line: 9, column: 34, offset: 249 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 9, column: 19, offset: 234 },
                              end: { line: 9, column: 89, offset: 304 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' or string of the payload to send.',
                            position: {
                              start: { line: 9, column: 89, offset: 304 },
                              end: { line: 9, column: 123, offset: 338 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 9, column: 5, offset: 220 },
                          end: { line: 9, column: 123, offset: 338 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 3, offset: 218 },
                      end: { line: 9, column: 123, offset: 338 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 3, offset: 218 },
                  end: { line: 9, column: 123, offset: 338 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 11, column: 1, offset: 340 },
                      end: { line: 11, column: 8, offset: 347 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 340 },
                  end: { line: 11, column: 8, offset: 347 }
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
                            value: 'undefined',
                            position: {
                              start: { line: 12, column: 5, offset: 352 },
                              end: { line: 12, column: 14, offset: 361 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 352 },
                          end: { line: 12, column: 14, offset: 361 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 350 },
                      end: { line: 12, column: 14, offset: 361 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 350 },
                  end: { line: 12, column: 14, offset: 361 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'websocket.destroy()',
                position: {
                  start: { line: 14, column: 1, offset: 363 },
                  end: { line: 16, column: 4, offset: 400 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 16, column: 4, offset: 400 }
            }
          }
        }
      }
    ],
    fileName: '/home/richard/code/presidium.services/../presidium-websocket/ServerWebSocket.js'
  },
  {
    name: 'WebSocket',
    docs: '```coffeescript [specscript]\n' +
      'new WebSocket(url string) -> websocket WebSocket\n' +
      '\n' +
      'new WebSocket(url string, options {\n' +
      '  rejectUnauthorized: boolean,\n' +
      '  autoConnect: boolean,\n' +
      '  maxMessageLength: number,\n' +
      '  socketBufferLength: number,\n' +
      '  offerPerMessageDeflate: boolean\n' +
      '}) -> websocket WebSocket\n' +
      '```\n' +
      '\n' +
      'Presidium WebSocket class.\n' +
      '\n' +
      'Arguments:\n' +
      '  * `options`\n' +
      "    * `rejectUnauthorized` - if `true`, the client verifies the server's certificate against a list of pre-approved certificate authorities (CAs). An [error](#websocket-error-event) event is emitted if verification fails; `err.code` contains the OpenSSL error code. Defaults to `true`.\n" +
      '    * `autoConnect` - if `true`, establishes the underlying TCP connection automatically upon construction. Defaults to `true`.\n' +
      '    * `maxMessageLength` - the maximum length in bytes of sent messages. If a message is longer than `maxMessageLength`, it is split into fragmented messages that are reassembled by the receiver.\n' +
      '    * `socketBufferLength` - length in bytes of the internal buffer of the underlying [socket](https://nodejs.org/api/net.html#class-netsocket).\n' +
      '    * `offerPerMessageDeflate` - if `true`, offers to the server [Per-Message Compression Extensions](https://datatracker.ietf.org/doc/html/rfc7692#section-4) by including the `Sec-WebSocket-Extensions: permessage-deflate` header in the initial WebSocket handshake. If the server supports compression extensions, all messages exchanged in the WebSocket connection will be compressed with [zlib](https://nodejs.org/api/zlib.html) default options. Defaults to `true`.\n' +
      '\n' +
      'Return:\n' +
      '  * `websocket` - a Presidium WebSocket instance.\n' +
      '\n' +
      '```javascript\n' +
      "const websocket = new WebSocket('ws://localhost:1337/')\n" +
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
                value: 'WebSocket',
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
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'new WebSocket(url string) -> websocket WebSocket\n' +
              '\n' +
              'new WebSocket(url string, options {\n' +
              '  rejectUnauthorized: boolean,\n' +
              '  autoConnect: boolean,\n' +
              '  maxMessageLength: number,\n' +
              '  socketBufferLength: number,\n' +
              '  offerPerMessageDeflate: boolean\n' +
              '}) -> websocket WebSocket',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 11, column: 4, offset: 291 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Presidium WebSocket class.',
                position: {
                  start: { line: 13, column: 1, offset: 293 },
                  end: { line: 13, column: 27, offset: 319 }
                }
              }
            ],
            position: {
              start: { line: 13, column: 1, offset: 293 },
              end: { line: 13, column: 27, offset: 319 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Arguments:',
                position: {
                  start: { line: 15, column: 1, offset: 321 },
                  end: { line: 15, column: 11, offset: 331 }
                }
              }
            ],
            position: {
              start: { line: 15, column: 1, offset: 321 },
              end: { line: 15, column: 11, offset: 331 }
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
                          start: { line: 16, column: 5, offset: 336 },
                          end: { line: 16, column: 14, offset: 345 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 16, column: 5, offset: 336 },
                      end: { line: 16, column: 14, offset: 345 }
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
                                value: 'rejectUnauthorized',
                                position: {
                                  start: { line: 17, column: 7, offset: 352 },
                                  end: { line: 17, column: 27, offset: 372 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - if ',
                                position: {
                                  start: { line: 17, column: 27, offset: 372 },
                                  end: { line: 17, column: 33, offset: 378 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'true',
                                position: {
                                  start: { line: 17, column: 33, offset: 378 },
                                  end: { line: 17, column: 39, offset: 384 }
                                }
                              },
                              {
                                type: 'text',
                                value: ", the client verifies the server's certificate against a list of pre-approved certificate authorities (CAs). An ",
                                position: {
                                  start: { line: 17, column: 39, offset: 384 },
                                  end: {
                                    line: 17,
                                    column: 151,
                                    offset: 496
                                  }
                                }
                              },
                              {
                                type: 'link',
                                title: null,
                                url: '#websocket-error-event',
                                children: [
                                  {
                                    type: 'text',
                                    value: 'error',
                                    position: {
                                      start: {
                                        line: 17,
                                        column: 152,
                                        offset: 497
                                      },
                                      end: {
                                        line: 17,
                                        column: 157,
                                        offset: 502
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: {
                                    line: 17,
                                    column: 151,
                                    offset: 496
                                  },
                                  end: {
                                    line: 17,
                                    column: 182,
                                    offset: 527
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' event is emitted if verification fails; ',
                                position: {
                                  start: {
                                    line: 17,
                                    column: 182,
                                    offset: 527
                                  },
                                  end: {
                                    line: 17,
                                    column: 223,
                                    offset: 568
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'err.code',
                                position: {
                                  start: {
                                    line: 17,
                                    column: 223,
                                    offset: 568
                                  },
                                  end: {
                                    line: 17,
                                    column: 233,
                                    offset: 578
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' contains the OpenSSL error code. Defaults to ',
                                position: {
                                  start: {
                                    line: 17,
                                    column: 233,
                                    offset: 578
                                  },
                                  end: {
                                    line: 17,
                                    column: 279,
                                    offset: 624
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'true',
                                position: {
                                  start: {
                                    line: 17,
                                    column: 279,
                                    offset: 624
                                  },
                                  end: {
                                    line: 17,
                                    column: 285,
                                    offset: 630
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: '.',
                                position: {
                                  start: {
                                    line: 17,
                                    column: 285,
                                    offset: 630
                                  },
                                  end: {
                                    line: 17,
                                    column: 286,
                                    offset: 631
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 17, column: 7, offset: 352 },
                              end: { line: 17, column: 286, offset: 631 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 17, column: 5, offset: 350 },
                          end: { line: 17, column: 286, offset: 631 }
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
                                value: 'autoConnect',
                                position: {
                                  start: { line: 18, column: 7, offset: 638 },
                                  end: { line: 18, column: 20, offset: 651 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - if ',
                                position: {
                                  start: { line: 18, column: 20, offset: 651 },
                                  end: { line: 18, column: 26, offset: 657 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'true',
                                position: {
                                  start: { line: 18, column: 26, offset: 657 },
                                  end: { line: 18, column: 32, offset: 663 }
                                }
                              },
                              {
                                type: 'text',
                                value: ', establishes the underlying TCP connection automatically upon construction. Defaults to ',
                                position: {
                                  start: { line: 18, column: 32, offset: 663 },
                                  end: {
                                    line: 18,
                                    column: 121,
                                    offset: 752
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'true',
                                position: {
                                  start: {
                                    line: 18,
                                    column: 121,
                                    offset: 752
                                  },
                                  end: {
                                    line: 18,
                                    column: 127,
                                    offset: 758
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: '.',
                                position: {
                                  start: {
                                    line: 18,
                                    column: 127,
                                    offset: 758
                                  },
                                  end: {
                                    line: 18,
                                    column: 128,
                                    offset: 759
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 18, column: 7, offset: 638 },
                              end: { line: 18, column: 128, offset: 759 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 18, column: 5, offset: 636 },
                          end: { line: 18, column: 128, offset: 759 }
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
                                value: 'maxMessageLength',
                                position: {
                                  start: { line: 19, column: 7, offset: 766 },
                                  end: { line: 19, column: 25, offset: 784 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the maximum length in bytes of sent messages. If a message is longer than ',
                                position: {
                                  start: { line: 19, column: 25, offset: 784 },
                                  end: {
                                    line: 19,
                                    column: 102,
                                    offset: 861
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'maxMessageLength',
                                position: {
                                  start: {
                                    line: 19,
                                    column: 102,
                                    offset: 861
                                  },
                                  end: {
                                    line: 19,
                                    column: 120,
                                    offset: 879
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ', it is split into fragmented messages that are reassembled by the receiver.',
                                position: {
                                  start: {
                                    line: 19,
                                    column: 120,
                                    offset: 879
                                  },
                                  end: {
                                    line: 19,
                                    column: 196,
                                    offset: 955
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 19, column: 7, offset: 766 },
                              end: { line: 19, column: 196, offset: 955 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 764 },
                          end: { line: 19, column: 196, offset: 955 }
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
                                value: 'socketBufferLength',
                                position: {
                                  start: { line: 20, column: 7, offset: 962 },
                                  end: { line: 20, column: 27, offset: 982 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - length in bytes of the internal buffer of the underlying ',
                                position: {
                                  start: { line: 20, column: 27, offset: 982 },
                                  end: {
                                    line: 20,
                                    column: 87,
                                    offset: 1042
                                  }
                                }
                              },
                              {
                                type: 'link',
                                title: null,
                                url: 'https://nodejs.org/api/net.html#class-netsocket',
                                children: [
                                  {
                                    type: 'text',
                                    value: 'socket',
                                    position: {
                                      start: {
                                        line: 20,
                                        column: 88,
                                        offset: 1043
                                      },
                                      end: {
                                        line: 20,
                                        column: 94,
                                        offset: 1049
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: {
                                    line: 20,
                                    column: 87,
                                    offset: 1042
                                  },
                                  end: {
                                    line: 20,
                                    column: 144,
                                    offset: 1099
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: '.',
                                position: {
                                  start: {
                                    line: 20,
                                    column: 144,
                                    offset: 1099
                                  },
                                  end: {
                                    line: 20,
                                    column: 145,
                                    offset: 1100
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 20, column: 7, offset: 962 },
                              end: { line: 20, column: 145, offset: 1100 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 20, column: 5, offset: 960 },
                          end: { line: 20, column: 145, offset: 1100 }
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
                                value: 'offerPerMessageDeflate',
                                position: {
                                  start: { line: 21, column: 7, offset: 1107 },
                                  end: {
                                    line: 21,
                                    column: 31,
                                    offset: 1131
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - if ',
                                position: {
                                  start: {
                                    line: 21,
                                    column: 31,
                                    offset: 1131
                                  },
                                  end: {
                                    line: 21,
                                    column: 37,
                                    offset: 1137
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'true',
                                position: {
                                  start: {
                                    line: 21,
                                    column: 37,
                                    offset: 1137
                                  },
                                  end: {
                                    line: 21,
                                    column: 43,
                                    offset: 1143
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ', offers to the server ',
                                position: {
                                  start: {
                                    line: 21,
                                    column: 43,
                                    offset: 1143
                                  },
                                  end: {
                                    line: 21,
                                    column: 66,
                                    offset: 1166
                                  }
                                }
                              },
                              {
                                type: 'link',
                                title: null,
                                url: 'https://datatracker.ietf.org/doc/html/rfc7692#section-4',
                                children: [
                                  {
                                    type: 'text',
                                    value: 'Per-Message Compression Extensions',
                                    position: {
                                      start: {
                                        line: 21,
                                        column: 67,
                                        offset: 1167
                                      },
                                      end: {
                                        line: 21,
                                        column: 101,
                                        offset: 1201
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: {
                                    line: 21,
                                    column: 66,
                                    offset: 1166
                                  },
                                  end: {
                                    line: 21,
                                    column: 159,
                                    offset: 1259
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' by including the ',
                                position: {
                                  start: {
                                    line: 21,
                                    column: 159,
                                    offset: 1259
                                  },
                                  end: {
                                    line: 21,
                                    column: 177,
                                    offset: 1277
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'Sec-WebSocket-Extensions: permessage-deflate',
                                position: {
                                  start: {
                                    line: 21,
                                    column: 177,
                                    offset: 1277
                                  },
                                  end: {
                                    line: 21,
                                    column: 223,
                                    offset: 1323
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' header in the initial WebSocket handshake. If the server supports compression extensions, all messages exchanged in the WebSocket connection will be compressed with ',
                                position: {
                                  start: {
                                    line: 21,
                                    column: 223,
                                    offset: 1323
                                  },
                                  end: {
                                    line: 21,
                                    column: 389,
                                    offset: 1489
                                  }
                                }
                              },
                              {
                                type: 'link',
                                title: null,
                                url: 'https://nodejs.org/api/zlib.html',
                                children: [
                                  {
                                    type: 'text',
                                    value: 'zlib',
                                    position: {
                                      start: {
                                        line: 21,
                                        column: 390,
                                        offset: 1490
                                      },
                                      end: {
                                        line: 21,
                                        column: 394,
                                        offset: 1494
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: {
                                    line: 21,
                                    column: 389,
                                    offset: 1489
                                  },
                                  end: {
                                    line: 21,
                                    column: 429,
                                    offset: 1529
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' default options. Defaults to ',
                                position: {
                                  start: {
                                    line: 21,
                                    column: 429,
                                    offset: 1529
                                  },
                                  end: {
                                    line: 21,
                                    column: 459,
                                    offset: 1559
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'true',
                                position: {
                                  start: {
                                    line: 21,
                                    column: 459,
                                    offset: 1559
                                  },
                                  end: {
                                    line: 21,
                                    column: 465,
                                    offset: 1565
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: '.',
                                position: {
                                  start: {
                                    line: 21,
                                    column: 465,
                                    offset: 1565
                                  },
                                  end: {
                                    line: 21,
                                    column: 466,
                                    offset: 1566
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 7, offset: 1107 },
                              end: { line: 21, column: 466, offset: 1566 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 5, offset: 1105 },
                          end: { line: 21, column: 466, offset: 1566 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 17, column: 5, offset: 350 },
                      end: { line: 21, column: 466, offset: 1566 }
                    }
                  }
                ],
                position: {
                  start: { line: 16, column: 3, offset: 334 },
                  end: { line: 21, column: 466, offset: 1566 }
                }
              }
            ],
            position: {
              start: { line: 16, column: 3, offset: 334 },
              end: { line: 21, column: 466, offset: 1566 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Return:',
                position: {
                  start: { line: 23, column: 1, offset: 1568 },
                  end: { line: 23, column: 8, offset: 1575 }
                }
              }
            ],
            position: {
              start: { line: 23, column: 1, offset: 1568 },
              end: { line: 23, column: 8, offset: 1575 }
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
                        value: 'websocket',
                        position: {
                          start: { line: 24, column: 5, offset: 1580 },
                          end: { line: 24, column: 16, offset: 1591 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - a Presidium WebSocket instance.',
                        position: {
                          start: { line: 24, column: 16, offset: 1591 },
                          end: { line: 24, column: 50, offset: 1625 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 24, column: 5, offset: 1580 },
                      end: { line: 24, column: 50, offset: 1625 }
                    }
                  }
                ],
                position: {
                  start: { line: 24, column: 3, offset: 1578 },
                  end: { line: 24, column: 50, offset: 1625 }
                }
              }
            ],
            position: {
              start: { line: 24, column: 3, offset: 1578 },
              end: { line: 24, column: 50, offset: 1625 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: "const websocket = new WebSocket('ws://localhost:1337/')",
            position: {
              start: { line: 26, column: 1, offset: 1627 },
              end: { line: 28, column: 4, offset: 1700 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 28, column: 4, offset: 1700 }
        }
      }
    },
    methods: [
      {
        name: 'Event: open',
        docs: '```coffeescript [specscript]\n' +
          "emit('open')\n" +
          '```\n' +
          '\n' +
          'The `open` event. Emitted when the WebSocket connection is open.\n' +
          '\n' +
          'Event Data:\n' +
          '  * (none)\n' +
          '\n' +
          '```javascript\n' +
          "const websocket = new WebSocket('ws://localhost:1337/')\n" +
          '\n' +
          "websocket.on('open', () => {\n" +
          "  console.log('Connection is open.')\n" +
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
                    value: 'Event: open',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: "emit('open')",
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 45 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'The ',
                    position: {
                      start: { line: 5, column: 1, offset: 47 },
                      end: { line: 5, column: 5, offset: 51 }
                    }
                  },
                  {
                    type: 'inlineCode',
                    value: 'open',
                    position: {
                      start: { line: 5, column: 5, offset: 51 },
                      end: { line: 5, column: 11, offset: 57 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' event. Emitted when the WebSocket connection is open.',
                    position: {
                      start: { line: 5, column: 11, offset: 57 },
                      end: { line: 5, column: 65, offset: 111 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 47 },
                  end: { line: 5, column: 65, offset: 111 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Event Data:',
                    position: {
                      start: { line: 7, column: 1, offset: 113 },
                      end: { line: 7, column: 12, offset: 124 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 113 },
                  end: { line: 7, column: 12, offset: 124 }
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
                              start: { line: 8, column: 5, offset: 129 },
                              end: { line: 8, column: 11, offset: 135 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 129 },
                          end: { line: 8, column: 11, offset: 135 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 127 },
                      end: { line: 8, column: 11, offset: 135 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 127 },
                  end: { line: 8, column: 11, offset: 135 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "const websocket = new WebSocket('ws://localhost:1337/')\n" +
                  '\n' +
                  "websocket.on('open', () => {\n" +
                  "  console.log('Connection is open.')\n" +
                  '})',
                position: {
                  start: { line: 10, column: 1, offset: 137 },
                  end: { line: 16, column: 4, offset: 280 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 16, column: 4, offset: 280 }
            }
          }
        }
      },
      {
        name: 'Event: message',
        docs: '```coffeescript [specscript]\n' +
          "emit('message', message Buffer)\n" +
          '```\n' +
          '\n' +
          'The `message` event. Emitted upon receipt and successful decoding (and reassembly, if applicable) of an incoming message.\n' +
          '\n' +
          'Event Data:\n' +
          '  * `message` - a [Node.js buffer](https://nodejs.org/docs/latest-v24.x/api/buffer.html) of the received message.\n' +
          '\n' +
          '```javascript\n' +
          "const websocket = new WebSocket('ws://localhost:1337/')\n" +
          '\n' +
          "websocket.on('message', message => {\n" +
          "  console.log('Message:', message.toString('utf8'))\n" +
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
                    value: 'Event: message',
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
                value: "emit('message', message Buffer)",
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 64 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'The ',
                    position: {
                      start: { line: 5, column: 1, offset: 66 },
                      end: { line: 5, column: 5, offset: 70 }
                    }
                  },
                  {
                    type: 'inlineCode',
                    value: 'message',
                    position: {
                      start: { line: 5, column: 5, offset: 70 },
                      end: { line: 5, column: 14, offset: 79 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' event. Emitted upon receipt and successful decoding (and reassembly, if applicable) of an incoming message.',
                    position: {
                      start: { line: 5, column: 14, offset: 79 },
                      end: { line: 5, column: 122, offset: 187 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 66 },
                  end: { line: 5, column: 122, offset: 187 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Event Data:',
                    position: {
                      start: { line: 7, column: 1, offset: 189 },
                      end: { line: 7, column: 12, offset: 200 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 189 },
                  end: { line: 7, column: 12, offset: 200 }
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
                            value: 'message',
                            position: {
                              start: { line: 8, column: 5, offset: 205 },
                              end: { line: 8, column: 14, offset: 214 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a ',
                            position: {
                              start: { line: 8, column: 14, offset: 214 },
                              end: { line: 8, column: 19, offset: 219 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/docs/latest-v24.x/api/buffer.html',
                            children: [
                              {
                                type: 'text',
                                value: 'Node.js buffer',
                                position: {
                                  start: { line: 8, column: 20, offset: 220 },
                                  end: { line: 8, column: 34, offset: 234 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 8, column: 19, offset: 219 },
                              end: { line: 8, column: 89, offset: 289 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' of the received message.',
                            position: {
                              start: { line: 8, column: 89, offset: 289 },
                              end: { line: 8, column: 114, offset: 314 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 205 },
                          end: { line: 8, column: 114, offset: 314 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 203 },
                      end: { line: 8, column: 114, offset: 314 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 203 },
                  end: { line: 8, column: 114, offset: 314 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "const websocket = new WebSocket('ws://localhost:1337/')\n" +
                  '\n' +
                  "websocket.on('message', message => {\n" +
                  "  console.log('Message:', message.toString('utf8'))\n" +
                  '})',
                position: {
                  start: { line: 10, column: 1, offset: 316 },
                  end: { line: 16, column: 4, offset: 482 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 16, column: 4, offset: 482 }
            }
          }
        }
      },
      {
        name: 'Event: ping',
        docs: '```coffeescript [specscript]\n' +
          "emit('ping', payload Buffer)\n" +
          '```\n' +
          '\n' +
          'The `ping` event. Emitted upon receipt and successful decoding of an incoming "ping" message.\n' +
          '\n' +
          'Event Data:\n' +
          '  * `payload` - a [Node.js buffer](https://nodejs.org/docs/latest-v24.x/api/buffer.html) of the received payload.\n' +
          '\n' +
          '```javascript\n' +
          "const websocket = new WebSocket('ws://localhost:1337/')\n" +
          '\n' +
          "websocket.on('ping', () => {\n" +
          "  console.log('Ping')\n" +
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
                    value: 'Event: ping',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: "emit('ping', payload Buffer)",
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 61 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'The ',
                    position: {
                      start: { line: 5, column: 1, offset: 63 },
                      end: { line: 5, column: 5, offset: 67 }
                    }
                  },
                  {
                    type: 'inlineCode',
                    value: 'ping',
                    position: {
                      start: { line: 5, column: 5, offset: 67 },
                      end: { line: 5, column: 11, offset: 73 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' event. Emitted upon receipt and successful decoding of an incoming "ping" message.',
                    position: {
                      start: { line: 5, column: 11, offset: 73 },
                      end: { line: 5, column: 94, offset: 156 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 63 },
                  end: { line: 5, column: 94, offset: 156 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Event Data:',
                    position: {
                      start: { line: 7, column: 1, offset: 158 },
                      end: { line: 7, column: 12, offset: 169 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 158 },
                  end: { line: 7, column: 12, offset: 169 }
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
                            value: 'payload',
                            position: {
                              start: { line: 8, column: 5, offset: 174 },
                              end: { line: 8, column: 14, offset: 183 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a ',
                            position: {
                              start: { line: 8, column: 14, offset: 183 },
                              end: { line: 8, column: 19, offset: 188 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/docs/latest-v24.x/api/buffer.html',
                            children: [
                              {
                                type: 'text',
                                value: 'Node.js buffer',
                                position: {
                                  start: { line: 8, column: 20, offset: 189 },
                                  end: { line: 8, column: 34, offset: 203 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 8, column: 19, offset: 188 },
                              end: { line: 8, column: 89, offset: 258 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' of the received payload.',
                            position: {
                              start: { line: 8, column: 89, offset: 258 },
                              end: { line: 8, column: 114, offset: 283 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 174 },
                          end: { line: 8, column: 114, offset: 283 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 172 },
                      end: { line: 8, column: 114, offset: 283 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 172 },
                  end: { line: 8, column: 114, offset: 283 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "const websocket = new WebSocket('ws://localhost:1337/')\n" +
                  '\n' +
                  "websocket.on('ping', () => {\n" +
                  "  console.log('Ping')\n" +
                  '})',
                position: {
                  start: { line: 10, column: 1, offset: 285 },
                  end: { line: 16, column: 4, offset: 413 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 16, column: 4, offset: 413 }
            }
          }
        }
      },
      {
        name: 'Event: pong',
        docs: '```coffeescript [specscript]\n' +
          "emit('pong', payload Buffer)\n" +
          '```\n' +
          '\n' +
          'The `pong` event. Emitted upon receipt and successful decoding of an incoming "pong" message.\n' +
          '\n' +
          'Event Data:\n' +
          '  * `payload` - a [Node.js buffer](https://nodejs.org/docs/latest-v24.x/api/buffer.html) of the received payload.\n' +
          '\n' +
          '```javascript\n' +
          "const websocket = new WebSocket('ws://localhost:1337/')\n" +
          '\n' +
          "websocket.on('pong', () => {\n" +
          "  console.log('Pong')\n" +
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
                    value: 'Event: pong',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: "emit('pong', payload Buffer)",
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 61 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'The ',
                    position: {
                      start: { line: 5, column: 1, offset: 63 },
                      end: { line: 5, column: 5, offset: 67 }
                    }
                  },
                  {
                    type: 'inlineCode',
                    value: 'pong',
                    position: {
                      start: { line: 5, column: 5, offset: 67 },
                      end: { line: 5, column: 11, offset: 73 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' event. Emitted upon receipt and successful decoding of an incoming "pong" message.',
                    position: {
                      start: { line: 5, column: 11, offset: 73 },
                      end: { line: 5, column: 94, offset: 156 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 63 },
                  end: { line: 5, column: 94, offset: 156 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Event Data:',
                    position: {
                      start: { line: 7, column: 1, offset: 158 },
                      end: { line: 7, column: 12, offset: 169 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 158 },
                  end: { line: 7, column: 12, offset: 169 }
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
                            value: 'payload',
                            position: {
                              start: { line: 8, column: 5, offset: 174 },
                              end: { line: 8, column: 14, offset: 183 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a ',
                            position: {
                              start: { line: 8, column: 14, offset: 183 },
                              end: { line: 8, column: 19, offset: 188 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/docs/latest-v24.x/api/buffer.html',
                            children: [
                              {
                                type: 'text',
                                value: 'Node.js buffer',
                                position: {
                                  start: { line: 8, column: 20, offset: 189 },
                                  end: { line: 8, column: 34, offset: 203 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 8, column: 19, offset: 188 },
                              end: { line: 8, column: 89, offset: 258 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' of the received payload.',
                            position: {
                              start: { line: 8, column: 89, offset: 258 },
                              end: { line: 8, column: 114, offset: 283 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 174 },
                          end: { line: 8, column: 114, offset: 283 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 172 },
                      end: { line: 8, column: 114, offset: 283 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 172 },
                  end: { line: 8, column: 114, offset: 283 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "const websocket = new WebSocket('ws://localhost:1337/')\n" +
                  '\n' +
                  "websocket.on('pong', () => {\n" +
                  "  console.log('Pong')\n" +
                  '})',
                position: {
                  start: { line: 10, column: 1, offset: 285 },
                  end: { line: 16, column: 4, offset: 413 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 16, column: 4, offset: 413 }
            }
          }
        }
      },
      {
        name: 'Event: error',
        docs: '```coffeescript [specscript]\n' +
          "emit('error', error Error)\n" +
          '```\n' +
          '\n' +
          'The `error` event. Emitted if an error occurs on the WebSocket instance or on its underlying [socket](https://nodejs.org/api/net.html#class-netsocket).\n' +
          '\n' +
          'Event Data:\n' +
          '  * `error` - an instance of a JavaScript [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error).\n' +
          '\n' +
          '```javascript\n' +
          "const websocket = new WebSocket('ws://localhost:1337/')\n" +
          '\n' +
          "websocket.on('error', error => {\n" +
          "  console.error('Error:', error)\n" +
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
                    value: 'Event: error',
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
                value: "emit('error', error Error)",
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 59 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'The ',
                    position: {
                      start: { line: 5, column: 1, offset: 61 },
                      end: { line: 5, column: 5, offset: 65 }
                    }
                  },
                  {
                    type: 'inlineCode',
                    value: 'error',
                    position: {
                      start: { line: 5, column: 5, offset: 65 },
                      end: { line: 5, column: 12, offset: 72 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' event. Emitted if an error occurs on the WebSocket instance or on its underlying ',
                    position: {
                      start: { line: 5, column: 12, offset: 72 },
                      end: { line: 5, column: 94, offset: 154 }
                    }
                  },
                  {
                    type: 'link',
                    title: null,
                    url: 'https://nodejs.org/api/net.html#class-netsocket',
                    children: [
                      {
                        type: 'text',
                        value: 'socket',
                        position: {
                          start: { line: 5, column: 95, offset: 155 },
                          end: { line: 5, column: 101, offset: 161 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 5, column: 94, offset: 154 },
                      end: { line: 5, column: 151, offset: 211 }
                    }
                  },
                  {
                    type: 'text',
                    value: '.',
                    position: {
                      start: { line: 5, column: 151, offset: 211 },
                      end: { line: 5, column: 152, offset: 212 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 61 },
                  end: { line: 5, column: 152, offset: 212 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Event Data:',
                    position: {
                      start: { line: 7, column: 1, offset: 214 },
                      end: { line: 7, column: 12, offset: 225 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 214 },
                  end: { line: 7, column: 12, offset: 225 }
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
                            value: 'error',
                            position: {
                              start: { line: 8, column: 5, offset: 230 },
                              end: { line: 8, column: 12, offset: 237 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an instance of a JavaScript ',
                            position: {
                              start: { line: 8, column: 12, offset: 237 },
                              end: { line: 8, column: 43, offset: 268 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error',
                            children: [
                              {
                                type: 'text',
                                value: 'Error',
                                position: {
                                  start: { line: 8, column: 44, offset: 269 },
                                  end: { line: 8, column: 49, offset: 274 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 8, column: 43, offset: 268 },
                              end: { line: 8, column: 138, offset: 363 }
                            }
                          },
                          {
                            type: 'text',
                            value: '.',
                            position: {
                              start: { line: 8, column: 138, offset: 363 },
                              end: { line: 8, column: 139, offset: 364 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 230 },
                          end: { line: 8, column: 139, offset: 364 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 228 },
                      end: { line: 8, column: 139, offset: 364 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 228 },
                  end: { line: 8, column: 139, offset: 364 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "const websocket = new WebSocket('ws://localhost:1337/')\n" +
                  '\n' +
                  "websocket.on('error', error => {\n" +
                  "  console.error('Error:', error)\n" +
                  '})',
                position: {
                  start: { line: 10, column: 1, offset: 366 },
                  end: { line: 16, column: 4, offset: 509 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 16, column: 4, offset: 509 }
            }
          }
        }
      },
      {
        name: 'Event: close',
        docs: '```coffeescript [specscript]\n' +
          "emit('close')\n" +
          '```\n' +
          '\n' +
          'The `close` event. Emitted when the underlying [socket](https://nodejs.org/api/net.html#class-netsocket) is destroyed.\n' +
          '\n' +
          'Event Data:\n' +
          '  * (none)\n' +
          '\n' +
          '```javascript\n' +
          "const websocket = new WebSocket('ws://localhost:1337/')\n" +
          '\n' +
          "websocket.on('close', () => {\n" +
          "  console.log('Connection is closed.')\n" +
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
                    value: 'Event: close',
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
                value: "emit('close')",
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 46 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'The ',
                    position: {
                      start: { line: 5, column: 1, offset: 48 },
                      end: { line: 5, column: 5, offset: 52 }
                    }
                  },
                  {
                    type: 'inlineCode',
                    value: 'close',
                    position: {
                      start: { line: 5, column: 5, offset: 52 },
                      end: { line: 5, column: 12, offset: 59 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' event. Emitted when the underlying ',
                    position: {
                      start: { line: 5, column: 12, offset: 59 },
                      end: { line: 5, column: 48, offset: 95 }
                    }
                  },
                  {
                    type: 'link',
                    title: null,
                    url: 'https://nodejs.org/api/net.html#class-netsocket',
                    children: [
                      {
                        type: 'text',
                        value: 'socket',
                        position: {
                          start: { line: 5, column: 49, offset: 96 },
                          end: { line: 5, column: 55, offset: 102 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 5, column: 48, offset: 95 },
                      end: { line: 5, column: 105, offset: 152 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' is destroyed.',
                    position: {
                      start: { line: 5, column: 105, offset: 152 },
                      end: { line: 5, column: 119, offset: 166 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 48 },
                  end: { line: 5, column: 119, offset: 166 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Event Data:',
                    position: {
                      start: { line: 7, column: 1, offset: 168 },
                      end: { line: 7, column: 12, offset: 179 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 168 },
                  end: { line: 7, column: 12, offset: 179 }
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
                              start: { line: 8, column: 5, offset: 184 },
                              end: { line: 8, column: 11, offset: 190 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 184 },
                          end: { line: 8, column: 11, offset: 190 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 182 },
                      end: { line: 8, column: 11, offset: 190 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 182 },
                  end: { line: 8, column: 11, offset: 190 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "const websocket = new WebSocket('ws://localhost:1337/')\n" +
                  '\n' +
                  "websocket.on('close', () => {\n" +
                  "  console.log('Connection is closed.')\n" +
                  '})',
                position: {
                  start: { line: 10, column: 1, offset: 192 },
                  end: { line: 16, column: 4, offset: 338 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 16, column: 4, offset: 338 }
            }
          }
        }
      },
      {
        name: 'connect',
        docs: '```coffeescript [specscript]\n' +
          'websocket.connect() -> undefined\n' +
          '```\n' +
          'Initiates a new connection to the WebSocket server.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none)\n' +
          '\n' +
          'Return:\n' +
          '  * undefined\n' +
          '\n' +
          '```javascript\n' +
          "const websocket = new WebSocket('ws://localhost:1337/')\n" +
          '\n' +
          'websocket.connect()\n' +
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
                    value: 'connect',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 8, offset: 7 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 8, offset: 7 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'websocket.connect() -> undefined',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 65 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Initiates a new connection to the WebSocket server.',
                    position: {
                      start: { line: 4, column: 1, offset: 66 },
                      end: { line: 4, column: 52, offset: 117 }
                    }
                  }
                ],
                position: {
                  start: { line: 4, column: 1, offset: 66 },
                  end: { line: 4, column: 52, offset: 117 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 6, column: 1, offset: 119 },
                      end: { line: 6, column: 11, offset: 129 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 1, offset: 119 },
                  end: { line: 6, column: 11, offset: 129 }
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
                              start: { line: 7, column: 5, offset: 134 },
                              end: { line: 7, column: 11, offset: 140 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 7, column: 5, offset: 134 },
                          end: { line: 7, column: 11, offset: 140 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 7, column: 3, offset: 132 },
                      end: { line: 7, column: 11, offset: 140 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 3, offset: 132 },
                  end: { line: 7, column: 11, offset: 140 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 9, column: 1, offset: 142 },
                      end: { line: 9, column: 8, offset: 149 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 1, offset: 142 },
                  end: { line: 9, column: 8, offset: 149 }
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
                            value: 'undefined',
                            position: {
                              start: { line: 10, column: 5, offset: 154 },
                              end: { line: 10, column: 14, offset: 163 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 10, column: 5, offset: 154 },
                          end: { line: 10, column: 14, offset: 163 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 10, column: 3, offset: 152 },
                      end: { line: 10, column: 14, offset: 163 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 3, offset: 152 },
                  end: { line: 10, column: 14, offset: 163 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "const websocket = new WebSocket('ws://localhost:1337/')\n" +
                  '\n' +
                  'websocket.connect()',
                position: {
                  start: { line: 12, column: 1, offset: 165 },
                  end: { line: 16, column: 4, offset: 259 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 16, column: 4, offset: 259 }
            }
          }
        }
      },
      {
        name: '_onread',
        docs: '```coffeescript [specscript]\n' +
          'websocket._onread(nread number, buffer Buffer) -> ()\n' +
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
                    value: '_onread',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 8, offset: 7 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 8, offset: 7 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'websocket._onread(nread number, buffer Buffer) -> ()',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 85 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 85 }
            }
          }
        }
      },
      {
        name: '_requestUpgrade',
        docs: '```coffeescript [specscript]\n_requestUpgrade() -> ()\n```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: '_requestUpgrade',
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
                value: '_requestUpgrade() -> ()',
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
        }
      },
      {
        name: '_handleDataFrames',
        docs: '```coffeescript [specscript]\nwebsocket._handleDataFrames() -> ()\n```',
        mdast: {
          name: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: '_handleDataFrames',
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
                value: 'websocket._handleDataFrames() -> ()',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 68 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 68 }
            }
          }
        }
      },
      {
        name: '_processChunks',
        docs: '```coffeescript [specscript]\n' +
          'websocket._processChunks(chunks Array<Buffer>) -> ()\n' +
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
                    value: '_processChunks',
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
                value: 'websocket._processChunks(chunks Array<Buffer>) -> ()',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 85 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 85 }
            }
          }
        }
      },
      {
        name: '_handleDataFrame',
        docs: '```coffeescript [specscript]\n' +
          'websocket._handleDataFrame(payload Buffer, opcode number, fin boolean) -> ()\n' +
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
                    value: '_handleDataFrame',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'websocket._handleDataFrame(payload Buffer, opcode number, fin boolean) -> ()',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 109 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 109 }
            }
          }
        }
      },
      {
        name: 'send',
        docs: '```coffeescript [specscript]\n' +
          'websocket.send(message Buffer|string) -> undefined\n' +
          '```\n' +
          'Sends a message to the WebSocket server.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `message` - a [Node.js buffer](https://nodejs.org/docs/latest-v24.x/api/buffer.html) or string of the message to send.\n' +
          '\n' +
          'Return:\n' +
          '  * undefined\n' +
          '\n' +
          '```javascript\n' +
          "const websocket = new WebSocket('ws://localhost:1337/')\n" +
          '\n' +
          "websocket.send('Example')\n" +
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
                    value: 'send',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'websocket.send(message Buffer|string) -> undefined',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 83 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Sends a message to the WebSocket server.',
                    position: {
                      start: { line: 4, column: 1, offset: 84 },
                      end: { line: 4, column: 41, offset: 124 }
                    }
                  }
                ],
                position: {
                  start: { line: 4, column: 1, offset: 84 },
                  end: { line: 4, column: 41, offset: 124 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 6, column: 1, offset: 126 },
                      end: { line: 6, column: 11, offset: 136 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 1, offset: 126 },
                  end: { line: 6, column: 11, offset: 136 }
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
                            value: 'message',
                            position: {
                              start: { line: 7, column: 5, offset: 141 },
                              end: { line: 7, column: 14, offset: 150 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a ',
                            position: {
                              start: { line: 7, column: 14, offset: 150 },
                              end: { line: 7, column: 19, offset: 155 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/docs/latest-v24.x/api/buffer.html',
                            children: [
                              {
                                type: 'text',
                                value: 'Node.js buffer',
                                position: {
                                  start: { line: 7, column: 20, offset: 156 },
                                  end: { line: 7, column: 34, offset: 170 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 7, column: 19, offset: 155 },
                              end: { line: 7, column: 89, offset: 225 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' or string of the message to send.',
                            position: {
                              start: { line: 7, column: 89, offset: 225 },
                              end: { line: 7, column: 123, offset: 259 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 7, column: 5, offset: 141 },
                          end: { line: 7, column: 123, offset: 259 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 7, column: 3, offset: 139 },
                      end: { line: 7, column: 123, offset: 259 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 3, offset: 139 },
                  end: { line: 7, column: 123, offset: 259 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 9, column: 1, offset: 261 },
                      end: { line: 9, column: 8, offset: 268 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 1, offset: 261 },
                  end: { line: 9, column: 8, offset: 268 }
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
                            value: 'undefined',
                            position: {
                              start: { line: 10, column: 5, offset: 273 },
                              end: { line: 10, column: 14, offset: 282 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 10, column: 5, offset: 273 },
                          end: { line: 10, column: 14, offset: 282 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 10, column: 3, offset: 271 },
                      end: { line: 10, column: 14, offset: 282 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 3, offset: 271 },
                  end: { line: 10, column: 14, offset: 282 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "const websocket = new WebSocket('ws://localhost:1337/')\n" +
                  '\n' +
                  "websocket.send('Example')",
                position: {
                  start: { line: 12, column: 1, offset: 284 },
                  end: { line: 16, column: 4, offset: 384 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 16, column: 4, offset: 384 }
            }
          }
        }
      },
      {
        name: 'sendClose',
        docs: '```coffeescript [specscript]\n' +
          'websocket.sendClose() -> undefined\n' +
          'websocket.sendClose(payload Buffer|string) -> undefined\n' +
          '```\n' +
          '\n' +
          'Sends a close frame to the WebSocket server.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `payload` - a [Node.js buffer](https://nodejs.org/docs/latest-v24.x/api/buffer.html) or string of the payload to send.\n' +
          '\n' +
          'Return:\n' +
          '  * undefined\n' +
          '\n' +
          '```javascript\n' +
          "const websocket = new WebSocket('ws://localhost:1337/')\n" +
          '\n' +
          'websocket.sendClose()\n' +
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
                    value: 'sendClose',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'websocket.sendClose() -> undefined\n' +
                  'websocket.sendClose(payload Buffer|string) -> undefined',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 4, column: 4, offset: 123 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Sends a close frame to the WebSocket server.',
                    position: {
                      start: { line: 6, column: 1, offset: 125 },
                      end: { line: 6, column: 45, offset: 169 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 1, offset: 125 },
                  end: { line: 6, column: 45, offset: 169 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 8, column: 1, offset: 171 },
                      end: { line: 8, column: 11, offset: 181 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 1, offset: 171 },
                  end: { line: 8, column: 11, offset: 181 }
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
                            value: 'payload',
                            position: {
                              start: { line: 9, column: 5, offset: 186 },
                              end: { line: 9, column: 14, offset: 195 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a ',
                            position: {
                              start: { line: 9, column: 14, offset: 195 },
                              end: { line: 9, column: 19, offset: 200 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/docs/latest-v24.x/api/buffer.html',
                            children: [
                              {
                                type: 'text',
                                value: 'Node.js buffer',
                                position: {
                                  start: { line: 9, column: 20, offset: 201 },
                                  end: { line: 9, column: 34, offset: 215 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 9, column: 19, offset: 200 },
                              end: { line: 9, column: 89, offset: 270 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' or string of the payload to send.',
                            position: {
                              start: { line: 9, column: 89, offset: 270 },
                              end: { line: 9, column: 123, offset: 304 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 9, column: 5, offset: 186 },
                          end: { line: 9, column: 123, offset: 304 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 3, offset: 184 },
                      end: { line: 9, column: 123, offset: 304 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 3, offset: 184 },
                  end: { line: 9, column: 123, offset: 304 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 11, column: 1, offset: 306 },
                      end: { line: 11, column: 8, offset: 313 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 306 },
                  end: { line: 11, column: 8, offset: 313 }
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
                            value: 'undefined',
                            position: {
                              start: { line: 12, column: 5, offset: 318 },
                              end: { line: 12, column: 14, offset: 327 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 318 },
                          end: { line: 12, column: 14, offset: 327 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 316 },
                      end: { line: 12, column: 14, offset: 327 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 316 },
                  end: { line: 12, column: 14, offset: 327 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "const websocket = new WebSocket('ws://localhost:1337/')\n" +
                  '\n' +
                  'websocket.sendClose()',
                position: {
                  start: { line: 14, column: 1, offset: 329 },
                  end: { line: 18, column: 4, offset: 425 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 18, column: 4, offset: 425 }
            }
          }
        }
      },
      {
        name: 'sendPing',
        docs: '```coffeescript [specscript]\n' +
          'websocket.sendPing() -> undefined\n' +
          'websocket.sendPing(payload Buffer|string) -> undefined\n' +
          '```\n' +
          '\n' +
          'Sends a ping frame to the server.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `payload` - a [Node.js buffer](https://nodejs.org/docs/latest-v24.x/api/buffer.html) or string of the payload to send.\n' +
          '\n' +
          'Return:\n' +
          '  * undefined\n' +
          '\n' +
          '```javascript\n' +
          "const websocket = new WebSocket('ws://localhost:1337/')\n" +
          '\n' +
          'websocket.sendPing()\n' +
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
                    value: 'sendPing',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'websocket.sendPing() -> undefined\n' +
                  'websocket.sendPing(payload Buffer|string) -> undefined',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 4, column: 4, offset: 121 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Sends a ping frame to the server.',
                    position: {
                      start: { line: 6, column: 1, offset: 123 },
                      end: { line: 6, column: 34, offset: 156 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 1, offset: 123 },
                  end: { line: 6, column: 34, offset: 156 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 8, column: 1, offset: 158 },
                      end: { line: 8, column: 11, offset: 168 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 1, offset: 158 },
                  end: { line: 8, column: 11, offset: 168 }
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
                            value: 'payload',
                            position: {
                              start: { line: 9, column: 5, offset: 173 },
                              end: { line: 9, column: 14, offset: 182 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a ',
                            position: {
                              start: { line: 9, column: 14, offset: 182 },
                              end: { line: 9, column: 19, offset: 187 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/docs/latest-v24.x/api/buffer.html',
                            children: [
                              {
                                type: 'text',
                                value: 'Node.js buffer',
                                position: {
                                  start: { line: 9, column: 20, offset: 188 },
                                  end: { line: 9, column: 34, offset: 202 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 9, column: 19, offset: 187 },
                              end: { line: 9, column: 89, offset: 257 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' or string of the payload to send.',
                            position: {
                              start: { line: 9, column: 89, offset: 257 },
                              end: { line: 9, column: 123, offset: 291 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 9, column: 5, offset: 173 },
                          end: { line: 9, column: 123, offset: 291 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 3, offset: 171 },
                      end: { line: 9, column: 123, offset: 291 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 3, offset: 171 },
                  end: { line: 9, column: 123, offset: 291 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 11, column: 1, offset: 293 },
                      end: { line: 11, column: 8, offset: 300 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 293 },
                  end: { line: 11, column: 8, offset: 300 }
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
                            value: 'undefined',
                            position: {
                              start: { line: 12, column: 5, offset: 305 },
                              end: { line: 12, column: 14, offset: 314 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 305 },
                          end: { line: 12, column: 14, offset: 314 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 303 },
                      end: { line: 12, column: 14, offset: 314 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 303 },
                  end: { line: 12, column: 14, offset: 314 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "const websocket = new WebSocket('ws://localhost:1337/')\n" +
                  '\n' +
                  'websocket.sendPing()',
                position: {
                  start: { line: 14, column: 1, offset: 316 },
                  end: { line: 18, column: 4, offset: 411 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 18, column: 4, offset: 411 }
            }
          }
        }
      },
      {
        name: 'sendPong',
        docs: '```coffeescript [specscript]\n' +
          'websocket.sendPong() -> undefined\n' +
          'websocket.sendPong(payload Buffer|string) -> undefined\n' +
          '```\n' +
          '\n' +
          'Sends a pong frame to the server.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `payload` - a [Node.js buffer](https://nodejs.org/docs/latest-v24.x/api/buffer.html) or string of the payload to send.\n' +
          '\n' +
          'Return:\n' +
          '  * undefined\n' +
          '\n' +
          '```javascript\n' +
          "const websocket = new WebSocket('ws://localhost:1337/')\n" +
          '\n' +
          'websocket.sendPong()\n' +
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
                    value: 'sendPong',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'websocket.sendPong() -> undefined\n' +
                  'websocket.sendPong(payload Buffer|string) -> undefined',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 4, column: 4, offset: 121 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Sends a pong frame to the server.',
                    position: {
                      start: { line: 6, column: 1, offset: 123 },
                      end: { line: 6, column: 34, offset: 156 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 1, offset: 123 },
                  end: { line: 6, column: 34, offset: 156 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 8, column: 1, offset: 158 },
                      end: { line: 8, column: 11, offset: 168 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 1, offset: 158 },
                  end: { line: 8, column: 11, offset: 168 }
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
                            value: 'payload',
                            position: {
                              start: { line: 9, column: 5, offset: 173 },
                              end: { line: 9, column: 14, offset: 182 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a ',
                            position: {
                              start: { line: 9, column: 14, offset: 182 },
                              end: { line: 9, column: 19, offset: 187 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/docs/latest-v24.x/api/buffer.html',
                            children: [
                              {
                                type: 'text',
                                value: 'Node.js buffer',
                                position: {
                                  start: { line: 9, column: 20, offset: 188 },
                                  end: { line: 9, column: 34, offset: 202 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 9, column: 19, offset: 187 },
                              end: { line: 9, column: 89, offset: 257 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' or string of the payload to send.',
                            position: {
                              start: { line: 9, column: 89, offset: 257 },
                              end: { line: 9, column: 123, offset: 291 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 9, column: 5, offset: 173 },
                          end: { line: 9, column: 123, offset: 291 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 3, offset: 171 },
                      end: { line: 9, column: 123, offset: 291 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 3, offset: 171 },
                  end: { line: 9, column: 123, offset: 291 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 11, column: 1, offset: 293 },
                      end: { line: 11, column: 8, offset: 300 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 293 },
                  end: { line: 11, column: 8, offset: 300 }
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
                            value: 'undefined',
                            position: {
                              start: { line: 12, column: 5, offset: 305 },
                              end: { line: 12, column: 14, offset: 314 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 305 },
                          end: { line: 12, column: 14, offset: 314 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 303 },
                      end: { line: 12, column: 14, offset: 314 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 303 },
                  end: { line: 12, column: 14, offset: 314 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "const websocket = new WebSocket('ws://localhost:1337/')\n" +
                  '\n' +
                  'websocket.sendPong()',
                position: {
                  start: { line: 14, column: 1, offset: 316 },
                  end: { line: 18, column: 4, offset: 411 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 18, column: 4, offset: 411 }
            }
          }
        }
      },
      {
        name: 'close',
        docs: '```coffeescript [specscript]\n' +
          'websocket.close() -> undefined\n' +
          'websocket.close(payload Buffer|string) -> undefined\n' +
          '```\n' +
          '\n' +
          'Closes the connection to the WebSocket server.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `payload` - a [Node.js buffer](https://nodejs.org/docs/latest-v24.x/api/buffer.html) or string of the payload to send.\n' +
          '\n' +
          'Return:\n' +
          '  * undefined\n' +
          '\n' +
          '```javascript\n' +
          "const websocket = new WebSocket('ws://localhost:1337/')\n" +
          '\n' +
          'websocket.close()\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'websocket.close() -> undefined\n' +
                  'websocket.close(payload Buffer|string) -> undefined',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 4, column: 4, offset: 115 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Closes the connection to the WebSocket server.',
                    position: {
                      start: { line: 6, column: 1, offset: 117 },
                      end: { line: 6, column: 47, offset: 163 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 1, offset: 117 },
                  end: { line: 6, column: 47, offset: 163 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 8, column: 1, offset: 165 },
                      end: { line: 8, column: 11, offset: 175 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 1, offset: 165 },
                  end: { line: 8, column: 11, offset: 175 }
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
                            value: 'payload',
                            position: {
                              start: { line: 9, column: 5, offset: 180 },
                              end: { line: 9, column: 14, offset: 189 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a ',
                            position: {
                              start: { line: 9, column: 14, offset: 189 },
                              end: { line: 9, column: 19, offset: 194 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/docs/latest-v24.x/api/buffer.html',
                            children: [
                              {
                                type: 'text',
                                value: 'Node.js buffer',
                                position: {
                                  start: { line: 9, column: 20, offset: 195 },
                                  end: { line: 9, column: 34, offset: 209 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 9, column: 19, offset: 194 },
                              end: { line: 9, column: 89, offset: 264 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' or string of the payload to send.',
                            position: {
                              start: { line: 9, column: 89, offset: 264 },
                              end: { line: 9, column: 123, offset: 298 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 9, column: 5, offset: 180 },
                          end: { line: 9, column: 123, offset: 298 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 3, offset: 178 },
                      end: { line: 9, column: 123, offset: 298 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 3, offset: 178 },
                  end: { line: 9, column: 123, offset: 298 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 11, column: 1, offset: 300 },
                      end: { line: 11, column: 8, offset: 307 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 300 },
                  end: { line: 11, column: 8, offset: 307 }
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
                            value: 'undefined',
                            position: {
                              start: { line: 12, column: 5, offset: 312 },
                              end: { line: 12, column: 14, offset: 321 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 312 },
                          end: { line: 12, column: 14, offset: 321 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 310 },
                      end: { line: 12, column: 14, offset: 321 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 310 },
                  end: { line: 12, column: 14, offset: 321 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "const websocket = new WebSocket('ws://localhost:1337/')\n" +
                  '\n' +
                  'websocket.close()',
                position: {
                  start: { line: 14, column: 1, offset: 323 },
                  end: { line: 18, column: 4, offset: 415 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 18, column: 4, offset: 415 }
            }
          }
        }
      },
      {
        name: 'destroy',
        docs: '```coffeescript [specscript]\n' +
          'websocket.destroy() -> undefined\n' +
          'websocket.destroy(payload Buffer|string) -> undefined\n' +
          '```\n' +
          '\n' +
          'Destroys the underlying [socket](https://nodejs.org/api/net.html#class-netsocket).\n' +
          '\n' +
          'Arguments:\n' +
          '  * `payload` - a [Node.js buffer](https://nodejs.org/docs/latest-v24.x/api/buffer.html) or string of the payload to send.\n' +
          '\n' +
          'Return:\n' +
          '  * undefined\n' +
          '\n' +
          '```javascript\n' +
          "const websocket = new WebSocket('ws://localhost:1337/')\n" +
          '\n' +
          'websocket.destroy()\n' +
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
                    value: 'destroy',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 8, offset: 7 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 8, offset: 7 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'websocket.destroy() -> undefined\n' +
                  'websocket.destroy(payload Buffer|string) -> undefined',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 4, column: 4, offset: 119 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Destroys the underlying ',
                    position: {
                      start: { line: 6, column: 1, offset: 121 },
                      end: { line: 6, column: 25, offset: 145 }
                    }
                  },
                  {
                    type: 'link',
                    title: null,
                    url: 'https://nodejs.org/api/net.html#class-netsocket',
                    children: [
                      {
                        type: 'text',
                        value: 'socket',
                        position: {
                          start: { line: 6, column: 26, offset: 146 },
                          end: { line: 6, column: 32, offset: 152 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 6, column: 25, offset: 145 },
                      end: { line: 6, column: 82, offset: 202 }
                    }
                  },
                  {
                    type: 'text',
                    value: '.',
                    position: {
                      start: { line: 6, column: 82, offset: 202 },
                      end: { line: 6, column: 83, offset: 203 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 1, offset: 121 },
                  end: { line: 6, column: 83, offset: 203 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 8, column: 1, offset: 205 },
                      end: { line: 8, column: 11, offset: 215 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 1, offset: 205 },
                  end: { line: 8, column: 11, offset: 215 }
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
                            value: 'payload',
                            position: {
                              start: { line: 9, column: 5, offset: 220 },
                              end: { line: 9, column: 14, offset: 229 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a ',
                            position: {
                              start: { line: 9, column: 14, offset: 229 },
                              end: { line: 9, column: 19, offset: 234 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/docs/latest-v24.x/api/buffer.html',
                            children: [
                              {
                                type: 'text',
                                value: 'Node.js buffer',
                                position: {
                                  start: { line: 9, column: 20, offset: 235 },
                                  end: { line: 9, column: 34, offset: 249 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 9, column: 19, offset: 234 },
                              end: { line: 9, column: 89, offset: 304 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' or string of the payload to send.',
                            position: {
                              start: { line: 9, column: 89, offset: 304 },
                              end: { line: 9, column: 123, offset: 338 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 9, column: 5, offset: 220 },
                          end: { line: 9, column: 123, offset: 338 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 3, offset: 218 },
                      end: { line: 9, column: 123, offset: 338 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 3, offset: 218 },
                  end: { line: 9, column: 123, offset: 338 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 11, column: 1, offset: 340 },
                      end: { line: 11, column: 8, offset: 347 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 340 },
                  end: { line: 11, column: 8, offset: 347 }
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
                            value: 'undefined',
                            position: {
                              start: { line: 12, column: 5, offset: 352 },
                              end: { line: 12, column: 14, offset: 361 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 352 },
                          end: { line: 12, column: 14, offset: 361 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 350 },
                      end: { line: 12, column: 14, offset: 361 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 350 },
                  end: { line: 12, column: 14, offset: 361 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "const websocket = new WebSocket('ws://localhost:1337/')\n" +
                  '\n' +
                  'websocket.destroy()',
                position: {
                  start: { line: 14, column: 1, offset: 363 },
                  end: { line: 18, column: 4, offset: 457 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 18, column: 4, offset: 457 }
            }
          }
        }
      }
    ],
    fileName: '/home/richard/code/presidium.services/../presidium-websocket/WebSocket.js'
  },
  {
    name: 'WebSocketSecureServer',
    docs: '```coffeescript [specscript]\n' +
      "module http 'https://nodejs.org/api/http.html'\n" +
      "module net 'https://nodejs.org/api/net.html'\n" +
      '\n' +
      'type WebSocketHandler = (websocket WebSocket)=>undefined\n' +
      'type HTTPHandler = (request http.ClientRequest, response http.ServerResponse)=>undefined\n' +
      '\n' +
      'new WebSocketSecureServer(websocketHandler WebSocketHandler, options \n' +
      '  httpHandler: HTTPHandler,\n' +
      '  key: string|Array<string>|Buffer|Array<Buffer>|Array<{\n' +
      '    pem: string|Buffer,\n' +
      '    passphrase: string\n' +
      '  }>,\n' +
      '  cert: string|Array<string>|Buffer|Array<Buffer>,\n' +
      '  passphrase: string,\n' +
      '  supportPerMessageDeflate: boolean,\n' +
      '  maxMessageLength: number\n' +
      '  socketBufferLength: number\n' +
      '}) -> server WebSocketSecureServer\n' +
      '\n' +
      'new WebSocketSecureServer(options {\n' +
      '  websocketHandler: WebSocketHandler,\n' +
      '  httpHandler: HTTPHandler,\n' +
      '  key: string|Array<string>|Buffer|Array<Buffer>|Array<{\n' +
      '    pem: string|Buffer,\n' +
      '    passphrase: string\n' +
      '  }>,\n' +
      '  cert: string|Array<string>|Buffer|Array<Buffer>,\n' +
      '  passphrase: string,\n' +
      '  supportPerMessageDeflate: boolean,\n' +
      '  maxMessageLength: number\n' +
      '  socketBufferLength: number\n' +
      '}) -> server WebSocketSecureServer\n' +
      '```\n' +
      '\n' +
      'Presidium WebSocketSecureServer class.\n' +
      '\n' +
      'Arguments:\n' +
      "  * `websocketHandler` - a handler function that expects an instance of a [`ServerWebSocket`](/docs/ServerWebSocket). Represents the server's WebSocket connection to the client.\n" +
      '  * `options`\n' +
      '    * `httpHandler` - function that processes incoming HTTP requests from clients. Defaults to an HTTP handler that responds with `200 OK`.\n' +
      '    * `key` - private key(s) in PEM format. Encrypted keys will be decrypted using the `passphrase` option. Multiple keys using different algorithms can be provided as an array of unencrypted key strings or buffers, or an array of objects in the form `{ pem: string|Buffer, passphrase: string }`.\n' +
      '    * `cert` - cert chain(s) in PEM format. One cert chain should be provided per private key.\n' +
      '    * `passphrase` - used to decrypt the private key(s).\n' +
      '    * `supportPerMessageDeflate` - if `true`, indicates to WebSocket clients that the server supports [Compression Extensions for WebSocket](https://datatracker.ietf.org/doc/html/rfc7692). If an incoming WebSocket connection has requested compression extensions via the `Sec-WebSocket-Extensions: permessage-deflate` header, all messages exchanged in the WebSocket connection will be compressed using [zlib](https://nodejs.org/api/zlib.html) default options. Defaults to `false`.\n' +
      '    * `maxMessageLength` - the maximum length in bytes of sent messages. If a message is longer than `maxMessageLength`, it is split into fragmented messages that are reassembled by the receiver.\n' +
      '    * `socketBufferLength` - length in bytes of the internal buffer of the underlying [socket](https://nodejs.org/api/net.html#class-netsocket) for all connections to the server.\n' +
      '\n' +
      'Return:\n' +
      '  * `server` - an instance of the WebSocketSecureServer.\n' +
      '\n' +
      '```javascript\n' +
      'const server = new WebSocketSecureServer({\n' +
      "  key: fs.readFileSync('/path/to/my-key'),\n" +
      "  cert: fs.readFileSync('/path/to/my-cert'),\n" +
      '})\n' +
      '\n' +
      'server.listen(4443, () => {\n' +
      "  console.log('WebSocket secure server listening on port 4443')\n" +
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
                value: 'WebSocketSecureServer',
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
            lang: 'coffeescript',
            meta: '[specscript]',
            value: "module http 'https://nodejs.org/api/http.html'\n" +
              "module net 'https://nodejs.org/api/net.html'\n" +
              '\n' +
              'type WebSocketHandler = (websocket WebSocket)=>undefined\n' +
              'type HTTPHandler = (request http.ClientRequest, response http.ServerResponse)=>undefined\n' +
              '\n' +
              'new WebSocketSecureServer(websocketHandler WebSocketHandler, options \n' +
              '  httpHandler: HTTPHandler,\n' +
              '  key: string|Array<string>|Buffer|Array<Buffer>|Array<{\n' +
              '    pem: string|Buffer,\n' +
              '    passphrase: string\n' +
              '  }>,\n' +
              '  cert: string|Array<string>|Buffer|Array<Buffer>,\n' +
              '  passphrase: string,\n' +
              '  supportPerMessageDeflate: boolean,\n' +
              '  maxMessageLength: number\n' +
              '  socketBufferLength: number\n' +
              '}) -> server WebSocketSecureServer\n' +
              '\n' +
              'new WebSocketSecureServer(options {\n' +
              '  websocketHandler: WebSocketHandler,\n' +
              '  httpHandler: HTTPHandler,\n' +
              '  key: string|Array<string>|Buffer|Array<Buffer>|Array<{\n' +
              '    pem: string|Buffer,\n' +
              '    passphrase: string\n' +
              '  }>,\n' +
              '  cert: string|Array<string>|Buffer|Array<Buffer>,\n' +
              '  passphrase: string,\n' +
              '  supportPerMessageDeflate: boolean,\n' +
              '  maxMessageLength: number\n' +
              '  socketBufferLength: number\n' +
              '}) -> server WebSocketSecureServer',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 34, column: 4, offset: 1095 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Presidium WebSocketSecureServer class.',
                position: {
                  start: { line: 36, column: 1, offset: 1097 },
                  end: { line: 36, column: 39, offset: 1135 }
                }
              }
            ],
            position: {
              start: { line: 36, column: 1, offset: 1097 },
              end: { line: 36, column: 39, offset: 1135 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Arguments:',
                position: {
                  start: { line: 38, column: 1, offset: 1137 },
                  end: { line: 38, column: 11, offset: 1147 }
                }
              }
            ],
            position: {
              start: { line: 38, column: 1, offset: 1137 },
              end: { line: 38, column: 11, offset: 1147 }
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
                        value: 'websocketHandler',
                        position: {
                          start: { line: 39, column: 5, offset: 1152 },
                          end: { line: 39, column: 23, offset: 1170 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - a handler function that expects an instance of a ',
                        position: {
                          start: { line: 39, column: 23, offset: 1170 },
                          end: { line: 39, column: 75, offset: 1222 }
                        }
                      },
                      {
                        type: 'link',
                        title: null,
                        url: '/docs/ServerWebSocket',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'ServerWebSocket',
                            position: {
                              start: { line: 39, column: 76, offset: 1223 },
                              end: { line: 39, column: 93, offset: 1240 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 39, column: 75, offset: 1222 },
                          end: { line: 39, column: 117, offset: 1264 }
                        }
                      },
                      {
                        type: 'text',
                        value: ". Represents the server's WebSocket connection to the client.",
                        position: {
                          start: { line: 39, column: 117, offset: 1264 },
                          end: { line: 39, column: 178, offset: 1325 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 39, column: 5, offset: 1152 },
                      end: { line: 39, column: 178, offset: 1325 }
                    }
                  }
                ],
                position: {
                  start: { line: 39, column: 3, offset: 1150 },
                  end: { line: 39, column: 178, offset: 1325 }
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
                          start: { line: 40, column: 5, offset: 1330 },
                          end: { line: 40, column: 14, offset: 1339 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 40, column: 5, offset: 1330 },
                      end: { line: 40, column: 14, offset: 1339 }
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
                                value: 'httpHandler',
                                position: {
                                  start: { line: 41, column: 7, offset: 1346 },
                                  end: {
                                    line: 41,
                                    column: 20,
                                    offset: 1359
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - function that processes incoming HTTP requests from clients. Defaults to an HTTP handler that responds with ',
                                position: {
                                  start: {
                                    line: 41,
                                    column: 20,
                                    offset: 1359
                                  },
                                  end: {
                                    line: 41,
                                    column: 131,
                                    offset: 1470
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: '200 OK',
                                position: {
                                  start: {
                                    line: 41,
                                    column: 131,
                                    offset: 1470
                                  },
                                  end: {
                                    line: 41,
                                    column: 139,
                                    offset: 1478
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: '.',
                                position: {
                                  start: {
                                    line: 41,
                                    column: 139,
                                    offset: 1478
                                  },
                                  end: {
                                    line: 41,
                                    column: 140,
                                    offset: 1479
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 41, column: 7, offset: 1346 },
                              end: { line: 41, column: 140, offset: 1479 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 41, column: 5, offset: 1344 },
                          end: { line: 41, column: 140, offset: 1479 }
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
                                value: 'key',
                                position: {
                                  start: { line: 42, column: 7, offset: 1486 },
                                  end: {
                                    line: 42,
                                    column: 12,
                                    offset: 1491
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - private key(s) in PEM format. Encrypted keys will be decrypted using the ',
                                position: {
                                  start: {
                                    line: 42,
                                    column: 12,
                                    offset: 1491
                                  },
                                  end: {
                                    line: 42,
                                    column: 88,
                                    offset: 1567
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'passphrase',
                                position: {
                                  start: {
                                    line: 42,
                                    column: 88,
                                    offset: 1567
                                  },
                                  end: {
                                    line: 42,
                                    column: 100,
                                    offset: 1579
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' option. Multiple keys using different algorithms can be provided as an array of unencrypted key strings or buffers, or an array of objects in the form ',
                                position: {
                                  start: {
                                    line: 42,
                                    column: 100,
                                    offset: 1579
                                  },
                                  end: {
                                    line: 42,
                                    column: 252,
                                    offset: 1731
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: '{ pem: string|Buffer, passphrase: string }',
                                position: {
                                  start: {
                                    line: 42,
                                    column: 252,
                                    offset: 1731
                                  },
                                  end: {
                                    line: 42,
                                    column: 296,
                                    offset: 1775
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: '.',
                                position: {
                                  start: {
                                    line: 42,
                                    column: 296,
                                    offset: 1775
                                  },
                                  end: {
                                    line: 42,
                                    column: 297,
                                    offset: 1776
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 42, column: 7, offset: 1486 },
                              end: { line: 42, column: 297, offset: 1776 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 42, column: 5, offset: 1484 },
                          end: { line: 42, column: 297, offset: 1776 }
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
                                value: 'cert',
                                position: {
                                  start: { line: 43, column: 7, offset: 1783 },
                                  end: {
                                    line: 43,
                                    column: 13,
                                    offset: 1789
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - cert chain(s) in PEM format. One cert chain should be provided per private key.',
                                position: {
                                  start: {
                                    line: 43,
                                    column: 13,
                                    offset: 1789
                                  },
                                  end: {
                                    line: 43,
                                    column: 95,
                                    offset: 1871
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 43, column: 7, offset: 1783 },
                              end: { line: 43, column: 95, offset: 1871 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 43, column: 5, offset: 1781 },
                          end: { line: 43, column: 95, offset: 1871 }
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
                                value: 'passphrase',
                                position: {
                                  start: { line: 44, column: 7, offset: 1878 },
                                  end: {
                                    line: 44,
                                    column: 19,
                                    offset: 1890
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - used to decrypt the private key(s).',
                                position: {
                                  start: {
                                    line: 44,
                                    column: 19,
                                    offset: 1890
                                  },
                                  end: {
                                    line: 44,
                                    column: 57,
                                    offset: 1928
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 44, column: 7, offset: 1878 },
                              end: { line: 44, column: 57, offset: 1928 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 44, column: 5, offset: 1876 },
                          end: { line: 44, column: 57, offset: 1928 }
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
                                value: 'supportPerMessageDeflate',
                                position: {
                                  start: { line: 45, column: 7, offset: 1935 },
                                  end: {
                                    line: 45,
                                    column: 33,
                                    offset: 1961
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - if ',
                                position: {
                                  start: {
                                    line: 45,
                                    column: 33,
                                    offset: 1961
                                  },
                                  end: {
                                    line: 45,
                                    column: 39,
                                    offset: 1967
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'true',
                                position: {
                                  start: {
                                    line: 45,
                                    column: 39,
                                    offset: 1967
                                  },
                                  end: {
                                    line: 45,
                                    column: 45,
                                    offset: 1973
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ', indicates to WebSocket clients that the server supports ',
                                position: {
                                  start: {
                                    line: 45,
                                    column: 45,
                                    offset: 1973
                                  },
                                  end: {
                                    line: 45,
                                    column: 103,
                                    offset: 2031
                                  }
                                }
                              },
                              {
                                type: 'link',
                                title: null,
                                url: 'https://datatracker.ietf.org/doc/html/rfc7692',
                                children: [
                                  {
                                    type: 'text',
                                    value: 'Compression Extensions for WebSocket',
                                    position: {
                                      start: {
                                        line: 45,
                                        column: 104,
                                        offset: 2032
                                      },
                                      end: {
                                        line: 45,
                                        column: 140,
                                        offset: 2068
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: {
                                    line: 45,
                                    column: 103,
                                    offset: 2031
                                  },
                                  end: {
                                    line: 45,
                                    column: 188,
                                    offset: 2116
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: '. If an incoming WebSocket connection has requested compression extensions via the ',
                                position: {
                                  start: {
                                    line: 45,
                                    column: 188,
                                    offset: 2116
                                  },
                                  end: {
                                    line: 45,
                                    column: 271,
                                    offset: 2199
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'Sec-WebSocket-Extensions: permessage-deflate',
                                position: {
                                  start: {
                                    line: 45,
                                    column: 271,
                                    offset: 2199
                                  },
                                  end: {
                                    line: 45,
                                    column: 317,
                                    offset: 2245
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' header, all messages exchanged in the WebSocket connection will be compressed using ',
                                position: {
                                  start: {
                                    line: 45,
                                    column: 317,
                                    offset: 2245
                                  },
                                  end: {
                                    line: 45,
                                    column: 402,
                                    offset: 2330
                                  }
                                }
                              },
                              {
                                type: 'link',
                                title: null,
                                url: 'https://nodejs.org/api/zlib.html',
                                children: [
                                  {
                                    type: 'text',
                                    value: 'zlib',
                                    position: {
                                      start: {
                                        line: 45,
                                        column: 403,
                                        offset: 2331
                                      },
                                      end: {
                                        line: 45,
                                        column: 407,
                                        offset: 2335
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: {
                                    line: 45,
                                    column: 402,
                                    offset: 2330
                                  },
                                  end: {
                                    line: 45,
                                    column: 442,
                                    offset: 2370
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' default options. Defaults to ',
                                position: {
                                  start: {
                                    line: 45,
                                    column: 442,
                                    offset: 2370
                                  },
                                  end: {
                                    line: 45,
                                    column: 472,
                                    offset: 2400
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'false',
                                position: {
                                  start: {
                                    line: 45,
                                    column: 472,
                                    offset: 2400
                                  },
                                  end: {
                                    line: 45,
                                    column: 479,
                                    offset: 2407
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: '.',
                                position: {
                                  start: {
                                    line: 45,
                                    column: 479,
                                    offset: 2407
                                  },
                                  end: {
                                    line: 45,
                                    column: 480,
                                    offset: 2408
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 45, column: 7, offset: 1935 },
                              end: { line: 45, column: 480, offset: 2408 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 45, column: 5, offset: 1933 },
                          end: { line: 45, column: 480, offset: 2408 }
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
                                value: 'maxMessageLength',
                                position: {
                                  start: { line: 46, column: 7, offset: 2415 },
                                  end: {
                                    line: 46,
                                    column: 25,
                                    offset: 2433
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the maximum length in bytes of sent messages. If a message is longer than ',
                                position: {
                                  start: {
                                    line: 46,
                                    column: 25,
                                    offset: 2433
                                  },
                                  end: {
                                    line: 46,
                                    column: 102,
                                    offset: 2510
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'maxMessageLength',
                                position: {
                                  start: {
                                    line: 46,
                                    column: 102,
                                    offset: 2510
                                  },
                                  end: {
                                    line: 46,
                                    column: 120,
                                    offset: 2528
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ', it is split into fragmented messages that are reassembled by the receiver.',
                                position: {
                                  start: {
                                    line: 46,
                                    column: 120,
                                    offset: 2528
                                  },
                                  end: {
                                    line: 46,
                                    column: 196,
                                    offset: 2604
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 46, column: 7, offset: 2415 },
                              end: { line: 46, column: 196, offset: 2604 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 46, column: 5, offset: 2413 },
                          end: { line: 46, column: 196, offset: 2604 }
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
                                value: 'socketBufferLength',
                                position: {
                                  start: { line: 47, column: 7, offset: 2611 },
                                  end: {
                                    line: 47,
                                    column: 27,
                                    offset: 2631
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - length in bytes of the internal buffer of the underlying ',
                                position: {
                                  start: {
                                    line: 47,
                                    column: 27,
                                    offset: 2631
                                  },
                                  end: {
                                    line: 47,
                                    column: 87,
                                    offset: 2691
                                  }
                                }
                              },
                              {
                                type: 'link',
                                title: null,
                                url: 'https://nodejs.org/api/net.html#class-netsocket',
                                children: [
                                  {
                                    type: 'text',
                                    value: 'socket',
                                    position: {
                                      start: {
                                        line: 47,
                                        column: 88,
                                        offset: 2692
                                      },
                                      end: {
                                        line: 47,
                                        column: 94,
                                        offset: 2698
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: {
                                    line: 47,
                                    column: 87,
                                    offset: 2691
                                  },
                                  end: {
                                    line: 47,
                                    column: 144,
                                    offset: 2748
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' for all connections to the server.',
                                position: {
                                  start: {
                                    line: 47,
                                    column: 144,
                                    offset: 2748
                                  },
                                  end: {
                                    line: 47,
                                    column: 179,
                                    offset: 2783
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 47, column: 7, offset: 2611 },
                              end: { line: 47, column: 179, offset: 2783 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 47, column: 5, offset: 2609 },
                          end: { line: 47, column: 179, offset: 2783 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 41, column: 5, offset: 1344 },
                      end: { line: 47, column: 179, offset: 2783 }
                    }
                  }
                ],
                position: {
                  start: { line: 40, column: 3, offset: 1328 },
                  end: { line: 47, column: 179, offset: 2783 }
                }
              }
            ],
            position: {
              start: { line: 39, column: 3, offset: 1150 },
              end: { line: 47, column: 179, offset: 2783 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Return:',
                position: {
                  start: { line: 49, column: 1, offset: 2785 },
                  end: { line: 49, column: 8, offset: 2792 }
                }
              }
            ],
            position: {
              start: { line: 49, column: 1, offset: 2785 },
              end: { line: 49, column: 8, offset: 2792 }
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
                          start: { line: 50, column: 5, offset: 2797 },
                          end: { line: 50, column: 13, offset: 2805 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - an instance of the WebSocketSecureServer.',
                        position: {
                          start: { line: 50, column: 13, offset: 2805 },
                          end: { line: 50, column: 57, offset: 2849 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 50, column: 5, offset: 2797 },
                      end: { line: 50, column: 57, offset: 2849 }
                    }
                  }
                ],
                position: {
                  start: { line: 50, column: 3, offset: 2795 },
                  end: { line: 50, column: 57, offset: 2849 }
                }
              }
            ],
            position: {
              start: { line: 50, column: 3, offset: 2795 },
              end: { line: 50, column: 57, offset: 2849 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: 'const server = new WebSocketSecureServer({\n' +
              "  key: fs.readFileSync('/path/to/my-key'),\n" +
              "  cert: fs.readFileSync('/path/to/my-cert'),\n" +
              '})\n' +
              '\n' +
              'server.listen(4443, () => {\n' +
              "  console.log('WebSocket secure server listening on port 4443')\n" +
              '})',
            position: {
              start: { line: 52, column: 1, offset: 2851 },
              end: { line: 61, column: 4, offset: 3098 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 61, column: 4, offset: 3098 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-websocket/WebSocketSecureServer.js'
  },
  {
    name: 'WebSocketServer',
    docs: '```coffeescript [specscript]\n' +
      "module http 'https://nodejs.org/api/http.html'\n" +
      "module net 'https://nodejs.org/api/net.html'\n" +
      '\n' +
      'websocketHandler (websocket WebSocket)=>undefined\n' +
      'httpHandler (request http.ClientRequest, response http.ServerResponse)=>undefined\n' +
      'upgradeHandler (request http.ClientRequest, socket net.Socket, head Buffer)=>undefined\n' +
      '\n' +
      'new WebSocketServer() -> server WebSocketServer\n' +
      'new WebSocketServer(websocketHandler) -> server WebSocketServer\n' +
      '\n' +
      'new WebSocketServer(websocketHandler, options {\n' +
      '  httpHandler: httpHandler,\n' +
      '  secure: boolean,\n' +
      '  key: string,\n' +
      '  cert: string,\n' +
      '  passphrase: string\n' +
      '}) -> server WebSocketServer\n' +
      '\n' +
      'new WebSocketServer(options {\n' +
      '  websocketHandler: websocketHandler,\n' +
      '  httpHandler: httpHandler,\n' +
      '  secure: boolean,\n' +
      '  key: string,\n' +
      '  cert: string,\n' +
      '  passphrase: string\n' +
      '}) -> server WebSocketServer\n' +
      '```\n' +
      '\n' +
      'Presidium WebSocketServer class.\n' +
      '\n' +
      'Arguments:\n' +
      "  * `websocketHandler` - a handler function that expects an instance of a [`ServerWebSocket`](/docs/ServerWebSocket). Represents the server's WebSocket connection to the client.\n" +
      '  * `options`\n' +
      '    * `httpHandler` - function that processes incoming HTTP requests from clients. Defaults to an HTTP handler that responds with `200 OK`.\n' +
      '    * `secure` - if `true`, starts an HTTPS server instead of an HTTP server. Clients must connect to the server using the `wss` protocol instead of the `ws` protocol. Requires `key` and `cert` options.\n' +
      '    * `key` - private key(s) in PEM format. Encrypted keys will be decrypted using the `passphrase` option. Multiple keys using different algorithms can be provided as an array of unencrypted key strings or buffers, or an array of objects in the form `{ pem: string|Buffer, passphrase: string }`.\n' +
      '    * `cert` - cert chain(s) in PEM format. One cert chain should be provided per private key.\n' +
      '    * `passphrase` - used to decrypt the private key(s).\n' +
      '    * `supportPerMessageDeflate` - if `true`, indicates to WebSocket clients that the server supports [Compression Extensions for WebSocket](https://datatracker.ietf.org/doc/html/rfc7692). If an incoming WebSocket connection has requested compression extensions via the `Sec-WebSocket-Extensions: permessage-deflate` header, all messages exchanged in the WebSocket connection will be compressed using [zlib](https://nodejs.org/api/zlib.html) default options. Defaults to `false`.\n' +
      '    * `maxMessageLength` - the maximum length in bytes of sent messages. If a message is longer than `maxMessageLength`, it is split into fragmented messages that are reassembled by the receiver.\n' +
      '    * `socketBufferLength` - length in bytes of the internal buffer of the underlying [socket](https://nodejs.org/api/net.html#class-netsocket) for all connections to the server.\n' +
      '\n' +
      'Return:\n' +
      '  * `server` - an instance of the WebSocketServer.\n' +
      '\n' +
      '```javascript\n' +
      'const server = new WebSocketServer()\n' +
      '\n' +
      'server.listen(1337, () => {\n' +
      "  console.log('WebSocket server listening on port 1337')\n" +
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
                value: 'WebSocketServer',
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
            value: "module http 'https://nodejs.org/api/http.html'\n" +
              "module net 'https://nodejs.org/api/net.html'\n" +
              '\n' +
              'websocketHandler (websocket WebSocket)=>undefined\n' +
              'httpHandler (request http.ClientRequest, response http.ServerResponse)=>undefined\n' +
              'upgradeHandler (request http.ClientRequest, socket net.Socket, head Buffer)=>undefined\n' +
              '\n' +
              'new WebSocketServer() -> server WebSocketServer\n' +
              'new WebSocketServer(websocketHandler) -> server WebSocketServer\n' +
              '\n' +
              'new WebSocketServer(websocketHandler, options {\n' +
              '  httpHandler: httpHandler,\n' +
              '  secure: boolean,\n' +
              '  key: string,\n' +
              '  cert: string,\n' +
              '  passphrase: string\n' +
              '}) -> server WebSocketServer\n' +
              '\n' +
              'new WebSocketServer(options {\n' +
              '  websocketHandler: websocketHandler,\n' +
              '  httpHandler: httpHandler,\n' +
              '  secure: boolean,\n' +
              '  key: string,\n' +
              '  cert: string,\n' +
              '  passphrase: string\n' +
              '}) -> server WebSocketServer',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 28, column: 4, offset: 831 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Presidium WebSocketServer class.',
                position: {
                  start: { line: 30, column: 1, offset: 833 },
                  end: { line: 30, column: 33, offset: 865 }
                }
              }
            ],
            position: {
              start: { line: 30, column: 1, offset: 833 },
              end: { line: 30, column: 33, offset: 865 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Arguments:',
                position: {
                  start: { line: 32, column: 1, offset: 867 },
                  end: { line: 32, column: 11, offset: 877 }
                }
              }
            ],
            position: {
              start: { line: 32, column: 1, offset: 867 },
              end: { line: 32, column: 11, offset: 877 }
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
                        value: 'websocketHandler',
                        position: {
                          start: { line: 33, column: 5, offset: 882 },
                          end: { line: 33, column: 23, offset: 900 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - a handler function that expects an instance of a ',
                        position: {
                          start: { line: 33, column: 23, offset: 900 },
                          end: { line: 33, column: 75, offset: 952 }
                        }
                      },
                      {
                        type: 'link',
                        title: null,
                        url: '/docs/ServerWebSocket',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'ServerWebSocket',
                            position: {
                              start: { line: 33, column: 76, offset: 953 },
                              end: { line: 33, column: 93, offset: 970 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 33, column: 75, offset: 952 },
                          end: { line: 33, column: 117, offset: 994 }
                        }
                      },
                      {
                        type: 'text',
                        value: ". Represents the server's WebSocket connection to the client.",
                        position: {
                          start: { line: 33, column: 117, offset: 994 },
                          end: { line: 33, column: 178, offset: 1055 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 33, column: 5, offset: 882 },
                      end: { line: 33, column: 178, offset: 1055 }
                    }
                  }
                ],
                position: {
                  start: { line: 33, column: 3, offset: 880 },
                  end: { line: 33, column: 178, offset: 1055 }
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
                          start: { line: 34, column: 5, offset: 1060 },
                          end: { line: 34, column: 14, offset: 1069 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 34, column: 5, offset: 1060 },
                      end: { line: 34, column: 14, offset: 1069 }
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
                                value: 'httpHandler',
                                position: {
                                  start: { line: 35, column: 7, offset: 1076 },
                                  end: {
                                    line: 35,
                                    column: 20,
                                    offset: 1089
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - function that processes incoming HTTP requests from clients. Defaults to an HTTP handler that responds with ',
                                position: {
                                  start: {
                                    line: 35,
                                    column: 20,
                                    offset: 1089
                                  },
                                  end: {
                                    line: 35,
                                    column: 131,
                                    offset: 1200
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: '200 OK',
                                position: {
                                  start: {
                                    line: 35,
                                    column: 131,
                                    offset: 1200
                                  },
                                  end: {
                                    line: 35,
                                    column: 139,
                                    offset: 1208
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: '.',
                                position: {
                                  start: {
                                    line: 35,
                                    column: 139,
                                    offset: 1208
                                  },
                                  end: {
                                    line: 35,
                                    column: 140,
                                    offset: 1209
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 35, column: 7, offset: 1076 },
                              end: { line: 35, column: 140, offset: 1209 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 35, column: 5, offset: 1074 },
                          end: { line: 35, column: 140, offset: 1209 }
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
                                value: 'secure',
                                position: {
                                  start: { line: 36, column: 7, offset: 1216 },
                                  end: {
                                    line: 36,
                                    column: 15,
                                    offset: 1224
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - if ',
                                position: {
                                  start: {
                                    line: 36,
                                    column: 15,
                                    offset: 1224
                                  },
                                  end: {
                                    line: 36,
                                    column: 21,
                                    offset: 1230
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'true',
                                position: {
                                  start: {
                                    line: 36,
                                    column: 21,
                                    offset: 1230
                                  },
                                  end: {
                                    line: 36,
                                    column: 27,
                                    offset: 1236
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ', starts an HTTPS server instead of an HTTP server. Clients must connect to the server using the ',
                                position: {
                                  start: {
                                    line: 36,
                                    column: 27,
                                    offset: 1236
                                  },
                                  end: {
                                    line: 36,
                                    column: 124,
                                    offset: 1333
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'wss',
                                position: {
                                  start: {
                                    line: 36,
                                    column: 124,
                                    offset: 1333
                                  },
                                  end: {
                                    line: 36,
                                    column: 129,
                                    offset: 1338
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' protocol instead of the ',
                                position: {
                                  start: {
                                    line: 36,
                                    column: 129,
                                    offset: 1338
                                  },
                                  end: {
                                    line: 36,
                                    column: 154,
                                    offset: 1363
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'ws',
                                position: {
                                  start: {
                                    line: 36,
                                    column: 154,
                                    offset: 1363
                                  },
                                  end: {
                                    line: 36,
                                    column: 158,
                                    offset: 1367
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' protocol. Requires ',
                                position: {
                                  start: {
                                    line: 36,
                                    column: 158,
                                    offset: 1367
                                  },
                                  end: {
                                    line: 36,
                                    column: 178,
                                    offset: 1387
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'key',
                                position: {
                                  start: {
                                    line: 36,
                                    column: 178,
                                    offset: 1387
                                  },
                                  end: {
                                    line: 36,
                                    column: 183,
                                    offset: 1392
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' and ',
                                position: {
                                  start: {
                                    line: 36,
                                    column: 183,
                                    offset: 1392
                                  },
                                  end: {
                                    line: 36,
                                    column: 188,
                                    offset: 1397
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'cert',
                                position: {
                                  start: {
                                    line: 36,
                                    column: 188,
                                    offset: 1397
                                  },
                                  end: {
                                    line: 36,
                                    column: 194,
                                    offset: 1403
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' options.',
                                position: {
                                  start: {
                                    line: 36,
                                    column: 194,
                                    offset: 1403
                                  },
                                  end: {
                                    line: 36,
                                    column: 203,
                                    offset: 1412
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 36, column: 7, offset: 1216 },
                              end: { line: 36, column: 203, offset: 1412 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 36, column: 5, offset: 1214 },
                          end: { line: 36, column: 203, offset: 1412 }
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
                                value: 'key',
                                position: {
                                  start: { line: 37, column: 7, offset: 1419 },
                                  end: {
                                    line: 37,
                                    column: 12,
                                    offset: 1424
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - private key(s) in PEM format. Encrypted keys will be decrypted using the ',
                                position: {
                                  start: {
                                    line: 37,
                                    column: 12,
                                    offset: 1424
                                  },
                                  end: {
                                    line: 37,
                                    column: 88,
                                    offset: 1500
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'passphrase',
                                position: {
                                  start: {
                                    line: 37,
                                    column: 88,
                                    offset: 1500
                                  },
                                  end: {
                                    line: 37,
                                    column: 100,
                                    offset: 1512
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' option. Multiple keys using different algorithms can be provided as an array of unencrypted key strings or buffers, or an array of objects in the form ',
                                position: {
                                  start: {
                                    line: 37,
                                    column: 100,
                                    offset: 1512
                                  },
                                  end: {
                                    line: 37,
                                    column: 252,
                                    offset: 1664
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: '{ pem: string|Buffer, passphrase: string }',
                                position: {
                                  start: {
                                    line: 37,
                                    column: 252,
                                    offset: 1664
                                  },
                                  end: {
                                    line: 37,
                                    column: 296,
                                    offset: 1708
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: '.',
                                position: {
                                  start: {
                                    line: 37,
                                    column: 296,
                                    offset: 1708
                                  },
                                  end: {
                                    line: 37,
                                    column: 297,
                                    offset: 1709
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 37, column: 7, offset: 1419 },
                              end: { line: 37, column: 297, offset: 1709 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 37, column: 5, offset: 1417 },
                          end: { line: 37, column: 297, offset: 1709 }
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
                                value: 'cert',
                                position: {
                                  start: { line: 38, column: 7, offset: 1716 },
                                  end: {
                                    line: 38,
                                    column: 13,
                                    offset: 1722
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - cert chain(s) in PEM format. One cert chain should be provided per private key.',
                                position: {
                                  start: {
                                    line: 38,
                                    column: 13,
                                    offset: 1722
                                  },
                                  end: {
                                    line: 38,
                                    column: 95,
                                    offset: 1804
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 38, column: 7, offset: 1716 },
                              end: { line: 38, column: 95, offset: 1804 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 38, column: 5, offset: 1714 },
                          end: { line: 38, column: 95, offset: 1804 }
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
                                value: 'passphrase',
                                position: {
                                  start: { line: 39, column: 7, offset: 1811 },
                                  end: {
                                    line: 39,
                                    column: 19,
                                    offset: 1823
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - used to decrypt the private key(s).',
                                position: {
                                  start: {
                                    line: 39,
                                    column: 19,
                                    offset: 1823
                                  },
                                  end: {
                                    line: 39,
                                    column: 57,
                                    offset: 1861
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 39, column: 7, offset: 1811 },
                              end: { line: 39, column: 57, offset: 1861 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 39, column: 5, offset: 1809 },
                          end: { line: 39, column: 57, offset: 1861 }
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
                                value: 'supportPerMessageDeflate',
                                position: {
                                  start: { line: 40, column: 7, offset: 1868 },
                                  end: {
                                    line: 40,
                                    column: 33,
                                    offset: 1894
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - if ',
                                position: {
                                  start: {
                                    line: 40,
                                    column: 33,
                                    offset: 1894
                                  },
                                  end: {
                                    line: 40,
                                    column: 39,
                                    offset: 1900
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'true',
                                position: {
                                  start: {
                                    line: 40,
                                    column: 39,
                                    offset: 1900
                                  },
                                  end: {
                                    line: 40,
                                    column: 45,
                                    offset: 1906
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ', indicates to WebSocket clients that the server supports ',
                                position: {
                                  start: {
                                    line: 40,
                                    column: 45,
                                    offset: 1906
                                  },
                                  end: {
                                    line: 40,
                                    column: 103,
                                    offset: 1964
                                  }
                                }
                              },
                              {
                                type: 'link',
                                title: null,
                                url: 'https://datatracker.ietf.org/doc/html/rfc7692',
                                children: [
                                  {
                                    type: 'text',
                                    value: 'Compression Extensions for WebSocket',
                                    position: {
                                      start: {
                                        line: 40,
                                        column: 104,
                                        offset: 1965
                                      },
                                      end: {
                                        line: 40,
                                        column: 140,
                                        offset: 2001
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: {
                                    line: 40,
                                    column: 103,
                                    offset: 1964
                                  },
                                  end: {
                                    line: 40,
                                    column: 188,
                                    offset: 2049
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: '. If an incoming WebSocket connection has requested compression extensions via the ',
                                position: {
                                  start: {
                                    line: 40,
                                    column: 188,
                                    offset: 2049
                                  },
                                  end: {
                                    line: 40,
                                    column: 271,
                                    offset: 2132
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'Sec-WebSocket-Extensions: permessage-deflate',
                                position: {
                                  start: {
                                    line: 40,
                                    column: 271,
                                    offset: 2132
                                  },
                                  end: {
                                    line: 40,
                                    column: 317,
                                    offset: 2178
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' header, all messages exchanged in the WebSocket connection will be compressed using ',
                                position: {
                                  start: {
                                    line: 40,
                                    column: 317,
                                    offset: 2178
                                  },
                                  end: {
                                    line: 40,
                                    column: 402,
                                    offset: 2263
                                  }
                                }
                              },
                              {
                                type: 'link',
                                title: null,
                                url: 'https://nodejs.org/api/zlib.html',
                                children: [
                                  {
                                    type: 'text',
                                    value: 'zlib',
                                    position: {
                                      start: {
                                        line: 40,
                                        column: 403,
                                        offset: 2264
                                      },
                                      end: {
                                        line: 40,
                                        column: 407,
                                        offset: 2268
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: {
                                    line: 40,
                                    column: 402,
                                    offset: 2263
                                  },
                                  end: {
                                    line: 40,
                                    column: 442,
                                    offset: 2303
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' default options. Defaults to ',
                                position: {
                                  start: {
                                    line: 40,
                                    column: 442,
                                    offset: 2303
                                  },
                                  end: {
                                    line: 40,
                                    column: 472,
                                    offset: 2333
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'false',
                                position: {
                                  start: {
                                    line: 40,
                                    column: 472,
                                    offset: 2333
                                  },
                                  end: {
                                    line: 40,
                                    column: 479,
                                    offset: 2340
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: '.',
                                position: {
                                  start: {
                                    line: 40,
                                    column: 479,
                                    offset: 2340
                                  },
                                  end: {
                                    line: 40,
                                    column: 480,
                                    offset: 2341
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 40, column: 7, offset: 1868 },
                              end: { line: 40, column: 480, offset: 2341 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 40, column: 5, offset: 1866 },
                          end: { line: 40, column: 480, offset: 2341 }
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
                                value: 'maxMessageLength',
                                position: {
                                  start: { line: 41, column: 7, offset: 2348 },
                                  end: {
                                    line: 41,
                                    column: 25,
                                    offset: 2366
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the maximum length in bytes of sent messages. If a message is longer than ',
                                position: {
                                  start: {
                                    line: 41,
                                    column: 25,
                                    offset: 2366
                                  },
                                  end: {
                                    line: 41,
                                    column: 102,
                                    offset: 2443
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'maxMessageLength',
                                position: {
                                  start: {
                                    line: 41,
                                    column: 102,
                                    offset: 2443
                                  },
                                  end: {
                                    line: 41,
                                    column: 120,
                                    offset: 2461
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ', it is split into fragmented messages that are reassembled by the receiver.',
                                position: {
                                  start: {
                                    line: 41,
                                    column: 120,
                                    offset: 2461
                                  },
                                  end: {
                                    line: 41,
                                    column: 196,
                                    offset: 2537
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 41, column: 7, offset: 2348 },
                              end: { line: 41, column: 196, offset: 2537 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 41, column: 5, offset: 2346 },
                          end: { line: 41, column: 196, offset: 2537 }
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
                                value: 'socketBufferLength',
                                position: {
                                  start: { line: 42, column: 7, offset: 2544 },
                                  end: {
                                    line: 42,
                                    column: 27,
                                    offset: 2564
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - length in bytes of the internal buffer of the underlying ',
                                position: {
                                  start: {
                                    line: 42,
                                    column: 27,
                                    offset: 2564
                                  },
                                  end: {
                                    line: 42,
                                    column: 87,
                                    offset: 2624
                                  }
                                }
                              },
                              {
                                type: 'link',
                                title: null,
                                url: 'https://nodejs.org/api/net.html#class-netsocket',
                                children: [
                                  {
                                    type: 'text',
                                    value: 'socket',
                                    position: {
                                      start: {
                                        line: 42,
                                        column: 88,
                                        offset: 2625
                                      },
                                      end: {
                                        line: 42,
                                        column: 94,
                                        offset: 2631
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: {
                                    line: 42,
                                    column: 87,
                                    offset: 2624
                                  },
                                  end: {
                                    line: 42,
                                    column: 144,
                                    offset: 2681
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' for all connections to the server.',
                                position: {
                                  start: {
                                    line: 42,
                                    column: 144,
                                    offset: 2681
                                  },
                                  end: {
                                    line: 42,
                                    column: 179,
                                    offset: 2716
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 42, column: 7, offset: 2544 },
                              end: { line: 42, column: 179, offset: 2716 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 42, column: 5, offset: 2542 },
                          end: { line: 42, column: 179, offset: 2716 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 35, column: 5, offset: 1074 },
                      end: { line: 42, column: 179, offset: 2716 }
                    }
                  }
                ],
                position: {
                  start: { line: 34, column: 3, offset: 1058 },
                  end: { line: 42, column: 179, offset: 2716 }
                }
              }
            ],
            position: {
              start: { line: 33, column: 3, offset: 880 },
              end: { line: 42, column: 179, offset: 2716 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Return:',
                position: {
                  start: { line: 44, column: 1, offset: 2718 },
                  end: { line: 44, column: 8, offset: 2725 }
                }
              }
            ],
            position: {
              start: { line: 44, column: 1, offset: 2718 },
              end: { line: 44, column: 8, offset: 2725 }
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
                          start: { line: 45, column: 5, offset: 2730 },
                          end: { line: 45, column: 13, offset: 2738 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - an instance of the WebSocketServer.',
                        position: {
                          start: { line: 45, column: 13, offset: 2738 },
                          end: { line: 45, column: 51, offset: 2776 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 45, column: 5, offset: 2730 },
                      end: { line: 45, column: 51, offset: 2776 }
                    }
                  }
                ],
                position: {
                  start: { line: 45, column: 3, offset: 2728 },
                  end: { line: 45, column: 51, offset: 2776 }
                }
              }
            ],
            position: {
              start: { line: 45, column: 3, offset: 2728 },
              end: { line: 45, column: 51, offset: 2776 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: 'const server = new WebSocketServer()\n' +
              '\n' +
              'server.listen(1337, () => {\n' +
              "  console.log('WebSocket server listening on port 1337')\n" +
              '})',
            position: {
              start: { line: 47, column: 1, offset: 2778 },
              end: { line: 53, column: 4, offset: 2921 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 53, column: 4, offset: 2921 }
        }
      }
    },
    methods: [
      {
        name: 'Event: connection',
        docs: '```coffeescript [specscript]\n' +
          "emit('connection', websocket ServerWebSocket)\n" +
          '```\n' +
          '\n' +
          'Event Data:\n' +
          "  * `websocket` - an instance of a [ServerWebSocket](/docs/ServerWebSocket). Represents the server's WebSocket connection to the client.\n" +
          '\n' +
          '```javascript\n' +
          'const server = new WebSocketServer()\n' +
          '\n' +
          "server.on('connection', websocket => {\n" +
          "  console.log('New WebSocket connection.')\n" +
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
                    value: 'Event: connection',
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
                value: "emit('connection', websocket ServerWebSocket)",
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
                    value: 'Event Data:',
                    position: {
                      start: { line: 5, column: 1, offset: 80 },
                      end: { line: 5, column: 12, offset: 91 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 80 },
                  end: { line: 5, column: 12, offset: 91 }
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
                            value: 'websocket',
                            position: {
                              start: { line: 6, column: 5, offset: 96 },
                              end: { line: 6, column: 16, offset: 107 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an instance of a ',
                            position: {
                              start: { line: 6, column: 16, offset: 107 },
                              end: { line: 6, column: 36, offset: 127 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: '/docs/ServerWebSocket',
                            children: [
                              {
                                type: 'text',
                                value: 'ServerWebSocket',
                                position: {
                                  start: { line: 6, column: 37, offset: 128 },
                                  end: { line: 6, column: 52, offset: 143 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 6, column: 36, offset: 127 },
                              end: { line: 6, column: 76, offset: 167 }
                            }
                          },
                          {
                            type: 'text',
                            value: ". Represents the server's WebSocket connection to the client.",
                            position: {
                              start: { line: 6, column: 76, offset: 167 },
                              end: { line: 6, column: 137, offset: 228 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 6, column: 5, offset: 96 },
                          end: { line: 6, column: 137, offset: 228 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 6, column: 3, offset: 94 },
                      end: { line: 6, column: 137, offset: 228 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 3, offset: 94 },
                  end: { line: 6, column: 137, offset: 228 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const server = new WebSocketServer()\n' +
                  '\n' +
                  "server.on('connection', websocket => {\n" +
                  "  console.log('New WebSocket connection.')\n" +
                  '})',
                position: {
                  start: { line: 8, column: 1, offset: 230 },
                  end: { line: 14, column: 4, offset: 370 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 14, column: 4, offset: 370 }
            }
          }
        }
      },
      {
        name: 'Event: request',
        docs: '```coffeescript [specscript]\n' +
          "module http 'https://nodejs.org/api/http.html'\n" +
          '\n' +
          "emit('request', request http.ClientRequest, response http.ServerResponse)\n" +
          '```\n' +
          '\n' +
          'Event Data:\n' +
          "  * `request` - an instance of a [Node.js http.ClientRequest](https://nodejs.org/docs/latest-v24.x/api/http.html#class-httpclientrequest). Represents a client's HTTP request to the server.\n" +
          "  * `response` - an instance of a [Node.js http.ServerResponse](https://nodejs.org/docs/latest-v24.x/api/http.html#class-httpserverresponse). Represents the server's HTTP response to the client.\n" +
          '\n' +
          '```javascript\n' +
          'const server = new WebSocketServer()\n' +
          '\n' +
          "server.on('request', (request, response) => {\n" +
          "  console.log('New HTTP request.')\n" +
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
                    value: 'Event: request',
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
                value: "module http 'https://nodejs.org/api/http.html'\n" +
                  '\n' +
                  "emit('request', request http.ClientRequest, response http.ServerResponse)",
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 5, column: 4, offset: 154 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Event Data:',
                    position: {
                      start: { line: 7, column: 1, offset: 156 },
                      end: { line: 7, column: 12, offset: 167 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 156 },
                  end: { line: 7, column: 12, offset: 167 }
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
                            value: 'request',
                            position: {
                              start: { line: 8, column: 5, offset: 172 },
                              end: { line: 8, column: 14, offset: 181 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an instance of a ',
                            position: {
                              start: { line: 8, column: 14, offset: 181 },
                              end: { line: 8, column: 34, offset: 201 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/docs/latest-v24.x/api/http.html#class-httpclientrequest',
                            children: [
                              {
                                type: 'text',
                                value: 'Node.js http.ClientRequest',
                                position: {
                                  start: { line: 8, column: 35, offset: 202 },
                                  end: { line: 8, column: 61, offset: 228 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 8, column: 34, offset: 201 },
                              end: { line: 8, column: 138, offset: 305 }
                            }
                          },
                          {
                            type: 'text',
                            value: ". Represents a client's HTTP request to the server.",
                            position: {
                              start: { line: 8, column: 138, offset: 305 },
                              end: { line: 8, column: 189, offset: 356 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 172 },
                          end: { line: 8, column: 189, offset: 356 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 170 },
                      end: { line: 8, column: 189, offset: 356 }
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
                            value: 'response',
                            position: {
                              start: { line: 9, column: 5, offset: 361 },
                              end: { line: 9, column: 15, offset: 371 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an instance of a ',
                            position: {
                              start: { line: 9, column: 15, offset: 371 },
                              end: { line: 9, column: 35, offset: 391 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/docs/latest-v24.x/api/http.html#class-httpserverresponse',
                            children: [
                              {
                                type: 'text',
                                value: 'Node.js http.ServerResponse',
                                position: {
                                  start: { line: 9, column: 36, offset: 392 },
                                  end: { line: 9, column: 63, offset: 419 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 9, column: 35, offset: 391 },
                              end: { line: 9, column: 141, offset: 497 }
                            }
                          },
                          {
                            type: 'text',
                            value: ". Represents the server's HTTP response to the client.",
                            position: {
                              start: { line: 9, column: 141, offset: 497 },
                              end: { line: 9, column: 195, offset: 551 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 9, column: 5, offset: 361 },
                          end: { line: 9, column: 195, offset: 551 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 3, offset: 359 },
                      end: { line: 9, column: 195, offset: 551 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 170 },
                  end: { line: 9, column: 195, offset: 551 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const server = new WebSocketServer()\n' +
                  '\n' +
                  "server.on('request', (request, response) => {\n" +
                  "  console.log('New HTTP request.')\n" +
                  '})',
                position: {
                  start: { line: 11, column: 1, offset: 553 },
                  end: { line: 17, column: 4, offset: 692 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 17, column: 4, offset: 692 }
            }
          }
        }
      },
      {
        name: 'Event: upgrade',
        docs: '```coffeescript [specscript]\n' +
          "module http 'https://nodejs.org/api/http.html'\n" +
          "module net 'https://nodejs.org/api/net.html'\n" +
          '\n' +
          "emit('upgrade', request http.ClientRequest, socket net.Socket, head Buffer)\n" +
          '```\n' +
          '\n' +
          'Event Data:\n' +
          "  * `request` - an instance of a [Node.js http.ClientRequest](https://nodejs.org/docs/latest-v24.x/api/http.html#class-httpclientrequest). Represents a client's HTTP request to the server.\n" +
          "  * `socket` - an instance of a [Node.js net.Socket](https://nodejs.org/docs/latest-v24.x/api/net.html#class-netsocket). Represents the server's underlying TCP connection to the client.\n" +
          '  * `head` - a [Node.js buffer](https://nodejs.org/api/buffer.html) containing the first packet of the upgraded data stream.\n' +
          '\n' +
          '```javascript\n' +
          'const server = new WebSocketServer()\n' +
          '\n' +
          "server.on('upgrade', (request, socket, heaad) => {\n" +
          "  console.log('Upgrade')\n" +
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
                    value: 'Event: upgrade',
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
                value: "module http 'https://nodejs.org/api/http.html'\n" +
                  "module net 'https://nodejs.org/api/net.html'\n" +
                  '\n' +
                  "emit('upgrade', request http.ClientRequest, socket net.Socket, head Buffer)",
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 6, column: 4, offset: 201 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Event Data:',
                    position: {
                      start: { line: 8, column: 1, offset: 203 },
                      end: { line: 8, column: 12, offset: 214 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 1, offset: 203 },
                  end: { line: 8, column: 12, offset: 214 }
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
                            value: 'request',
                            position: {
                              start: { line: 9, column: 5, offset: 219 },
                              end: { line: 9, column: 14, offset: 228 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an instance of a ',
                            position: {
                              start: { line: 9, column: 14, offset: 228 },
                              end: { line: 9, column: 34, offset: 248 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/docs/latest-v24.x/api/http.html#class-httpclientrequest',
                            children: [
                              {
                                type: 'text',
                                value: 'Node.js http.ClientRequest',
                                position: {
                                  start: { line: 9, column: 35, offset: 249 },
                                  end: { line: 9, column: 61, offset: 275 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 9, column: 34, offset: 248 },
                              end: { line: 9, column: 138, offset: 352 }
                            }
                          },
                          {
                            type: 'text',
                            value: ". Represents a client's HTTP request to the server.",
                            position: {
                              start: { line: 9, column: 138, offset: 352 },
                              end: { line: 9, column: 189, offset: 403 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 9, column: 5, offset: 219 },
                          end: { line: 9, column: 189, offset: 403 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 3, offset: 217 },
                      end: { line: 9, column: 189, offset: 403 }
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
                            value: 'socket',
                            position: {
                              start: { line: 10, column: 5, offset: 408 },
                              end: { line: 10, column: 13, offset: 416 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an instance of a ',
                            position: {
                              start: { line: 10, column: 13, offset: 416 },
                              end: { line: 10, column: 33, offset: 436 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/docs/latest-v24.x/api/net.html#class-netsocket',
                            children: [
                              {
                                type: 'text',
                                value: 'Node.js net.Socket',
                                position: {
                                  start: { line: 10, column: 34, offset: 437 },
                                  end: { line: 10, column: 52, offset: 455 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 10, column: 33, offset: 436 },
                              end: { line: 10, column: 120, offset: 523 }
                            }
                          },
                          {
                            type: 'text',
                            value: ". Represents the server's underlying TCP connection to the client.",
                            position: {
                              start: { line: 10, column: 120, offset: 523 },
                              end: { line: 10, column: 186, offset: 589 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 10, column: 5, offset: 408 },
                          end: { line: 10, column: 186, offset: 589 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 10, column: 3, offset: 406 },
                      end: { line: 10, column: 186, offset: 589 }
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
                            value: 'head',
                            position: {
                              start: { line: 11, column: 5, offset: 594 },
                              end: { line: 11, column: 11, offset: 600 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a ',
                            position: {
                              start: { line: 11, column: 11, offset: 600 },
                              end: { line: 11, column: 16, offset: 605 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/api/buffer.html',
                            children: [
                              {
                                type: 'text',
                                value: 'Node.js buffer',
                                position: {
                                  start: { line: 11, column: 17, offset: 606 },
                                  end: { line: 11, column: 31, offset: 620 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 11, column: 16, offset: 605 },
                              end: { line: 11, column: 68, offset: 657 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' containing the first packet of the upgraded data stream.',
                            position: {
                              start: { line: 11, column: 68, offset: 657 },
                              end: { line: 11, column: 125, offset: 714 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 594 },
                          end: { line: 11, column: 125, offset: 714 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 592 },
                      end: { line: 11, column: 125, offset: 714 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 3, offset: 217 },
                  end: { line: 11, column: 125, offset: 714 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const server = new WebSocketServer()\n' +
                  '\n' +
                  "server.on('upgrade', (request, socket, heaad) => {\n" +
                  "  console.log('Upgrade')\n" +
                  '})',
                position: {
                  start: { line: 13, column: 1, offset: 716 },
                  end: { line: 19, column: 4, offset: 850 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 19, column: 4, offset: 850 }
            }
          }
        }
      },
      {
        name: 'Event: close',
        docs: '```coffeescript [specscript]\n' +
          "emit('close')\n" +
          '```\n' +
          '\n' +
          'Event Data:\n' +
          '  * (none)\n' +
          '\n' +
          '```javascript\n' +
          'const server = new WebSocketServer()\n' +
          '\n' +
          "server.on('close', websocket => {\n" +
          "  console.log('WebSocket server closed.')\n" +
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
                    value: 'Event: close',
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
                value: "emit('close')",
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 46 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Event Data:',
                    position: {
                      start: { line: 5, column: 1, offset: 48 },
                      end: { line: 5, column: 12, offset: 59 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 48 },
                  end: { line: 5, column: 12, offset: 59 }
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
                              start: { line: 6, column: 5, offset: 64 },
                              end: { line: 6, column: 11, offset: 70 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 6, column: 5, offset: 64 },
                          end: { line: 6, column: 11, offset: 70 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 6, column: 3, offset: 62 },
                      end: { line: 6, column: 11, offset: 70 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 3, offset: 62 },
                  end: { line: 6, column: 11, offset: 70 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const server = new WebSocketServer()\n' +
                  '\n' +
                  "server.on('close', websocket => {\n" +
                  "  console.log('WebSocket server closed.')\n" +
                  '})',
                position: {
                  start: { line: 8, column: 1, offset: 72 },
                  end: { line: 14, column: 4, offset: 206 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 14, column: 4, offset: 206 }
            }
          }
        }
      },
      {
        name: '_handleRequest',
        docs: '```coffeescript [specscript]\n' +
          'server._handleRequest(\n' +
          '  request http.ClientRequest,\n' +
          '  response http.ServerResponse\n' +
          ') -> ()\n' +
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
                    value: '_handleRequest',
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
                value: 'server._handleRequest(\n' +
                  '  request http.ClientRequest,\n' +
                  '  response http.ServerResponse\n' +
                  ') -> ()',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 6, column: 4, offset: 124 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 124 }
            }
          }
        }
      },
      {
        name: '_handleUpgrade',
        docs: '```coffeescript [specscript]\n' +
          'server._handleUpgrade(\n' +
          '  request http.ClientRequest,\n' +
          '  socket net.Socket,\n' +
          '  head Buffer # contains first packet of the upgraded stream\n' +
          ') -> ()\n' +
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
                    value: '_handleUpgrade',
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
                value: 'server._handleUpgrade(\n' +
                  '  request http.ClientRequest,\n' +
                  '  socket net.Socket,\n' +
                  '  head Buffer # contains first packet of the upgraded stream\n' +
                  ') -> ()',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 7, column: 4, offset: 175 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 175 }
            }
          }
        }
      },
      {
        name: '_changeBuffer',
        docs: '```coffeescript [specscript]\n' +
          '_changeBuffer(socket net.Socket) -> ()\n' +
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
                    value: '_changeBuffer',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 14, offset: 13 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 14, offset: 13 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 }
            }
          },
          docs: {
            type: 'root',
            children: [
              {
                type: 'code',
                lang: 'coffeescript',
                meta: '[specscript]',
                value: '_changeBuffer(socket net.Socket) -> ()',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 71 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 71 }
            }
          }
        }
      },
      {
        name: '_handleUpgradedConnection',
        docs: '```coffeescript [specscript]\n' +
          'server._handleUpgradedConnection(\n' +
          '  socket net.Socket,\n' +
          '  request http.ClientRequest,\n' +
          '  head Buffer\n' +
          ') -> ()\n' +
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
                    value: '_handleUpgradedConnection',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'server._handleUpgradedConnection(\n' +
                  '  socket net.Socket,\n' +
                  '  request http.ClientRequest,\n' +
                  '  head Buffer\n' +
                  ') -> ()',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 7, column: 4, offset: 139 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 139 }
            }
          }
        }
      },
      {
        name: '_handleOpen',
        docs: '```coffeescript [specscript]\n' +
          '_handleOpen(websocket ServerWebSocket) -> ()\n' +
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
                    value: '_handleOpen',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: '_handleOpen(websocket ServerWebSocket) -> ()',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 77 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 77 }
            }
          }
        }
      },
      {
        name: '_processChunks',
        docs: '```coffeescript [specscript]\n' +
          'server._processChunk(websocket ServerWebSocket) -> ()\n' +
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
                    value: '_processChunks',
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
                value: 'server._processChunk(websocket ServerWebSocket) -> ()',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 86 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 86 }
            }
          }
        }
      },
      {
        name: '_handleDataFrame',
        docs: '```coffeescript [specscript]\n' +
          'server._handleDataFrame(\n' +
          '  websocket ServerWebSocket,\n' +
          '  payload Buffer,\n' +
          '  opcode number,\n' +
          '  fin boolean\n' +
          ') -> ()\n' +
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
                    value: '_handleDataFrame',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'server._handleDataFrame(\n' +
                  '  websocket ServerWebSocket,\n' +
                  '  payload Buffer,\n' +
                  '  opcode number,\n' +
                  '  fin boolean\n' +
                  ') -> ()',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 8, column: 4, offset: 143 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 143 }
            }
          }
        }
      },
      {
        name: 'listen',
        docs: '```coffeescript [specscript]\n' +
          'server.listen(port number) -> undefined\n' +
          'server.listen(port number, callback ()=>()) -> undefined\n' +
          'server.listen(port number, host string, callback ()=>()) -> undefined\n' +
          'server.listen(port number, backlog number, callback ()=>()) -> undefined\n' +
          'server.listen(port number, host string, backlog number, callback ()=>()) -> undefined\n' +
          '```\n' +
          '\n' +
          'Starts the WebSocket server listening for connections.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `port` - the network port on which the server is listening.\n' +
          '  * `host` - the ip address of the network device on which the server is running. Defaults to the [0.0.0.0](https://en.wikipedia.org/wiki/0.0.0.0).\n' +
          '  * `backlog` - a number that specifies the maximum length of the queue of pending connections. Defaults to 511.\n' +
          '  * `callback` - a function that is called when the server has started listening.\n' +
          '\n' +
          'Return:\n' +
          '  * undefined\n' +
          '\n' +
          '```javascript\n' +
          'const server = new WebSocketServer()\n' +
          '\n' +
          'server.listen(1337, () => {\n' +
          "  console.log('WebSocket server listening on port 1337')\n" +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'server.listen(port number) -> undefined\n' +
                  'server.listen(port number, callback ()=>()) -> undefined\n' +
                  'server.listen(port number, host string, callback ()=>()) -> undefined\n' +
                  'server.listen(port number, backlog number, callback ()=>()) -> undefined\n' +
                  'server.listen(port number, host string, backlog number, callback ()=>()) -> undefined',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 7, column: 4, offset: 358 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Starts the WebSocket server listening for connections.',
                    position: {
                      start: { line: 9, column: 1, offset: 360 },
                      end: { line: 9, column: 55, offset: 414 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 1, offset: 360 },
                  end: { line: 9, column: 55, offset: 414 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 11, column: 1, offset: 416 },
                      end: { line: 11, column: 11, offset: 426 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 416 },
                  end: { line: 11, column: 11, offset: 426 }
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
                              start: { line: 12, column: 5, offset: 431 },
                              end: { line: 12, column: 11, offset: 437 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the network port on which the server is listening.',
                            position: {
                              start: { line: 12, column: 11, offset: 437 },
                              end: { line: 12, column: 64, offset: 490 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 431 },
                          end: { line: 12, column: 64, offset: 490 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 429 },
                      end: { line: 12, column: 64, offset: 490 }
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
                            value: 'host',
                            position: {
                              start: { line: 13, column: 5, offset: 495 },
                              end: { line: 13, column: 11, offset: 501 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the ip address of the network device on which the server is running. Defaults to the ',
                            position: {
                              start: { line: 13, column: 11, offset: 501 },
                              end: { line: 13, column: 99, offset: 589 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://en.wikipedia.org/wiki/0.0.0.0',
                            children: [
                              {
                                type: 'text',
                                value: '0.0.0.0',
                                position: {
                                  start: {
                                    line: 13,
                                    column: 100,
                                    offset: 590
                                  },
                                  end: {
                                    line: 13,
                                    column: 107,
                                    offset: 597
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 13, column: 99, offset: 589 },
                              end: { line: 13, column: 147, offset: 637 }
                            }
                          },
                          {
                            type: 'text',
                            value: '.',
                            position: {
                              start: { line: 13, column: 147, offset: 637 },
                              end: { line: 13, column: 148, offset: 638 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 13, column: 5, offset: 495 },
                          end: { line: 13, column: 148, offset: 638 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 13, column: 3, offset: 493 },
                      end: { line: 13, column: 148, offset: 638 }
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
                            value: 'backlog',
                            position: {
                              start: { line: 14, column: 5, offset: 643 },
                              end: { line: 14, column: 14, offset: 652 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a number that specifies the maximum length of the queue of pending connections. Defaults to 511.',
                            position: {
                              start: { line: 14, column: 14, offset: 652 },
                              end: { line: 14, column: 113, offset: 751 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 14, column: 5, offset: 643 },
                          end: { line: 14, column: 113, offset: 751 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 14, column: 3, offset: 641 },
                      end: { line: 14, column: 113, offset: 751 }
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
                              start: { line: 15, column: 5, offset: 756 },
                              end: { line: 15, column: 15, offset: 766 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a function that is called when the server has started listening.',
                            position: {
                              start: { line: 15, column: 15, offset: 766 },
                              end: { line: 15, column: 82, offset: 833 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 15, column: 5, offset: 756 },
                          end: { line: 15, column: 82, offset: 833 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 15, column: 3, offset: 754 },
                      end: { line: 15, column: 82, offset: 833 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 429 },
                  end: { line: 15, column: 82, offset: 833 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 17, column: 1, offset: 835 },
                      end: { line: 17, column: 8, offset: 842 }
                    }
                  }
                ],
                position: {
                  start: { line: 17, column: 1, offset: 835 },
                  end: { line: 17, column: 8, offset: 842 }
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
                            value: 'undefined',
                            position: {
                              start: { line: 18, column: 5, offset: 847 },
                              end: { line: 18, column: 14, offset: 856 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 18, column: 5, offset: 847 },
                          end: { line: 18, column: 14, offset: 856 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 18, column: 3, offset: 845 },
                      end: { line: 18, column: 14, offset: 856 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 3, offset: 845 },
                  end: { line: 18, column: 14, offset: 856 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const server = new WebSocketServer()\n' +
                  '\n' +
                  'server.listen(1337, () => {\n' +
                  "  console.log('WebSocket server listening on port 1337')\n" +
                  '})',
                position: {
                  start: { line: 20, column: 1, offset: 858 },
                  end: { line: 26, column: 4, offset: 1001 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 26, column: 4, offset: 1001 }
            }
          }
        }
      },
      {
        name: 'close',
        docs: '```coffeescript [specscript]\n' +
          'server.close() -> undefined\n' +
          'server.close(callback function) -> undefined\n' +
          '```\n' +
          '\n' +
          'Stops the server from accepting new connections and closes all current connections.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `callback` - a function that is called once the server has closed.\n' +
          '\n' +
          'Return:\n' +
          '  * undefined\n' +
          '\n' +
          '```javascript\n' +
          'const server = new WebSocketServer()\n' +
          '\n' +
          'server.listen(1337, () => {\n' +
          "  console.log('WebSocket server listening on port 1337')\n" +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'server.close() -> undefined\n' +
                  'server.close(callback function) -> undefined',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 4, column: 4, offset: 105 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Stops the server from accepting new connections and closes all current connections.',
                    position: {
                      start: { line: 6, column: 1, offset: 107 },
                      end: { line: 6, column: 84, offset: 190 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 1, offset: 107 },
                  end: { line: 6, column: 84, offset: 190 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 8, column: 1, offset: 192 },
                      end: { line: 8, column: 11, offset: 202 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 1, offset: 192 },
                  end: { line: 8, column: 11, offset: 202 }
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
                            value: 'callback',
                            position: {
                              start: { line: 9, column: 5, offset: 207 },
                              end: { line: 9, column: 15, offset: 217 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a function that is called once the server has closed.',
                            position: {
                              start: { line: 9, column: 15, offset: 217 },
                              end: { line: 9, column: 71, offset: 273 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 9, column: 5, offset: 207 },
                          end: { line: 9, column: 71, offset: 273 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 3, offset: 205 },
                      end: { line: 9, column: 71, offset: 273 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 3, offset: 205 },
                  end: { line: 9, column: 71, offset: 273 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 11, column: 1, offset: 275 },
                      end: { line: 11, column: 8, offset: 282 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 275 },
                  end: { line: 11, column: 8, offset: 282 }
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
                            value: 'undefined',
                            position: {
                              start: { line: 12, column: 5, offset: 287 },
                              end: { line: 12, column: 14, offset: 296 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 287 },
                          end: { line: 12, column: 14, offset: 296 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 285 },
                      end: { line: 12, column: 14, offset: 296 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 285 },
                  end: { line: 12, column: 14, offset: 296 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const server = new WebSocketServer()\n' +
                  '\n' +
                  'server.listen(1337, () => {\n' +
                  "  console.log('WebSocket server listening on port 1337')\n" +
                  '})',
                position: {
                  start: { line: 14, column: 1, offset: 298 },
                  end: { line: 20, column: 4, offset: 441 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 20, column: 4, offset: 441 }
            }
          }
        }
      }
    ],
    fileName: '/home/richard/code/presidium.services/../presidium-websocket/WebSocketServer.js'
  },
  {
    name: '_onread',
    docs: '```coffeescript [specscript]\n' +
      '_onread(nread number, buffer Buffer) -> ()\n' +
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
                value: '_onread',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 8, offset: 7 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 8, offset: 7 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: '_onread(nread number, buffer Buffer) -> ()',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 75 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 75 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-websocket/_internal/_onread.js'
  },
  {
    name: 'append',
    docs: '```coffeescript [specscript]\n' +
      'append(col { append: function }, element any) -> ()\n' +
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
                value: 'append',
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
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'append(col { append: function }, element any) -> ()',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 84 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 84 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-websocket/_internal/append.js'
  },
  {
    name: 'call',
    docs: '```coffeescript [specscript]\n' +
      'args Array\n' +
      '\n' +
      'call(fn function, thisArg object, ...args) -> any\n' +
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
                value: 'call',
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
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'args Array\n\ncall(fn function, thisArg object, ...args) -> any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 94 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 94 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-websocket/_internal/call.js'
  },
  {
    name: 'decimalToBinaryNumberString',
    docs: 'Get the binary number string representation of a decimal number\n' +
      '\n' +
      '```coffeescript [specscript]\n' +
      'decimalToBinaryNumberString(n number) -> binaryString string\n' +
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
                value: 'decimalToBinaryNumberString',
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
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Get the binary number string representation of a decimal number',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 64, offset: 63 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 64, offset: 63 }
            }
          },
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'decimalToBinaryNumberString(n number) -> binaryString string',
            position: {
              start: { line: 3, column: 1, offset: 65 },
              end: { line: 5, column: 4, offset: 158 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 158 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-websocket/_internal/decimalToBinaryNumberString.js'
  },
  {
    name: 'decodeWebSocketFrame',
    docs: '```coffeescript [specscript]\n' +
      'decodeWebSocketFrame(\n' +
      '  buffer Buffer,\n' +
      '  perMessageDeflate boolean\n' +
      ') -> decodeResult? {\n' +
      '  fin: boolean,\n' +
      '  opcode: number,\n' +
      '  payload: Buffer,\n' +
      '  remaining: Buffer,\n' +
      '  masked: boolean,\n' +
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
                value: 'decodeWebSocketFrame',
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
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'decodeWebSocketFrame(\n' +
              '  buffer Buffer,\n' +
              '  perMessageDeflate boolean\n' +
              ') -> decodeResult? {\n' +
              '  fin: boolean,\n' +
              '  opcode: number,\n' +
              '  payload: Buffer,\n' +
              '  remaining: Buffer,\n' +
              '  masked: boolean,\n' +
              '}',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 12, column: 4, offset: 215 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 12, column: 4, offset: 215 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-websocket/_internal/decodeWebSocketFrame.js'
  },
  {
    name: 'decodeWebSocketHandshakeResponse',
    docs: '```coffeescript [specscript]\n' +
      'decodeWebSocketHandshakeResponse(buffer Buffer) -> decodeResult? {\n' +
      '  handshakeSucceeded: boolean,\n' +
      '  remaining: Buffer,\n' +
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
                value: 'decodeWebSocketHandshakeResponse',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 33, offset: 32 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 33, offset: 32 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 33, offset: 32 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'decodeWebSocketHandshakeResponse(buffer Buffer) -> decodeResult? {\n' +
              '  handshakeSucceeded: boolean,\n' +
              '  remaining: Buffer,\n' +
              '}',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 153 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 153 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-websocket/_internal/decodeWebSocketHandshakeResponse.js'
  },
  {
    name: 'defaultHttpHandler',
    docs: 'Default HTTP handler. Responds with `200 OK`.\n' +
      '\n' +
      '```coffeescript [specscript]\n' +
      'defaultHttpHandler(request http.ClientRequest, response http.ServerResponse) -> ()\n' +
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
                value: 'defaultHttpHandler',
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
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Default HTTP handler. Responds with ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 37, offset: 36 }
                }
              },
              {
                type: 'inlineCode',
                value: '200 OK',
                position: {
                  start: { line: 1, column: 37, offset: 36 },
                  end: { line: 1, column: 45, offset: 44 }
                }
              },
              {
                type: 'text',
                value: '.',
                position: {
                  start: { line: 1, column: 45, offset: 44 },
                  end: { line: 1, column: 46, offset: 45 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 46, offset: 45 }
            }
          },
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'defaultHttpHandler(request http.ClientRequest, response http.ServerResponse) -> ()',
            position: {
              start: { line: 3, column: 1, offset: 47 },
              end: { line: 5, column: 4, offset: 162 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 162 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-websocket/_internal/defaultHttpHandler.js'
  },
  {
    name: 'deflateRawWithFlush',
    docs: '```coffeescript [specscript]\n' +
      'deflateRawWithFlush(payload Buffer) -> decompressed Promise<buffer>\n' +
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
                value: 'deflateRawWithFlush',
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
            value: 'deflateRawWithFlush(payload Buffer) -> decompressed Promise<buffer>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 100 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 100 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-websocket/_internal/deflateRawWithFlush.js'
  },
  {
    name: 'inflateRawWithFlush',
    docs: '```coffeescript [specscript]\n' +
      'inflateRawWithFlush(compressed Buffer) -> decompressed Promise<buffer>\n' +
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
                value: 'inflateRawWithFlush',
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
            value: 'inflateRawWithFlush(compressed Buffer) -> decompressed Promise<buffer>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 103 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 103 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-websocket/_internal/inflateRawWithFlush.js'
  },
  {
    name: 'push',
    docs: '```coffeescript [specscript]\n' +
      'push(col { push: function }, element any) -> ()\n' +
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
                value: 'push',
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
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'push(col { push: function }, element any) -> ()',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 80 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 80 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-websocket/_internal/push.js'
  },
  {
    name: 'remove',
    docs: '```coffeescript [specscript]\nremove(array Array, element any) -> ()\n```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'remove',
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
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'remove(array Array, element any) -> ()',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 71 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 71 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-websocket/_internal/remove.js'
  },
  {
    name: 'unhandledErrorListener',
    docs: 'Exits the process on error if this is the only listener for the error event.\n' +
      '\n' +
      '```coffeescript [specscript]\n' +
      'unhandledErrorListener(error Error) -> ()\n' +
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
                value: 'unhandledErrorListener',
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
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Exits the process on error if this is the only listener for the error event.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 77, offset: 76 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 77, offset: 76 }
            }
          },
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'unhandledErrorListener(error Error) -> ()',
            position: {
              start: { line: 3, column: 1, offset: 78 },
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
    fileName: '/home/richard/code/presidium.services/../presidium-websocket/_internal/unhandledErrorListener.js'
  },
  {
    name: 'main',
    docs: 'main() -> ()',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'main',
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
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'main() -> ()',
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
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-websocket/test/externalTest.js'
  }
]