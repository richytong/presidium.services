export default [
  {
    name: 'WebSocket',
    docs: 'Creates a Presidium WebSocket client.\n' +
      '\n' +
      '```coffeescript [specscript]\n' +
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
      'Presidium WebSocket client.\n' +
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
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Creates a Presidium WebSocket client.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 38, offset: 37 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 38, offset: 37 }
            }
          },
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
              start: { line: 3, column: 1, offset: 39 },
              end: { line: 13, column: 4, offset: 330 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Presidium WebSocket client.',
                position: {
                  start: { line: 15, column: 1, offset: 332 },
                  end: { line: 15, column: 28, offset: 359 }
                }
              }
            ],
            position: {
              start: { line: 15, column: 1, offset: 332 },
              end: { line: 15, column: 28, offset: 359 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Arguments:',
                position: {
                  start: { line: 17, column: 1, offset: 361 },
                  end: { line: 17, column: 11, offset: 371 }
                }
              }
            ],
            position: {
              start: { line: 17, column: 1, offset: 361 },
              end: { line: 17, column: 11, offset: 371 }
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
                          start: { line: 18, column: 5, offset: 376 },
                          end: { line: 18, column: 14, offset: 385 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 18, column: 5, offset: 376 },
                      end: { line: 18, column: 14, offset: 385 }
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
                                  start: { line: 19, column: 7, offset: 392 },
                                  end: { line: 19, column: 27, offset: 412 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - if ',
                                position: {
                                  start: { line: 19, column: 27, offset: 412 },
                                  end: { line: 19, column: 33, offset: 418 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'true',
                                position: {
                                  start: { line: 19, column: 33, offset: 418 },
                                  end: { line: 19, column: 39, offset: 424 }
                                }
                              },
                              {
                                type: 'text',
                                value: ", the client verifies the server's certificate against a list of pre-approved certificate authorities (CAs). An ",
                                position: {
                                  start: { line: 19, column: 39, offset: 424 },
                                  end: {
                                    line: 19,
                                    column: 151,
                                    offset: 536
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
                                        line: 19,
                                        column: 152,
                                        offset: 537
                                      },
                                      end: {
                                        line: 19,
                                        column: 157,
                                        offset: 542
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: {
                                    line: 19,
                                    column: 151,
                                    offset: 536
                                  },
                                  end: {
                                    line: 19,
                                    column: 182,
                                    offset: 567
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' event is emitted if verification fails; ',
                                position: {
                                  start: {
                                    line: 19,
                                    column: 182,
                                    offset: 567
                                  },
                                  end: {
                                    line: 19,
                                    column: 223,
                                    offset: 608
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'err.code',
                                position: {
                                  start: {
                                    line: 19,
                                    column: 223,
                                    offset: 608
                                  },
                                  end: {
                                    line: 19,
                                    column: 233,
                                    offset: 618
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' contains the OpenSSL error code. Defaults to ',
                                position: {
                                  start: {
                                    line: 19,
                                    column: 233,
                                    offset: 618
                                  },
                                  end: {
                                    line: 19,
                                    column: 279,
                                    offset: 664
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'true',
                                position: {
                                  start: {
                                    line: 19,
                                    column: 279,
                                    offset: 664
                                  },
                                  end: {
                                    line: 19,
                                    column: 285,
                                    offset: 670
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: '.',
                                position: {
                                  start: {
                                    line: 19,
                                    column: 285,
                                    offset: 670
                                  },
                                  end: {
                                    line: 19,
                                    column: 286,
                                    offset: 671
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 19, column: 7, offset: 392 },
                              end: { line: 19, column: 286, offset: 671 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 390 },
                          end: { line: 19, column: 286, offset: 671 }
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
                                  start: { line: 20, column: 7, offset: 678 },
                                  end: { line: 20, column: 20, offset: 691 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - if ',
                                position: {
                                  start: { line: 20, column: 20, offset: 691 },
                                  end: { line: 20, column: 26, offset: 697 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'true',
                                position: {
                                  start: { line: 20, column: 26, offset: 697 },
                                  end: { line: 20, column: 32, offset: 703 }
                                }
                              },
                              {
                                type: 'text',
                                value: ', establishes the underlying TCP connection automatically upon construction. Defaults to ',
                                position: {
                                  start: { line: 20, column: 32, offset: 703 },
                                  end: {
                                    line: 20,
                                    column: 121,
                                    offset: 792
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'true',
                                position: {
                                  start: {
                                    line: 20,
                                    column: 121,
                                    offset: 792
                                  },
                                  end: {
                                    line: 20,
                                    column: 127,
                                    offset: 798
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: '.',
                                position: {
                                  start: {
                                    line: 20,
                                    column: 127,
                                    offset: 798
                                  },
                                  end: {
                                    line: 20,
                                    column: 128,
                                    offset: 799
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 20, column: 7, offset: 678 },
                              end: { line: 20, column: 128, offset: 799 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 20, column: 5, offset: 676 },
                          end: { line: 20, column: 128, offset: 799 }
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
                                  start: { line: 21, column: 7, offset: 806 },
                                  end: { line: 21, column: 25, offset: 824 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the maximum length in bytes of sent messages. If a message is longer than ',
                                position: {
                                  start: { line: 21, column: 25, offset: 824 },
                                  end: {
                                    line: 21,
                                    column: 102,
                                    offset: 901
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'maxMessageLength',
                                position: {
                                  start: {
                                    line: 21,
                                    column: 102,
                                    offset: 901
                                  },
                                  end: {
                                    line: 21,
                                    column: 120,
                                    offset: 919
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ', it is split into fragmented messages that are reassembled by the receiver.',
                                position: {
                                  start: {
                                    line: 21,
                                    column: 120,
                                    offset: 919
                                  },
                                  end: {
                                    line: 21,
                                    column: 196,
                                    offset: 995
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 7, offset: 806 },
                              end: { line: 21, column: 196, offset: 995 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 5, offset: 804 },
                          end: { line: 21, column: 196, offset: 995 }
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
                                  start: { line: 22, column: 7, offset: 1002 },
                                  end: {
                                    line: 22,
                                    column: 27,
                                    offset: 1022
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - length in bytes of the internal buffer of the underlying ',
                                position: {
                                  start: {
                                    line: 22,
                                    column: 27,
                                    offset: 1022
                                  },
                                  end: {
                                    line: 22,
                                    column: 87,
                                    offset: 1082
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
                                        line: 22,
                                        column: 88,
                                        offset: 1083
                                      },
                                      end: {
                                        line: 22,
                                        column: 94,
                                        offset: 1089
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: {
                                    line: 22,
                                    column: 87,
                                    offset: 1082
                                  },
                                  end: {
                                    line: 22,
                                    column: 144,
                                    offset: 1139
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: '.',
                                position: {
                                  start: {
                                    line: 22,
                                    column: 144,
                                    offset: 1139
                                  },
                                  end: {
                                    line: 22,
                                    column: 145,
                                    offset: 1140
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 22, column: 7, offset: 1002 },
                              end: { line: 22, column: 145, offset: 1140 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 22, column: 5, offset: 1000 },
                          end: { line: 22, column: 145, offset: 1140 }
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
                                  start: { line: 23, column: 7, offset: 1147 },
                                  end: {
                                    line: 23,
                                    column: 31,
                                    offset: 1171
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - if ',
                                position: {
                                  start: {
                                    line: 23,
                                    column: 31,
                                    offset: 1171
                                  },
                                  end: {
                                    line: 23,
                                    column: 37,
                                    offset: 1177
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'true',
                                position: {
                                  start: {
                                    line: 23,
                                    column: 37,
                                    offset: 1177
                                  },
                                  end: {
                                    line: 23,
                                    column: 43,
                                    offset: 1183
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ', offers to the server ',
                                position: {
                                  start: {
                                    line: 23,
                                    column: 43,
                                    offset: 1183
                                  },
                                  end: {
                                    line: 23,
                                    column: 66,
                                    offset: 1206
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
                                        line: 23,
                                        column: 67,
                                        offset: 1207
                                      },
                                      end: {
                                        line: 23,
                                        column: 101,
                                        offset: 1241
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: {
                                    line: 23,
                                    column: 66,
                                    offset: 1206
                                  },
                                  end: {
                                    line: 23,
                                    column: 159,
                                    offset: 1299
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' by including the ',
                                position: {
                                  start: {
                                    line: 23,
                                    column: 159,
                                    offset: 1299
                                  },
                                  end: {
                                    line: 23,
                                    column: 177,
                                    offset: 1317
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'Sec-WebSocket-Extensions: permessage-deflate',
                                position: {
                                  start: {
                                    line: 23,
                                    column: 177,
                                    offset: 1317
                                  },
                                  end: {
                                    line: 23,
                                    column: 223,
                                    offset: 1363
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' header in the initial WebSocket handshake. If the server supports compression extensions, all messages exchanged in the WebSocket connection will be compressed with ',
                                position: {
                                  start: {
                                    line: 23,
                                    column: 223,
                                    offset: 1363
                                  },
                                  end: {
                                    line: 23,
                                    column: 389,
                                    offset: 1529
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
                                        line: 23,
                                        column: 390,
                                        offset: 1530
                                      },
                                      end: {
                                        line: 23,
                                        column: 394,
                                        offset: 1534
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: {
                                    line: 23,
                                    column: 389,
                                    offset: 1529
                                  },
                                  end: {
                                    line: 23,
                                    column: 429,
                                    offset: 1569
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' default options. Defaults to ',
                                position: {
                                  start: {
                                    line: 23,
                                    column: 429,
                                    offset: 1569
                                  },
                                  end: {
                                    line: 23,
                                    column: 459,
                                    offset: 1599
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'true',
                                position: {
                                  start: {
                                    line: 23,
                                    column: 459,
                                    offset: 1599
                                  },
                                  end: {
                                    line: 23,
                                    column: 465,
                                    offset: 1605
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: '.',
                                position: {
                                  start: {
                                    line: 23,
                                    column: 465,
                                    offset: 1605
                                  },
                                  end: {
                                    line: 23,
                                    column: 466,
                                    offset: 1606
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 23, column: 7, offset: 1147 },
                              end: { line: 23, column: 466, offset: 1606 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 23, column: 5, offset: 1145 },
                          end: { line: 23, column: 466, offset: 1606 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 19, column: 5, offset: 390 },
                      end: { line: 23, column: 466, offset: 1606 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 3, offset: 374 },
                  end: { line: 23, column: 466, offset: 1606 }
                }
              }
            ],
            position: {
              start: { line: 18, column: 3, offset: 374 },
              end: { line: 23, column: 466, offset: 1606 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Return:',
                position: {
                  start: { line: 25, column: 1, offset: 1608 },
                  end: { line: 25, column: 8, offset: 1615 }
                }
              }
            ],
            position: {
              start: { line: 25, column: 1, offset: 1608 },
              end: { line: 25, column: 8, offset: 1615 }
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
                          start: { line: 26, column: 5, offset: 1620 },
                          end: { line: 26, column: 16, offset: 1631 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - a Presidium WebSocket instance.',
                        position: {
                          start: { line: 26, column: 16, offset: 1631 },
                          end: { line: 26, column: 50, offset: 1665 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 26, column: 5, offset: 1620 },
                      end: { line: 26, column: 50, offset: 1665 }
                    }
                  }
                ],
                position: {
                  start: { line: 26, column: 3, offset: 1618 },
                  end: { line: 26, column: 50, offset: 1665 }
                }
              }
            ],
            position: {
              start: { line: 26, column: 3, offset: 1618 },
              end: { line: 26, column: 50, offset: 1665 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: "const websocket = new WebSocket('ws://localhost:1337/')",
            position: {
              start: { line: 28, column: 1, offset: 1667 },
              end: { line: 30, column: 4, offset: 1740 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 30, column: 4, offset: 1740 }
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
                    value: 'Event Data:',
                    position: {
                      start: { line: 5, column: 1, offset: 47 },
                      end: { line: 5, column: 12, offset: 58 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 47 },
                  end: { line: 5, column: 12, offset: 58 }
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
                              start: { line: 6, column: 5, offset: 63 },
                              end: { line: 6, column: 11, offset: 69 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 6, column: 5, offset: 63 },
                          end: { line: 6, column: 11, offset: 69 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 6, column: 3, offset: 61 },
                      end: { line: 6, column: 11, offset: 69 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 3, offset: 61 },
                  end: { line: 6, column: 11, offset: 69 }
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
                  start: { line: 8, column: 1, offset: 71 },
                  end: { line: 14, column: 4, offset: 214 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 14, column: 4, offset: 214 }
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
                    value: 'Event Data:',
                    position: {
                      start: { line: 5, column: 1, offset: 66 },
                      end: { line: 5, column: 12, offset: 77 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 66 },
                  end: { line: 5, column: 12, offset: 77 }
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
                              start: { line: 6, column: 5, offset: 82 },
                              end: { line: 6, column: 14, offset: 91 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a ',
                            position: {
                              start: { line: 6, column: 14, offset: 91 },
                              end: { line: 6, column: 19, offset: 96 }
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
                                  start: { line: 6, column: 20, offset: 97 },
                                  end: { line: 6, column: 34, offset: 111 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 6, column: 19, offset: 96 },
                              end: { line: 6, column: 89, offset: 166 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' of the received message.',
                            position: {
                              start: { line: 6, column: 89, offset: 166 },
                              end: { line: 6, column: 114, offset: 191 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 6, column: 5, offset: 82 },
                          end: { line: 6, column: 114, offset: 191 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 6, column: 3, offset: 80 },
                      end: { line: 6, column: 114, offset: 191 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 3, offset: 80 },
                  end: { line: 6, column: 114, offset: 191 }
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
                  start: { line: 8, column: 1, offset: 193 },
                  end: { line: 14, column: 4, offset: 359 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 14, column: 4, offset: 359 }
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
          'Event Data:\n' +
          '  * payload - a [Node.js buffer](https://nodejs.org/docs/latest-v24.x/api/buffer.html) of the received payload.\n' +
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
                    value: 'Event Data:',
                    position: {
                      start: { line: 5, column: 1, offset: 63 },
                      end: { line: 5, column: 12, offset: 74 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 63 },
                  end: { line: 5, column: 12, offset: 74 }
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
                            value: 'payload - a ',
                            position: {
                              start: { line: 6, column: 5, offset: 79 },
                              end: { line: 6, column: 17, offset: 91 }
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
                                  start: { line: 6, column: 18, offset: 92 },
                                  end: { line: 6, column: 32, offset: 106 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 6, column: 17, offset: 91 },
                              end: { line: 6, column: 87, offset: 161 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' of the received payload.',
                            position: {
                              start: { line: 6, column: 87, offset: 161 },
                              end: { line: 6, column: 112, offset: 186 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 6, column: 5, offset: 79 },
                          end: { line: 6, column: 112, offset: 186 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 6, column: 3, offset: 77 },
                      end: { line: 6, column: 112, offset: 186 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 3, offset: 77 },
                  end: { line: 6, column: 112, offset: 186 }
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
                  start: { line: 8, column: 1, offset: 188 },
                  end: { line: 14, column: 4, offset: 316 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 14, column: 4, offset: 316 }
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
          'Event Data:\n' +
          '  * payload - a [Node.js buffer](https://nodejs.org/docs/latest-v24.x/api/buffer.html) of the received payload.\n' +
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
                    value: 'Event Data:',
                    position: {
                      start: { line: 5, column: 1, offset: 63 },
                      end: { line: 5, column: 12, offset: 74 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 63 },
                  end: { line: 5, column: 12, offset: 74 }
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
                            value: 'payload - a ',
                            position: {
                              start: { line: 6, column: 5, offset: 79 },
                              end: { line: 6, column: 17, offset: 91 }
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
                                  start: { line: 6, column: 18, offset: 92 },
                                  end: { line: 6, column: 32, offset: 106 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 6, column: 17, offset: 91 },
                              end: { line: 6, column: 87, offset: 161 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' of the received payload.',
                            position: {
                              start: { line: 6, column: 87, offset: 161 },
                              end: { line: 6, column: 112, offset: 186 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 6, column: 5, offset: 79 },
                          end: { line: 6, column: 112, offset: 186 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 6, column: 3, offset: 77 },
                      end: { line: 6, column: 112, offset: 186 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 3, offset: 77 },
                  end: { line: 6, column: 112, offset: 186 }
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
                  start: { line: 8, column: 1, offset: 188 },
                  end: { line: 14, column: 4, offset: 316 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 14, column: 4, offset: 316 }
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
          'Event Data:\n' +
          '  * error - an instance of a JavaScript [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error).\n' +
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
                    value: 'Event Data:',
                    position: {
                      start: { line: 5, column: 1, offset: 61 },
                      end: { line: 5, column: 12, offset: 72 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 61 },
                  end: { line: 5, column: 12, offset: 72 }
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
                            value: 'error - an instance of a JavaScript ',
                            position: {
                              start: { line: 6, column: 5, offset: 77 },
                              end: { line: 6, column: 41, offset: 113 }
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
                                  start: { line: 6, column: 42, offset: 114 },
                                  end: { line: 6, column: 47, offset: 119 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 6, column: 41, offset: 113 },
                              end: { line: 6, column: 136, offset: 208 }
                            }
                          },
                          {
                            type: 'text',
                            value: '.',
                            position: {
                              start: { line: 6, column: 136, offset: 208 },
                              end: { line: 6, column: 137, offset: 209 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 6, column: 5, offset: 77 },
                          end: { line: 6, column: 137, offset: 209 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 6, column: 3, offset: 75 },
                      end: { line: 6, column: 137, offset: 209 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 3, offset: 75 },
                  end: { line: 6, column: 137, offset: 209 }
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
                  start: { line: 8, column: 1, offset: 211 },
                  end: { line: 14, column: 4, offset: 354 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 14, column: 4, offset: 354 }
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
                value: "const websocket = new WebSocket('ws://localhost:1337/')\n" +
                  '\n' +
                  "websocket.on('close', () => {\n" +
                  "  console.log('Connection is closed.')\n" +
                  '})',
                position: {
                  start: { line: 8, column: 1, offset: 72 },
                  end: { line: 14, column: 4, offset: 218 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 14, column: 4, offset: 218 }
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
        name: '_processChunk',
        docs: '```coffeescript [specscript]\n' +
          'websocket._processChunk(chunks Array<Buffer>) -> ()\n' +
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
                    value: '_processChunk',
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
                value: 'websocket._processChunk(chunks Array<Buffer>) -> ()',
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
        docs: 'Sends a close frame to the WebSocket server.\n' +
          '\n' +
          '```coffeescript [specscript]\n' +
          'websocket.sendClose() -> undefined\n' +
          'websocket.sendClose(payload Buffer|string) -> undefined\n' +
          '```\n' +
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
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Sends a close frame to the WebSocket server.',
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 45, offset: 44 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 45, offset: 44 }
                }
              },
              {
                type: 'code',
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'websocket.sendClose() -> undefined\n' +
                  'websocket.sendClose(payload Buffer|string) -> undefined',
                position: {
                  start: { line: 3, column: 1, offset: 46 },
                  end: { line: 6, column: 4, offset: 169 }
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
    fileName: '/Users/richard/code/presidium.services/../presidium-websocket/WebSocket.js'
  },
  {
    name: 'WebSocketSecureServer',
    docs: '```coffeescript [specscript]\n' +
      "module http 'https://nodejs.org/api/http.html'\n" +
      "module net 'https://nodejs.org/api/net.html'\n" +
      '\n' +
      'websocketHandler (websocket WebSocket)=>()\n' +
      'httpHandler (request http.ClientRequest, response http.ServerResponse)=>()\n' +
      'upgradeHandler (request http.ClientRequest, socket net.Socket, head Buffer)=>()\n' +
      '\n' +
      'new WebSocketSecureServer(options {\n' +
      '  key: string,\n' +
      '  cert: string,\n' +
      '  passphrase: string\n' +
      '}) -> server WebSocketSecureServer\n' +
      '\n' +
      'new WebSocketSecureServer(websocketHandler, options {\n' +
      '  httpHandler: httpHandler,\n' +
      '  key: string,\n' +
      '  cert: string,\n' +
      '  passphrase: string\n' +
      '}) -> server WebSocketSecureServer\n' +
      '\n' +
      'new WebSocketSecureServer(options {\n' +
      '  websocketHandler: websocketHandler,\n' +
      '  httpHandler: httpHandler,\n' +
      '  key: string,\n' +
      '  cert: string,\n' +
      '  passphrase: string\n' +
      '}) -> server WebSocketSecureServer\n' +
      '\n' +
      "server.on('connection', websocketHandler) -> ()\n" +
      "server.on('request', httpHandler) -> ()\n" +
      "server.on('upgrade', upgradeHandler) -> ()\n" +
      "server.on('error', (error Error)=>()) -> ()\n" +
      "server.on('close', ()=>()) -> ()\n" +
      '\n' +
      "server.on('connection', (websocket WebSocket) => {\n" +
      "  websocket.on('open', ()=>()) -> ()\n" +
      "  websocket.on('message', (message Buffer)=>()) -> ()\n" +
      "  websocket.on('ping', ()=>()) -> ()\n" +
      "  websocket.on('pong', ()=>()) -> ()\n" +
      "  websocket.on('error', (error Error)=>()) -> ()\n" +
      "  websocket.on('close', ()=>()) -> ()\n" +
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
              'websocketHandler (websocket WebSocket)=>()\n' +
              'httpHandler (request http.ClientRequest, response http.ServerResponse)=>()\n' +
              'upgradeHandler (request http.ClientRequest, socket net.Socket, head Buffer)=>()\n' +
              '\n' +
              'new WebSocketSecureServer(options {\n' +
              '  key: string,\n' +
              '  cert: string,\n' +
              '  passphrase: string\n' +
              '}) -> server WebSocketSecureServer\n' +
              '\n' +
              'new WebSocketSecureServer(websocketHandler, options {\n' +
              '  httpHandler: httpHandler,\n' +
              '  key: string,\n' +
              '  cert: string,\n' +
              '  passphrase: string\n' +
              '}) -> server WebSocketSecureServer\n' +
              '\n' +
              'new WebSocketSecureServer(options {\n' +
              '  websocketHandler: websocketHandler,\n' +
              '  httpHandler: httpHandler,\n' +
              '  key: string,\n' +
              '  cert: string,\n' +
              '  passphrase: string\n' +
              '}) -> server WebSocketSecureServer\n' +
              '\n' +
              "server.on('connection', websocketHandler) -> ()\n" +
              "server.on('request', httpHandler) -> ()\n" +
              "server.on('upgrade', upgradeHandler) -> ()\n" +
              "server.on('error', (error Error)=>()) -> ()\n" +
              "server.on('close', ()=>()) -> ()\n" +
              '\n' +
              "server.on('connection', (websocket WebSocket) => {\n" +
              "  websocket.on('open', ()=>()) -> ()\n" +
              "  websocket.on('message', (message Buffer)=>()) -> ()\n" +
              "  websocket.on('ping', ()=>()) -> ()\n" +
              "  websocket.on('pong', ()=>()) -> ()\n" +
              "  websocket.on('error', (error Error)=>()) -> ()\n" +
              "  websocket.on('close', ()=>()) -> ()\n" +
              '})',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 44, column: 4, offset: 1323 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 44, column: 4, offset: 1323 }
        }
      }
    },
    methods: [],
    fileName: '/Users/richard/code/presidium.services/../presidium-websocket/WebSocketSecureServer.js'
  },
  {
    name: 'WebSocketServer',
    docs: 'Presidium WebSocket server.\n' +
      '\n' +
      '```coffeescript [specscript]\n' +
      "module http 'https://nodejs.org/api/http.html'\n" +
      "module net 'https://nodejs.org/api/net.html'\n" +
      '\n' +
      'websocketHandler (websocket WebSocket)=>()\n' +
      'httpHandler (request http.ClientRequest, response http.ServerResponse)=>()\n' +
      'upgradeHandler (request http.ClientRequest, socket net.Socket, head Buffer)=>()\n' +
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
      '\n' +
      "server.on('connection', websocketHandler) -> ()\n" +
      "server.on('request', httpHandler) -> ()\n" +
      "server.on('upgrade', upgradeHandler) -> ()\n" +
      "server.on('error', (error Error)=>()) -> ()\n" +
      "server.on('close', ()=>()) -> ()\n" +
      '\n' +
      "server.on('connection', (websocket WebSocket) => {\n" +
      "  websocket.on('open', ()=>()) -> ()\n" +
      "  websocket.on('message', (message Buffer)=>()) -> ()\n" +
      "  websocket.on('ping', ()=>()) -> ()\n" +
      "  websocket.on('pong', ()=>()) -> ()\n" +
      "  websocket.on('error', (error Error)=>()) -> ()\n" +
      "  websocket.on('close', ()=>()) -> ()\n" +
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
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Presidium WebSocket server.',
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
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: "module http 'https://nodejs.org/api/http.html'\n" +
              "module net 'https://nodejs.org/api/net.html'\n" +
              '\n' +
              'websocketHandler (websocket WebSocket)=>()\n' +
              'httpHandler (request http.ClientRequest, response http.ServerResponse)=>()\n' +
              'upgradeHandler (request http.ClientRequest, socket net.Socket, head Buffer)=>()\n' +
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
              '\n' +
              "server.on('connection', websocketHandler) -> ()\n" +
              "server.on('request', httpHandler) -> ()\n" +
              "server.on('upgrade', upgradeHandler) -> ()\n" +
              "server.on('error', (error Error)=>()) -> ()\n" +
              "server.on('close', ()=>()) -> ()\n" +
              '\n' +
              "server.on('connection', (websocket WebSocket) => {\n" +
              "  websocket.on('open', ()=>()) -> ()\n" +
              "  websocket.on('message', (message Buffer)=>()) -> ()\n" +
              "  websocket.on('ping', ()=>()) -> ()\n" +
              "  websocket.on('pong', ()=>()) -> ()\n" +
              "  websocket.on('error', (error Error)=>()) -> ()\n" +
              "  websocket.on('close', ()=>()) -> ()\n" +
              '})',
            position: {
              start: { line: 3, column: 1, offset: 29 },
              end: { line: 45, column: 4, offset: 1355 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 45, column: 4, offset: 1355 }
        }
      }
    },
    methods: [
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
        name: '_processChunk',
        docs: '```coffeescript [specscript]\n' +
          'server._processChunk(\n' +
          '  chunks Array<Buffer>,\n' +
          '  websocket ServerWebSocket\n' +
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
                    value: '_processChunk',
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
                value: 'server._processChunk(\n' +
                  '  chunks Array<Buffer>,\n' +
                  '  websocket ServerWebSocket\n' +
                  ') -> ()',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 6, column: 4, offset: 114 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 114 }
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
          'server.listen(port number, callback? function) -> ()\n' +
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
                value: 'server.listen(port number, callback? function) -> ()',
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
        name: 'close',
        docs: '```coffeescript [specscript]\nserver.close() -> ()\n```',
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
                value: 'server.close() -> ()',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 53 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 53 }
            }
          }
        }
      },
      {
        name: 'noop',
        docs: "Function that doesn't do anything\n" +
          '\n' +
          '```coffeescript [specscript]\n' +
          'noop() -> ()\n' +
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
                    value: 'noop',
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
                    value: "Function that doesn't do anything",
                    position: {
                      start: { line: 1, column: 1, offset: 0 },
                      end: { line: 1, column: 34, offset: 33 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 34, offset: 33 }
                }
              },
              {
                type: 'code',
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'noop() -> ()',
                position: {
                  start: { line: 3, column: 1, offset: 35 },
                  end: { line: 5, column: 4, offset: 80 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 80 }
            }
          }
        }
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
        }
      }
    ],
    fileName: '/Users/richard/code/presidium.services/../presidium-websocket/WebSocketServer.js'
  },
  {
    name: 'ServerWebsocket',
    docs: '```coffeescript [specscript]\n' +
      'new ServerWebsocket(socket net.Socket, options {\n' +
      '  maxMessageLength: number\n' +
      '}) -> websocket ServerWebsocket\n' +
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
                value: 'ServerWebsocket',
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
            value: 'new ServerWebsocket(socket net.Socket, options {\n' +
              '  maxMessageLength: number\n' +
              '}) -> websocket ServerWebsocket',
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
    methods: [
      {
        name: 'connect',
        docs: '```coffeescript [specscript]\nwebsocket.connect() -> ()\n```',
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
                value: 'websocket.connect() -> ()',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 58 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 58 }
            }
          }
        }
      },
      {
        name: 'send',
        docs: '```coffeescript [specscript]\n' +
          'websocket.send(payload Buffer|string) -> ()\n' +
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
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 76 }
            }
          }
        }
      },
      {
        name: 'sendClose',
        docs: 'Sends close frame to client\n' +
          '\n' +
          '```coffeescript [specscript]\n' +
          'websocket.sendClose(payload Buffer|string) -> ()\n' +
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
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Sends close frame to client',
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
              {
                type: 'code',
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'websocket.sendClose(payload Buffer|string) -> ()',
                position: {
                  start: { line: 3, column: 1, offset: 29 },
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
        name: 'sendPing',
        docs: 'Sends "ping" to client\n' +
          '\n' +
          '```coffeescript [specscript]\n' +
          'websocket.sendPing(payload Buffer|string) -> ()\n' +
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
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Sends "ping" to client',
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
              {
                type: 'code',
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'websocket.sendPing(payload Buffer|string) -> ()',
                position: {
                  start: { line: 3, column: 1, offset: 24 },
                  end: { line: 5, column: 4, offset: 104 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 104 }
            }
          }
        }
      },
      {
        name: 'sendPong',
        docs: 'Sends "pong" back to client\n' +
          '\n' +
          '```coffeescript [specscript]\n' +
          'websocket.sendPong(payload Buffer|string) -> ()\n' +
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
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Sends "pong" back to client',
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
              {
                type: 'code',
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'websocket.sendPong(payload Buffer|string) -> ()',
                position: {
                  start: { line: 3, column: 1, offset: 29 },
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
        name: 'close',
        docs: 'Closes the websocket\n' +
          '\n' +
          '```coffeescript [specscript]\n' +
          'websocket.close() -> ()\n' +
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
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Closes the websocket',
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
              {
                type: 'code',
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'websocket.close() -> ()',
                position: {
                  start: { line: 3, column: 1, offset: 22 },
                  end: { line: 5, column: 4, offset: 78 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 78 }
            }
          }
        }
      },
      {
        name: 'destroy',
        docs: 'Closes the websocket\n' +
          '\n' +
          '```coffeescript [specscript]\n' +
          'websocket.destroy(payload Buffer|string) -> ()\n' +
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
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Closes the websocket',
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
              {
                type: 'code',
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'websocket.destroy(payload Buffer|string) -> ()',
                position: {
                  start: { line: 3, column: 1, offset: 22 },
                  end: { line: 5, column: 4, offset: 101 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 101 }
            }
          }
        }
      }
    ],
    fileName: '/Users/richard/code/presidium.services/../presidium-websocket/_internal/ServerWebSocket.js'
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
    fileName: '/Users/richard/code/presidium.services/../presidium-websocket/_internal/_onread.js'
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
    fileName: '/Users/richard/code/presidium.services/../presidium-websocket/_internal/append.js'
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
    fileName: '/Users/richard/code/presidium.services/../presidium-websocket/_internal/call.js'
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
    fileName: '/Users/richard/code/presidium.services/../presidium-websocket/_internal/decimalToBinaryNumberString.js'
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
    fileName: '/Users/richard/code/presidium.services/../presidium-websocket/_internal/decodeWebSocketFrame.js'
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
    fileName: '/Users/richard/code/presidium.services/../presidium-websocket/_internal/decodeWebSocketHandshakeResponse.js'
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
    fileName: '/Users/richard/code/presidium.services/../presidium-websocket/_internal/deflateRawWithFlush.js'
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
    fileName: '/Users/richard/code/presidium.services/../presidium-websocket/_internal/inflateRawWithFlush.js'
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
    fileName: '/Users/richard/code/presidium.services/../presidium-websocket/_internal/remove.js'
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
    fileName: '/Users/richard/code/presidium.services/../presidium-websocket/_internal/unhandledErrorListener.js'
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
    fileName: '/Users/richard/code/presidium.services/../presidium-websocket/test/externalTest.js'
  }
]