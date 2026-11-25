export default [
  {
    name: 'FileClient',
    docs: '```specscript\n' +
      'new FileClient(options {\n' +
      '  serverUrl: string,\n' +
      '}) -> fileClient FileClient\n' +
      '```\n' +
      '\n' +
      'Presidium FileClient class. Creates a file client.\n' +
      '\n' +
      'Arguments:\n' +
      '  * `options`\n' +
      '    * `serverUrl` - `string` - the url of the file server.\n' +
      '\n' +
      'Return:\n' +
      '  * `fileClient` - [`FileClient`](/docs/FileClient) - a FileClient instance.\n' +
      '\n' +
      '```javascript\n' +
      'const fileClient = new FileClient({\n' +
      '  serverUrl: "http://your-file-load-balancer-server:8080",\n' +
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
            value: 'new FileClient(options {\n' +
              '  serverUrl: string,\n' +
              '}) -> fileClient FileClient',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 91 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Presidium FileClient class. Creates a file client.',
                position: {
                  start: { line: 7, column: 1, offset: 93 },
                  end: { line: 7, column: 51, offset: 143 }
                }
              }
            ],
            position: {
              start: { line: 7, column: 1, offset: 93 },
              end: { line: 7, column: 51, offset: 143 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Arguments:',
                position: {
                  start: { line: 9, column: 1, offset: 145 },
                  end: { line: 9, column: 11, offset: 155 }
                }
              }
            ],
            position: {
              start: { line: 9, column: 1, offset: 145 },
              end: { line: 9, column: 11, offset: 155 }
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
                          start: { line: 10, column: 5, offset: 160 },
                          end: { line: 10, column: 14, offset: 169 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 10, column: 5, offset: 160 },
                      end: { line: 10, column: 14, offset: 169 }
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
                                  start: { line: 11, column: 7, offset: 176 },
                                  end: { line: 11, column: 18, offset: 187 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 11, column: 18, offset: 187 },
                                  end: { line: 11, column: 21, offset: 190 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'string',
                                position: {
                                  start: { line: 11, column: 21, offset: 190 },
                                  end: { line: 11, column: 29, offset: 198 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the url of the file server.',
                                position: {
                                  start: { line: 11, column: 29, offset: 198 },
                                  end: { line: 11, column: 59, offset: 228 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 11, column: 7, offset: 176 },
                              end: { line: 11, column: 59, offset: 228 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 174 },
                          end: { line: 11, column: 59, offset: 228 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 5, offset: 174 },
                      end: { line: 11, column: 59, offset: 228 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 3, offset: 158 },
                  end: { line: 11, column: 59, offset: 228 }
                }
              }
            ],
            position: {
              start: { line: 10, column: 3, offset: 158 },
              end: { line: 11, column: 59, offset: 228 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Return:',
                position: {
                  start: { line: 13, column: 1, offset: 230 },
                  end: { line: 13, column: 8, offset: 237 }
                }
              }
            ],
            position: {
              start: { line: 13, column: 1, offset: 230 },
              end: { line: 13, column: 8, offset: 237 }
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
                        value: 'fileClient',
                        position: {
                          start: { line: 14, column: 5, offset: 242 },
                          end: { line: 14, column: 17, offset: 254 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 14, column: 17, offset: 254 },
                          end: { line: 14, column: 20, offset: 257 }
                        }
                      },
                      {
                        type: 'link',
                        title: null,
                        url: '/docs/FileClient',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'FileClient',
                            position: {
                              start: { line: 14, column: 21, offset: 258 },
                              end: { line: 14, column: 33, offset: 270 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 14, column: 20, offset: 257 },
                          end: { line: 14, column: 52, offset: 289 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - a FileClient instance.',
                        position: {
                          start: { line: 14, column: 52, offset: 289 },
                          end: { line: 14, column: 77, offset: 314 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 14, column: 5, offset: 242 },
                      end: { line: 14, column: 77, offset: 314 }
                    }
                  }
                ],
                position: {
                  start: { line: 14, column: 3, offset: 240 },
                  end: { line: 14, column: 77, offset: 314 }
                }
              }
            ],
            position: {
              start: { line: 14, column: 3, offset: 240 },
              end: { line: 14, column: 77, offset: 314 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: 'const fileClient = new FileClient({\n' +
              '  serverUrl: "http://your-file-load-balancer-server:8080",\n' +
              '})',
            position: {
              start: { line: 16, column: 1, offset: 316 },
              end: { line: 20, column: 4, offset: 431 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 20, column: 4, offset: 431 }
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
          '```\n' +
          '\n' +
          'Writes file data to the file server at the specified URL.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `url` - `string` - the URL of the file on the file server.\n' +
          '  * `fileStream` - [`stream.Readable`](https://nodejs.org/api/stream.html#class-streamreadable) - the file data.\n' +
          '  * `options`\n' +
          '    * `ContentType` - `string` - the content type or mime type of the file. Represents the value of the `Content-Type` header of the file served by the file server.\n' +
          '    * `ContentEncoding` - `string` - the content encoding of the file. Represents the value of the `Content-Encoding` header of the file served by the file server.\n' +
          '\n' +
          'Return:\n' +
          '  * `data` - `Promise<object>`\n' +
          '    * `metadata`\n' +
          '      * `Url` - `string` - the URL of the file on the file server.\n' +
          '      * `ContentLength` - `number` - the length in bytes of the file data. Represents the value of the `Content-Length` header of the file served by the file server.\n' +
          '      * `ContentType` - `string` - the content type or mime type of the file. Represents the value of the `Content-Type` header of the file served by the file server.\n' +
          '      * `ContentEncoding` - `string` - the content encoding of the file. Represents the value of the `Content-Encoding` header of the file served by the file server.\n' +
          '\n' +
          '```javascript\n' +
          'const yourMedia = fs.createWriteStream("/path/to/your-media.mp4")\n' +
          '\n' +
          'await fileClient.write("/assets/your-media.mp4", yourMedia, {\n' +
          '  ContentType: "video/mp4",\n' +
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
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Writes file data to the file server at the specified URL.',
                    position: {
                      start: { line: 17, column: 1, offset: 318 },
                      end: { line: 17, column: 58, offset: 375 }
                    }
                  }
                ],
                position: {
                  start: { line: 17, column: 1, offset: 318 },
                  end: { line: 17, column: 58, offset: 375 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 19, column: 1, offset: 377 },
                      end: { line: 19, column: 11, offset: 387 }
                    }
                  }
                ],
                position: {
                  start: { line: 19, column: 1, offset: 377 },
                  end: { line: 19, column: 11, offset: 387 }
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
                            value: 'url',
                            position: {
                              start: { line: 20, column: 5, offset: 392 },
                              end: { line: 20, column: 10, offset: 397 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 20, column: 10, offset: 397 },
                              end: { line: 20, column: 13, offset: 400 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 20, column: 13, offset: 400 },
                              end: { line: 20, column: 21, offset: 408 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the URL of the file on the file server.',
                            position: {
                              start: { line: 20, column: 21, offset: 408 },
                              end: { line: 20, column: 63, offset: 450 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 20, column: 5, offset: 392 },
                          end: { line: 20, column: 63, offset: 450 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 20, column: 3, offset: 390 },
                      end: { line: 20, column: 63, offset: 450 }
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
                            value: 'fileStream',
                            position: {
                              start: { line: 21, column: 5, offset: 455 },
                              end: { line: 21, column: 17, offset: 467 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 21, column: 17, offset: 467 },
                              end: { line: 21, column: 20, offset: 470 }
                            }
                          },
                          {
                            type: 'link',
                            title: null,
                            url: 'https://nodejs.org/api/stream.html#class-streamreadable',
                            children: [
                              {
                                type: 'inlineCode',
                                value: 'stream.Readable',
                                position: {
                                  start: { line: 21, column: 21, offset: 471 },
                                  end: { line: 21, column: 38, offset: 488 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 20, offset: 470 },
                              end: { line: 21, column: 96, offset: 546 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the file data.',
                            position: {
                              start: { line: 21, column: 96, offset: 546 },
                              end: { line: 21, column: 113, offset: 563 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 5, offset: 455 },
                          end: { line: 21, column: 113, offset: 563 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 21, column: 3, offset: 453 },
                      end: { line: 21, column: 113, offset: 563 }
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
                              start: { line: 22, column: 5, offset: 568 },
                              end: { line: 22, column: 14, offset: 577 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 22, column: 5, offset: 568 },
                          end: { line: 22, column: 14, offset: 577 }
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
                                    value: 'ContentType',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 7,
                                        offset: 584
                                      },
                                      end: {
                                        line: 23,
                                        column: 20,
                                        offset: 597
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 20,
                                        offset: 597
                                      },
                                      end: {
                                        line: 23,
                                        column: 23,
                                        offset: 600
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 23,
                                        offset: 600
                                      },
                                      end: {
                                        line: 23,
                                        column: 31,
                                        offset: 608
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the content type or mime type of the file. Represents the value of the ',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 31,
                                        offset: 608
                                      },
                                      end: {
                                        line: 23,
                                        column: 105,
                                        offset: 682
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'Content-Type',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 105,
                                        offset: 682
                                      },
                                      end: {
                                        line: 23,
                                        column: 119,
                                        offset: 696
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' header of the file served by the file server.',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 119,
                                        offset: 696
                                      },
                                      end: {
                                        line: 23,
                                        column: 165,
                                        offset: 742
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 23, column: 7, offset: 584 },
                                  end: {
                                    line: 23,
                                    column: 165,
                                    offset: 742
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 23, column: 5, offset: 582 },
                              end: { line: 23, column: 165, offset: 742 }
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
                                    value: 'ContentEncoding',
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 7,
                                        offset: 749
                                      },
                                      end: {
                                        line: 24,
                                        column: 24,
                                        offset: 766
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 24,
                                        offset: 766
                                      },
                                      end: {
                                        line: 24,
                                        column: 27,
                                        offset: 769
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string',
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 27,
                                        offset: 769
                                      },
                                      end: {
                                        line: 24,
                                        column: 35,
                                        offset: 777
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the content encoding of the file. Represents the value of the ',
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 35,
                                        offset: 777
                                      },
                                      end: {
                                        line: 24,
                                        column: 100,
                                        offset: 842
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'Content-Encoding',
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 100,
                                        offset: 842
                                      },
                                      end: {
                                        line: 24,
                                        column: 118,
                                        offset: 860
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' header of the file served by the file server.',
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 118,
                                        offset: 860
                                      },
                                      end: {
                                        line: 24,
                                        column: 164,
                                        offset: 906
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 24, column: 7, offset: 749 },
                                  end: {
                                    line: 24,
                                    column: 164,
                                    offset: 906
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 24, column: 5, offset: 747 },
                              end: { line: 24, column: 164, offset: 906 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 23, column: 5, offset: 582 },
                          end: { line: 24, column: 164, offset: 906 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 22, column: 3, offset: 566 },
                      end: { line: 24, column: 164, offset: 906 }
                    }
                  }
                ],
                position: {
                  start: { line: 20, column: 3, offset: 390 },
                  end: { line: 24, column: 164, offset: 906 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 26, column: 1, offset: 908 },
                      end: { line: 26, column: 8, offset: 915 }
                    }
                  }
                ],
                position: {
                  start: { line: 26, column: 1, offset: 908 },
                  end: { line: 26, column: 8, offset: 915 }
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
                            value: 'data',
                            position: {
                              start: { line: 27, column: 5, offset: 920 },
                              end: { line: 27, column: 11, offset: 926 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 27, column: 11, offset: 926 },
                              end: { line: 27, column: 14, offset: 929 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'Promise<object>',
                            position: {
                              start: { line: 27, column: 14, offset: 929 },
                              end: { line: 27, column: 31, offset: 946 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 27, column: 5, offset: 920 },
                          end: { line: 27, column: 31, offset: 946 }
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
                                    value: 'metadata',
                                    position: {
                                      start: {
                                        line: 28,
                                        column: 7,
                                        offset: 953
                                      },
                                      end: {
                                        line: 28,
                                        column: 17,
                                        offset: 963
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 28, column: 7, offset: 953 },
                                  end: { line: 28, column: 17, offset: 963 }
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
                                            value: 'Url',
                                            position: {
                                              start: {
                                                line: 29,
                                                column: 9,
                                                offset: 972
                                              },
                                              end: {
                                                line: 29,
                                                column: 14,
                                                offset: 977
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - ',
                                            position: {
                                              start: {
                                                line: 29,
                                                column: 14,
                                                offset: 977
                                              },
                                              end: {
                                                line: 29,
                                                column: 17,
                                                offset: 980
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'string',
                                            position: {
                                              start: {
                                                line: 29,
                                                column: 17,
                                                offset: 980
                                              },
                                              end: {
                                                line: 29,
                                                column: 25,
                                                offset: 988
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - the URL of the file on the file server.',
                                            position: {
                                              start: {
                                                line: 29,
                                                column: 25,
                                                offset: 988
                                              },
                                              end: {
                                                line: 29,
                                                column: 67,
                                                offset: 1030
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 29,
                                            column: 9,
                                            offset: 972
                                          },
                                          end: {
                                            line: 29,
                                            column: 67,
                                            offset: 1030
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 29,
                                        column: 7,
                                        offset: 970
                                      },
                                      end: {
                                        line: 29,
                                        column: 67,
                                        offset: 1030
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
                                            value: 'ContentLength',
                                            position: {
                                              start: {
                                                line: 30,
                                                column: 9,
                                                offset: 1039
                                              },
                                              end: {
                                                line: 30,
                                                column: 24,
                                                offset: 1054
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - ',
                                            position: {
                                              start: {
                                                line: 30,
                                                column: 24,
                                                offset: 1054
                                              },
                                              end: {
                                                line: 30,
                                                column: 27,
                                                offset: 1057
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'number',
                                            position: {
                                              start: {
                                                line: 30,
                                                column: 27,
                                                offset: 1057
                                              },
                                              end: {
                                                line: 30,
                                                column: 35,
                                                offset: 1065
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - the length in bytes of the file data. Represents the value of the ',
                                            position: {
                                              start: {
                                                line: 30,
                                                column: 35,
                                                offset: 1065
                                              },
                                              end: {
                                                line: 30,
                                                column: 104,
                                                offset: 1134
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'Content-Length',
                                            position: {
                                              start: {
                                                line: 30,
                                                column: 104,
                                                offset: 1134
                                              },
                                              end: {
                                                line: 30,
                                                column: 120,
                                                offset: 1150
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' header of the file served by the file server.',
                                            position: {
                                              start: {
                                                line: 30,
                                                column: 120,
                                                offset: 1150
                                              },
                                              end: {
                                                line: 30,
                                                column: 166,
                                                offset: 1196
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 30,
                                            column: 9,
                                            offset: 1039
                                          },
                                          end: {
                                            line: 30,
                                            column: 166,
                                            offset: 1196
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 30,
                                        column: 7,
                                        offset: 1037
                                      },
                                      end: {
                                        line: 30,
                                        column: 166,
                                        offset: 1196
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
                                            value: 'ContentType',
                                            position: {
                                              start: {
                                                line: 31,
                                                column: 9,
                                                offset: 1205
                                              },
                                              end: {
                                                line: 31,
                                                column: 22,
                                                offset: 1218
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - ',
                                            position: {
                                              start: {
                                                line: 31,
                                                column: 22,
                                                offset: 1218
                                              },
                                              end: {
                                                line: 31,
                                                column: 25,
                                                offset: 1221
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'string',
                                            position: {
                                              start: {
                                                line: 31,
                                                column: 25,
                                                offset: 1221
                                              },
                                              end: {
                                                line: 31,
                                                column: 33,
                                                offset: 1229
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - the content type or mime type of the file. Represents the value of the ',
                                            position: {
                                              start: {
                                                line: 31,
                                                column: 33,
                                                offset: 1229
                                              },
                                              end: {
                                                line: 31,
                                                column: 107,
                                                offset: 1303
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'Content-Type',
                                            position: {
                                              start: {
                                                line: 31,
                                                column: 107,
                                                offset: 1303
                                              },
                                              end: {
                                                line: 31,
                                                column: 121,
                                                offset: 1317
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' header of the file served by the file server.',
                                            position: {
                                              start: {
                                                line: 31,
                                                column: 121,
                                                offset: 1317
                                              },
                                              end: {
                                                line: 31,
                                                column: 167,
                                                offset: 1363
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 31,
                                            column: 9,
                                            offset: 1205
                                          },
                                          end: {
                                            line: 31,
                                            column: 167,
                                            offset: 1363
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 31,
                                        column: 7,
                                        offset: 1203
                                      },
                                      end: {
                                        line: 31,
                                        column: 167,
                                        offset: 1363
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
                                            value: 'ContentEncoding',
                                            position: {
                                              start: {
                                                line: 32,
                                                column: 9,
                                                offset: 1372
                                              },
                                              end: {
                                                line: 32,
                                                column: 26,
                                                offset: 1389
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - ',
                                            position: {
                                              start: {
                                                line: 32,
                                                column: 26,
                                                offset: 1389
                                              },
                                              end: {
                                                line: 32,
                                                column: 29,
                                                offset: 1392
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'string',
                                            position: {
                                              start: {
                                                line: 32,
                                                column: 29,
                                                offset: 1392
                                              },
                                              end: {
                                                line: 32,
                                                column: 37,
                                                offset: 1400
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - the content encoding of the file. Represents the value of the ',
                                            position: {
                                              start: {
                                                line: 32,
                                                column: 37,
                                                offset: 1400
                                              },
                                              end: {
                                                line: 32,
                                                column: 102,
                                                offset: 1465
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'Content-Encoding',
                                            position: {
                                              start: {
                                                line: 32,
                                                column: 102,
                                                offset: 1465
                                              },
                                              end: {
                                                line: 32,
                                                column: 120,
                                                offset: 1483
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' header of the file served by the file server.',
                                            position: {
                                              start: {
                                                line: 32,
                                                column: 120,
                                                offset: 1483
                                              },
                                              end: {
                                                line: 32,
                                                column: 166,
                                                offset: 1529
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 32,
                                            column: 9,
                                            offset: 1372
                                          },
                                          end: {
                                            line: 32,
                                            column: 166,
                                            offset: 1529
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 32,
                                        column: 7,
                                        offset: 1370
                                      },
                                      end: {
                                        line: 32,
                                        column: 166,
                                        offset: 1529
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 29, column: 7, offset: 970 },
                                  end: {
                                    line: 32,
                                    column: 166,
                                    offset: 1529
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 28, column: 5, offset: 951 },
                              end: { line: 32, column: 166, offset: 1529 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 28, column: 5, offset: 951 },
                          end: { line: 32, column: 166, offset: 1529 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 27, column: 3, offset: 918 },
                      end: { line: 32, column: 166, offset: 1529 }
                    }
                  }
                ],
                position: {
                  start: { line: 27, column: 3, offset: 918 },
                  end: { line: 32, column: 166, offset: 1529 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const yourMedia = fs.createWriteStream("/path/to/your-media.mp4")\n' +
                  '\n' +
                  'await fileClient.write("/assets/your-media.mp4", yourMedia, {\n' +
                  '  ContentType: "video/mp4",\n' +
                  '})',
                position: {
                  start: { line: 34, column: 1, offset: 1531 },
                  end: { line: 40, column: 4, offset: 1708 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 40, column: 4, offset: 1708 }
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
          '```\n' +
          '\n' +
          'Reads file data from the file server at the specified URL.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `url` - `string` - the URL of the file on the file server.\n' +
          '\n' +
          'Return:\n' +
          '  * `data` - `Promise<object>`\n' +
          '    * `FileStream` - [`stream.Readable`](https://nodejs.org/api/stream.html#class-streamreadable) - the file data.\n' +
          '    * `ContentLength` - `number` - the length in bytes of the file data. Represents the value of the `Content-Length` header of the file served by the file server.\n' +
          '    * `ContentType` - `string` - the content type or mime type of the file. Represents the value of the `Content-Type` header of the file served by the file server.\n' +
          '    * `ContentEncoding` - `string` - the content encoding of the file. Represents the value of the `Content-Encoding` header of the file served by the file server.\n' +
          '\n' +
          '```javascript\n' +
          'const data = await fileClient.read("/assets/your-media.mp4")\n' +
          '```\n' +
          '\n' +
          'See [Requesting a file resource from clients](/docs/FileServer#requesting-a-file-resource-from-clients) for accessing file resources from browser and mobile clients.',
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
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Reads file data from the file server at the specified URL.',
                    position: {
                      start: { line: 14, column: 1, offset: 255 },
                      end: { line: 14, column: 59, offset: 313 }
                    }
                  }
                ],
                position: {
                  start: { line: 14, column: 1, offset: 255 },
                  end: { line: 14, column: 59, offset: 313 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 16, column: 1, offset: 315 },
                      end: { line: 16, column: 11, offset: 325 }
                    }
                  }
                ],
                position: {
                  start: { line: 16, column: 1, offset: 315 },
                  end: { line: 16, column: 11, offset: 325 }
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
                            value: 'url',
                            position: {
                              start: { line: 17, column: 5, offset: 330 },
                              end: { line: 17, column: 10, offset: 335 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 17, column: 10, offset: 335 },
                              end: { line: 17, column: 13, offset: 338 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 17, column: 13, offset: 338 },
                              end: { line: 17, column: 21, offset: 346 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the URL of the file on the file server.',
                            position: {
                              start: { line: 17, column: 21, offset: 346 },
                              end: { line: 17, column: 63, offset: 388 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 17, column: 5, offset: 330 },
                          end: { line: 17, column: 63, offset: 388 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 17, column: 3, offset: 328 },
                      end: { line: 17, column: 63, offset: 388 }
                    }
                  }
                ],
                position: {
                  start: { line: 17, column: 3, offset: 328 },
                  end: { line: 17, column: 63, offset: 388 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 19, column: 1, offset: 390 },
                      end: { line: 19, column: 8, offset: 397 }
                    }
                  }
                ],
                position: {
                  start: { line: 19, column: 1, offset: 390 },
                  end: { line: 19, column: 8, offset: 397 }
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
                            value: 'data',
                            position: {
                              start: { line: 20, column: 5, offset: 402 },
                              end: { line: 20, column: 11, offset: 408 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 20, column: 11, offset: 408 },
                              end: { line: 20, column: 14, offset: 411 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'Promise<object>',
                            position: {
                              start: { line: 20, column: 14, offset: 411 },
                              end: { line: 20, column: 31, offset: 428 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 20, column: 5, offset: 402 },
                          end: { line: 20, column: 31, offset: 428 }
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
                                    value: 'FileStream',
                                    position: {
                                      start: {
                                        line: 21,
                                        column: 7,
                                        offset: 435
                                      },
                                      end: {
                                        line: 21,
                                        column: 19,
                                        offset: 447
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 21,
                                        column: 19,
                                        offset: 447
                                      },
                                      end: {
                                        line: 21,
                                        column: 22,
                                        offset: 450
                                      }
                                    }
                                  },
                                  {
                                    type: 'link',
                                    title: null,
                                    url: 'https://nodejs.org/api/stream.html#class-streamreadable',
                                    children: [
                                      {
                                        type: 'inlineCode',
                                        value: 'stream.Readable',
                                        position: {
                                          start: {
                                            line: 21,
                                            column: 23,
                                            offset: 451
                                          },
                                          end: {
                                            line: 21,
                                            column: 40,
                                            offset: 468
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 21,
                                        column: 22,
                                        offset: 450
                                      },
                                      end: {
                                        line: 21,
                                        column: 98,
                                        offset: 526
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the file data.',
                                    position: {
                                      start: {
                                        line: 21,
                                        column: 98,
                                        offset: 526
                                      },
                                      end: {
                                        line: 21,
                                        column: 115,
                                        offset: 543
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 21, column: 7, offset: 435 },
                                  end: {
                                    line: 21,
                                    column: 115,
                                    offset: 543
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 5, offset: 433 },
                              end: { line: 21, column: 115, offset: 543 }
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
                                    value: 'ContentLength',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 7,
                                        offset: 550
                                      },
                                      end: {
                                        line: 22,
                                        column: 22,
                                        offset: 565
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 22,
                                        offset: 565
                                      },
                                      end: {
                                        line: 22,
                                        column: 25,
                                        offset: 568
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'number',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 25,
                                        offset: 568
                                      },
                                      end: {
                                        line: 22,
                                        column: 33,
                                        offset: 576
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the length in bytes of the file data. Represents the value of the ',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 33,
                                        offset: 576
                                      },
                                      end: {
                                        line: 22,
                                        column: 102,
                                        offset: 645
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'Content-Length',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 102,
                                        offset: 645
                                      },
                                      end: {
                                        line: 22,
                                        column: 118,
                                        offset: 661
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' header of the file served by the file server.',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 118,
                                        offset: 661
                                      },
                                      end: {
                                        line: 22,
                                        column: 164,
                                        offset: 707
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 22, column: 7, offset: 550 },
                                  end: {
                                    line: 22,
                                    column: 164,
                                    offset: 707
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 22, column: 5, offset: 548 },
                              end: { line: 22, column: 164, offset: 707 }
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
                                    value: 'ContentType',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 7,
                                        offset: 714
                                      },
                                      end: {
                                        line: 23,
                                        column: 20,
                                        offset: 727
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 20,
                                        offset: 727
                                      },
                                      end: {
                                        line: 23,
                                        column: 23,
                                        offset: 730
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 23,
                                        offset: 730
                                      },
                                      end: {
                                        line: 23,
                                        column: 31,
                                        offset: 738
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the content type or mime type of the file. Represents the value of the ',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 31,
                                        offset: 738
                                      },
                                      end: {
                                        line: 23,
                                        column: 105,
                                        offset: 812
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'Content-Type',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 105,
                                        offset: 812
                                      },
                                      end: {
                                        line: 23,
                                        column: 119,
                                        offset: 826
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' header of the file served by the file server.',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 119,
                                        offset: 826
                                      },
                                      end: {
                                        line: 23,
                                        column: 165,
                                        offset: 872
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 23, column: 7, offset: 714 },
                                  end: {
                                    line: 23,
                                    column: 165,
                                    offset: 872
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 23, column: 5, offset: 712 },
                              end: { line: 23, column: 165, offset: 872 }
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
                                    value: 'ContentEncoding',
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 7,
                                        offset: 879
                                      },
                                      end: {
                                        line: 24,
                                        column: 24,
                                        offset: 896
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 24,
                                        offset: 896
                                      },
                                      end: {
                                        line: 24,
                                        column: 27,
                                        offset: 899
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string',
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 27,
                                        offset: 899
                                      },
                                      end: {
                                        line: 24,
                                        column: 35,
                                        offset: 907
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the content encoding of the file. Represents the value of the ',
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 35,
                                        offset: 907
                                      },
                                      end: {
                                        line: 24,
                                        column: 100,
                                        offset: 972
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'Content-Encoding',
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 100,
                                        offset: 972
                                      },
                                      end: {
                                        line: 24,
                                        column: 118,
                                        offset: 990
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' header of the file served by the file server.',
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 118,
                                        offset: 990
                                      },
                                      end: {
                                        line: 24,
                                        column: 164,
                                        offset: 1036
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 24, column: 7, offset: 879 },
                                  end: {
                                    line: 24,
                                    column: 164,
                                    offset: 1036
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 24, column: 5, offset: 877 },
                              end: { line: 24, column: 164, offset: 1036 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 5, offset: 433 },
                          end: { line: 24, column: 164, offset: 1036 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 20, column: 3, offset: 400 },
                      end: { line: 24, column: 164, offset: 1036 }
                    }
                  }
                ],
                position: {
                  start: { line: 20, column: 3, offset: 400 },
                  end: { line: 24, column: 164, offset: 1036 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const data = await fileClient.read("/assets/your-media.mp4")',
                position: {
                  start: { line: 26, column: 1, offset: 1038 },
                  end: { line: 28, column: 4, offset: 1116 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'See ',
                    position: {
                      start: { line: 30, column: 1, offset: 1118 },
                      end: { line: 30, column: 5, offset: 1122 }
                    }
                  },
                  {
                    type: 'link',
                    title: null,
                    url: '/docs/FileServer#requesting-a-file-resource-from-clients',
                    children: [
                      {
                        type: 'text',
                        value: 'Requesting a file resource from clients',
                        position: {
                          start: { line: 30, column: 6, offset: 1123 },
                          end: { line: 30, column: 45, offset: 1162 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 30, column: 5, offset: 1122 },
                      end: { line: 30, column: 104, offset: 1221 }
                    }
                  },
                  {
                    type: 'text',
                    value: ' for accessing file resources from browser and mobile clients.',
                    position: {
                      start: { line: 30, column: 104, offset: 1221 },
                      end: { line: 30, column: 166, offset: 1283 }
                    }
                  }
                ],
                position: {
                  start: { line: 30, column: 1, offset: 1118 },
                  end: { line: 30, column: 166, offset: 1283 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 30, column: 166, offset: 1283 }
            }
          }
        }
      },
      {
        name: 'delete',
        docs: '```specscript\n' +
          'delete(url string) -> didDelete Promise<boolean>\n' +
          '```\n' +
          '\n' +
          'Deletes the file data indicated by the specified URL from the file server.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `url` - `string` - the URL of the file on the file server.\n' +
          '\n' +
          'Return:\n' +
          '  * `didDelete` - `Promise<boolean>` - whether the file data was found and deleted on the file server.\n' +
          '\n' +
          '```javascript\n' +
          'await fileClient.delete("/assets/your-media.mp4")\n' +
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
                value: 'delete(url string) -> didDelete Promise<boolean>',
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
                    value: 'Deletes the file data indicated by the specified URL from the file server.',
                    position: {
                      start: { line: 5, column: 1, offset: 68 },
                      end: { line: 5, column: 75, offset: 142 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 68 },
                  end: { line: 5, column: 75, offset: 142 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 144 },
                      end: { line: 7, column: 11, offset: 154 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 144 },
                  end: { line: 7, column: 11, offset: 154 }
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
                            value: 'url',
                            position: {
                              start: { line: 8, column: 5, offset: 159 },
                              end: { line: 8, column: 10, offset: 164 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 8, column: 10, offset: 164 },
                              end: { line: 8, column: 13, offset: 167 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 8, column: 13, offset: 167 },
                              end: { line: 8, column: 21, offset: 175 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the URL of the file on the file server.',
                            position: {
                              start: { line: 8, column: 21, offset: 175 },
                              end: { line: 8, column: 63, offset: 217 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 159 },
                          end: { line: 8, column: 63, offset: 217 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 157 },
                      end: { line: 8, column: 63, offset: 217 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 157 },
                  end: { line: 8, column: 63, offset: 217 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 219 },
                      end: { line: 10, column: 8, offset: 226 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 219 },
                  end: { line: 10, column: 8, offset: 226 }
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
                              start: { line: 11, column: 5, offset: 231 },
                              end: { line: 11, column: 16, offset: 242 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 11, column: 16, offset: 242 },
                              end: { line: 11, column: 19, offset: 245 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'Promise<boolean>',
                            position: {
                              start: { line: 11, column: 19, offset: 245 },
                              end: { line: 11, column: 37, offset: 263 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - whether the file data was found and deleted on the file server.',
                            position: {
                              start: { line: 11, column: 37, offset: 263 },
                              end: { line: 11, column: 103, offset: 329 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 231 },
                          end: { line: 11, column: 103, offset: 329 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 229 },
                      end: { line: 11, column: 103, offset: 329 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 229 },
                  end: { line: 11, column: 103, offset: 329 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await fileClient.delete("/assets/your-media.mp4")',
                position: {
                  start: { line: 13, column: 1, offset: 331 },
                  end: { line: 15, column: 4, offset: 398 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 398 }
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
      '  serverAddresses: Array<string>|Array<Array<string>>,\n' +
      '}, ...handlers Arguments<HttpHandler>) -> FileLoadBalancer\n' +
      '\n' +
      'hash(fileUrl string, serverAddressesLength number) -> serverIndex Promise|number\n' +
      '\n' +
      'new FileLoadBalancer(hash, options {\n' +
      '  serverAddresses: Array<string>|Array<Array<string>>,\n' +
      '}, ...handlers Arguments<HttpHandler>) -> FileLoadBalancer\n' +
      '```\n' +
      '\n' +
      'Presidium FileLoadBalancer class. Creates a file load balancer server.\n' +
      '\n' +
      'Arguments:\n' +
      '  * `options`\n' +
      '    * `serverAddresses` - `Array<string>|Array<Array<string>>` - the server addresses to load balance. An array of arrays of server addresses means the request data should be replicated across the array of server addresses indicated by the hash function.\n' +
      '  * `hash` - `function` - a function that resolves the index of the server address to route a request. Defaults to an MD5 hash function.\n' +
      '  * `handlers` - `Arguments<HttpHandler>` - HTTP handlers that process the request in order before it is processed by the file load balancer server.\n' +
      '\n' +
      'Return:\n' +
      '  * `server` - [`FileLoadBalancer`](/docs/FileLoadBalancer) - a FileLoadBalancer instance.\n' +
      '\n' +
      '```javascript\n' +
      'const server = new FileLoadBalancer({\n' +
      '  serverAddresses: ["10.0.0.1:8080", "10.0.0.2:8080", "10.0.0.3:8080"],\n' +
      '})\n' +
      '\n' +
      'server.listen(8080, () => {\n' +
      '  console.log("File load balancer server listening on port 8080")\n' +
      '})\n' +
      '```\n' +
      '\n' +
      '## Requesting a file resource from clients\n' +
      'Files stored on the file servers load balanced by the file load balancer server can be accessed by clients with a GET request to the file load balancer server at the url of the file.\n' +
      '\n' +
      '```html\n' +
      '<img src="http://your-file-load-balancer-server-ip:8999/assets/your-media.mp4" alt="">\n' +
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
              '  serverAddresses: Array<string>|Array<Array<string>>,\n' +
              '}, ...handlers Arguments<HttpHandler>) -> FileLoadBalancer\n' +
              '\n' +
              'hash(fileUrl string, serverAddressesLength number) -> serverIndex Promise|number\n' +
              '\n' +
              'new FileLoadBalancer(hash, options {\n' +
              '  serverAddresses: Array<string>|Array<Array<string>>,\n' +
              '}, ...handlers Arguments<HttpHandler>) -> FileLoadBalancer',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 526 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Presidium FileLoadBalancer class. Creates a file load balancer server.',
                position: {
                  start: { line: 17, column: 1, offset: 528 },
                  end: { line: 17, column: 71, offset: 598 }
                }
              }
            ],
            position: {
              start: { line: 17, column: 1, offset: 528 },
              end: { line: 17, column: 71, offset: 598 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Arguments:',
                position: {
                  start: { line: 19, column: 1, offset: 600 },
                  end: { line: 19, column: 11, offset: 610 }
                }
              }
            ],
            position: {
              start: { line: 19, column: 1, offset: 600 },
              end: { line: 19, column: 11, offset: 610 }
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
                          start: { line: 20, column: 5, offset: 615 },
                          end: { line: 20, column: 14, offset: 624 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 20, column: 5, offset: 615 },
                      end: { line: 20, column: 14, offset: 624 }
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
                                  start: { line: 21, column: 7, offset: 631 },
                                  end: { line: 21, column: 24, offset: 648 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 21, column: 24, offset: 648 },
                                  end: { line: 21, column: 27, offset: 651 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'Array<string>|Array<Array<string>>',
                                position: {
                                  start: { line: 21, column: 27, offset: 651 },
                                  end: { line: 21, column: 63, offset: 687 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the server addresses to load balance. An array of arrays of server addresses means the request data should be replicated across the array of server addresses indicated by the hash function.',
                                position: {
                                  start: { line: 21, column: 63, offset: 687 },
                                  end: {
                                    line: 21,
                                    column: 255,
                                    offset: 879
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 7, offset: 631 },
                              end: { line: 21, column: 255, offset: 879 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 5, offset: 629 },
                          end: { line: 21, column: 255, offset: 879 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 21, column: 5, offset: 629 },
                      end: { line: 21, column: 255, offset: 879 }
                    }
                  }
                ],
                position: {
                  start: { line: 20, column: 3, offset: 613 },
                  end: { line: 21, column: 255, offset: 879 }
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
                          start: { line: 22, column: 5, offset: 884 },
                          end: { line: 22, column: 11, offset: 890 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 22, column: 11, offset: 890 },
                          end: { line: 22, column: 14, offset: 893 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'function',
                        position: {
                          start: { line: 22, column: 14, offset: 893 },
                          end: { line: 22, column: 24, offset: 903 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - a function that resolves the index of the server address to route a request. Defaults to an MD5 hash function.',
                        position: {
                          start: { line: 22, column: 24, offset: 903 },
                          end: { line: 22, column: 137, offset: 1016 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 22, column: 5, offset: 884 },
                      end: { line: 22, column: 137, offset: 1016 }
                    }
                  }
                ],
                position: {
                  start: { line: 22, column: 3, offset: 882 },
                  end: { line: 22, column: 137, offset: 1016 }
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
                          start: { line: 23, column: 5, offset: 1021 },
                          end: { line: 23, column: 15, offset: 1031 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 23, column: 15, offset: 1031 },
                          end: { line: 23, column: 18, offset: 1034 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'Arguments<HttpHandler>',
                        position: {
                          start: { line: 23, column: 18, offset: 1034 },
                          end: { line: 23, column: 42, offset: 1058 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - HTTP handlers that process the request in order before it is processed by the file load balancer server.',
                        position: {
                          start: { line: 23, column: 42, offset: 1058 },
                          end: { line: 23, column: 149, offset: 1165 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 23, column: 5, offset: 1021 },
                      end: { line: 23, column: 149, offset: 1165 }
                    }
                  }
                ],
                position: {
                  start: { line: 23, column: 3, offset: 1019 },
                  end: { line: 23, column: 149, offset: 1165 }
                }
              }
            ],
            position: {
              start: { line: 20, column: 3, offset: 613 },
              end: { line: 23, column: 149, offset: 1165 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Return:',
                position: {
                  start: { line: 25, column: 1, offset: 1167 },
                  end: { line: 25, column: 8, offset: 1174 }
                }
              }
            ],
            position: {
              start: { line: 25, column: 1, offset: 1167 },
              end: { line: 25, column: 8, offset: 1174 }
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
                          start: { line: 26, column: 5, offset: 1179 },
                          end: { line: 26, column: 13, offset: 1187 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 26, column: 13, offset: 1187 },
                          end: { line: 26, column: 16, offset: 1190 }
                        }
                      },
                      {
                        type: 'link',
                        title: null,
                        url: '/docs/FileLoadBalancer',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'FileLoadBalancer',
                            position: {
                              start: { line: 26, column: 17, offset: 1191 },
                              end: { line: 26, column: 35, offset: 1209 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 26, column: 16, offset: 1190 },
                          end: { line: 26, column: 60, offset: 1234 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - a FileLoadBalancer instance.',
                        position: {
                          start: { line: 26, column: 60, offset: 1234 },
                          end: { line: 26, column: 91, offset: 1265 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 26, column: 5, offset: 1179 },
                      end: { line: 26, column: 91, offset: 1265 }
                    }
                  }
                ],
                position: {
                  start: { line: 26, column: 3, offset: 1177 },
                  end: { line: 26, column: 91, offset: 1265 }
                }
              }
            ],
            position: {
              start: { line: 26, column: 3, offset: 1177 },
              end: { line: 26, column: 91, offset: 1265 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: 'const server = new FileLoadBalancer({\n' +
              '  serverAddresses: ["10.0.0.1:8080", "10.0.0.2:8080", "10.0.0.3:8080"],\n' +
              '})\n' +
              '\n' +
              'server.listen(8080, () => {\n' +
              '  console.log("File load balancer server listening on port 8080")\n' +
              '})',
            position: {
              start: { line: 28, column: 1, offset: 1267 },
              end: { line: 36, column: 4, offset: 1495 }
            }
          },
          {
            type: 'heading',
            depth: 2,
            children: [
              {
                type: 'text',
                value: 'Requesting a file resource from clients',
                position: {
                  start: { line: 38, column: 4, offset: 1500 },
                  end: { line: 38, column: 43, offset: 1539 }
                }
              }
            ],
            position: {
              start: { line: 38, column: 1, offset: 1497 },
              end: { line: 38, column: 43, offset: 1539 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Files stored on the file servers load balanced by the file load balancer server can be accessed by clients with a GET request to the file load balancer server at the url of the file.',
                position: {
                  start: { line: 39, column: 1, offset: 1540 },
                  end: { line: 39, column: 183, offset: 1722 }
                }
              }
            ],
            position: {
              start: { line: 39, column: 1, offset: 1540 },
              end: { line: 39, column: 183, offset: 1722 }
            }
          },
          {
            type: 'code',
            lang: 'html',
            meta: null,
            value: '<img src="http://your-file-load-balancer-server-ip:8999/assets/your-media.mp4" alt="">',
            position: {
              start: { line: 41, column: 1, offset: 1724 },
              end: { line: 43, column: 4, offset: 1822 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 43, column: 4, offset: 1822 }
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
          'Starts the file load balancer server listening on the specified port with an optional callback function.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `port` - `number` - the port on which the file load balancer server will listen.\n' +
          '  * `callback` - `function` - a callback function to call once the file load balancer server has started listening.\n' +
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
                    value: 'Starts the file load balancer server listening on the specified port with an optional callback function.',
                    position: {
                      start: { line: 6, column: 1, offset: 104 },
                      end: { line: 6, column: 105, offset: 208 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 1, offset: 104 },
                  end: { line: 6, column: 105, offset: 208 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 8, column: 1, offset: 210 },
                      end: { line: 8, column: 11, offset: 220 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 1, offset: 210 },
                  end: { line: 8, column: 11, offset: 220 }
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
                              start: { line: 9, column: 5, offset: 225 },
                              end: { line: 9, column: 11, offset: 231 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 9, column: 11, offset: 231 },
                              end: { line: 9, column: 14, offset: 234 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'number',
                            position: {
                              start: { line: 9, column: 14, offset: 234 },
                              end: { line: 9, column: 22, offset: 242 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the port on which the file load balancer server will listen.',
                            position: {
                              start: { line: 9, column: 22, offset: 242 },
                              end: { line: 9, column: 85, offset: 305 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 9, column: 5, offset: 225 },
                          end: { line: 9, column: 85, offset: 305 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 3, offset: 223 },
                      end: { line: 9, column: 85, offset: 305 }
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
                              start: { line: 10, column: 5, offset: 310 },
                              end: { line: 10, column: 15, offset: 320 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 10, column: 15, offset: 320 },
                              end: { line: 10, column: 18, offset: 323 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'function',
                            position: {
                              start: { line: 10, column: 18, offset: 323 },
                              end: { line: 10, column: 28, offset: 333 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a callback function to call once the file load balancer server has started listening.',
                            position: {
                              start: { line: 10, column: 28, offset: 333 },
                              end: { line: 10, column: 116, offset: 421 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 10, column: 5, offset: 310 },
                          end: { line: 10, column: 116, offset: 421 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 10, column: 3, offset: 308 },
                      end: { line: 10, column: 116, offset: 421 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 3, offset: 223 },
                  end: { line: 10, column: 116, offset: 421 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 12, column: 1, offset: 423 },
                      end: { line: 12, column: 8, offset: 430 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 1, offset: 423 },
                  end: { line: 12, column: 8, offset: 430 }
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
                              start: { line: 13, column: 5, offset: 435 },
                              end: { line: 13, column: 16, offset: 446 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 13, column: 5, offset: 435 },
                          end: { line: 13, column: 16, offset: 446 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 13, column: 3, offset: 433 },
                      end: { line: 13, column: 16, offset: 446 }
                    }
                  }
                ],
                position: {
                  start: { line: 13, column: 3, offset: 433 },
                  end: { line: 13, column: 16, offset: 446 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'server.listen(8080)',
                position: {
                  start: { line: 15, column: 1, offset: 448 },
                  end: { line: 17, column: 4, offset: 485 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 17, column: 4, offset: 485 }
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
          'Closes the file load balancer server.\n' +
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
                    value: 'Closes the file load balancer server.',
                    position: {
                      start: { line: 5, column: 1, offset: 40 },
                      end: { line: 5, column: 38, offset: 77 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 40 },
                  end: { line: 5, column: 38, offset: 77 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 79 },
                      end: { line: 7, column: 11, offset: 89 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 79 },
                  end: { line: 7, column: 11, offset: 89 }
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
                              start: { line: 8, column: 5, offset: 94 },
                              end: { line: 8, column: 11, offset: 100 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 94 },
                          end: { line: 8, column: 11, offset: 100 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 92 },
                      end: { line: 8, column: 11, offset: 100 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 92 },
                  end: { line: 8, column: 11, offset: 100 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 102 },
                      end: { line: 10, column: 8, offset: 109 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 102 },
                  end: { line: 10, column: 8, offset: 109 }
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
                              start: { line: 11, column: 5, offset: 114 },
                              end: { line: 11, column: 16, offset: 125 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 114 },
                          end: { line: 11, column: 16, offset: 125 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 112 },
                      end: { line: 11, column: 16, offset: 125 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 112 },
                  end: { line: 11, column: 16, offset: 125 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'server.close()',
                position: {
                  start: { line: 13, column: 1, offset: 127 },
                  end: { line: 15, column: 4, offset: 159 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 159 }
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
      'type HttpHandler(request http.ClientRequest, response http.ServerResponse) -> undefined\n' +
      '\n' +
      'new FileServer(options {\n' +
      '  dir: string,\n' +
      '  cors: boolean|string,\n' +
      '  delimiter: string,\n' +
      '}, ...handlers Array<HttpHandler>) -> FileServer\n' +
      '```\n' +
      '\n' +
      'Presidium FileServer class. Creates a file server.\n' +
      '\n' +
      'Arguments:\n' +
      '  * `options`\n' +
      '    * `dir` - `string` - the absolute path on the machine running the file server to the directory of the file server files.\n' +
      '    * `cors` - `boolean|string` - whether to enable cross-origin resource sharing for all origins. If this value is a string, the value of the string will be provided as the value of the `Access-Control-Allow-Origin` header on all file resources served by the file server.\n' +
      '    * `delimiter` - `string` - a character or string that will separate the file data from the metadata during storage.\n' +
      '  * `handlers` - `Arguments<HttpHandler>` - HTTP handlers that process the request in order before it is processed by the file server.\n' +
      '\n' +
      'Return:\n' +
      '  * `server` - [`FileServer`](/docs/FileServer) - a FileServer instance.\n' +
      '\n' +
      '```javascript\n' +
      'const server = new FileServer({\n' +
      '  databasePath: `${__dirname}/file`,\n' +
      '})\n' +
      'await server.init()\n' +
      '\n' +
      'server.listen(8080, () => {\n' +
      '  console.log("File server listening on port 8080")\n' +
      '})\n' +
      '```\n' +
      '\n' +
      '## Metadata database directory\n' +
      'A metadata database directory is created to store metadata about the files. The metadata database directory is always located at `<dir>/__metadata`.\n' +
      '\n' +
      '## Requesting a file resource from clients\n' +
      'Files stored on the file server can be accessed by clients with a GET request to the file server at the url of the file.\n' +
      '\n' +
      '```html\n' +
      '<img src="http://your-file-server-ip:8999/assets/your-media.mp4" alt="">\n' +
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
              'type HttpHandler(request http.ClientRequest, response http.ServerResponse) -> undefined\n' +
              '\n' +
              'new FileServer(options {\n' +
              '  dir: string,\n' +
              '  cors: boolean|string,\n' +
              '  delimiter: string,\n' +
              '}, ...handlers Array<HttpHandler>) -> FileServer',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 11, column: 4, offset: 288 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Presidium FileServer class. Creates a file server.',
                position: {
                  start: { line: 13, column: 1, offset: 290 },
                  end: { line: 13, column: 51, offset: 340 }
                }
              }
            ],
            position: {
              start: { line: 13, column: 1, offset: 290 },
              end: { line: 13, column: 51, offset: 340 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Arguments:',
                position: {
                  start: { line: 15, column: 1, offset: 342 },
                  end: { line: 15, column: 11, offset: 352 }
                }
              }
            ],
            position: {
              start: { line: 15, column: 1, offset: 342 },
              end: { line: 15, column: 11, offset: 352 }
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
                          start: { line: 16, column: 5, offset: 357 },
                          end: { line: 16, column: 14, offset: 366 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 16, column: 5, offset: 357 },
                      end: { line: 16, column: 14, offset: 366 }
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
                                value: 'dir',
                                position: {
                                  start: { line: 17, column: 7, offset: 373 },
                                  end: { line: 17, column: 12, offset: 378 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 17, column: 12, offset: 378 },
                                  end: { line: 17, column: 15, offset: 381 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'string',
                                position: {
                                  start: { line: 17, column: 15, offset: 381 },
                                  end: { line: 17, column: 23, offset: 389 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the absolute path on the machine running the file server to the directory of the file server files.',
                                position: {
                                  start: { line: 17, column: 23, offset: 389 },
                                  end: {
                                    line: 17,
                                    column: 125,
                                    offset: 491
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 17, column: 7, offset: 373 },
                              end: { line: 17, column: 125, offset: 491 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 17, column: 5, offset: 371 },
                          end: { line: 17, column: 125, offset: 491 }
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
                                value: 'cors',
                                position: {
                                  start: { line: 18, column: 7, offset: 498 },
                                  end: { line: 18, column: 13, offset: 504 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 18, column: 13, offset: 504 },
                                  end: { line: 18, column: 16, offset: 507 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'boolean|string',
                                position: {
                                  start: { line: 18, column: 16, offset: 507 },
                                  end: { line: 18, column: 32, offset: 523 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - whether to enable cross-origin resource sharing for all origins. If this value is a string, the value of the string will be provided as the value of the ',
                                position: {
                                  start: { line: 18, column: 32, offset: 523 },
                                  end: {
                                    line: 18,
                                    column: 188,
                                    offset: 679
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'Access-Control-Allow-Origin',
                                position: {
                                  start: {
                                    line: 18,
                                    column: 188,
                                    offset: 679
                                  },
                                  end: {
                                    line: 18,
                                    column: 217,
                                    offset: 708
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' header on all file resources served by the file server.',
                                position: {
                                  start: {
                                    line: 18,
                                    column: 217,
                                    offset: 708
                                  },
                                  end: {
                                    line: 18,
                                    column: 273,
                                    offset: 764
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 18, column: 7, offset: 498 },
                              end: { line: 18, column: 273, offset: 764 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 18, column: 5, offset: 496 },
                          end: { line: 18, column: 273, offset: 764 }
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
                                  start: { line: 19, column: 7, offset: 771 },
                                  end: { line: 19, column: 18, offset: 782 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 19, column: 18, offset: 782 },
                                  end: { line: 19, column: 21, offset: 785 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'string',
                                position: {
                                  start: { line: 19, column: 21, offset: 785 },
                                  end: { line: 19, column: 29, offset: 793 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - a character or string that will separate the file data from the metadata during storage.',
                                position: {
                                  start: { line: 19, column: 29, offset: 793 },
                                  end: {
                                    line: 19,
                                    column: 120,
                                    offset: 884
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 19, column: 7, offset: 771 },
                              end: { line: 19, column: 120, offset: 884 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 769 },
                          end: { line: 19, column: 120, offset: 884 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 17, column: 5, offset: 371 },
                      end: { line: 19, column: 120, offset: 884 }
                    }
                  }
                ],
                position: {
                  start: { line: 16, column: 3, offset: 355 },
                  end: { line: 19, column: 120, offset: 884 }
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
                          start: { line: 20, column: 5, offset: 889 },
                          end: { line: 20, column: 15, offset: 899 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 20, column: 15, offset: 899 },
                          end: { line: 20, column: 18, offset: 902 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'Arguments<HttpHandler>',
                        position: {
                          start: { line: 20, column: 18, offset: 902 },
                          end: { line: 20, column: 42, offset: 926 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - HTTP handlers that process the request in order before it is processed by the file server.',
                        position: {
                          start: { line: 20, column: 42, offset: 926 },
                          end: { line: 20, column: 135, offset: 1019 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 20, column: 5, offset: 889 },
                      end: { line: 20, column: 135, offset: 1019 }
                    }
                  }
                ],
                position: {
                  start: { line: 20, column: 3, offset: 887 },
                  end: { line: 20, column: 135, offset: 1019 }
                }
              }
            ],
            position: {
              start: { line: 16, column: 3, offset: 355 },
              end: { line: 20, column: 135, offset: 1019 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Return:',
                position: {
                  start: { line: 22, column: 1, offset: 1021 },
                  end: { line: 22, column: 8, offset: 1028 }
                }
              }
            ],
            position: {
              start: { line: 22, column: 1, offset: 1021 },
              end: { line: 22, column: 8, offset: 1028 }
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
                          start: { line: 23, column: 5, offset: 1033 },
                          end: { line: 23, column: 13, offset: 1041 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 23, column: 13, offset: 1041 },
                          end: { line: 23, column: 16, offset: 1044 }
                        }
                      },
                      {
                        type: 'link',
                        title: null,
                        url: '/docs/FileServer',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'FileServer',
                            position: {
                              start: { line: 23, column: 17, offset: 1045 },
                              end: { line: 23, column: 29, offset: 1057 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 23, column: 16, offset: 1044 },
                          end: { line: 23, column: 48, offset: 1076 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - a FileServer instance.',
                        position: {
                          start: { line: 23, column: 48, offset: 1076 },
                          end: { line: 23, column: 73, offset: 1101 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 23, column: 5, offset: 1033 },
                      end: { line: 23, column: 73, offset: 1101 }
                    }
                  }
                ],
                position: {
                  start: { line: 23, column: 3, offset: 1031 },
                  end: { line: 23, column: 73, offset: 1101 }
                }
              }
            ],
            position: {
              start: { line: 23, column: 3, offset: 1031 },
              end: { line: 23, column: 73, offset: 1101 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: 'const server = new FileServer({\n' +
              '  databasePath: `${__dirname}/file`,\n' +
              '})\n' +
              'await server.init()\n' +
              '\n' +
              'server.listen(8080, () => {\n' +
              '  console.log("File server listening on port 8080")\n' +
              '})',
            position: {
              start: { line: 25, column: 1, offset: 1103 },
              end: { line: 34, column: 4, offset: 1296 }
            }
          },
          {
            type: 'heading',
            depth: 2,
            children: [
              {
                type: 'text',
                value: 'Metadata database directory',
                position: {
                  start: { line: 36, column: 4, offset: 1301 },
                  end: { line: 36, column: 31, offset: 1328 }
                }
              }
            ],
            position: {
              start: { line: 36, column: 1, offset: 1298 },
              end: { line: 36, column: 31, offset: 1328 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'A metadata database directory is created to store metadata about the files. The metadata database directory is always located at ',
                position: {
                  start: { line: 37, column: 1, offset: 1329 },
                  end: { line: 37, column: 130, offset: 1458 }
                }
              },
              {
                type: 'inlineCode',
                value: '<dir>/__metadata',
                position: {
                  start: { line: 37, column: 130, offset: 1458 },
                  end: { line: 37, column: 148, offset: 1476 }
                }
              },
              {
                type: 'text',
                value: '.',
                position: {
                  start: { line: 37, column: 148, offset: 1476 },
                  end: { line: 37, column: 149, offset: 1477 }
                }
              }
            ],
            position: {
              start: { line: 37, column: 1, offset: 1329 },
              end: { line: 37, column: 149, offset: 1477 }
            }
          },
          {
            type: 'heading',
            depth: 2,
            children: [
              {
                type: 'text',
                value: 'Requesting a file resource from clients',
                position: {
                  start: { line: 39, column: 4, offset: 1482 },
                  end: { line: 39, column: 43, offset: 1521 }
                }
              }
            ],
            position: {
              start: { line: 39, column: 1, offset: 1479 },
              end: { line: 39, column: 43, offset: 1521 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Files stored on the file server can be accessed by clients with a GET request to the file server at the url of the file.',
                position: {
                  start: { line: 40, column: 1, offset: 1522 },
                  end: { line: 40, column: 121, offset: 1642 }
                }
              }
            ],
            position: {
              start: { line: 40, column: 1, offset: 1522 },
              end: { line: 40, column: 121, offset: 1642 }
            }
          },
          {
            type: 'code',
            lang: 'html',
            meta: null,
            value: '<img src="http://your-file-server-ip:8999/assets/your-media.mp4" alt="">',
            position: {
              start: { line: 42, column: 1, offset: 1644 },
              end: { line: 44, column: 4, offset: 1728 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 44, column: 4, offset: 1728 }
        }
      }
    },
    methods: [
      {
        name: 'init',
        docs: '```specscript\n' +
          'init() -> Promise<>\n' +
          '```\n' +
          '\n' +
          'Initializes the file server.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none)\n' +
          '\n' +
          'Return:\n' +
          '  * Empty promise.\n' +
          '\n' +
          '```javascript\n' +
          'await server.init()\n' +
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
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Initializes the file server.',
                    position: {
                      start: { line: 5, column: 1, offset: 39 },
                      end: { line: 5, column: 29, offset: 67 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 39 },
                  end: { line: 5, column: 29, offset: 67 }
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
                            type: 'text',
                            value: 'Empty promise.',
                            position: {
                              start: { line: 11, column: 5, offset: 104 },
                              end: { line: 11, column: 19, offset: 118 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 104 },
                          end: { line: 11, column: 19, offset: 118 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 102 },
                      end: { line: 11, column: 19, offset: 118 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 102 },
                  end: { line: 11, column: 19, offset: 118 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await server.init()',
                position: {
                  start: { line: 13, column: 1, offset: 120 },
                  end: { line: 15, column: 4, offset: 157 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 157 }
            }
          }
        }
      },
      {
        name: 'listen',
        docs: '```specscript\n' +
          'listen(port number) -> undefined\n' +
          'listen(port number, callback function) -> undefined\n' +
          '```\n' +
          '\n' +
          'Starts the file server listening on the specified port with an optional callback function.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `port` - `number` - the port on which the file server will listen.\n' +
          '  * `callback` - `function` - a callback function to call once the file server has started listening.\n' +
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
                    value: 'Starts the file server listening on the specified port with an optional callback function.',
                    position: {
                      start: { line: 6, column: 1, offset: 104 },
                      end: { line: 6, column: 91, offset: 194 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 1, offset: 104 },
                  end: { line: 6, column: 91, offset: 194 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 8, column: 1, offset: 196 },
                      end: { line: 8, column: 11, offset: 206 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 1, offset: 196 },
                  end: { line: 8, column: 11, offset: 206 }
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
                              start: { line: 9, column: 5, offset: 211 },
                              end: { line: 9, column: 11, offset: 217 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 9, column: 11, offset: 217 },
                              end: { line: 9, column: 14, offset: 220 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'number',
                            position: {
                              start: { line: 9, column: 14, offset: 220 },
                              end: { line: 9, column: 22, offset: 228 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the port on which the file server will listen.',
                            position: {
                              start: { line: 9, column: 22, offset: 228 },
                              end: { line: 9, column: 71, offset: 277 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 9, column: 5, offset: 211 },
                          end: { line: 9, column: 71, offset: 277 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 3, offset: 209 },
                      end: { line: 9, column: 71, offset: 277 }
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
                              start: { line: 10, column: 5, offset: 282 },
                              end: { line: 10, column: 15, offset: 292 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 10, column: 15, offset: 292 },
                              end: { line: 10, column: 18, offset: 295 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'function',
                            position: {
                              start: { line: 10, column: 18, offset: 295 },
                              end: { line: 10, column: 28, offset: 305 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a callback function to call once the file server has started listening.',
                            position: {
                              start: { line: 10, column: 28, offset: 305 },
                              end: { line: 10, column: 102, offset: 379 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 10, column: 5, offset: 282 },
                          end: { line: 10, column: 102, offset: 379 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 10, column: 3, offset: 280 },
                      end: { line: 10, column: 102, offset: 379 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 3, offset: 209 },
                  end: { line: 10, column: 102, offset: 379 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 12, column: 1, offset: 381 },
                      end: { line: 12, column: 8, offset: 388 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 1, offset: 381 },
                  end: { line: 12, column: 8, offset: 388 }
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
                              start: { line: 13, column: 5, offset: 393 },
                              end: { line: 13, column: 16, offset: 404 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 13, column: 5, offset: 393 },
                          end: { line: 13, column: 16, offset: 404 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 13, column: 3, offset: 391 },
                      end: { line: 13, column: 16, offset: 404 }
                    }
                  }
                ],
                position: {
                  start: { line: 13, column: 3, offset: 391 },
                  end: { line: 13, column: 16, offset: 404 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'server.listen(8080)',
                position: {
                  start: { line: 15, column: 1, offset: 406 },
                  end: { line: 17, column: 4, offset: 443 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 17, column: 4, offset: 443 }
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
          'Closes the file server.\n' +
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
                    value: 'Closes the file server.',
                    position: {
                      start: { line: 5, column: 1, offset: 40 },
                      end: { line: 5, column: 24, offset: 63 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 40 },
                  end: { line: 5, column: 24, offset: 63 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 65 },
                      end: { line: 7, column: 11, offset: 75 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 65 },
                  end: { line: 7, column: 11, offset: 75 }
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
                              start: { line: 8, column: 5, offset: 80 },
                              end: { line: 8, column: 11, offset: 86 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 80 },
                          end: { line: 8, column: 11, offset: 86 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 78 },
                      end: { line: 8, column: 11, offset: 86 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 78 },
                  end: { line: 8, column: 11, offset: 86 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 88 },
                      end: { line: 10, column: 8, offset: 95 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 88 },
                  end: { line: 10, column: 8, offset: 95 }
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
                              start: { line: 11, column: 5, offset: 100 },
                              end: { line: 11, column: 16, offset: 111 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 100 },
                          end: { line: 11, column: 16, offset: 111 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 98 },
                      end: { line: 11, column: 16, offset: 111 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 98 },
                  end: { line: 11, column: 16, offset: 111 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'server.close()',
                position: {
                  start: { line: 13, column: 1, offset: 113 },
                  end: { line: 15, column: 4, offset: 145 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 145 }
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