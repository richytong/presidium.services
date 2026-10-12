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
        'description: Database System Guide with Presidium DiskSortedHashTable and DiskHashTable\n' +
        'image: /assets/disk-lights-w2000.jpg',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 282 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to the Presidium database system guide. This guide will help users of the Presidium library host their own database systems using the Presidium ',
          position: {
            start: { line: 11, column: 1, offset: 284 },
            end: { line: 11, column: 153, offset: 436 }
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
                start: { line: 11, column: 154, offset: 437 },
                end: { line: 11, column: 167, offset: 450 }
              }
            }
          ],
          position: {
            start: { line: 11, column: 153, offset: 436 },
            end: { line: 11, column: 189, offset: 472 }
          }
        },
        {
          type: 'text',
          value: ' (disk hash table) and ',
          position: {
            start: { line: 11, column: 189, offset: 472 },
            end: { line: 11, column: 212, offset: 495 }
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
                start: { line: 11, column: 213, offset: 496 },
                end: { line: 11, column: 232, offset: 515 }
              }
            }
          ],
          position: {
            start: { line: 11, column: 212, offset: 495 },
            end: { line: 11, column: 260, offset: 543 }
          }
        },
        {
          type: 'text',
          value: ' (disk sorted hash table) classes. This guide will cover database system setup as well as practices and strategies for high availability, performance, and security.',
          position: {
            start: { line: 11, column: 260, offset: 543 },
            end: { line: 11, column: 424, offset: 707 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 284 },
        end: { line: 11, column: 424, offset: 707 }
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
            start: { line: 13, column: 4, offset: 712 },
            end: { line: 13, column: 25, offset: 733 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 709 },
        end: { line: 13, column: 25, offset: 733 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The database system can be hosted on physical servers or virtual servers. The servers should be connected to the internet, and must use the Linux operating system. The servers should be differentiated into storage servers and load-balancer servers, with the load-balancer servers distributing requests to the storage servers. The storage servers must use Node.js and should have the DiskHashTable and DiskSortedHashTable classes installed with the ',
          position: {
            start: { line: 14, column: 1, offset: 734 },
            end: { line: 14, column: 449, offset: 1182 }
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
                start: { line: 14, column: 450, offset: 1183 },
                end: { line: 14, column: 459, offset: 1192 }
              }
            }
          ],
          position: {
            start: { line: 14, column: 449, offset: 1182 },
            end: { line: 14, column: 500, offset: 1233 }
          }
        },
        {
          type: 'text',
          value: ' library or the ',
          position: {
            start: { line: 14, column: 500, offset: 1233 },
            end: { line: 14, column: 516, offset: 1249 }
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
                start: { line: 14, column: 517, offset: 1250 },
                end: { line: 14, column: 529, offset: 1262 }
              }
            }
          ],
          position: {
            start: { line: 14, column: 516, offset: 1249 },
            end: { line: 14, column: 573, offset: 1306 }
          }
        },
        {
          type: 'text',
          value: ' library. The load-balancer servers and storage servers should communicate using HTTP or WebSocket.',
          position: {
            start: { line: 14, column: 573, offset: 1306 },
            end: { line: 14, column: 672, offset: 1405 }
          }
        }
      ],
      position: {
        start: { line: 14, column: 1, offset: 734 },
        end: { line: 14, column: 672, offset: 1405 }
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
            start: { line: 16, column: 5, offset: 1411 },
            end: { line: 16, column: 25, offset: 1431 }
          }
        }
      ],
      position: {
        start: { line: 16, column: 1, offset: 1407 },
        end: { line: 16, column: 25, offset: 1431 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The load-balancer server should distribute incoming requests to the storage servers using a hash function. Incoming requests should have the intended table operation (set or delete), the table name, and the key, value, and/or sort-value parameters. The hash function should take the request information and a list of storage server addresses as parameters and return the index of the storage server address to which the request should be routed. The load-balancer server should then make a separate request to the resolved storage server address with the information from the incoming request.',
          position: {
            start: { line: 17, column: 1, offset: 1432 },
            end: { line: 17, column: 594, offset: 2025 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 1432 },
        end: { line: 17, column: 594, offset: 2025 }
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
            start: { line: 19, column: 5, offset: 2031 },
            end: { line: 19, column: 19, offset: 2045 }
          }
        }
      ],
      position: {
        start: { line: 19, column: 1, offset: 2027 },
        end: { line: 19, column: 19, offset: 2045 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The storage server should store the data files created and used by the disk hash tables and the disk sorted hash tables and serve incoming requests from the load-balancer server. The storage server can use local disks, network-attached storage (NAS), or cloud storage. For an incoming request with a set operation, the storage server should call the set method of the disk hash table or disk sorted hash table indicated by the table name of the incoming request. Likewise, for an incoming request with a delete operation, the storage server should call the delete method of the indicated table.',
          position: {
            start: { line: 20, column: 1, offset: 2046 },
            end: { line: 20, column: 595, offset: 2640 }
          }
        }
      ],
      position: {
        start: { line: 20, column: 1, offset: 2046 },
        end: { line: 20, column: 595, offset: 2640 }
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
            start: { line: 22, column: 5, offset: 2646 },
            end: { line: 22, column: 46, offset: 2687 }
          }
        }
      ],
      position: {
        start: { line: 22, column: 1, offset: 2642 },
        end: { line: 22, column: 46, offset: 2687 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When choosing between the disk hash table and the disk sorted hash table, the following tradeoffs should be considered:',
          position: {
            start: { line: 23, column: 1, offset: 2688 },
            end: { line: 23, column: 120, offset: 2807 }
          }
        }
      ],
      position: {
        start: { line: 23, column: 1, offset: 2688 },
        end: { line: 23, column: 120, offset: 2807 }
      }
    },
    {
      type: 'list',
      ordered: false,
      start: null,
      spread: false,
      children: [
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
                    start: { line: 25, column: 5, offset: 2813 },
                    end: { line: 25, column: 199, offset: 3007 }
                  }
                }
              ],
              position: {
                start: { line: 25, column: 5, offset: 2813 },
                end: { line: 25, column: 199, offset: 3007 }
              }
            }
          ],
          position: {
            start: { line: 25, column: 3, offset: 2811 },
            end: { line: 25, column: 199, offset: 3007 }
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
                    start: { line: 26, column: 5, offset: 3012 },
                    end: { line: 26, column: 463, offset: 3470 }
                  }
                }
              ],
              position: {
                start: { line: 26, column: 5, offset: 3012 },
                end: { line: 26, column: 463, offset: 3470 }
              }
            }
          ],
          position: {
            start: { line: 26, column: 3, offset: 3010 },
            end: { line: 26, column: 463, offset: 3470 }
          }
        }
      ],
      position: {
        start: { line: 25, column: 3, offset: 2811 },
        end: { line: 26, column: 463, offset: 3470 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Both the disk hash table and the disk sorted hash table have configurable item sizes and use ',
          position: {
            start: { line: 28, column: 1, offset: 3472 },
            end: { line: 28, column: 94, offset: 3565 }
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
                start: { line: 28, column: 95, offset: 3566 },
                end: { line: 28, column: 109, offset: 3580 }
              }
            }
          ],
          position: {
            start: { line: 28, column: 94, offset: 3565 },
            end: { line: 28, column: 156, offset: 3627 }
          }
        },
        {
          type: 'text',
          value: ' to resolve collisions.',
          position: {
            start: { line: 28, column: 156, offset: 3627 },
            end: { line: 28, column: 179, offset: 3650 }
          }
        }
      ],
      position: {
        start: { line: 28, column: 1, offset: 3472 },
        end: { line: 28, column: 179, offset: 3650 }
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
            start: { line: 30, column: 4, offset: 3655 },
            end: { line: 30, column: 21, offset: 3672 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 3652 },
        end: { line: 30, column: 21, offset: 3672 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'High availability is a characteristic of a system that ensures the system is operational and accessible for an agreed upon percentage of time (uptime), usually indicated in a service level agreement (SLA). NoSQL database systems, including the database system described in this guide, can achieve high availability with relative ease compared to SQL database systems. In order to achieve high availability, database systems should implement redundancy, load balancing, auto scaling, and failover mechanisms.',
          position: {
            start: { line: 31, column: 1, offset: 3673 },
            end: { line: 31, column: 508, offset: 4180 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 3673 },
        end: { line: 31, column: 508, offset: 4180 }
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
            start: { line: 33, column: 5, offset: 4186 },
            end: { line: 33, column: 15, offset: 4196 }
          }
        }
      ],
      position: {
        start: { line: 33, column: 1, offset: 4182 },
        end: { line: 33, column: 15, offset: 4196 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The storage servers' disk hash tables and disk sorted hash tables should be replicated across multiple storage servers. Those storage servers may be spread out across multiple availability zones.",
          position: {
            start: { line: 34, column: 1, offset: 4197 },
            end: { line: 34, column: 196, offset: 4392 }
          }
        }
      ],
      position: {
        start: { line: 34, column: 1, offset: 4197 },
        end: { line: 34, column: 196, offset: 4392 }
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
            start: { line: 36, column: 5, offset: 4398 },
            end: { line: 36, column: 19, offset: 4412 }
          }
        }
      ],
      position: {
        start: { line: 36, column: 1, offset: 4394 },
        end: { line: 36, column: 19, offset: 4412 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The load-balancer servers should distribute incoming traffic across multiple storage servers.',
          position: {
            start: { line: 37, column: 1, offset: 4413 },
            end: { line: 37, column: 94, offset: 4506 }
          }
        }
      ],
      position: {
        start: { line: 37, column: 1, offset: 4413 },
        end: { line: 37, column: 94, offset: 4506 }
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
            start: { line: 39, column: 5, offset: 4512 },
            end: { line: 39, column: 17, offset: 4524 }
          }
        }
      ],
      position: {
        start: { line: 39, column: 1, offset: 4508 },
        end: { line: 39, column: 17, offset: 4524 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The database system should add storage servers when a given storage server is at a predetermined level of disk capacity or throughput.',
          position: {
            start: { line: 40, column: 1, offset: 4525 },
            end: { line: 40, column: 135, offset: 4659 }
          }
        }
      ],
      position: {
        start: { line: 40, column: 1, offset: 4525 },
        end: { line: 40, column: 135, offset: 4659 }
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
            start: { line: 42, column: 5, offset: 4665 },
            end: { line: 42, column: 24, offset: 4684 }
          }
        }
      ],
      position: {
        start: { line: 42, column: 1, offset: 4661 },
        end: { line: 42, column: 24, offset: 4684 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When a storage server fails, load-balancer servers should switch to a replicated storage server. When a load-balancer server fails, incoming requests should be routed through a replica load balancer server.',
          position: {
            start: { line: 43, column: 1, offset: 4685 },
            end: { line: 43, column: 207, offset: 4891 }
          }
        }
      ],
      position: {
        start: { line: 43, column: 1, offset: 4685 },
        end: { line: 43, column: 207, offset: 4891 }
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
            start: { line: 45, column: 4, offset: 4896 },
            end: { line: 45, column: 15, offset: 4907 }
          }
        }
      ],
      position: {
        start: { line: 45, column: 1, offset: 4893 },
        end: { line: 45, column: 15, offset: 4907 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The performance of the database system can be characterized by network throughput and resource utilization.',
          position: {
            start: { line: 46, column: 1, offset: 4908 },
            end: { line: 46, column: 108, offset: 5015 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 4908 },
        end: { line: 46, column: 108, offset: 5015 }
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
            start: { line: 48, column: 5, offset: 5021 },
            end: { line: 48, column: 23, offset: 5039 }
          }
        }
      ],
      position: {
        start: { line: 48, column: 1, offset: 5017 },
        end: { line: 48, column: 23, offset: 5039 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Network throughput is the rate at which data is transmitted over a network. For the database system, the network throughput can be measured as ',
          position: {
            start: { line: 49, column: 1, offset: 5040 },
            end: { line: 49, column: 144, offset: 5183 }
          }
        },
        {
          type: 'inlineCode',
          value: 'request_size * requests_per_second',
          position: {
            start: { line: 49, column: 144, offset: 5183 },
            end: { line: 49, column: 180, offset: 5219 }
          }
        },
        {
          type: 'text',
          value: '. A higher network throughput indicates the database system is processing more operations per second and/or larger amounts of data per second.',
          position: {
            start: { line: 49, column: 180, offset: 5219 },
            end: { line: 49, column: 322, offset: 5361 }
          }
        }
      ],
      position: {
        start: { line: 49, column: 1, offset: 5040 },
        end: { line: 49, column: 322, offset: 5361 }
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
            start: { line: 51, column: 5, offset: 5367 },
            end: { line: 51, column: 25, offset: 5387 }
          }
        }
      ],
      position: {
        start: { line: 51, column: 1, offset: 5363 },
        end: { line: 51, column: 25, offset: 5387 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Resource utilization includes CPU usage, memory usage, and disk I/O.',
          position: {
            start: { line: 52, column: 1, offset: 5388 },
            end: { line: 52, column: 69, offset: 5456 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 5388 },
        end: { line: 52, column: 69, offset: 5456 }
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
            start: { line: 54, column: 6, offset: 5463 },
            end: { line: 54, column: 15, offset: 5472 }
          }
        }
      ],
      position: {
        start: { line: 54, column: 1, offset: 5458 },
        end: { line: 54, column: 15, offset: 5472 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "CPU usage is the percentage of time that a server's CPU is active (not idle). A higher CPU usage for the storage server means the server's CPU is more active in coordinating database operations for incoming requests. A higher CPU usage for the load-balancer server means the server's CPU is more active in routing incoming requests to storage servers.",
          position: {
            start: { line: 55, column: 1, offset: 5473 },
            end: { line: 55, column: 352, offset: 5824 }
          }
        }
      ],
      position: {
        start: { line: 55, column: 1, offset: 5473 },
        end: { line: 55, column: 352, offset: 5824 }
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
            start: { line: 57, column: 6, offset: 5831 },
            end: { line: 57, column: 18, offset: 5843 }
          }
        }
      ],
      position: {
        start: { line: 57, column: 1, offset: 5826 },
        end: { line: 57, column: 18, offset: 5843 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Memory usage is the percentage of RAM that the processes on a server are using. A higher memory usage for the storage server usually means the server is using more of the kernel page cache. The load-balancer server should generally not use a lot of RAM.',
          position: {
            start: { line: 58, column: 1, offset: 5844 },
            end: { line: 58, column: 254, offset: 6097 }
          }
        }
      ],
      position: {
        start: { line: 58, column: 1, offset: 5844 },
        end: { line: 58, column: 254, offset: 6097 }
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
            start: { line: 60, column: 6, offset: 6104 },
            end: { line: 60, column: 14, offset: 6112 }
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 6099 },
        end: { line: 60, column: 14, offset: 6112 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Disk I/O is the input/output operations between a server's memory and its storage devices. Disk I/O can be measured in IOPS, latency, and storage throughput. IOPS (input / output operations per second) measures the number of read and write operations a storage device performs per second. Latency measures the amount of time it takes for the storage device to complete an I/O operation. Storage throughput measures the amount of data transferred between RAM and the storage device per second. Higher disk I/O for the storage server means more data is being stored and retrieved, and indicates better performance. The load-balancer server should generally not have any disk I/O.",
          position: {
            start: { line: 61, column: 1, offset: 6113 },
            end: { line: 61, column: 678, offset: 6790 }
          }
        }
      ],
      position: {
        start: { line: 61, column: 1, offset: 6113 },
        end: { line: 61, column: 678, offset: 6790 }
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
            start: { line: 63, column: 4, offset: 6795 },
            end: { line: 63, column: 12, offset: 6803 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 6792 },
        end: { line: 63, column: 12, offset: 6803 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The data of the disk hash tables and disk sorted hash tables should be encrypted at rest to prevent unauthorized access. The data may be encrypted before it is written to disk using the ',
          position: {
            start: { line: 64, column: 1, offset: 6804 },
            end: { line: 64, column: 187, offset: 6990 }
          }
        },
        {
          type: 'inlineCode',
          value: 'set',
          position: {
            start: { line: 64, column: 187, offset: 6990 },
            end: { line: 64, column: 192, offset: 6995 }
          }
        },
        {
          type: 'text',
          value: ' method of the DiskHashTable or DiskSortedHashTable classes, and may be decrypted after it is retrieved from disk using the ',
          position: {
            start: { line: 64, column: 192, offset: 6995 },
            end: { line: 64, column: 316, offset: 7119 }
          }
        },
        {
          type: 'inlineCode',
          value: 'get',
          position: {
            start: { line: 64, column: 316, offset: 7119 },
            end: { line: 64, column: 321, offset: 7124 }
          }
        },
        {
          type: 'text',
          value: ' method of the DiskHashTable or DiskSortedHashTable classes.',
          position: {
            start: { line: 64, column: 321, offset: 7124 },
            end: { line: 64, column: 381, offset: 7184 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 6804 },
        end: { line: 64, column: 381, offset: 7184 }
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
            start: { line: 66, column: 4, offset: 7189 },
            end: { line: 66, column: 14, offset: 7199 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 7186 },
        end: { line: 66, column: 14, offset: 7199 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The Presidium database system takes some time and effort to set up, but is worth the cost savings and flexibility. Get started with ',
          position: {
            start: { line: 67, column: 1, offset: 7200 },
            end: { line: 67, column: 133, offset: 7332 }
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
                start: { line: 67, column: 134, offset: 7333 },
                end: { line: 67, column: 143, offset: 7342 }
              }
            }
          ],
          position: {
            start: { line: 67, column: 133, offset: 7332 },
            end: { line: 67, column: 173, offset: 7372 }
          }
        },
        {
          type: 'text',
          value: ' today.',
          position: {
            start: { line: 67, column: 173, offset: 7372 },
            end: { line: 67, column: 180, offset: 7379 }
          }
        }
      ],
      position: {
        start: { line: 67, column: 1, offset: 7200 },
        end: { line: 67, column: 180, offset: 7379 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 68, column: 1, offset: 7380 }
  }
}