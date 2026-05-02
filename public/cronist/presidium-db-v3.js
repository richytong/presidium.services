export default [
  {
    name: 'DiskHashTable',
    docs: '```coffeescript [specscript]\n' +
      'new DiskHashTable(options {\n' +
      '  storagePath: string,\n' +
      '  headerPath: string,\n' +
      '  initialLength: number,\n' +
      '  itemSize: number,\n' +
      '  resizeRatio: number,\n' +
      '  resizeFactor: number,\n' +
      '}) -> ht DiskHashTable\n' +
      '```\n' +
      '\n' +
      'Presidium DiskHashTable class. Creates a hash table that stores all data on disk.\n' +
      '\n' +
      'Arguments:\n' +
      '  * `options`\n' +
      '    * `storagePath` - `string` - the path to the file used to store the disk hash table data.\n' +
      '    * `headerPath` - `string` - the path to the file used to store header information about the disk hash table.\n' +
      '    * `initialLength` - `number` - the initial length of the disk hash table. Minimum value 1024, maximum value 2147483647. Defaults to 1024.\n' +
      '    * `itemSize` - `number` - the size in bytes of each item (including internal item info, key, and value) stored on disk. Minimum value 1024. Defaults to 524288.\n' +
      '    * `resizeRatio` - `number` - the ratio of number of items to table length at which to resize the disk hash table. Minimum value 0 (no resize), maximum value 1. Defaults to 0.\n' +
      "    * `resizeFactor` - `number` - the factor that is multiplied with the disk hash table's current length to determine the new table length on a resize.\n" +
      '\n' +
      'Return:\n' +
      '  * `ht` - [`DiskHashTable`](/docs/DiskHashTable) - a `DiskHashTable` instance.\n' +
      '\n' +
      '```javascript\n' +
      'const ht = new DiskHashTable({\n' +
      "  storagePath: '/path/to/storage-file',\n" +
      "  headerPath: '/path/to/header-file',\n" +
      '  initialLength: 1024,\n' +
      '  itemSize: 512 * 1024,\n' +
      '  resizeRatio: 0.7,\n' +
      '  resizeFactor: 4,\n' +
      '})\n' +
      '```\n' +
      '\n' +
      'Supported platforms:\n' +
      '  * `linux64`\n' +
      '\n' +
      '## Maximum length of the disk hash table\n' +
      'The maximum length of the disk hash table is 2,147,483,647.\n' +
      '\n' +
      '## Allocation of disk space\n' +
      'The disk hash table initially preallocates a block of memory on disk of `(itemSize * initialLength)` bytes as the storage file and a 16-byte block of memory as the header file for database operations. When the disk hash table is resized, the block of memory on disk is reallocated to a new size of `(itemSize * initialLength * numberOfResizes * resizeFactor)` bytes.\n' +
      '\n' +
      '## Resizing the disk hash table\n' +
      "When an item is inserted into the disk hash table via [set](/docs/DiskHashTable#set), the current capacity ratio of the table is calculated as the sum of the table's count and deleted count divided by the table's length. If the current capacity ratio exceeds the `resizeRatio` (and the `resizeRatio` is not 0), a resize of the table occurs.\n" +
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
              '  storagePath: string,\n' +
              '  headerPath: string,\n' +
              '  initialLength: number,\n' +
              '  itemSize: number,\n' +
              '  resizeRatio: number,\n' +
              '  resizeFactor: number,\n' +
              '}) -> ht DiskHashTable',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 10, column: 4, offset: 220 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Presidium DiskHashTable class. Creates a hash table that stores all data on disk.',
                position: {
                  start: { line: 12, column: 1, offset: 222 },
                  end: { line: 12, column: 82, offset: 303 }
                }
              }
            ],
            position: {
              start: { line: 12, column: 1, offset: 222 },
              end: { line: 12, column: 82, offset: 303 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Arguments:',
                position: {
                  start: { line: 14, column: 1, offset: 305 },
                  end: { line: 14, column: 11, offset: 315 }
                }
              }
            ],
            position: {
              start: { line: 14, column: 1, offset: 305 },
              end: { line: 14, column: 11, offset: 315 }
            }
          },
          {
            type: 'list',
            ordered: false,
            start: null,
            spread: false,
            children: [
              {
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
                          start: { line: 15, column: 5, offset: 320 },
                          end: { line: 15, column: 14, offset: 329 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 15, column: 5, offset: 320 },
                      end: { line: 15, column: 14, offset: 329 }
                    }
                  },
                  {
                    type: 'list',
                    ordered: false,
                    start: null,
                    spread: false,
                    children: [
                      {
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
                                  start: { line: 16, column: 7, offset: 336 },
                                  end: { line: 16, column: 20, offset: 349 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 16, column: 20, offset: 349 },
                                  end: { line: 16, column: 23, offset: 352 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'string',
                                position: {
                                  start: { line: 16, column: 23, offset: 352 },
                                  end: { line: 16, column: 31, offset: 360 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the path to the file used to store the disk hash table data.',
                                position: {
                                  start: { line: 16, column: 31, offset: 360 },
                                  end: { line: 16, column: 94, offset: 423 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 16, column: 7, offset: 336 },
                              end: { line: 16, column: 94, offset: 423 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 16, column: 5, offset: 334 },
                          end: { line: 16, column: 94, offset: 423 }
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
                                  start: { line: 17, column: 7, offset: 430 },
                                  end: { line: 17, column: 19, offset: 442 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 17, column: 19, offset: 442 },
                                  end: { line: 17, column: 22, offset: 445 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'string',
                                position: {
                                  start: { line: 17, column: 22, offset: 445 },
                                  end: { line: 17, column: 30, offset: 453 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the path to the file used to store header information about the disk hash table.',
                                position: {
                                  start: { line: 17, column: 30, offset: 453 },
                                  end: {
                                    line: 17,
                                    column: 113,
                                    offset: 536
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 17, column: 7, offset: 430 },
                              end: { line: 17, column: 113, offset: 536 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 17, column: 5, offset: 428 },
                          end: { line: 17, column: 113, offset: 536 }
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
                                  start: { line: 18, column: 7, offset: 543 },
                                  end: { line: 18, column: 22, offset: 558 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 18, column: 22, offset: 558 },
                                  end: { line: 18, column: 25, offset: 561 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: { line: 18, column: 25, offset: 561 },
                                  end: { line: 18, column: 33, offset: 569 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the initial length of the disk hash table. Minimum value 1024, maximum value 2147483647. Defaults to 1024.',
                                position: {
                                  start: { line: 18, column: 33, offset: 569 },
                                  end: {
                                    line: 18,
                                    column: 142,
                                    offset: 678
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 18, column: 7, offset: 543 },
                              end: { line: 18, column: 142, offset: 678 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 18, column: 5, offset: 541 },
                          end: { line: 18, column: 142, offset: 678 }
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
                                  start: { line: 19, column: 7, offset: 685 },
                                  end: { line: 19, column: 17, offset: 695 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 19, column: 17, offset: 695 },
                                  end: { line: 19, column: 20, offset: 698 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: { line: 19, column: 20, offset: 698 },
                                  end: { line: 19, column: 28, offset: 706 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the size in bytes of each item (including internal item info, key, and value) stored on disk. Minimum value 1024. Defaults to 524288.',
                                position: {
                                  start: { line: 19, column: 28, offset: 706 },
                                  end: {
                                    line: 19,
                                    column: 164,
                                    offset: 842
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 19, column: 7, offset: 685 },
                              end: { line: 19, column: 164, offset: 842 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 683 },
                          end: { line: 19, column: 164, offset: 842 }
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
                                  start: { line: 20, column: 7, offset: 849 },
                                  end: { line: 20, column: 20, offset: 862 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 20, column: 20, offset: 862 },
                                  end: { line: 20, column: 23, offset: 865 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: { line: 20, column: 23, offset: 865 },
                                  end: { line: 20, column: 31, offset: 873 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the ratio of number of items to table length at which to resize the disk hash table. Minimum value 0 (no resize), maximum value 1. Defaults to 0.',
                                position: {
                                  start: { line: 20, column: 31, offset: 873 },
                                  end: {
                                    line: 20,
                                    column: 179,
                                    offset: 1021
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 20, column: 7, offset: 849 },
                              end: { line: 20, column: 179, offset: 1021 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 20, column: 5, offset: 847 },
                          end: { line: 20, column: 179, offset: 1021 }
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
                                  start: { line: 21, column: 7, offset: 1028 },
                                  end: {
                                    line: 21,
                                    column: 21,
                                    offset: 1042
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
                                    offset: 1042
                                  },
                                  end: {
                                    line: 21,
                                    column: 24,
                                    offset: 1045
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
                                    offset: 1045
                                  },
                                  end: {
                                    line: 21,
                                    column: 32,
                                    offset: 1053
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: " - the factor that is multiplied with the disk hash table's current length to determine the new table length on a resize.",
                                position: {
                                  start: {
                                    line: 21,
                                    column: 32,
                                    offset: 1053
                                  },
                                  end: {
                                    line: 21,
                                    column: 153,
                                    offset: 1174
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 7, offset: 1028 },
                              end: { line: 21, column: 153, offset: 1174 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 5, offset: 1026 },
                          end: { line: 21, column: 153, offset: 1174 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 16, column: 5, offset: 334 },
                      end: { line: 21, column: 153, offset: 1174 }
                    }
                  }
                ],
                position: {
                  start: { line: 15, column: 3, offset: 318 },
                  end: { line: 21, column: 153, offset: 1174 }
                }
              }
            ],
            position: {
              start: { line: 15, column: 3, offset: 318 },
              end: { line: 21, column: 153, offset: 1174 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Return:',
                position: {
                  start: { line: 23, column: 1, offset: 1176 },
                  end: { line: 23, column: 8, offset: 1183 }
                }
              }
            ],
            position: {
              start: { line: 23, column: 1, offset: 1176 },
              end: { line: 23, column: 8, offset: 1183 }
            }
          },
          {
            type: 'list',
            ordered: false,
            start: null,
            spread: false,
            children: [
              {
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
                          start: { line: 24, column: 5, offset: 1188 },
                          end: { line: 24, column: 9, offset: 1192 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 24, column: 9, offset: 1192 },
                          end: { line: 24, column: 12, offset: 1195 }
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
                              start: { line: 24, column: 13, offset: 1196 },
                              end: { line: 24, column: 28, offset: 1211 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 24, column: 12, offset: 1195 },
                          end: { line: 24, column: 50, offset: 1233 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - a ',
                        position: {
                          start: { line: 24, column: 50, offset: 1233 },
                          end: { line: 24, column: 55, offset: 1238 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'DiskHashTable',
                        position: {
                          start: { line: 24, column: 55, offset: 1238 },
                          end: { line: 24, column: 70, offset: 1253 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' instance.',
                        position: {
                          start: { line: 24, column: 70, offset: 1253 },
                          end: { line: 24, column: 80, offset: 1263 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 24, column: 5, offset: 1188 },
                      end: { line: 24, column: 80, offset: 1263 }
                    }
                  }
                ],
                position: {
                  start: { line: 24, column: 3, offset: 1186 },
                  end: { line: 24, column: 80, offset: 1263 }
                }
              }
            ],
            position: {
              start: { line: 24, column: 3, offset: 1186 },
              end: { line: 24, column: 80, offset: 1263 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: 'const ht = new DiskHashTable({\n' +
              "  storagePath: '/path/to/storage-file',\n" +
              "  headerPath: '/path/to/header-file',\n" +
              '  initialLength: 1024,\n' +
              '  itemSize: 512 * 1024,\n' +
              '  resizeRatio: 0.7,\n' +
              '  resizeFactor: 4,\n' +
              '})',
            position: {
              start: { line: 26, column: 1, offset: 1265 },
              end: { line: 35, column: 4, offset: 1480 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Supported platforms:',
                position: {
                  start: { line: 37, column: 1, offset: 1482 },
                  end: { line: 37, column: 21, offset: 1502 }
                }
              }
            ],
            position: {
              start: { line: 37, column: 1, offset: 1482 },
              end: { line: 37, column: 21, offset: 1502 }
            }
          },
          {
            type: 'list',
            ordered: false,
            start: null,
            spread: false,
            children: [
              {
                type: 'listItem',
                spread: false,
                checked: null,
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'inlineCode',
                        value: 'linux64',
                        position: {
                          start: { line: 38, column: 5, offset: 1507 },
                          end: { line: 38, column: 14, offset: 1516 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 38, column: 5, offset: 1507 },
                      end: { line: 38, column: 14, offset: 1516 }
                    }
                  }
                ],
                position: {
                  start: { line: 38, column: 3, offset: 1505 },
                  end: { line: 38, column: 14, offset: 1516 }
                }
              }
            ],
            position: {
              start: { line: 38, column: 3, offset: 1505 },
              end: { line: 38, column: 14, offset: 1516 }
            }
          },
          {
            type: 'heading',
            depth: 2,
            children: [
              {
                type: 'text',
                value: 'Maximum length of the disk hash table',
                position: {
                  start: { line: 40, column: 4, offset: 1521 },
                  end: { line: 40, column: 41, offset: 1558 }
                }
              }
            ],
            position: {
              start: { line: 40, column: 1, offset: 1518 },
              end: { line: 40, column: 41, offset: 1558 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The maximum length of the disk hash table is 2,147,483,647.',
                position: {
                  start: { line: 41, column: 1, offset: 1559 },
                  end: { line: 41, column: 60, offset: 1618 }
                }
              }
            ],
            position: {
              start: { line: 41, column: 1, offset: 1559 },
              end: { line: 41, column: 60, offset: 1618 }
            }
          },
          {
            type: 'heading',
            depth: 2,
            children: [
              {
                type: 'text',
                value: 'Allocation of disk space',
                position: {
                  start: { line: 43, column: 4, offset: 1623 },
                  end: { line: 43, column: 28, offset: 1647 }
                }
              }
            ],
            position: {
              start: { line: 43, column: 1, offset: 1620 },
              end: { line: 43, column: 28, offset: 1647 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The disk hash table initially preallocates a block of memory on disk of ',
                position: {
                  start: { line: 44, column: 1, offset: 1648 },
                  end: { line: 44, column: 73, offset: 1720 }
                }
              },
              {
                type: 'inlineCode',
                value: '(itemSize * initialLength)',
                position: {
                  start: { line: 44, column: 73, offset: 1720 },
                  end: { line: 44, column: 101, offset: 1748 }
                }
              },
              {
                type: 'text',
                value: ' bytes as the storage file and a 16-byte block of memory as the header file for database operations. When the disk hash table is resized, the block of memory on disk is reallocated to a new size of ',
                position: {
                  start: { line: 44, column: 101, offset: 1748 },
                  end: { line: 44, column: 299, offset: 1946 }
                }
              },
              {
                type: 'inlineCode',
                value: '(itemSize * initialLength * numberOfResizes * resizeFactor)',
                position: {
                  start: { line: 44, column: 299, offset: 1946 },
                  end: { line: 44, column: 360, offset: 2007 }
                }
              },
              {
                type: 'text',
                value: ' bytes.',
                position: {
                  start: { line: 44, column: 360, offset: 2007 },
                  end: { line: 44, column: 367, offset: 2014 }
                }
              }
            ],
            position: {
              start: { line: 44, column: 1, offset: 1648 },
              end: { line: 44, column: 367, offset: 2014 }
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
                  start: { line: 46, column: 4, offset: 2019 },
                  end: { line: 46, column: 32, offset: 2047 }
                }
              }
            ],
            position: {
              start: { line: 46, column: 1, offset: 2016 },
              end: { line: 46, column: 32, offset: 2047 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'When an item is inserted into the disk hash table via ',
                position: {
                  start: { line: 47, column: 1, offset: 2048 },
                  end: { line: 47, column: 55, offset: 2102 }
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
                      start: { line: 47, column: 56, offset: 2103 },
                      end: { line: 47, column: 59, offset: 2106 }
                    }
                  }
                ],
                position: {
                  start: { line: 47, column: 55, offset: 2102 },
                  end: { line: 47, column: 85, offset: 2132 }
                }
              },
              {
                type: 'text',
                value: ", the current capacity ratio of the table is calculated as the sum of the table's count and deleted count divided by the table's length. If the current capacity ratio exceeds the ",
                position: {
                  start: { line: 47, column: 85, offset: 2132 },
                  end: { line: 47, column: 264, offset: 2311 }
                }
              },
              {
                type: 'inlineCode',
                value: 'resizeRatio',
                position: {
                  start: { line: 47, column: 264, offset: 2311 },
                  end: { line: 47, column: 277, offset: 2324 }
                }
              },
              {
                type: 'text',
                value: ' (and the ',
                position: {
                  start: { line: 47, column: 277, offset: 2324 },
                  end: { line: 47, column: 287, offset: 2334 }
                }
              },
              {
                type: 'inlineCode',
                value: 'resizeRatio',
                position: {
                  start: { line: 47, column: 287, offset: 2334 },
                  end: { line: 47, column: 300, offset: 2347 }
                }
              },
              {
                type: 'text',
                value: ' is not 0), a resize of the table occurs.',
                position: {
                  start: { line: 47, column: 300, offset: 2347 },
                  end: { line: 47, column: 341, offset: 2388 }
                }
              }
            ],
            position: {
              start: { line: 47, column: 1, offset: 2048 },
              end: { line: 47, column: 341, offset: 2388 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'During a table resize, each item of the table is added into a temporary storage file using the new table length calculated from the equation below:',
                position: {
                  start: { line: 49, column: 1, offset: 2390 },
                  end: { line: 49, column: 148, offset: 2537 }
                }
              }
            ],
            position: {
              start: { line: 49, column: 1, offset: 2390 },
              end: { line: 49, column: 148, offset: 2537 }
            }
          },
          {
            type: 'code',
            lang: null,
            meta: null,
            value: 'newTableLength = oldTableLength * resizeFactor',
            position: {
              start: { line: 51, column: 1, offset: 2539 },
              end: { line: 53, column: 4, offset: 2593 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Once all of the items have been added into the temporary storage file, the temporary storage file is moved to the location of the old storage file to be used as the new storage file.',
                position: {
                  start: { line: 55, column: 1, offset: 2595 },
                  end: { line: 55, column: 183, offset: 2777 }
                }
              }
            ],
            position: {
              start: { line: 55, column: 1, offset: 2595 },
              end: { line: 55, column: 183, offset: 2777 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 55, column: 183, offset: 2777 }
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
          'Clears all data from the disk hash table. Reallocates the header and storage files.\n' +
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
                    value: 'Clears all data from the disk hash table. Reallocates the header and storage files.',
                    position: {
                      start: { line: 5, column: 1, offset: 55 },
                      end: { line: 5, column: 84, offset: 138 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 55 },
                  end: { line: 5, column: 84, offset: 138 }
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
                            type: 'text',
                            value: '(none)',
                            position: {
                              start: { line: 8, column: 5, offset: 155 },
                              end: { line: 8, column: 11, offset: 161 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 155 },
                          end: { line: 8, column: 11, offset: 161 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 153 },
                      end: { line: 8, column: 11, offset: 161 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 153 },
                  end: { line: 8, column: 11, offset: 161 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 163 },
                      end: { line: 10, column: 8, offset: 170 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 163 },
                  end: { line: 10, column: 8, offset: 170 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 11, column: 5, offset: 175 },
                              end: { line: 11, column: 19, offset: 189 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 175 },
                          end: { line: 11, column: 19, offset: 189 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 173 },
                      end: { line: 11, column: 19, offset: 189 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 173 },
                  end: { line: 11, column: 19, offset: 189 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await ht.clear()',
                position: {
                  start: { line: 13, column: 1, offset: 191 },
                  end: { line: 15, column: 4, offset: 225 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 225 }
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
          'set(key string, value string|Buffer|Uint8Array) -> Promise<>\n' +
          '```\n' +
          '\n' +
          'Sets and stores a value by key in the disk hash table.\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'set(key string, value string|Buffer|Uint8Array) -> Promise<>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 93 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Sets and stores a value by key in the disk hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 95 },
                      end: { line: 5, column: 55, offset: 149 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 95 },
                  end: { line: 5, column: 55, offset: 149 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 151 },
                      end: { line: 7, column: 11, offset: 161 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 151 },
                  end: { line: 7, column: 11, offset: 161 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 8, column: 5, offset: 166 },
                              end: { line: 8, column: 10, offset: 171 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 8, column: 10, offset: 171 },
                              end: { line: 8, column: 13, offset: 174 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 8, column: 13, offset: 174 },
                              end: { line: 8, column: 21, offset: 182 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the key to set.',
                            position: {
                              start: { line: 8, column: 21, offset: 182 },
                              end: { line: 8, column: 39, offset: 200 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 166 },
                          end: { line: 8, column: 39, offset: 200 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 164 },
                      end: { line: 8, column: 39, offset: 200 }
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
                              start: { line: 9, column: 5, offset: 205 },
                              end: { line: 9, column: 12, offset: 212 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 9, column: 12, offset: 212 },
                              end: { line: 9, column: 15, offset: 215 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string|Buffer|Uint8Array',
                            position: {
                              start: { line: 9, column: 15, offset: 215 },
                              end: { line: 9, column: 41, offset: 241 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the value to set corresponding to the key.',
                            position: {
                              start: { line: 9, column: 41, offset: 241 },
                              end: { line: 9, column: 86, offset: 286 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 9, column: 5, offset: 205 },
                          end: { line: 9, column: 86, offset: 286 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 3, offset: 203 },
                      end: { line: 9, column: 86, offset: 286 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 164 },
                  end: { line: 9, column: 86, offset: 286 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 11, column: 1, offset: 288 },
                      end: { line: 11, column: 8, offset: 295 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 288 },
                  end: { line: 11, column: 8, offset: 295 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 12, column: 5, offset: 300 },
                              end: { line: 12, column: 19, offset: 314 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 300 },
                          end: { line: 12, column: 19, offset: 314 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 298 },
                      end: { line: 12, column: 19, offset: 314 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 298 },
                  end: { line: 12, column: 19, offset: 314 }
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
                  start: { line: 14, column: 1, offset: 316 },
                  end: { line: 18, column: 4, offset: 418 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 18, column: 4, offset: 418 }
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
        name: 'getBinary',
        docs: '```coffeescript [specscript]\n' +
          'getBinary(key string) -> binaryValue Promise<Buffer>\n' +
          '```\n' +
          '\n' +
          'Gets a binary value by key from the disk hash table.\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'getBinary(key string) -> binaryValue Promise<Buffer>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 85 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Gets a binary value by key from the disk hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 87 },
                      end: { line: 5, column: 53, offset: 139 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 87 },
                  end: { line: 5, column: 53, offset: 139 }
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
                            value: ' - the key corresponding to the binary value.',
                            position: {
                              start: { line: 8, column: 21, offset: 172 },
                              end: { line: 8, column: 66, offset: 217 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 156 },
                          end: { line: 8, column: 66, offset: 217 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 154 },
                      end: { line: 8, column: 66, offset: 217 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 154 },
                  end: { line: 8, column: 66, offset: 217 }
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
                            value: 'binaryValue',
                            position: {
                              start: { line: 11, column: 5, offset: 231 },
                              end: { line: 11, column: 18, offset: 244 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 11, column: 18, offset: 244 },
                              end: { line: 11, column: 21, offset: 247 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'Buffer',
                            position: {
                              start: { line: 11, column: 21, offset: 247 },
                              end: { line: 11, column: 29, offset: 255 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the binary value corresponding to the key.',
                            position: {
                              start: { line: 11, column: 29, offset: 255 },
                              end: { line: 11, column: 74, offset: 300 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 231 },
                          end: { line: 11, column: 74, offset: 300 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 229 },
                      end: { line: 11, column: 74, offset: 300 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 229 },
                  end: { line: 11, column: 74, offset: 300 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "const buffer = await ht.getBinary('my-buffer')",
                position: {
                  start: { line: 13, column: 1, offset: 302 },
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
          '\n' +
          'iterator(options {\n' +
          "  valueType: 'string'|'binary',\n" +
          '}) -> values AsyncGenerator<string|Buffer>\n' +
          '```\n' +
          '\n' +
          'Returns an iterator of all items in the disk hash table. Items are yielded by reverse insertion order.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves all items in the disk hash table.\n' +
          '  * `options`\n' +
          "    * `valueType` - `'string'|'binary'` - the type of value that the iterator yields. Defaults to `'string'`.\n" +
          "      * `'string'` - iterator yields `string` values.\n" +
          "      * `'binary'` - iterator yields `Buffer` values.\n" +
          '\n' +
          'Return:\n' +
          '  * `values` - `AsyncGenerator<string|Buffer>` - an async iterator of the values of all items in the disk hash table sorted by reverse insertion order.\n' +
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
                value: 'iterator() -> values AsyncGenerator<string>\n' +
                  '\n' +
                  'iterator(options {\n' +
                  "  valueType: 'string'|'binary',\n" +
                  '}) -> values AsyncGenerator<string|Buffer>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 7, column: 4, offset: 171 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns an iterator of all items in the disk hash table. Items are yielded by reverse insertion order.',
                    position: {
                      start: { line: 9, column: 1, offset: 173 },
                      end: { line: 9, column: 103, offset: 275 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 1, offset: 173 },
                  end: { line: 9, column: 103, offset: 275 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 11, column: 1, offset: 277 },
                      end: { line: 11, column: 11, offset: 287 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 277 },
                  end: { line: 11, column: 11, offset: 287 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                            value: '(none) - retrieves all items in the disk hash table.',
                            position: {
                              start: { line: 12, column: 5, offset: 292 },
                              end: { line: 12, column: 57, offset: 344 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 292 },
                          end: { line: 12, column: 57, offset: 344 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 290 },
                      end: { line: 12, column: 57, offset: 344 }
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
                              start: { line: 13, column: 5, offset: 349 },
                              end: { line: 13, column: 14, offset: 358 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 13, column: 5, offset: 349 },
                          end: { line: 13, column: 14, offset: 358 }
                        }
                      },
                      {
                        type: 'list',
                        ordered: false,
                        start: null,
                        spread: false,
                        children: [
                          {
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
                                        offset: 365
                                      },
                                      end: {
                                        line: 14,
                                        column: 18,
                                        offset: 376
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
                                        offset: 376
                                      },
                                      end: {
                                        line: 14,
                                        column: 21,
                                        offset: 379
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
                                        offset: 379
                                      },
                                      end: {
                                        line: 14,
                                        column: 40,
                                        offset: 398
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
                                        offset: 398
                                      },
                                      end: {
                                        line: 14,
                                        column: 99,
                                        offset: 457
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
                                        offset: 457
                                      },
                                      end: {
                                        line: 14,
                                        column: 109,
                                        offset: 467
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
                                        offset: 467
                                      },
                                      end: {
                                        line: 14,
                                        column: 110,
                                        offset: 468
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 14, column: 7, offset: 365 },
                                  end: {
                                    line: 14,
                                    column: 110,
                                    offset: 468
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
                                                offset: 477
                                              },
                                              end: {
                                                line: 15,
                                                column: 19,
                                                offset: 487
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
                                                offset: 487
                                              },
                                              end: {
                                                line: 15,
                                                column: 38,
                                                offset: 506
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
                                                offset: 506
                                              },
                                              end: {
                                                line: 15,
                                                column: 46,
                                                offset: 514
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
                                                offset: 514
                                              },
                                              end: {
                                                line: 15,
                                                column: 54,
                                                offset: 522
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 15,
                                            column: 9,
                                            offset: 477
                                          },
                                          end: {
                                            line: 15,
                                            column: 54,
                                            offset: 522
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 15,
                                        column: 7,
                                        offset: 475
                                      },
                                      end: {
                                        line: 15,
                                        column: 54,
                                        offset: 522
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
                                                offset: 531
                                              },
                                              end: {
                                                line: 16,
                                                column: 19,
                                                offset: 541
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
                                                offset: 541
                                              },
                                              end: {
                                                line: 16,
                                                column: 38,
                                                offset: 560
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
                                                offset: 560
                                              },
                                              end: {
                                                line: 16,
                                                column: 46,
                                                offset: 568
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
                                                offset: 568
                                              },
                                              end: {
                                                line: 16,
                                                column: 54,
                                                offset: 576
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 16,
                                            column: 9,
                                            offset: 531
                                          },
                                          end: {
                                            line: 16,
                                            column: 54,
                                            offset: 576
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 16,
                                        column: 7,
                                        offset: 529
                                      },
                                      end: {
                                        line: 16,
                                        column: 54,
                                        offset: 576
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 15, column: 7, offset: 475 },
                                  end: { line: 16, column: 54, offset: 576 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 14, column: 5, offset: 363 },
                              end: { line: 16, column: 54, offset: 576 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 14, column: 5, offset: 363 },
                          end: { line: 16, column: 54, offset: 576 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 13, column: 3, offset: 347 },
                      end: { line: 16, column: 54, offset: 576 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 290 },
                  end: { line: 16, column: 54, offset: 576 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 18, column: 1, offset: 578 },
                      end: { line: 18, column: 8, offset: 585 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 1, offset: 578 },
                  end: { line: 18, column: 8, offset: 585 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 19, column: 5, offset: 590 },
                              end: { line: 19, column: 13, offset: 598 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 19, column: 13, offset: 598 },
                              end: { line: 19, column: 16, offset: 601 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncGenerator<string|Buffer>',
                            position: {
                              start: { line: 19, column: 16, offset: 601 },
                              end: { line: 19, column: 47, offset: 632 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the values of all items in the disk hash table sorted by reverse insertion order.',
                            position: {
                              start: { line: 19, column: 47, offset: 632 },
                              end: { line: 19, column: 152, offset: 737 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 590 },
                          end: { line: 19, column: 152, offset: 737 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 19, column: 3, offset: 588 },
                      end: { line: 19, column: 152, offset: 737 }
                    }
                  }
                ],
                position: {
                  start: { line: 19, column: 3, offset: 588 },
                  end: { line: 19, column: 152, offset: 737 }
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
                  start: { line: 21, column: 1, offset: 739 },
                  end: { line: 31, column: 4, offset: 988 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 31, column: 4, offset: 988 }
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
      '  storagePath: string,\n' +
      '  headerPath: string,\n' +
      '  initialLength: number,\n' +
      '  itemSize: number,\n' +
      "  sortValueType: 'string'|'number',\n" +
      '  resizeRatio: number,\n' +
      '  resizeFactor: number,\n' +
      '  degree: number,\n' +
      '}) -> sortedHt DiskSortedHashTable\n' +
      '```\n' +
      '\n' +
      'Presidium DiskSortedHashTable class. Creates a sorted hash table that stores all data on disk.\n' +
      '\n' +
      'Arguments:\n' +
      '  * `options`\n' +
      '    * `storagePath` - `string` - the path to the file used to store the disk sorted hash table data.\n' +
      '    * `headerPath` - `string` - the path to the file used to store header information about the disk sorted hash table.\n' +
      '    * `initialLength` - `number` - the initial length of the disk sorted hash table. Minimum value 1024, maximum value 2147483647. Defaults to 1024.\n' +
      '    * `itemSize` - `number` - the size in bytes of each item (including internal item info, key, value, and sortValue) stored on disk. Minimum value 1024. Defaults to 524288.\n' +
      "    * `sortValueType` - `'string'|'number'` - the type of the disk sorted hash table sort-values.\n" +
      '    * `resizeRatio` - `number` - the ratio of number of items to table length at which to resize the disk sorted hash table. Minimum value 0 (no resize), maximum value 1. Defaults to 0.\n' +
      "    * `resizeFactor` - `number` - the factor that is multiplied with the disk sorted hash table's current length to determine the new table length on a resize.\n" +
      '    * `degree` - `number` - minimum value 2, defaults to 2 - defines the following parameters for the internal b-tree that organizes all of the items in the disk sorted hash table:\n' +
      '      * Minimum number of items per b-tree node: `degree - 1`\n' +
      '      * Maximum number of items per b-tree node: `(2 * degree) - 1`\n' +
      '      * Minimum number of children per b-tree node: `degree`\n' +
      '      * Maximum number of children per b-tree node: `2 * degree`\n' +
      '\n' +
      'Return:\n' +
      '  * `sortedHt` - [`DiskSortedHashTable`](/docs/DiskSortedHashTable) - a `DiskSortedHashTable` instance.\n' +
      '\n' +
      '```javascript\n' +
      'const sortedHt = new DiskSortedHashTable({\n' +
      "  storagePath: '/path/to/storage-file',\n" +
      "  headerPath: '/path/to/header-file',\n" +
      '  initialLength: 1024,\n' +
      '  itemSize: 512 * 1024,\n' +
      "  sortValueType: 'number',\n" +
      '  resizeRatio: 0.5,\n' +
      '  resizeFactor: 1000,\n' +
      '  degree: 2,\n' +
      '})\n' +
      '```\n' +
      '\n' +
      'Supported platforms:\n' +
      '  * `linux64`\n' +
      '\n' +
      '## Maximum length of the disk sorted hash table\n' +
      'The maximum length of the disk sorted hash table is 2,147,483,647.\n' +
      '\n' +
      '## Allocation of disk space\n' +
      'The disk sorted hash table initially preallocates a block of memory on disk of `(itemSize * initialLength)` bytes as the storage file and a 24-byte block of memory as the header file for database operations. When the disk sorted hash table is resized, the block of memory on disk is reallocated to a new size of `(itemSize * initialLength * numberOfResizes * resizeFactor)` bytes.\n' +
      '\n' +
      '## Resizing the disk sorted hash table\n' +
      "When an item is inserted into the disk sorted hash table via [set](/docs/DiskSortedHashTable#set), the current capacity ratio of the table is calculated as the sum of the table's count and deleted count divided by the table's length. If the current capacity ratio exceeds the `resizeRatio` (and the `resizeRatio` is not 0), a resize of the table occurs.\n" +
      '\n' +
      'During a table resize, each item of the table is added into a temporary storage file using the new table length calculated from the equation below:\n' +
      '\n' +
      '```\n' +
      'newTableLength = oldTableLength * resizeFactor\n' +
      '```\n' +
      '\n' +
      'Once all of the items have been added into the temporary storage file, the temporary storage file is moved to the location of the old storage file to be used as the new storage file.\n' +
      '\n' +
      '## Optimizing the disk sorted hash table b-tree\n' +
      'The value of `degree` determines the structure of the internal b-tree used by the disk sorted hash table. A higher value for `degree` results in a shorter b-tree and more items per b-tree node, while a lower value results in a taller b-tree and fewer items per b-tree node. The default value of 2 is a safe choice for most use cases.',
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
              '  storagePath: string,\n' +
              '  headerPath: string,\n' +
              '  initialLength: number,\n' +
              '  itemSize: number,\n' +
              "  sortValueType: 'string'|'number',\n" +
              '  resizeRatio: number,\n' +
              '  resizeFactor: number,\n' +
              '  degree: number,\n' +
              '}) -> sortedHt DiskSortedHashTable',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 12, column: 4, offset: 292 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Presidium DiskSortedHashTable class. Creates a sorted hash table that stores all data on disk.',
                position: {
                  start: { line: 14, column: 1, offset: 294 },
                  end: { line: 14, column: 95, offset: 388 }
                }
              }
            ],
            position: {
              start: { line: 14, column: 1, offset: 294 },
              end: { line: 14, column: 95, offset: 388 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Arguments:',
                position: {
                  start: { line: 16, column: 1, offset: 390 },
                  end: { line: 16, column: 11, offset: 400 }
                }
              }
            ],
            position: {
              start: { line: 16, column: 1, offset: 390 },
              end: { line: 16, column: 11, offset: 400 }
            }
          },
          {
            type: 'list',
            ordered: false,
            start: null,
            spread: false,
            children: [
              {
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
                          start: { line: 17, column: 5, offset: 405 },
                          end: { line: 17, column: 14, offset: 414 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 17, column: 5, offset: 405 },
                      end: { line: 17, column: 14, offset: 414 }
                    }
                  },
                  {
                    type: 'list',
                    ordered: false,
                    start: null,
                    spread: false,
                    children: [
                      {
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
                                  start: { line: 18, column: 7, offset: 421 },
                                  end: { line: 18, column: 20, offset: 434 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 18, column: 20, offset: 434 },
                                  end: { line: 18, column: 23, offset: 437 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'string',
                                position: {
                                  start: { line: 18, column: 23, offset: 437 },
                                  end: { line: 18, column: 31, offset: 445 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the path to the file used to store the disk sorted hash table data.',
                                position: {
                                  start: { line: 18, column: 31, offset: 445 },
                                  end: {
                                    line: 18,
                                    column: 101,
                                    offset: 515
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 18, column: 7, offset: 421 },
                              end: { line: 18, column: 101, offset: 515 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 18, column: 5, offset: 419 },
                          end: { line: 18, column: 101, offset: 515 }
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
                                  start: { line: 19, column: 7, offset: 522 },
                                  end: { line: 19, column: 19, offset: 534 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 19, column: 19, offset: 534 },
                                  end: { line: 19, column: 22, offset: 537 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'string',
                                position: {
                                  start: { line: 19, column: 22, offset: 537 },
                                  end: { line: 19, column: 30, offset: 545 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the path to the file used to store header information about the disk sorted hash table.',
                                position: {
                                  start: { line: 19, column: 30, offset: 545 },
                                  end: {
                                    line: 19,
                                    column: 120,
                                    offset: 635
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 19, column: 7, offset: 522 },
                              end: { line: 19, column: 120, offset: 635 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 520 },
                          end: { line: 19, column: 120, offset: 635 }
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
                                  start: { line: 20, column: 7, offset: 642 },
                                  end: { line: 20, column: 22, offset: 657 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 20, column: 22, offset: 657 },
                                  end: { line: 20, column: 25, offset: 660 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: { line: 20, column: 25, offset: 660 },
                                  end: { line: 20, column: 33, offset: 668 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the initial length of the disk sorted hash table. Minimum value 1024, maximum value 2147483647. Defaults to 1024.',
                                position: {
                                  start: { line: 20, column: 33, offset: 668 },
                                  end: {
                                    line: 20,
                                    column: 149,
                                    offset: 784
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 20, column: 7, offset: 642 },
                              end: { line: 20, column: 149, offset: 784 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 20, column: 5, offset: 640 },
                          end: { line: 20, column: 149, offset: 784 }
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
                                  start: { line: 21, column: 7, offset: 791 },
                                  end: { line: 21, column: 17, offset: 801 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 21, column: 17, offset: 801 },
                                  end: { line: 21, column: 20, offset: 804 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: { line: 21, column: 20, offset: 804 },
                                  end: { line: 21, column: 28, offset: 812 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the size in bytes of each item (including internal item info, key, value, and sortValue) stored on disk. Minimum value 1024. Defaults to 524288.',
                                position: {
                                  start: { line: 21, column: 28, offset: 812 },
                                  end: {
                                    line: 21,
                                    column: 175,
                                    offset: 959
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 7, offset: 791 },
                              end: { line: 21, column: 175, offset: 959 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 5, offset: 789 },
                          end: { line: 21, column: 175, offset: 959 }
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
                                  start: { line: 22, column: 7, offset: 966 },
                                  end: { line: 22, column: 22, offset: 981 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 22, column: 22, offset: 981 },
                                  end: { line: 22, column: 25, offset: 984 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: "'string'|'number'",
                                position: {
                                  start: { line: 22, column: 25, offset: 984 },
                                  end: {
                                    line: 22,
                                    column: 44,
                                    offset: 1003
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the type of the disk sorted hash table sort-values.',
                                position: {
                                  start: {
                                    line: 22,
                                    column: 44,
                                    offset: 1003
                                  },
                                  end: {
                                    line: 22,
                                    column: 98,
                                    offset: 1057
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 22, column: 7, offset: 966 },
                              end: { line: 22, column: 98, offset: 1057 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 22, column: 5, offset: 964 },
                          end: { line: 22, column: 98, offset: 1057 }
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
                                  start: { line: 23, column: 7, offset: 1064 },
                                  end: {
                                    line: 23,
                                    column: 20,
                                    offset: 1077
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
                                    offset: 1077
                                  },
                                  end: {
                                    line: 23,
                                    column: 23,
                                    offset: 1080
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: {
                                    line: 23,
                                    column: 23,
                                    offset: 1080
                                  },
                                  end: {
                                    line: 23,
                                    column: 31,
                                    offset: 1088
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the ratio of number of items to table length at which to resize the disk sorted hash table. Minimum value 0 (no resize), maximum value 1. Defaults to 0.',
                                position: {
                                  start: {
                                    line: 23,
                                    column: 31,
                                    offset: 1088
                                  },
                                  end: {
                                    line: 23,
                                    column: 186,
                                    offset: 1243
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 23, column: 7, offset: 1064 },
                              end: { line: 23, column: 186, offset: 1243 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 23, column: 5, offset: 1062 },
                          end: { line: 23, column: 186, offset: 1243 }
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
                                  start: { line: 24, column: 7, offset: 1250 },
                                  end: {
                                    line: 24,
                                    column: 21,
                                    offset: 1264
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: {
                                    line: 24,
                                    column: 21,
                                    offset: 1264
                                  },
                                  end: {
                                    line: 24,
                                    column: 24,
                                    offset: 1267
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: {
                                    line: 24,
                                    column: 24,
                                    offset: 1267
                                  },
                                  end: {
                                    line: 24,
                                    column: 32,
                                    offset: 1275
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: " - the factor that is multiplied with the disk sorted hash table's current length to determine the new table length on a resize.",
                                position: {
                                  start: {
                                    line: 24,
                                    column: 32,
                                    offset: 1275
                                  },
                                  end: {
                                    line: 24,
                                    column: 160,
                                    offset: 1403
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 24, column: 7, offset: 1250 },
                              end: { line: 24, column: 160, offset: 1403 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 24, column: 5, offset: 1248 },
                          end: { line: 24, column: 160, offset: 1403 }
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
                                  start: { line: 25, column: 7, offset: 1410 },
                                  end: {
                                    line: 25,
                                    column: 15,
                                    offset: 1418
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: {
                                    line: 25,
                                    column: 15,
                                    offset: 1418
                                  },
                                  end: {
                                    line: 25,
                                    column: 18,
                                    offset: 1421
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: {
                                    line: 25,
                                    column: 18,
                                    offset: 1421
                                  },
                                  end: {
                                    line: 25,
                                    column: 26,
                                    offset: 1429
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - minimum value 2, defaults to 2 - defines the following parameters for the internal b-tree that organizes all of the items in the disk sorted hash table:',
                                position: {
                                  start: {
                                    line: 25,
                                    column: 26,
                                    offset: 1429
                                  },
                                  end: {
                                    line: 25,
                                    column: 181,
                                    offset: 1584
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 25, column: 7, offset: 1410 },
                              end: { line: 25, column: 181, offset: 1584 }
                            }
                          },
                          {
                            type: 'list',
                            ordered: false,
                            start: null,
                            spread: false,
                            children: [
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
                                            line: 26,
                                            column: 9,
                                            offset: 1593
                                          },
                                          end: {
                                            line: 26,
                                            column: 50,
                                            offset: 1634
                                          }
                                        }
                                      },
                                      {
                                        type: 'inlineCode',
                                        value: 'degree - 1',
                                        position: {
                                          start: {
                                            line: 26,
                                            column: 50,
                                            offset: 1634
                                          },
                                          end: {
                                            line: 26,
                                            column: 62,
                                            offset: 1646
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 26,
                                        column: 9,
                                        offset: 1593
                                      },
                                      end: {
                                        line: 26,
                                        column: 62,
                                        offset: 1646
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 26, column: 7, offset: 1591 },
                                  end: {
                                    line: 26,
                                    column: 62,
                                    offset: 1646
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
                                            line: 27,
                                            column: 9,
                                            offset: 1655
                                          },
                                          end: {
                                            line: 27,
                                            column: 50,
                                            offset: 1696
                                          }
                                        }
                                      },
                                      {
                                        type: 'inlineCode',
                                        value: '(2 * degree) - 1',
                                        position: {
                                          start: {
                                            line: 27,
                                            column: 50,
                                            offset: 1696
                                          },
                                          end: {
                                            line: 27,
                                            column: 68,
                                            offset: 1714
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 27,
                                        column: 9,
                                        offset: 1655
                                      },
                                      end: {
                                        line: 27,
                                        column: 68,
                                        offset: 1714
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 27, column: 7, offset: 1653 },
                                  end: {
                                    line: 27,
                                    column: 68,
                                    offset: 1714
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
                                            line: 28,
                                            column: 9,
                                            offset: 1723
                                          },
                                          end: {
                                            line: 28,
                                            column: 53,
                                            offset: 1767
                                          }
                                        }
                                      },
                                      {
                                        type: 'inlineCode',
                                        value: 'degree',
                                        position: {
                                          start: {
                                            line: 28,
                                            column: 53,
                                            offset: 1767
                                          },
                                          end: {
                                            line: 28,
                                            column: 61,
                                            offset: 1775
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 28,
                                        column: 9,
                                        offset: 1723
                                      },
                                      end: {
                                        line: 28,
                                        column: 61,
                                        offset: 1775
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 28, column: 7, offset: 1721 },
                                  end: {
                                    line: 28,
                                    column: 61,
                                    offset: 1775
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
                                            line: 29,
                                            column: 9,
                                            offset: 1784
                                          },
                                          end: {
                                            line: 29,
                                            column: 53,
                                            offset: 1828
                                          }
                                        }
                                      },
                                      {
                                        type: 'inlineCode',
                                        value: '2 * degree',
                                        position: {
                                          start: {
                                            line: 29,
                                            column: 53,
                                            offset: 1828
                                          },
                                          end: {
                                            line: 29,
                                            column: 65,
                                            offset: 1840
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 29,
                                        column: 9,
                                        offset: 1784
                                      },
                                      end: {
                                        line: 29,
                                        column: 65,
                                        offset: 1840
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 29, column: 7, offset: 1782 },
                                  end: {
                                    line: 29,
                                    column: 65,
                                    offset: 1840
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 26, column: 7, offset: 1591 },
                              end: { line: 29, column: 65, offset: 1840 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 25, column: 5, offset: 1408 },
                          end: { line: 29, column: 65, offset: 1840 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 18, column: 5, offset: 419 },
                      end: { line: 29, column: 65, offset: 1840 }
                    }
                  }
                ],
                position: {
                  start: { line: 17, column: 3, offset: 403 },
                  end: { line: 29, column: 65, offset: 1840 }
                }
              }
            ],
            position: {
              start: { line: 17, column: 3, offset: 403 },
              end: { line: 29, column: 65, offset: 1840 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Return:',
                position: {
                  start: { line: 31, column: 1, offset: 1842 },
                  end: { line: 31, column: 8, offset: 1849 }
                }
              }
            ],
            position: {
              start: { line: 31, column: 1, offset: 1842 },
              end: { line: 31, column: 8, offset: 1849 }
            }
          },
          {
            type: 'list',
            ordered: false,
            start: null,
            spread: false,
            children: [
              {
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
                          start: { line: 32, column: 5, offset: 1854 },
                          end: { line: 32, column: 15, offset: 1864 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 32, column: 15, offset: 1864 },
                          end: { line: 32, column: 18, offset: 1867 }
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
                              start: { line: 32, column: 19, offset: 1868 },
                              end: { line: 32, column: 40, offset: 1889 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 32, column: 18, offset: 1867 },
                          end: { line: 32, column: 68, offset: 1917 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - a ',
                        position: {
                          start: { line: 32, column: 68, offset: 1917 },
                          end: { line: 32, column: 73, offset: 1922 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'DiskSortedHashTable',
                        position: {
                          start: { line: 32, column: 73, offset: 1922 },
                          end: { line: 32, column: 94, offset: 1943 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' instance.',
                        position: {
                          start: { line: 32, column: 94, offset: 1943 },
                          end: { line: 32, column: 104, offset: 1953 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 32, column: 5, offset: 1854 },
                      end: { line: 32, column: 104, offset: 1953 }
                    }
                  }
                ],
                position: {
                  start: { line: 32, column: 3, offset: 1852 },
                  end: { line: 32, column: 104, offset: 1953 }
                }
              }
            ],
            position: {
              start: { line: 32, column: 3, offset: 1852 },
              end: { line: 32, column: 104, offset: 1953 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: 'const sortedHt = new DiskSortedHashTable({\n' +
              "  storagePath: '/path/to/storage-file',\n" +
              "  headerPath: '/path/to/header-file',\n" +
              '  initialLength: 1024,\n' +
              '  itemSize: 512 * 1024,\n' +
              "  sortValueType: 'number',\n" +
              '  resizeRatio: 0.5,\n' +
              '  resizeFactor: 1000,\n' +
              '  degree: 2,\n' +
              '})',
            position: {
              start: { line: 34, column: 1, offset: 1955 },
              end: { line: 45, column: 4, offset: 2225 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Supported platforms:',
                position: {
                  start: { line: 47, column: 1, offset: 2227 },
                  end: { line: 47, column: 21, offset: 2247 }
                }
              }
            ],
            position: {
              start: { line: 47, column: 1, offset: 2227 },
              end: { line: 47, column: 21, offset: 2247 }
            }
          },
          {
            type: 'list',
            ordered: false,
            start: null,
            spread: false,
            children: [
              {
                type: 'listItem',
                spread: false,
                checked: null,
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'inlineCode',
                        value: 'linux64',
                        position: {
                          start: { line: 48, column: 5, offset: 2252 },
                          end: { line: 48, column: 14, offset: 2261 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 48, column: 5, offset: 2252 },
                      end: { line: 48, column: 14, offset: 2261 }
                    }
                  }
                ],
                position: {
                  start: { line: 48, column: 3, offset: 2250 },
                  end: { line: 48, column: 14, offset: 2261 }
                }
              }
            ],
            position: {
              start: { line: 48, column: 3, offset: 2250 },
              end: { line: 48, column: 14, offset: 2261 }
            }
          },
          {
            type: 'heading',
            depth: 2,
            children: [
              {
                type: 'text',
                value: 'Maximum length of the disk sorted hash table',
                position: {
                  start: { line: 50, column: 4, offset: 2266 },
                  end: { line: 50, column: 48, offset: 2310 }
                }
              }
            ],
            position: {
              start: { line: 50, column: 1, offset: 2263 },
              end: { line: 50, column: 48, offset: 2310 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The maximum length of the disk sorted hash table is 2,147,483,647.',
                position: {
                  start: { line: 51, column: 1, offset: 2311 },
                  end: { line: 51, column: 67, offset: 2377 }
                }
              }
            ],
            position: {
              start: { line: 51, column: 1, offset: 2311 },
              end: { line: 51, column: 67, offset: 2377 }
            }
          },
          {
            type: 'heading',
            depth: 2,
            children: [
              {
                type: 'text',
                value: 'Allocation of disk space',
                position: {
                  start: { line: 53, column: 4, offset: 2382 },
                  end: { line: 53, column: 28, offset: 2406 }
                }
              }
            ],
            position: {
              start: { line: 53, column: 1, offset: 2379 },
              end: { line: 53, column: 28, offset: 2406 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The disk sorted hash table initially preallocates a block of memory on disk of ',
                position: {
                  start: { line: 54, column: 1, offset: 2407 },
                  end: { line: 54, column: 80, offset: 2486 }
                }
              },
              {
                type: 'inlineCode',
                value: '(itemSize * initialLength)',
                position: {
                  start: { line: 54, column: 80, offset: 2486 },
                  end: { line: 54, column: 108, offset: 2514 }
                }
              },
              {
                type: 'text',
                value: ' bytes as the storage file and a 24-byte block of memory as the header file for database operations. When the disk sorted hash table is resized, the block of memory on disk is reallocated to a new size of ',
                position: {
                  start: { line: 54, column: 108, offset: 2514 },
                  end: { line: 54, column: 313, offset: 2719 }
                }
              },
              {
                type: 'inlineCode',
                value: '(itemSize * initialLength * numberOfResizes * resizeFactor)',
                position: {
                  start: { line: 54, column: 313, offset: 2719 },
                  end: { line: 54, column: 374, offset: 2780 }
                }
              },
              {
                type: 'text',
                value: ' bytes.',
                position: {
                  start: { line: 54, column: 374, offset: 2780 },
                  end: { line: 54, column: 381, offset: 2787 }
                }
              }
            ],
            position: {
              start: { line: 54, column: 1, offset: 2407 },
              end: { line: 54, column: 381, offset: 2787 }
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
                  start: { line: 56, column: 4, offset: 2792 },
                  end: { line: 56, column: 39, offset: 2827 }
                }
              }
            ],
            position: {
              start: { line: 56, column: 1, offset: 2789 },
              end: { line: 56, column: 39, offset: 2827 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'When an item is inserted into the disk sorted hash table via ',
                position: {
                  start: { line: 57, column: 1, offset: 2828 },
                  end: { line: 57, column: 62, offset: 2889 }
                }
              },
              {
                type: 'link',
                title: null,
                url: '/docs/DiskSortedHashTable#set',
                children: [
                  {
                    type: 'text',
                    value: 'set',
                    position: {
                      start: { line: 57, column: 63, offset: 2890 },
                      end: { line: 57, column: 66, offset: 2893 }
                    }
                  }
                ],
                position: {
                  start: { line: 57, column: 62, offset: 2889 },
                  end: { line: 57, column: 98, offset: 2925 }
                }
              },
              {
                type: 'text',
                value: ", the current capacity ratio of the table is calculated as the sum of the table's count and deleted count divided by the table's length. If the current capacity ratio exceeds the ",
                position: {
                  start: { line: 57, column: 98, offset: 2925 },
                  end: { line: 57, column: 277, offset: 3104 }
                }
              },
              {
                type: 'inlineCode',
                value: 'resizeRatio',
                position: {
                  start: { line: 57, column: 277, offset: 3104 },
                  end: { line: 57, column: 290, offset: 3117 }
                }
              },
              {
                type: 'text',
                value: ' (and the ',
                position: {
                  start: { line: 57, column: 290, offset: 3117 },
                  end: { line: 57, column: 300, offset: 3127 }
                }
              },
              {
                type: 'inlineCode',
                value: 'resizeRatio',
                position: {
                  start: { line: 57, column: 300, offset: 3127 },
                  end: { line: 57, column: 313, offset: 3140 }
                }
              },
              {
                type: 'text',
                value: ' is not 0), a resize of the table occurs.',
                position: {
                  start: { line: 57, column: 313, offset: 3140 },
                  end: { line: 57, column: 354, offset: 3181 }
                }
              }
            ],
            position: {
              start: { line: 57, column: 1, offset: 2828 },
              end: { line: 57, column: 354, offset: 3181 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'During a table resize, each item of the table is added into a temporary storage file using the new table length calculated from the equation below:',
                position: {
                  start: { line: 59, column: 1, offset: 3183 },
                  end: { line: 59, column: 148, offset: 3330 }
                }
              }
            ],
            position: {
              start: { line: 59, column: 1, offset: 3183 },
              end: { line: 59, column: 148, offset: 3330 }
            }
          },
          {
            type: 'code',
            lang: null,
            meta: null,
            value: 'newTableLength = oldTableLength * resizeFactor',
            position: {
              start: { line: 61, column: 1, offset: 3332 },
              end: { line: 63, column: 4, offset: 3386 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Once all of the items have been added into the temporary storage file, the temporary storage file is moved to the location of the old storage file to be used as the new storage file.',
                position: {
                  start: { line: 65, column: 1, offset: 3388 },
                  end: { line: 65, column: 183, offset: 3570 }
                }
              }
            ],
            position: {
              start: { line: 65, column: 1, offset: 3388 },
              end: { line: 65, column: 183, offset: 3570 }
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
                  start: { line: 67, column: 4, offset: 3575 },
                  end: { line: 67, column: 48, offset: 3619 }
                }
              }
            ],
            position: {
              start: { line: 67, column: 1, offset: 3572 },
              end: { line: 67, column: 48, offset: 3619 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The value of ',
                position: {
                  start: { line: 68, column: 1, offset: 3620 },
                  end: { line: 68, column: 14, offset: 3633 }
                }
              },
              {
                type: 'inlineCode',
                value: 'degree',
                position: {
                  start: { line: 68, column: 14, offset: 3633 },
                  end: { line: 68, column: 22, offset: 3641 }
                }
              },
              {
                type: 'text',
                value: ' determines the structure of the internal b-tree used by the disk sorted hash table. A higher value for ',
                position: {
                  start: { line: 68, column: 22, offset: 3641 },
                  end: { line: 68, column: 126, offset: 3745 }
                }
              },
              {
                type: 'inlineCode',
                value: 'degree',
                position: {
                  start: { line: 68, column: 126, offset: 3745 },
                  end: { line: 68, column: 134, offset: 3753 }
                }
              },
              {
                type: 'text',
                value: ' results in a shorter b-tree and more items per b-tree node, while a lower value results in a taller b-tree and fewer items per b-tree node. The default value of 2 is a safe choice for most use cases.',
                position: {
                  start: { line: 68, column: 134, offset: 3753 },
                  end: { line: 68, column: 334, offset: 3953 }
                }
              }
            ],
            position: {
              start: { line: 68, column: 1, offset: 3620 },
              end: { line: 68, column: 334, offset: 3953 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 68, column: 334, offset: 3953 }
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
          'Clears all data from the disk sorted hash table. Reallocates the header and storage files.\n' +
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
                    value: 'Clears all data from the disk sorted hash table. Reallocates the header and storage files.',
                    position: {
                      start: { line: 5, column: 1, offset: 55 },
                      end: { line: 5, column: 91, offset: 145 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 55 },
                  end: { line: 5, column: 91, offset: 145 }
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
                            type: 'text',
                            value: '(none)',
                            position: {
                              start: { line: 8, column: 5, offset: 162 },
                              end: { line: 8, column: 11, offset: 168 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 162 },
                          end: { line: 8, column: 11, offset: 168 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 160 },
                      end: { line: 8, column: 11, offset: 168 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 160 },
                  end: { line: 8, column: 11, offset: 168 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 170 },
                      end: { line: 10, column: 8, offset: 177 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 170 },
                  end: { line: 10, column: 8, offset: 177 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 11, column: 5, offset: 182 },
                              end: { line: 11, column: 19, offset: 196 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 182 },
                          end: { line: 11, column: 19, offset: 196 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 180 },
                      end: { line: 11, column: 19, offset: 196 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 180 },
                  end: { line: 11, column: 19, offset: 196 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await sortedHt.clear()',
                position: {
                  start: { line: 13, column: 1, offset: 198 },
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
          'set(key string, value string|Buffer|Uint8Array, sortValue string|number) -> Promise<>\n' +
          '```\n' +
          '\n' +
          'Sets and stores a value by key and sort-value in the disk sorted hash table.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `key` - `string` - the key to set.\n' +
          '  * `value` - `string|Buffer|Uint8Array` - the value to set corresponding to the key.\n' +
          '  * `sortValue` - `string|number` - the value by which the item is sorted in the disk sorted hash table.\n' +
          '\n' +
          'Return:\n' +
          '  * Empty promise.\n' +
          '\n' +
          '```javascript\n' +
          "await sortedHt.set('key1', 'value1', 1)\n" +
          "await sortedHt.set('key2', 'value2', 2)\n" +
          "await sortedHt.set('key3', 'value3', 3)\n" +
          '\n' +
          "await sortedHt.set('my-buffer', Buffer.from('binary'), 4)\n" +
          '```',
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
                value: 'set(key string, value string|Buffer|Uint8Array, sortValue string|number) -> Promise<>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 118 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Sets and stores a value by key and sort-value in the disk sorted hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 120 },
                      end: { line: 5, column: 77, offset: 196 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 120 },
                  end: { line: 5, column: 77, offset: 196 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 198 },
                      end: { line: 7, column: 11, offset: 208 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 198 },
                  end: { line: 7, column: 11, offset: 208 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 8, column: 5, offset: 213 },
                              end: { line: 8, column: 10, offset: 218 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 8, column: 10, offset: 218 },
                              end: { line: 8, column: 13, offset: 221 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 8, column: 13, offset: 221 },
                              end: { line: 8, column: 21, offset: 229 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the key to set.',
                            position: {
                              start: { line: 8, column: 21, offset: 229 },
                              end: { line: 8, column: 39, offset: 247 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 213 },
                          end: { line: 8, column: 39, offset: 247 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 211 },
                      end: { line: 8, column: 39, offset: 247 }
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
                              start: { line: 9, column: 5, offset: 252 },
                              end: { line: 9, column: 12, offset: 259 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 9, column: 12, offset: 259 },
                              end: { line: 9, column: 15, offset: 262 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string|Buffer|Uint8Array',
                            position: {
                              start: { line: 9, column: 15, offset: 262 },
                              end: { line: 9, column: 41, offset: 288 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the value to set corresponding to the key.',
                            position: {
                              start: { line: 9, column: 41, offset: 288 },
                              end: { line: 9, column: 86, offset: 333 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 9, column: 5, offset: 252 },
                          end: { line: 9, column: 86, offset: 333 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 3, offset: 250 },
                      end: { line: 9, column: 86, offset: 333 }
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
                              start: { line: 10, column: 5, offset: 338 },
                              end: { line: 10, column: 16, offset: 349 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 10, column: 16, offset: 349 },
                              end: { line: 10, column: 19, offset: 352 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string|number',
                            position: {
                              start: { line: 10, column: 19, offset: 352 },
                              end: { line: 10, column: 34, offset: 367 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the value by which the item is sorted in the disk sorted hash table.',
                            position: {
                              start: { line: 10, column: 34, offset: 367 },
                              end: { line: 10, column: 105, offset: 438 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 10, column: 5, offset: 338 },
                          end: { line: 10, column: 105, offset: 438 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 10, column: 3, offset: 336 },
                      end: { line: 10, column: 105, offset: 438 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 211 },
                  end: { line: 10, column: 105, offset: 438 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 12, column: 1, offset: 440 },
                      end: { line: 12, column: 8, offset: 447 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 1, offset: 440 },
                  end: { line: 12, column: 8, offset: 447 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 13, column: 5, offset: 452 },
                              end: { line: 13, column: 19, offset: 466 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 13, column: 5, offset: 452 },
                          end: { line: 13, column: 19, offset: 466 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 13, column: 3, offset: 450 },
                      end: { line: 13, column: 19, offset: 466 }
                    }
                  }
                ],
                position: {
                  start: { line: 13, column: 3, offset: 450 },
                  end: { line: 13, column: 19, offset: 466 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "await sortedHt.set('key1', 'value1', 1)\n" +
                  "await sortedHt.set('key2', 'value2', 2)\n" +
                  "await sortedHt.set('key3', 'value3', 3)\n" +
                  '\n' +
                  "await sortedHt.set('my-buffer', Buffer.from('binary'), 4)",
                position: {
                  start: { line: 15, column: 1, offset: 468 },
                  end: { line: 21, column: 4, offset: 664 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 21, column: 4, offset: 664 }
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
        name: 'getBinary',
        docs: '```coffeescript [specscript]\n' +
          'getBinary(key string) -> binaryValue Promise<Buffer>\n' +
          '```\n' +
          '\n' +
          'Gets a binary value by key from the disk sorted hash table.\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'getBinary(key string) -> binaryValue Promise<Buffer>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 85 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Gets a binary value by key from the disk sorted hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 87 },
                      end: { line: 5, column: 60, offset: 146 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 87 },
                  end: { line: 5, column: 60, offset: 146 }
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
                            value: ' - the key corresponding to the binary value.',
                            position: {
                              start: { line: 8, column: 21, offset: 179 },
                              end: { line: 8, column: 66, offset: 224 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 163 },
                          end: { line: 8, column: 66, offset: 224 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 161 },
                      end: { line: 8, column: 66, offset: 224 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 161 },
                  end: { line: 8, column: 66, offset: 224 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 226 },
                      end: { line: 10, column: 8, offset: 233 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 226 },
                  end: { line: 10, column: 8, offset: 233 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 11, column: 5, offset: 238 },
                              end: { line: 11, column: 18, offset: 251 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 11, column: 18, offset: 251 },
                              end: { line: 11, column: 21, offset: 254 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'Buffer',
                            position: {
                              start: { line: 11, column: 21, offset: 254 },
                              end: { line: 11, column: 29, offset: 262 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the binary value corresponding to the key.',
                            position: {
                              start: { line: 11, column: 29, offset: 262 },
                              end: { line: 11, column: 74, offset: 307 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 238 },
                          end: { line: 11, column: 74, offset: 307 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 236 },
                      end: { line: 11, column: 74, offset: 307 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 236 },
                  end: { line: 11, column: 74, offset: 307 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: "const buffer = await ht.getBinary('my-buffer')",
                position: {
                  start: { line: 13, column: 1, offset: 309 },
                  end: { line: 15, column: 4, offset: 373 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 373 }
            }
          }
        }
      },
      {
        name: 'forwardIterator',
        docs: '```coffeescript [specscript]\n' +
          'forwardIterator() -> values AsyncGenerator<string>\n' +
          '\n' +
          'forwardIterator(options {\n' +
          '  exclusiveStartKey: string,\n' +
          '  startingSortValue: string|number,\n' +
          '  endingSortValue: string|number,\n' +
          "  valueType: 'string'|'binary',\n" +
          '}) -> values AsyncGenerator<string|Buffer>\n' +
          '```\n' +
          '\n' +
          'Returns an iterator of all items in the disk sorted hash table sorted by sort-value. Items are yielded in ascending order.\n' +
          '\n' +
          'If a starting sort-value and ending sort-value are provided, the iterator returns only items with sort-values between the starting and ending sort-values, including items with sort-values equal to the starting and ending sort-values. If only a starting sort-value is provided, the iterator returns all items with sort values greater than or equal to the starting sort-value. If only an ending sort-value is provided, the iterator returns all items with sort values less than or equal to the ending sort-value.\n' +
          '\n' +
          'If an exclusive start key is provided, the iterator returns items with sort-values greater than or equal to the sort value of the item at the exclusive start key, not including the item at the exclusive start key. The exclusive start key takes precedence over the starting sort-value.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves all items in the disk sorted hash table.\n' +
          '  * `options`\n' +
          '    * `exclusiveStartKey` - `string` - the key after which to start iterating.\n' +
          '    * `startingSortValue` - `string|number` - the sort value from which to start iterating.\n' +
          '    * `endingSortValue` - `string|number` - the sort value at which to stop iterating.\n' +
          "    * `valueType` - `'string'|'binary'` - the type of value that the iterator yields. Defaults to `'string'`.\n" +
          "      * `'string'` - iterator yields `string` values.\n" +
          "      * `'binary'` - iterator yields `Buffer` values.\n" +
          '\n' +
          'Return:\n' +
          '  * `values` - `AsyncGenerator<string|Buffer>` - an async iterator of the values of all items in the disk sorted hash table sorted by sort-value in ascending order.\n' +
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
          '\n' +
          'for await (const value of ht.forwardIterator({ startingSortValue: 2, endingSortValue: 3 })) {\n' +
          '  console.log(value) // value2\n' +
          '                     // value3\n' +
          '}\n' +
          '\n' +
          "for await (const value of ht.forwardIterator({ exclusiveStartKey: 'key1' })) {\n" +
          '  console.log(value) // value2\n' +
          '                     // value3\n' +
          '}\n' +
          '\n' +
          "for await (const value of ht.forwardIterator({ exclusiveStartKey: 'key1', endingSortValue: 2 })) {\n" +
          '  console.log(value) // value2\n' +
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
                value: 'forwardIterator() -> values AsyncGenerator<string>\n' +
                  '\n' +
                  'forwardIterator(options {\n' +
                  '  exclusiveStartKey: string,\n' +
                  '  startingSortValue: string|number,\n' +
                  '  endingSortValue: string|number,\n' +
                  "  valueType: 'string'|'binary',\n" +
                  '}) -> values AsyncGenerator<string|Buffer>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 10, column: 4, offset: 284 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns an iterator of all items in the disk sorted hash table sorted by sort-value. Items are yielded in ascending order.',
                    position: {
                      start: { line: 12, column: 1, offset: 286 },
                      end: { line: 12, column: 123, offset: 408 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 1, offset: 286 },
                  end: { line: 12, column: 123, offset: 408 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If a starting sort-value and ending sort-value are provided, the iterator returns only items with sort-values between the starting and ending sort-values, including items with sort-values equal to the starting and ending sort-values. If only a starting sort-value is provided, the iterator returns all items with sort values greater than or equal to the starting sort-value. If only an ending sort-value is provided, the iterator returns all items with sort values less than or equal to the ending sort-value.',
                    position: {
                      start: { line: 14, column: 1, offset: 410 },
                      end: { line: 14, column: 510, offset: 919 }
                    }
                  }
                ],
                position: {
                  start: { line: 14, column: 1, offset: 410 },
                  end: { line: 14, column: 510, offset: 919 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If an exclusive start key is provided, the iterator returns items with sort-values greater than or equal to the sort value of the item at the exclusive start key, not including the item at the exclusive start key. The exclusive start key takes precedence over the starting sort-value.',
                    position: {
                      start: { line: 16, column: 1, offset: 921 },
                      end: { line: 16, column: 285, offset: 1205 }
                    }
                  }
                ],
                position: {
                  start: { line: 16, column: 1, offset: 921 },
                  end: { line: 16, column: 285, offset: 1205 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 18, column: 1, offset: 1207 },
                      end: { line: 18, column: 11, offset: 1217 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 1, offset: 1207 },
                  end: { line: 18, column: 11, offset: 1217 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                            value: '(none) - retrieves all items in the disk sorted hash table.',
                            position: {
                              start: { line: 19, column: 5, offset: 1222 },
                              end: { line: 19, column: 64, offset: 1281 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 1222 },
                          end: { line: 19, column: 64, offset: 1281 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 19, column: 3, offset: 1220 },
                      end: { line: 19, column: 64, offset: 1281 }
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
                              start: { line: 20, column: 5, offset: 1286 },
                              end: { line: 20, column: 14, offset: 1295 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 20, column: 5, offset: 1286 },
                          end: { line: 20, column: 14, offset: 1295 }
                        }
                      },
                      {
                        type: 'list',
                        ordered: false,
                        start: null,
                        spread: false,
                        children: [
                          {
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
                                        line: 21,
                                        column: 7,
                                        offset: 1302
                                      },
                                      end: {
                                        line: 21,
                                        column: 26,
                                        offset: 1321
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
                                        offset: 1321
                                      },
                                      end: {
                                        line: 21,
                                        column: 29,
                                        offset: 1324
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string',
                                    position: {
                                      start: {
                                        line: 21,
                                        column: 29,
                                        offset: 1324
                                      },
                                      end: {
                                        line: 21,
                                        column: 37,
                                        offset: 1332
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the key after which to start iterating.',
                                    position: {
                                      start: {
                                        line: 21,
                                        column: 37,
                                        offset: 1332
                                      },
                                      end: {
                                        line: 21,
                                        column: 79,
                                        offset: 1374
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 21, column: 7, offset: 1302 },
                                  end: {
                                    line: 21,
                                    column: 79,
                                    offset: 1374
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 5, offset: 1300 },
                              end: { line: 21, column: 79, offset: 1374 }
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
                                        line: 22,
                                        column: 7,
                                        offset: 1381
                                      },
                                      end: {
                                        line: 22,
                                        column: 26,
                                        offset: 1400
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 26,
                                        offset: 1400
                                      },
                                      end: {
                                        line: 22,
                                        column: 29,
                                        offset: 1403
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string|number',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 29,
                                        offset: 1403
                                      },
                                      end: {
                                        line: 22,
                                        column: 44,
                                        offset: 1418
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort value from which to start iterating.',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 44,
                                        offset: 1418
                                      },
                                      end: {
                                        line: 22,
                                        column: 92,
                                        offset: 1466
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 22, column: 7, offset: 1381 },
                                  end: {
                                    line: 22,
                                    column: 92,
                                    offset: 1466
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 22, column: 5, offset: 1379 },
                              end: { line: 22, column: 92, offset: 1466 }
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
                                        line: 23,
                                        column: 7,
                                        offset: 1473
                                      },
                                      end: {
                                        line: 23,
                                        column: 24,
                                        offset: 1490
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 24,
                                        offset: 1490
                                      },
                                      end: {
                                        line: 23,
                                        column: 27,
                                        offset: 1493
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string|number',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 27,
                                        offset: 1493
                                      },
                                      end: {
                                        line: 23,
                                        column: 42,
                                        offset: 1508
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort value at which to stop iterating.',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 42,
                                        offset: 1508
                                      },
                                      end: {
                                        line: 23,
                                        column: 87,
                                        offset: 1553
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 23, column: 7, offset: 1473 },
                                  end: {
                                    line: 23,
                                    column: 87,
                                    offset: 1553
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 23, column: 5, offset: 1471 },
                              end: { line: 23, column: 87, offset: 1553 }
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
                                        line: 24,
                                        column: 7,
                                        offset: 1560
                                      },
                                      end: {
                                        line: 24,
                                        column: 18,
                                        offset: 1571
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 18,
                                        offset: 1571
                                      },
                                      end: {
                                        line: 24,
                                        column: 21,
                                        offset: 1574
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: "'string'|'binary'",
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 21,
                                        offset: 1574
                                      },
                                      end: {
                                        line: 24,
                                        column: 40,
                                        offset: 1593
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the type of value that the iterator yields. Defaults to ',
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 40,
                                        offset: 1593
                                      },
                                      end: {
                                        line: 24,
                                        column: 99,
                                        offset: 1652
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: "'string'",
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 99,
                                        offset: 1652
                                      },
                                      end: {
                                        line: 24,
                                        column: 109,
                                        offset: 1662
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: '.',
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 109,
                                        offset: 1662
                                      },
                                      end: {
                                        line: 24,
                                        column: 110,
                                        offset: 1663
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 24, column: 7, offset: 1560 },
                                  end: {
                                    line: 24,
                                    column: 110,
                                    offset: 1663
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
                                                line: 25,
                                                column: 9,
                                                offset: 1672
                                              },
                                              end: {
                                                line: 25,
                                                column: 19,
                                                offset: 1682
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
                                                offset: 1682
                                              },
                                              end: {
                                                line: 25,
                                                column: 38,
                                                offset: 1701
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'string',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 38,
                                                offset: 1701
                                              },
                                              end: {
                                                line: 25,
                                                column: 46,
                                                offset: 1709
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
                                                offset: 1709
                                              },
                                              end: {
                                                line: 25,
                                                column: 54,
                                                offset: 1717
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 25,
                                            column: 9,
                                            offset: 1672
                                          },
                                          end: {
                                            line: 25,
                                            column: 54,
                                            offset: 1717
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 25,
                                        column: 7,
                                        offset: 1670
                                      },
                                      end: {
                                        line: 25,
                                        column: 54,
                                        offset: 1717
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
                                                line: 26,
                                                column: 9,
                                                offset: 1726
                                              },
                                              end: {
                                                line: 26,
                                                column: 19,
                                                offset: 1736
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - iterator yields ',
                                            position: {
                                              start: {
                                                line: 26,
                                                column: 19,
                                                offset: 1736
                                              },
                                              end: {
                                                line: 26,
                                                column: 38,
                                                offset: 1755
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'Buffer',
                                            position: {
                                              start: {
                                                line: 26,
                                                column: 38,
                                                offset: 1755
                                              },
                                              end: {
                                                line: 26,
                                                column: 46,
                                                offset: 1763
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 26,
                                                column: 46,
                                                offset: 1763
                                              },
                                              end: {
                                                line: 26,
                                                column: 54,
                                                offset: 1771
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 26,
                                            column: 9,
                                            offset: 1726
                                          },
                                          end: {
                                            line: 26,
                                            column: 54,
                                            offset: 1771
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 26,
                                        column: 7,
                                        offset: 1724
                                      },
                                      end: {
                                        line: 26,
                                        column: 54,
                                        offset: 1771
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 25, column: 7, offset: 1670 },
                                  end: {
                                    line: 26,
                                    column: 54,
                                    offset: 1771
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 24, column: 5, offset: 1558 },
                              end: { line: 26, column: 54, offset: 1771 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 5, offset: 1300 },
                          end: { line: 26, column: 54, offset: 1771 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 20, column: 3, offset: 1284 },
                      end: { line: 26, column: 54, offset: 1771 }
                    }
                  }
                ],
                position: {
                  start: { line: 19, column: 3, offset: 1220 },
                  end: { line: 26, column: 54, offset: 1771 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 28, column: 1, offset: 1773 },
                      end: { line: 28, column: 8, offset: 1780 }
                    }
                  }
                ],
                position: {
                  start: { line: 28, column: 1, offset: 1773 },
                  end: { line: 28, column: 8, offset: 1780 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 29, column: 5, offset: 1785 },
                              end: { line: 29, column: 13, offset: 1793 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 29, column: 13, offset: 1793 },
                              end: { line: 29, column: 16, offset: 1796 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncGenerator<string|Buffer>',
                            position: {
                              start: { line: 29, column: 16, offset: 1796 },
                              end: { line: 29, column: 47, offset: 1827 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the values of all items in the disk sorted hash table sorted by sort-value in ascending order.',
                            position: {
                              start: { line: 29, column: 47, offset: 1827 },
                              end: { line: 29, column: 165, offset: 1945 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 29, column: 5, offset: 1785 },
                          end: { line: 29, column: 165, offset: 1945 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 29, column: 3, offset: 1783 },
                      end: { line: 29, column: 165, offset: 1945 }
                    }
                  }
                ],
                position: {
                  start: { line: 29, column: 3, offset: 1783 },
                  end: { line: 29, column: 165, offset: 1945 }
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
                  '}\n' +
                  '\n' +
                  'for await (const value of ht.forwardIterator({ startingSortValue: 2, endingSortValue: 3 })) {\n' +
                  '  console.log(value) // value2\n' +
                  '                     // value3\n' +
                  '}\n' +
                  '\n' +
                  "for await (const value of ht.forwardIterator({ exclusiveStartKey: 'key1' })) {\n" +
                  '  console.log(value) // value2\n' +
                  '                     // value3\n' +
                  '}\n' +
                  '\n' +
                  "for await (const value of ht.forwardIterator({ exclusiveStartKey: 'key1', endingSortValue: 2 })) {\n" +
                  '  console.log(value) // value2\n' +
                  '}',
                position: {
                  start: { line: 31, column: 1, offset: 1947 },
                  end: { line: 55, column: 4, offset: 2648 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 55, column: 4, offset: 2648 }
            }
          }
        }
      },
      {
        name: 'reverseIterator',
        docs: '```coffeescript [specscript]\n' +
          'reverseIterator() -> values AsyncGenerator<string|Buffer>\n' +
          '\n' +
          'reverseIterator(options {\n' +
          '  exclusiveStartKey: string,\n' +
          '  startingSortValue: string|number,\n' +
          '  endingSortValue: string|number,\n' +
          "  valueType: 'string'|'binary',\n" +
          '}) -> values AsyncGenerator<string|Buffer>\n' +
          '```\n' +
          '\n' +
          'Returns an iterator of all items in the disk sorted hash table sorted by sort-value. Items are yielded in descending order.\n' +
          '\n' +
          'If a starting sort-value and ending sort-value are provided, the iterator returns only items with sort-values between the starting and ending sort-values, including items with sort-values equal to the starting and ending sort-values. If only a starting sort-value is provided, the iterator returns items with sort values less than or equal to the starting sort-value.\n' +
          '\n' +
          'If an exclusive start key is provided, the iterator returns items with sort-values less than or equal to the sort value of the item at the exclusive start key, not including the item at the exclusive start key. The exclusive start key takes precedence over the starting sort-value.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves all items in the disk sorted hash table.\n' +
          '  * `options`\n' +
          '    * `exclusiveStartKey` - `string` - the key after which to start iterating.\n' +
          '    * `startingSortValue` - `string|number` - the sort value from which to start iterating.\n' +
          '    * `endingSortValue` - `string|number` - the sort value at which to stop iterating.\n' +
          "    * `valueType` - `'string'|'binary'` - the type of value that the iterator yields. Defaults to `'string'`.\n" +
          '      * `string` - iterator yields `string` values.\n' +
          '      * `binary` - iterator yields `Buffer` values.\n' +
          '\n' +
          'Return:\n' +
          '  * `values` - `AsyncGenerator<string|Buffer>` - an async iterator of the values of all items in the disk sorted hash table sorted by sort-value in descending order.\n' +
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
          '\n' +
          'for await (const value of ht.reverseIterator({ startingSortValue: 2, endingSortValue: 1 })) {\n' +
          '  console.log(value) // value2\n' +
          '                     // value1\n' +
          '}\n' +
          '\n' +
          "for await (const value of ht.reverseIterator({ exclusiveStartKey: 'key3' })) {\n" +
          '  console.log(value) // value2\n' +
          '                     // value1\n' +
          '}\n' +
          '\n' +
          "for await (const value of ht.reverseIterator({ exclusiveStartKey: 'key3', endingSortValue: 2 })) {\n" +
          '  console.log(value) // value2\n' +
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
                value: 'reverseIterator() -> values AsyncGenerator<string|Buffer>\n' +
                  '\n' +
                  'reverseIterator(options {\n' +
                  '  exclusiveStartKey: string,\n' +
                  '  startingSortValue: string|number,\n' +
                  '  endingSortValue: string|number,\n' +
                  "  valueType: 'string'|'binary',\n" +
                  '}) -> values AsyncGenerator<string|Buffer>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 10, column: 4, offset: 291 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns an iterator of all items in the disk sorted hash table sorted by sort-value. Items are yielded in descending order.',
                    position: {
                      start: { line: 12, column: 1, offset: 293 },
                      end: { line: 12, column: 124, offset: 416 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 1, offset: 293 },
                  end: { line: 12, column: 124, offset: 416 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If a starting sort-value and ending sort-value are provided, the iterator returns only items with sort-values between the starting and ending sort-values, including items with sort-values equal to the starting and ending sort-values. If only a starting sort-value is provided, the iterator returns items with sort values less than or equal to the starting sort-value.',
                    position: {
                      start: { line: 14, column: 1, offset: 418 },
                      end: { line: 14, column: 368, offset: 785 }
                    }
                  }
                ],
                position: {
                  start: { line: 14, column: 1, offset: 418 },
                  end: { line: 14, column: 368, offset: 785 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If an exclusive start key is provided, the iterator returns items with sort-values less than or equal to the sort value of the item at the exclusive start key, not including the item at the exclusive start key. The exclusive start key takes precedence over the starting sort-value.',
                    position: {
                      start: { line: 16, column: 1, offset: 787 },
                      end: { line: 16, column: 282, offset: 1068 }
                    }
                  }
                ],
                position: {
                  start: { line: 16, column: 1, offset: 787 },
                  end: { line: 16, column: 282, offset: 1068 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 18, column: 1, offset: 1070 },
                      end: { line: 18, column: 11, offset: 1080 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 1, offset: 1070 },
                  end: { line: 18, column: 11, offset: 1080 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                            value: '(none) - retrieves all items in the disk sorted hash table.',
                            position: {
                              start: { line: 19, column: 5, offset: 1085 },
                              end: { line: 19, column: 64, offset: 1144 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 1085 },
                          end: { line: 19, column: 64, offset: 1144 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 19, column: 3, offset: 1083 },
                      end: { line: 19, column: 64, offset: 1144 }
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
                              start: { line: 20, column: 5, offset: 1149 },
                              end: { line: 20, column: 14, offset: 1158 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 20, column: 5, offset: 1149 },
                          end: { line: 20, column: 14, offset: 1158 }
                        }
                      },
                      {
                        type: 'list',
                        ordered: false,
                        start: null,
                        spread: false,
                        children: [
                          {
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
                                        line: 21,
                                        column: 7,
                                        offset: 1165
                                      },
                                      end: {
                                        line: 21,
                                        column: 26,
                                        offset: 1184
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
                                        offset: 1184
                                      },
                                      end: {
                                        line: 21,
                                        column: 29,
                                        offset: 1187
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string',
                                    position: {
                                      start: {
                                        line: 21,
                                        column: 29,
                                        offset: 1187
                                      },
                                      end: {
                                        line: 21,
                                        column: 37,
                                        offset: 1195
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the key after which to start iterating.',
                                    position: {
                                      start: {
                                        line: 21,
                                        column: 37,
                                        offset: 1195
                                      },
                                      end: {
                                        line: 21,
                                        column: 79,
                                        offset: 1237
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 21, column: 7, offset: 1165 },
                                  end: {
                                    line: 21,
                                    column: 79,
                                    offset: 1237
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 5, offset: 1163 },
                              end: { line: 21, column: 79, offset: 1237 }
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
                                        line: 22,
                                        column: 7,
                                        offset: 1244
                                      },
                                      end: {
                                        line: 22,
                                        column: 26,
                                        offset: 1263
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 26,
                                        offset: 1263
                                      },
                                      end: {
                                        line: 22,
                                        column: 29,
                                        offset: 1266
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string|number',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 29,
                                        offset: 1266
                                      },
                                      end: {
                                        line: 22,
                                        column: 44,
                                        offset: 1281
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort value from which to start iterating.',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 44,
                                        offset: 1281
                                      },
                                      end: {
                                        line: 22,
                                        column: 92,
                                        offset: 1329
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 22, column: 7, offset: 1244 },
                                  end: {
                                    line: 22,
                                    column: 92,
                                    offset: 1329
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 22, column: 5, offset: 1242 },
                              end: { line: 22, column: 92, offset: 1329 }
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
                                        line: 23,
                                        column: 7,
                                        offset: 1336
                                      },
                                      end: {
                                        line: 23,
                                        column: 24,
                                        offset: 1353
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 24,
                                        offset: 1353
                                      },
                                      end: {
                                        line: 23,
                                        column: 27,
                                        offset: 1356
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string|number',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 27,
                                        offset: 1356
                                      },
                                      end: {
                                        line: 23,
                                        column: 42,
                                        offset: 1371
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort value at which to stop iterating.',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 42,
                                        offset: 1371
                                      },
                                      end: {
                                        line: 23,
                                        column: 87,
                                        offset: 1416
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 23, column: 7, offset: 1336 },
                                  end: {
                                    line: 23,
                                    column: 87,
                                    offset: 1416
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 23, column: 5, offset: 1334 },
                              end: { line: 23, column: 87, offset: 1416 }
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
                                        line: 24,
                                        column: 7,
                                        offset: 1423
                                      },
                                      end: {
                                        line: 24,
                                        column: 18,
                                        offset: 1434
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 18,
                                        offset: 1434
                                      },
                                      end: {
                                        line: 24,
                                        column: 21,
                                        offset: 1437
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: "'string'|'binary'",
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 21,
                                        offset: 1437
                                      },
                                      end: {
                                        line: 24,
                                        column: 40,
                                        offset: 1456
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the type of value that the iterator yields. Defaults to ',
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 40,
                                        offset: 1456
                                      },
                                      end: {
                                        line: 24,
                                        column: 99,
                                        offset: 1515
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: "'string'",
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 99,
                                        offset: 1515
                                      },
                                      end: {
                                        line: 24,
                                        column: 109,
                                        offset: 1525
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: '.',
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 109,
                                        offset: 1525
                                      },
                                      end: {
                                        line: 24,
                                        column: 110,
                                        offset: 1526
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 24, column: 7, offset: 1423 },
                                  end: {
                                    line: 24,
                                    column: 110,
                                    offset: 1526
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
                                                line: 25,
                                                column: 9,
                                                offset: 1535
                                              },
                                              end: {
                                                line: 25,
                                                column: 17,
                                                offset: 1543
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
                                                offset: 1543
                                              },
                                              end: {
                                                line: 25,
                                                column: 36,
                                                offset: 1562
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'string',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 36,
                                                offset: 1562
                                              },
                                              end: {
                                                line: 25,
                                                column: 44,
                                                offset: 1570
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
                                                offset: 1570
                                              },
                                              end: {
                                                line: 25,
                                                column: 52,
                                                offset: 1578
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 25,
                                            column: 9,
                                            offset: 1535
                                          },
                                          end: {
                                            line: 25,
                                            column: 52,
                                            offset: 1578
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 25,
                                        column: 7,
                                        offset: 1533
                                      },
                                      end: {
                                        line: 25,
                                        column: 52,
                                        offset: 1578
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
                                                line: 26,
                                                column: 9,
                                                offset: 1587
                                              },
                                              end: {
                                                line: 26,
                                                column: 17,
                                                offset: 1595
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - iterator yields ',
                                            position: {
                                              start: {
                                                line: 26,
                                                column: 17,
                                                offset: 1595
                                              },
                                              end: {
                                                line: 26,
                                                column: 36,
                                                offset: 1614
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'Buffer',
                                            position: {
                                              start: {
                                                line: 26,
                                                column: 36,
                                                offset: 1614
                                              },
                                              end: {
                                                line: 26,
                                                column: 44,
                                                offset: 1622
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 26,
                                                column: 44,
                                                offset: 1622
                                              },
                                              end: {
                                                line: 26,
                                                column: 52,
                                                offset: 1630
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 26,
                                            column: 9,
                                            offset: 1587
                                          },
                                          end: {
                                            line: 26,
                                            column: 52,
                                            offset: 1630
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 26,
                                        column: 7,
                                        offset: 1585
                                      },
                                      end: {
                                        line: 26,
                                        column: 52,
                                        offset: 1630
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 25, column: 7, offset: 1533 },
                                  end: {
                                    line: 26,
                                    column: 52,
                                    offset: 1630
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 24, column: 5, offset: 1421 },
                              end: { line: 26, column: 52, offset: 1630 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 5, offset: 1163 },
                          end: { line: 26, column: 52, offset: 1630 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 20, column: 3, offset: 1147 },
                      end: { line: 26, column: 52, offset: 1630 }
                    }
                  }
                ],
                position: {
                  start: { line: 19, column: 3, offset: 1083 },
                  end: { line: 26, column: 52, offset: 1630 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 28, column: 1, offset: 1632 },
                      end: { line: 28, column: 8, offset: 1639 }
                    }
                  }
                ],
                position: {
                  start: { line: 28, column: 1, offset: 1632 },
                  end: { line: 28, column: 8, offset: 1639 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 29, column: 5, offset: 1644 },
                              end: { line: 29, column: 13, offset: 1652 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 29, column: 13, offset: 1652 },
                              end: { line: 29, column: 16, offset: 1655 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncGenerator<string|Buffer>',
                            position: {
                              start: { line: 29, column: 16, offset: 1655 },
                              end: { line: 29, column: 47, offset: 1686 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the values of all items in the disk sorted hash table sorted by sort-value in descending order.',
                            position: {
                              start: { line: 29, column: 47, offset: 1686 },
                              end: { line: 29, column: 166, offset: 1805 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 29, column: 5, offset: 1644 },
                          end: { line: 29, column: 166, offset: 1805 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 29, column: 3, offset: 1642 },
                      end: { line: 29, column: 166, offset: 1805 }
                    }
                  }
                ],
                position: {
                  start: { line: 29, column: 3, offset: 1642 },
                  end: { line: 29, column: 166, offset: 1805 }
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
                  '}\n' +
                  '\n' +
                  'for await (const value of ht.reverseIterator({ startingSortValue: 2, endingSortValue: 1 })) {\n' +
                  '  console.log(value) // value2\n' +
                  '                     // value1\n' +
                  '}\n' +
                  '\n' +
                  "for await (const value of ht.reverseIterator({ exclusiveStartKey: 'key3' })) {\n" +
                  '  console.log(value) // value2\n' +
                  '                     // value1\n' +
                  '}\n' +
                  '\n' +
                  "for await (const value of ht.reverseIterator({ exclusiveStartKey: 'key3', endingSortValue: 2 })) {\n" +
                  '  console.log(value) // value2\n' +
                  '}',
                position: {
                  start: { line: 31, column: 1, offset: 1807 },
                  end: { line: 55, column: 4, offset: 2508 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 55, column: 4, offset: 2508 }
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
  },
  {
    name: 'AsyncPool',
    docs: '```coffeescript [specscript]\n' +
      'new AsyncPool(size number) -> pool AsyncPool\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'AsyncPool',
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
            value: 'new AsyncPool(size number) -> pool AsyncPool',
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
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-db/_internal/AsyncPool.js'
  },
  {
    name: 'calculateMaxBTreeHeight',
    docs: '```coffeescript [specscript]\n' +
      'calculateMaxBTreeHeight(n number, degree number) -> maxHeight number\n' +
      '```\n' +
      '\n' +
      'Calculates the maximum height of a b-tree.\n' +
      '\n' +
      'Arguments:\n' +
      '  * `n` - `number` - number of keys/items.\n' +
      '  * `degree` - `number` - the degree of the b-tree.\n' +
      '\n' +
      'Return:\n' +
      '  * `maxHeight` - `number` - the maximum height of the b-tree.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'calculateMaxBTreeHeight',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 24, offset: 23 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 24, offset: 23 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 24, offset: 23 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'calculateMaxBTreeHeight(n number, degree number) -> maxHeight number',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 101 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Calculates the maximum height of a b-tree.',
                position: {
                  start: { line: 5, column: 1, offset: 103 },
                  end: { line: 5, column: 43, offset: 145 }
                }
              }
            ],
            position: {
              start: { line: 5, column: 1, offset: 103 },
              end: { line: 5, column: 43, offset: 145 }
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
                        value: 'n',
                        position: {
                          start: { line: 8, column: 5, offset: 162 },
                          end: { line: 8, column: 8, offset: 165 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 8, column: 8, offset: 165 },
                          end: { line: 8, column: 11, offset: 168 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'number',
                        position: {
                          start: { line: 8, column: 11, offset: 168 },
                          end: { line: 8, column: 19, offset: 176 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - number of keys/items.',
                        position: {
                          start: { line: 8, column: 19, offset: 176 },
                          end: { line: 8, column: 43, offset: 200 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 5, offset: 162 },
                      end: { line: 8, column: 43, offset: 200 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 160 },
                  end: { line: 8, column: 43, offset: 200 }
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
                          start: { line: 9, column: 5, offset: 205 },
                          end: { line: 9, column: 13, offset: 213 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 9, column: 13, offset: 213 },
                          end: { line: 9, column: 16, offset: 216 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'number',
                        position: {
                          start: { line: 9, column: 16, offset: 216 },
                          end: { line: 9, column: 24, offset: 224 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - the degree of the b-tree.',
                        position: {
                          start: { line: 9, column: 24, offset: 224 },
                          end: { line: 9, column: 52, offset: 252 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 5, offset: 205 },
                      end: { line: 9, column: 52, offset: 252 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 3, offset: 203 },
                  end: { line: 9, column: 52, offset: 252 }
                }
              }
            ],
            position: {
              start: { line: 8, column: 3, offset: 160 },
              end: { line: 9, column: 52, offset: 252 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Return:',
                position: {
                  start: { line: 11, column: 1, offset: 254 },
                  end: { line: 11, column: 8, offset: 261 }
                }
              }
            ],
            position: {
              start: { line: 11, column: 1, offset: 254 },
              end: { line: 11, column: 8, offset: 261 }
            }
          },
          {
            type: 'list',
            ordered: false,
            start: null,
            spread: false,
            children: [
              {
                type: 'listItem',
                spread: false,
                checked: null,
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'inlineCode',
                        value: 'maxHeight',
                        position: {
                          start: { line: 12, column: 5, offset: 266 },
                          end: { line: 12, column: 16, offset: 277 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 12, column: 16, offset: 277 },
                          end: { line: 12, column: 19, offset: 280 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'number',
                        position: {
                          start: { line: 12, column: 19, offset: 280 },
                          end: { line: 12, column: 27, offset: 288 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - the maximum height of the b-tree.',
                        position: {
                          start: { line: 12, column: 27, offset: 288 },
                          end: { line: 12, column: 63, offset: 324 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 5, offset: 266 },
                      end: { line: 12, column: 63, offset: 324 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 264 },
                  end: { line: 12, column: 63, offset: 324 }
                }
              }
            ],
            position: {
              start: { line: 12, column: 3, offset: 264 },
              end: { line: 12, column: 63, offset: 324 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 12, column: 63, offset: 324 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-db/_internal/calculateMaxBTreeHeight.js'
  },
  {
    name: 'calculateMinBTreeHeight',
    docs: '```coffeescript [specscript]\n' +
      'calculateMinBTreeHeight(n number, degree number) -> minHeight number\n' +
      '```\n' +
      '\n' +
      'Calculates the minimum height of a b-tree.\n' +
      '\n' +
      'Arguments:\n' +
      '  * `n` - `number` - number of keys/items.\n' +
      '  * `degree` - `number` - the degree of the b-tree.\n' +
      '\n' +
      'Return:\n' +
      '  * `minHeight` - `number` - the minimum height of the b-tree.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'calculateMinBTreeHeight',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 24, offset: 23 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 24, offset: 23 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 24, offset: 23 }
        }
      },
      docs: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'calculateMinBTreeHeight(n number, degree number) -> minHeight number',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 101 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Calculates the minimum height of a b-tree.',
                position: {
                  start: { line: 5, column: 1, offset: 103 },
                  end: { line: 5, column: 43, offset: 145 }
                }
              }
            ],
            position: {
              start: { line: 5, column: 1, offset: 103 },
              end: { line: 5, column: 43, offset: 145 }
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
                        value: 'n',
                        position: {
                          start: { line: 8, column: 5, offset: 162 },
                          end: { line: 8, column: 8, offset: 165 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 8, column: 8, offset: 165 },
                          end: { line: 8, column: 11, offset: 168 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'number',
                        position: {
                          start: { line: 8, column: 11, offset: 168 },
                          end: { line: 8, column: 19, offset: 176 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - number of keys/items.',
                        position: {
                          start: { line: 8, column: 19, offset: 176 },
                          end: { line: 8, column: 43, offset: 200 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 5, offset: 162 },
                      end: { line: 8, column: 43, offset: 200 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 160 },
                  end: { line: 8, column: 43, offset: 200 }
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
                          start: { line: 9, column: 5, offset: 205 },
                          end: { line: 9, column: 13, offset: 213 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 9, column: 13, offset: 213 },
                          end: { line: 9, column: 16, offset: 216 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'number',
                        position: {
                          start: { line: 9, column: 16, offset: 216 },
                          end: { line: 9, column: 24, offset: 224 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - the degree of the b-tree.',
                        position: {
                          start: { line: 9, column: 24, offset: 224 },
                          end: { line: 9, column: 52, offset: 252 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 5, offset: 205 },
                      end: { line: 9, column: 52, offset: 252 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 3, offset: 203 },
                  end: { line: 9, column: 52, offset: 252 }
                }
              }
            ],
            position: {
              start: { line: 8, column: 3, offset: 160 },
              end: { line: 9, column: 52, offset: 252 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Return:',
                position: {
                  start: { line: 11, column: 1, offset: 254 },
                  end: { line: 11, column: 8, offset: 261 }
                }
              }
            ],
            position: {
              start: { line: 11, column: 1, offset: 254 },
              end: { line: 11, column: 8, offset: 261 }
            }
          },
          {
            type: 'list',
            ordered: false,
            start: null,
            spread: false,
            children: [
              {
                type: 'listItem',
                spread: false,
                checked: null,
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'inlineCode',
                        value: 'minHeight',
                        position: {
                          start: { line: 12, column: 5, offset: 266 },
                          end: { line: 12, column: 16, offset: 277 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 12, column: 16, offset: 277 },
                          end: { line: 12, column: 19, offset: 280 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'number',
                        position: {
                          start: { line: 12, column: 19, offset: 280 },
                          end: { line: 12, column: 27, offset: 288 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - the minimum height of the b-tree.',
                        position: {
                          start: { line: 12, column: 27, offset: 288 },
                          end: { line: 12, column: 63, offset: 324 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 5, offset: 266 },
                      end: { line: 12, column: 63, offset: 324 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 264 },
                  end: { line: 12, column: 63, offset: 324 }
                }
              }
            ],
            position: {
              start: { line: 12, column: 3, offset: 264 },
              end: { line: 12, column: 63, offset: 324 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 12, column: 63, offset: 324 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-db/_internal/calculateMinBTreeHeight.js'
  },
  {
    name: 'convert',
    docs: '```coffeescript [specscript]\n' +
      "convert(value any, t 'number'|'string') -> number|string\n" +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'convert',
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
            value: "convert(value any, t 'number'|'string') -> number|string",
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 89 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 89 }
        }
      }
    },
    methods: [],
    fileName: '/home/richard/code/presidium.services/../presidium-db/_internal/convert.js'
  }
]