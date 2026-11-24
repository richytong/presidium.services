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
      '    * `storagePath` - `string` - the path to the file that stores the disk hash table data.\n' +
      '    * `headerPath` - `string` - the path to the file that stores the header information about the disk hash table.\n' +
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
      '  storagePath: "/path/to/storage-file",\n' +
      '  headerPath: "/path/to/header-file",\n' +
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
      'When an item is inserted into the disk hash table via [set](/docs/DiskHashTable#set), the current capacity ratio of the table is calculated as the sum of the table"s count and deleted count divided by the table"s length. If the current capacity ratio exceeds the `resizeRatio` (and the `resizeRatio` is not 0), a resize of the table occurs.\n' +
      '\n' +
      'During a table resize, each item of the table is added into a temporary storage file using the new table length calculated from the equation below:\n' +
      '\n' +
      '```\n' +
      'newTableLength = oldTableLength * resizeFactor\n' +
      '```\n' +
      '\n' +
      'Once all of the items have been added into the temporary storage file, the temporary storage file is moved to the location of the old storage file.\n' +
      '\n' +
      '## Number of Running Instances\n' +
      'There should only be one instance of a DiskHashTable running per storage and header file per machine at a time.',
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
                                value: ' - the path to the file that stores the disk hash table data.',
                                position: {
                                  start: { line: 16, column: 31, offset: 360 },
                                  end: { line: 16, column: 92, offset: 421 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 16, column: 7, offset: 336 },
                              end: { line: 16, column: 92, offset: 421 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 16, column: 5, offset: 334 },
                          end: { line: 16, column: 92, offset: 421 }
                        }
                      },
                      {
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
                                  start: { line: 17, column: 7, offset: 428 },
                                  end: { line: 17, column: 19, offset: 440 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 17, column: 19, offset: 440 },
                                  end: { line: 17, column: 22, offset: 443 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'string',
                                position: {
                                  start: { line: 17, column: 22, offset: 443 },
                                  end: { line: 17, column: 30, offset: 451 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the path to the file that stores the header information about the disk hash table.',
                                position: {
                                  start: { line: 17, column: 30, offset: 451 },
                                  end: {
                                    line: 17,
                                    column: 115,
                                    offset: 536
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 17, column: 7, offset: 428 },
                              end: { line: 17, column: 115, offset: 536 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 17, column: 5, offset: 426 },
                          end: { line: 17, column: 115, offset: 536 }
                        }
                      },
                      {
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
              '  storagePath: "/path/to/storage-file",\n' +
              '  headerPath: "/path/to/header-file",\n' +
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
                value: ', the current capacity ratio of the table is calculated as the sum of the table"s count and deleted count divided by the table"s length. If the current capacity ratio exceeds the ',
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
                value: 'Once all of the items have been added into the temporary storage file, the temporary storage file is moved to the location of the old storage file.',
                position: {
                  start: { line: 62, column: 1, offset: 2947 },
                  end: { line: 62, column: 148, offset: 3094 }
                }
              }
            ],
            position: {
              start: { line: 62, column: 1, offset: 2947 },
              end: { line: 62, column: 148, offset: 3094 }
            }
          },
          {
            type: 'heading',
            depth: 2,
            children: [
              {
                type: 'text',
                value: 'Number of Running Instances',
                position: {
                  start: { line: 64, column: 4, offset: 3099 },
                  end: { line: 64, column: 31, offset: 3126 }
                }
              }
            ],
            position: {
              start: { line: 64, column: 1, offset: 3096 },
              end: { line: 64, column: 31, offset: 3126 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'There should only be one instance of a DiskHashTable running per storage and header file per machine at a time.',
                position: {
                  start: { line: 65, column: 1, offset: 3127 },
                  end: { line: 65, column: 112, offset: 3238 }
                }
              }
            ],
            position: {
              start: { line: 65, column: 1, offset: 3127 },
              end: { line: 65, column: 112, offset: 3238 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 65, column: 112, offset: 3238 }
        }
      }
    },
    methods: [
      {
        name: 'init',
        docs: '```coffeescript [specscript]\n' +
          'init() -> Promise<>\n' +
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
                value: 'init() -> Promise<>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 52 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Initializes the disk hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 54 },
                      end: { line: 5, column: 33, offset: 86 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 54 },
                  end: { line: 5, column: 33, offset: 86 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 88 },
                      end: { line: 7, column: 11, offset: 98 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 88 },
                  end: { line: 7, column: 11, offset: 98 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 8, column: 5, offset: 103 },
                              end: { line: 8, column: 11, offset: 109 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 103 },
                          end: { line: 8, column: 11, offset: 109 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 101 },
                      end: { line: 8, column: 11, offset: 109 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 101 },
                  end: { line: 8, column: 11, offset: 109 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 111 },
                      end: { line: 10, column: 8, offset: 118 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 111 },
                  end: { line: 10, column: 8, offset: 118 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 11, column: 5, offset: 123 },
                              end: { line: 11, column: 19, offset: 137 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 123 },
                          end: { line: 11, column: 19, offset: 137 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 121 },
                      end: { line: 11, column: 19, offset: 137 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 121 },
                  end: { line: 11, column: 19, offset: 137 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await ht.init()',
                position: {
                  start: { line: 13, column: 1, offset: 139 },
                  end: { line: 15, column: 4, offset: 172 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 172 }
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
          'Removes all system resources taken up by the disk hash table.\n' +
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
                    value: 'Removes all system resources taken up by the disk hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 57 },
                      end: { line: 5, column: 62, offset: 118 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 57 },
                  end: { line: 5, column: 62, offset: 118 }
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
                            type: 'text',
                            value: 'Empty promise.',
                            position: {
                              start: { line: 11, column: 5, offset: 155 },
                              end: { line: 11, column: 19, offset: 169 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 155 },
                          end: { line: 11, column: 19, offset: 169 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 153 },
                      end: { line: 11, column: 19, offset: 169 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 153 },
                  end: { line: 11, column: 19, offset: 169 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await ht.destroy()',
                position: {
                  start: { line: 13, column: 1, offset: 171 },
                  end: { line: 15, column: 4, offset: 207 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 207 }
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
          'Closes the underlying file handles of the disk hash table.\n' +
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
                    value: 'Closes the underlying file handles of the disk hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 55 },
                      end: { line: 5, column: 59, offset: 113 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 55 },
                  end: { line: 5, column: 59, offset: 113 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 115 },
                      end: { line: 7, column: 11, offset: 125 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 115 },
                  end: { line: 7, column: 11, offset: 125 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 8, column: 5, offset: 130 },
                              end: { line: 8, column: 11, offset: 136 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 130 },
                          end: { line: 8, column: 11, offset: 136 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 128 },
                      end: { line: 8, column: 11, offset: 136 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 128 },
                  end: { line: 8, column: 11, offset: 136 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 138 },
                      end: { line: 10, column: 8, offset: 145 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 138 },
                  end: { line: 10, column: 8, offset: 145 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 11, column: 5, offset: 150 },
                              end: { line: 11, column: 16, offset: 161 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 150 },
                          end: { line: 11, column: 16, offset: 161 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 148 },
                      end: { line: 11, column: 16, offset: 161 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 148 },
                  end: { line: 11, column: 16, offset: 161 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'ht.close()',
                position: {
                  start: { line: 13, column: 1, offset: 163 },
                  end: { line: 15, column: 4, offset: 191 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 191 }
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
          'await ht.set("my-key", "my-value")\n' +
          '\n' +
          'await ht.set("my-buffer", Buffer.from("binary"))\n' +
          '```',
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
                value: 'await ht.set("my-key", "my-value")\n' +
                  '\n' +
                  'await ht.set("my-buffer", Buffer.from("binary"))',
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
          'get(key string) -> value Promise<string|undefined>\n' +
          '```\n' +
          '\n' +
          'Gets a value by key from the disk hash table.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `key` - `string` - the key corresponding to the value.\n' +
          '\n' +
          'Return:\n' +
          '  * `value` - `Promise<string|undefined>` - a promise of the value corresponding to the key. If the key is not found, the promise resolves with `undefined`.\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'get(key string) -> value Promise<string|undefined>',
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
                    value: 'Gets a value by key from the disk hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 85 },
                      end: { line: 5, column: 46, offset: 130 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 85 },
                  end: { line: 5, column: 46, offset: 130 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 132 },
                      end: { line: 7, column: 11, offset: 142 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 132 },
                  end: { line: 7, column: 11, offset: 142 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 8, column: 5, offset: 147 },
                              end: { line: 8, column: 10, offset: 152 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 8, column: 10, offset: 152 },
                              end: { line: 8, column: 13, offset: 155 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 8, column: 13, offset: 155 },
                              end: { line: 8, column: 21, offset: 163 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the key corresponding to the value.',
                            position: {
                              start: { line: 8, column: 21, offset: 163 },
                              end: { line: 8, column: 59, offset: 201 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 147 },
                          end: { line: 8, column: 59, offset: 201 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 145 },
                      end: { line: 8, column: 59, offset: 201 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 145 },
                  end: { line: 8, column: 59, offset: 201 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 203 },
                      end: { line: 10, column: 8, offset: 210 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 203 },
                  end: { line: 10, column: 8, offset: 210 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 11, column: 5, offset: 215 },
                              end: { line: 11, column: 12, offset: 222 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 11, column: 12, offset: 222 },
                              end: { line: 11, column: 15, offset: 225 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'Promise<string|undefined>',
                            position: {
                              start: { line: 11, column: 15, offset: 225 },
                              end: { line: 11, column: 42, offset: 252 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a promise of the value corresponding to the key. If the key is not found, the promise resolves with ',
                            position: {
                              start: { line: 11, column: 42, offset: 252 },
                              end: { line: 11, column: 145, offset: 355 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'undefined',
                            position: {
                              start: { line: 11, column: 145, offset: 355 },
                              end: { line: 11, column: 156, offset: 366 }
                            }
                          },
                          {
                            type: 'text',
                            value: '.',
                            position: {
                              start: { line: 11, column: 156, offset: 366 },
                              end: { line: 11, column: 157, offset: 367 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 215 },
                          end: { line: 11, column: 157, offset: 367 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 213 },
                      end: { line: 11, column: 157, offset: 367 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 213 },
                  end: { line: 11, column: 157, offset: 367 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const value = await ht.get("my-key")',
                position: {
                  start: { line: 13, column: 1, offset: 369 },
                  end: { line: 15, column: 4, offset: 423 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 423 }
            }
          }
        }
      },
      {
        name: 'getBinary',
        docs: '```coffeescript [specscript]\n' +
          'getBinary(key string) -> binaryValue Promise<Buffer|undefined>\n' +
          '```\n' +
          '\n' +
          'Gets a binary value by key from the disk hash table.\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'getBinary(key string) -> binaryValue Promise<Buffer|undefined>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 95 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Gets a binary value by key from the disk hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 97 },
                      end: { line: 5, column: 53, offset: 149 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 97 },
                  end: { line: 5, column: 53, offset: 149 }
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
                            value: ' - the key corresponding to the binary value.',
                            position: {
                              start: { line: 8, column: 21, offset: 182 },
                              end: { line: 8, column: 66, offset: 227 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 166 },
                          end: { line: 8, column: 66, offset: 227 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 164 },
                      end: { line: 8, column: 66, offset: 227 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 164 },
                  end: { line: 8, column: 66, offset: 227 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 229 },
                      end: { line: 10, column: 8, offset: 236 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 229 },
                  end: { line: 10, column: 8, offset: 236 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 11, column: 5, offset: 241 },
                              end: { line: 11, column: 18, offset: 254 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 11, column: 18, offset: 254 },
                              end: { line: 11, column: 21, offset: 257 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'Promise<Buffer|undefined>',
                            position: {
                              start: { line: 11, column: 21, offset: 257 },
                              end: { line: 11, column: 48, offset: 284 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a promise of the binary value corresponding to the key. If the key is not found, the promise resolves with ',
                            position: {
                              start: { line: 11, column: 48, offset: 284 },
                              end: { line: 11, column: 158, offset: 394 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'undefined',
                            position: {
                              start: { line: 11, column: 158, offset: 394 },
                              end: { line: 11, column: 169, offset: 405 }
                            }
                          },
                          {
                            type: 'text',
                            value: '.',
                            position: {
                              start: { line: 11, column: 169, offset: 405 },
                              end: { line: 11, column: 170, offset: 406 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 241 },
                          end: { line: 11, column: 170, offset: 406 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 239 },
                      end: { line: 11, column: 170, offset: 406 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 239 },
                  end: { line: 11, column: 170, offset: 406 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const buffer = await ht.getBinary("my-buffer")',
                position: {
                  start: { line: 13, column: 1, offset: 408 },
                  end: { line: 15, column: 4, offset: 472 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 472 }
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
          '  * `didDelete` - `Promise<boolean>` - a promise of whether the key and corresponding value were deleted.\n' +
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
                            value: 'Promise<boolean>',
                            position: {
                              start: { line: 11, column: 19, offset: 213 },
                              end: { line: 11, column: 37, offset: 231 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a promise of whether the key and corresponding value were deleted.',
                            position: {
                              start: { line: 11, column: 37, offset: 231 },
                              end: { line: 11, column: 106, offset: 300 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 199 },
                          end: { line: 11, column: 106, offset: 300 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 197 },
                      end: { line: 11, column: 106, offset: 300 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 197 },
                  end: { line: 11, column: 106, offset: 300 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const didDelete = await ht.delete("my-key")',
                position: {
                  start: { line: 13, column: 1, offset: 302 },
                  end: { line: 15, column: 4, offset: 363 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 363 }
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
          'iterator() -> values AsyncIterator<string>\n' +
          '\n' +
          'iterator(options {\n' +
          '  valueType: "string"|"binary",\n' +
          '}) -> values AsyncIterator<string|Buffer>\n' +
          '```\n' +
          '\n' +
          'Returns an async iterator of the values of all items in the disk hash table. Item values are yielded in reverse insertion order.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the values of all items in the disk hash table.\n' +
          '  * `options`\n' +
          '    * `valueType` - `"string"|"binary"` - the type of value that the async iterator yields. Defaults to `"string"`.\n' +
          '      * `"string"` - async iterator yields `string` values.\n' +
          '      * `"binary"` - async iterator yields `Buffer` values.\n' +
          '\n' +
          'Return:\n' +
          '  * `values` - `AsyncIterator<string|Buffer>` - an async iterator of the values of all items in the disk hash table sorted by reverse insertion order.\n' +
          '\n' +
          '```javascript\n' +
          'await ht.set("key1", "value1")\n' +
          'await ht.set("key2", "value2")\n' +
          'await ht.set("key3", "value3")\n' +
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
                value: 'iterator() -> values AsyncIterator<string>\n' +
                  '\n' +
                  'iterator(options {\n' +
                  '  valueType: "string"|"binary",\n' +
                  '}) -> values AsyncIterator<string|Buffer>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 7, column: 4, offset: 169 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns an async iterator of the values of all items in the disk hash table. Item values are yielded in reverse insertion order.',
                    position: {
                      start: { line: 9, column: 1, offset: 171 },
                      end: { line: 9, column: 129, offset: 299 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 1, offset: 171 },
                  end: { line: 9, column: 129, offset: 299 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 11, column: 1, offset: 301 },
                      end: { line: 11, column: 11, offset: 311 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 301 },
                  end: { line: 11, column: 11, offset: 311 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 12, column: 5, offset: 316 },
                              end: { line: 12, column: 71, offset: 382 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 316 },
                          end: { line: 12, column: 71, offset: 382 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 314 },
                      end: { line: 12, column: 71, offset: 382 }
                    }
                  },
                  {
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
                              start: { line: 13, column: 5, offset: 387 },
                              end: { line: 13, column: 14, offset: 396 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 13, column: 5, offset: 387 },
                          end: { line: 13, column: 14, offset: 396 }
                        }
                      },
                      {
                        type: 'list',
                        ordered: false,
                        start: null,
                        spread: false,
                        children: [
                          {
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
                                        offset: 403
                                      },
                                      end: {
                                        line: 14,
                                        column: 18,
                                        offset: 414
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
                                        offset: 414
                                      },
                                      end: {
                                        line: 14,
                                        column: 21,
                                        offset: 417
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: '"string"|"binary"',
                                    position: {
                                      start: {
                                        line: 14,
                                        column: 21,
                                        offset: 417
                                      },
                                      end: {
                                        line: 14,
                                        column: 40,
                                        offset: 436
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
                                        offset: 436
                                      },
                                      end: {
                                        line: 14,
                                        column: 105,
                                        offset: 501
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: '"string"',
                                    position: {
                                      start: {
                                        line: 14,
                                        column: 105,
                                        offset: 501
                                      },
                                      end: {
                                        line: 14,
                                        column: 115,
                                        offset: 511
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
                                        offset: 511
                                      },
                                      end: {
                                        line: 14,
                                        column: 116,
                                        offset: 512
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 14, column: 7, offset: 403 },
                                  end: {
                                    line: 14,
                                    column: 116,
                                    offset: 512
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
                                                line: 15,
                                                column: 9,
                                                offset: 521
                                              },
                                              end: {
                                                line: 15,
                                                column: 19,
                                                offset: 531
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
                                                offset: 531
                                              },
                                              end: {
                                                line: 15,
                                                column: 44,
                                                offset: 556
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
                                                offset: 556
                                              },
                                              end: {
                                                line: 15,
                                                column: 52,
                                                offset: 564
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
                                                offset: 564
                                              },
                                              end: {
                                                line: 15,
                                                column: 60,
                                                offset: 572
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 15,
                                            column: 9,
                                            offset: 521
                                          },
                                          end: {
                                            line: 15,
                                            column: 60,
                                            offset: 572
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 15,
                                        column: 7,
                                        offset: 519
                                      },
                                      end: {
                                        line: 15,
                                        column: 60,
                                        offset: 572
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
                                                line: 16,
                                                column: 9,
                                                offset: 581
                                              },
                                              end: {
                                                line: 16,
                                                column: 19,
                                                offset: 591
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
                                                offset: 591
                                              },
                                              end: {
                                                line: 16,
                                                column: 44,
                                                offset: 616
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
                                                offset: 616
                                              },
                                              end: {
                                                line: 16,
                                                column: 52,
                                                offset: 624
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
                                                offset: 624
                                              },
                                              end: {
                                                line: 16,
                                                column: 60,
                                                offset: 632
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 16,
                                            column: 9,
                                            offset: 581
                                          },
                                          end: {
                                            line: 16,
                                            column: 60,
                                            offset: 632
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 16,
                                        column: 7,
                                        offset: 579
                                      },
                                      end: {
                                        line: 16,
                                        column: 60,
                                        offset: 632
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 15, column: 7, offset: 519 },
                                  end: { line: 16, column: 60, offset: 632 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 14, column: 5, offset: 401 },
                              end: { line: 16, column: 60, offset: 632 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 14, column: 5, offset: 401 },
                          end: { line: 16, column: 60, offset: 632 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 13, column: 3, offset: 385 },
                      end: { line: 16, column: 60, offset: 632 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 314 },
                  end: { line: 16, column: 60, offset: 632 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 18, column: 1, offset: 634 },
                      end: { line: 18, column: 8, offset: 641 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 1, offset: 634 },
                  end: { line: 18, column: 8, offset: 641 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 19, column: 5, offset: 646 },
                              end: { line: 19, column: 13, offset: 654 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 19, column: 13, offset: 654 },
                              end: { line: 19, column: 16, offset: 657 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncIterator<string|Buffer>',
                            position: {
                              start: { line: 19, column: 16, offset: 657 },
                              end: { line: 19, column: 46, offset: 687 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the values of all items in the disk hash table sorted by reverse insertion order.',
                            position: {
                              start: { line: 19, column: 46, offset: 687 },
                              end: { line: 19, column: 151, offset: 792 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 646 },
                          end: { line: 19, column: 151, offset: 792 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 19, column: 3, offset: 644 },
                      end: { line: 19, column: 151, offset: 792 }
                    }
                  }
                ],
                position: {
                  start: { line: 19, column: 3, offset: 644 },
                  end: { line: 19, column: 151, offset: 792 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await ht.set("key1", "value1")\n' +
                  'await ht.set("key2", "value2")\n' +
                  'await ht.set("key3", "value3")\n' +
                  '\n' +
                  'for await (const value of ht.iterator()) {\n' +
                  '  console.log(value) // value3\n' +
                  '                     // value2\n' +
                  '                     // value1\n' +
                  '}',
                position: {
                  start: { line: 21, column: 1, offset: 794 },
                  end: { line: 31, column: 4, offset: 1043 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 31, column: 4, offset: 1043 }
            }
          }
        }
      },
      {
        name: 'entriesIterator',
        docs: '```coffeescript [specscript]\n' +
          'entriesIterator() -> entries AsyncIterator<[key string, value string]>\n' +
          '\n' +
          'entriesIterator(options {\n' +
          '  valueType: "string"|"binary",\n' +
          '}) -> entries AsyncIterator<[key string, value string|Buffer]>\n' +
          '```\n' +
          '\n' +
          'Returns an async iterator of the entries (keys and values) of all items in the disk hash table. Item entries are yielded in reverse insertion order.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the entries of all items in the disk hash table.\n' +
          '  * `options`\n' +
          '    * `valueType` - `"string"|"binary"` - the type of value that the async iterator yields. Defaults to `"string"`.\n' +
          '      * `"string"` - async iterator yields entries with `string` values.\n' +
          '      * `"binary"` - async iterator yields entries with `Buffer` values.\n' +
          '\n' +
          'Return:\n' +
          '  * `entries` - `AsyncIterator<[key string, value string|Buffer]>` - an async iterator of the entries of all items in the disk hash table sorted by reverse insertion order.\n' +
          '\n' +
          '```javascript\n' +
          'await ht.set("key1", "value1")\n' +
          'await ht.set("key2", "value2")\n' +
          'await ht.set("key3", "value3")\n' +
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
                value: 'entriesIterator() -> entries AsyncIterator<[key string, value string]>\n' +
                  '\n' +
                  'entriesIterator(options {\n' +
                  '  valueType: "string"|"binary",\n' +
                  '}) -> entries AsyncIterator<[key string, value string|Buffer]>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 7, column: 4, offset: 225 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns an async iterator of the entries (keys and values) of all items in the disk hash table. Item entries are yielded in reverse insertion order.',
                    position: {
                      start: { line: 9, column: 1, offset: 227 },
                      end: { line: 9, column: 149, offset: 375 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 1, offset: 227 },
                  end: { line: 9, column: 149, offset: 375 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 11, column: 1, offset: 377 },
                      end: { line: 11, column: 11, offset: 387 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 377 },
                  end: { line: 11, column: 11, offset: 387 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 12, column: 5, offset: 392 },
                              end: { line: 12, column: 72, offset: 459 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 392 },
                          end: { line: 12, column: 72, offset: 459 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 390 },
                      end: { line: 12, column: 72, offset: 459 }
                    }
                  },
                  {
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
                              start: { line: 13, column: 5, offset: 464 },
                              end: { line: 13, column: 14, offset: 473 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 13, column: 5, offset: 464 },
                          end: { line: 13, column: 14, offset: 473 }
                        }
                      },
                      {
                        type: 'list',
                        ordered: false,
                        start: null,
                        spread: false,
                        children: [
                          {
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
                                        offset: 480
                                      },
                                      end: {
                                        line: 14,
                                        column: 18,
                                        offset: 491
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
                                        offset: 491
                                      },
                                      end: {
                                        line: 14,
                                        column: 21,
                                        offset: 494
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: '"string"|"binary"',
                                    position: {
                                      start: {
                                        line: 14,
                                        column: 21,
                                        offset: 494
                                      },
                                      end: {
                                        line: 14,
                                        column: 40,
                                        offset: 513
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
                                        offset: 513
                                      },
                                      end: {
                                        line: 14,
                                        column: 105,
                                        offset: 578
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: '"string"',
                                    position: {
                                      start: {
                                        line: 14,
                                        column: 105,
                                        offset: 578
                                      },
                                      end: {
                                        line: 14,
                                        column: 115,
                                        offset: 588
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
                                        offset: 588
                                      },
                                      end: {
                                        line: 14,
                                        column: 116,
                                        offset: 589
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 14, column: 7, offset: 480 },
                                  end: {
                                    line: 14,
                                    column: 116,
                                    offset: 589
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
                                                line: 15,
                                                column: 9,
                                                offset: 598
                                              },
                                              end: {
                                                line: 15,
                                                column: 19,
                                                offset: 608
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
                                                offset: 608
                                              },
                                              end: {
                                                line: 15,
                                                column: 57,
                                                offset: 646
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
                                                offset: 646
                                              },
                                              end: {
                                                line: 15,
                                                column: 65,
                                                offset: 654
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
                                                offset: 654
                                              },
                                              end: {
                                                line: 15,
                                                column: 73,
                                                offset: 662
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 15,
                                            column: 9,
                                            offset: 598
                                          },
                                          end: {
                                            line: 15,
                                            column: 73,
                                            offset: 662
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 15,
                                        column: 7,
                                        offset: 596
                                      },
                                      end: {
                                        line: 15,
                                        column: 73,
                                        offset: 662
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
                                                line: 16,
                                                column: 9,
                                                offset: 671
                                              },
                                              end: {
                                                line: 16,
                                                column: 19,
                                                offset: 681
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
                                                offset: 681
                                              },
                                              end: {
                                                line: 16,
                                                column: 57,
                                                offset: 719
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
                                                offset: 719
                                              },
                                              end: {
                                                line: 16,
                                                column: 65,
                                                offset: 727
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
                                                offset: 727
                                              },
                                              end: {
                                                line: 16,
                                                column: 73,
                                                offset: 735
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 16,
                                            column: 9,
                                            offset: 671
                                          },
                                          end: {
                                            line: 16,
                                            column: 73,
                                            offset: 735
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 16,
                                        column: 7,
                                        offset: 669
                                      },
                                      end: {
                                        line: 16,
                                        column: 73,
                                        offset: 735
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 15, column: 7, offset: 596 },
                                  end: { line: 16, column: 73, offset: 735 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 14, column: 5, offset: 478 },
                              end: { line: 16, column: 73, offset: 735 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 14, column: 5, offset: 478 },
                          end: { line: 16, column: 73, offset: 735 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 13, column: 3, offset: 462 },
                      end: { line: 16, column: 73, offset: 735 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 3, offset: 390 },
                  end: { line: 16, column: 73, offset: 735 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 18, column: 1, offset: 737 },
                      end: { line: 18, column: 8, offset: 744 }
                    }
                  }
                ],
                position: {
                  start: { line: 18, column: 1, offset: 737 },
                  end: { line: 18, column: 8, offset: 744 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 19, column: 5, offset: 749 },
                              end: { line: 19, column: 14, offset: 758 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 19, column: 14, offset: 758 },
                              end: { line: 19, column: 17, offset: 761 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncIterator<[key string, value string|Buffer]>',
                            position: {
                              start: { line: 19, column: 17, offset: 761 },
                              end: { line: 19, column: 67, offset: 811 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the entries of all items in the disk hash table sorted by reverse insertion order.',
                            position: {
                              start: { line: 19, column: 67, offset: 811 },
                              end: { line: 19, column: 173, offset: 917 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 749 },
                          end: { line: 19, column: 173, offset: 917 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 19, column: 3, offset: 747 },
                      end: { line: 19, column: 173, offset: 917 }
                    }
                  }
                ],
                position: {
                  start: { line: 19, column: 3, offset: 747 },
                  end: { line: 19, column: 173, offset: 917 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await ht.set("key1", "value1")\n' +
                  'await ht.set("key2", "value2")\n' +
                  'await ht.set("key3", "value3")\n' +
                  '\n' +
                  'for await (const [key, value] of ht.entriesIterator()) {\n' +
                  '  console.log(key, value) // key3 value3\n' +
                  '                          // key2 value2\n' +
                  '                          // key1 value1\n' +
                  '}',
                position: {
                  start: { line: 21, column: 1, offset: 919 },
                  end: { line: 31, column: 4, offset: 1212 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 31, column: 4, offset: 1212 }
            }
          }
        }
      }
    ],
    fileName: '/home/richard/code/presidium.services/../presidium-db-docs/DiskHashTable.js'
  },
  {
    name: 'DiskSortedHashTable',
    docs: '```coffeescript [specscript]\n' +
      'new DiskSortedHashTable(options {\n' +
      '  storagePath: string,\n' +
      '  headerPath: string,\n' +
      '  initialLength: number,\n' +
      '  itemSize: number,\n' +
      '  sortValueType: "string"|"number"|Array<"string"|"number">,\n' +
      '  resizeRatio: number,\n' +
      '  resizeFactor: number,\n' +
      '  degree: number,\n' +
      '}) -> ht DiskSortedHashTable\n' +
      '```\n' +
      '\n' +
      'Presidium DiskSortedHashTable class. Creates a sorted hash table that stores all data on disk.\n' +
      '\n' +
      'Arguments:\n' +
      '  * `options`\n' +
      '    * `storagePath` - `string` - the path to the file that stores the disk sorted hash table data.\n' +
      '    * `headerPath` - `string` - the path to the file that stores header information about the disk sorted hash table.\n' +
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
      '  * `ht` - [`DiskSortedHashTable`](/docs/DiskSortedHashTable) - a `DiskSortedHashTable` instance.\n' +
      '\n' +
      '```javascript\n' +
      'const ht = new DiskSortedHashTable({\n' +
      '  storagePath: "/path/to/storage-file",\n' +
      '  headerPath: "/path/to/header-file",\n' +
      '  initialLength: 1024,\n' +
      '  itemSize: 512 * 1024,\n' +
      '  sortValueType: "number",\n' +
      '  resizeRatio: 0.5,\n' +
      '  resizeFactor: 1000,\n' +
      '  degree: 2,\n' +
      '})\n' +
      '\n' +
      'const compositeSortValueHt = new DiskSortedHashTable({\n' +
      '  storagePath: "/path/to/storage-file",\n' +
      '  headerPath: "/path/to/header-file",\n' +
      '  initialLength: 1024,\n' +
      '  itemSize: 512 * 1024,\n' +
      '  sortValueType: ["string", "number"],\n' +
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
      'Each item stored on disk is allocated `itemSize` bytes of disk space. The first 53 bytes are reserved for table operations. The remainder is reserved for the key, sort value, and value of the item.\n' +
      '\n' +
      '## Resizing the disk sorted hash table\n' +
      'When an item is inserted into the disk sorted hash table via [set](/docs/DiskSortedHashTable#set), the current capacity ratio of the table is calculated as the sum of the table"s count and deleted count divided by the table"s length. If the current capacity ratio exceeds the `resizeRatio` (and the `resizeRatio` is not 0), a resize of the table occurs.\n' +
      '\n' +
      'During a table resize, each item of the table is added into a temporary storage file using the new table length calculated from the equation below:\n' +
      '\n' +
      '```\n' +
      'newTableLength = oldTableLength * resizeFactor\n' +
      '```\n' +
      '\n' +
      'Once all of the items have been added into the temporary storage file, the temporary storage file is moved to the location of the old storage file.\n' +
      '\n' +
      '## Optimizing the disk sorted hash table b-tree\n' +
      'The value of `degree` determines the structure of the internal b-tree of the disk sorted hash table. A higher value for `degree` results in a shorter b-tree and more items per b-tree node, while a lower value results in a taller b-tree and fewer items per b-tree node. The default value of 2 is good for any number of items.\n' +
      '\n' +
      '## Number of Running Instances\n' +
      'There should only be one instance of a DiskSortedHashTable running per storage and header file per machine at a time.',
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
              '  sortValueType: "string"|"number"|Array<"string"|"number">,\n' +
              '  resizeRatio: number,\n' +
              '  resizeFactor: number,\n' +
              '  degree: number,\n' +
              '}) -> ht DiskSortedHashTable',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 12, column: 4, offset: 311 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Presidium DiskSortedHashTable class. Creates a sorted hash table that stores all data on disk.',
                position: {
                  start: { line: 14, column: 1, offset: 313 },
                  end: { line: 14, column: 95, offset: 407 }
                }
              }
            ],
            position: {
              start: { line: 14, column: 1, offset: 313 },
              end: { line: 14, column: 95, offset: 407 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Arguments:',
                position: {
                  start: { line: 16, column: 1, offset: 409 },
                  end: { line: 16, column: 11, offset: 419 }
                }
              }
            ],
            position: {
              start: { line: 16, column: 1, offset: 409 },
              end: { line: 16, column: 11, offset: 419 }
            }
          },
          {
            type: 'list',
            ordered: false,
            start: null,
            spread: false,
            children: [
              {
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
                          start: { line: 17, column: 5, offset: 424 },
                          end: { line: 17, column: 14, offset: 433 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 17, column: 5, offset: 424 },
                      end: { line: 17, column: 14, offset: 433 }
                    }
                  },
                  {
                    type: 'list',
                    ordered: false,
                    start: null,
                    spread: false,
                    children: [
                      {
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
                                  start: { line: 18, column: 7, offset: 440 },
                                  end: { line: 18, column: 20, offset: 453 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 18, column: 20, offset: 453 },
                                  end: { line: 18, column: 23, offset: 456 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'string',
                                position: {
                                  start: { line: 18, column: 23, offset: 456 },
                                  end: { line: 18, column: 31, offset: 464 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the path to the file that stores the disk sorted hash table data.',
                                position: {
                                  start: { line: 18, column: 31, offset: 464 },
                                  end: { line: 18, column: 99, offset: 532 }
                                }
                              }
                            ],
                            position: {
                              start: { line: 18, column: 7, offset: 440 },
                              end: { line: 18, column: 99, offset: 532 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 18, column: 5, offset: 438 },
                          end: { line: 18, column: 99, offset: 532 }
                        }
                      },
                      {
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
                                  start: { line: 19, column: 7, offset: 539 },
                                  end: { line: 19, column: 19, offset: 551 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 19, column: 19, offset: 551 },
                                  end: { line: 19, column: 22, offset: 554 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'string',
                                position: {
                                  start: { line: 19, column: 22, offset: 554 },
                                  end: { line: 19, column: 30, offset: 562 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the path to the file that stores header information about the disk sorted hash table.',
                                position: {
                                  start: { line: 19, column: 30, offset: 562 },
                                  end: {
                                    line: 19,
                                    column: 118,
                                    offset: 650
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 19, column: 7, offset: 539 },
                              end: { line: 19, column: 118, offset: 650 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 19, column: 5, offset: 537 },
                          end: { line: 19, column: 118, offset: 650 }
                        }
                      },
                      {
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
                                  start: { line: 20, column: 7, offset: 657 },
                                  end: { line: 20, column: 22, offset: 672 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 20, column: 22, offset: 672 },
                                  end: { line: 20, column: 25, offset: 675 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: { line: 20, column: 25, offset: 675 },
                                  end: { line: 20, column: 33, offset: 683 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the initial length of the disk sorted hash table. Minimum value 1, maximum value ',
                                position: {
                                  start: { line: 20, column: 33, offset: 683 },
                                  end: {
                                    line: 20,
                                    column: 117,
                                    offset: 767
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
                                    offset: 767
                                  },
                                  end: {
                                    line: 20,
                                    column: 158,
                                    offset: 808
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
                                    offset: 808
                                  },
                                  end: {
                                    line: 20,
                                    column: 177,
                                    offset: 827
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 20, column: 7, offset: 657 },
                              end: { line: 20, column: 177, offset: 827 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 20, column: 5, offset: 655 },
                          end: { line: 20, column: 177, offset: 827 }
                        }
                      },
                      {
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
                                  start: { line: 21, column: 7, offset: 834 },
                                  end: { line: 21, column: 17, offset: 844 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - ',
                                position: {
                                  start: { line: 21, column: 17, offset: 844 },
                                  end: { line: 21, column: 20, offset: 847 }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: 'number',
                                position: {
                                  start: { line: 21, column: 20, offset: 847 },
                                  end: { line: 21, column: 28, offset: 855 }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the size in bytes of each item (including internal item info, key, value, and sortValue) stored on disk. Minimum value 54. Defaults to 524288.',
                                position: {
                                  start: { line: 21, column: 28, offset: 855 },
                                  end: {
                                    line: 21,
                                    column: 173,
                                    offset: 1000
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 21, column: 7, offset: 834 },
                              end: { line: 21, column: 173, offset: 1000 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 5, offset: 832 },
                          end: { line: 21, column: 173, offset: 1000 }
                        }
                      },
                      {
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
                                  start: { line: 22, column: 7, offset: 1007 },
                                  end: {
                                    line: 22,
                                    column: 22,
                                    offset: 1022
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
                                    offset: 1022
                                  },
                                  end: {
                                    line: 22,
                                    column: 25,
                                    offset: 1025
                                  }
                                }
                              },
                              {
                                type: 'inlineCode',
                                value: '"string"|"number"|Array<"string"|"number">',
                                position: {
                                  start: {
                                    line: 22,
                                    column: 25,
                                    offset: 1025
                                  },
                                  end: {
                                    line: 22,
                                    column: 69,
                                    offset: 1069
                                  }
                                }
                              },
                              {
                                type: 'text',
                                value: ' - the type of the disk sorted hash table sort values. If this value is an array, the sort value will be treated as a composite sort value. A composite sort value has each element of the array compared in order.',
                                position: {
                                  start: {
                                    line: 22,
                                    column: 69,
                                    offset: 1069
                                  },
                                  end: {
                                    line: 22,
                                    column: 280,
                                    offset: 1280
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 22, column: 7, offset: 1007 },
                              end: { line: 22, column: 280, offset: 1280 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 22, column: 5, offset: 1005 },
                          end: { line: 22, column: 280, offset: 1280 }
                        }
                      },
                      {
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
                                  start: { line: 23, column: 7, offset: 1287 },
                                  end: {
                                    line: 23,
                                    column: 20,
                                    offset: 1300
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
                                    offset: 1300
                                  },
                                  end: {
                                    line: 23,
                                    column: 23,
                                    offset: 1303
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
                                    offset: 1303
                                  },
                                  end: {
                                    line: 23,
                                    column: 31,
                                    offset: 1311
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
                                    offset: 1311
                                  },
                                  end: {
                                    line: 23,
                                    column: 186,
                                    offset: 1466
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 23, column: 7, offset: 1287 },
                              end: { line: 23, column: 186, offset: 1466 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 23, column: 5, offset: 1285 },
                          end: { line: 23, column: 186, offset: 1466 }
                        }
                      },
                      {
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
                                  start: { line: 24, column: 7, offset: 1473 },
                                  end: {
                                    line: 24,
                                    column: 21,
                                    offset: 1487
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
                                    offset: 1487
                                  },
                                  end: {
                                    line: 24,
                                    column: 24,
                                    offset: 1490
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
                                    offset: 1490
                                  },
                                  end: {
                                    line: 24,
                                    column: 32,
                                    offset: 1498
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
                                    offset: 1498
                                  },
                                  end: {
                                    line: 24,
                                    column: 160,
                                    offset: 1626
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 24, column: 7, offset: 1473 },
                              end: { line: 24, column: 160, offset: 1626 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 24, column: 5, offset: 1471 },
                          end: { line: 24, column: 160, offset: 1626 }
                        }
                      },
                      {
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
                                  start: { line: 25, column: 7, offset: 1633 },
                                  end: {
                                    line: 25,
                                    column: 15,
                                    offset: 1641
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
                                    offset: 1641
                                  },
                                  end: {
                                    line: 25,
                                    column: 18,
                                    offset: 1644
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
                                    offset: 1644
                                  },
                                  end: {
                                    line: 25,
                                    column: 26,
                                    offset: 1652
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
                                    offset: 1652
                                  },
                                  end: {
                                    line: 25,
                                    column: 181,
                                    offset: 1807
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 25, column: 7, offset: 1633 },
                              end: { line: 25, column: 181, offset: 1807 }
                            }
                          },
                          {
                            type: 'list',
                            ordered: false,
                            start: null,
                            spread: false,
                            children: [
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
                                            offset: 1816
                                          },
                                          end: {
                                            line: 26,
                                            column: 50,
                                            offset: 1857
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
                                            offset: 1857
                                          },
                                          end: {
                                            line: 26,
                                            column: 62,
                                            offset: 1869
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 26,
                                        column: 9,
                                        offset: 1816
                                      },
                                      end: {
                                        line: 26,
                                        column: 62,
                                        offset: 1869
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 26, column: 7, offset: 1814 },
                                  end: {
                                    line: 26,
                                    column: 62,
                                    offset: 1869
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
                                            offset: 1878
                                          },
                                          end: {
                                            line: 27,
                                            column: 50,
                                            offset: 1919
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
                                            offset: 1919
                                          },
                                          end: {
                                            line: 27,
                                            column: 68,
                                            offset: 1937
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 27,
                                        column: 9,
                                        offset: 1878
                                      },
                                      end: {
                                        line: 27,
                                        column: 68,
                                        offset: 1937
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 27, column: 7, offset: 1876 },
                                  end: {
                                    line: 27,
                                    column: 68,
                                    offset: 1937
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
                                            offset: 1946
                                          },
                                          end: {
                                            line: 28,
                                            column: 53,
                                            offset: 1990
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
                                            offset: 1990
                                          },
                                          end: {
                                            line: 28,
                                            column: 61,
                                            offset: 1998
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 28,
                                        column: 9,
                                        offset: 1946
                                      },
                                      end: {
                                        line: 28,
                                        column: 61,
                                        offset: 1998
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 28, column: 7, offset: 1944 },
                                  end: {
                                    line: 28,
                                    column: 61,
                                    offset: 1998
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
                                            offset: 2007
                                          },
                                          end: {
                                            line: 29,
                                            column: 53,
                                            offset: 2051
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
                                            offset: 2051
                                          },
                                          end: {
                                            line: 29,
                                            column: 65,
                                            offset: 2063
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 29,
                                        column: 9,
                                        offset: 2007
                                      },
                                      end: {
                                        line: 29,
                                        column: 65,
                                        offset: 2063
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 29, column: 7, offset: 2005 },
                                  end: {
                                    line: 29,
                                    column: 65,
                                    offset: 2063
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 26, column: 7, offset: 1814 },
                              end: { line: 29, column: 65, offset: 2063 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 25, column: 5, offset: 1631 },
                          end: { line: 29, column: 65, offset: 2063 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 18, column: 5, offset: 438 },
                      end: { line: 29, column: 65, offset: 2063 }
                    }
                  }
                ],
                position: {
                  start: { line: 17, column: 3, offset: 422 },
                  end: { line: 29, column: 65, offset: 2063 }
                }
              }
            ],
            position: {
              start: { line: 17, column: 3, offset: 422 },
              end: { line: 29, column: 65, offset: 2063 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Return:',
                position: {
                  start: { line: 31, column: 1, offset: 2065 },
                  end: { line: 31, column: 8, offset: 2072 }
                }
              }
            ],
            position: {
              start: { line: 31, column: 1, offset: 2065 },
              end: { line: 31, column: 8, offset: 2072 }
            }
          },
          {
            type: 'list',
            ordered: false,
            start: null,
            spread: false,
            children: [
              {
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
                          start: { line: 32, column: 5, offset: 2077 },
                          end: { line: 32, column: 9, offset: 2081 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 32, column: 9, offset: 2081 },
                          end: { line: 32, column: 12, offset: 2084 }
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
                              start: { line: 32, column: 13, offset: 2085 },
                              end: { line: 32, column: 34, offset: 2106 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 32, column: 12, offset: 2084 },
                          end: { line: 32, column: 62, offset: 2134 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - a ',
                        position: {
                          start: { line: 32, column: 62, offset: 2134 },
                          end: { line: 32, column: 67, offset: 2139 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'DiskSortedHashTable',
                        position: {
                          start: { line: 32, column: 67, offset: 2139 },
                          end: { line: 32, column: 88, offset: 2160 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' instance.',
                        position: {
                          start: { line: 32, column: 88, offset: 2160 },
                          end: { line: 32, column: 98, offset: 2170 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 32, column: 5, offset: 2077 },
                      end: { line: 32, column: 98, offset: 2170 }
                    }
                  }
                ],
                position: {
                  start: { line: 32, column: 3, offset: 2075 },
                  end: { line: 32, column: 98, offset: 2170 }
                }
              }
            ],
            position: {
              start: { line: 32, column: 3, offset: 2075 },
              end: { line: 32, column: 98, offset: 2170 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: 'const ht = new DiskSortedHashTable({\n' +
              '  storagePath: "/path/to/storage-file",\n' +
              '  headerPath: "/path/to/header-file",\n' +
              '  initialLength: 1024,\n' +
              '  itemSize: 512 * 1024,\n' +
              '  sortValueType: "number",\n' +
              '  resizeRatio: 0.5,\n' +
              '  resizeFactor: 1000,\n' +
              '  degree: 2,\n' +
              '})\n' +
              '\n' +
              'const compositeSortValueHt = new DiskSortedHashTable({\n' +
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
              start: { line: 34, column: 1, offset: 2172 },
              end: { line: 56, column: 4, offset: 2714 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Supported platforms:',
                position: {
                  start: { line: 58, column: 1, offset: 2716 },
                  end: { line: 58, column: 21, offset: 2736 }
                }
              }
            ],
            position: {
              start: { line: 58, column: 1, offset: 2716 },
              end: { line: 58, column: 21, offset: 2736 }
            }
          },
          {
            type: 'list',
            ordered: false,
            start: null,
            spread: false,
            children: [
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
                          start: { line: 59, column: 5, offset: 2741 },
                          end: { line: 59, column: 19, offset: 2755 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 59, column: 5, offset: 2741 },
                      end: { line: 59, column: 19, offset: 2755 }
                    }
                  }
                ],
                position: {
                  start: { line: 59, column: 3, offset: 2739 },
                  end: { line: 59, column: 19, offset: 2755 }
                }
              },
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
                          start: { line: 60, column: 5, offset: 2760 },
                          end: { line: 60, column: 19, offset: 2774 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 60, column: 5, offset: 2760 },
                      end: { line: 60, column: 19, offset: 2774 }
                    }
                  }
                ],
                position: {
                  start: { line: 60, column: 3, offset: 2758 },
                  end: { line: 60, column: 19, offset: 2774 }
                }
              }
            ],
            position: {
              start: { line: 59, column: 3, offset: 2739 },
              end: { line: 60, column: 19, offset: 2774 }
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
                  start: { line: 62, column: 4, offset: 2779 },
                  end: { line: 62, column: 48, offset: 2823 }
                }
              }
            ],
            position: {
              start: { line: 62, column: 1, offset: 2776 },
              end: { line: 62, column: 48, offset: 2823 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The maximum length of the disk sorted hash table is represented by the following equation:',
                position: {
                  start: { line: 63, column: 1, offset: 2824 },
                  end: { line: 63, column: 91, offset: 2914 }
                }
              }
            ],
            position: {
              start: { line: 63, column: 1, offset: 2824 },
              end: { line: 63, column: 91, offset: 2914 }
            }
          },
          {
            type: 'code',
            lang: null,
            meta: null,
            value: 'Math.floor(9_007_199_254_740_991 / itemSize)',
            position: {
              start: { line: 64, column: 1, offset: 2915 },
              end: { line: 66, column: 4, offset: 2967 }
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
                  start: { line: 68, column: 4, offset: 2972 },
                  end: { line: 68, column: 28, offset: 2996 }
                }
              }
            ],
            position: {
              start: { line: 68, column: 1, offset: 2969 },
              end: { line: 68, column: 28, offset: 2996 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The disk sorted hash table initially preallocates a block of memory on disk of ',
                position: {
                  start: { line: 69, column: 1, offset: 2997 },
                  end: { line: 69, column: 80, offset: 3076 }
                }
              },
              {
                type: 'inlineCode',
                value: '(itemSize * initialLength)',
                position: {
                  start: { line: 69, column: 80, offset: 3076 },
                  end: { line: 69, column: 108, offset: 3104 }
                }
              },
              {
                type: 'text',
                value: ' bytes as the storage file and a 48-byte block of memory as the header file for database operations. When the disk sorted hash table is resized, the block of memory on disk is reallocated to a new size of ',
                position: {
                  start: { line: 69, column: 108, offset: 3104 },
                  end: { line: 69, column: 313, offset: 3309 }
                }
              },
              {
                type: 'inlineCode',
                value: '(itemSize * initialLength * numberOfResizes * resizeFactor)',
                position: {
                  start: { line: 69, column: 313, offset: 3309 },
                  end: { line: 69, column: 374, offset: 3370 }
                }
              },
              {
                type: 'text',
                value: ' bytes.',
                position: {
                  start: { line: 69, column: 374, offset: 3370 },
                  end: { line: 69, column: 381, offset: 3377 }
                }
              }
            ],
            position: {
              start: { line: 69, column: 1, offset: 2997 },
              end: { line: 69, column: 381, offset: 3377 }
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
                  start: { line: 71, column: 4, offset: 3382 },
                  end: { line: 71, column: 32, offset: 3410 }
                }
              }
            ],
            position: {
              start: { line: 71, column: 1, offset: 3379 },
              end: { line: 71, column: 32, offset: 3410 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Each item stored on disk is allocated ',
                position: {
                  start: { line: 72, column: 1, offset: 3411 },
                  end: { line: 72, column: 39, offset: 3449 }
                }
              },
              {
                type: 'inlineCode',
                value: 'itemSize',
                position: {
                  start: { line: 72, column: 39, offset: 3449 },
                  end: { line: 72, column: 49, offset: 3459 }
                }
              },
              {
                type: 'text',
                value: ' bytes of disk space. The first 53 bytes are reserved for table operations. The remainder is reserved for the key, sort value, and value of the item.',
                position: {
                  start: { line: 72, column: 49, offset: 3459 },
                  end: { line: 72, column: 198, offset: 3608 }
                }
              }
            ],
            position: {
              start: { line: 72, column: 1, offset: 3411 },
              end: { line: 72, column: 198, offset: 3608 }
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
                  start: { line: 74, column: 4, offset: 3613 },
                  end: { line: 74, column: 39, offset: 3648 }
                }
              }
            ],
            position: {
              start: { line: 74, column: 1, offset: 3610 },
              end: { line: 74, column: 39, offset: 3648 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'When an item is inserted into the disk sorted hash table via ',
                position: {
                  start: { line: 75, column: 1, offset: 3649 },
                  end: { line: 75, column: 62, offset: 3710 }
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
                      start: { line: 75, column: 63, offset: 3711 },
                      end: { line: 75, column: 66, offset: 3714 }
                    }
                  }
                ],
                position: {
                  start: { line: 75, column: 62, offset: 3710 },
                  end: { line: 75, column: 98, offset: 3746 }
                }
              },
              {
                type: 'text',
                value: ', the current capacity ratio of the table is calculated as the sum of the table"s count and deleted count divided by the table"s length. If the current capacity ratio exceeds the ',
                position: {
                  start: { line: 75, column: 98, offset: 3746 },
                  end: { line: 75, column: 277, offset: 3925 }
                }
              },
              {
                type: 'inlineCode',
                value: 'resizeRatio',
                position: {
                  start: { line: 75, column: 277, offset: 3925 },
                  end: { line: 75, column: 290, offset: 3938 }
                }
              },
              {
                type: 'text',
                value: ' (and the ',
                position: {
                  start: { line: 75, column: 290, offset: 3938 },
                  end: { line: 75, column: 300, offset: 3948 }
                }
              },
              {
                type: 'inlineCode',
                value: 'resizeRatio',
                position: {
                  start: { line: 75, column: 300, offset: 3948 },
                  end: { line: 75, column: 313, offset: 3961 }
                }
              },
              {
                type: 'text',
                value: ' is not 0), a resize of the table occurs.',
                position: {
                  start: { line: 75, column: 313, offset: 3961 },
                  end: { line: 75, column: 354, offset: 4002 }
                }
              }
            ],
            position: {
              start: { line: 75, column: 1, offset: 3649 },
              end: { line: 75, column: 354, offset: 4002 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'During a table resize, each item of the table is added into a temporary storage file using the new table length calculated from the equation below:',
                position: {
                  start: { line: 77, column: 1, offset: 4004 },
                  end: { line: 77, column: 148, offset: 4151 }
                }
              }
            ],
            position: {
              start: { line: 77, column: 1, offset: 4004 },
              end: { line: 77, column: 148, offset: 4151 }
            }
          },
          {
            type: 'code',
            lang: null,
            meta: null,
            value: 'newTableLength = oldTableLength * resizeFactor',
            position: {
              start: { line: 79, column: 1, offset: 4153 },
              end: { line: 81, column: 4, offset: 4207 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Once all of the items have been added into the temporary storage file, the temporary storage file is moved to the location of the old storage file.',
                position: {
                  start: { line: 83, column: 1, offset: 4209 },
                  end: { line: 83, column: 148, offset: 4356 }
                }
              }
            ],
            position: {
              start: { line: 83, column: 1, offset: 4209 },
              end: { line: 83, column: 148, offset: 4356 }
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
                  start: { line: 85, column: 4, offset: 4361 },
                  end: { line: 85, column: 48, offset: 4405 }
                }
              }
            ],
            position: {
              start: { line: 85, column: 1, offset: 4358 },
              end: { line: 85, column: 48, offset: 4405 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The value of ',
                position: {
                  start: { line: 86, column: 1, offset: 4406 },
                  end: { line: 86, column: 14, offset: 4419 }
                }
              },
              {
                type: 'inlineCode',
                value: 'degree',
                position: {
                  start: { line: 86, column: 14, offset: 4419 },
                  end: { line: 86, column: 22, offset: 4427 }
                }
              },
              {
                type: 'text',
                value: ' determines the structure of the internal b-tree of the disk sorted hash table. A higher value for ',
                position: {
                  start: { line: 86, column: 22, offset: 4427 },
                  end: { line: 86, column: 121, offset: 4526 }
                }
              },
              {
                type: 'inlineCode',
                value: 'degree',
                position: {
                  start: { line: 86, column: 121, offset: 4526 },
                  end: { line: 86, column: 129, offset: 4534 }
                }
              },
              {
                type: 'text',
                value: ' results in a shorter b-tree and more items per b-tree node, while a lower value results in a taller b-tree and fewer items per b-tree node. The default value of 2 is good for any number of items.',
                position: {
                  start: { line: 86, column: 129, offset: 4534 },
                  end: { line: 86, column: 325, offset: 4730 }
                }
              }
            ],
            position: {
              start: { line: 86, column: 1, offset: 4406 },
              end: { line: 86, column: 325, offset: 4730 }
            }
          },
          {
            type: 'heading',
            depth: 2,
            children: [
              {
                type: 'text',
                value: 'Number of Running Instances',
                position: {
                  start: { line: 88, column: 4, offset: 4735 },
                  end: { line: 88, column: 31, offset: 4762 }
                }
              }
            ],
            position: {
              start: { line: 88, column: 1, offset: 4732 },
              end: { line: 88, column: 31, offset: 4762 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'There should only be one instance of a DiskSortedHashTable running per storage and header file per machine at a time.',
                position: {
                  start: { line: 89, column: 1, offset: 4763 },
                  end: { line: 89, column: 118, offset: 4880 }
                }
              }
            ],
            position: {
              start: { line: 89, column: 1, offset: 4763 },
              end: { line: 89, column: 118, offset: 4880 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 89, column: 118, offset: 4880 }
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
          'Initializes the disk sorted hash table.\n' +
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
                    value: 'Initializes the disk sorted hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 57 },
                      end: { line: 5, column: 40, offset: 96 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 57 },
                  end: { line: 5, column: 40, offset: 96 }
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
                value: 'await ht.init()',
                position: {
                  start: { line: 13, column: 1, offset: 149 },
                  end: { line: 15, column: 4, offset: 182 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 182 }
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
                value: 'await ht.clear()',
                position: {
                  start: { line: 13, column: 1, offset: 198 },
                  end: { line: 15, column: 4, offset: 232 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 232 }
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
          'Removes all system resources taken up by the disk sorted hash table.\n' +
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
                    value: 'Removes all system resources taken up by the disk sorted hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 57 },
                      end: { line: 5, column: 69, offset: 125 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 57 },
                  end: { line: 5, column: 69, offset: 125 }
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
                            type: 'text',
                            value: 'Empty promise.',
                            position: {
                              start: { line: 11, column: 5, offset: 162 },
                              end: { line: 11, column: 19, offset: 176 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 162 },
                          end: { line: 11, column: 19, offset: 176 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 160 },
                      end: { line: 11, column: 19, offset: 176 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 160 },
                  end: { line: 11, column: 19, offset: 176 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'await ht.destroy()',
                position: {
                  start: { line: 13, column: 1, offset: 178 },
                  end: { line: 15, column: 4, offset: 214 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 214 }
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
          'Closes the underlying file handles of the disk sorted hash table.\n' +
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
                    value: 'Closes the underlying file handles of the disk sorted hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 55 },
                      end: { line: 5, column: 66, offset: 120 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 55 },
                  end: { line: 5, column: 66, offset: 120 }
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
                            value: 'undefined',
                            position: {
                              start: { line: 11, column: 5, offset: 157 },
                              end: { line: 11, column: 16, offset: 168 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 157 },
                          end: { line: 11, column: 16, offset: 168 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 155 },
                      end: { line: 11, column: 16, offset: 168 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 155 },
                  end: { line: 11, column: 16, offset: 168 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'ht.close()',
                position: {
                  start: { line: 13, column: 1, offset: 170 },
                  end: { line: 15, column: 4, offset: 198 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 198 }
            }
          }
        }
      },
      {
        name: 'set',
        docs: '```coffeescript [specscript]\n' +
          'set(key string, value string|Buffer|Uint8Array, sortValue string|number) -> Promise<>\n' +
          '\n' +
          'set(key string, value string|Buffer|Uint8Array, ...sortValue Array<string|number>) -> Promise<>\n' +
          '```\n' +
          '\n' +
          'Sets and stores a value by key and sort value in the disk sorted hash table.\n' +
          '\n' +
          'Arguments:\n' +
          '  * `key` - `string` - the key to set.\n' +
          '  * `value` - `string|Buffer|Uint8Array` - the value to set corresponding to the key.\n' +
          '  * `sortValues` - `Arguments<string|number>` - values by which the item is indexed and sorted in the disk sorted hash table. If multiple sort values are provided, the sort values are treated as a composite sort value. Composite sort values have each element of their arrays compared in order.\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'set(key string, value string|Buffer|Uint8Array, sortValue string|number) -> Promise<>\n' +
                  '\n' +
                  'set(key string, value string|Buffer|Uint8Array, ...sortValue Array<string|number>) -> Promise<>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 5, column: 4, offset: 215 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Sets and stores a value by key and sort value in the disk sorted hash table.',
                    position: {
                      start: { line: 7, column: 1, offset: 217 },
                      end: { line: 7, column: 77, offset: 293 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 217 },
                  end: { line: 7, column: 77, offset: 293 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 9, column: 1, offset: 295 },
                      end: { line: 9, column: 11, offset: 305 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 1, offset: 295 },
                  end: { line: 9, column: 11, offset: 305 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 10, column: 5, offset: 310 },
                              end: { line: 10, column: 10, offset: 315 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 10, column: 10, offset: 315 },
                              end: { line: 10, column: 13, offset: 318 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 10, column: 13, offset: 318 },
                              end: { line: 10, column: 21, offset: 326 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the key to set.',
                            position: {
                              start: { line: 10, column: 21, offset: 326 },
                              end: { line: 10, column: 39, offset: 344 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 10, column: 5, offset: 310 },
                          end: { line: 10, column: 39, offset: 344 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 10, column: 3, offset: 308 },
                      end: { line: 10, column: 39, offset: 344 }
                    }
                  },
                  {
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
                              start: { line: 11, column: 5, offset: 349 },
                              end: { line: 11, column: 12, offset: 356 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 11, column: 12, offset: 356 },
                              end: { line: 11, column: 15, offset: 359 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string|Buffer|Uint8Array',
                            position: {
                              start: { line: 11, column: 15, offset: 359 },
                              end: { line: 11, column: 41, offset: 385 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the value to set corresponding to the key.',
                            position: {
                              start: { line: 11, column: 41, offset: 385 },
                              end: { line: 11, column: 86, offset: 430 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 349 },
                          end: { line: 11, column: 86, offset: 430 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 347 },
                      end: { line: 11, column: 86, offset: 430 }
                    }
                  },
                  {
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
                              start: { line: 12, column: 5, offset: 435 },
                              end: { line: 12, column: 17, offset: 447 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 12, column: 17, offset: 447 },
                              end: { line: 12, column: 20, offset: 450 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'Arguments<string|number>',
                            position: {
                              start: { line: 12, column: 20, offset: 450 },
                              end: { line: 12, column: 46, offset: 476 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - values by which the item is indexed and sorted in the disk sorted hash table. If multiple sort values are provided, the sort values are treated as a composite sort value. Composite sort values have each element of their arrays compared in order.',
                            position: {
                              start: { line: 12, column: 46, offset: 476 },
                              end: { line: 12, column: 294, offset: 724 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 12, column: 5, offset: 435 },
                          end: { line: 12, column: 294, offset: 724 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 3, offset: 433 },
                      end: { line: 12, column: 294, offset: 724 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 3, offset: 308 },
                  end: { line: 12, column: 294, offset: 724 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 14, column: 1, offset: 726 },
                      end: { line: 14, column: 8, offset: 733 }
                    }
                  }
                ],
                position: {
                  start: { line: 14, column: 1, offset: 726 },
                  end: { line: 14, column: 8, offset: 733 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 15, column: 5, offset: 738 },
                              end: { line: 15, column: 19, offset: 752 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 15, column: 5, offset: 738 },
                          end: { line: 15, column: 19, offset: 752 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 15, column: 3, offset: 736 },
                      end: { line: 15, column: 19, offset: 752 }
                    }
                  }
                ],
                position: {
                  start: { line: 15, column: 3, offset: 736 },
                  end: { line: 15, column: 19, offset: 752 }
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
                  start: { line: 17, column: 1, offset: 754 },
                  end: { line: 27, column: 4, offset: 1125 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 27, column: 4, offset: 1125 }
            }
          }
        }
      },
      {
        name: 'get',
        docs: '```coffeescript [specscript]\n' +
          'get(key string) -> value Promise<string|undefined>\n' +
          '```\n' +
          '\n' +
          'Gets a value by key from the disk sorted hash table.\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'get(key string) -> value Promise<string|undefined>',
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
                    value: 'Gets a value by key from the disk sorted hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 85 },
                      end: { line: 5, column: 53, offset: 137 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 85 },
                  end: { line: 5, column: 53, offset: 137 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 139 },
                      end: { line: 7, column: 11, offset: 149 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 139 },
                  end: { line: 7, column: 11, offset: 149 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 8, column: 5, offset: 154 },
                              end: { line: 8, column: 10, offset: 159 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 8, column: 10, offset: 159 },
                              end: { line: 8, column: 13, offset: 162 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 8, column: 13, offset: 162 },
                              end: { line: 8, column: 21, offset: 170 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the key corresponding to the value.',
                            position: {
                              start: { line: 8, column: 21, offset: 170 },
                              end: { line: 8, column: 59, offset: 208 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 154 },
                          end: { line: 8, column: 59, offset: 208 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 152 },
                      end: { line: 8, column: 59, offset: 208 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 152 },
                  end: { line: 8, column: 59, offset: 208 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 210 },
                      end: { line: 10, column: 8, offset: 217 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 210 },
                  end: { line: 10, column: 8, offset: 217 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 11, column: 5, offset: 222 },
                              end: { line: 11, column: 12, offset: 229 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 11, column: 12, offset: 229 },
                              end: { line: 11, column: 15, offset: 232 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'Promise<string|undefined>',
                            position: {
                              start: { line: 11, column: 15, offset: 232 },
                              end: { line: 11, column: 42, offset: 259 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a promise of the string value corresponding to the key. If the key is not found, the promise resolves with ',
                            position: {
                              start: { line: 11, column: 42, offset: 259 },
                              end: { line: 11, column: 152, offset: 369 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'undefined',
                            position: {
                              start: { line: 11, column: 152, offset: 369 },
                              end: { line: 11, column: 163, offset: 380 }
                            }
                          },
                          {
                            type: 'text',
                            value: '.',
                            position: {
                              start: { line: 11, column: 163, offset: 380 },
                              end: { line: 11, column: 164, offset: 381 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 222 },
                          end: { line: 11, column: 164, offset: 381 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 220 },
                      end: { line: 11, column: 164, offset: 381 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 220 },
                  end: { line: 11, column: 164, offset: 381 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const value = await ht.get("my-key")',
                position: {
                  start: { line: 13, column: 1, offset: 383 },
                  end: { line: 15, column: 4, offset: 437 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 437 }
            }
          }
        }
      },
      {
        name: 'getBinary',
        docs: '```coffeescript [specscript]\n' +
          'getBinary(key string) -> binaryValue Promise<Buffer|undefined>\n' +
          '```\n' +
          '\n' +
          'Gets a binary value by key from the disk sorted hash table.\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'getBinary(key string) -> binaryValue Promise<Buffer|undefined>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 4, offset: 95 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Gets a binary value by key from the disk sorted hash table.',
                    position: {
                      start: { line: 5, column: 1, offset: 97 },
                      end: { line: 5, column: 60, offset: 156 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 97 },
                  end: { line: 5, column: 60, offset: 156 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 7, column: 1, offset: 158 },
                      end: { line: 7, column: 11, offset: 168 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 158 },
                  end: { line: 7, column: 11, offset: 168 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 8, column: 5, offset: 173 },
                              end: { line: 8, column: 10, offset: 178 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 8, column: 10, offset: 178 },
                              end: { line: 8, column: 13, offset: 181 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'string',
                            position: {
                              start: { line: 8, column: 13, offset: 181 },
                              end: { line: 8, column: 21, offset: 189 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - the key corresponding to the binary value.',
                            position: {
                              start: { line: 8, column: 21, offset: 189 },
                              end: { line: 8, column: 66, offset: 234 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 8, column: 5, offset: 173 },
                          end: { line: 8, column: 66, offset: 234 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 3, offset: 171 },
                      end: { line: 8, column: 66, offset: 234 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 3, offset: 171 },
                  end: { line: 8, column: 66, offset: 234 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 10, column: 1, offset: 236 },
                      end: { line: 10, column: 8, offset: 243 }
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 236 },
                  end: { line: 10, column: 8, offset: 243 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 11, column: 5, offset: 248 },
                              end: { line: 11, column: 18, offset: 261 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 11, column: 18, offset: 261 },
                              end: { line: 11, column: 21, offset: 264 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'Promise<Buffer|undefined>',
                            position: {
                              start: { line: 11, column: 21, offset: 264 },
                              end: { line: 11, column: 48, offset: 291 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - a promise of the binary value corresponding to the key. If the key is not found, the promise resolves with ',
                            position: {
                              start: { line: 11, column: 48, offset: 291 },
                              end: { line: 11, column: 158, offset: 401 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'undefined',
                            position: {
                              start: { line: 11, column: 158, offset: 401 },
                              end: { line: 11, column: 169, offset: 412 }
                            }
                          },
                          {
                            type: 'text',
                            value: '.',
                            position: {
                              start: { line: 11, column: 169, offset: 412 },
                              end: { line: 11, column: 170, offset: 413 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 248 },
                          end: { line: 11, column: 170, offset: 413 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 246 },
                      end: { line: 11, column: 170, offset: 413 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 246 },
                  end: { line: 11, column: 170, offset: 413 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const buffer = await ht.getBinary("my-buffer")',
                position: {
                  start: { line: 13, column: 1, offset: 415 },
                  end: { line: 15, column: 4, offset: 479 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 479 }
            }
          }
        }
      },
      {
        name: 'forwardIterator',
        docs: '```coffeescript [specscript]\n' +
          'forwardIterator() -> values AsyncIterator<string>\n' +
          '\n' +
          'forwardIterator(options {\n' +
          '  exclusiveStartKey: string,\n' +
          '  startingSortValue: string|number|Array<string|number>,\n' +
          '  endingSortValue: string|number|Array<string|number>,\n' +
          '  valueType: "string"|"binary",\n' +
          '  limit: number,\n' +
          '}) -> values AsyncIterator<string|Buffer>\n' +
          '```\n' +
          '\n' +
          'Returns an async iterator of the values of all items in the disk sorted hash table sorted by sort value. Item values are yielded in ascending order.\n' +
          '\n' +
          'If a starting sort value and ending sort value are provided, the async iterator returns only values of items with sort values between the starting and ending sort values, including values of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the async iterator returns values of items with sort values greater than or equal to the starting sort value. If only an ending sort value is provided, the async iterator returns values of items with sort values less than or equal to the ending sort value.\n' +
          '\n' +
          'If an exclusive start key is provided, the async iterator returns values of items with sort values greater than or equal to the sort value of the item at the exclusive start key, not including the value of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the values of all items in the disk sorted hash table.\n' +
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
          '  * `values` - `AsyncIterator<string|Buffer>` - an async iterator of the values of all items in the disk sorted hash table sorted by sort value in ascending order.\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'forwardIterator() -> values AsyncIterator<string>\n' +
                  '\n' +
                  'forwardIterator(options {\n' +
                  '  exclusiveStartKey: string,\n' +
                  '  startingSortValue: string|number|Array<string|number>,\n' +
                  '  endingSortValue: string|number|Array<string|number>,\n' +
                  '  valueType: "string"|"binary",\n' +
                  '  limit: number,\n' +
                  '}) -> values AsyncIterator<string|Buffer>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 11, column: 4, offset: 341 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns an async iterator of the values of all items in the disk sorted hash table sorted by sort value. Item values are yielded in ascending order.',
                    position: {
                      start: { line: 13, column: 1, offset: 343 },
                      end: { line: 13, column: 149, offset: 491 }
                    }
                  }
                ],
                position: {
                  start: { line: 13, column: 1, offset: 343 },
                  end: { line: 13, column: 149, offset: 491 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If a starting sort value and ending sort value are provided, the async iterator returns only values of items with sort values between the starting and ending sort values, including values of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the async iterator returns values of items with sort values greater than or equal to the starting sort value. If only an ending sort value is provided, the async iterator returns values of items with sort values less than or equal to the ending sort value.',
                    position: {
                      start: { line: 15, column: 1, offset: 493 },
                      end: { line: 15, column: 560, offset: 1052 }
                    }
                  }
                ],
                position: {
                  start: { line: 15, column: 1, offset: 493 },
                  end: { line: 15, column: 560, offset: 1052 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If an exclusive start key is provided, the async iterator returns values of items with sort values greater than or equal to the sort value of the item at the exclusive start key, not including the value of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.',
                    position: {
                      start: { line: 17, column: 1, offset: 1054 },
                      end: { line: 17, column: 314, offset: 1367 }
                    }
                  }
                ],
                position: {
                  start: { line: 17, column: 1, offset: 1054 },
                  end: { line: 17, column: 314, offset: 1367 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 19, column: 1, offset: 1369 },
                      end: { line: 19, column: 11, offset: 1379 }
                    }
                  }
                ],
                position: {
                  start: { line: 19, column: 1, offset: 1369 },
                  end: { line: 19, column: 11, offset: 1379 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 20, column: 5, offset: 1384 },
                              end: { line: 20, column: 78, offset: 1457 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 20, column: 5, offset: 1384 },
                          end: { line: 20, column: 78, offset: 1457 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 20, column: 3, offset: 1382 },
                      end: { line: 20, column: 78, offset: 1457 }
                    }
                  },
                  {
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
                              start: { line: 21, column: 5, offset: 1462 },
                              end: { line: 21, column: 14, offset: 1471 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 5, offset: 1462 },
                          end: { line: 21, column: 14, offset: 1471 }
                        }
                      },
                      {
                        type: 'list',
                        ordered: false,
                        start: null,
                        spread: false,
                        children: [
                          {
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
                                        line: 22,
                                        column: 7,
                                        offset: 1478
                                      },
                                      end: {
                                        line: 22,
                                        column: 26,
                                        offset: 1497
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
                                        offset: 1497
                                      },
                                      end: {
                                        line: 22,
                                        column: 29,
                                        offset: 1500
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 29,
                                        offset: 1500
                                      },
                                      end: {
                                        line: 22,
                                        column: 37,
                                        offset: 1508
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the key after which to start iterating.',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 37,
                                        offset: 1508
                                      },
                                      end: {
                                        line: 22,
                                        column: 79,
                                        offset: 1550
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 22, column: 7, offset: 1478 },
                                  end: {
                                    line: 22,
                                    column: 79,
                                    offset: 1550
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 22, column: 5, offset: 1476 },
                              end: { line: 22, column: 79, offset: 1550 }
                            }
                          },
                          {
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
                                        line: 23,
                                        column: 7,
                                        offset: 1557
                                      },
                                      end: {
                                        line: 23,
                                        column: 26,
                                        offset: 1576
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 26,
                                        offset: 1576
                                      },
                                      end: {
                                        line: 23,
                                        column: 29,
                                        offset: 1579
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string|number|Array<string|number>',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 29,
                                        offset: 1579
                                      },
                                      end: {
                                        line: 23,
                                        column: 65,
                                        offset: 1615
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort value from which to start iterating. If this value is an array, the starting sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 65,
                                        offset: 1615
                                      },
                                      end: {
                                        line: 23,
                                        column: 277,
                                        offset: 1827
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 23, column: 7, offset: 1557 },
                                  end: {
                                    line: 23,
                                    column: 277,
                                    offset: 1827
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 23, column: 5, offset: 1555 },
                              end: { line: 23, column: 277, offset: 1827 }
                            }
                          },
                          {
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
                                        line: 24,
                                        column: 7,
                                        offset: 1834
                                      },
                                      end: {
                                        line: 24,
                                        column: 24,
                                        offset: 1851
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
                                        offset: 1851
                                      },
                                      end: {
                                        line: 24,
                                        column: 27,
                                        offset: 1854
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string|number|Array<string|number>',
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 27,
                                        offset: 1854
                                      },
                                      end: {
                                        line: 24,
                                        column: 63,
                                        offset: 1890
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort value at which to stop iterating. If this value is an array, the ending sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.',
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 63,
                                        offset: 1890
                                      },
                                      end: {
                                        line: 24,
                                        column: 270,
                                        offset: 2097
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 24, column: 7, offset: 1834 },
                                  end: {
                                    line: 24,
                                    column: 270,
                                    offset: 2097
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 24, column: 5, offset: 1832 },
                              end: { line: 24, column: 270, offset: 2097 }
                            }
                          },
                          {
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
                                        line: 25,
                                        column: 7,
                                        offset: 2104
                                      },
                                      end: {
                                        line: 25,
                                        column: 18,
                                        offset: 2115
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 25,
                                        column: 18,
                                        offset: 2115
                                      },
                                      end: {
                                        line: 25,
                                        column: 21,
                                        offset: 2118
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: '"string"|"binary"',
                                    position: {
                                      start: {
                                        line: 25,
                                        column: 21,
                                        offset: 2118
                                      },
                                      end: {
                                        line: 25,
                                        column: 40,
                                        offset: 2137
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the type of value that the async iterator yields. Defaults to ',
                                    position: {
                                      start: {
                                        line: 25,
                                        column: 40,
                                        offset: 2137
                                      },
                                      end: {
                                        line: 25,
                                        column: 105,
                                        offset: 2202
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: '"string"',
                                    position: {
                                      start: {
                                        line: 25,
                                        column: 105,
                                        offset: 2202
                                      },
                                      end: {
                                        line: 25,
                                        column: 115,
                                        offset: 2212
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: '.',
                                    position: {
                                      start: {
                                        line: 25,
                                        column: 115,
                                        offset: 2212
                                      },
                                      end: {
                                        line: 25,
                                        column: 116,
                                        offset: 2213
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 25, column: 7, offset: 2104 },
                                  end: {
                                    line: 25,
                                    column: 116,
                                    offset: 2213
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
                                                line: 26,
                                                column: 9,
                                                offset: 2222
                                              },
                                              end: {
                                                line: 26,
                                                column: 19,
                                                offset: 2232
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - async iterator yields ',
                                            position: {
                                              start: {
                                                line: 26,
                                                column: 19,
                                                offset: 2232
                                              },
                                              end: {
                                                line: 26,
                                                column: 44,
                                                offset: 2257
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'string',
                                            position: {
                                              start: {
                                                line: 26,
                                                column: 44,
                                                offset: 2257
                                              },
                                              end: {
                                                line: 26,
                                                column: 52,
                                                offset: 2265
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 26,
                                                column: 52,
                                                offset: 2265
                                              },
                                              end: {
                                                line: 26,
                                                column: 60,
                                                offset: 2273
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 26,
                                            column: 9,
                                            offset: 2222
                                          },
                                          end: {
                                            line: 26,
                                            column: 60,
                                            offset: 2273
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 26,
                                        column: 7,
                                        offset: 2220
                                      },
                                      end: {
                                        line: 26,
                                        column: 60,
                                        offset: 2273
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
                                                line: 27,
                                                column: 9,
                                                offset: 2282
                                              },
                                              end: {
                                                line: 27,
                                                column: 19,
                                                offset: 2292
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - async iterator yields ',
                                            position: {
                                              start: {
                                                line: 27,
                                                column: 19,
                                                offset: 2292
                                              },
                                              end: {
                                                line: 27,
                                                column: 44,
                                                offset: 2317
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'Buffer',
                                            position: {
                                              start: {
                                                line: 27,
                                                column: 44,
                                                offset: 2317
                                              },
                                              end: {
                                                line: 27,
                                                column: 52,
                                                offset: 2325
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 27,
                                                column: 52,
                                                offset: 2325
                                              },
                                              end: {
                                                line: 27,
                                                column: 60,
                                                offset: 2333
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 27,
                                            column: 9,
                                            offset: 2282
                                          },
                                          end: {
                                            line: 27,
                                            column: 60,
                                            offset: 2333
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 27,
                                        column: 7,
                                        offset: 2280
                                      },
                                      end: {
                                        line: 27,
                                        column: 60,
                                        offset: 2333
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 26, column: 7, offset: 2220 },
                                  end: {
                                    line: 27,
                                    column: 60,
                                    offset: 2333
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 25, column: 5, offset: 2102 },
                              end: { line: 27, column: 60, offset: 2333 }
                            }
                          },
                          {
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
                                        line: 28,
                                        column: 7,
                                        offset: 2340
                                      },
                                      end: {
                                        line: 28,
                                        column: 14,
                                        offset: 2347
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 28,
                                        column: 14,
                                        offset: 2347
                                      },
                                      end: {
                                        line: 28,
                                        column: 17,
                                        offset: 2350
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'number',
                                    position: {
                                      start: {
                                        line: 28,
                                        column: 17,
                                        offset: 2350
                                      },
                                      end: {
                                        line: 28,
                                        column: 25,
                                        offset: 2358
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the maximum number of values to yield from the async iterator.',
                                    position: {
                                      start: {
                                        line: 28,
                                        column: 25,
                                        offset: 2358
                                      },
                                      end: {
                                        line: 28,
                                        column: 90,
                                        offset: 2423
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 28, column: 7, offset: 2340 },
                                  end: {
                                    line: 28,
                                    column: 90,
                                    offset: 2423
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 28, column: 5, offset: 2338 },
                              end: { line: 28, column: 90, offset: 2423 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 22, column: 5, offset: 1476 },
                          end: { line: 28, column: 90, offset: 2423 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 21, column: 3, offset: 1460 },
                      end: { line: 28, column: 90, offset: 2423 }
                    }
                  }
                ],
                position: {
                  start: { line: 20, column: 3, offset: 1382 },
                  end: { line: 28, column: 90, offset: 2423 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 30, column: 1, offset: 2425 },
                      end: { line: 30, column: 8, offset: 2432 }
                    }
                  }
                ],
                position: {
                  start: { line: 30, column: 1, offset: 2425 },
                  end: { line: 30, column: 8, offset: 2432 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 31, column: 5, offset: 2437 },
                              end: { line: 31, column: 13, offset: 2445 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 31, column: 13, offset: 2445 },
                              end: { line: 31, column: 16, offset: 2448 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncIterator<string|Buffer>',
                            position: {
                              start: { line: 31, column: 16, offset: 2448 },
                              end: { line: 31, column: 46, offset: 2478 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the values of all items in the disk sorted hash table sorted by sort value in ascending order.',
                            position: {
                              start: { line: 31, column: 46, offset: 2478 },
                              end: { line: 31, column: 164, offset: 2596 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 31, column: 5, offset: 2437 },
                          end: { line: 31, column: 164, offset: 2596 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 31, column: 3, offset: 2435 },
                      end: { line: 31, column: 164, offset: 2596 }
                    }
                  }
                ],
                position: {
                  start: { line: 31, column: 3, offset: 2435 },
                  end: { line: 31, column: 164, offset: 2596 }
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
                  start: { line: 33, column: 1, offset: 2598 },
                  end: { line: 73, column: 4, offset: 3808 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 73, column: 4, offset: 3808 }
            }
          }
        }
      },
      {
        name: 'reverseIterator',
        docs: '```coffeescript [specscript]\n' +
          'reverseIterator() -> values AsyncIterator<string>\n' +
          '\n' +
          'reverseIterator(options {\n' +
          '  exclusiveStartKey: string,\n' +
          '  startingSortValue: string|number|Array<string|number>,\n' +
          '  endingSortValue: string|number|Array<string|number>,\n' +
          '  valueType: "string"|"binary",\n' +
          '  limit: number,\n' +
          '}) -> values AsyncIterator<string|Buffer>\n' +
          '```\n' +
          '\n' +
          'Returns an async iterator of the values of all items in the disk sorted hash table sorted by sort value. Item values are yielded in descending order.\n' +
          '\n' +
          'If a starting sort value and ending sort value are provided, the async iterator returns only values of items with sort values between the starting and ending sort values, including values of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the async iterator returns values of items with sort values less than or equal to the starting sort value.\n' +
          '\n' +
          'If an exclusive start key is provided, the async iterator returns values of items with sort values less than or equal to the sort value of the item at the exclusive start key, not including the value of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the values of all items in the disk sorted hash table.\n' +
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
          '  * `values` - `AsyncIterator<string|Buffer>` - an async iterator of the values of all items in the disk sorted hash table sorted by sort value in descending order.\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
                value: 'reverseIterator() -> values AsyncIterator<string>\n' +
                  '\n' +
                  'reverseIterator(options {\n' +
                  '  exclusiveStartKey: string,\n' +
                  '  startingSortValue: string|number|Array<string|number>,\n' +
                  '  endingSortValue: string|number|Array<string|number>,\n' +
                  '  valueType: "string"|"binary",\n' +
                  '  limit: number,\n' +
                  '}) -> values AsyncIterator<string|Buffer>',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 11, column: 4, offset: 341 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns an async iterator of the values of all items in the disk sorted hash table sorted by sort value. Item values are yielded in descending order.',
                    position: {
                      start: { line: 13, column: 1, offset: 343 },
                      end: { line: 13, column: 150, offset: 492 }
                    }
                  }
                ],
                position: {
                  start: { line: 13, column: 1, offset: 343 },
                  end: { line: 13, column: 150, offset: 492 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If a starting sort value and ending sort value are provided, the async iterator returns only values of items with sort values between the starting and ending sort values, including values of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the async iterator returns values of items with sort values less than or equal to the starting sort value.',
                    position: {
                      start: { line: 15, column: 1, offset: 494 },
                      end: { line: 15, column: 410, offset: 903 }
                    }
                  }
                ],
                position: {
                  start: { line: 15, column: 1, offset: 494 },
                  end: { line: 15, column: 410, offset: 903 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If an exclusive start key is provided, the async iterator returns values of items with sort values less than or equal to the sort value of the item at the exclusive start key, not including the value of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.',
                    position: {
                      start: { line: 17, column: 1, offset: 905 },
                      end: { line: 17, column: 311, offset: 1215 }
                    }
                  }
                ],
                position: {
                  start: { line: 17, column: 1, offset: 905 },
                  end: { line: 17, column: 311, offset: 1215 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 19, column: 1, offset: 1217 },
                      end: { line: 19, column: 11, offset: 1227 }
                    }
                  }
                ],
                position: {
                  start: { line: 19, column: 1, offset: 1217 },
                  end: { line: 19, column: 11, offset: 1227 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 20, column: 5, offset: 1232 },
                              end: { line: 20, column: 78, offset: 1305 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 20, column: 5, offset: 1232 },
                          end: { line: 20, column: 78, offset: 1305 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 20, column: 3, offset: 1230 },
                      end: { line: 20, column: 78, offset: 1305 }
                    }
                  },
                  {
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
                              start: { line: 21, column: 5, offset: 1310 },
                              end: { line: 21, column: 14, offset: 1319 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 21, column: 5, offset: 1310 },
                          end: { line: 21, column: 14, offset: 1319 }
                        }
                      },
                      {
                        type: 'list',
                        ordered: false,
                        start: null,
                        spread: false,
                        children: [
                          {
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
                                        line: 22,
                                        column: 7,
                                        offset: 1326
                                      },
                                      end: {
                                        line: 22,
                                        column: 26,
                                        offset: 1345
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
                                        offset: 1345
                                      },
                                      end: {
                                        line: 22,
                                        column: 29,
                                        offset: 1348
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 29,
                                        offset: 1348
                                      },
                                      end: {
                                        line: 22,
                                        column: 37,
                                        offset: 1356
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the key after which to start iterating.',
                                    position: {
                                      start: {
                                        line: 22,
                                        column: 37,
                                        offset: 1356
                                      },
                                      end: {
                                        line: 22,
                                        column: 79,
                                        offset: 1398
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 22, column: 7, offset: 1326 },
                                  end: {
                                    line: 22,
                                    column: 79,
                                    offset: 1398
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 22, column: 5, offset: 1324 },
                              end: { line: 22, column: 79, offset: 1398 }
                            }
                          },
                          {
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
                                        line: 23,
                                        column: 7,
                                        offset: 1405
                                      },
                                      end: {
                                        line: 23,
                                        column: 26,
                                        offset: 1424
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 26,
                                        offset: 1424
                                      },
                                      end: {
                                        line: 23,
                                        column: 29,
                                        offset: 1427
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string|number|Array<string|number>',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 29,
                                        offset: 1427
                                      },
                                      end: {
                                        line: 23,
                                        column: 65,
                                        offset: 1463
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort value from which to start iterating. If this value is an array, the starting sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.',
                                    position: {
                                      start: {
                                        line: 23,
                                        column: 65,
                                        offset: 1463
                                      },
                                      end: {
                                        line: 23,
                                        column: 277,
                                        offset: 1675
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 23, column: 7, offset: 1405 },
                                  end: {
                                    line: 23,
                                    column: 277,
                                    offset: 1675
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 23, column: 5, offset: 1403 },
                              end: { line: 23, column: 277, offset: 1675 }
                            }
                          },
                          {
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
                                        line: 24,
                                        column: 7,
                                        offset: 1682
                                      },
                                      end: {
                                        line: 24,
                                        column: 24,
                                        offset: 1699
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
                                        offset: 1699
                                      },
                                      end: {
                                        line: 24,
                                        column: 27,
                                        offset: 1702
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'string|number|Array<string|number>',
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 27,
                                        offset: 1702
                                      },
                                      end: {
                                        line: 24,
                                        column: 63,
                                        offset: 1738
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the sort value at which to stop iterating. If this value is an array, the ending sort value is treated as a composite sort value. Composite sort values have each element of their arrays compared in order.',
                                    position: {
                                      start: {
                                        line: 24,
                                        column: 63,
                                        offset: 1738
                                      },
                                      end: {
                                        line: 24,
                                        column: 270,
                                        offset: 1945
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 24, column: 7, offset: 1682 },
                                  end: {
                                    line: 24,
                                    column: 270,
                                    offset: 1945
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 24, column: 5, offset: 1680 },
                              end: { line: 24, column: 270, offset: 1945 }
                            }
                          },
                          {
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
                                        line: 25,
                                        column: 7,
                                        offset: 1952
                                      },
                                      end: {
                                        line: 25,
                                        column: 18,
                                        offset: 1963
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 25,
                                        column: 18,
                                        offset: 1963
                                      },
                                      end: {
                                        line: 25,
                                        column: 21,
                                        offset: 1966
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: '"string"|"binary"',
                                    position: {
                                      start: {
                                        line: 25,
                                        column: 21,
                                        offset: 1966
                                      },
                                      end: {
                                        line: 25,
                                        column: 40,
                                        offset: 1985
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the type of value that the async iterator yields. Defaults to ',
                                    position: {
                                      start: {
                                        line: 25,
                                        column: 40,
                                        offset: 1985
                                      },
                                      end: {
                                        line: 25,
                                        column: 105,
                                        offset: 2050
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: '"string"',
                                    position: {
                                      start: {
                                        line: 25,
                                        column: 105,
                                        offset: 2050
                                      },
                                      end: {
                                        line: 25,
                                        column: 115,
                                        offset: 2060
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: '.',
                                    position: {
                                      start: {
                                        line: 25,
                                        column: 115,
                                        offset: 2060
                                      },
                                      end: {
                                        line: 25,
                                        column: 116,
                                        offset: 2061
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 25, column: 7, offset: 1952 },
                                  end: {
                                    line: 25,
                                    column: 116,
                                    offset: 2061
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
                                                line: 26,
                                                column: 9,
                                                offset: 2070
                                              },
                                              end: {
                                                line: 26,
                                                column: 17,
                                                offset: 2078
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - async iterator yields ',
                                            position: {
                                              start: {
                                                line: 26,
                                                column: 17,
                                                offset: 2078
                                              },
                                              end: {
                                                line: 26,
                                                column: 42,
                                                offset: 2103
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'string',
                                            position: {
                                              start: {
                                                line: 26,
                                                column: 42,
                                                offset: 2103
                                              },
                                              end: {
                                                line: 26,
                                                column: 50,
                                                offset: 2111
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 26,
                                                column: 50,
                                                offset: 2111
                                              },
                                              end: {
                                                line: 26,
                                                column: 58,
                                                offset: 2119
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 26,
                                            column: 9,
                                            offset: 2070
                                          },
                                          end: {
                                            line: 26,
                                            column: 58,
                                            offset: 2119
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 26,
                                        column: 7,
                                        offset: 2068
                                      },
                                      end: {
                                        line: 26,
                                        column: 58,
                                        offset: 2119
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
                                                line: 27,
                                                column: 9,
                                                offset: 2128
                                              },
                                              end: {
                                                line: 27,
                                                column: 17,
                                                offset: 2136
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' - async iterator yields ',
                                            position: {
                                              start: {
                                                line: 27,
                                                column: 17,
                                                offset: 2136
                                              },
                                              end: {
                                                line: 27,
                                                column: 42,
                                                offset: 2161
                                              }
                                            }
                                          },
                                          {
                                            type: 'inlineCode',
                                            value: 'Buffer',
                                            position: {
                                              start: {
                                                line: 27,
                                                column: 42,
                                                offset: 2161
                                              },
                                              end: {
                                                line: 27,
                                                column: 50,
                                                offset: 2169
                                              }
                                            }
                                          },
                                          {
                                            type: 'text',
                                            value: ' values.',
                                            position: {
                                              start: {
                                                line: 27,
                                                column: 50,
                                                offset: 2169
                                              },
                                              end: {
                                                line: 27,
                                                column: 58,
                                                offset: 2177
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 27,
                                            column: 9,
                                            offset: 2128
                                          },
                                          end: {
                                            line: 27,
                                            column: 58,
                                            offset: 2177
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 27,
                                        column: 7,
                                        offset: 2126
                                      },
                                      end: {
                                        line: 27,
                                        column: 58,
                                        offset: 2177
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 26, column: 7, offset: 2068 },
                                  end: {
                                    line: 27,
                                    column: 58,
                                    offset: 2177
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 25, column: 5, offset: 1950 },
                              end: { line: 27, column: 58, offset: 2177 }
                            }
                          },
                          {
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
                                        line: 28,
                                        column: 7,
                                        offset: 2184
                                      },
                                      end: {
                                        line: 28,
                                        column: 14,
                                        offset: 2191
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - ',
                                    position: {
                                      start: {
                                        line: 28,
                                        column: 14,
                                        offset: 2191
                                      },
                                      end: {
                                        line: 28,
                                        column: 17,
                                        offset: 2194
                                      }
                                    }
                                  },
                                  {
                                    type: 'inlineCode',
                                    value: 'number',
                                    position: {
                                      start: {
                                        line: 28,
                                        column: 17,
                                        offset: 2194
                                      },
                                      end: {
                                        line: 28,
                                        column: 25,
                                        offset: 2202
                                      }
                                    }
                                  },
                                  {
                                    type: 'text',
                                    value: ' - the maximum number of values to yield from the async iterator.',
                                    position: {
                                      start: {
                                        line: 28,
                                        column: 25,
                                        offset: 2202
                                      },
                                      end: {
                                        line: 28,
                                        column: 90,
                                        offset: 2267
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 28, column: 7, offset: 2184 },
                                  end: {
                                    line: 28,
                                    column: 90,
                                    offset: 2267
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 28, column: 5, offset: 2182 },
                              end: { line: 28, column: 90, offset: 2267 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 22, column: 5, offset: 1324 },
                          end: { line: 28, column: 90, offset: 2267 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 21, column: 3, offset: 1308 },
                      end: { line: 28, column: 90, offset: 2267 }
                    }
                  }
                ],
                position: {
                  start: { line: 20, column: 3, offset: 1230 },
                  end: { line: 28, column: 90, offset: 2267 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 30, column: 1, offset: 2269 },
                      end: { line: 30, column: 8, offset: 2276 }
                    }
                  }
                ],
                position: {
                  start: { line: 30, column: 1, offset: 2269 },
                  end: { line: 30, column: 8, offset: 2276 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 31, column: 5, offset: 2281 },
                              end: { line: 31, column: 13, offset: 2289 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 31, column: 13, offset: 2289 },
                              end: { line: 31, column: 16, offset: 2292 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncIterator<string|Buffer>',
                            position: {
                              start: { line: 31, column: 16, offset: 2292 },
                              end: { line: 31, column: 46, offset: 2322 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the values of all items in the disk sorted hash table sorted by sort value in descending order.',
                            position: {
                              start: { line: 31, column: 46, offset: 2322 },
                              end: { line: 31, column: 165, offset: 2441 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 31, column: 5, offset: 2281 },
                          end: { line: 31, column: 165, offset: 2441 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 31, column: 3, offset: 2279 },
                      end: { line: 31, column: 165, offset: 2441 }
                    }
                  }
                ],
                position: {
                  start: { line: 31, column: 3, offset: 2279 },
                  end: { line: 31, column: 165, offset: 2441 }
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
                  start: { line: 33, column: 1, offset: 2443 },
                  end: { line: 73, column: 4, offset: 3653 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 73, column: 4, offset: 3653 }
            }
          }
        }
      },
      {
        name: 'forwardEntriesIterator',
        docs: '```coffeescript [specscript]\n' +
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
          'Returns an async iterator of the entries (key, value, and sort value) of all items in the disk sorted hash table sorted by sort value. Item entries are yielded in ascending order.\n' +
          '\n' +
          'If a starting sort value and ending sort value are provided, the async iterator returns only entries of items with sort values between the starting and ending sort values, including entries of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the async iterator returns entries of items with sort values greater than or equal to the starting sort value. If only an ending sort value is provided, the async iterator returns entries of items with sort values less than or equal to the ending sort value.\n' +
          '\n' +
          'If an exclusive start key is provided, the async iterator returns entries of items with sort values greater than or equal to the sort value of the item at the exclusive start key, not including the entry of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the entries of all items in the disk sorted hash table.\n' +
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
          '  * `entries` - `AsyncIterator<[key string, value string|Buffer, sortValue string|number]>` - an async iterator of the entries of all items in the disk sorted hash table sorted by sort value in ascending order.\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
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
                  end: { line: 33, column: 4, offset: 748 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns an async iterator of the entries (key, value, and sort value) of all items in the disk sorted hash table sorted by sort value. Item entries are yielded in ascending order.',
                    position: {
                      start: { line: 35, column: 1, offset: 750 },
                      end: { line: 35, column: 180, offset: 929 }
                    }
                  }
                ],
                position: {
                  start: { line: 35, column: 1, offset: 750 },
                  end: { line: 35, column: 180, offset: 929 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If a starting sort value and ending sort value are provided, the async iterator returns only entries of items with sort values between the starting and ending sort values, including entries of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the async iterator returns entries of items with sort values greater than or equal to the starting sort value. If only an ending sort value is provided, the async iterator returns entries of items with sort values less than or equal to the ending sort value.',
                    position: {
                      start: { line: 37, column: 1, offset: 931 },
                      end: { line: 37, column: 564, offset: 1494 }
                    }
                  }
                ],
                position: {
                  start: { line: 37, column: 1, offset: 931 },
                  end: { line: 37, column: 564, offset: 1494 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If an exclusive start key is provided, the async iterator returns entries of items with sort values greater than or equal to the sort value of the item at the exclusive start key, not including the entry of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.',
                    position: {
                      start: { line: 39, column: 1, offset: 1496 },
                      end: { line: 39, column: 315, offset: 1810 }
                    }
                  }
                ],
                position: {
                  start: { line: 39, column: 1, offset: 1496 },
                  end: { line: 39, column: 315, offset: 1810 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 41, column: 1, offset: 1812 },
                      end: { line: 41, column: 11, offset: 1822 }
                    }
                  }
                ],
                position: {
                  start: { line: 41, column: 1, offset: 1812 },
                  end: { line: 41, column: 11, offset: 1822 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 42, column: 5, offset: 1827 },
                              end: { line: 42, column: 79, offset: 1901 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 42, column: 5, offset: 1827 },
                          end: { line: 42, column: 79, offset: 1901 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 42, column: 3, offset: 1825 },
                      end: { line: 42, column: 79, offset: 1901 }
                    }
                  },
                  {
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
                              start: { line: 43, column: 5, offset: 1906 },
                              end: { line: 43, column: 14, offset: 1915 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 43, column: 5, offset: 1906 },
                          end: { line: 43, column: 14, offset: 1915 }
                        }
                      },
                      {
                        type: 'list',
                        ordered: false,
                        start: null,
                        spread: false,
                        children: [
                          {
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
                                        offset: 1922
                                      },
                                      end: {
                                        line: 44,
                                        column: 26,
                                        offset: 1941
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
                                        offset: 1941
                                      },
                                      end: {
                                        line: 44,
                                        column: 29,
                                        offset: 1944
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
                                        offset: 1944
                                      },
                                      end: {
                                        line: 44,
                                        column: 37,
                                        offset: 1952
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
                                        offset: 1952
                                      },
                                      end: {
                                        line: 44,
                                        column: 79,
                                        offset: 1994
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 44, column: 7, offset: 1922 },
                                  end: {
                                    line: 44,
                                    column: 79,
                                    offset: 1994
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 44, column: 5, offset: 1920 },
                              end: { line: 44, column: 79, offset: 1994 }
                            }
                          },
                          {
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
                                        offset: 2001
                                      },
                                      end: {
                                        line: 45,
                                        column: 26,
                                        offset: 2020
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
                                        offset: 2020
                                      },
                                      end: {
                                        line: 45,
                                        column: 29,
                                        offset: 2023
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
                                        offset: 2023
                                      },
                                      end: {
                                        line: 45,
                                        column: 65,
                                        offset: 2059
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
                                        offset: 2059
                                      },
                                      end: {
                                        line: 45,
                                        column: 277,
                                        offset: 2271
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 45, column: 7, offset: 2001 },
                                  end: {
                                    line: 45,
                                    column: 277,
                                    offset: 2271
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 45, column: 5, offset: 1999 },
                              end: { line: 45, column: 277, offset: 2271 }
                            }
                          },
                          {
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
                                        offset: 2278
                                      },
                                      end: {
                                        line: 46,
                                        column: 24,
                                        offset: 2295
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
                                        offset: 2295
                                      },
                                      end: {
                                        line: 46,
                                        column: 27,
                                        offset: 2298
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
                                        offset: 2298
                                      },
                                      end: {
                                        line: 46,
                                        column: 63,
                                        offset: 2334
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
                                        offset: 2334
                                      },
                                      end: {
                                        line: 46,
                                        column: 270,
                                        offset: 2541
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 46, column: 7, offset: 2278 },
                                  end: {
                                    line: 46,
                                    column: 270,
                                    offset: 2541
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 46, column: 5, offset: 2276 },
                              end: { line: 46, column: 270, offset: 2541 }
                            }
                          },
                          {
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
                                        offset: 2548
                                      },
                                      end: {
                                        line: 47,
                                        column: 18,
                                        offset: 2559
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
                                        offset: 2559
                                      },
                                      end: {
                                        line: 47,
                                        column: 21,
                                        offset: 2562
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
                                        offset: 2562
                                      },
                                      end: {
                                        line: 47,
                                        column: 40,
                                        offset: 2581
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
                                        offset: 2581
                                      },
                                      end: {
                                        line: 47,
                                        column: 105,
                                        offset: 2646
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
                                        offset: 2646
                                      },
                                      end: {
                                        line: 47,
                                        column: 115,
                                        offset: 2656
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
                                        offset: 2656
                                      },
                                      end: {
                                        line: 47,
                                        column: 116,
                                        offset: 2657
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 47, column: 7, offset: 2548 },
                                  end: {
                                    line: 47,
                                    column: 116,
                                    offset: 2657
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
                                                offset: 2666
                                              },
                                              end: {
                                                line: 48,
                                                column: 19,
                                                offset: 2676
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
                                                offset: 2676
                                              },
                                              end: {
                                                line: 48,
                                                column: 57,
                                                offset: 2714
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
                                                offset: 2714
                                              },
                                              end: {
                                                line: 48,
                                                column: 65,
                                                offset: 2722
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
                                                offset: 2722
                                              },
                                              end: {
                                                line: 48,
                                                column: 73,
                                                offset: 2730
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 48,
                                            column: 9,
                                            offset: 2666
                                          },
                                          end: {
                                            line: 48,
                                            column: 73,
                                            offset: 2730
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 48,
                                        column: 7,
                                        offset: 2664
                                      },
                                      end: {
                                        line: 48,
                                        column: 73,
                                        offset: 2730
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
                                                offset: 2739
                                              },
                                              end: {
                                                line: 49,
                                                column: 19,
                                                offset: 2749
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
                                                offset: 2749
                                              },
                                              end: {
                                                line: 49,
                                                column: 57,
                                                offset: 2787
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
                                                offset: 2787
                                              },
                                              end: {
                                                line: 49,
                                                column: 65,
                                                offset: 2795
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
                                                offset: 2795
                                              },
                                              end: {
                                                line: 49,
                                                column: 73,
                                                offset: 2803
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 49,
                                            column: 9,
                                            offset: 2739
                                          },
                                          end: {
                                            line: 49,
                                            column: 73,
                                            offset: 2803
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 49,
                                        column: 7,
                                        offset: 2737
                                      },
                                      end: {
                                        line: 49,
                                        column: 73,
                                        offset: 2803
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 48, column: 7, offset: 2664 },
                                  end: {
                                    line: 49,
                                    column: 73,
                                    offset: 2803
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 47, column: 5, offset: 2546 },
                              end: { line: 49, column: 73, offset: 2803 }
                            }
                          },
                          {
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
                                        offset: 2810
                                      },
                                      end: {
                                        line: 50,
                                        column: 14,
                                        offset: 2817
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
                                        offset: 2817
                                      },
                                      end: {
                                        line: 50,
                                        column: 17,
                                        offset: 2820
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
                                        offset: 2820
                                      },
                                      end: {
                                        line: 50,
                                        column: 25,
                                        offset: 2828
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
                                        offset: 2828
                                      },
                                      end: {
                                        line: 50,
                                        column: 91,
                                        offset: 2894
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 50, column: 7, offset: 2810 },
                                  end: {
                                    line: 50,
                                    column: 91,
                                    offset: 2894
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 50, column: 5, offset: 2808 },
                              end: { line: 50, column: 91, offset: 2894 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 44, column: 5, offset: 1920 },
                          end: { line: 50, column: 91, offset: 2894 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 43, column: 3, offset: 1904 },
                      end: { line: 50, column: 91, offset: 2894 }
                    }
                  }
                ],
                position: {
                  start: { line: 42, column: 3, offset: 1825 },
                  end: { line: 50, column: 91, offset: 2894 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 52, column: 1, offset: 2896 },
                      end: { line: 52, column: 8, offset: 2903 }
                    }
                  }
                ],
                position: {
                  start: { line: 52, column: 1, offset: 2896 },
                  end: { line: 52, column: 8, offset: 2903 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 53, column: 5, offset: 2908 },
                              end: { line: 53, column: 14, offset: 2917 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 53, column: 14, offset: 2917 },
                              end: { line: 53, column: 17, offset: 2920 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncIterator<[key string, value string|Buffer, sortValue string|number]>',
                            position: {
                              start: { line: 53, column: 17, offset: 2920 },
                              end: { line: 53, column: 92, offset: 2995 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the entries of all items in the disk sorted hash table sorted by sort value in ascending order.',
                            position: {
                              start: { line: 53, column: 92, offset: 2995 },
                              end: { line: 53, column: 211, offset: 3114 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 53, column: 5, offset: 2908 },
                          end: { line: 53, column: 211, offset: 3114 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 53, column: 3, offset: 2906 },
                      end: { line: 53, column: 211, offset: 3114 }
                    }
                  }
                ],
                position: {
                  start: { line: 53, column: 3, offset: 2906 },
                  end: { line: 53, column: 211, offset: 3114 }
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
                  start: { line: 55, column: 1, offset: 3116 },
                  end: { line: 95, column: 4, offset: 4764 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 95, column: 4, offset: 4764 }
            }
          }
        }
      },
      {
        name: 'reverseEntriesIterator',
        docs: '```coffeescript [specscript]\n' +
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
          'Returns an async iterator of the entries (key, value, and sort value) of all items in the disk sorted hash table sorted by sort value. Item entries are yielded in descending order.\n' +
          '\n' +
          'If a starting sort value and ending sort value are provided, the async iterator returns only entries of items with sort values between the starting and ending sort values, including entries of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the async iterator returns entries of items with sort values less than or equal to the starting sort value.\n' +
          '\n' +
          'If an exclusive start key is provided, the async iterator returns entries of items with sort values less than or equal to the sort value of the item at the exclusive start key, not including the entry of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.\n' +
          '\n' +
          'Arguments:\n' +
          '  * (none) - retrieves the entries of all items in the disk sorted hash table.\n' +
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
          '  * `entries` - `AsyncIterator<[key string, value string|Buffer, sortValue string|number]>` - an async iterator of the entries of all items in the disk sorted hash table sorted by sort value in descending order.\n' +
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
                lang: 'coffeescript',
                meta: '[specscript]',
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
                  end: { line: 33, column: 4, offset: 748 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Returns an async iterator of the entries (key, value, and sort value) of all items in the disk sorted hash table sorted by sort value. Item entries are yielded in descending order.',
                    position: {
                      start: { line: 35, column: 1, offset: 750 },
                      end: { line: 35, column: 181, offset: 930 }
                    }
                  }
                ],
                position: {
                  start: { line: 35, column: 1, offset: 750 },
                  end: { line: 35, column: 181, offset: 930 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If a starting sort value and ending sort value are provided, the async iterator returns only entries of items with sort values between the starting and ending sort values, including entries of items with sort values equal to the starting and ending sort values. If only a starting sort value is provided, the async iterator returns entries of items with sort values less than or equal to the starting sort value.',
                    position: {
                      start: { line: 37, column: 1, offset: 932 },
                      end: { line: 37, column: 413, offset: 1344 }
                    }
                  }
                ],
                position: {
                  start: { line: 37, column: 1, offset: 932 },
                  end: { line: 37, column: 413, offset: 1344 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'If an exclusive start key is provided, the async iterator returns entries of items with sort values less than or equal to the sort value of the item at the exclusive start key, not including the entry of the item at the exclusive start key. The exclusive start key takes precedence over the starting sort value.',
                    position: {
                      start: { line: 39, column: 1, offset: 1346 },
                      end: { line: 39, column: 312, offset: 1657 }
                    }
                  }
                ],
                position: {
                  start: { line: 39, column: 1, offset: 1346 },
                  end: { line: 39, column: 312, offset: 1657 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Arguments:',
                    position: {
                      start: { line: 41, column: 1, offset: 1659 },
                      end: { line: 41, column: 11, offset: 1669 }
                    }
                  }
                ],
                position: {
                  start: { line: 41, column: 1, offset: 1659 },
                  end: { line: 41, column: 11, offset: 1669 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
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
                              start: { line: 42, column: 5, offset: 1674 },
                              end: { line: 42, column: 79, offset: 1748 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 42, column: 5, offset: 1674 },
                          end: { line: 42, column: 79, offset: 1748 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 42, column: 3, offset: 1672 },
                      end: { line: 42, column: 79, offset: 1748 }
                    }
                  },
                  {
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
                              start: { line: 43, column: 5, offset: 1753 },
                              end: { line: 43, column: 14, offset: 1762 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 43, column: 5, offset: 1753 },
                          end: { line: 43, column: 14, offset: 1762 }
                        }
                      },
                      {
                        type: 'list',
                        ordered: false,
                        start: null,
                        spread: false,
                        children: [
                          {
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
                                        offset: 1769
                                      },
                                      end: {
                                        line: 44,
                                        column: 26,
                                        offset: 1788
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
                                        offset: 1788
                                      },
                                      end: {
                                        line: 44,
                                        column: 29,
                                        offset: 1791
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
                                        offset: 1791
                                      },
                                      end: {
                                        line: 44,
                                        column: 37,
                                        offset: 1799
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
                                        offset: 1799
                                      },
                                      end: {
                                        line: 44,
                                        column: 79,
                                        offset: 1841
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 44, column: 7, offset: 1769 },
                                  end: {
                                    line: 44,
                                    column: 79,
                                    offset: 1841
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 44, column: 5, offset: 1767 },
                              end: { line: 44, column: 79, offset: 1841 }
                            }
                          },
                          {
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
                                        offset: 1848
                                      },
                                      end: {
                                        line: 45,
                                        column: 26,
                                        offset: 1867
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
                                        offset: 1867
                                      },
                                      end: {
                                        line: 45,
                                        column: 29,
                                        offset: 1870
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
                                        offset: 1870
                                      },
                                      end: {
                                        line: 45,
                                        column: 65,
                                        offset: 1906
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
                                        offset: 1906
                                      },
                                      end: {
                                        line: 45,
                                        column: 277,
                                        offset: 2118
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 45, column: 7, offset: 1848 },
                                  end: {
                                    line: 45,
                                    column: 277,
                                    offset: 2118
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 45, column: 5, offset: 1846 },
                              end: { line: 45, column: 277, offset: 2118 }
                            }
                          },
                          {
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
                                        offset: 2125
                                      },
                                      end: {
                                        line: 46,
                                        column: 24,
                                        offset: 2142
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
                                        offset: 2142
                                      },
                                      end: {
                                        line: 46,
                                        column: 27,
                                        offset: 2145
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
                                        offset: 2145
                                      },
                                      end: {
                                        line: 46,
                                        column: 63,
                                        offset: 2181
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
                                        offset: 2181
                                      },
                                      end: {
                                        line: 46,
                                        column: 270,
                                        offset: 2388
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 46, column: 7, offset: 2125 },
                                  end: {
                                    line: 46,
                                    column: 270,
                                    offset: 2388
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 46, column: 5, offset: 2123 },
                              end: { line: 46, column: 270, offset: 2388 }
                            }
                          },
                          {
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
                                        offset: 2395
                                      },
                                      end: {
                                        line: 47,
                                        column: 18,
                                        offset: 2406
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
                                        offset: 2406
                                      },
                                      end: {
                                        line: 47,
                                        column: 21,
                                        offset: 2409
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
                                        offset: 2409
                                      },
                                      end: {
                                        line: 47,
                                        column: 40,
                                        offset: 2428
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
                                        offset: 2428
                                      },
                                      end: {
                                        line: 47,
                                        column: 105,
                                        offset: 2493
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
                                        offset: 2493
                                      },
                                      end: {
                                        line: 47,
                                        column: 115,
                                        offset: 2503
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
                                        offset: 2503
                                      },
                                      end: {
                                        line: 47,
                                        column: 116,
                                        offset: 2504
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 47, column: 7, offset: 2395 },
                                  end: {
                                    line: 47,
                                    column: 116,
                                    offset: 2504
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
                                                offset: 2513
                                              },
                                              end: {
                                                line: 48,
                                                column: 17,
                                                offset: 2521
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
                                                offset: 2521
                                              },
                                              end: {
                                                line: 48,
                                                column: 55,
                                                offset: 2559
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
                                                offset: 2559
                                              },
                                              end: {
                                                line: 48,
                                                column: 63,
                                                offset: 2567
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
                                                offset: 2567
                                              },
                                              end: {
                                                line: 48,
                                                column: 71,
                                                offset: 2575
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 48,
                                            column: 9,
                                            offset: 2513
                                          },
                                          end: {
                                            line: 48,
                                            column: 71,
                                            offset: 2575
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 48,
                                        column: 7,
                                        offset: 2511
                                      },
                                      end: {
                                        line: 48,
                                        column: 71,
                                        offset: 2575
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
                                                offset: 2584
                                              },
                                              end: {
                                                line: 49,
                                                column: 17,
                                                offset: 2592
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
                                                offset: 2592
                                              },
                                              end: {
                                                line: 49,
                                                column: 55,
                                                offset: 2630
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
                                                offset: 2630
                                              },
                                              end: {
                                                line: 49,
                                                column: 63,
                                                offset: 2638
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
                                                offset: 2638
                                              },
                                              end: {
                                                line: 49,
                                                column: 71,
                                                offset: 2646
                                              }
                                            }
                                          }
                                        ],
                                        position: {
                                          start: {
                                            line: 49,
                                            column: 9,
                                            offset: 2584
                                          },
                                          end: {
                                            line: 49,
                                            column: 71,
                                            offset: 2646
                                          }
                                        }
                                      }
                                    ],
                                    position: {
                                      start: {
                                        line: 49,
                                        column: 7,
                                        offset: 2582
                                      },
                                      end: {
                                        line: 49,
                                        column: 71,
                                        offset: 2646
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 48, column: 7, offset: 2511 },
                                  end: {
                                    line: 49,
                                    column: 71,
                                    offset: 2646
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 47, column: 5, offset: 2393 },
                              end: { line: 49, column: 71, offset: 2646 }
                            }
                          },
                          {
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
                                        offset: 2653
                                      },
                                      end: {
                                        line: 50,
                                        column: 14,
                                        offset: 2660
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
                                        offset: 2660
                                      },
                                      end: {
                                        line: 50,
                                        column: 17,
                                        offset: 2663
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
                                        offset: 2663
                                      },
                                      end: {
                                        line: 50,
                                        column: 25,
                                        offset: 2671
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
                                        offset: 2671
                                      },
                                      end: {
                                        line: 50,
                                        column: 91,
                                        offset: 2737
                                      }
                                    }
                                  }
                                ],
                                position: {
                                  start: { line: 50, column: 7, offset: 2653 },
                                  end: {
                                    line: 50,
                                    column: 91,
                                    offset: 2737
                                  }
                                }
                              }
                            ],
                            position: {
                              start: { line: 50, column: 5, offset: 2651 },
                              end: { line: 50, column: 91, offset: 2737 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 44, column: 5, offset: 1767 },
                          end: { line: 50, column: 91, offset: 2737 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 43, column: 3, offset: 1751 },
                      end: { line: 50, column: 91, offset: 2737 }
                    }
                  }
                ],
                position: {
                  start: { line: 42, column: 3, offset: 1672 },
                  end: { line: 50, column: 91, offset: 2737 }
                }
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: 'Return:',
                    position: {
                      start: { line: 52, column: 1, offset: 2739 },
                      end: { line: 52, column: 8, offset: 2746 }
                    }
                  }
                ],
                position: {
                  start: { line: 52, column: 1, offset: 2739 },
                  end: { line: 52, column: 8, offset: 2746 }
                }
              },
              {
                type: 'list',
                ordered: false,
                start: null,
                spread: false,
                children: [
                  {
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
                              start: { line: 53, column: 5, offset: 2751 },
                              end: { line: 53, column: 14, offset: 2760 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - ',
                            position: {
                              start: { line: 53, column: 14, offset: 2760 },
                              end: { line: 53, column: 17, offset: 2763 }
                            }
                          },
                          {
                            type: 'inlineCode',
                            value: 'AsyncIterator<[key string, value string|Buffer, sortValue string|number]>',
                            position: {
                              start: { line: 53, column: 17, offset: 2763 },
                              end: { line: 53, column: 92, offset: 2838 }
                            }
                          },
                          {
                            type: 'text',
                            value: ' - an async iterator of the entries of all items in the disk sorted hash table sorted by sort value in descending order.',
                            position: {
                              start: { line: 53, column: 92, offset: 2838 },
                              end: { line: 53, column: 212, offset: 2958 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 53, column: 5, offset: 2751 },
                          end: { line: 53, column: 212, offset: 2958 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 53, column: 3, offset: 2749 },
                      end: { line: 53, column: 212, offset: 2958 }
                    }
                  }
                ],
                position: {
                  start: { line: 53, column: 3, offset: 2749 },
                  end: { line: 53, column: 212, offset: 2958 }
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
                  start: { line: 55, column: 1, offset: 2960 },
                  end: { line: 95, column: 4, offset: 4608 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 95, column: 4, offset: 4608 }
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
                            value: ' - a promise of whether the key and corresponding value were deleted.',
                            position: {
                              start: { line: 11, column: 28, offset: 229 },
                              end: { line: 11, column: 97, offset: 298 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 11, column: 5, offset: 206 },
                          end: { line: 11, column: 97, offset: 298 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 3, offset: 204 },
                      end: { line: 11, column: 97, offset: 298 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 3, offset: 204 },
                  end: { line: 11, column: 97, offset: 298 }
                }
              },
              {
                type: 'code',
                lang: 'javascript',
                meta: null,
                value: 'const didDelete = await ht.delete("my-key")',
                position: {
                  start: { line: 13, column: 1, offset: 300 },
                  end: { line: 15, column: 4, offset: 361 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 361 }
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
                value: 'const count = ht.count()',
                position: {
                  start: { line: 13, column: 1, offset: 210 },
                  end: { line: 15, column: 4, offset: 252 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 252 }
            }
          }
        }
      }
    ],
    fileName: '/home/richard/code/presidium.services/../presidium-db-docs/DiskSortedHashTable.js'
  }
]