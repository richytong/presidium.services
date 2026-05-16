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
      '    * `initialLength` - `number` - the initial length of the disk hash table. Minimum value 1, maximum value `Math.floor(9007199254740991 / itemSize)`. Defaults to 1024.\n' +
      '    * `itemSize` - `number` - the size in bytes of each item (including internal item info, key, and value) stored on disk. Minimum value 17. Defaults to 524288.\n' +
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
      '  * macOS (64-bit)\n' +
      '  * Linux (64-bit)\n' +
      '\n' +
      '## Maximum length of the disk hash table\n' +
      'The maximum length of the disk sorted hash table is represented by the following equation:\n' +
      '```\n' +
      'Math.floor(9_007_199_254_740_991 / itemSize)\n' +
      '```\n' +
      '\n' +
      '## Allocation of disk space\n' +
      'The disk hash table initially preallocates a block of memory on disk of `(itemSize * initialLength)` bytes as the storage file and a 32-byte block of memory as the header file for database operations. When the disk hash table is resized, the block of memory on disk is reallocated to a new size of `(itemSize * initialLength * numberOfResizes * resizeFactor)` bytes.\n' +
      '\n' +
      '## Byte allocations for an item\n' +
      'Each item stored on disk is allocated `itemSize` bytes of disk space. The first 17 bytes are reserved for table operations. The remainder is reserved for the key and value of the item.\n' +
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
                                value: ' - the initial length of the disk hash table. Minimum value 1, maximum value ',
                                position: {
                                  start: { line: 18, column: 33, offset: 569 },
                                  end: {
                                    line: 18,
                                    column: 110,
                                    offset: 646
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'Math.floor(9007199254740991 / itemSize)',
                                position: {
                                  start: {
                                    line: 18,
                                    column: 110,
                                    offset: 646
                                  },
                                  end: {
                                    line: 18,
                                    column: 151,
                                    offset: 687
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: '. Defaults to 1024.',
                                position: {
                                  start: {
                                    line: 18,
                                    column: 151,
                                    offset: 687
                                  },
                                  end: {
                                    line: 18,
                                    column: 170,
                                    offset: 706
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 18, column: 7, offset: 543 },
                              end: { line: 18, column: 170, offset: 706 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 18, column: 5, offset: 541 },
                          end: { line: 18, column: 170, offset: 706 }
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
                                  start: { line: 19, column: 7, offset: 713 },
                                  end: { line: 19, column: 17, offset: 723 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 19, column: 17, offset: 723 },
                                  end: { line: 19, column: 20, offset: 726 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: { line: 19, column: 20, offset: 726 },
                                  end: { line: 19, column: 28, offset: 734 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the size in bytes of each item (including internal item info, key, and value) stored on disk. Minimum value 17. Defaults to 524288.',
                                position: {
                                  start: { line: 19, column: 28, offset: 734 },
                                  end: {
                                    line: 19,
                                    column: 162,
                                    offset: 868
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 19, column: 7, offset: 713 },
                              end: { line: 19, column: 162, offset: 868 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 711 },
                          end: { line: 19, column: 162, offset: 868 }
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
                                  start: { line: 20, column: 7, offset: 875 },
                                  end: { line: 20, column: 20, offset: 888 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 20, column: 20, offset: 888 },
                                  end: { line: 20, column: 23, offset: 891 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: { line: 20, column: 23, offset: 891 },
                                  end: { line: 20, column: 31, offset: 899 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the ratio of number of items to table length at which to resize the disk hash table. Minimum value 0 (no resize), maximum value 1. Defaults to 0.',
                                position: {
                                  start: { line: 20, column: 31, offset: 899 },
                                  end: {
                                    line: 20,
                                    column: 179,
                                    offset: 1047
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 20, column: 7, offset: 875 },
                              end: { line: 20, column: 179, offset: 1047 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 20, column: 5, offset: 873 },
                          end: { line: 20, column: 179, offset: 1047 }
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
                                  start: { line: 21, column: 7, offset: 1054 },
                                  end: {
                                    line: 21,
                                    column: 21,
                                    offset: 1068
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
                                    offset: 1068
                                  },
                                  end: {
                                    line: 21,
                                    column: 24,
                                    offset: 1071
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
                                    offset: 1071
                                  },
                                  end: {
                                    line: 21,
                                    column: 32,
                                    offset: 1079
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
                                    offset: 1079
                                  },
                                  end: {
                                    line: 21,
                                    column: 153,
                                    offset: 1200
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 7, offset: 1054 },
                              end: { line: 21, column: 153, offset: 1200 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 5, offset: 1052 },
                          end: { line: 21, column: 153, offset: 1200 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 16, column: 5, offset: 334 },
                      end: { line: 21, column: 153, offset: 1200 }
                    }
                  }
                ],
                position: {
                  start: { line: 15, column: 3, offset: 318 },
                  end: { line: 21, column: 153, offset: 1200 }
                }
              }
            ],
            position: {
              start: { line: 15, column: 3, offset: 318 },
              end: { line: 21, column: 153, offset: 1200 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Return:',
                position: {
                  start: { line: 23, column: 1, offset: 1202 },
                  end: { line: 23, column: 8, offset: 1209 }
                }
              }
            ],
            position: {
              start: { line: 23, column: 1, offset: 1202 },
              end: { line: 23, column: 8, offset: 1209 }
            }
          },
          {
            type: 'list',
            ordered: false,
            start: null,
            spread: false,
            children: [
              {
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
                          start: { line: 24, column: 5, offset: 1214 },
                          end: { line: 24, column: 9, offset: 1218 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 24, column: 9, offset: 1218 },
                          end: { line: 24, column: 12, offset: 1221 }
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
                              start: { line: 24, column: 13, offset: 1222 },
                              end: { line: 24, column: 28, offset: 1237 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 24, column: 12, offset: 1221 },
                          end: { line: 24, column: 50, offset: 1259 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - a ',
                        position: {
                          start: { line: 24, column: 50, offset: 1259 },
                          end: { line: 24, column: 55, offset: 1264 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'DiskHashTable',
                        position: {
                          start: { line: 24, column: 55, offset: 1264 },
                          end: { line: 24, column: 70, offset: 1279 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' instance.',
                        position: {
                          start: { line: 24, column: 70, offset: 1279 },
                          end: { line: 24, column: 80, offset: 1289 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 24, column: 5, offset: 1214 },
                      end: { line: 24, column: 80, offset: 1289 }
                    }
                  }
                ],
                position: {
                  start: { line: 24, column: 3, offset: 1212 },
                  end: { line: 24, column: 80, offset: 1289 }
                }
              }
            ],
            position: {
              start: { line: 24, column: 3, offset: 1212 },
              end: { line: 24, column: 80, offset: 1289 }
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
              start: { line: 26, column: 1, offset: 1291 },
              end: { line: 35, column: 4, offset: 1506 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Supported platforms:',
                position: {
                  start: { line: 37, column: 1, offset: 1508 },
                  end: { line: 37, column: 21, offset: 1528 }
                }
              }
            ],
            position: {
              start: { line: 37, column: 1, offset: 1508 },
              end: { line: 37, column: 21, offset: 1528 }
            }
          },
          {
            type: 'list',
            ordered: false,
            start: null,
            spread: false,
            children: [
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
                        value: 'macOS (64-bit)',
                        position: {
                          start: { line: 38, column: 5, offset: 1533 },
                          end: { line: 38, column: 19, offset: 1547 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 38, column: 5, offset: 1533 },
                      end: { line: 38, column: 19, offset: 1547 }
                    }
                  }
                ],
                position: {
                  start: { line: 38, column: 3, offset: 1531 },
                  end: { line: 38, column: 19, offset: 1547 }
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
                        value: 'Linux (64-bit)',
                        position: {
                          start: { line: 39, column: 5, offset: 1552 },
                          end: { line: 39, column: 19, offset: 1566 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 39, column: 5, offset: 1552 },
                      end: { line: 39, column: 19, offset: 1566 }
                    }
                  }
                ],
                position: {
                  start: { line: 39, column: 3, offset: 1550 },
                  end: { line: 39, column: 19, offset: 1566 }
                }
              }
            ],
            position: {
              start: { line: 38, column: 3, offset: 1531 },
              end: { line: 39, column: 19, offset: 1566 }
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
                  start: { line: 41, column: 4, offset: 1571 },
                  end: { line: 41, column: 41, offset: 1608 }
                }
              }
            ],
            position: {
              start: { line: 41, column: 1, offset: 1568 },
              end: { line: 41, column: 41, offset: 1608 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The maximum length of the disk sorted hash table is represented by the following equation:',
                position: {
                  start: { line: 42, column: 1, offset: 1609 },
                  end: { line: 42, column: 91, offset: 1699 }
                }
              }
            ],
            position: {
              start: { line: 42, column: 1, offset: 1609 },
              end: { line: 42, column: 91, offset: 1699 }
            }
          },
          {
            type: 'code',
            lang: null,
            meta: null,
            value: 'Math.floor(9_007_199_254_740_991 / itemSize)',
            position: {
              start: { line: 43, column: 1, offset: 1700 },
              end: { line: 45, column: 4, offset: 1752 }
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
                  start: { line: 47, column: 4, offset: 1757 },
                  end: { line: 47, column: 28, offset: 1781 }
                }
              }
            ],
            position: {
              start: { line: 47, column: 1, offset: 1754 },
              end: { line: 47, column: 28, offset: 1781 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The disk hash table initially preallocates a block of memory on disk of ',
                position: {
                  start: { line: 48, column: 1, offset: 1782 },
                  end: { line: 48, column: 73, offset: 1854 }
                }
              },
              {
                type: 'inlineCode',
                value: '(itemSize * initialLength)',
                position: {
                  start: { line: 48, column: 73, offset: 1854 },
                  end: { line: 48, column: 101, offset: 1882 }
                }
              },
              {
                type: 'text',
                value: ' bytes as the storage file and a 32-byte block of memory as the header file for database operations. When the disk hash table is resized, the block of memory on disk is reallocated to a new size of ',
                position: {
                  start: { line: 48, column: 101, offset: 1882 },
                  end: { line: 48, column: 299, offset: 2080 }
                }
              },
              {
                type: 'inlineCode',
                value: '(itemSize * initialLength * numberOfResizes * resizeFactor)',
                position: {
                  start: { line: 48, column: 299, offset: 2080 },
                  end: { line: 48, column: 360, offset: 2141 }
                }
              },
              {
                type: 'text',
                value: ' bytes.',
                position: {
                  start: { line: 48, column: 360, offset: 2141 },
                  end: { line: 48, column: 367, offset: 2148 }
                }
              }
            ],
            position: {
              start: { line: 48, column: 1, offset: 1782 },
              end: { line: 48, column: 367, offset: 2148 }
            }
          },
          {
            type: 'heading',
            depth: 2,
            children: [
              {
                type: 'text',
                value: 'Byte allocations for an item',
                position: {
                  start: { line: 50, column: 4, offset: 2153 },
                  end: { line: 50, column: 32, offset: 2181 }
                }
              }
            ],
            position: {
              start: { line: 50, column: 1, offset: 2150 },
              end: { line: 50, column: 32, offset: 2181 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Each item stored on disk is allocated ',
                position: {
                  start: { line: 51, column: 1, offset: 2182 },
                  end: { line: 51, column: 39, offset: 2220 }
                }
              },
              {
                type: 'inlineCode',
                value: 'itemSize',
                position: {
                  start: { line: 51, column: 39, offset: 2220 },
                  end: { line: 51, column: 49, offset: 2230 }
                }
              },
              {
                type: 'text',
                value: ' bytes of disk space. The first 17 bytes are reserved for table operations. The remainder is reserved for the key and value of the item.',
                position: {
                  start: { line: 51, column: 49, offset: 2230 },
                  end: { line: 51, column: 185, offset: 2366 }
                }
              }
            ],
            position: {
              start: { line: 51, column: 1, offset: 2182 },
              end: { line: 51, column: 185, offset: 2366 }
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
                  start: { line: 53, column: 4, offset: 2371 },
                  end: { line: 53, column: 32, offset: 2399 }
                }
              }
            ],
            position: {
              start: { line: 53, column: 1, offset: 2368 },
              end: { line: 53, column: 32, offset: 2399 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'When an item is inserted into the disk hash table via ',
                position: {
                  start: { line: 54, column: 1, offset: 2400 },
                  end: { line: 54, column: 55, offset: 2454 }
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
                      start: { line: 54, column: 56, offset: 2455 },
                      end: { line: 54, column: 59, offset: 2458 }
                    }
                  }
                ],
                position: {
                  start: { line: 54, column: 55, offset: 2454 },
                  end: { line: 54, column: 85, offset: 2484 }
                }
              },
              {
                type: 'text',
                value: ", the current capacity ratio of the table is calculated as the sum of the table's count and deleted count divided by the table's length. If the current capacity ratio exceeds the ",
                position: {
                  start: { line: 54, column: 85, offset: 2484 },
                  end: { line: 54, column: 264, offset: 2663 }
                }
              },
              {
                type: 'inlineCode',
                value: 'resizeRatio',
                position: {
                  start: { line: 54, column: 264, offset: 2663 },
                  end: { line: 54, column: 277, offset: 2676 }
                }
              },
              {
                type: 'text',
                value: ' (and the ',
                position: {
                  start: { line: 54, column: 277, offset: 2676 },
                  end: { line: 54, column: 287, offset: 2686 }
                }
              },
              {
                type: 'inlineCode',
                value: 'resizeRatio',
                position: {
                  start: { line: 54, column: 287, offset: 2686 },
                  end: { line: 54, column: 300, offset: 2699 }
                }
              },
              {
                type: 'text',
                value: ' is not 0), a resize of the table occurs.',
                position: {
                  start: { line: 54, column: 300, offset: 2699 },
                  end: { line: 54, column: 341, offset: 2740 }
                }
              }
            ],
            position: {
              start: { line: 54, column: 1, offset: 2400 },
              end: { line: 54, column: 341, offset: 2740 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'During a table resize, each item of the table is added into a temporary storage file using the new table length calculated from the equation below:',
                position: {
                  start: { line: 56, column: 1, offset: 2742 },
                  end: { line: 56, column: 148, offset: 2889 }
                }
              }
            ],
            position: {
              start: { line: 56, column: 1, offset: 2742 },
              end: { line: 56, column: 148, offset: 2889 }
            }
          },
          {
            type: 'code',
            lang: null,
            meta: null,
            value: 'newTableLength = oldTableLength * resizeFactor',
            position: {
              start: { line: 58, column: 1, offset: 2891 },
              end: { line: 60, column: 4, offset: 2945 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Once all of the items have been added into the temporary storage file, the temporary storage file is moved to the location of the old storage file to be used as the new storage file.',
                position: {
                  start: { line: 62, column: 1, offset: 2947 },
                  end: { line: 62, column: 183, offset: 3129 }
                }
              }
            ],
            position: {
              start: { line: 62, column: 1, offset: 2947 },
              end: { line: 62, column: 183, offset: 3129 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 62, column: 183, offset: 3129 }
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
          'Returns an iterator of the values of all items in the disk hash table. Item values are yielded in reverse insertion order.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the values of all items in the disk hash table.\n' +
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
                    value: 'Returns an iterator of the values of all items in the disk hash table. Item values are yielded in reverse insertion order.',
                    position: {
                      start: { line: 9, column: 1, offset: 173 },
                      end: { line: 9, column: 123, offset: 295 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 1, offset: 173 },
                  end: { line: 9, column: 123, offset: 295 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 11, column: 1, offset: 297 },
                      end: { line: 11, column: 11, offset: 307 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 297 },
                  end: { line: 11, column: 11, offset: 307 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                            value: '(none) - retrieves the values of all items in the disk hash table.',
                            position: {
                              start: { line: 12, column: 5, offset: 312 },
                              end: { line: 12, column: 71, offset: 378 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 312 },
                          end: { line: 12, column: 71, offset: 378 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 310 },
                      end: { line: 12, column: 71, offset: 378 }
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
                              start: { line: 13, column: 5, offset: 383 },
                              end: { line: 13, column: 14, offset: 392 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 13, column: 5, offset: 383 },
                          end: { line: 13, column: 14, offset: 392 }
                        }
                      },
                      {
                        type: 'list',
                        ordered: false,
                        start: null,
                        spread: false,
                        children: [
                          {
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
                                        offset: 399
                                      },
                                      end: {
                                        line: 14,
                                        column: 18,
                                        offset: 410
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
                                        offset: 410
                                      },
                                      end: {
                                        line: 14,
                                        column: 21,
                                        offset: 413
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
                                        offset: 413
                                      },
                                      end: {
                                        line: 14,
                                        column: 40,
                                        offset: 432
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
                                        offset: 432
                                      },
                                      end: {
                                        line: 14,
                                        column: 99,
                                        offset: 491
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
                                        offset: 491
                                      },
                                      end: {
                                        line: 14,
                                        column: 109,
                                        offset: 501
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
                                        offset: 501
                                      },
                                      end: {
                                        line: 14,
                                        column: 110,
                                        offset: 502
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 14, column: 7, offset: 399 },
                                  end: {
                                    line: 14,
                                    column: 110,
                                    offset: 502
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
                                                offset: 511
                                              },
                                              end: {
                                                line: 15,
                                                column: 19,
                                                offset: 521
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
                                                offset: 521
                                              },
                                              end: {
                                                line: 15,
                                                column: 38,
                                                offset: 540
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
                                                offset: 540
                                              },
                                              end: {
                                                line: 15,
                                                column: 46,
                                                offset: 548
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
                                                offset: 548
                                              },
                                              end: {
                                                line: 15,
                                                column: 54,
                                                offset: 556
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 15,
                                            column: 9,
                                            offset: 511
                                          },
                                          end: {
                                            line: 15,
                                            column: 54,
                                            offset: 556
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 15,
                                        column: 7,
                                        offset: 509
                                      },
                                      end: {
                                        line: 15,
                                        column: 54,
                                        offset: 556
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
                                                offset: 565
                                              },
                                              end: {
                                                line: 16,
                                                column: 19,
                                                offset: 575
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
                                                offset: 575
                                              },
                                              end: {
                                                line: 16,
                                                column: 38,
                                                offset: 594
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
                                                offset: 594
                                              },
                                              end: {
                                                line: 16,
                                                column: 46,
                                                offset: 602
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
                                                offset: 602
                                              },
                                              end: {
                                                line: 16,
                                                column: 54,
                                                offset: 610
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 16,
                                            column: 9,
                                            offset: 565
                                          },
                                          end: {
                                            line: 16,
                                            column: 54,
                                            offset: 610
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 16,
                                        column: 7,
                                        offset: 563
                                      },
                                      end: {
                                        line: 16,
                                        column: 54,
                                        offset: 610
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 15, column: 7, offset: 509 },
                                  end: { line: 16, column: 54, offset: 610 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 14, column: 5, offset: 397 },
                              end: { line: 16, column: 54, offset: 610 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 14, column: 5, offset: 397 },
                          end: { line: 16, column: 54, offset: 610 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 13, column: 3, offset: 381 },
                      end: { line: 16, column: 54, offset: 610 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 310 },
                  end: { line: 16, column: 54, offset: 610 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 18, column: 1, offset: 612 },
                      end: { line: 18, column: 8, offset: 619 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 1, offset: 612 },
                  end: { line: 18, column: 8, offset: 619 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 19, column: 5, offset: 624 },
                              end: { line: 19, column: 13, offset: 632 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 19, column: 13, offset: 632 },
                              end: { line: 19, column: 16, offset: 635 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncGenerator<string|Buffer>',
                            position: {
                              start: { line: 19, column: 16, offset: 635 },
                              end: { line: 19, column: 47, offset: 666 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the values of all items in the disk hash table sorted by reverse insertion order.',
                            position: {
                              start: { line: 19, column: 47, offset: 666 },
                              end: { line: 19, column: 152, offset: 771 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 624 },
                          end: { line: 19, column: 152, offset: 771 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 19, column: 3, offset: 622 },
                      end: { line: 19, column: 152, offset: 771 }
                    }
                  }
                ],
                position: {
                  start: { line: 19, column: 3, offset: 622 },
                  end: { line: 19, column: 152, offset: 771 }
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
                  start: { line: 21, column: 1, offset: 773 },
                  end: { line: 31, column: 4, offset: 1022 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 31, column: 4, offset: 1022 }
            }
          }
        }
      },
      {
        name: 'entriesIterator',
        docs: '```coffeescript [specscript]\n' +
          'entriesIterator() -> entries AsyncGenerator<[key string, value string]>\n' +
          '\n' +
          'entriesIterator(options {\n' +
          "  valueType: 'string'|'binary',\n" +
          '}) -> entries AsyncGenerator<[key string, value string|Buffer]>\n' +
          '```\n' +
          '\n' +
          'Returns an iterator of the entries (keys and values) of all items in the disk hash table. Item entries are yielded in reverse insertion order.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the entries of all items in the disk hash table.\n' +
          '  * `options`\n' +
          "    * `valueType` - `'string'|'binary'` - the type of value that the iterator yields. Defaults to `'string'`.\n" +
          "      * `'string'` - iterator yields entries with `string` values.\n" +
          "      * `'binary'` - iterator yields entries with `Buffer` values.\n" +
          '\n' +
          'Return:\n' +
          '  * `entries` - `AsyncGenerator<[key string, value string|Buffer]>` - an async iterator of the entries of all items in the disk hash table sorted by reverse insertion order.\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'entriesIterator() -> entries AsyncGenerator<[key string, value string]>\n' +
                  '\n' +
                  'entriesIterator(options {\n' +
                  "  valueType: 'string'|'binary',\n" +
                  '}) -> entries AsyncGenerator<[key string, value string|Buffer]>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 7, column: 4, offset: 227 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns an iterator of the entries (keys and values) of all items in the disk hash table. Item entries are yielded in reverse insertion order.',
                    position: {
                      start: { line: 9, column: 1, offset: 229 },
                      end: { line: 9, column: 143, offset: 371 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 1, offset: 229 },
                  end: { line: 9, column: 143, offset: 371 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 11, column: 1, offset: 373 },
                      end: { line: 11, column: 11, offset: 383 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 373 },
                  end: { line: 11, column: 11, offset: 383 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                            value: '(none) - retrieves the entries of all items in the disk hash table.',
                            position: {
                              start: { line: 12, column: 5, offset: 388 },
                              end: { line: 12, column: 72, offset: 455 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 388 },
                          end: { line: 12, column: 72, offset: 455 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 386 },
                      end: { line: 12, column: 72, offset: 455 }
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
                              start: { line: 13, column: 5, offset: 460 },
                              end: { line: 13, column: 14, offset: 469 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 13, column: 5, offset: 460 },
                          end: { line: 13, column: 14, offset: 469 }
                        }
                      },
                      {
                        type: 'list',
                        ordered: false,
                        start: null,
                        spread: false,
                        children: [
                          {
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
                                        offset: 476
                                      },
                                      end: {
                                        line: 14,
                                        column: 18,
                                        offset: 487
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
                                        offset: 487
                                      },
                                      end: {
                                        line: 14,
                                        column: 21,
                                        offset: 490
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
                                        offset: 490
                                      },
                                      end: {
                                        line: 14,
                                        column: 40,
                                        offset: 509
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
                                        offset: 509
                                      },
                                      end: {
                                        line: 14,
                                        column: 99,
                                        offset: 568
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
                                        offset: 568
                                      },
                                      end: {
                                        line: 14,
                                        column: 109,
                                        offset: 578
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
                                        offset: 578
                                      },
                                      end: {
                                        line: 14,
                                        column: 110,
                                        offset: 579
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 14, column: 7, offset: 476 },
                                  end: {
                                    line: 14,
                                    column: 110,
                                    offset: 579
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
                                                offset: 588
                                              },
                                              end: {
                                                line: 15,
                                                column: 19,
                                                offset: 598
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
                                                offset: 598
                                              },
                                              end: {
                                                line: 15,
                                                column: 51,
                                                offset: 630
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
                                                offset: 630
                                              },
                                              end: {
                                                line: 15,
                                                column: 59,
                                                offset: 638
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
                                                offset: 638
                                              },
                                              end: {
                                                line: 15,
                                                column: 67,
                                                offset: 646
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 15,
                                            column: 9,
                                            offset: 588
                                          },
                                          end: {
                                            line: 15,
                                            column: 67,
                                            offset: 646
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 15,
                                        column: 7,
                                        offset: 586
                                      },
                                      end: {
                                        line: 15,
                                        column: 67,
                                        offset: 646
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
                                                offset: 655
                                              },
                                              end: {
                                                line: 16,
                                                column: 19,
                                                offset: 665
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
                                                offset: 665
                                              },
                                              end: {
                                                line: 16,
                                                column: 51,
                                                offset: 697
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
                                                offset: 697
                                              },
                                              end: {
                                                line: 16,
                                                column: 59,
                                                offset: 705
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
                                                offset: 705
                                              },
                                              end: {
                                                line: 16,
                                                column: 67,
                                                offset: 713
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 16,
                                            column: 9,
                                            offset: 655
                                          },
                                          end: {
                                            line: 16,
                                            column: 67,
                                            offset: 713
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 16,
                                        column: 7,
                                        offset: 653
                                      },
                                      end: {
                                        line: 16,
                                        column: 67,
                                        offset: 713
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 15, column: 7, offset: 586 },
                                  end: { line: 16, column: 67, offset: 713 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 14, column: 5, offset: 474 },
                              end: { line: 16, column: 67, offset: 713 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 14, column: 5, offset: 474 },
                          end: { line: 16, column: 67, offset: 713 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 13, column: 3, offset: 458 },
                      end: { line: 16, column: 67, offset: 713 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 386 },
                  end: { line: 16, column: 67, offset: 713 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 18, column: 1, offset: 715 },
                      end: { line: 18, column: 8, offset: 722 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 1, offset: 715 },
                  end: { line: 18, column: 8, offset: 722 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 19, column: 5, offset: 727 },
                              end: { line: 19, column: 14, offset: 736 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 19, column: 14, offset: 736 },
                              end: { line: 19, column: 17, offset: 739 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncGenerator<[key string, value string|Buffer]>',
                            position: {
                              start: { line: 19, column: 17, offset: 739 },
                              end: { line: 19, column: 68, offset: 790 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the entries of all items in the disk hash table sorted by reverse insertion order.',
                            position: {
                              start: { line: 19, column: 68, offset: 790 },
                              end: { line: 19, column: 174, offset: 896 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 727 },
                          end: { line: 19, column: 174, offset: 896 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 19, column: 3, offset: 725 },
                      end: { line: 19, column: 174, offset: 896 }
                    }
                  }
                ],
                position: {
                  start: { line: 19, column: 3, offset: 725 },
                  end: { line: 19, column: 174, offset: 896 }
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
                  start: { line: 21, column: 1, offset: 898 },
                  end: { line: 31, column: 4, offset: 1191 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 31, column: 4, offset: 1191 }
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
      '    * `initialLength` - `number` - the initial length of the disk sorted hash table. Minimum value 1, maximum value `Math.floor(9007199254740991 / itemSize)`. Defaults to 1024.\n' +
      '    * `itemSize` - `number` - the size in bytes of each item (including internal item info, key, value, and sortValue) stored on disk. Minimum value 54. Defaults to 524288.\n' +
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
      '  * macOS (64-bit)\n' +
      '  * Linux (64-bit)\n' +
      '\n' +
      '## Maximum length of the disk sorted hash table\n' +
      'The maximum length of the disk sorted hash table is represented by the following equation:\n' +
      '```\n' +
      'Math.floor(9_007_199_254_740_991 / itemSize)\n' +
      '```\n' +
      '\n' +
      '## Allocation of disk space\n' +
      'The disk sorted hash table initially preallocates a block of memory on disk of `(itemSize * initialLength)` bytes as the storage file and a 48-byte block of memory as the header file for database operations. When the disk sorted hash table is resized, the block of memory on disk is reallocated to a new size of `(itemSize * initialLength * numberOfResizes * resizeFactor)` bytes.\n' +
      '\n' +
      '## Byte allocations for an item\n' +
      'Each item stored on disk is allocated `itemSize` bytes of disk space. The first 53 bytes are reserved for table operations. The remainder is reserved for the key, sort-value, and value of the item.\n' +
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
                                value: ' - the initial length of the disk sorted hash table. Minimum value 1, maximum value ',
                                position: {
                                  start: { line: 20, column: 33, offset: 668 },
                                  end: {
                                    line: 20,
                                    column: 117,
                                    offset: 752
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'Math.floor(9007199254740991 / itemSize)',
                                position: {
                                  start: {
                                    line: 20,
                                    column: 117,
                                    offset: 752
                                  },
                                  end: {
                                    line: 20,
                                    column: 158,
                                    offset: 793
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: '. Defaults to 1024.',
                                position: {
                                  start: {
                                    line: 20,
                                    column: 158,
                                    offset: 793
                                  },
                                  end: {
                                    line: 20,
                                    column: 177,
                                    offset: 812
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 20, column: 7, offset: 642 },
                              end: { line: 20, column: 177, offset: 812 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 20, column: 5, offset: 640 },
                          end: { line: 20, column: 177, offset: 812 }
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
                                  start: { line: 21, column: 7, offset: 819 },
                                  end: { line: 21, column: 17, offset: 829 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 21, column: 17, offset: 829 },
                                  end: { line: 21, column: 20, offset: 832 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: { line: 21, column: 20, offset: 832 },
                                  end: { line: 21, column: 28, offset: 840 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the size in bytes of each item (including internal item info, key, value, and sortValue) stored on disk. Minimum value 54. Defaults to 524288.',
                                position: {
                                  start: { line: 21, column: 28, offset: 840 },
                                  end: {
                                    line: 21,
                                    column: 173,
                                    offset: 985
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 7, offset: 819 },
                              end: { line: 21, column: 173, offset: 985 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 5, offset: 817 },
                          end: { line: 21, column: 173, offset: 985 }
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
                                  start: { line: 22, column: 7, offset: 992 },
                                  end: {
                                    line: 22,
                                    column: 22,
                                    offset: 1007
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
                                    offset: 1007
                                  },
                                  end: {
                                    line: 22,
                                    column: 25,
                                    offset: 1010
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: "'string'|'number'",
                                position: {
                                  start: {
                                    line: 22,
                                    column: 25,
                                    offset: 1010
                                  },
                                  end: {
                                    line: 22,
                                    column: 44,
                                    offset: 1029
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
                                    offset: 1029
                                  },
                                  end: {
                                    line: 22,
                                    column: 98,
                                    offset: 1083
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 22, column: 7, offset: 992 },
                              end: { line: 22, column: 98, offset: 1083 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 22, column: 5, offset: 990 },
                          end: { line: 22, column: 98, offset: 1083 }
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
                                  start: { line: 23, column: 7, offset: 1090 },
                                  end: {
                                    line: 23,
                                    column: 20,
                                    offset: 1103
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
                                    offset: 1103
                                  },
                                  end: {
                                    line: 23,
                                    column: 23,
                                    offset: 1106
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
                                    offset: 1106
                                  },
                                  end: {
                                    line: 23,
                                    column: 31,
                                    offset: 1114
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
                                    offset: 1114
                                  },
                                  end: {
                                    line: 23,
                                    column: 186,
                                    offset: 1269
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 23, column: 7, offset: 1090 },
                              end: { line: 23, column: 186, offset: 1269 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 23, column: 5, offset: 1088 },
                          end: { line: 23, column: 186, offset: 1269 }
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
                                  start: { line: 24, column: 7, offset: 1276 },
                                  end: {
                                    line: 24,
                                    column: 21,
                                    offset: 1290
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
                                    offset: 1290
                                  },
                                  end: {
                                    line: 24,
                                    column: 24,
                                    offset: 1293
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
                                    offset: 1293
                                  },
                                  end: {
                                    line: 24,
                                    column: 32,
                                    offset: 1301
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
                                    offset: 1301
                                  },
                                  end: {
                                    line: 24,
                                    column: 160,
                                    offset: 1429
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 24, column: 7, offset: 1276 },
                              end: { line: 24, column: 160, offset: 1429 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 24, column: 5, offset: 1274 },
                          end: { line: 24, column: 160, offset: 1429 }
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
                                  start: { line: 25, column: 7, offset: 1436 },
                                  end: {
                                    line: 25,
                                    column: 15,
                                    offset: 1444
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
                                    offset: 1444
                                  },
                                  end: {
                                    line: 25,
                                    column: 18,
                                    offset: 1447
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
                                    offset: 1447
                                  },
                                  end: {
                                    line: 25,
                                    column: 26,
                                    offset: 1455
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
                                    offset: 1455
                                  },
                                  end: {
                                    line: 25,
                                    column: 181,
                                    offset: 1610
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 25, column: 7, offset: 1436 },
                              end: { line: 25, column: 181, offset: 1610 }
                            }
                          },
                          {
                            type: 'list',
                            ordered: false,
                            start: null,
                            spread: false,
                            children: [
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
                                            offset: 1619
                                          },
                                          end: {
                                            line: 26,
                                            column: 50,
                                            offset: 1660
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
                                            offset: 1660
                                          },
                                          end: {
                                            line: 26,
                                            column: 62,
                                            offset: 1672
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 26,
                                        column: 9,
                                        offset: 1619
                                      },
                                      end: {
                                        line: 26,
                                        column: 62,
                                        offset: 1672
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 26, column: 7, offset: 1617 },
                                  end: {
                                    line: 26,
                                    column: 62,
                                    offset: 1672
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
                                            offset: 1681
                                          },
                                          end: {
                                            line: 27,
                                            column: 50,
                                            offset: 1722
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
                                            offset: 1722
                                          },
                                          end: {
                                            line: 27,
                                            column: 68,
                                            offset: 1740
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 27,
                                        column: 9,
                                        offset: 1681
                                      },
                                      end: {
                                        line: 27,
                                        column: 68,
                                        offset: 1740
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 27, column: 7, offset: 1679 },
                                  end: {
                                    line: 27,
                                    column: 68,
                                    offset: 1740
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
                                            offset: 1749
                                          },
                                          end: {
                                            line: 28,
                                            column: 53,
                                            offset: 1793
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
                                            offset: 1793
                                          },
                                          end: {
                                            line: 28,
                                            column: 61,
                                            offset: 1801
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 28,
                                        column: 9,
                                        offset: 1749
                                      },
                                      end: {
                                        line: 28,
                                        column: 61,
                                        offset: 1801
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 28, column: 7, offset: 1747 },
                                  end: {
                                    line: 28,
                                    column: 61,
                                    offset: 1801
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
                                            offset: 1810
                                          },
                                          end: {
                                            line: 29,
                                            column: 53,
                                            offset: 1854
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
                                            offset: 1854
                                          },
                                          end: {
                                            line: 29,
                                            column: 65,
                                            offset: 1866
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 29,
                                        column: 9,
                                        offset: 1810
                                      },
                                      end: {
                                        line: 29,
                                        column: 65,
                                        offset: 1866
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 29, column: 7, offset: 1808 },
                                  end: {
                                    line: 29,
                                    column: 65,
                                    offset: 1866
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 26, column: 7, offset: 1617 },
                              end: { line: 29, column: 65, offset: 1866 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 25, column: 5, offset: 1434 },
                          end: { line: 29, column: 65, offset: 1866 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 18, column: 5, offset: 419 },
                      end: { line: 29, column: 65, offset: 1866 }
                    }
                  }
                ],
                position: {
                  start: { line: 17, column: 3, offset: 403 },
                  end: { line: 29, column: 65, offset: 1866 }
                }
              }
            ],
            position: {
              start: { line: 17, column: 3, offset: 403 },
              end: { line: 29, column: 65, offset: 1866 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Return:',
                position: {
                  start: { line: 31, column: 1, offset: 1868 },
                  end: { line: 31, column: 8, offset: 1875 }
                }
              }
            ],
            position: {
              start: { line: 31, column: 1, offset: 1868 },
              end: { line: 31, column: 8, offset: 1875 }
            }
          },
          {
            type: 'list',
            ordered: false,
            start: null,
            spread: false,
            children: [
              {
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
                          start: { line: 32, column: 5, offset: 1880 },
                          end: { line: 32, column: 15, offset: 1890 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 32, column: 15, offset: 1890 },
                          end: { line: 32, column: 18, offset: 1893 }
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
                              start: { line: 32, column: 19, offset: 1894 },
                              end: { line: 32, column: 40, offset: 1915 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 32, column: 18, offset: 1893 },
                          end: { line: 32, column: 68, offset: 1943 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - a ',
                        position: {
                          start: { line: 32, column: 68, offset: 1943 },
                          end: { line: 32, column: 73, offset: 1948 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'DiskSortedHashTable',
                        position: {
                          start: { line: 32, column: 73, offset: 1948 },
                          end: { line: 32, column: 94, offset: 1969 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' instance.',
                        position: {
                          start: { line: 32, column: 94, offset: 1969 },
                          end: { line: 32, column: 104, offset: 1979 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 32, column: 5, offset: 1880 },
                      end: { line: 32, column: 104, offset: 1979 }
                    }
                  }
                ],
                position: {
                  start: { line: 32, column: 3, offset: 1878 },
                  end: { line: 32, column: 104, offset: 1979 }
                }
              }
            ],
            position: {
              start: { line: 32, column: 3, offset: 1878 },
              end: { line: 32, column: 104, offset: 1979 }
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
              start: { line: 34, column: 1, offset: 1981 },
              end: { line: 45, column: 4, offset: 2251 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Supported platforms:',
                position: {
                  start: { line: 47, column: 1, offset: 2253 },
                  end: { line: 47, column: 21, offset: 2273 }
                }
              }
            ],
            position: {
              start: { line: 47, column: 1, offset: 2253 },
              end: { line: 47, column: 21, offset: 2273 }
            }
          },
          {
            type: 'list',
            ordered: false,
            start: null,
            spread: false,
            children: [
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
                        value: 'macOS (64-bit)',
                        position: {
                          start: { line: 48, column: 5, offset: 2278 },
                          end: { line: 48, column: 19, offset: 2292 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 48, column: 5, offset: 2278 },
                      end: { line: 48, column: 19, offset: 2292 }
                    }
                  }
                ],
                position: {
                  start: { line: 48, column: 3, offset: 2276 },
                  end: { line: 48, column: 19, offset: 2292 }
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
                        value: 'Linux (64-bit)',
                        position: {
                          start: { line: 49, column: 5, offset: 2297 },
                          end: { line: 49, column: 19, offset: 2311 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 49, column: 5, offset: 2297 },
                      end: { line: 49, column: 19, offset: 2311 }
                    }
                  }
                ],
                position: {
                  start: { line: 49, column: 3, offset: 2295 },
                  end: { line: 49, column: 19, offset: 2311 }
                }
              }
            ],
            position: {
              start: { line: 48, column: 3, offset: 2276 },
              end: { line: 49, column: 19, offset: 2311 }
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
                  start: { line: 51, column: 4, offset: 2316 },
                  end: { line: 51, column: 48, offset: 2360 }
                }
              }
            ],
            position: {
              start: { line: 51, column: 1, offset: 2313 },
              end: { line: 51, column: 48, offset: 2360 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The maximum length of the disk sorted hash table is represented by the following equation:',
                position: {
                  start: { line: 52, column: 1, offset: 2361 },
                  end: { line: 52, column: 91, offset: 2451 }
                }
              }
            ],
            position: {
              start: { line: 52, column: 1, offset: 2361 },
              end: { line: 52, column: 91, offset: 2451 }
            }
          },
          {
            type: 'code',
            lang: null,
            meta: null,
            value: 'Math.floor(9_007_199_254_740_991 / itemSize)',
            position: {
              start: { line: 53, column: 1, offset: 2452 },
              end: { line: 55, column: 4, offset: 2504 }
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
                  start: { line: 57, column: 4, offset: 2509 },
                  end: { line: 57, column: 28, offset: 2533 }
                }
              }
            ],
            position: {
              start: { line: 57, column: 1, offset: 2506 },
              end: { line: 57, column: 28, offset: 2533 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The disk sorted hash table initially preallocates a block of memory on disk of ',
                position: {
                  start: { line: 58, column: 1, offset: 2534 },
                  end: { line: 58, column: 80, offset: 2613 }
                }
              },
              {
                type: 'inlineCode',
                value: '(itemSize * initialLength)',
                position: {
                  start: { line: 58, column: 80, offset: 2613 },
                  end: { line: 58, column: 108, offset: 2641 }
                }
              },
              {
                type: 'text',
                value: ' bytes as the storage file and a 48-byte block of memory as the header file for database operations. When the disk sorted hash table is resized, the block of memory on disk is reallocated to a new size of ',
                position: {
                  start: { line: 58, column: 108, offset: 2641 },
                  end: { line: 58, column: 313, offset: 2846 }
                }
              },
              {
                type: 'inlineCode',
                value: '(itemSize * initialLength * numberOfResizes * resizeFactor)',
                position: {
                  start: { line: 58, column: 313, offset: 2846 },
                  end: { line: 58, column: 374, offset: 2907 }
                }
              },
              {
                type: 'text',
                value: ' bytes.',
                position: {
                  start: { line: 58, column: 374, offset: 2907 },
                  end: { line: 58, column: 381, offset: 2914 }
                }
              }
            ],
            position: {
              start: { line: 58, column: 1, offset: 2534 },
              end: { line: 58, column: 381, offset: 2914 }
            }
          },
          {
            type: 'heading',
            depth: 2,
            children: [
              {
                type: 'text',
                value: 'Byte allocations for an item',
                position: {
                  start: { line: 60, column: 4, offset: 2919 },
                  end: { line: 60, column: 32, offset: 2947 }
                }
              }
            ],
            position: {
              start: { line: 60, column: 1, offset: 2916 },
              end: { line: 60, column: 32, offset: 2947 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Each item stored on disk is allocated ',
                position: {
                  start: { line: 61, column: 1, offset: 2948 },
                  end: { line: 61, column: 39, offset: 2986 }
                }
              },
              {
                type: 'inlineCode',
                value: 'itemSize',
                position: {
                  start: { line: 61, column: 39, offset: 2986 },
                  end: { line: 61, column: 49, offset: 2996 }
                }
              },
              {
                type: 'text',
                value: ' bytes of disk space. The first 53 bytes are reserved for table operations. The remainder is reserved for the key, sort-value, and value of the item.',
                position: {
                  start: { line: 61, column: 49, offset: 2996 },
                  end: { line: 61, column: 198, offset: 3145 }
                }
              }
            ],
            position: {
              start: { line: 61, column: 1, offset: 2948 },
              end: { line: 61, column: 198, offset: 3145 }
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
                  start: { line: 63, column: 4, offset: 3150 },
                  end: { line: 63, column: 39, offset: 3185 }
                }
              }
            ],
            position: {
              start: { line: 63, column: 1, offset: 3147 },
              end: { line: 63, column: 39, offset: 3185 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'When an item is inserted into the disk sorted hash table via ',
                position: {
                  start: { line: 64, column: 1, offset: 3186 },
                  end: { line: 64, column: 62, offset: 3247 }
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
                      start: { line: 64, column: 63, offset: 3248 },
                      end: { line: 64, column: 66, offset: 3251 }
                    }
                  }
                ],
                position: {
                  start: { line: 64, column: 62, offset: 3247 },
                  end: { line: 64, column: 98, offset: 3283 }
                }
              },
              {
                type: 'text',
                value: ", the current capacity ratio of the table is calculated as the sum of the table's count and deleted count divided by the table's length. If the current capacity ratio exceeds the ",
                position: {
                  start: { line: 64, column: 98, offset: 3283 },
                  end: { line: 64, column: 277, offset: 3462 }
                }
              },
              {
                type: 'inlineCode',
                value: 'resizeRatio',
                position: {
                  start: { line: 64, column: 277, offset: 3462 },
                  end: { line: 64, column: 290, offset: 3475 }
                }
              },
              {
                type: 'text',
                value: ' (and the ',
                position: {
                  start: { line: 64, column: 290, offset: 3475 },
                  end: { line: 64, column: 300, offset: 3485 }
                }
              },
              {
                type: 'inlineCode',
                value: 'resizeRatio',
                position: {
                  start: { line: 64, column: 300, offset: 3485 },
                  end: { line: 64, column: 313, offset: 3498 }
                }
              },
              {
                type: 'text',
                value: ' is not 0), a resize of the table occurs.',
                position: {
                  start: { line: 64, column: 313, offset: 3498 },
                  end: { line: 64, column: 354, offset: 3539 }
                }
              }
            ],
            position: {
              start: { line: 64, column: 1, offset: 3186 },
              end: { line: 64, column: 354, offset: 3539 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'During a table resize, each item of the table is added into a temporary storage file using the new table length calculated from the equation below:',
                position: {
                  start: { line: 66, column: 1, offset: 3541 },
                  end: { line: 66, column: 148, offset: 3688 }
                }
              }
            ],
            position: {
              start: { line: 66, column: 1, offset: 3541 },
              end: { line: 66, column: 148, offset: 3688 }
            }
          },
          {
            type: 'code',
            lang: null,
            meta: null,
            value: 'newTableLength = oldTableLength * resizeFactor',
            position: {
              start: { line: 68, column: 1, offset: 3690 },
              end: { line: 70, column: 4, offset: 3744 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Once all of the items have been added into the temporary storage file, the temporary storage file is moved to the location of the old storage file to be used as the new storage file.',
                position: {
                  start: { line: 72, column: 1, offset: 3746 },
                  end: { line: 72, column: 183, offset: 3928 }
                }
              }
            ],
            position: {
              start: { line: 72, column: 1, offset: 3746 },
              end: { line: 72, column: 183, offset: 3928 }
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
                  start: { line: 74, column: 4, offset: 3933 },
                  end: { line: 74, column: 48, offset: 3977 }
                }
              }
            ],
            position: {
              start: { line: 74, column: 1, offset: 3930 },
              end: { line: 74, column: 48, offset: 3977 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The value of ',
                position: {
                  start: { line: 75, column: 1, offset: 3978 },
                  end: { line: 75, column: 14, offset: 3991 }
                }
              },
              {
                type: 'inlineCode',
                value: 'degree',
                position: {
                  start: { line: 75, column: 14, offset: 3991 },
                  end: { line: 75, column: 22, offset: 3999 }
                }
              },
              {
                type: 'text',
                value: ' determines the structure of the internal b-tree used by the disk sorted hash table. A higher value for ',
                position: {
                  start: { line: 75, column: 22, offset: 3999 },
                  end: { line: 75, column: 126, offset: 4103 }
                }
              },
              {
                type: 'inlineCode',
                value: 'degree',
                position: {
                  start: { line: 75, column: 126, offset: 4103 },
                  end: { line: 75, column: 134, offset: 4111 }
                }
              },
              {
                type: 'text',
                value: ' results in a shorter b-tree and more items per b-tree node, while a lower value results in a taller b-tree and fewer items per b-tree node. The default value of 2 is a safe choice for most use cases.',
                position: {
                  start: { line: 75, column: 134, offset: 4111 },
                  end: { line: 75, column: 334, offset: 4311 }
                }
              }
            ],
            position: {
              start: { line: 75, column: 1, offset: 3978 },
              end: { line: 75, column: 334, offset: 4311 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 75, column: 334, offset: 4311 }
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
          'Returns an iterator of the values of all items in the disk sorted hash table sorted by sort-value. Item values are yielded in ascending order.\n' +
          '\n' +
          'If a starting sort-value and ending sort-value are provided, the iterator returns only values of items with sort-values between the starting and ending sort-values, including values of items with sort-values equal to the starting and ending sort-values. If only a starting sort-value is provided, the iterator returns values of items with sort-values greater than or equal to the starting sort-value. If only an ending sort-value is provided, the iterator returns values of items with sort-values less than or equal to the ending sort-value.\n' +
          '\n' +
          'If an exclusive start key is provided, the iterator returns values of items with sort-values greater than or equal to the sort-value of the item at the exclusive start key, not including the value of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort-value.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the values of all items in the disk sorted hash table.\n' +
          '  * `options`\n' +
          '    * `exclusiveStartKey` - `string` - the key after which to start iterating.\n' +
          '    * `startingSortValue` - `string|number` - the sort-value from which to start iterating.\n' +
          '    * `endingSortValue` - `string|number` - the sort-value at which to stop iterating.\n' +
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
                    value: 'Returns an iterator of the values of all items in the disk sorted hash table sorted by sort-value. Item values are yielded in ascending order.',
                    position: {
                      start: { line: 12, column: 1, offset: 286 },
                      end: { line: 12, column: 143, offset: 428 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 1, offset: 286 },
                  end: { line: 12, column: 143, offset: 428 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If a starting sort-value and ending sort-value are provided, the iterator returns only values of items with sort-values between the starting and ending sort-values, including values of items with sort-values equal to the starting and ending sort-values. If only a starting sort-value is provided, the iterator returns values of items with sort-values greater than or equal to the starting sort-value. If only an ending sort-value is provided, the iterator returns values of items with sort-values less than or equal to the ending sort-value.',
                    position: {
                      start: { line: 14, column: 1, offset: 430 },
                      end: { line: 14, column: 542, offset: 971 }
                    }
                  }
                ],
                position: {
                  start: { line: 14, column: 1, offset: 430 },
                  end: { line: 14, column: 542, offset: 971 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If an exclusive start key is provided, the iterator returns values of items with sort-values greater than or equal to the sort-value of the item at the exclusive start key, not including the value of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort-value.',
                    position: {
                      start: { line: 16, column: 1, offset: 973 },
                      end: { line: 16, column: 308, offset: 1280 }
                    }
                  }
                ],
                position: {
                  start: { line: 16, column: 1, offset: 973 },
                  end: { line: 16, column: 308, offset: 1280 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 18, column: 1, offset: 1282 },
                      end: { line: 18, column: 11, offset: 1292 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 1, offset: 1282 },
                  end: { line: 18, column: 11, offset: 1292 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                            value: '(none) - retrieves the values of all items in the disk sorted hash table.',
                            position: {
                              start: { line: 19, column: 5, offset: 1297 },
                              end: { line: 19, column: 78, offset: 1370 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 1297 },
                          end: { line: 19, column: 78, offset: 1370 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 19, column: 3, offset: 1295 },
                      end: { line: 19, column: 78, offset: 1370 }
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
                              start: { line: 20, column: 5, offset: 1375 },
                              end: { line: 20, column: 14, offset: 1384 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 20, column: 5, offset: 1375 },
                          end: { line: 20, column: 14, offset: 1384 }
                        }
                      },
                      {
                        type: 'list',
                        ordered: false,
                        start: null,
                        spread: false,
                        children: [
                          {
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
                                        offset: 1391
                                      },
                                      end: {
                                        line: 21,
                                        column: 26,
                                        offset: 1410
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
                                        offset: 1410
                                      },
                                      end: {
                                        line: 21,
                                        column: 29,
                                        offset: 1413
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
                                        offset: 1413
                                      },
                                      end: {
                                        line: 21,
                                        column: 37,
                                        offset: 1421
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
                                        offset: 1421
                                      },
                                      end: {
                                        line: 21,
                                        column: 79,
                                        offset: 1463
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 21, column: 7, offset: 1391 },
                                  end: {
                                    line: 21,
                                    column: 79,
                                    offset: 1463
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 5, offset: 1389 },
                              end: { line: 21, column: 79, offset: 1463 }
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
                                        offset: 1470
                                      },
                                      end: {
                                        line: 22,
                                        column: 26,
                                        offset: 1489
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
                                        offset: 1489
                                      },
                                      end: {
                                        line: 22,
                                        column: 29,
                                        offset: 1492
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
                                        offset: 1492
                                      },
                                      end: {
                                        line: 22,
                                        column: 44,
                                        offset: 1507
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort-value from which to start iterating.',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 44,
                                        offset: 1507
                                      },
                                      end: {
                                        line: 22,
                                        column: 92,
                                        offset: 1555
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 22, column: 7, offset: 1470 },
                                  end: {
                                    line: 22,
                                    column: 92,
                                    offset: 1555
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 22, column: 5, offset: 1468 },
                              end: { line: 22, column: 92, offset: 1555 }
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
                                        offset: 1562
                                      },
                                      end: {
                                        line: 23,
                                        column: 24,
                                        offset: 1579
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
                                        offset: 1579
                                      },
                                      end: {
                                        line: 23,
                                        column: 27,
                                        offset: 1582
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
                                        offset: 1582
                                      },
                                      end: {
                                        line: 23,
                                        column: 42,
                                        offset: 1597
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort-value at which to stop iterating.',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 42,
                                        offset: 1597
                                      },
                                      end: {
                                        line: 23,
                                        column: 87,
                                        offset: 1642
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 23, column: 7, offset: 1562 },
                                  end: {
                                    line: 23,
                                    column: 87,
                                    offset: 1642
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 23, column: 5, offset: 1560 },
                              end: { line: 23, column: 87, offset: 1642 }
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
                                        offset: 1649
                                      },
                                      end: {
                                        line: 24,
                                        column: 18,
                                        offset: 1660
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
                                        offset: 1660
                                      },
                                      end: {
                                        line: 24,
                                        column: 21,
                                        offset: 1663
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
                                        offset: 1663
                                      },
                                      end: {
                                        line: 24,
                                        column: 40,
                                        offset: 1682
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
                                        offset: 1682
                                      },
                                      end: {
                                        line: 24,
                                        column: 99,
                                        offset: 1741
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
                                        offset: 1741
                                      },
                                      end: {
                                        line: 24,
                                        column: 109,
                                        offset: 1751
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
                                        offset: 1751
                                      },
                                      end: {
                                        line: 24,
                                        column: 110,
                                        offset: 1752
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 24, column: 7, offset: 1649 },
                                  end: {
                                    line: 24,
                                    column: 110,
                                    offset: 1752
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
                                                offset: 1761
                                              },
                                              end: {
                                                line: 25,
                                                column: 19,
                                                offset: 1771
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
                                                offset: 1771
                                              },
                                              end: {
                                                line: 25,
                                                column: 38,
                                                offset: 1790
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
                                                offset: 1790
                                              },
                                              end: {
                                                line: 25,
                                                column: 46,
                                                offset: 1798
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
                                                offset: 1798
                                              },
                                              end: {
                                                line: 25,
                                                column: 54,
                                                offset: 1806
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 25,
                                            column: 9,
                                            offset: 1761
                                          },
                                          end: {
                                            line: 25,
                                            column: 54,
                                            offset: 1806
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 25,
                                        column: 7,
                                        offset: 1759
                                      },
                                      end: {
                                        line: 25,
                                        column: 54,
                                        offset: 1806
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
                                                offset: 1815
                                              },
                                              end: {
                                                line: 26,
                                                column: 19,
                                                offset: 1825
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
                                                offset: 1825
                                              },
                                              end: {
                                                line: 26,
                                                column: 38,
                                                offset: 1844
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
                                                offset: 1844
                                              },
                                              end: {
                                                line: 26,
                                                column: 46,
                                                offset: 1852
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
                                                offset: 1852
                                              },
                                              end: {
                                                line: 26,
                                                column: 54,
                                                offset: 1860
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 26,
                                            column: 9,
                                            offset: 1815
                                          },
                                          end: {
                                            line: 26,
                                            column: 54,
                                            offset: 1860
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 26,
                                        column: 7,
                                        offset: 1813
                                      },
                                      end: {
                                        line: 26,
                                        column: 54,
                                        offset: 1860
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 25, column: 7, offset: 1759 },
                                  end: {
                                    line: 26,
                                    column: 54,
                                    offset: 1860
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 24, column: 5, offset: 1647 },
                              end: { line: 26, column: 54, offset: 1860 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 5, offset: 1389 },
                          end: { line: 26, column: 54, offset: 1860 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 20, column: 3, offset: 1373 },
                      end: { line: 26, column: 54, offset: 1860 }
                    }
                  }
                ],
                position: {
                  start: { line: 19, column: 3, offset: 1295 },
                  end: { line: 26, column: 54, offset: 1860 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 28, column: 1, offset: 1862 },
                      end: { line: 28, column: 8, offset: 1869 }
                    }
                  }
                ],
                position: {
                  start: { line: 28, column: 1, offset: 1862 },
                  end: { line: 28, column: 8, offset: 1869 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 29, column: 5, offset: 1874 },
                              end: { line: 29, column: 13, offset: 1882 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 29, column: 13, offset: 1882 },
                              end: { line: 29, column: 16, offset: 1885 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncGenerator<string|Buffer>',
                            position: {
                              start: { line: 29, column: 16, offset: 1885 },
                              end: { line: 29, column: 47, offset: 1916 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the values of all items in the disk sorted hash table sorted by sort-value in ascending order.',
                            position: {
                              start: { line: 29, column: 47, offset: 1916 },
                              end: { line: 29, column: 165, offset: 2034 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 29, column: 5, offset: 1874 },
                          end: { line: 29, column: 165, offset: 2034 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 29, column: 3, offset: 1872 },
                      end: { line: 29, column: 165, offset: 2034 }
                    }
                  }
                ],
                position: {
                  start: { line: 29, column: 3, offset: 1872 },
                  end: { line: 29, column: 165, offset: 2034 }
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
                  start: { line: 31, column: 1, offset: 2036 },
                  end: { line: 55, column: 4, offset: 2737 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 55, column: 4, offset: 2737 }
            }
          }
        }
      },
      {
        name: 'reverseIterator',
        docs: '```coffeescript [specscript]\n' +
          'reverseIterator() -> values AsyncGenerator<string>\n' +
          '\n' +
          'reverseIterator(options {\n' +
          '  exclusiveStartKey: string,\n' +
          '  startingSortValue: string|number,\n' +
          '  endingSortValue: string|number,\n' +
          "  valueType: 'string'|'binary',\n" +
          '}) -> values AsyncGenerator<string|Buffer>\n' +
          '```\n' +
          '\n' +
          'Returns an iterator of the values of all items in the disk sorted hash table sorted by sort-value. Item values are yielded in descending order.\n' +
          '\n' +
          'If a starting sort-value and ending sort-value are provided, the iterator returns only values of items with sort-values between the starting and ending sort-values, including values of items with sort-values equal to the starting and ending sort-values. If only a starting sort-value is provided, the iterator returns values of items with sort-values less than or equal to the starting sort-value.\n' +
          '\n' +
          'If an exclusive start key is provided, the iterator returns values of items with sort-values less than or equal to the sort-value of the item at the exclusive start key, not including the value of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort-value.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the values of all items in the disk sorted hash table.\n' +
          '  * `options`\n' +
          '    * `exclusiveStartKey` - `string` - the key after which to start iterating.\n' +
          '    * `startingSortValue` - `string|number` - the sort-value from which to start iterating.\n' +
          '    * `endingSortValue` - `string|number` - the sort-value at which to stop iterating.\n' +
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
                value: 'reverseIterator() -> values AsyncGenerator<string>\n' +
                  '\n' +
                  'reverseIterator(options {\n' +
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
                    value: 'Returns an iterator of the values of all items in the disk sorted hash table sorted by sort-value. Item values are yielded in descending order.',
                    position: {
                      start: { line: 12, column: 1, offset: 286 },
                      end: { line: 12, column: 144, offset: 429 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 1, offset: 286 },
                  end: { line: 12, column: 144, offset: 429 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If a starting sort-value and ending sort-value are provided, the iterator returns only values of items with sort-values between the starting and ending sort-values, including values of items with sort-values equal to the starting and ending sort-values. If only a starting sort-value is provided, the iterator returns values of items with sort-values less than or equal to the starting sort-value.',
                    position: {
                      start: { line: 14, column: 1, offset: 431 },
                      end: { line: 14, column: 398, offset: 828 }
                    }
                  }
                ],
                position: {
                  start: { line: 14, column: 1, offset: 431 },
                  end: { line: 14, column: 398, offset: 828 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If an exclusive start key is provided, the iterator returns values of items with sort-values less than or equal to the sort-value of the item at the exclusive start key, not including the value of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort-value.',
                    position: {
                      start: { line: 16, column: 1, offset: 830 },
                      end: { line: 16, column: 305, offset: 1134 }
                    }
                  }
                ],
                position: {
                  start: { line: 16, column: 1, offset: 830 },
                  end: { line: 16, column: 305, offset: 1134 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 18, column: 1, offset: 1136 },
                      end: { line: 18, column: 11, offset: 1146 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 1, offset: 1136 },
                  end: { line: 18, column: 11, offset: 1146 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                            value: '(none) - retrieves the values of all items in the disk sorted hash table.',
                            position: {
                              start: { line: 19, column: 5, offset: 1151 },
                              end: { line: 19, column: 78, offset: 1224 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 1151 },
                          end: { line: 19, column: 78, offset: 1224 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 19, column: 3, offset: 1149 },
                      end: { line: 19, column: 78, offset: 1224 }
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
                              start: { line: 20, column: 5, offset: 1229 },
                              end: { line: 20, column: 14, offset: 1238 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 20, column: 5, offset: 1229 },
                          end: { line: 20, column: 14, offset: 1238 }
                        }
                      },
                      {
                        type: 'list',
                        ordered: false,
                        start: null,
                        spread: false,
                        children: [
                          {
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
                                        offset: 1245
                                      },
                                      end: {
                                        line: 21,
                                        column: 26,
                                        offset: 1264
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
                                        offset: 1264
                                      },
                                      end: {
                                        line: 21,
                                        column: 29,
                                        offset: 1267
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
                                        offset: 1267
                                      },
                                      end: {
                                        line: 21,
                                        column: 37,
                                        offset: 1275
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
                                        offset: 1275
                                      },
                                      end: {
                                        line: 21,
                                        column: 79,
                                        offset: 1317
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 21, column: 7, offset: 1245 },
                                  end: {
                                    line: 21,
                                    column: 79,
                                    offset: 1317
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 5, offset: 1243 },
                              end: { line: 21, column: 79, offset: 1317 }
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
                                        offset: 1324
                                      },
                                      end: {
                                        line: 22,
                                        column: 26,
                                        offset: 1343
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
                                        offset: 1343
                                      },
                                      end: {
                                        line: 22,
                                        column: 29,
                                        offset: 1346
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
                                        offset: 1346
                                      },
                                      end: {
                                        line: 22,
                                        column: 44,
                                        offset: 1361
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort-value from which to start iterating.',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 44,
                                        offset: 1361
                                      },
                                      end: {
                                        line: 22,
                                        column: 92,
                                        offset: 1409
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 22, column: 7, offset: 1324 },
                                  end: {
                                    line: 22,
                                    column: 92,
                                    offset: 1409
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 22, column: 5, offset: 1322 },
                              end: { line: 22, column: 92, offset: 1409 }
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
                                        offset: 1416
                                      },
                                      end: {
                                        line: 23,
                                        column: 24,
                                        offset: 1433
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
                                        offset: 1433
                                      },
                                      end: {
                                        line: 23,
                                        column: 27,
                                        offset: 1436
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
                                        offset: 1436
                                      },
                                      end: {
                                        line: 23,
                                        column: 42,
                                        offset: 1451
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort-value at which to stop iterating.',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 42,
                                        offset: 1451
                                      },
                                      end: {
                                        line: 23,
                                        column: 87,
                                        offset: 1496
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 23, column: 7, offset: 1416 },
                                  end: {
                                    line: 23,
                                    column: 87,
                                    offset: 1496
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 23, column: 5, offset: 1414 },
                              end: { line: 23, column: 87, offset: 1496 }
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
                                        offset: 1503
                                      },
                                      end: {
                                        line: 24,
                                        column: 18,
                                        offset: 1514
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
                                        offset: 1514
                                      },
                                      end: {
                                        line: 24,
                                        column: 21,
                                        offset: 1517
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
                                        offset: 1517
                                      },
                                      end: {
                                        line: 24,
                                        column: 40,
                                        offset: 1536
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
                                        offset: 1536
                                      },
                                      end: {
                                        line: 24,
                                        column: 99,
                                        offset: 1595
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
                                        offset: 1595
                                      },
                                      end: {
                                        line: 24,
                                        column: 109,
                                        offset: 1605
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
                                        offset: 1605
                                      },
                                      end: {
                                        line: 24,
                                        column: 110,
                                        offset: 1606
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 24, column: 7, offset: 1503 },
                                  end: {
                                    line: 24,
                                    column: 110,
                                    offset: 1606
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
                                                offset: 1615
                                              },
                                              end: {
                                                line: 25,
                                                column: 17,
                                                offset: 1623
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
                                                offset: 1623
                                              },
                                              end: {
                                                line: 25,
                                                column: 36,
                                                offset: 1642
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
                                                offset: 1642
                                              },
                                              end: {
                                                line: 25,
                                                column: 44,
                                                offset: 1650
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
                                                offset: 1650
                                              },
                                              end: {
                                                line: 25,
                                                column: 52,
                                                offset: 1658
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 25,
                                            column: 9,
                                            offset: 1615
                                          },
                                          end: {
                                            line: 25,
                                            column: 52,
                                            offset: 1658
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 25,
                                        column: 7,
                                        offset: 1613
                                      },
                                      end: {
                                        line: 25,
                                        column: 52,
                                        offset: 1658
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
                                                offset: 1667
                                              },
                                              end: {
                                                line: 26,
                                                column: 17,
                                                offset: 1675
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
                                                offset: 1675
                                              },
                                              end: {
                                                line: 26,
                                                column: 36,
                                                offset: 1694
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
                                                offset: 1694
                                              },
                                              end: {
                                                line: 26,
                                                column: 44,
                                                offset: 1702
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
                                                offset: 1702
                                              },
                                              end: {
                                                line: 26,
                                                column: 52,
                                                offset: 1710
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 26,
                                            column: 9,
                                            offset: 1667
                                          },
                                          end: {
                                            line: 26,
                                            column: 52,
                                            offset: 1710
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 26,
                                        column: 7,
                                        offset: 1665
                                      },
                                      end: {
                                        line: 26,
                                        column: 52,
                                        offset: 1710
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 25, column: 7, offset: 1613 },
                                  end: {
                                    line: 26,
                                    column: 52,
                                    offset: 1710
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 24, column: 5, offset: 1501 },
                              end: { line: 26, column: 52, offset: 1710 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 5, offset: 1243 },
                          end: { line: 26, column: 52, offset: 1710 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 20, column: 3, offset: 1227 },
                      end: { line: 26, column: 52, offset: 1710 }
                    }
                  }
                ],
                position: {
                  start: { line: 19, column: 3, offset: 1149 },
                  end: { line: 26, column: 52, offset: 1710 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 28, column: 1, offset: 1712 },
                      end: { line: 28, column: 8, offset: 1719 }
                    }
                  }
                ],
                position: {
                  start: { line: 28, column: 1, offset: 1712 },
                  end: { line: 28, column: 8, offset: 1719 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 29, column: 5, offset: 1724 },
                              end: { line: 29, column: 13, offset: 1732 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 29, column: 13, offset: 1732 },
                              end: { line: 29, column: 16, offset: 1735 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncGenerator<string|Buffer>',
                            position: {
                              start: { line: 29, column: 16, offset: 1735 },
                              end: { line: 29, column: 47, offset: 1766 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the values of all items in the disk sorted hash table sorted by sort-value in descending order.',
                            position: {
                              start: { line: 29, column: 47, offset: 1766 },
                              end: { line: 29, column: 166, offset: 1885 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 29, column: 5, offset: 1724 },
                          end: { line: 29, column: 166, offset: 1885 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 29, column: 3, offset: 1722 },
                      end: { line: 29, column: 166, offset: 1885 }
                    }
                  }
                ],
                position: {
                  start: { line: 29, column: 3, offset: 1722 },
                  end: { line: 29, column: 166, offset: 1885 }
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
                  start: { line: 31, column: 1, offset: 1887 },
                  end: { line: 55, column: 4, offset: 2588 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 55, column: 4, offset: 2588 }
            }
          }
        }
      },
      {
        name: 'forwardEntriesIterator',
        docs: '```coffeescript [specscript]\n' +
          'forwardEntriesIterator() -> entries AsyncGenerator<[key string, value string, sortValue string|number]>\n' +
          '\n' +
          'forwardEntriesIterator(options {\n' +
          '  exclusiveStartKey: string,\n' +
          '  startingSortValue: string|number,\n' +
          '  endingSortValue: string|number,\n' +
          "  valueType: 'string'|'binary',\n" +
          '}) -> entries AsyncGenerator<[key string, value string|Buffer, sortValue string|number]>\n' +
          '```\n' +
          '\n' +
          'Returns an iterator of the entries (key, value, and sort-value) of all items in the disk sorted hash table sorted by sort-value. Item entries are yielded in ascending order.\n' +
          '\n' +
          'If a starting sort-value and ending sort-value are provided, the iterator returns only entries of items with sort-values between the starting and ending sort-values, including entries of items with sort-values equal to the starting and ending sort-values. If only a starting sort-value is provided, the iterator returns entries of items with sort-values greater than or equal to the starting sort-value. If only an ending sort-value is provided, the iterator returns entries of items with sort-values less than or equal to the ending sort-value.\n' +
          '\n' +
          'If an exclusive start key is provided, the iterator returns entries of items with sort-values greater than or equal to the sort-value of the item at the exclusive start key, not including the entry of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort-value.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the entries of all items in the disk sorted hash table.\n' +
          '  * `options`\n' +
          '    * `exclusiveStartKey` - `string` - the key after which to start iterating.\n' +
          '    * `startingSortValue` - `string|number` - the sort-value from which to start iterating.\n' +
          '    * `endingSortValue` - `string|number` - the sort-value at which to stop iterating.\n' +
          "    * `valueType` - `'string'|'binary'` - the type of value that the iterator yields. Defaults to `'string'`.\n" +
          "      * `'string'` - iterator yields entries with `string` values.\n" +
          "      * `'binary'` - iterator yields entries with `Buffer` values.\n" +
          '\n' +
          'Return:\n' +
          '  * `entries` - `AsyncGenerator<[key string, value string|Buffer, sortValue string|number]>` - an async iterator of the entries of all items in the disk sorted hash table sorted by sort-value in ascending order.\n' +
          '\n' +
          '```javascript\n' +
          "await ht.set('key1', 'value1', 1)\n" +
          "await ht.set('key2', 'value2', 2)\n" +
          "await ht.set('key3', 'value3', 3)\n" +
          '\n' +
          'for await (const [key, value, sortValue] of ht.forwardEntriesIterator()) {\n' +
          '  console.log(key, value, sortValue) // key1 value1 1\n' +
          '                                     // key2 value2 2\n' +
          '                                     // key3 value3 3\n' +
          '}\n' +
          '\n' +
          'for await (const [key, value, sortValue] of ht.forwardEntriesIterator({ startingSortValue: 2, endingSortValue: 3 })) {\n' +
          '  console.log(key, value, sortValue) // key2 value2 2\n' +
          '                                     // key3 value3 3\n' +
          '}\n' +
          '\n' +
          "for await (const [key, value, sortValue] of ht.forwardEntriesIterator({ exclusiveStartKey: 'key1' })) {\n" +
          '  console.log(key, value, sortValue) // key2 value2 2\n' +
          '                                     // key3 value3 3\n' +
          '}\n' +
          '\n' +
          "for await (const [key, value, sortValue] of ht.forwardEntriesIterator({ exclusiveStartKey: 'key1', endingSortValue: 2 })) {\n" +
          '  console.log(key, value, sortValue) // key2 value2 2\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'forwardEntriesIterator() -> entries AsyncGenerator<[key string, value string, sortValue string|number]>\n' +
                  '\n' +
                  'forwardEntriesIterator(options {\n' +
                  '  exclusiveStartKey: string,\n' +
                  '  startingSortValue: string|number,\n' +
                  '  endingSortValue: string|number,\n' +
                  "  valueType: 'string'|'binary',\n" +
                  '}) -> entries AsyncGenerator<[key string, value string|Buffer, sortValue string|number]>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 10, column: 4, offset: 390 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns an iterator of the entries (key, value, and sort-value) of all items in the disk sorted hash table sorted by sort-value. Item entries are yielded in ascending order.',
                    position: {
                      start: { line: 12, column: 1, offset: 392 },
                      end: { line: 12, column: 174, offset: 565 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 1, offset: 392 },
                  end: { line: 12, column: 174, offset: 565 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If a starting sort-value and ending sort-value are provided, the iterator returns only entries of items with sort-values between the starting and ending sort-values, including entries of items with sort-values equal to the starting and ending sort-values. If only a starting sort-value is provided, the iterator returns entries of items with sort-values greater than or equal to the starting sort-value. If only an ending sort-value is provided, the iterator returns entries of items with sort-values less than or equal to the ending sort-value.',
                    position: {
                      start: { line: 14, column: 1, offset: 567 },
                      end: { line: 14, column: 546, offset: 1112 }
                    }
                  }
                ],
                position: {
                  start: { line: 14, column: 1, offset: 567 },
                  end: { line: 14, column: 546, offset: 1112 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If an exclusive start key is provided, the iterator returns entries of items with sort-values greater than or equal to the sort-value of the item at the exclusive start key, not including the entry of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort-value.',
                    position: {
                      start: { line: 16, column: 1, offset: 1114 },
                      end: { line: 16, column: 309, offset: 1422 }
                    }
                  }
                ],
                position: {
                  start: { line: 16, column: 1, offset: 1114 },
                  end: { line: 16, column: 309, offset: 1422 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 18, column: 1, offset: 1424 },
                      end: { line: 18, column: 11, offset: 1434 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 1, offset: 1424 },
                  end: { line: 18, column: 11, offset: 1434 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                            value: '(none) - retrieves the entries of all items in the disk sorted hash table.',
                            position: {
                              start: { line: 19, column: 5, offset: 1439 },
                              end: { line: 19, column: 79, offset: 1513 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 1439 },
                          end: { line: 19, column: 79, offset: 1513 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 19, column: 3, offset: 1437 },
                      end: { line: 19, column: 79, offset: 1513 }
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
                              start: { line: 20, column: 5, offset: 1518 },
                              end: { line: 20, column: 14, offset: 1527 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 20, column: 5, offset: 1518 },
                          end: { line: 20, column: 14, offset: 1527 }
                        }
                      },
                      {
                        type: 'list',
                        ordered: false,
                        start: null,
                        spread: false,
                        children: [
                          {
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
                                        offset: 1534
                                      },
                                      end: {
                                        line: 21,
                                        column: 26,
                                        offset: 1553
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
                                        offset: 1553
                                      },
                                      end: {
                                        line: 21,
                                        column: 29,
                                        offset: 1556
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
                                        offset: 1556
                                      },
                                      end: {
                                        line: 21,
                                        column: 37,
                                        offset: 1564
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
                                        offset: 1564
                                      },
                                      end: {
                                        line: 21,
                                        column: 79,
                                        offset: 1606
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 21, column: 7, offset: 1534 },
                                  end: {
                                    line: 21,
                                    column: 79,
                                    offset: 1606
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 5, offset: 1532 },
                              end: { line: 21, column: 79, offset: 1606 }
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
                                        offset: 1613
                                      },
                                      end: {
                                        line: 22,
                                        column: 26,
                                        offset: 1632
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
                                        offset: 1632
                                      },
                                      end: {
                                        line: 22,
                                        column: 29,
                                        offset: 1635
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
                                        offset: 1635
                                      },
                                      end: {
                                        line: 22,
                                        column: 44,
                                        offset: 1650
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort-value from which to start iterating.',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 44,
                                        offset: 1650
                                      },
                                      end: {
                                        line: 22,
                                        column: 92,
                                        offset: 1698
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 22, column: 7, offset: 1613 },
                                  end: {
                                    line: 22,
                                    column: 92,
                                    offset: 1698
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 22, column: 5, offset: 1611 },
                              end: { line: 22, column: 92, offset: 1698 }
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
                                        offset: 1705
                                      },
                                      end: {
                                        line: 23,
                                        column: 24,
                                        offset: 1722
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
                                        offset: 1722
                                      },
                                      end: {
                                        line: 23,
                                        column: 27,
                                        offset: 1725
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
                                        offset: 1725
                                      },
                                      end: {
                                        line: 23,
                                        column: 42,
                                        offset: 1740
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort-value at which to stop iterating.',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 42,
                                        offset: 1740
                                      },
                                      end: {
                                        line: 23,
                                        column: 87,
                                        offset: 1785
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 23, column: 7, offset: 1705 },
                                  end: {
                                    line: 23,
                                    column: 87,
                                    offset: 1785
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 23, column: 5, offset: 1703 },
                              end: { line: 23, column: 87, offset: 1785 }
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
                                        offset: 1792
                                      },
                                      end: {
                                        line: 24,
                                        column: 18,
                                        offset: 1803
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
                                        offset: 1803
                                      },
                                      end: {
                                        line: 24,
                                        column: 21,
                                        offset: 1806
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
                                        offset: 1806
                                      },
                                      end: {
                                        line: 24,
                                        column: 40,
                                        offset: 1825
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
                                        offset: 1825
                                      },
                                      end: {
                                        line: 24,
                                        column: 99,
                                        offset: 1884
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
                                        offset: 1884
                                      },
                                      end: {
                                        line: 24,
                                        column: 109,
                                        offset: 1894
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
                                        offset: 1894
                                      },
                                      end: {
                                        line: 24,
                                        column: 110,
                                        offset: 1895
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 24, column: 7, offset: 1792 },
                                  end: {
                                    line: 24,
                                    column: 110,
                                    offset: 1895
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
                                                offset: 1904
                                              },
                                              end: {
                                                line: 25,
                                                column: 19,
                                                offset: 1914
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - iterator yields entries with ',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 19,
                                                offset: 1914
                                              },
                                              end: {
                                                line: 25,
                                                column: 51,
                                                offset: 1946
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'string',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 51,
                                                offset: 1946
                                              },
                                              end: {
                                                line: 25,
                                                column: 59,
                                                offset: 1954
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 59,
                                                offset: 1954
                                              },
                                              end: {
                                                line: 25,
                                                column: 67,
                                                offset: 1962
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 25,
                                            column: 9,
                                            offset: 1904
                                          },
                                          end: {
                                            line: 25,
                                            column: 67,
                                            offset: 1962
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 25,
                                        column: 7,
                                        offset: 1902
                                      },
                                      end: {
                                        line: 25,
                                        column: 67,
                                        offset: 1962
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
                                                offset: 1971
                                              },
                                              end: {
                                                line: 26,
                                                column: 19,
                                                offset: 1981
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - iterator yields entries with ',
                                            position: {
                                              start: {
                                                line: 26,
                                                column: 19,
                                                offset: 1981
                                              },
                                              end: {
                                                line: 26,
                                                column: 51,
                                                offset: 2013
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'Buffer',
                                            position: {
                                              start: {
                                                line: 26,
                                                column: 51,
                                                offset: 2013
                                              },
                                              end: {
                                                line: 26,
                                                column: 59,
                                                offset: 2021
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 26,
                                                column: 59,
                                                offset: 2021
                                              },
                                              end: {
                                                line: 26,
                                                column: 67,
                                                offset: 2029
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 26,
                                            column: 9,
                                            offset: 1971
                                          },
                                          end: {
                                            line: 26,
                                            column: 67,
                                            offset: 2029
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 26,
                                        column: 7,
                                        offset: 1969
                                      },
                                      end: {
                                        line: 26,
                                        column: 67,
                                        offset: 2029
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 25, column: 7, offset: 1902 },
                                  end: {
                                    line: 26,
                                    column: 67,
                                    offset: 2029
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 24, column: 5, offset: 1790 },
                              end: { line: 26, column: 67, offset: 2029 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 5, offset: 1532 },
                          end: { line: 26, column: 67, offset: 2029 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 20, column: 3, offset: 1516 },
                      end: { line: 26, column: 67, offset: 2029 }
                    }
                  }
                ],
                position: {
                  start: { line: 19, column: 3, offset: 1437 },
                  end: { line: 26, column: 67, offset: 2029 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 28, column: 1, offset: 2031 },
                      end: { line: 28, column: 8, offset: 2038 }
                    }
                  }
                ],
                position: {
                  start: { line: 28, column: 1, offset: 2031 },
                  end: { line: 28, column: 8, offset: 2038 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 29, column: 5, offset: 2043 },
                              end: { line: 29, column: 14, offset: 2052 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 29, column: 14, offset: 2052 },
                              end: { line: 29, column: 17, offset: 2055 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncGenerator<[key string, value string|Buffer, sortValue string|number]>',
                            position: {
                              start: { line: 29, column: 17, offset: 2055 },
                              end: { line: 29, column: 93, offset: 2131 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the entries of all items in the disk sorted hash table sorted by sort-value in ascending order.',
                            position: {
                              start: { line: 29, column: 93, offset: 2131 },
                              end: { line: 29, column: 212, offset: 2250 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 29, column: 5, offset: 2043 },
                          end: { line: 29, column: 212, offset: 2250 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 29, column: 3, offset: 2041 },
                      end: { line: 29, column: 212, offset: 2250 }
                    }
                  }
                ],
                position: {
                  start: { line: 29, column: 3, offset: 2041 },
                  end: { line: 29, column: 212, offset: 2250 }
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
                  'for await (const [key, value, sortValue] of ht.forwardEntriesIterator()) {\n' +
                  '  console.log(key, value, sortValue) // key1 value1 1\n' +
                  '                                     // key2 value2 2\n' +
                  '                                     // key3 value3 3\n' +
                  '}\n' +
                  '\n' +
                  'for await (const [key, value, sortValue] of ht.forwardEntriesIterator({ startingSortValue: 2, endingSortValue: 3 })) {\n' +
                  '  console.log(key, value, sortValue) // key2 value2 2\n' +
                  '                                     // key3 value3 3\n' +
                  '}\n' +
                  '\n' +
                  "for await (const [key, value, sortValue] of ht.forwardEntriesIterator({ exclusiveStartKey: 'key1' })) {\n" +
                  '  console.log(key, value, sortValue) // key2 value2 2\n' +
                  '                                     // key3 value3 3\n' +
                  '}\n' +
                  '\n' +
                  "for await (const [key, value, sortValue] of ht.forwardEntriesIterator({ exclusiveStartKey: 'key1', endingSortValue: 2 })) {\n" +
                  '  console.log(key, value, sortValue) // key2 value2 2\n' +
                  '}',
                position: {
                  start: { line: 31, column: 1, offset: 2252 },
                  end: { line: 55, column: 4, offset: 3237 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 55, column: 4, offset: 3237 }
            }
          }
        }
      },
      {
        name: 'reverseEntriesIterator',
        docs: '```coffeescript [specscript]\n' +
          'reverseEntriesIterator() -> entries AsyncGenerator<[key string, value string, sortValue string|number]>\n' +
          '\n' +
          'reverseEntriesIterator(options {\n' +
          '  exclusiveStartKey: string,\n' +
          '  startingSortValue: string|number,\n' +
          '  endingSortValue: string|number,\n' +
          "  valueType: 'string'|'binary',\n" +
          '}) -> entries AsyncGenerator<[key string, value string|Buffer, sortValue string|number]>\n' +
          '```\n' +
          '\n' +
          'Returns an iterator of the entries (key, value, and sort-value) of all items in the disk sorted hash table sorted by sort-value. Item entries are yielded in descending order.\n' +
          '\n' +
          'If a starting sort-value and ending sort-value are provided, the iterator returns only entries of items with sort-values between the starting and ending sort-values, including entries of items with sort-values equal to the starting and ending sort-values. If only a starting sort-value is provided, the iterator returns entries of items with sort-values less than or equal to the starting sort-value.\n' +
          '\n' +
          'If an exclusive start key is provided, the iterator returns entries of items with sort-values less than or equal to the sort-value of the item at the exclusive start key, not including the entry of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort-value.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the entries of all items in the disk sorted hash table.\n' +
          '  * `options`\n' +
          '    * `exclusiveStartKey` - `string` - the key after which to start iterating.\n' +
          '    * `startingSortValue` - `string|number` - the sort-value from which to start iterating.\n' +
          '    * `endingSortValue` - `string|number` - the sort-value at which to stop iterating.\n' +
          "    * `valueType` - `'string'|'binary'` - the type of value that the iterator yields. Defaults to `'string'`.\n" +
          '      * `string` - iterator yields entries with `string` values.\n' +
          '      * `binary` - iterator yields entries with `Buffer` values.\n' +
          '\n' +
          'Return:\n' +
          '  * `entries` - `AsyncGenerator<[key string, value string|Buffer, sortValue string|number]>` - an async iterator of the entries of all items in the disk sorted hash table sorted by sort-value in descending order.\n' +
          '\n' +
          '```javascript\n' +
          "await ht.set('key1', 'value1', 1)\n" +
          "await ht.set('key2', 'value2', 2)\n" +
          "await ht.set('key3', 'value3', 3)\n" +
          '\n' +
          'for await (const [key, value, sortValue] of ht.reverseEntriesIterator()) {\n' +
          '  console.log(key, value, sortValue) // key3 value3 3\n' +
          '                                     // key2 value2 2\n' +
          '                                     // key1 value1 1\n' +
          '}\n' +
          '\n' +
          'for await (const [key, value, sortValue] of ht.reverseEntriesIterator({ startingSortValue: 2, endingSortValue: 1 })) {\n' +
          '  console.log(key, value, sortValue) // key2 value2 2\n' +
          '                                     // key1 value1 1\n' +
          '}\n' +
          '\n' +
          "for await (const [key, value, sortValue] of ht.reverseEntriesIterator({ exclusiveStartKey: 'key3' })) {\n" +
          '  console.log(key, value, sortValue) // key2 value2 2\n' +
          '                                     // key1 value1 1\n' +
          '}\n' +
          '\n' +
          "for await (const [key, value, sortValue] of ht.reverseEntriesIterator({ exclusiveStartKey: 'key3', endingSortValue: 2 })) {\n" +
          '  console.log(key, value, sortValue) // key2 value2 2\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'reverseEntriesIterator() -> entries AsyncGenerator<[key string, value string, sortValue string|number]>\n' +
                  '\n' +
                  'reverseEntriesIterator(options {\n' +
                  '  exclusiveStartKey: string,\n' +
                  '  startingSortValue: string|number,\n' +
                  '  endingSortValue: string|number,\n' +
                  "  valueType: 'string'|'binary',\n" +
                  '}) -> entries AsyncGenerator<[key string, value string|Buffer, sortValue string|number]>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 10, column: 4, offset: 390 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns an iterator of the entries (key, value, and sort-value) of all items in the disk sorted hash table sorted by sort-value. Item entries are yielded in descending order.',
                    position: {
                      start: { line: 12, column: 1, offset: 392 },
                      end: { line: 12, column: 175, offset: 566 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 1, offset: 392 },
                  end: { line: 12, column: 175, offset: 566 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If a starting sort-value and ending sort-value are provided, the iterator returns only entries of items with sort-values between the starting and ending sort-values, including entries of items with sort-values equal to the starting and ending sort-values. If only a starting sort-value is provided, the iterator returns entries of items with sort-values less than or equal to the starting sort-value.',
                    position: {
                      start: { line: 14, column: 1, offset: 568 },
                      end: { line: 14, column: 401, offset: 968 }
                    }
                  }
                ],
                position: {
                  start: { line: 14, column: 1, offset: 568 },
                  end: { line: 14, column: 401, offset: 968 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If an exclusive start key is provided, the iterator returns entries of items with sort-values less than or equal to the sort-value of the item at the exclusive start key, not including the entry of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort-value.',
                    position: {
                      start: { line: 16, column: 1, offset: 970 },
                      end: { line: 16, column: 306, offset: 1275 }
                    }
                  }
                ],
                position: {
                  start: { line: 16, column: 1, offset: 970 },
                  end: { line: 16, column: 306, offset: 1275 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 18, column: 1, offset: 1277 },
                      end: { line: 18, column: 11, offset: 1287 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 1, offset: 1277 },
                  end: { line: 18, column: 11, offset: 1287 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                            value: '(none) - retrieves the entries of all items in the disk sorted hash table.',
                            position: {
                              start: { line: 19, column: 5, offset: 1292 },
                              end: { line: 19, column: 79, offset: 1366 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 1292 },
                          end: { line: 19, column: 79, offset: 1366 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 19, column: 3, offset: 1290 },
                      end: { line: 19, column: 79, offset: 1366 }
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
                              start: { line: 20, column: 5, offset: 1371 },
                              end: { line: 20, column: 14, offset: 1380 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 20, column: 5, offset: 1371 },
                          end: { line: 20, column: 14, offset: 1380 }
                        }
                      },
                      {
                        type: 'list',
                        ordered: false,
                        start: null,
                        spread: false,
                        children: [
                          {
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
                                        offset: 1387
                                      },
                                      end: {
                                        line: 21,
                                        column: 26,
                                        offset: 1406
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
                                        offset: 1406
                                      },
                                      end: {
                                        line: 21,
                                        column: 29,
                                        offset: 1409
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
                                        offset: 1409
                                      },
                                      end: {
                                        line: 21,
                                        column: 37,
                                        offset: 1417
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
                                        offset: 1417
                                      },
                                      end: {
                                        line: 21,
                                        column: 79,
                                        offset: 1459
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 21, column: 7, offset: 1387 },
                                  end: {
                                    line: 21,
                                    column: 79,
                                    offset: 1459
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 5, offset: 1385 },
                              end: { line: 21, column: 79, offset: 1459 }
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
                                        offset: 1466
                                      },
                                      end: {
                                        line: 22,
                                        column: 26,
                                        offset: 1485
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
                                        offset: 1485
                                      },
                                      end: {
                                        line: 22,
                                        column: 29,
                                        offset: 1488
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
                                        offset: 1488
                                      },
                                      end: {
                                        line: 22,
                                        column: 44,
                                        offset: 1503
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort-value from which to start iterating.',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 44,
                                        offset: 1503
                                      },
                                      end: {
                                        line: 22,
                                        column: 92,
                                        offset: 1551
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 22, column: 7, offset: 1466 },
                                  end: {
                                    line: 22,
                                    column: 92,
                                    offset: 1551
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 22, column: 5, offset: 1464 },
                              end: { line: 22, column: 92, offset: 1551 }
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
                                        offset: 1558
                                      },
                                      end: {
                                        line: 23,
                                        column: 24,
                                        offset: 1575
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
                                        offset: 1575
                                      },
                                      end: {
                                        line: 23,
                                        column: 27,
                                        offset: 1578
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
                                        offset: 1578
                                      },
                                      end: {
                                        line: 23,
                                        column: 42,
                                        offset: 1593
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort-value at which to stop iterating.',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 42,
                                        offset: 1593
                                      },
                                      end: {
                                        line: 23,
                                        column: 87,
                                        offset: 1638
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 23, column: 7, offset: 1558 },
                                  end: {
                                    line: 23,
                                    column: 87,
                                    offset: 1638
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 23, column: 5, offset: 1556 },
                              end: { line: 23, column: 87, offset: 1638 }
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
                                        offset: 1645
                                      },
                                      end: {
                                        line: 24,
                                        column: 18,
                                        offset: 1656
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
                                        offset: 1656
                                      },
                                      end: {
                                        line: 24,
                                        column: 21,
                                        offset: 1659
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
                                        offset: 1659
                                      },
                                      end: {
                                        line: 24,
                                        column: 40,
                                        offset: 1678
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
                                        offset: 1678
                                      },
                                      end: {
                                        line: 24,
                                        column: 99,
                                        offset: 1737
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
                                        offset: 1737
                                      },
                                      end: {
                                        line: 24,
                                        column: 109,
                                        offset: 1747
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
                                        offset: 1747
                                      },
                                      end: {
                                        line: 24,
                                        column: 110,
                                        offset: 1748
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 24, column: 7, offset: 1645 },
                                  end: {
                                    line: 24,
                                    column: 110,
                                    offset: 1748
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
                                                offset: 1757
                                              },
                                              end: {
                                                line: 25,
                                                column: 17,
                                                offset: 1765
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - iterator yields entries with ',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 17,
                                                offset: 1765
                                              },
                                              end: {
                                                line: 25,
                                                column: 49,
                                                offset: 1797
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'string',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 49,
                                                offset: 1797
                                              },
                                              end: {
                                                line: 25,
                                                column: 57,
                                                offset: 1805
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 25,
                                                column: 57,
                                                offset: 1805
                                              },
                                              end: {
                                                line: 25,
                                                column: 65,
                                                offset: 1813
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 25,
                                            column: 9,
                                            offset: 1757
                                          },
                                          end: {
                                            line: 25,
                                            column: 65,
                                            offset: 1813
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 25,
                                        column: 7,
                                        offset: 1755
                                      },
                                      end: {
                                        line: 25,
                                        column: 65,
                                        offset: 1813
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
                                                offset: 1822
                                              },
                                              end: {
                                                line: 26,
                                                column: 17,
                                                offset: 1830
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - iterator yields entries with ',
                                            position: {
                                              start: {
                                                line: 26,
                                                column: 17,
                                                offset: 1830
                                              },
                                              end: {
                                                line: 26,
                                                column: 49,
                                                offset: 1862
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'Buffer',
                                            position: {
                                              start: {
                                                line: 26,
                                                column: 49,
                                                offset: 1862
                                              },
                                              end: {
                                                line: 26,
                                                column: 57,
                                                offset: 1870
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 26,
                                                column: 57,
                                                offset: 1870
                                              },
                                              end: {
                                                line: 26,
                                                column: 65,
                                                offset: 1878
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 26,
                                            column: 9,
                                            offset: 1822
                                          },
                                          end: {
                                            line: 26,
                                            column: 65,
                                            offset: 1878
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 26,
                                        column: 7,
                                        offset: 1820
                                      },
                                      end: {
                                        line: 26,
                                        column: 65,
                                        offset: 1878
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 25, column: 7, offset: 1755 },
                                  end: {
                                    line: 26,
                                    column: 65,
                                    offset: 1878
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 24, column: 5, offset: 1643 },
                              end: { line: 26, column: 65, offset: 1878 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 5, offset: 1385 },
                          end: { line: 26, column: 65, offset: 1878 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 20, column: 3, offset: 1369 },
                      end: { line: 26, column: 65, offset: 1878 }
                    }
                  }
                ],
                position: {
                  start: { line: 19, column: 3, offset: 1290 },
                  end: { line: 26, column: 65, offset: 1878 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 28, column: 1, offset: 1880 },
                      end: { line: 28, column: 8, offset: 1887 }
                    }
                  }
                ],
                position: {
                  start: { line: 28, column: 1, offset: 1880 },
                  end: { line: 28, column: 8, offset: 1887 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 29, column: 5, offset: 1892 },
                              end: { line: 29, column: 14, offset: 1901 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 29, column: 14, offset: 1901 },
                              end: { line: 29, column: 17, offset: 1904 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncGenerator<[key string, value string|Buffer, sortValue string|number]>',
                            position: {
                              start: { line: 29, column: 17, offset: 1904 },
                              end: { line: 29, column: 93, offset: 1980 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the entries of all items in the disk sorted hash table sorted by sort-value in descending order.',
                            position: {
                              start: { line: 29, column: 93, offset: 1980 },
                              end: { line: 29, column: 213, offset: 2100 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 29, column: 5, offset: 1892 },
                          end: { line: 29, column: 213, offset: 2100 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 29, column: 3, offset: 1890 },
                      end: { line: 29, column: 213, offset: 2100 }
                    }
                  }
                ],
                position: {
                  start: { line: 29, column: 3, offset: 1890 },
                  end: { line: 29, column: 213, offset: 2100 }
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
                  'for await (const [key, value, sortValue] of ht.reverseEntriesIterator()) {\n' +
                  '  console.log(key, value, sortValue) // key3 value3 3\n' +
                  '                                     // key2 value2 2\n' +
                  '                                     // key1 value1 1\n' +
                  '}\n' +
                  '\n' +
                  'for await (const [key, value, sortValue] of ht.reverseEntriesIterator({ startingSortValue: 2, endingSortValue: 1 })) {\n' +
                  '  console.log(key, value, sortValue) // key2 value2 2\n' +
                  '                                     // key1 value1 1\n' +
                  '}\n' +
                  '\n' +
                  "for await (const [key, value, sortValue] of ht.reverseEntriesIterator({ exclusiveStartKey: 'key3' })) {\n" +
                  '  console.log(key, value, sortValue) // key2 value2 2\n' +
                  '                                     // key1 value1 1\n' +
                  '}\n' +
                  '\n' +
                  "for await (const [key, value, sortValue] of ht.reverseEntriesIterator({ exclusiveStartKey: 'key3', endingSortValue: 2 })) {\n" +
                  '  console.log(key, value, sortValue) // key2 value2 2\n' +
                  '}',
                position: {
                  start: { line: 31, column: 1, offset: 2102 },
                  end: { line: 55, column: 4, offset: 3087 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 55, column: 4, offset: 3087 }
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