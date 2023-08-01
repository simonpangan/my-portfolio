---
theme: page
---

<script setup>
  import InflowMockup from './InflowMockup.vue'
  import InflowSolution from './InflowSolution.vue'
</script>

# Inflow

## Introduction

"Inflow" was created as the final academic project for the web development subject, utilizing the Laravel framework. The primary goal of this project is to enhance Benilde's student information system flowchart by providing more comprehensive information about each subject, going beyond the mere display of subject codes. The name "Inflow" is derived from "information overflow," symbolizing the project's intent. The project is based on the following technologies :

- [**Laravel**](https://laravel.com/)
- [**Boostrap**](https://getbootstrap.com/)
- [**jQuery**](https://jquery.com/)

## The problem

The application to be deployed is an online image hosting and resizing solution. It contains 3 parts : [**frontend**](https://github.com/EthanAndreas/CloudAppDeployment/tree/main/web), [**backend**](https://github.com/EthanAndreas/CloudAppDeployment/tree/main/api) and [**worker**](https://github.com/EthanAndreas/CloudAppDeployment/tree/main/api). The **frontend** corresponds to the web interface, where users upload the images they wish to store. The **backend** retrieves the uploaded images and stores them on an S3-type storage service. And finally, the **worker** part allows images to be resized.

<InflowSolution />

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

<InflowSolution />
## Mockup

<InflowMockup />

## GitHub repository

[View on GitHub](https://github.com/simonpangan/BenildeProjects/tree/master/inflow-project)