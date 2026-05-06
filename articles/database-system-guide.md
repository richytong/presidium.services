---
title: Database System Guide
author: Richard Yufei Tong, King of Software at CLOUT
date: 2026-05-01
updated: 2026-05-06
path: /blog/database-system-guide
description: Database System Guide with Presidium DiskSortedHashTable and DiskHashTable classes.
image: /assets/disk-lights-w2000.jpg
---

Welcome to the Presidium database system guide. This guide will help users of the Presidium library host their own database systems using the Presidium [DiskHashTable](/docs/DiskHashTable) (disk hash table) and [DiskSortedHashTable](/docs/DiskSortedHashTable) (disk sorted hash table) classes. This guide will cover database system setup as well as practices and strategies for high availability, performance, and security.

## Database System Setup
The database system can be hosted on physical servers or virtual servers. The servers should be connected to the internet, and must use the Linux operating system. The servers should be differentiated into storage servers and load-balancer servers, with the load-balancer servers distributing requests to the storage servers. The storage servers must use Node.js and should have the DiskHashTable and DiskSortedHashTable classes installed with the [Presidium](https://github.com/richytong/presidium) library or the [Presidium DB](https://github.com/richytong/presidium-db) library. The load-balancer servers and storage servers should communicate using HTTP or WebSocket.

### Load-Balancer Server
The load-balancer server should distribute incoming requests to the storage servers using a hash function. Incoming requests should have the intended table operation (set or delete), the table name, and the key, value, and/or sort-value parameters. The hash function should take the request information and a list of storage server addresses as parameters and return the index of the storage server address to which the request should be routed. The load-balancer server should then make a separate request to the resolved storage server address with the information from the incoming request.

### Storage Server
The storage server should store the data files created and used by the disk hash tables and the disk sorted hash tables and serve incoming requests from the load-balancer server. The storage server can use local disks, network-attached storage (NAS), or cloud storage. For an incoming request with a set operation, the storage server should call the set method of the disk hash table or disk sorted hash table indicated by the table name of the incoming request. Likewise, for an incoming request with a delete operation, the storage server should call the delete method of the indicated table.

### Disk Hash Table vs Disk Sorted Hash Table
When choosing between the disk hash table and the disk sorted hash table, the following tradeoffs should be considered:

  * Time complexity - the disk hash table has O(1) time complexity for the set and delete operations, while the disk sorted hash table has O(log n) time complexity for the set and delete operations.
  * Item order - the disk hash table can iterate through its stored items in reverse insertion order, while the disk sorted hash table can iterate through its stored items in ascending sort-value order or in descending sort-value order. The disk sorted hash table can also start iterating from a starting sort-value, stop iterating at an ending sort-value, or start iterating after an item key in either ascending sort-value order or descending sort-value order.

Both the disk hash table and the disk sorted hash table have configurable item sizes, and both can store up to 2,147,483,647 items per table. Both the disk hash table and the disk sorted hash table use [double hashing](https://en.wikipedia.org/wiki/Double_hashing) to resolve collisions.

## High Availability
High availability is a characteristic of a system that ensures the system is operational and accessible for an agreed upon percentage of time (uptime), usually indicated in a service level agreement (SLA). NoSQL database systems, including the database system described in this guide, can achieve high availability with relative ease compared to SQL database systems. In order to achieve high availability, database systems should implement redundancy, load balancing, auto scaling, and failover mechanisms.

### Redundancy
The storage servers' disk hash tables and disk sorted hash tables should be replicated across multiple storage servers. Those storage servers may be spread out across multiple availability zones.

### Load Balancing
The load-balancer servers should distribute incoming traffic across multiple storage servers.

### Auto Scaling
The database system should add storage servers when a given storage server is at a predetermined level of disk capacity or throughput.

### Failover Mechanisms
When a storage server fails, load-balancer servers should switch to a replicated storage server. When a load-balancer server fails, incoming requests should be routed through a replica load balancer server.

## Performance
The performance of the database system can be characterized by network throughput and resource utilization.

### Network Throughput
Network throughput is the rate at which data is transmitted over a network. For the database system, the network throughput can be measured as `request_size * requests_per_second`. A higher network throughput indicates the database system is processing more operations per second and/or larger amounts of data per second.

### Resource Utilization
Resource utilization includes CPU usage, memory usage, and disk I/O.

#### CPU Usage
CPU usage is the percentage of time that a server's CPU is active (not idle). A higher CPU usage for the storage server means the server's CPU is more active in coordinating database operations for incoming requests. A higher CPU usage for the load-balancer server means the server's CPU is more active in routing incoming requests to storage servers.

#### Memory Usage
Memory usage is the percentage of RAM that the processes on a server are using. A higher memory usage for the storage server usually means the server is using more of the kernel page cache. The load-balancer server should generally not use a lot of RAM.

#### Disk I/O
Disk I/O is the input/output operations between a server's memory and its storage devices. Disk I/O can be measured in IOPS, latency, and storage throughput. IOPS (input / output operations per second) measures the number of read and write operations a storage device performs per second. Latency measures the amount of time it takes for the storage device to complete an I/O operation. Storage throughput measures the amount of data transferred between RAM and the storage device per second. Higher disk I/O for the storage server means more data is being stored and retrieved, and indicates better performance. The load-balancer server should generally not have any disk I/O.

## Security
The data of the disk hash tables and disk sorted hash tables should be encrypted at rest to prevent unauthorized access. The data may be encrypted before it is written to disk using the `set` method of the DiskHashTable or DiskSortedHashTable classes, and may be decrypted after it is retrieved from disk using the `get` method of the DiskHashTable or DiskSortedHashTable classes.

## Conclusion
The Presidium database system takes some time and effort to set up, but is worth the cost savings and flexibility. Get started with [Presidium](https://presidium.services/) today.
