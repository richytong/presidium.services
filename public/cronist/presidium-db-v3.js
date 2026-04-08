export default [
  {
    name: 'DiskHashTable',
    docs: '```coffeescript [specscript]\n' +
      'new DiskHashTable(options {\n' +
      '  initialLength: number,\n' +
      '  storagePath: string,\n' +
      '  headerPath: string,\n' +
      '  resizeRatio: number,\n' +
      '  resizeFactor: number,\n' +
      '}) -> ht DiskHashTable\n' +
      '```\n' +
      '\n' +
      'Presidium DiskHashTable class. Creates a hash table that stores all data on disk.\n' +
      '\n' +
      'Arguments:\n' +
      '  * `options`\n' +
      '    * `initialLength` - `number` - the initial length of the disk hash table. Defaults to 1024.\n' +
      '    * `storagePath` - `string` - the path to the file used to store the disk hash table data.\n' +
      '    * `headerPath` - `string` - the path to the file used to store header information about the disk hash table.\n' +
      '    * `resizeRatio` - `number` - the ratio of number of items to table length at which to resize the disk hash table. Minimum value 0 (no resize), maximum value 1. Defaults to 0.\n' +
      "    * `resizeFactor` - `number` - the factor that is multiplied with the disk hash table's current length to determine the new table length on a resize.\n" +
      '\n' +
      'Return:\n' +
      '  * `ht` - [`DiskHashTable`](/docs/DiskHashTable) - a `DiskHashTable` instance.\n' +
      '\n' +
      '```javascript\n' +
      'const ht = new DiskHashTable({\n' +
      '  initialLength: 1024,\n' +
      "  storagePath: '/path/to/storage-file',\n" +
      "  headerPath: '/path/to/header-file',\n" +
      '  resizeRatio: 0.7,\n' +
      '  resizeFactor: 4,\n' +
      '})\n' +
      '```\n' +
      '\n' +
      '## Resizing the disk hash table\n' +
      "When an item is inserted into the disk hash table via [set](/docs/DiskHashTable#set), the current capacity ratio of the table is calculated as the table's count divided by the table's length. If the current capacity ratio exceeds the `resizeRatio` (and the `resizeRatio` is not 0), a resize of the table occurs.\n" +
      '\n' +
      'During a table resize, each item of the table is added into a temporary storage file using the new table length calculated from the equation below:\n' +
      '\n' +
      '```\n' +
      'newTableLength = oldTableLength * resizeFactor\n' +
      '```\n' +
      '\n' +
      'Once all of the items have been added into the temporary storage file, the temporary storage file is moved to the location of the old storage file to be used as the new storage file.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'DiskHashTable',
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
            value: 'new DiskHashTable(options {\n' +
              '  initialLength: number,\n' +
              '  storagePath: string,\n' +
              '  headerPath: string,\n' +
              '  resizeRatio: number,\n' +
              '  resizeFactor: number,\n' +
              '}) -> ht DiskHashTable',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 9, column: 4, offset: 200 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Presidium DiskHashTable class. Creates a hash table that stores all data on disk.',
                position: {
                  start: { line: 11, column: 1, offset: 202 },
                  end: { line: 11, column: 82, offset: 283 }
                }
              }
            ],
            position: {
              start: { line: 11, column: 1, offset: 202 },
              end: { line: 11, column: 82, offset: 283 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Arguments:',
                position: {
                  start: { line: 13, column: 1, offset: 285 },
                  end: { line: 13, column: 11, offset: 295 }
                }
              }
            ],
            position: {
              start: { line: 13, column: 1, offset: 285 },
              end: { line: 13, column: 11, offset: 295 }
            }
          },
          {
            type: 'list',
            ordered: false,
            start: null,
            spread: false,
            children: [
              {
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
                          start: { line: 14, column: 5, offset: 300 },
                          end: { line: 14, column: 14, offset: 309 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 14, column: 5, offset: 300 },
                      end: { line: 14, column: 14, offset: 309 }
                    }
                  },
                  {
                    type: 'list',
                    ordered: false,
                    start: null,
                    spread: false,
                    children: [
                      {
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
                                  start: { line: 15, column: 7, offset: 316 },
                                  end: { line: 15, column: 22, offset: 331 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 15, column: 22, offset: 331 },
                                  end: { line: 15, column: 25, offset: 334 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: { line: 15, column: 25, offset: 334 },
                                  end: { line: 15, column: 33, offset: 342 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the initial length of the disk hash table. Defaults to 1024.',
                                position: {
                                  start: { line: 15, column: 33, offset: 342 },
                                  end: { line: 15, column: 96, offset: 405 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 15, column: 7, offset: 316 },
                              end: { line: 15, column: 96, offset: 405 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 15, column: 5, offset: 314 },
                          end: { line: 15, column: 96, offset: 405 }
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
                                value: 'storagePath',
                                position: {
                                  start: { line: 16, column: 7, offset: 412 },
                                  end: { line: 16, column: 20, offset: 425 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 16, column: 20, offset: 425 },
                                  end: { line: 16, column: 23, offset: 428 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'string',
                                position: {
                                  start: { line: 16, column: 23, offset: 428 },
                                  end: { line: 16, column: 31, offset: 436 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the path to the file used to store the disk hash table data.',
                                position: {
                                  start: { line: 16, column: 31, offset: 436 },
                                  end: { line: 16, column: 94, offset: 499 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 16, column: 7, offset: 412 },
                              end: { line: 16, column: 94, offset: 499 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 16, column: 5, offset: 410 },
                          end: { line: 16, column: 94, offset: 499 }
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
                                value: 'headerPath',
                                position: {
                                  start: { line: 17, column: 7, offset: 506 },
                                  end: { line: 17, column: 19, offset: 518 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 17, column: 19, offset: 518 },
                                  end: { line: 17, column: 22, offset: 521 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'string',
                                position: {
                                  start: { line: 17, column: 22, offset: 521 },
                                  end: { line: 17, column: 30, offset: 529 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the path to the file used to store header information about the disk hash table.',
                                position: {
                                  start: { line: 17, column: 30, offset: 529 },
                                  end: {
                                    line: 17,
                                    column: 113,
                                    offset: 612
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 17, column: 7, offset: 506 },
                              end: { line: 17, column: 113, offset: 612 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 17, column: 5, offset: 504 },
                          end: { line: 17, column: 113, offset: 612 }
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
                                  start: { line: 18, column: 7, offset: 619 },
                                  end: { line: 18, column: 20, offset: 632 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 18, column: 20, offset: 632 },
                                  end: { line: 18, column: 23, offset: 635 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: { line: 18, column: 23, offset: 635 },
                                  end: { line: 18, column: 31, offset: 643 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the ratio of number of items to table length at which to resize the disk hash table. Minimum value 0 (no resize), maximum value 1. Defaults to 0.',
                                position: {
                                  start: { line: 18, column: 31, offset: 643 },
                                  end: {
                                    line: 18,
                                    column: 179,
                                    offset: 791
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 18, column: 7, offset: 619 },
                              end: { line: 18, column: 179, offset: 791 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 18, column: 5, offset: 617 },
                          end: { line: 18, column: 179, offset: 791 }
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
                                  start: { line: 19, column: 7, offset: 798 },
                                  end: { line: 19, column: 21, offset: 812 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 19, column: 21, offset: 812 },
                                  end: { line: 19, column: 24, offset: 815 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: { line: 19, column: 24, offset: 815 },
                                  end: { line: 19, column: 32, offset: 823 }
                                }
                              },
                              {
                                type: 'text',
                                value: " - the factor that is multiplied with the disk hash table's current length to determine the new table length on a resize.",
                                position: {
                                  start: { line: 19, column: 32, offset: 823 },
                                  end: {
                                    line: 19,
                                    column: 153,
                                    offset: 944
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 19, column: 7, offset: 798 },
                              end: { line: 19, column: 153, offset: 944 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 796 },
                          end: { line: 19, column: 153, offset: 944 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 15, column: 5, offset: 314 },
                      end: { line: 19, column: 153, offset: 944 }
                    }
                  }
                ],
                position: {
                  start: { line: 14, column: 3, offset: 298 },
                  end: { line: 19, column: 153, offset: 944 }
                }
              }
            ],
            position: {
              start: { line: 14, column: 3, offset: 298 },
              end: { line: 19, column: 153, offset: 944 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Return:',
                position: {
                  start: { line: 21, column: 1, offset: 946 },
                  end: { line: 21, column: 8, offset: 953 }
                }
              }
            ],
            position: {
              start: { line: 21, column: 1, offset: 946 },
              end: { line: 21, column: 8, offset: 953 }
            }
          },
          {
            type: 'list',
            ordered: false,
            start: null,
            spread: false,
            children: [
              {
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
                          start: { line: 22, column: 5, offset: 958 },
                          end: { line: 22, column: 9, offset: 962 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 22, column: 9, offset: 962 },
                          end: { line: 22, column: 12, offset: 965 }
                        }
                      },
                      {
                        type: 'link',
                        title: null,
                        url: '/docs/DiskHashTable',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'DiskHashTable',
                            position: {
                              start: { line: 22, column: 13, offset: 966 },
                              end: { line: 22, column: 28, offset: 981 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 22, column: 12, offset: 965 },
                          end: { line: 22, column: 50, offset: 1003 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - a ',
                        position: {
                          start: { line: 22, column: 50, offset: 1003 },
                          end: { line: 22, column: 55, offset: 1008 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'DiskHashTable',
                        position: {
                          start: { line: 22, column: 55, offset: 1008 },
                          end: { line: 22, column: 70, offset: 1023 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' instance.',
                        position: {
                          start: { line: 22, column: 70, offset: 1023 },
                          end: { line: 22, column: 80, offset: 1033 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 22, column: 5, offset: 958 },
                      end: { line: 22, column: 80, offset: 1033 }
                    }
                  }
                ],
                position: {
                  start: { line: 22, column: 3, offset: 956 },
                  end: { line: 22, column: 80, offset: 1033 }
                }
              }
            ],
            position: {
              start: { line: 22, column: 3, offset: 956 },
              end: { line: 22, column: 80, offset: 1033 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: 'const ht = new DiskHashTable({\n' +
              '  initialLength: 1024,\n' +
              "  storagePath: '/path/to/storage-file',\n" +
              "  headerPath: '/path/to/header-file',\n" +
              '  resizeRatio: 0.7,\n' +
              '  resizeFactor: 4,\n' +
              '})',
            position: {
              start: { line: 24, column: 1, offset: 1035 },
              end: { line: 32, column: 4, offset: 1226 }
            }
          },
          {
            type: 'heading',
            depth: 2,
            children: [
              {
                type: 'text',
                value: 'Resizing the disk hash table',
                position: {
                  start: { line: 34, column: 4, offset: 1231 },
                  end: { line: 34, column: 32, offset: 1259 }
                }
              }
            ],
            position: {
              start: { line: 34, column: 1, offset: 1228 },
              end: { line: 34, column: 32, offset: 1259 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'When an item is inserted into the disk hash table via ',
                position: {
                  start: { line: 35, column: 1, offset: 1260 },
                  end: { line: 35, column: 55, offset: 1314 }
                }
              },
              {
                type: 'link',
                title: null,
                url: '/docs/DiskHashTable#set',
                children: [
                  {
                    type: 'text',
                    value: 'set',
                    position: {
                      start: { line: 35, column: 56, offset: 1315 },
                      end: { line: 35, column: 59, offset: 1318 }
                    }
                  }
                ],
                position: {
                  start: { line: 35, column: 55, offset: 1314 },
                  end: { line: 35, column: 85, offset: 1344 }
                }
              },
              {
                type: 'text',
                value: ", the current capacity ratio of the table is calculated as the table's count divided by the table's length. If the current capacity ratio exceeds the ",
                position: {
                  start: { line: 35, column: 85, offset: 1344 },
                  end: { line: 35, column: 235, offset: 1494 }
                }
              },
              {
                type: 'inlineCode',
                value: 'resizeRatio',
                position: {
                  start: { line: 35, column: 235, offset: 1494 },
                  end: { line: 35, column: 248, offset: 1507 }
                }
              },
              {
                type: 'text',
                value: ' (and the ',
                position: {
                  start: { line: 35, column: 248, offset: 1507 },
                  end: { line: 35, column: 258, offset: 1517 }
                }
              },
              {
                type: 'inlineCode',
                value: 'resizeRatio',
                position: {
                  start: { line: 35, column: 258, offset: 1517 },
                  end: { line: 35, column: 271, offset: 1530 }
                }
              },
              {
                type: 'text',
                value: ' is not 0), a resize of the table occurs.',
                position: {
                  start: { line: 35, column: 271, offset: 1530 },
                  end: { line: 35, column: 312, offset: 1571 }
                }
              }
            ],
            position: {
              start: { line: 35, column: 1, offset: 1260 },
              end: { line: 35, column: 312, offset: 1571 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'During a table resize, each item of the table is added into a temporary storage file using the new table length calculated from the equation below:',
                position: {
                  start: { line: 37, column: 1, offset: 1573 },
                  end: { line: 37, column: 148, offset: 1720 }
                }
              }
            ],
            position: {
              start: { line: 37, column: 1, offset: 1573 },
              end: { line: 37, column: 148, offset: 1720 }
            }
          },
          {
            type: 'code',
            lang: null,
            meta: null,
            value: 'newTableLength = oldTableLength * resizeFactor',
            position: {
              start: { line: 39, column: 1, offset: 1722 },
              end: { line: 41, column: 4, offset: 1776 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Once all of the items have been added into the temporary storage file, the temporary storage file is moved to the location of the old storage file to be used as the new storage file.',
                position: {
                  start: { line: 43, column: 1, offset: 1778 },
                  end: { line: 43, column: 183, offset: 1960 }
                }
              }
            ],
            position: {
              start: { line: 43, column: 1, offset: 1778 },
              end: { line: 43, column: 183, offset: 1960 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 43, column: 183, offset: 1960 }
        }
      }
    },
    methods: [
      {
        name: 'init',
        docs: '```coffeescript [specscript]\n' +
          'ht.init() -> Promise<>\n' +
          '```\n' +
          '\n' +
          'Initializes the disk hash table.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none)\n' +
          '\n' +
          'Return:\n' +
          '  * Empty promise.\n' +
          '\n' +
          '```javascript\n' +
          'await ht.init()\n' +
          '```',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'ht.init() -> Promise<>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 55 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Initializes the disk hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 57 },
                      end: { line: 5, column: 33, offset: 89 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 57 },
                  end: { line: 5, column: 33, offset: 89 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 91 },
                      end: { line: 7, column: 11, offset: 101 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 91 },
                  end: { line: 7, column: 11, offset: 101 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 8, column: 5, offset: 106 },
                              end: { line: 8, column: 11, offset: 112 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 106 },
                          end: { line: 8, column: 11, offset: 112 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 104 },
                      end: { line: 8, column: 11, offset: 112 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 104 },
                  end: { line: 8, column: 11, offset: 112 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 114 },
                      end: { line: 10, column: 8, offset: 121 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 114 },
                  end: { line: 10, column: 8, offset: 121 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 11, column: 5, offset: 126 },
                              end: { line: 11, column: 19, offset: 140 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 126 },
                          end: { line: 11, column: 19, offset: 140 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 124 },
                      end: { line: 11, column: 19, offset: 140 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 124 },
                  end: { line: 11, column: 19, offset: 140 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await ht.init()',
                position: {
                  start: { line: 13, column: 1, offset: 142 },
                  end: { line: 15, column: 4, offset: 175 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 175 }
            }
          }
        }
      },
      {
        name: 'clear',
        docs: '```coffeescript [specscript]\n' +
          'clear() -> Promise<>\n' +
          '```\n' +
          '\n' +
          'Clears all data from the disk hash table.\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'clear() -> Promise<>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 53 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Clears all data from the disk hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 55 },
                      end: { line: 5, column: 42, offset: 96 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 55 },
                  end: { line: 5, column: 42, offset: 96 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 98 },
                      end: { line: 7, column: 11, offset: 108 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 98 },
                  end: { line: 7, column: 11, offset: 108 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 8, column: 5, offset: 113 },
                              end: { line: 8, column: 11, offset: 119 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 113 },
                          end: { line: 8, column: 11, offset: 119 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 111 },
                      end: { line: 8, column: 11, offset: 119 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 111 },
                  end: { line: 8, column: 11, offset: 119 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 121 },
                      end: { line: 10, column: 8, offset: 128 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 121 },
                  end: { line: 10, column: 8, offset: 128 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 11, column: 5, offset: 133 },
                              end: { line: 11, column: 19, offset: 147 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 133 },
                          end: { line: 11, column: 19, offset: 147 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 131 },
                      end: { line: 11, column: 19, offset: 147 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 131 },
                  end: { line: 11, column: 19, offset: 147 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await ht.clear()',
                position: {
                  start: { line: 13, column: 1, offset: 149 },
                  end: { line: 15, column: 4, offset: 183 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 183 }
            }
          }
        }
      },
      {
        name: 'destroy',
        docs: '```coffeescript [specscript]\n' +
          'destroy() -> Promise<>\n' +
          '```\n' +
          '\n' +
          'Removes all system resources used by the disk hash table.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none)\n' +
          '\n' +
          'Return:\n' +
          '  * Empty promise.\n' +
          '\n' +
          '```javascript\n' +
          'await ht.destroy()\n' +
          '```',
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
                value: 'destroy() -> Promise<>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 55 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Removes all system resources used by the disk hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 57 },
                      end: { line: 5, column: 58, offset: 114 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 57 },
                  end: { line: 5, column: 58, offset: 114 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 116 },
                      end: { line: 7, column: 11, offset: 126 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 116 },
                  end: { line: 7, column: 11, offset: 126 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 8, column: 5, offset: 131 },
                              end: { line: 8, column: 11, offset: 137 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 131 },
                          end: { line: 8, column: 11, offset: 137 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 129 },
                      end: { line: 8, column: 11, offset: 137 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 129 },
                  end: { line: 8, column: 11, offset: 137 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 139 },
                      end: { line: 10, column: 8, offset: 146 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 139 },
                  end: { line: 10, column: 8, offset: 146 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 11, column: 5, offset: 151 },
                              end: { line: 11, column: 19, offset: 165 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 151 },
                          end: { line: 11, column: 19, offset: 165 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 149 },
                      end: { line: 11, column: 19, offset: 165 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 149 },
                  end: { line: 11, column: 19, offset: 165 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await ht.destroy()',
                position: {
                  start: { line: 13, column: 1, offset: 167 },
                  end: { line: 15, column: 4, offset: 203 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 203 }
            }
          }
        }
      },
      {
        name: 'close',
        docs: '```coffeescript [specscript]\n' +
          'close() -> undefined\n' +
          '```\n' +
          '\n' +
          'Closes the underlying file handles used by the disk hash table.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none)\n' +
          '\n' +
          'Return:\n' +
          '  * `undefined`\n' +
          '\n' +
          '```javascript\n' +
          'ht.close()\n' +
          '```',
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
                value: 'close() -> undefined',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 53 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Closes the underlying file handles used by the disk hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 55 },
                      end: { line: 5, column: 64, offset: 118 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 55 },
                  end: { line: 5, column: 64, offset: 118 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 120 },
                      end: { line: 7, column: 11, offset: 130 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 120 },
                  end: { line: 7, column: 11, offset: 130 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 8, column: 5, offset: 135 },
                              end: { line: 8, column: 11, offset: 141 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 135 },
                          end: { line: 8, column: 11, offset: 141 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 133 },
                      end: { line: 8, column: 11, offset: 141 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 133 },
                  end: { line: 8, column: 11, offset: 141 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 143 },
                      end: { line: 10, column: 8, offset: 150 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 143 },
                  end: { line: 10, column: 8, offset: 150 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 11, column: 5, offset: 155 },
                              end: { line: 11, column: 16, offset: 166 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 155 },
                          end: { line: 11, column: 16, offset: 166 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 153 },
                      end: { line: 11, column: 16, offset: 166 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 153 },
                  end: { line: 11, column: 16, offset: 166 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'ht.close()',
                position: {
                  start: { line: 13, column: 1, offset: 168 },
                  end: { line: 15, column: 4, offset: 196 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 196 }
            }
          }
        }
      },
      {
        name: 'set',
        docs: '```coffeescript [specscript]\n' +
          'set(key string, value string) -> Promise<>\n' +
          '```\n' +
          '\n' +
          'Sets and stores a value by key in the disk hash table.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `key` - `string` - the key to set.\n' +
          '  * `value` - `string` - the value to set corresponding to the key.\n' +
          '\n' +
          'Return:\n' +
          '  * Empty promise.\n' +
          '\n' +
          '```javascript\n' +
          "await ht.set('my-key', 'my-value')\n" +
          '```',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'set(key string, value string) -> Promise<>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 75 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Sets and stores a value by key in the disk hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 77 },
                      end: { line: 5, column: 55, offset: 131 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 77 },
                  end: { line: 5, column: 55, offset: 131 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 133 },
                      end: { line: 7, column: 11, offset: 143 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 133 },
                  end: { line: 7, column: 11, offset: 143 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 8, column: 5, offset: 148 },
                              end: { line: 8, column: 10, offset: 153 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 8, column: 10, offset: 153 },
                              end: { line: 8, column: 13, offset: 156 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 8, column: 13, offset: 156 },
                              end: { line: 8, column: 21, offset: 164 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the key to set.',
                            position: {
                              start: { line: 8, column: 21, offset: 164 },
                              end: { line: 8, column: 39, offset: 182 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 148 },
                          end: { line: 8, column: 39, offset: 182 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 146 },
                      end: { line: 8, column: 39, offset: 182 }
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
                              start: { line: 9, column: 5, offset: 187 },
                              end: { line: 9, column: 12, offset: 194 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 9, column: 12, offset: 194 },
                              end: { line: 9, column: 15, offset: 197 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 9, column: 15, offset: 197 },
                              end: { line: 9, column: 23, offset: 205 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the value to set corresponding to the key.',
                            position: {
                              start: { line: 9, column: 23, offset: 205 },
                              end: { line: 9, column: 68, offset: 250 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 9, column: 5, offset: 187 },
                          end: { line: 9, column: 68, offset: 250 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 3, offset: 185 },
                      end: { line: 9, column: 68, offset: 250 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 146 },
                  end: { line: 9, column: 68, offset: 250 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 11, column: 1, offset: 252 },
                      end: { line: 11, column: 8, offset: 259 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 252 },
                  end: { line: 11, column: 8, offset: 259 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 12, column: 5, offset: 264 },
                              end: { line: 12, column: 19, offset: 278 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 264 },
                          end: { line: 12, column: 19, offset: 278 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 262 },
                      end: { line: 12, column: 19, offset: 278 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 262 },
                  end: { line: 12, column: 19, offset: 278 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "await ht.set('my-key', 'my-value')",
                position: {
                  start: { line: 14, column: 1, offset: 280 },
                  end: { line: 16, column: 4, offset: 332 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 16, column: 4, offset: 332 }
            }
          }
        }
      },
      {
        name: 'get',
        docs: '```coffeescript [specscript]\n' +
          'get(key string) -> value Promise<string>\n' +
          '```\n' +
          '\n' +
          'Gets a value by key from the disk hash table.\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'get(key string) -> value Promise<string>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 73 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Gets a value by key from the disk hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 75 },
                      end: { line: 5, column: 46, offset: 120 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 75 },
                  end: { line: 5, column: 46, offset: 120 }
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
                            type: 'inlineCode',
                            value: 'key',
                            position: {
                              start: { line: 8, column: 5, offset: 137 },
                              end: { line: 8, column: 10, offset: 142 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 8, column: 10, offset: 142 },
                              end: { line: 8, column: 13, offset: 145 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 8, column: 13, offset: 145 },
                              end: { line: 8, column: 21, offset: 153 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the key corresponding to the value.',
                            position: {
                              start: { line: 8, column: 21, offset: 153 },
                              end: { line: 8, column: 59, offset: 191 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 137 },
                          end: { line: 8, column: 59, offset: 191 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 135 },
                      end: { line: 8, column: 59, offset: 191 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 135 },
                  end: { line: 8, column: 59, offset: 191 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 193 },
                      end: { line: 10, column: 8, offset: 200 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 193 },
                  end: { line: 10, column: 8, offset: 200 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 11, column: 5, offset: 205 },
                              end: { line: 11, column: 12, offset: 212 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 11, column: 12, offset: 212 },
                              end: { line: 11, column: 15, offset: 215 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 11, column: 15, offset: 215 },
                              end: { line: 11, column: 23, offset: 223 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the value corresponding to the key.',
                            position: {
                              start: { line: 11, column: 23, offset: 223 },
                              end: { line: 11, column: 61, offset: 261 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 205 },
                          end: { line: 11, column: 61, offset: 261 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 203 },
                      end: { line: 11, column: 61, offset: 261 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 203 },
                  end: { line: 11, column: 61, offset: 261 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "const value = await ht.get('my-key')",
                position: {
                  start: { line: 13, column: 1, offset: 263 },
                  end: { line: 15, column: 4, offset: 317 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 317 }
            }
          }
        }
      },
      {
        name: 'delete',
        docs: '```coffeescript [specscript]\n' +
          'delete(key string) -> didDelete Promise<boolean>\n' +
          '```\n' +
          '\n' +
          'Deletes an item by key from the disk hash table.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `key` - `string` - the key to delete.\n' +
          '\n' +
          'Return:\n' +
          '  * `didDelete` - `boolean` - a promise of whether the key and corresponding value was deleted.\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'delete(key string) -> didDelete Promise<boolean>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 81 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Deletes an item by key from the disk hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 83 },
                      end: { line: 5, column: 49, offset: 131 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 83 },
                  end: { line: 5, column: 49, offset: 131 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 133 },
                      end: { line: 7, column: 11, offset: 143 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 133 },
                  end: { line: 7, column: 11, offset: 143 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 8, column: 5, offset: 148 },
                              end: { line: 8, column: 10, offset: 153 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 8, column: 10, offset: 153 },
                              end: { line: 8, column: 13, offset: 156 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 8, column: 13, offset: 156 },
                              end: { line: 8, column: 21, offset: 164 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the key to delete.',
                            position: {
                              start: { line: 8, column: 21, offset: 164 },
                              end: { line: 8, column: 42, offset: 185 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 148 },
                          end: { line: 8, column: 42, offset: 185 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 146 },
                      end: { line: 8, column: 42, offset: 185 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 146 },
                  end: { line: 8, column: 42, offset: 185 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 187 },
                      end: { line: 10, column: 8, offset: 194 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 187 },
                  end: { line: 10, column: 8, offset: 194 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 11, column: 5, offset: 199 },
                              end: { line: 11, column: 16, offset: 210 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 11, column: 16, offset: 210 },
                              end: { line: 11, column: 19, offset: 213 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'boolean',
                            position: {
                              start: { line: 11, column: 19, offset: 213 },
                              end: { line: 11, column: 28, offset: 222 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a promise of whether the key and corresponding value was deleted.',
                            position: {
                              start: { line: 11, column: 28, offset: 222 },
                              end: { line: 11, column: 96, offset: 290 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 199 },
                          end: { line: 11, column: 96, offset: 290 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 197 },
                      end: { line: 11, column: 96, offset: 290 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 197 },
                  end: { line: 11, column: 96, offset: 290 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "const didDelete = await ht.delete('my-key')",
                position: {
                  start: { line: 13, column: 1, offset: 292 },
                  end: { line: 15, column: 4, offset: 353 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 353 }
            }
          }
        }
      },
      {
        name: 'count',
        docs: '```coffeescript [specscript]\n' +
          'count() -> number\n' +
          '```\n' +
          '\n' +
          'Returns the number of items in the disk hash table.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none)\n' +
          '\n' +
          'Return:\n' +
          '  * `number` - the number of items in the disk hash table.\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'count() -> number',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 50 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns the number of items in the disk hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 52 },
                      end: { line: 5, column: 52, offset: 103 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 52 },
                  end: { line: 5, column: 52, offset: 103 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 105 },
                      end: { line: 7, column: 11, offset: 115 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 105 },
                  end: { line: 7, column: 11, offset: 115 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 8, column: 5, offset: 120 },
                              end: { line: 8, column: 11, offset: 126 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 120 },
                          end: { line: 8, column: 11, offset: 126 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 118 },
                      end: { line: 8, column: 11, offset: 126 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 118 },
                  end: { line: 8, column: 11, offset: 126 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 128 },
                      end: { line: 10, column: 8, offset: 135 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 128 },
                  end: { line: 10, column: 8, offset: 135 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
                    type: 'listItem',
                    spread: false,
                    checked: null,
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'number',
                            position: {
                              start: { line: 11, column: 5, offset: 140 },
                              end: { line: 11, column: 13, offset: 148 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the number of items in the disk hash table.',
                            position: {
                              start: { line: 11, column: 13, offset: 148 },
                              end: { line: 11, column: 59, offset: 194 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 140 },
                          end: { line: 11, column: 59, offset: 194 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 138 },
                      end: { line: 11, column: 59, offset: 194 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 138 },
                  end: { line: 11, column: 59, offset: 194 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const count = ht.count()',
                position: {
                  start: { line: 13, column: 1, offset: 196 },
                  end: { line: 15, column: 4, offset: 238 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 238 }
            }
          }
        }
      },
      {
        name: 'iterator',
        docs: '```coffeescript [specscript]\n' +
          'iterator() -> values AsyncGenerator<string>\n' +
          '```\n' +
          '\n' +
          'Returns an iterator of all items in the disk hash table. Items are yielded by reverse insertion order.\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'iterator() -> values AsyncGenerator<string>',
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
                    value: 'Returns an iterator of all items in the disk hash table. Items are yielded by reverse insertion order.',
                    position: {
                      start: { line: 5, column: 1, offset: 78 },
                      end: { line: 5, column: 103, offset: 180 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 78 },
                  end: { line: 5, column: 103, offset: 180 }
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
                  start: { line: 7, column: 1, offset: 182 },
                  end: { line: 17, column: 4, offset: 431 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 17, column: 4, offset: 431 }
            }
          }
        }
      }
    ],
    fileName: '/home/richard/code/presidium.services/../presidium-db/DiskHashTable.js'
  },
  {
    name: 'DiskSortedHashTable',
    docs: '```coffeescript [specscript]\n' +
      'new DiskSortedHashTable(options {\n' +
      '  initialLength: number,\n' +
      '  storagePath: string,\n' +
      '  headerPath: string,\n' +
      '  resizeRatio: number,\n' +
      '  resizeFactor: number,\n' +
      '}) -> sortedHt DiskSortedHashTable\n' +
      '```\n' +
      '\n' +
      'Presidium DiskSortedHashTable class. Creates a sorted hash table that stores all data on disk.\n' +
      '\n' +
      'Arguments:\n' +
      '  * `options`\n' +
      '    * `initialLength` - `number` - the initial length of the disk sorted hash table. Defaults to 1024.\n' +
      '    * `storagePath` - `string` - the path to the file used to store the disk sorted hash table data.\n' +
      '    * `headerPath` - `string` - the path to the file used to store header information about the disk sorted hash table.\n' +
      '    * `resizeRatio` - `number` - the ratio of number of items to table length at which to resize the disk sorted hash table. Minimum value 0 (no resize), maximum value 1. Defaults to 0.\n' +
      "    * `resizeFactor` - `number` - the factor that is multiplied with the disk sorted hash table's current length to determine the new table length on a resize.\n" +
      '\n' +
      'Return:\n' +
      '  * `sortedHt` - [`DiskSortedHashTable`](/docs/DiskSortedHashTable) - a `DiskSortedHashTable` instance.\n' +
      '\n' +
      '```javascript\n' +
      'const sortedHt = new DiskSortedHashTable({\n' +
      '  initialLength: 1024,\n' +
      "  storagePath: '/path/to/storage-file',\n" +
      "  headerPath: '/path/to/header-file',\n" +
      '  resizeRatio: 0.5,\n' +
      '  resizeFactor: 1000,\n' +
      '})\n' +
      '```\n' +
      '\n' +
      '## Resizing the disk sorted hash table\n' +
      "When an item is inserted into the disk sorted hash table via [set](/docs/DiskHashTable#set), the current capacity ratio of the table is calculated as the table's count divided by the table's length. If the current capacity ratio exceeds the `resizeRatio` (and the `resizeRatio` is not 0), a resize of the table occurs.\n" +
      '\n' +
      'During a table resize, each item of the table is added into a temporary storage file using the new table length calculated from the equation below:\n' +
      '\n' +
      '```\n' +
      'newTableLength = oldTableLength * resizeFactor\n' +
      '```\n' +
      '\n' +
      'Once all of the items have been added into the temporary storage file, the temporary storage file is moved to the location of the old storage file to be used as the new storage file.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'DiskSortedHashTable',
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
            value: 'new DiskSortedHashTable(options {\n' +
              '  initialLength: number,\n' +
              '  storagePath: string,\n' +
              '  headerPath: string,\n' +
              '  resizeRatio: number,\n' +
              '  resizeFactor: number,\n' +
              '}) -> sortedHt DiskSortedHashTable',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 9, column: 4, offset: 218 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Presidium DiskSortedHashTable class. Creates a sorted hash table that stores all data on disk.',
                position: {
                  start: { line: 11, column: 1, offset: 220 },
                  end: { line: 11, column: 95, offset: 314 }
                }
              }
            ],
            position: {
              start: { line: 11, column: 1, offset: 220 },
              end: { line: 11, column: 95, offset: 314 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Arguments:',
                position: {
                  start: { line: 13, column: 1, offset: 316 },
                  end: { line: 13, column: 11, offset: 326 }
                }
              }
            ],
            position: {
              start: { line: 13, column: 1, offset: 316 },
              end: { line: 13, column: 11, offset: 326 }
            }
          },
          {
            type: 'list',
            ordered: false,
            start: null,
            spread: false,
            children: [
              {
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
                          start: { line: 14, column: 5, offset: 331 },
                          end: { line: 14, column: 14, offset: 340 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 14, column: 5, offset: 331 },
                      end: { line: 14, column: 14, offset: 340 }
                    }
                  },
                  {
                    type: 'list',
                    ordered: false,
                    start: null,
                    spread: false,
                    children: [
                      {
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
                                  start: { line: 15, column: 7, offset: 347 },
                                  end: { line: 15, column: 22, offset: 362 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 15, column: 22, offset: 362 },
                                  end: { line: 15, column: 25, offset: 365 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: { line: 15, column: 25, offset: 365 },
                                  end: { line: 15, column: 33, offset: 373 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the initial length of the disk sorted hash table. Defaults to 1024.',
                                position: {
                                  start: { line: 15, column: 33, offset: 373 },
                                  end: {
                                    line: 15,
                                    column: 103,
                                    offset: 443
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 15, column: 7, offset: 347 },
                              end: { line: 15, column: 103, offset: 443 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 15, column: 5, offset: 345 },
                          end: { line: 15, column: 103, offset: 443 }
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
                                value: 'storagePath',
                                position: {
                                  start: { line: 16, column: 7, offset: 450 },
                                  end: { line: 16, column: 20, offset: 463 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 16, column: 20, offset: 463 },
                                  end: { line: 16, column: 23, offset: 466 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'string',
                                position: {
                                  start: { line: 16, column: 23, offset: 466 },
                                  end: { line: 16, column: 31, offset: 474 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the path to the file used to store the disk sorted hash table data.',
                                position: {
                                  start: { line: 16, column: 31, offset: 474 },
                                  end: {
                                    line: 16,
                                    column: 101,
                                    offset: 544
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 16, column: 7, offset: 450 },
                              end: { line: 16, column: 101, offset: 544 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 16, column: 5, offset: 448 },
                          end: { line: 16, column: 101, offset: 544 }
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
                                value: 'headerPath',
                                position: {
                                  start: { line: 17, column: 7, offset: 551 },
                                  end: { line: 17, column: 19, offset: 563 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 17, column: 19, offset: 563 },
                                  end: { line: 17, column: 22, offset: 566 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'string',
                                position: {
                                  start: { line: 17, column: 22, offset: 566 },
                                  end: { line: 17, column: 30, offset: 574 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the path to the file used to store header information about the disk sorted hash table.',
                                position: {
                                  start: { line: 17, column: 30, offset: 574 },
                                  end: {
                                    line: 17,
                                    column: 120,
                                    offset: 664
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 17, column: 7, offset: 551 },
                              end: { line: 17, column: 120, offset: 664 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 17, column: 5, offset: 549 },
                          end: { line: 17, column: 120, offset: 664 }
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
                                  start: { line: 18, column: 7, offset: 671 },
                                  end: { line: 18, column: 20, offset: 684 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 18, column: 20, offset: 684 },
                                  end: { line: 18, column: 23, offset: 687 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: { line: 18, column: 23, offset: 687 },
                                  end: { line: 18, column: 31, offset: 695 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the ratio of number of items to table length at which to resize the disk sorted hash table. Minimum value 0 (no resize), maximum value 1. Defaults to 0.',
                                position: {
                                  start: { line: 18, column: 31, offset: 695 },
                                  end: {
                                    line: 18,
                                    column: 186,
                                    offset: 850
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 18, column: 7, offset: 671 },
                              end: { line: 18, column: 186, offset: 850 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 18, column: 5, offset: 669 },
                          end: { line: 18, column: 186, offset: 850 }
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
                                  start: { line: 19, column: 7, offset: 857 },
                                  end: { line: 19, column: 21, offset: 871 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 19, column: 21, offset: 871 },
                                  end: { line: 19, column: 24, offset: 874 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: { line: 19, column: 24, offset: 874 },
                                  end: { line: 19, column: 32, offset: 882 }
                                }
                              },
                              {
                                type: 'text',
                                value: " - the factor that is multiplied with the disk sorted hash table's current length to determine the new table length on a resize.",
                                position: {
                                  start: { line: 19, column: 32, offset: 882 },
                                  end: {
                                    line: 19,
                                    column: 160,
                                    offset: 1010
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 19, column: 7, offset: 857 },
                              end: { line: 19, column: 160, offset: 1010 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 855 },
                          end: { line: 19, column: 160, offset: 1010 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 15, column: 5, offset: 345 },
                      end: { line: 19, column: 160, offset: 1010 }
                    }
                  }
                ],
                position: {
                  start: { line: 14, column: 3, offset: 329 },
                  end: { line: 19, column: 160, offset: 1010 }
                }
              }
            ],
            position: {
              start: { line: 14, column: 3, offset: 329 },
              end: { line: 19, column: 160, offset: 1010 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Return:',
                position: {
                  start: { line: 21, column: 1, offset: 1012 },
                  end: { line: 21, column: 8, offset: 1019 }
                }
              }
            ],
            position: {
              start: { line: 21, column: 1, offset: 1012 },
              end: { line: 21, column: 8, offset: 1019 }
            }
          },
          {
            type: 'list',
            ordered: false,
            start: null,
            spread: false,
            children: [
              {
                type: 'listItem',
                spread: false,
                checked: null,
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'inlineCode',
                        value: 'sortedHt',
                        position: {
                          start: { line: 22, column: 5, offset: 1024 },
                          end: { line: 22, column: 15, offset: 1034 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 22, column: 15, offset: 1034 },
                          end: { line: 22, column: 18, offset: 1037 }
                        }
                      },
                      {
                        type: 'link',
                        title: null,
                        url: '/docs/DiskSortedHashTable',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'DiskSortedHashTable',
                            position: {
                              start: { line: 22, column: 19, offset: 1038 },
                              end: { line: 22, column: 40, offset: 1059 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 22, column: 18, offset: 1037 },
                          end: { line: 22, column: 68, offset: 1087 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - a ',
                        position: {
                          start: { line: 22, column: 68, offset: 1087 },
                          end: { line: 22, column: 73, offset: 1092 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'DiskSortedHashTable',
                        position: {
                          start: { line: 22, column: 73, offset: 1092 },
                          end: { line: 22, column: 94, offset: 1113 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' instance.',
                        position: {
                          start: { line: 22, column: 94, offset: 1113 },
                          end: { line: 22, column: 104, offset: 1123 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 22, column: 5, offset: 1024 },
                      end: { line: 22, column: 104, offset: 1123 }
                    }
                  }
                ],
                position: {
                  start: { line: 22, column: 3, offset: 1022 },
                  end: { line: 22, column: 104, offset: 1123 }
                }
              }
            ],
            position: {
              start: { line: 22, column: 3, offset: 1022 },
              end: { line: 22, column: 104, offset: 1123 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: 'const sortedHt = new DiskSortedHashTable({\n' +
              '  initialLength: 1024,\n' +
              "  storagePath: '/path/to/storage-file',\n" +
              "  headerPath: '/path/to/header-file',\n" +
              '  resizeRatio: 0.5,\n' +
              '  resizeFactor: 1000,\n' +
              '})',
            position: {
              start: { line: 24, column: 1, offset: 1125 },
              end: { line: 32, column: 4, offset: 1331 }
            }
          },
          {
            type: 'heading',
            depth: 2,
            children: [
              {
                type: 'text',
                value: 'Resizing the disk sorted hash table',
                position: {
                  start: { line: 34, column: 4, offset: 1336 },
                  end: { line: 34, column: 39, offset: 1371 }
                }
              }
            ],
            position: {
              start: { line: 34, column: 1, offset: 1333 },
              end: { line: 34, column: 39, offset: 1371 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'When an item is inserted into the disk sorted hash table via ',
                position: {
                  start: { line: 35, column: 1, offset: 1372 },
                  end: { line: 35, column: 62, offset: 1433 }
                }
              },
              {
                type: 'link',
                title: null,
                url: '/docs/DiskHashTable#set',
                children: [
                  {
                    type: 'text',
                    value: 'set',
                    position: {
                      start: { line: 35, column: 63, offset: 1434 },
                      end: { line: 35, column: 66, offset: 1437 }
                    }
                  }
                ],
                position: {
                  start: { line: 35, column: 62, offset: 1433 },
                  end: { line: 35, column: 92, offset: 1463 }
                }
              },
              {
                type: 'text',
                value: ", the current capacity ratio of the table is calculated as the table's count divided by the table's length. If the current capacity ratio exceeds the ",
                position: {
                  start: { line: 35, column: 92, offset: 1463 },
                  end: { line: 35, column: 242, offset: 1613 }
                }
              },
              {
                type: 'inlineCode',
                value: 'resizeRatio',
                position: {
                  start: { line: 35, column: 242, offset: 1613 },
                  end: { line: 35, column: 255, offset: 1626 }
                }
              },
              {
                type: 'text',
                value: ' (and the ',
                position: {
                  start: { line: 35, column: 255, offset: 1626 },
                  end: { line: 35, column: 265, offset: 1636 }
                }
              },
              {
                type: 'inlineCode',
                value: 'resizeRatio',
                position: {
                  start: { line: 35, column: 265, offset: 1636 },
                  end: { line: 35, column: 278, offset: 1649 }
                }
              },
              {
                type: 'text',
                value: ' is not 0), a resize of the table occurs.',
                position: {
                  start: { line: 35, column: 278, offset: 1649 },
                  end: { line: 35, column: 319, offset: 1690 }
                }
              }
            ],
            position: {
              start: { line: 35, column: 1, offset: 1372 },
              end: { line: 35, column: 319, offset: 1690 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'During a table resize, each item of the table is added into a temporary storage file using the new table length calculated from the equation below:',
                position: {
                  start: { line: 37, column: 1, offset: 1692 },
                  end: { line: 37, column: 148, offset: 1839 }
                }
              }
            ],
            position: {
              start: { line: 37, column: 1, offset: 1692 },
              end: { line: 37, column: 148, offset: 1839 }
            }
          },
          {
            type: 'code',
            lang: null,
            meta: null,
            value: 'newTableLength = oldTableLength * resizeFactor',
            position: {
              start: { line: 39, column: 1, offset: 1841 },
              end: { line: 41, column: 4, offset: 1895 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Once all of the items have been added into the temporary storage file, the temporary storage file is moved to the location of the old storage file to be used as the new storage file.',
                position: {
                  start: { line: 43, column: 1, offset: 1897 },
                  end: { line: 43, column: 183, offset: 2079 }
                }
              }
            ],
            position: {
              start: { line: 43, column: 1, offset: 1897 },
              end: { line: 43, column: 183, offset: 2079 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 43, column: 183, offset: 2079 }
        }
      }
    },
    methods: [
      {
        name: 'init',
        docs: '```coffeescript [specscript]\n' +
          'sortedHt.init() -> Promise<>\n' +
          '```\n' +
          '\n' +
          'Initializes the disk sorted hash table.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none)\n' +
          '\n' +
          'Return:\n' +
          '  * Empty promise.\n' +
          '\n' +
          '```javascript\n' +
          'await sortedHt.init()\n' +
          '```',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'sortedHt.init() -> Promise<>',
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
                    value: 'Initializes the disk sorted hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 63 },
                      end: { line: 5, column: 40, offset: 102 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 63 },
                  end: { line: 5, column: 40, offset: 102 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 104 },
                      end: { line: 7, column: 11, offset: 114 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 104 },
                  end: { line: 7, column: 11, offset: 114 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 8, column: 5, offset: 119 },
                              end: { line: 8, column: 11, offset: 125 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 119 },
                          end: { line: 8, column: 11, offset: 125 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 117 },
                      end: { line: 8, column: 11, offset: 125 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 117 },
                  end: { line: 8, column: 11, offset: 125 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 127 },
                      end: { line: 10, column: 8, offset: 134 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 127 },
                  end: { line: 10, column: 8, offset: 134 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 11, column: 5, offset: 139 },
                              end: { line: 11, column: 19, offset: 153 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 139 },
                          end: { line: 11, column: 19, offset: 153 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 137 },
                      end: { line: 11, column: 19, offset: 153 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 137 },
                  end: { line: 11, column: 19, offset: 153 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await sortedHt.init()',
                position: {
                  start: { line: 13, column: 1, offset: 155 },
                  end: { line: 15, column: 4, offset: 194 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 194 }
            }
          }
        }
      },
      {
        name: 'clear',
        docs: '```coffeescript [specscript]\n' +
          'clear() -> Promise<>\n' +
          '```\n' +
          '\n' +
          'Clears all data from the disk sorted hash table.\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'clear() -> Promise<>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 53 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Clears all data from the disk sorted hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 55 },
                      end: { line: 5, column: 49, offset: 103 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 55 },
                  end: { line: 5, column: 49, offset: 103 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 105 },
                      end: { line: 7, column: 11, offset: 115 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 105 },
                  end: { line: 7, column: 11, offset: 115 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 8, column: 5, offset: 120 },
                              end: { line: 8, column: 11, offset: 126 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 120 },
                          end: { line: 8, column: 11, offset: 126 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 118 },
                      end: { line: 8, column: 11, offset: 126 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 118 },
                  end: { line: 8, column: 11, offset: 126 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 128 },
                      end: { line: 10, column: 8, offset: 135 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 128 },
                  end: { line: 10, column: 8, offset: 135 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 11, column: 5, offset: 140 },
                              end: { line: 11, column: 19, offset: 154 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 140 },
                          end: { line: 11, column: 19, offset: 154 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 138 },
                      end: { line: 11, column: 19, offset: 154 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 138 },
                  end: { line: 11, column: 19, offset: 154 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await sortedHt.clear()',
                position: {
                  start: { line: 13, column: 1, offset: 156 },
                  end: { line: 15, column: 4, offset: 196 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 196 }
            }
          }
        }
      },
      {
        name: 'destroy',
        docs: '```coffeescript [specscript]\n' +
          'destroy() -> Promise<>\n' +
          '```\n' +
          '\n' +
          'Removes all system resources used by the disk sorted hash table.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none)\n' +
          '\n' +
          'Return:\n' +
          '  * Empty promise.\n' +
          '\n' +
          '```javascript\n' +
          'await sortedHt.destroy()\n' +
          '```',
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
                value: 'destroy() -> Promise<>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 55 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Removes all system resources used by the disk sorted hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 57 },
                      end: { line: 5, column: 65, offset: 121 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 57 },
                  end: { line: 5, column: 65, offset: 121 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 123 },
                      end: { line: 7, column: 11, offset: 133 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 123 },
                  end: { line: 7, column: 11, offset: 133 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 8, column: 5, offset: 138 },
                              end: { line: 8, column: 11, offset: 144 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 138 },
                          end: { line: 8, column: 11, offset: 144 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 136 },
                      end: { line: 8, column: 11, offset: 144 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 136 },
                  end: { line: 8, column: 11, offset: 144 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 146 },
                      end: { line: 10, column: 8, offset: 153 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 146 },
                  end: { line: 10, column: 8, offset: 153 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 11, column: 5, offset: 158 },
                              end: { line: 11, column: 19, offset: 172 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 158 },
                          end: { line: 11, column: 19, offset: 172 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 156 },
                      end: { line: 11, column: 19, offset: 172 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 156 },
                  end: { line: 11, column: 19, offset: 172 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await sortedHt.destroy()',
                position: {
                  start: { line: 13, column: 1, offset: 174 },
                  end: { line: 15, column: 4, offset: 216 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 216 }
            }
          }
        }
      },
      {
        name: 'close',
        docs: '```coffeescript [specscript]\n' +
          'close() -> undefined\n' +
          '```\n' +
          '\n' +
          'Closes the underlying file handles used by the disk sorted hash table.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none)\n' +
          '\n' +
          'Return:\n' +
          '  * `undefined`\n' +
          '\n' +
          '```javascript\n' +
          'sortedHt.close()\n' +
          '```',
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
                value: 'close() -> undefined',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 53 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Closes the underlying file handles used by the disk sorted hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 55 },
                      end: { line: 5, column: 71, offset: 125 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 55 },
                  end: { line: 5, column: 71, offset: 125 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 127 },
                      end: { line: 7, column: 11, offset: 137 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 127 },
                  end: { line: 7, column: 11, offset: 137 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 8, column: 5, offset: 142 },
                              end: { line: 8, column: 11, offset: 148 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 142 },
                          end: { line: 8, column: 11, offset: 148 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 140 },
                      end: { line: 8, column: 11, offset: 148 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 140 },
                  end: { line: 8, column: 11, offset: 148 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 150 },
                      end: { line: 10, column: 8, offset: 157 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 150 },
                  end: { line: 10, column: 8, offset: 157 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 11, column: 5, offset: 162 },
                              end: { line: 11, column: 16, offset: 173 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 162 },
                          end: { line: 11, column: 16, offset: 173 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 160 },
                      end: { line: 11, column: 16, offset: 173 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 160 },
                  end: { line: 11, column: 16, offset: 173 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'sortedHt.close()',
                position: {
                  start: { line: 13, column: 1, offset: 175 },
                  end: { line: 15, column: 4, offset: 209 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 209 }
            }
          }
        }
      },
      {
        name: 'set',
        docs: '```coffeescript [specscript]\n' +
          'set(\n' +
          '  key string,\n' +
          '  value string,\n' +
          '  sortValue string|number\n' +
          ') -> Promise<>\n' +
          '```',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'set(\n' +
                  '  key string,\n' +
                  '  value string,\n' +
                  '  sortValue string|number\n' +
                  ') -> Promise<>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 7, column: 4, offset: 108 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 108 }
            }
          }
        }
      },
      {
        name: 'set',
        docs: '```coffeescript [specscript]\n' +
          'set(key string, value string, sortValue string|number) -> Promise<>\n' +
          '```\n' +
          '\n' +
          'Sets and stores a value by key and sort-value in the disk sorted hash table.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `key` - `string` - the key to set.\n' +
          '  * `value` - `string` - the value to set corresponding to the key.\n' +
          '  * `sortValue` - `string|number` - the value by which the item is sorted in the disk sorted hash table.\n' +
          '\n' +
          'Return:\n' +
          '  * Empty promise.\n' +
          '\n' +
          '```javascript\n' +
          "await sortedHt.set('key1', 'value1', 1)\n" +
          "await sortedHt.set('key2', 'value2', 2)\n" +
          "await sortedHt.set('key3', 'value3', 3)\n" +
          '```',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'set(key string, value string, sortValue string|number) -> Promise<>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 100 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Sets and stores a value by key and sort-value in the disk sorted hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 102 },
                      end: { line: 5, column: 77, offset: 178 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 102 },
                  end: { line: 5, column: 77, offset: 178 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 180 },
                      end: { line: 7, column: 11, offset: 190 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 180 },
                  end: { line: 7, column: 11, offset: 190 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 8, column: 5, offset: 195 },
                              end: { line: 8, column: 10, offset: 200 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 8, column: 10, offset: 200 },
                              end: { line: 8, column: 13, offset: 203 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 8, column: 13, offset: 203 },
                              end: { line: 8, column: 21, offset: 211 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the key to set.',
                            position: {
                              start: { line: 8, column: 21, offset: 211 },
                              end: { line: 8, column: 39, offset: 229 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 195 },
                          end: { line: 8, column: 39, offset: 229 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 193 },
                      end: { line: 8, column: 39, offset: 229 }
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
                              start: { line: 9, column: 5, offset: 234 },
                              end: { line: 9, column: 12, offset: 241 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 9, column: 12, offset: 241 },
                              end: { line: 9, column: 15, offset: 244 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 9, column: 15, offset: 244 },
                              end: { line: 9, column: 23, offset: 252 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the value to set corresponding to the key.',
                            position: {
                              start: { line: 9, column: 23, offset: 252 },
                              end: { line: 9, column: 68, offset: 297 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 9, column: 5, offset: 234 },
                          end: { line: 9, column: 68, offset: 297 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 3, offset: 232 },
                      end: { line: 9, column: 68, offset: 297 }
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
                            value: 'sortValue',
                            position: {
                              start: { line: 10, column: 5, offset: 302 },
                              end: { line: 10, column: 16, offset: 313 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 10, column: 16, offset: 313 },
                              end: { line: 10, column: 19, offset: 316 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string|number',
                            position: {
                              start: { line: 10, column: 19, offset: 316 },
                              end: { line: 10, column: 34, offset: 331 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the value by which the item is sorted in the disk sorted hash table.',
                            position: {
                              start: { line: 10, column: 34, offset: 331 },
                              end: { line: 10, column: 105, offset: 402 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 10, column: 5, offset: 302 },
                          end: { line: 10, column: 105, offset: 402 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 10, column: 3, offset: 300 },
                      end: { line: 10, column: 105, offset: 402 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 193 },
                  end: { line: 10, column: 105, offset: 402 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 12, column: 1, offset: 404 },
                      end: { line: 12, column: 8, offset: 411 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 1, offset: 404 },
                  end: { line: 12, column: 8, offset: 411 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 13, column: 5, offset: 416 },
                              end: { line: 13, column: 19, offset: 430 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 13, column: 5, offset: 416 },
                          end: { line: 13, column: 19, offset: 430 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 13, column: 3, offset: 414 },
                      end: { line: 13, column: 19, offset: 430 }
                    }
                  }
                ],
                position: {
                  start: { line: 13, column: 3, offset: 414 },
                  end: { line: 13, column: 19, offset: 430 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "await sortedHt.set('key1', 'value1', 1)\n" +
                  "await sortedHt.set('key2', 'value2', 2)\n" +
                  "await sortedHt.set('key3', 'value3', 3)",
                position: {
                  start: { line: 15, column: 1, offset: 432 },
                  end: { line: 19, column: 4, offset: 569 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 19, column: 4, offset: 569 }
            }
          }
        }
      },
      {
        name: 'get',
        docs: '```coffeescript [specscript]\n' +
          'get(key string) -> value Promise<string>\n' +
          '```\n' +
          '\n' +
          'Gets a value by key from the disk sorted hash table.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `key` - `string` - the key corresponding to the value.\n' +
          '\n' +
          'Return:\n' +
          '  * `value` - `string` - the value corresponding to the key.\n' +
          '\n' +
          '```javascript\n' +
          "const value = await sortedHt.get('my-key')\n" +
          '```',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'get(key string) -> value Promise<string>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 73 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Gets a value by key from the disk sorted hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 75 },
                      end: { line: 5, column: 53, offset: 127 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 75 },
                  end: { line: 5, column: 53, offset: 127 }
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
                            type: 'inlineCode',
                            value: 'key',
                            position: {
                              start: { line: 8, column: 5, offset: 144 },
                              end: { line: 8, column: 10, offset: 149 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 8, column: 10, offset: 149 },
                              end: { line: 8, column: 13, offset: 152 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 8, column: 13, offset: 152 },
                              end: { line: 8, column: 21, offset: 160 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the key corresponding to the value.',
                            position: {
                              start: { line: 8, column: 21, offset: 160 },
                              end: { line: 8, column: 59, offset: 198 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 144 },
                          end: { line: 8, column: 59, offset: 198 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 142 },
                      end: { line: 8, column: 59, offset: 198 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 142 },
                  end: { line: 8, column: 59, offset: 198 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 200 },
                      end: { line: 10, column: 8, offset: 207 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 200 },
                  end: { line: 10, column: 8, offset: 207 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 11, column: 5, offset: 212 },
                              end: { line: 11, column: 12, offset: 219 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 11, column: 12, offset: 219 },
                              end: { line: 11, column: 15, offset: 222 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 11, column: 15, offset: 222 },
                              end: { line: 11, column: 23, offset: 230 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the value corresponding to the key.',
                            position: {
                              start: { line: 11, column: 23, offset: 230 },
                              end: { line: 11, column: 61, offset: 268 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 212 },
                          end: { line: 11, column: 61, offset: 268 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 210 },
                      end: { line: 11, column: 61, offset: 268 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 210 },
                  end: { line: 11, column: 61, offset: 268 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "const value = await sortedHt.get('my-key')",
                position: {
                  start: { line: 13, column: 1, offset: 270 },
                  end: { line: 15, column: 4, offset: 330 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 330 }
            }
          }
        }
      },
      {
        name: 'forwardIterator',
        docs: '```coffeescript [specscript]\n' +
          'forwardIterator() -> values AsyncGenerator<string>\n' +
          '```\n' +
          '\n' +
          'Returns a iterator of all items in the disk hash table sorted by sort-value. Items are yielded in ascending order.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none)\n' +
          '\n' +
          'Return:\n' +
          '  * `values` - `AsyncGenerator<string>` - an async iterator of the values of all items in the disk hash table sorted by sort-value in ascending order.\n' +
          '\n' +
          '```javascript\n' +
          "await ht.set('key1', 'value1', 1)\n" +
          "await ht.set('key2', 'value2', 2)\n" +
          "await ht.set('key3', 'value3', 3)\n" +
          '\n' +
          'for await (const value of ht.forwardIterator()) {\n' +
          '  console.log(value) // value1\n' +
          '                     // value2\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'forwardIterator() -> values AsyncGenerator<string>',
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
                    value: 'Returns a iterator of all items in the disk hash table sorted by sort-value. Items are yielded in ascending order.',
                    position: {
                      start: { line: 5, column: 1, offset: 85 },
                      end: { line: 5, column: 115, offset: 199 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 85 },
                  end: { line: 5, column: 115, offset: 199 }
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
                            type: 'inlineCode',
                            value: 'values',
                            position: {
                              start: { line: 11, column: 5, offset: 236 },
                              end: { line: 11, column: 13, offset: 244 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 11, column: 13, offset: 244 },
                              end: { line: 11, column: 16, offset: 247 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncGenerator<string>',
                            position: {
                              start: { line: 11, column: 16, offset: 247 },
                              end: { line: 11, column: 40, offset: 271 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the values of all items in the disk hash table sorted by sort-value in ascending order.',
                            position: {
                              start: { line: 11, column: 40, offset: 271 },
                              end: { line: 11, column: 151, offset: 382 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 236 },
                          end: { line: 11, column: 151, offset: 382 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 234 },
                      end: { line: 11, column: 151, offset: 382 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 234 },
                  end: { line: 11, column: 151, offset: 382 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "await ht.set('key1', 'value1', 1)\n" +
                  "await ht.set('key2', 'value2', 2)\n" +
                  "await ht.set('key3', 'value3', 3)\n" +
                  '\n' +
                  'for await (const value of ht.forwardIterator()) {\n' +
                  '  console.log(value) // value1\n' +
                  '                     // value2\n' +
                  '                     // value3\n' +
                  '}',
                position: {
                  start: { line: 13, column: 1, offset: 384 },
                  end: { line: 23, column: 4, offset: 649 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 23, column: 4, offset: 649 }
            }
          }
        }
      },
      {
        name: 'reverseIterator',
        docs: '```coffeescript [specscript]\n' +
          'reverseIterator() -> values AsyncGenerator<string>\n' +
          '```\n' +
          '\n' +
          'Returns a iterator of all items in the disk hash table sorted by sort-value. Items are yielded in descending order.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none)\n' +
          '\n' +
          'Return:\n' +
          '  * `values` - `AsyncGenerator<string>` - an async iterator of the values of all items in the disk hash table sorted by sort-value in descending order.\n' +
          '\n' +
          '```javascript\n' +
          "await ht.set('key1', 'value1', 1)\n" +
          "await ht.set('key2', 'value2', 2)\n" +
          "await ht.set('key3', 'value3', 3)\n" +
          '\n' +
          'for await (const value of ht.reverseIterator()) {\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'reverseIterator() -> values AsyncGenerator<string>',
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
                    value: 'Returns a iterator of all items in the disk hash table sorted by sort-value. Items are yielded in descending order.',
                    position: {
                      start: { line: 5, column: 1, offset: 85 },
                      end: { line: 5, column: 116, offset: 200 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 85 },
                  end: { line: 5, column: 116, offset: 200 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 202 },
                      end: { line: 7, column: 11, offset: 212 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 202 },
                  end: { line: 7, column: 11, offset: 212 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 8, column: 5, offset: 217 },
                              end: { line: 8, column: 11, offset: 223 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 217 },
                          end: { line: 8, column: 11, offset: 223 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 215 },
                      end: { line: 8, column: 11, offset: 223 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 215 },
                  end: { line: 8, column: 11, offset: 223 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 225 },
                      end: { line: 10, column: 8, offset: 232 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 225 },
                  end: { line: 10, column: 8, offset: 232 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 11, column: 5, offset: 237 },
                              end: { line: 11, column: 13, offset: 245 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 11, column: 13, offset: 245 },
                              end: { line: 11, column: 16, offset: 248 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncGenerator<string>',
                            position: {
                              start: { line: 11, column: 16, offset: 248 },
                              end: { line: 11, column: 40, offset: 272 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the values of all items in the disk hash table sorted by sort-value in descending order.',
                            position: {
                              start: { line: 11, column: 40, offset: 272 },
                              end: { line: 11, column: 152, offset: 384 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 237 },
                          end: { line: 11, column: 152, offset: 384 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 235 },
                      end: { line: 11, column: 152, offset: 384 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 235 },
                  end: { line: 11, column: 152, offset: 384 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "await ht.set('key1', 'value1', 1)\n" +
                  "await ht.set('key2', 'value2', 2)\n" +
                  "await ht.set('key3', 'value3', 3)\n" +
                  '\n' +
                  'for await (const value of ht.reverseIterator()) {\n' +
                  '  console.log(value) // value3\n' +
                  '                     // value2\n' +
                  '                     // value1\n' +
                  '}',
                position: {
                  start: { line: 13, column: 1, offset: 386 },
                  end: { line: 23, column: 4, offset: 651 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 23, column: 4, offset: 651 }
            }
          }
        }
      },
      {
        name: 'delete',
        docs: '```coffeescript [specscript]\n' +
          'delete(key string) -> didDelete Promise<boolean>\n' +
          '```\n' +
          '\n' +
          'Deletes an item by key from the disk sorted hash table.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `key` - `string` - the key to delete.\n' +
          '\n' +
          'Return:\n' +
          '  * `didDelete` - `boolean` - a promise of whether the key and corresponding value was deleted.\n' +
          '\n' +
          '```javascript\n' +
          "const didDelete = await sortedHt.delete('my-key')\n" +
          '```',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'delete(key string) -> didDelete Promise<boolean>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 81 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Deletes an item by key from the disk sorted hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 83 },
                      end: { line: 5, column: 56, offset: 138 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 83 },
                  end: { line: 5, column: 56, offset: 138 }
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
                            value: ' - the key to delete.',
                            position: {
                              start: { line: 8, column: 21, offset: 171 },
                              end: { line: 8, column: 42, offset: 192 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 155 },
                          end: { line: 8, column: 42, offset: 192 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 153 },
                      end: { line: 8, column: 42, offset: 192 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 153 },
                  end: { line: 8, column: 42, offset: 192 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 194 },
                      end: { line: 10, column: 8, offset: 201 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 194 },
                  end: { line: 10, column: 8, offset: 201 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 11, column: 5, offset: 206 },
                              end: { line: 11, column: 16, offset: 217 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 11, column: 16, offset: 217 },
                              end: { line: 11, column: 19, offset: 220 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'boolean',
                            position: {
                              start: { line: 11, column: 19, offset: 220 },
                              end: { line: 11, column: 28, offset: 229 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a promise of whether the key and corresponding value was deleted.',
                            position: {
                              start: { line: 11, column: 28, offset: 229 },
                              end: { line: 11, column: 96, offset: 297 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 206 },
                          end: { line: 11, column: 96, offset: 297 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 204 },
                      end: { line: 11, column: 96, offset: 297 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 204 },
                  end: { line: 11, column: 96, offset: 297 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "const didDelete = await sortedHt.delete('my-key')",
                position: {
                  start: { line: 13, column: 1, offset: 299 },
                  end: { line: 15, column: 4, offset: 366 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 366 }
            }
          }
        }
      },
      {
        name: 'count',
        docs: '```coffeescript [specscript]\n' +
          'count() -> number\n' +
          '```\n' +
          '\n' +
          'Returns the number of items in the disk sorted hash table.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none)\n' +
          '\n' +
          'Return:\n' +
          '  * `number` - the number of items in the disk sorted hash table.\n' +
          '\n' +
          '```javascript\n' +
          'const count = sortedHt.count()\n' +
          '```',
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'count() -> number',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 50 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns the number of items in the disk sorted hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 52 },
                      end: { line: 5, column: 59, offset: 110 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 52 },
                  end: { line: 5, column: 59, offset: 110 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 112 },
                      end: { line: 7, column: 11, offset: 122 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 112 },
                  end: { line: 7, column: 11, offset: 122 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 8, column: 5, offset: 127 },
                              end: { line: 8, column: 11, offset: 133 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 127 },
                          end: { line: 8, column: 11, offset: 133 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 125 },
                      end: { line: 8, column: 11, offset: 133 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 125 },
                  end: { line: 8, column: 11, offset: 133 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 135 },
                      end: { line: 10, column: 8, offset: 142 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 135 },
                  end: { line: 10, column: 8, offset: 142 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
                    type: 'listItem',
                    spread: false,
                    checked: null,
                    children: [
                      {
                        type: 'paragraph',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'number',
                            position: {
                              start: { line: 11, column: 5, offset: 147 },
                              end: { line: 11, column: 13, offset: 155 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the number of items in the disk sorted hash table.',
                            position: {
                              start: { line: 11, column: 13, offset: 155 },
                              end: { line: 11, column: 66, offset: 208 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 147 },
                          end: { line: 11, column: 66, offset: 208 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 145 },
                      end: { line: 11, column: 66, offset: 208 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 145 },
                  end: { line: 11, column: 66, offset: 208 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const count = sortedHt.count()',
                position: {
                  start: { line: 13, column: 1, offset: 210 },
                  end: { line: 15, column: 4, offset: 258 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 258 }
            }
          }
        }
      }
    ],
    fileName: '/home/richard/code/presidium.services/../presidium-db/DiskSortedHashTable.js'
  }
]