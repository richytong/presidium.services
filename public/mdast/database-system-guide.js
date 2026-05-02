export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: Database System Guide\n' +
        'author: Richard Yufei Tong, King of Software at CLOUT\n' +
        'date: 2026-05-01\n' +
        'updated: 2026-05-02\n' +
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
          value: ' (disk sorted hash table) classes. This guide will cover database system setup as well as practices and strategies for high availability and performance.',
          position: {
            start: { line: 11, column: 260, offset: 556 },
            end: { line: 11, column: 413, offset: 709 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 297 },
        end: { line: 11, column: 413, offset: 709 }
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
            start: { line: 13, column: 4, offset: 714 },
            end: { line: 13, column: 25, offset: 735 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 711 },
        end: { line: 13, column: 25, offset: 735 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The database system can be hosted on physical servers or virtual servers. The servers should be connected to the internet, and must use the Linux operating system. The servers should be differentiated into storage servers and load-balancer servers, with the load-balancer servers distributing requests to the storage servers. The storage servers must use Node.js and should have the DiskHashTable and DiskSortedHashTable classes installed with the ',
          position: {
            start: { line: 14, column: 1, offset: 736 },
            end: { line: 14, column: 449, offset: 1184 }
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
                start: { line: 14, column: 450, offset: 1185 },
                end: { line: 14, column: 459, offset: 1194 }
              }
            }
          ],
          position: {
            start: { line: 14, column: 449, offset: 1184 },
            end: { line: 14, column: 500, offset: 1235 }
          }
        },
        {
          type: 'text',
          value: ' library or the ',
          position: {
            start: { line: 14, column: 500, offset: 1235 },
            end: { line: 14, column: 516, offset: 1251 }
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
                start: { line: 14, column: 517, offset: 1252 },
                end: { line: 14, column: 529, offset: 1264 }
              }
            }
          ],
          position: {
            start: { line: 14, column: 516, offset: 1251 },
            end: { line: 14, column: 573, offset: 1308 }
          }
        },
        {
          type: 'text',
          value: ' library. The load-balancer servers and storage servers should communicate using HTTP or WebSocket.',
          position: {
            start: { line: 14, column: 573, offset: 1308 },
            end: { line: 14, column: 672, offset: 1407 }
          }
        }
      ],
      position: {
        start: { line: 14, column: 1, offset: 736 },
        end: { line: 14, column: 672, offset: 1407 }
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
            start: { line: 16, column: 5, offset: 1413 },
            end: { line: 16, column: 25, offset: 1433 }
          }
        }
      ],
      position: {
        start: { line: 16, column: 1, offset: 1409 },
        end: { line: 16, column: 25, offset: 1433 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The load-balancer server should distribute incoming requests to the storage servers using a hash function. Incoming requests should have the intended table operation (set or delete), the table name, and the key, value, and/or sort-value parameters. The hash function should take the request information and a list of storage server addresses as parameters and return the index of the storage server address to which the request should be routed. The load-balancer server should then make a separate request to the resolved storage server address with the information from the incoming request.',
          position: {
            start: { line: 17, column: 1, offset: 1434 },
            end: { line: 17, column: 594, offset: 2027 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 1434 },
        end: { line: 17, column: 594, offset: 2027 }
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
            start: { line: 19, column: 5, offset: 2033 },
            end: { line: 19, column: 19, offset: 2047 }
          }
        }
      ],
      position: {
        start: { line: 19, column: 1, offset: 2029 },
        end: { line: 19, column: 19, offset: 2047 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The storage server should store the data files created and used by the disk hash tables and the disk sorted hash tables and serve incoming requests from the load-balancer server. The storage server can use local disks, network-attached storage (NAS), or cloud storage. For an incoming request with a set operation, the storage server should call the set method of the disk hash table or disk sorted hash table indicated by the table name of the incoming request. Likewise, for an incoming request with a delete operation, the storage server should call the delete method of the indicated table.',
          position: {
            start: { line: 20, column: 1, offset: 2048 },
            end: { line: 20, column: 595, offset: 2642 }
          }
        }
      ],
      position: {
        start: { line: 20, column: 1, offset: 2048 },
        end: { line: 20, column: 595, offset: 2642 }
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
            start: { line: 22, column: 5, offset: 2648 },
            end: { line: 22, column: 46, offset: 2689 }
          }
        }
      ],
      position: {
        start: { line: 22, column: 1, offset: 2644 },
        end: { line: 22, column: 46, offset: 2689 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When choosing between the disk hash table and the disk sorted hash table, the following tradeoffs should be considered:',
          position: {
            start: { line: 23, column: 1, offset: 2690 },
            end: { line: 23, column: 120, offset: 2809 }
          }
        }
      ],
      position: {
        start: { line: 23, column: 1, offset: 2690 },
        end: { line: 23, column: 120, offset: 2809 }
      }
    },
    {
      type: 'list',
      ordered: false,
      start: null,
      spread: false,
      children: [
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
                    start: { line: 25, column: 5, offset: 2815 },
                    end: { line: 25, column: 199, offset: 3009 }
                  }
                }
              ],
              position: {
                start: { line: 25, column: 5, offset: 2815 },
                end: { line: 25, column: 199, offset: 3009 }
              }
            }
          ],
          position: {
            start: { line: 25, column: 3, offset: 2813 },
            end: { line: 25, column: 199, offset: 3009 }
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
                    start: { line: 26, column: 5, offset: 3014 },
                    end: { line: 26, column: 463, offset: 3472 }
                  }
                }
              ],
              position: {
                start: { line: 26, column: 5, offset: 3014 },
                end: { line: 26, column: 463, offset: 3472 }
              }
            }
          ],
          position: {
            start: { line: 26, column: 3, offset: 3012 },
            end: { line: 26, column: 463, offset: 3472 }
          }
        }
      ],
      position: {
        start: { line: 25, column: 3, offset: 2813 },
        end: { line: 26, column: 463, offset: 3472 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Both the disk hash table and the disk sorted hash table have configurable item sizes, and both can store up to 2,147,483,647 items per table. Both the disk hash table and the disk sorted hash table use ',
          position: {
            start: { line: 28, column: 1, offset: 3474 },
            end: { line: 28, column: 203, offset: 3676 }
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
                start: { line: 28, column: 204, offset: 3677 },
                end: { line: 28, column: 218, offset: 3691 }
              }
            }
          ],
          position: {
            start: { line: 28, column: 203, offset: 3676 },
            end: { line: 28, column: 265, offset: 3738 }
          }
        },
        {
          type: 'text',
          value: ' to resolve collisions.',
          position: {
            start: { line: 28, column: 265, offset: 3738 },
            end: { line: 28, column: 288, offset: 3761 }
          }
        }
      ],
      position: {
        start: { line: 28, column: 1, offset: 3474 },
        end: { line: 28, column: 288, offset: 3761 }
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
            start: { line: 30, column: 4, offset: 3766 },
            end: { line: 30, column: 21, offset: 3783 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 3763 },
        end: { line: 30, column: 21, offset: 3783 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'High availability is a characteristic of a system that ensures the system is operational and accessible for an agreed upon percentage of time (uptime), usually indicated in a service level agreement (SLA). NoSQL database systems, including the database system described in this guide, can achieve high availability with relative ease compared to SQL database systems. In order to achieve high availability, database systems should implement redundancy, load balancing, auto scaling, and failover mechanisms.',
          position: {
            start: { line: 31, column: 1, offset: 3784 },
            end: { line: 31, column: 508, offset: 4291 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 3784 },
        end: { line: 31, column: 508, offset: 4291 }
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
            start: { line: 33, column: 5, offset: 4297 },
            end: { line: 33, column: 15, offset: 4307 }
          }
        }
      ],
      position: {
        start: { line: 33, column: 1, offset: 4293 },
        end: { line: 33, column: 15, offset: 4307 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The storage servers' disk hash tables and disk sorted hash tables should be replicated across multiple storage servers. Those storage servers may be spread out across multiple availability zones.",
          position: {
            start: { line: 34, column: 1, offset: 4308 },
            end: { line: 34, column: 196, offset: 4503 }
          }
        }
      ],
      position: {
        start: { line: 34, column: 1, offset: 4308 },
        end: { line: 34, column: 196, offset: 4503 }
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
            start: { line: 36, column: 5, offset: 4509 },
            end: { line: 36, column: 19, offset: 4523 }
          }
        }
      ],
      position: {
        start: { line: 36, column: 1, offset: 4505 },
        end: { line: 36, column: 19, offset: 4523 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The load-balancer servers should distribute incoming traffic across multiple storage servers.',
          position: {
            start: { line: 37, column: 1, offset: 4524 },
            end: { line: 37, column: 94, offset: 4617 }
          }
        }
      ],
      position: {
        start: { line: 37, column: 1, offset: 4524 },
        end: { line: 37, column: 94, offset: 4617 }
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
            start: { line: 39, column: 5, offset: 4623 },
            end: { line: 39, column: 17, offset: 4635 }
          }
        }
      ],
      position: {
        start: { line: 39, column: 1, offset: 4619 },
        end: { line: 39, column: 17, offset: 4635 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The database system should add storage servers when a given storage server is at a predetermined level of disk capacity or throughput.',
          position: {
            start: { line: 40, column: 1, offset: 4636 },
            end: { line: 40, column: 135, offset: 4770 }
          }
        }
      ],
      position: {
        start: { line: 40, column: 1, offset: 4636 },
        end: { line: 40, column: 135, offset: 4770 }
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
            start: { line: 42, column: 5, offset: 4776 },
            end: { line: 42, column: 24, offset: 4795 }
          }
        }
      ],
      position: {
        start: { line: 42, column: 1, offset: 4772 },
        end: { line: 42, column: 24, offset: 4795 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When a storage server fails, load-balancer servers should switch to a replicated storage server. When a load-balancer server fails, incoming requests should be routed through a replica load balancer server.',
          position: {
            start: { line: 43, column: 1, offset: 4796 },
            end: { line: 43, column: 207, offset: 5002 }
          }
        }
      ],
      position: {
        start: { line: 43, column: 1, offset: 4796 },
        end: { line: 43, column: 207, offset: 5002 }
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
            start: { line: 45, column: 4, offset: 5007 },
            end: { line: 45, column: 15, offset: 5018 }
          }
        }
      ],
      position: {
        start: { line: 45, column: 1, offset: 5004 },
        end: { line: 45, column: 15, offset: 5018 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The performance of the database system can be characterized by network throughput and resource utilization.',
          position: {
            start: { line: 46, column: 1, offset: 5019 },
            end: { line: 46, column: 108, offset: 5126 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 5019 },
        end: { line: 46, column: 108, offset: 5126 }
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
            start: { line: 48, column: 5, offset: 5132 },
            end: { line: 48, column: 23, offset: 5150 }
          }
        }
      ],
      position: {
        start: { line: 48, column: 1, offset: 5128 },
        end: { line: 48, column: 23, offset: 5150 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Network throughput is the rate at which data is transmitted over a network. For the database system, the network throughput can be measured as ',
          position: {
            start: { line: 49, column: 1, offset: 5151 },
            end: { line: 49, column: 144, offset: 5294 }
          }
        },
        {
          type: 'inlineCode',
          value: 'request_size * requests_per_second',
          position: {
            start: { line: 49, column: 144, offset: 5294 },
            end: { line: 49, column: 180, offset: 5330 }
          }
        },
        {
          type: 'text',
          value: '. A higher network throughput indicates the database system is processing more operations per second and/or larger amounts of data per second.',
          position: {
            start: { line: 49, column: 180, offset: 5330 },
            end: { line: 49, column: 322, offset: 5472 }
          }
        }
      ],
      position: {
        start: { line: 49, column: 1, offset: 5151 },
        end: { line: 49, column: 322, offset: 5472 }
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
            start: { line: 51, column: 5, offset: 5478 },
            end: { line: 51, column: 25, offset: 5498 }
          }
        }
      ],
      position: {
        start: { line: 51, column: 1, offset: 5474 },
        end: { line: 51, column: 25, offset: 5498 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Resource utilization includes CPU usage, memory usage, and disk I/O.',
          position: {
            start: { line: 52, column: 1, offset: 5499 },
            end: { line: 52, column: 69, offset: 5567 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 5499 },
        end: { line: 52, column: 69, offset: 5567 }
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
            start: { line: 54, column: 6, offset: 5574 },
            end: { line: 54, column: 15, offset: 5583 }
          }
        }
      ],
      position: {
        start: { line: 54, column: 1, offset: 5569 },
        end: { line: 54, column: 15, offset: 5583 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "CPU usage is the percentage of time that a server's CPU is active (not idle). A higher CPU usage for the storage server means the server's CPU is more active in coordinating database operations for incoming requests. A higher CPU usage for the load-balancer server means the server's CPU is more active in routing incoming requests to storage servers.",
          position: {
            start: { line: 55, column: 1, offset: 5584 },
            end: { line: 55, column: 352, offset: 5935 }
          }
        }
      ],
      position: {
        start: { line: 55, column: 1, offset: 5584 },
        end: { line: 55, column: 352, offset: 5935 }
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
            start: { line: 57, column: 6, offset: 5942 },
            end: { line: 57, column: 18, offset: 5954 }
          }
        }
      ],
      position: {
        start: { line: 57, column: 1, offset: 5937 },
        end: { line: 57, column: 18, offset: 5954 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Memory usage is the percentage of RAM that the processes on a server are using. A higher memory usage for the storage server usually means the server is using more of the kernel page cache. The load-balancer server should generally not use a lot of RAM.',
          position: {
            start: { line: 58, column: 1, offset: 5955 },
            end: { line: 58, column: 254, offset: 6208 }
          }
        }
      ],
      position: {
        start: { line: 58, column: 1, offset: 5955 },
        end: { line: 58, column: 254, offset: 6208 }
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
            start: { line: 60, column: 6, offset: 6215 },
            end: { line: 60, column: 14, offset: 6223 }
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 6210 },
        end: { line: 60, column: 14, offset: 6223 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Disk I/O is the input/output operations between a server's memory and its storage devices. Disk I/O can be measured in IOPS, latency, and storage throughput. IOPS (input / output operations per second) measures the number of read and write operations a storage device performs per second. Latency measures the amount of time it takes for the storage device to complete an I/O operation. Storage throughput measures the amount of data transferred between RAM and the storage device per second. Higher disk I/O for the storage server means more data is being stored and retrieved, and indicates better performance. The load-balancer server should generally not have any disk I/O.",
          position: {
            start: { line: 61, column: 1, offset: 6224 },
            end: { line: 61, column: 678, offset: 6901 }
          }
        }
      ],
      position: {
        start: { line: 61, column: 1, offset: 6224 },
        end: { line: 61, column: 678, offset: 6901 }
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
            start: { line: 63, column: 4, offset: 6906 },
            end: { line: 63, column: 14, offset: 6916 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 6903 },
        end: { line: 63, column: 14, offset: 6916 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The Presidium database system takes some time and effort to set up, but is worth the cost savings and flexibility. Get started with ',
          position: {
            start: { line: 64, column: 1, offset: 6917 },
            end: { line: 64, column: 133, offset: 7049 }
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
                start: { line: 64, column: 134, offset: 7050 },
                end: { line: 64, column: 143, offset: 7059 }
              }
            }
          ],
          position: {
            start: { line: 64, column: 133, offset: 7049 },
            end: { line: 64, column: 173, offset: 7089 }
          }
        },
        {
          type: 'text',
          value: ' today.',
          position: {
            start: { line: 64, column: 173, offset: 7089 },
            end: { line: 64, column: 180, offset: 7096 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 6917 },
        end: { line: 64, column: 180, offset: 7096 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 65, column: 1, offset: 7097 }
  }
}