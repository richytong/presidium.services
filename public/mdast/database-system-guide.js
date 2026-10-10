export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: Database System Guide\n' +
        'author: Richard Tong, King of Technology at CLOUŢ\n' +
        'date: 2026-05-01\n' +
        'updated: 2026-10-09\n' +
        'path: /blog/database-system-guide\n' +
        'description: Database System Guide with Presidium DiskSortedHashTable and DiskHashTable classes.\n' +
        'image: /assets/disk-lights-w2000.jpg',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 291 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to the Presidium database system guide. This guide will help users of the Presidium library host their own database systems using the Presidium ',
          position: {
            start: { line: 11, column: 1, offset: 293 },
            end: { line: 11, column: 153, offset: 445 }
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
                start: { line: 11, column: 154, offset: 446 },
                end: { line: 11, column: 167, offset: 459 }
              }
            }
          ],
          position: {
            start: { line: 11, column: 153, offset: 445 },
            end: { line: 11, column: 189, offset: 481 }
          }
        },
        {
          type: 'text',
          value: ' (disk hash table) and ',
          position: {
            start: { line: 11, column: 189, offset: 481 },
            end: { line: 11, column: 212, offset: 504 }
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
                start: { line: 11, column: 213, offset: 505 },
                end: { line: 11, column: 232, offset: 524 }
              }
            }
          ],
          position: {
            start: { line: 11, column: 212, offset: 504 },
            end: { line: 11, column: 260, offset: 552 }
          }
        },
        {
          type: 'text',
          value: ' (disk sorted hash table) classes. This guide will cover database system setup as well as practices and strategies for high availability, performance, and security.',
          position: {
            start: { line: 11, column: 260, offset: 552 },
            end: { line: 11, column: 424, offset: 716 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 293 },
        end: { line: 11, column: 424, offset: 716 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Database System Setup',
          position: {
            start: { line: 13, column: 4, offset: 721 },
            end: { line: 13, column: 25, offset: 742 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 718 },
        end: { line: 13, column: 25, offset: 742 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The database system can be hosted on physical servers or virtual servers. The servers should be connected to the internet, and must use the Linux operating system. The servers should be differentiated into storage servers and load-balancer servers, with the load-balancer servers distributing requests to the storage servers. The storage servers must use Node.js and should have the DiskHashTable and DiskSortedHashTable classes installed with the ',
          position: {
            start: { line: 14, column: 1, offset: 743 },
            end: { line: 14, column: 449, offset: 1191 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://github.com/richytong/presidium',
          children: [
            {
              type: 'text',
              value: 'Presidium',
              position: {
                start: { line: 14, column: 450, offset: 1192 },
                end: { line: 14, column: 459, offset: 1201 }
              }
            }
          ],
          position: {
            start: { line: 14, column: 449, offset: 1191 },
            end: { line: 14, column: 500, offset: 1242 }
          }
        },
        {
          type: 'text',
          value: ' library or the ',
          position: {
            start: { line: 14, column: 500, offset: 1242 },
            end: { line: 14, column: 516, offset: 1258 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://github.com/richytong/presidium-db',
          children: [
            {
              type: 'text',
              value: 'Presidium DB',
              position: {
                start: { line: 14, column: 517, offset: 1259 },
                end: { line: 14, column: 529, offset: 1271 }
              }
            }
          ],
          position: {
            start: { line: 14, column: 516, offset: 1258 },
            end: { line: 14, column: 573, offset: 1315 }
          }
        },
        {
          type: 'text',
          value: ' library. The load-balancer servers and storage servers should communicate using HTTP or WebSocket.',
          position: {
            start: { line: 14, column: 573, offset: 1315 },
            end: { line: 14, column: 672, offset: 1414 }
          }
        }
      ],
      position: {
        start: { line: 14, column: 1, offset: 743 },
        end: { line: 14, column: 672, offset: 1414 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Load-Balancer Server',
          position: {
            start: { line: 16, column: 5, offset: 1420 },
            end: { line: 16, column: 25, offset: 1440 }
          }
        }
      ],
      position: {
        start: { line: 16, column: 1, offset: 1416 },
        end: { line: 16, column: 25, offset: 1440 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The load-balancer server should distribute incoming requests to the storage servers using a hash function. Incoming requests should have the intended table operation (set or delete), the table name, and the key, value, and/or sort-value parameters. The hash function should take the request information and a list of storage server addresses as parameters and return the index of the storage server address to which the request should be routed. The load-balancer server should then make a separate request to the resolved storage server address with the information from the incoming request.',
          position: {
            start: { line: 17, column: 1, offset: 1441 },
            end: { line: 17, column: 594, offset: 2034 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 1441 },
        end: { line: 17, column: 594, offset: 2034 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Storage Server',
          position: {
            start: { line: 19, column: 5, offset: 2040 },
            end: { line: 19, column: 19, offset: 2054 }
          }
        }
      ],
      position: {
        start: { line: 19, column: 1, offset: 2036 },
        end: { line: 19, column: 19, offset: 2054 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The storage server should store the data files created and used by the disk hash tables and the disk sorted hash tables and serve incoming requests from the load-balancer server. The storage server can use local disks, network-attached storage (NAS), or cloud storage. For an incoming request with a set operation, the storage server should call the set method of the disk hash table or disk sorted hash table indicated by the table name of the incoming request. Likewise, for an incoming request with a delete operation, the storage server should call the delete method of the indicated table.',
          position: {
            start: { line: 20, column: 1, offset: 2055 },
            end: { line: 20, column: 595, offset: 2649 }
          }
        }
      ],
      position: {
        start: { line: 20, column: 1, offset: 2055 },
        end: { line: 20, column: 595, offset: 2649 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Disk Hash Table vs Disk Sorted Hash Table',
          position: {
            start: { line: 22, column: 5, offset: 2655 },
            end: { line: 22, column: 46, offset: 2696 }
          }
        }
      ],
      position: {
        start: { line: 22, column: 1, offset: 2651 },
        end: { line: 22, column: 46, offset: 2696 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When choosing between the disk hash table and the disk sorted hash table, the following tradeoffs should be considered:',
          position: {
            start: { line: 23, column: 1, offset: 2697 },
            end: { line: 23, column: 120, offset: 2816 }
          }
        }
      ],
      position: {
        start: { line: 23, column: 1, offset: 2697 },
        end: { line: 23, column: 120, offset: 2816 }
      }
    },
    {
      type: 'list',
      ordered: false,
      start: null,
      spread: false,
      children: [
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
                  value: 'Time complexity - the disk hash table has O(1) time complexity for the set and delete operations, while the disk sorted hash table has O(log n) time complexity for the set and delete operations.',
                  position: {
                    start: { line: 25, column: 5, offset: 2822 },
                    end: { line: 25, column: 199, offset: 3016 }
                  }
                }
              ],
              position: {
                start: { line: 25, column: 5, offset: 2822 },
                end: { line: 25, column: 199, offset: 3016 }
              }
            }
          ],
          position: {
            start: { line: 25, column: 3, offset: 2820 },
            end: { line: 25, column: 199, offset: 3016 }
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
                  value: 'Item order - the disk hash table can iterate through its stored items in reverse insertion order, while the disk sorted hash table can iterate through its stored items in ascending sort-value order or in descending sort-value order. The disk sorted hash table can also start iterating from a starting sort-value, stop iterating at an ending sort-value, or start iterating after an item key in either ascending sort-value order or descending sort-value order.',
                  position: {
                    start: { line: 26, column: 5, offset: 3021 },
                    end: { line: 26, column: 463, offset: 3479 }
                  }
                }
              ],
              position: {
                start: { line: 26, column: 5, offset: 3021 },
                end: { line: 26, column: 463, offset: 3479 }
              }
            }
          ],
          position: {
            start: { line: 26, column: 3, offset: 3019 },
            end: { line: 26, column: 463, offset: 3479 }
          }
        }
      ],
      position: {
        start: { line: 25, column: 3, offset: 2820 },
        end: { line: 26, column: 463, offset: 3479 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Both the disk hash table and the disk sorted hash table have configurable item sizes and use ',
          position: {
            start: { line: 28, column: 1, offset: 3481 },
            end: { line: 28, column: 94, offset: 3574 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://en.wikipedia.org/wiki/Double_hashing',
          children: [
            {
              type: 'text',
              value: 'double hashing',
              position: {
                start: { line: 28, column: 95, offset: 3575 },
                end: { line: 28, column: 109, offset: 3589 }
              }
            }
          ],
          position: {
            start: { line: 28, column: 94, offset: 3574 },
            end: { line: 28, column: 156, offset: 3636 }
          }
        },
        {
          type: 'text',
          value: ' to resolve collisions.',
          position: {
            start: { line: 28, column: 156, offset: 3636 },
            end: { line: 28, column: 179, offset: 3659 }
          }
        }
      ],
      position: {
        start: { line: 28, column: 1, offset: 3481 },
        end: { line: 28, column: 179, offset: 3659 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'High Availability',
          position: {
            start: { line: 30, column: 4, offset: 3664 },
            end: { line: 30, column: 21, offset: 3681 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 3661 },
        end: { line: 30, column: 21, offset: 3681 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'High availability is a characteristic of a system that ensures the system is operational and accessible for an agreed upon percentage of time (uptime), usually indicated in a service level agreement (SLA). NoSQL database systems, including the database system described in this guide, can achieve high availability with relative ease compared to SQL database systems. In order to achieve high availability, database systems should implement redundancy, load balancing, auto scaling, and failover mechanisms.',
          position: {
            start: { line: 31, column: 1, offset: 3682 },
            end: { line: 31, column: 508, offset: 4189 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 3682 },
        end: { line: 31, column: 508, offset: 4189 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Redundancy',
          position: {
            start: { line: 33, column: 5, offset: 4195 },
            end: { line: 33, column: 15, offset: 4205 }
          }
        }
      ],
      position: {
        start: { line: 33, column: 1, offset: 4191 },
        end: { line: 33, column: 15, offset: 4205 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The storage servers' disk hash tables and disk sorted hash tables should be replicated across multiple storage servers. Those storage servers may be spread out across multiple availability zones.",
          position: {
            start: { line: 34, column: 1, offset: 4206 },
            end: { line: 34, column: 196, offset: 4401 }
          }
        }
      ],
      position: {
        start: { line: 34, column: 1, offset: 4206 },
        end: { line: 34, column: 196, offset: 4401 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Load Balancing',
          position: {
            start: { line: 36, column: 5, offset: 4407 },
            end: { line: 36, column: 19, offset: 4421 }
          }
        }
      ],
      position: {
        start: { line: 36, column: 1, offset: 4403 },
        end: { line: 36, column: 19, offset: 4421 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The load-balancer servers should distribute incoming traffic across multiple storage servers.',
          position: {
            start: { line: 37, column: 1, offset: 4422 },
            end: { line: 37, column: 94, offset: 4515 }
          }
        }
      ],
      position: {
        start: { line: 37, column: 1, offset: 4422 },
        end: { line: 37, column: 94, offset: 4515 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Auto Scaling',
          position: {
            start: { line: 39, column: 5, offset: 4521 },
            end: { line: 39, column: 17, offset: 4533 }
          }
        }
      ],
      position: {
        start: { line: 39, column: 1, offset: 4517 },
        end: { line: 39, column: 17, offset: 4533 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The database system should add storage servers when a given storage server is at a predetermined level of disk capacity or throughput.',
          position: {
            start: { line: 40, column: 1, offset: 4534 },
            end: { line: 40, column: 135, offset: 4668 }
          }
        }
      ],
      position: {
        start: { line: 40, column: 1, offset: 4534 },
        end: { line: 40, column: 135, offset: 4668 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Failover Mechanisms',
          position: {
            start: { line: 42, column: 5, offset: 4674 },
            end: { line: 42, column: 24, offset: 4693 }
          }
        }
      ],
      position: {
        start: { line: 42, column: 1, offset: 4670 },
        end: { line: 42, column: 24, offset: 4693 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When a storage server fails, load-balancer servers should switch to a replicated storage server. When a load-balancer server fails, incoming requests should be routed through a replica load balancer server.',
          position: {
            start: { line: 43, column: 1, offset: 4694 },
            end: { line: 43, column: 207, offset: 4900 }
          }
        }
      ],
      position: {
        start: { line: 43, column: 1, offset: 4694 },
        end: { line: 43, column: 207, offset: 4900 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Performance',
          position: {
            start: { line: 45, column: 4, offset: 4905 },
            end: { line: 45, column: 15, offset: 4916 }
          }
        }
      ],
      position: {
        start: { line: 45, column: 1, offset: 4902 },
        end: { line: 45, column: 15, offset: 4916 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The performance of the database system can be characterized by network throughput and resource utilization.',
          position: {
            start: { line: 46, column: 1, offset: 4917 },
            end: { line: 46, column: 108, offset: 5024 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 4917 },
        end: { line: 46, column: 108, offset: 5024 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Network Throughput',
          position: {
            start: { line: 48, column: 5, offset: 5030 },
            end: { line: 48, column: 23, offset: 5048 }
          }
        }
      ],
      position: {
        start: { line: 48, column: 1, offset: 5026 },
        end: { line: 48, column: 23, offset: 5048 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Network throughput is the rate at which data is transmitted over a network. For the database system, the network throughput can be measured as ',
          position: {
            start: { line: 49, column: 1, offset: 5049 },
            end: { line: 49, column: 144, offset: 5192 }
          }
        },
        {
          type: 'inlineCode',
          value: 'request_size * requests_per_second',
          position: {
            start: { line: 49, column: 144, offset: 5192 },
            end: { line: 49, column: 180, offset: 5228 }
          }
        },
        {
          type: 'text',
          value: '. A higher network throughput indicates the database system is processing more operations per second and/or larger amounts of data per second.',
          position: {
            start: { line: 49, column: 180, offset: 5228 },
            end: { line: 49, column: 322, offset: 5370 }
          }
        }
      ],
      position: {
        start: { line: 49, column: 1, offset: 5049 },
        end: { line: 49, column: 322, offset: 5370 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Resource Utilization',
          position: {
            start: { line: 51, column: 5, offset: 5376 },
            end: { line: 51, column: 25, offset: 5396 }
          }
        }
      ],
      position: {
        start: { line: 51, column: 1, offset: 5372 },
        end: { line: 51, column: 25, offset: 5396 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Resource utilization includes CPU usage, memory usage, and disk I/O.',
          position: {
            start: { line: 52, column: 1, offset: 5397 },
            end: { line: 52, column: 69, offset: 5465 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 5397 },
        end: { line: 52, column: 69, offset: 5465 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'CPU Usage',
          position: {
            start: { line: 54, column: 6, offset: 5472 },
            end: { line: 54, column: 15, offset: 5481 }
          }
        }
      ],
      position: {
        start: { line: 54, column: 1, offset: 5467 },
        end: { line: 54, column: 15, offset: 5481 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "CPU usage is the percentage of time that a server's CPU is active (not idle). A higher CPU usage for the storage server means the server's CPU is more active in coordinating database operations for incoming requests. A higher CPU usage for the load-balancer server means the server's CPU is more active in routing incoming requests to storage servers.",
          position: {
            start: { line: 55, column: 1, offset: 5482 },
            end: { line: 55, column: 352, offset: 5833 }
          }
        }
      ],
      position: {
        start: { line: 55, column: 1, offset: 5482 },
        end: { line: 55, column: 352, offset: 5833 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'Memory Usage',
          position: {
            start: { line: 57, column: 6, offset: 5840 },
            end: { line: 57, column: 18, offset: 5852 }
          }
        }
      ],
      position: {
        start: { line: 57, column: 1, offset: 5835 },
        end: { line: 57, column: 18, offset: 5852 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Memory usage is the percentage of RAM that the processes on a server are using. A higher memory usage for the storage server usually means the server is using more of the kernel page cache. The load-balancer server should generally not use a lot of RAM.',
          position: {
            start: { line: 58, column: 1, offset: 5853 },
            end: { line: 58, column: 254, offset: 6106 }
          }
        }
      ],
      position: {
        start: { line: 58, column: 1, offset: 5853 },
        end: { line: 58, column: 254, offset: 6106 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'Disk I/O',
          position: {
            start: { line: 60, column: 6, offset: 6113 },
            end: { line: 60, column: 14, offset: 6121 }
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 6108 },
        end: { line: 60, column: 14, offset: 6121 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Disk I/O is the input/output operations between a server's memory and its storage devices. Disk I/O can be measured in IOPS, latency, and storage throughput. IOPS (input / output operations per second) measures the number of read and write operations a storage device performs per second. Latency measures the amount of time it takes for the storage device to complete an I/O operation. Storage throughput measures the amount of data transferred between RAM and the storage device per second. Higher disk I/O for the storage server means more data is being stored and retrieved, and indicates better performance. The load-balancer server should generally not have any disk I/O.",
          position: {
            start: { line: 61, column: 1, offset: 6122 },
            end: { line: 61, column: 678, offset: 6799 }
          }
        }
      ],
      position: {
        start: { line: 61, column: 1, offset: 6122 },
        end: { line: 61, column: 678, offset: 6799 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Security',
          position: {
            start: { line: 63, column: 4, offset: 6804 },
            end: { line: 63, column: 12, offset: 6812 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 6801 },
        end: { line: 63, column: 12, offset: 6812 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The data of the disk hash tables and disk sorted hash tables should be encrypted at rest to prevent unauthorized access. The data may be encrypted before it is written to disk using the ',
          position: {
            start: { line: 64, column: 1, offset: 6813 },
            end: { line: 64, column: 187, offset: 6999 }
          }
        },
        {
          type: 'inlineCode',
          value: 'set',
          position: {
            start: { line: 64, column: 187, offset: 6999 },
            end: { line: 64, column: 192, offset: 7004 }
          }
        },
        {
          type: 'text',
          value: ' method of the DiskHashTable or DiskSortedHashTable classes, and may be decrypted after it is retrieved from disk using the ',
          position: {
            start: { line: 64, column: 192, offset: 7004 },
            end: { line: 64, column: 316, offset: 7128 }
          }
        },
        {
          type: 'inlineCode',
          value: 'get',
          position: {
            start: { line: 64, column: 316, offset: 7128 },
            end: { line: 64, column: 321, offset: 7133 }
          }
        },
        {
          type: 'text',
          value: ' method of the DiskHashTable or DiskSortedHashTable classes.',
          position: {
            start: { line: 64, column: 321, offset: 7133 },
            end: { line: 64, column: 381, offset: 7193 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 6813 },
        end: { line: 64, column: 381, offset: 7193 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Conclusion',
          position: {
            start: { line: 66, column: 4, offset: 7198 },
            end: { line: 66, column: 14, offset: 7208 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 7195 },
        end: { line: 66, column: 14, offset: 7208 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The Presidium database system takes some time and effort to set up, but is worth the cost savings and flexibility. Get started with ',
          position: {
            start: { line: 67, column: 1, offset: 7209 },
            end: { line: 67, column: 133, offset: 7341 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://presidium.services/',
          children: [
            {
              type: 'text',
              value: 'Presidium',
              position: {
                start: { line: 67, column: 134, offset: 7342 },
                end: { line: 67, column: 143, offset: 7351 }
              }
            }
          ],
          position: {
            start: { line: 67, column: 133, offset: 7341 },
            end: { line: 67, column: 173, offset: 7381 }
          }
        },
        {
          type: 'text',
          value: ' today.',
          position: {
            start: { line: 67, column: 173, offset: 7381 },
            end: { line: 67, column: 180, offset: 7388 }
          }
        }
      ],
      position: {
        start: { line: 67, column: 1, offset: 7209 },
        end: { line: 67, column: 180, offset: 7388 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 68, column: 1, offset: 7389 }
  }
}