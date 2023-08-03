---
theme: page
prev: false
---

<script setup>
  import InflowProblem from './InflowProblem.vue'
  import InflowSample from './InflowSample.vue'
</script>

# CharitAble

## Introduction

This project was created as part of the IS Capstone Project requirement, with the primary goal of developing a web application that removes benefactors' barriers to charitable giving, such as transparency, lack of information, and interaction. The project achieved the Best Capstone Award for its accomplishments.

- [**Laravel**](https://laravel.com/)
- [**Boostrap**](https://getbootstrap.com/)
- [**Vue**](https://vuejs.org/)
- [**Inertia**](https://inertiajs.com/)
- [**Solidity**](https://soliditylang.org/)

## Problem

The application to be deployed is an online image hosting and resizing solution. It contains 3 parts : [**frontend**](https://github.com/EthanAndreas/CloudAppDeployment/tree/main/web), [**backend**](https://github.com/EthanAndreas/CloudAppDeployment/tree/main/api) and [**worker**](https://github.com/EthanAndreas/CloudAppDeployment/tree/main/api). The **frontend** corresponds to the web interface, where users upload the images they wish to store. The **backend** retrieves the uploaded images and stores them on an S3-type storage service. And finally, the **worker** part allows images to be resized.

<InflowProblem />

## Solution

The application has three level of verbosity :

- **1** - Essential informations of the frame (one line by frame)
- **2** - Essential informations and their complements (one line by layer)
- **3** - All informations is printed   

The application can capture in two modes :

- **Live** : capture packets on a network interface
- **Offline** : read packets from a pcap file

The application can analyse the following protocols :

- **Physical** : Ethernet
- **Network** : ARP, IPv4, IPv6
- **Transport** : ICMP, SCTP, TCP, UDP
- **Application** : BOOTP, DHCP, DNS, FTP, HTTP, IMAP, POP3, SMTP, Telnet

The application can filter packets according to a protocol.

<InflowSample />

## Contributions

- **Lead Backend Developer** : Spearheaded the backend development, ensuring a robust and efficient system.
- **Team Coordination** : Managed the team's collaboration by assigning tasks and overseeing progress to achieve project milestones.
- **Module Integration**: Seamlessly merged my backend work with my groupmates' frontend work, creating a cohesive and functional system.

## GitHub Repository

[View on GitHub](https://github.com/simonpangan/charitAble)