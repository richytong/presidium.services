export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: Database System Guide\n' +
        'author: Richard Yufei Tong, King of Software at CLOUT\n' +
        'date: 2026-05-01\n' +
        'updated: 2026-05-06\n' +
        'path: /blog/database-system-guide\n' +
        'description: Database System Guide with Presidium DiskSortedHashTable and DiskHashTable classes.\n' +
        'image: /assets/disk-lights-w2000.jpg',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 295 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to the Presidium database system guide. This guide will help users of the Presidium library host their own database systems using the Presidium ',
          position: {
            start: { line: 11, column: 1, offset: 297 },
            end: { line: 11, column: 153, offset: 449 }
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
                start: { line: 11, column: 154, offset: 450 },
                end: { line: 11, column: 167, offset: 463 }
              }
            }
          ],
          position: {
            start: { line: 11, column: 153, offset: 449 },
            end: { line: 11, column: 189, offset: 485 }
          }
        },
        {
          type: 'text',
          value: ' (disk hash table) and ',
          position: {
            start: { line: 11, column: 189, offset: 485 },
            end: { line: 11, column: 212, offset: 508 }
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
                start: { line: 11, column: 213, offset: 509 },
                end: { line: 11, column: 232, offset: 528 }
              }
            }
          ],
          position: {
            start: { line: 11, column: 212, offset: 508 },
            end: { line: 11, column: 260, offset: 556 }
          }
        },
        {
          type: 'text',
          value: ' (disk sorted hash table) classes. This guide will cover database system setup as well as practices and strategies for high availability, performance, and security.',
          position: {
            start: { line: 11, column: 260, offset: 556 },
            end: { line: 11, column: 424, offset: 720 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 297 },
        end: { line: 11, column: 424, offset: 720 }
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
            start: { line: 13, column: 4, offset: 725 },
            end: { line: 13, column: 25, offset: 746 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 722 },
        end: { line: 13, column: 25, offset: 746 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The database system can be hosted on physical servers or virtual servers. The servers should be connected to the internet, and must use the Linux operating system. The servers should be differentiated into storage servers and load-balancer servers, with the load-balancer servers distributing requests to the storage servers. The storage servers must use Node.js and should have the DiskHashTable and DiskSortedHashTable classes installed with the ',
          position: {
            start: { line: 14, column: 1, offset: 747 },
            end: { line: 14, column: 449, offset: 1195 }
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
                start: { line: 14, column: 450, offset: 1196 },
                end: { line: 14, column: 459, offset: 1205 }
              }
            }
          ],
          position: {
            start: { line: 14, column: 449, offset: 1195 },
            end: { line: 14, column: 500, offset: 1246 }
          }
        },
        {
          type: 'text',
          value: ' library or the ',
          position: {
            start: { line: 14, column: 500, offset: 1246 },
            end: { line: 14, column: 516, offset: 1262 }
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
                start: { line: 14, column: 517, offset: 1263 },
                end: { line: 14, column: 529, offset: 1275 }
              }
            }
          ],
          position: {
            start: { line: 14, column: 516, offset: 1262 },
            end: { line: 14, column: 573, offset: 1319 }
          }
        },
        {
          type: 'text',
          value: ' library. The load-balancer servers and storage servers should communicate using HTTP or WebSocket.',
          position: {
            start: { line: 14, column: 573, offset: 1319 },
            end: { line: 14, column: 672, offset: 1418 }
          }
        }
      ],
      position: {
        start: { line: 14, column: 1, offset: 747 },
        end: { line: 14, column: 672, offset: 1418 }
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
            start: { line: 16, column: 5, offset: 1424 },
            end: { line: 16, column: 25, offset: 1444 }
          }
        }
      ],
      position: {
        start: { line: 16, column: 1, offset: 1420 },
        end: { line: 16, column: 25, offset: 1444 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The load-balancer server should distribute incoming requests to the storage servers using a hash function. Incoming requests should have the intended table operation (set or delete), the table name, and the key, value, and/or sort-value parameters. The hash function should take the request information and a list of storage server addresses as parameters and return the index of the storage server address to which the request should be routed. The load-balancer server should then make a separate request to the resolved storage server address with the information from the incoming request.',
          position: {
            start: { line: 17, column: 1, offset: 1445 },
            end: { line: 17, column: 594, offset: 2038 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 1445 },
        end: { line: 17, column: 594, offset: 2038 }
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
            start: { line: 19, column: 5, offset: 2044 },
            end: { line: 19, column: 19, offset: 2058 }
          }
        }
      ],
      position: {
        start: { line: 19, column: 1, offset: 2040 },
        end: { line: 19, column: 19, offset: 2058 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The storage server should store the data files created and used by the disk hash tables and the disk sorted hash tables and serve incoming requests from the load-balancer server. The storage server can use local disks, network-attached storage (NAS), or cloud storage. For an incoming request with a set operation, the storage server should call the set method of the disk hash table or disk sorted hash table indicated by the table name of the incoming request. Likewise, for an incoming request with a delete operation, the storage server should call the delete method of the indicated table.',
          position: {
            start: { line: 20, column: 1, offset: 2059 },
            end: { line: 20, column: 595, offset: 2653 }
          }
        }
      ],
      position: {
        start: { line: 20, column: 1, offset: 2059 },
        end: { line: 20, column: 595, offset: 2653 }
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
            start: { line: 22, column: 5, offset: 2659 },
            end: { line: 22, column: 46, offset: 2700 }
          }
        }
      ],
      position: {
        start: { line: 22, column: 1, offset: 2655 },
        end: { line: 22, column: 46, offset: 2700 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When choosing between the disk hash table and the disk sorted hash table, the following tradeoffs should be considered:',
          position: {
            start: { line: 23, column: 1, offset: 2701 },
            end: { line: 23, column: 120, offset: 2820 }
          }
        }
      ],
      position: {
        start: { line: 23, column: 1, offset: 2701 },
        end: { line: 23, column: 120, offset: 2820 }
      }
    },
    {
      type: 'list',
      ordered: false,
      start: null,
      spread: false,
      children: [
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
                    start: { line: 25, column: 5, offset: 2826 },
                    end: { line: 25, column: 199, offset: 3020 }
                  }
                }
              ],
              position: {
                start: { line: 25, column: 5, offset: 2826 },
                end: { line: 25, column: 199, offset: 3020 }
              }
            }
          ],
          position: {
            start: { line: 25, column: 3, offset: 2824 },
            end: { line: 25, column: 199, offset: 3020 }
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
                    start: { line: 26, column: 5, offset: 3025 },
                    end: { line: 26, column: 463, offset: 3483 }
                  }
                }
              ],
              position: {
                start: { line: 26, column: 5, offset: 3025 },
                end: { line: 26, column: 463, offset: 3483 }
              }
            }
          ],
          position: {
            start: { line: 26, column: 3, offset: 3023 },
            end: { line: 26, column: 463, offset: 3483 }
          }
        }
      ],
      position: {
        start: { line: 25, column: 3, offset: 2824 },
        end: { line: 26, column: 463, offset: 3483 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Both the disk hash table and the disk sorted hash table have configurable item sizes and use ',
          position: {
            start: { line: 28, column: 1, offset: 3485 },
            end: { line: 28, column: 94, offset: 3578 }
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
                start: { line: 28, column: 95, offset: 3579 },
                end: { line: 28, column: 109, offset: 3593 }
              }
            }
          ],
          position: {
            start: { line: 28, column: 94, offset: 3578 },
            end: { line: 28, column: 156, offset: 3640 }
          }
        },
        {
          type: 'text',
          value: ' to resolve collisions.',
          position: {
            start: { line: 28, column: 156, offset: 3640 },
            end: { line: 28, column: 179, offset: 3663 }
          }
        }
      ],
      position: {
        start: { line: 28, column: 1, offset: 3485 },
        end: { line: 28, column: 179, offset: 3663 }
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
            start: { line: 30, column: 4, offset: 3668 },
            end: { line: 30, column: 21, offset: 3685 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 3665 },
        end: { line: 30, column: 21, offset: 3685 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'High availability is a characteristic of a system that ensures the system is operational and accessible for an agreed upon percentage of time (uptime), usually indicated in a service level agreement (SLA). NoSQL database systems, including the database system described in this guide, can achieve high availability with relative ease compared to SQL database systems. In order to achieve high availability, database systems should implement redundancy, load balancing, auto scaling, and failover mechanisms.',
          position: {
            start: { line: 31, column: 1, offset: 3686 },
            end: { line: 31, column: 508, offset: 4193 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 3686 },
        end: { line: 31, column: 508, offset: 4193 }
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
            start: { line: 33, column: 5, offset: 4199 },
            end: { line: 33, column: 15, offset: 4209 }
          }
        }
      ],
      position: {
        start: { line: 33, column: 1, offset: 4195 },
        end: { line: 33, column: 15, offset: 4209 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The storage servers' disk hash tables and disk sorted hash tables should be replicated across multiple storage servers. Those storage servers may be spread out across multiple availability zones.",
          position: {
            start: { line: 34, column: 1, offset: 4210 },
            end: { line: 34, column: 196, offset: 4405 }
          }
        }
      ],
      position: {
        start: { line: 34, column: 1, offset: 4210 },
        end: { line: 34, column: 196, offset: 4405 }
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
            start: { line: 36, column: 5, offset: 4411 },
            end: { line: 36, column: 19, offset: 4425 }
          }
        }
      ],
      position: {
        start: { line: 36, column: 1, offset: 4407 },
        end: { line: 36, column: 19, offset: 4425 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The load-balancer servers should distribute incoming traffic across multiple storage servers.',
          position: {
            start: { line: 37, column: 1, offset: 4426 },
            end: { line: 37, column: 94, offset: 4519 }
          }
        }
      ],
      position: {
        start: { line: 37, column: 1, offset: 4426 },
        end: { line: 37, column: 94, offset: 4519 }
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
            start: { line: 39, column: 5, offset: 4525 },
            end: { line: 39, column: 17, offset: 4537 }
          }
        }
      ],
      position: {
        start: { line: 39, column: 1, offset: 4521 },
        end: { line: 39, column: 17, offset: 4537 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The database system should add storage servers when a given storage server is at a predetermined level of disk capacity or throughput.',
          position: {
            start: { line: 40, column: 1, offset: 4538 },
            end: { line: 40, column: 135, offset: 4672 }
          }
        }
      ],
      position: {
        start: { line: 40, column: 1, offset: 4538 },
        end: { line: 40, column: 135, offset: 4672 }
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
            start: { line: 42, column: 5, offset: 4678 },
            end: { line: 42, column: 24, offset: 4697 }
          }
        }
      ],
      position: {
        start: { line: 42, column: 1, offset: 4674 },
        end: { line: 42, column: 24, offset: 4697 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When a storage server fails, load-balancer servers should switch to a replicated storage server. When a load-balancer server fails, incoming requests should be routed through a replica load balancer server.',
          position: {
            start: { line: 43, column: 1, offset: 4698 },
            end: { line: 43, column: 207, offset: 4904 }
          }
        }
      ],
      position: {
        start: { line: 43, column: 1, offset: 4698 },
        end: { line: 43, column: 207, offset: 4904 }
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
            start: { line: 45, column: 4, offset: 4909 },
            end: { line: 45, column: 15, offset: 4920 }
          }
        }
      ],
      position: {
        start: { line: 45, column: 1, offset: 4906 },
        end: { line: 45, column: 15, offset: 4920 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The performance of the database system can be characterized by network throughput and resource utilization.',
          position: {
            start: { line: 46, column: 1, offset: 4921 },
            end: { line: 46, column: 108, offset: 5028 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 4921 },
        end: { line: 46, column: 108, offset: 5028 }
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
            start: { line: 48, column: 5, offset: 5034 },
            end: { line: 48, column: 23, offset: 5052 }
          }
        }
      ],
      position: {
        start: { line: 48, column: 1, offset: 5030 },
        end: { line: 48, column: 23, offset: 5052 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Network throughput is the rate at which data is transmitted over a network. For the database system, the network throughput can be measured as ',
          position: {
            start: { line: 49, column: 1, offset: 5053 },
            end: { line: 49, column: 144, offset: 5196 }
          }
        },
        {
          type: 'inlineCode',
          value: 'request_size * requests_per_second',
          position: {
            start: { line: 49, column: 144, offset: 5196 },
            end: { line: 49, column: 180, offset: 5232 }
          }
        },
        {
          type: 'text',
          value: '. A higher network throughput indicates the database system is processing more operations per second and/or larger amounts of data per second.',
          position: {
            start: { line: 49, column: 180, offset: 5232 },
            end: { line: 49, column: 322, offset: 5374 }
          }
        }
      ],
      position: {
        start: { line: 49, column: 1, offset: 5053 },
        end: { line: 49, column: 322, offset: 5374 }
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
            start: { line: 51, column: 5, offset: 5380 },
            end: { line: 51, column: 25, offset: 5400 }
          }
        }
      ],
      position: {
        start: { line: 51, column: 1, offset: 5376 },
        end: { line: 51, column: 25, offset: 5400 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Resource utilization includes CPU usage, memory usage, and disk I/O.',
          position: {
            start: { line: 52, column: 1, offset: 5401 },
            end: { line: 52, column: 69, offset: 5469 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 5401 },
        end: { line: 52, column: 69, offset: 5469 }
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
            start: { line: 54, column: 6, offset: 5476 },
            end: { line: 54, column: 15, offset: 5485 }
          }
        }
      ],
      position: {
        start: { line: 54, column: 1, offset: 5471 },
        end: { line: 54, column: 15, offset: 5485 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "CPU usage is the percentage of time that a server's CPU is active (not idle). A higher CPU usage for the storage server means the server's CPU is more active in coordinating database operations for incoming requests. A higher CPU usage for the load-balancer server means the server's CPU is more active in routing incoming requests to storage servers.",
          position: {
            start: { line: 55, column: 1, offset: 5486 },
            end: { line: 55, column: 352, offset: 5837 }
          }
        }
      ],
      position: {
        start: { line: 55, column: 1, offset: 5486 },
        end: { line: 55, column: 352, offset: 5837 }
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
            start: { line: 57, column: 6, offset: 5844 },
            end: { line: 57, column: 18, offset: 5856 }
          }
        }
      ],
      position: {
        start: { line: 57, column: 1, offset: 5839 },
        end: { line: 57, column: 18, offset: 5856 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Memory usage is the percentage of RAM that the processes on a server are using. A higher memory usage for the storage server usually means the server is using more of the kernel page cache. The load-balancer server should generally not use a lot of RAM.',
          position: {
            start: { line: 58, column: 1, offset: 5857 },
            end: { line: 58, column: 254, offset: 6110 }
          }
        }
      ],
      position: {
        start: { line: 58, column: 1, offset: 5857 },
        end: { line: 58, column: 254, offset: 6110 }
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
            start: { line: 60, column: 6, offset: 6117 },
            end: { line: 60, column: 14, offset: 6125 }
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 6112 },
        end: { line: 60, column: 14, offset: 6125 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Disk I/O is the input/output operations between a server's memory and its storage devices. Disk I/O can be measured in IOPS, latency, and storage throughput. IOPS (input / output operations per second) measures the number of read and write operations a storage device performs per second. Latency measures the amount of time it takes for the storage device to complete an I/O operation. Storage throughput measures the amount of data transferred between RAM and the storage device per second. Higher disk I/O for the storage server means more data is being stored and retrieved, and indicates better performance. The load-balancer server should generally not have any disk I/O.",
          position: {
            start: { line: 61, column: 1, offset: 6126 },
            end: { line: 61, column: 678, offset: 6803 }
          }
        }
      ],
      position: {
        start: { line: 61, column: 1, offset: 6126 },
        end: { line: 61, column: 678, offset: 6803 }
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
            start: { line: 63, column: 4, offset: 6808 },
            end: { line: 63, column: 12, offset: 6816 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 6805 },
        end: { line: 63, column: 12, offset: 6816 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The data of the disk hash tables and disk sorted hash tables should be encrypted at rest to prevent unauthorized access. The data may be encrypted before it is written to disk using the ',
          position: {
            start: { line: 64, column: 1, offset: 6817 },
            end: { line: 64, column: 187, offset: 7003 }
          }
        },
        {
          type: 'inlineCode',
          value: 'set',
          position: {
            start: { line: 64, column: 187, offset: 7003 },
            end: { line: 64, column: 192, offset: 7008 }
          }
        },
        {
          type: 'text',
          value: ' method of the DiskHashTable or DiskSortedHashTable classes, and may be decrypted after it is retrieved from disk using the ',
          position: {
            start: { line: 64, column: 192, offset: 7008 },
            end: { line: 64, column: 316, offset: 7132 }
          }
        },
        {
          type: 'inlineCode',
          value: 'get',
          position: {
            start: { line: 64, column: 316, offset: 7132 },
            end: { line: 64, column: 321, offset: 7137 }
          }
        },
        {
          type: 'text',
          value: ' method of the DiskHashTable or DiskSortedHashTable classes.',
          position: {
            start: { line: 64, column: 321, offset: 7137 },
            end: { line: 64, column: 381, offset: 7197 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 6817 },
        end: { line: 64, column: 381, offset: 7197 }
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
            start: { line: 66, column: 4, offset: 7202 },
            end: { line: 66, column: 14, offset: 7212 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 7199 },
        end: { line: 66, column: 14, offset: 7212 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The Presidium database system takes some time and effort to set up, but is worth the cost savings and flexibility. Get started with ',
          position: {
            start: { line: 67, column: 1, offset: 7213 },
            end: { line: 67, column: 133, offset: 7345 }
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
                start: { line: 67, column: 134, offset: 7346 },
                end: { line: 67, column: 143, offset: 7355 }
              }
            }
          ],
          position: {
            start: { line: 67, column: 133, offset: 7345 },
            end: { line: 67, column: 173, offset: 7385 }
          }
        },
        {
          type: 'text',
          value: ' today.',
          position: {
            start: { line: 67, column: 173, offset: 7385 },
            end: { line: 67, column: 180, offset: 7392 }
          }
        }
      ],
      position: {
        start: { line: 67, column: 1, offset: 7213 },
        end: { line: 67, column: 180, offset: 7392 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 68, column: 1, offset: 7393 }
  }
}