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

To address the problems, the academic project "CharitAble" was developed. If you want to see the project, you can view the PDF below containing the user manual, which was extracted from our original paper.

[View CharitAble User Manual](https://drive.google.com/file/d/1kGJrBTBDB-MuTbUixDcywOkoRE6yniEG/view?usp=sharing)
## Contributions

Throughout this project, I played a key role in both backend and frontend development, as well as conducting comprehensive testing.

### Backend Development:

- Created custom ERC20 smart contract using the OpenZeppelin API
- Implemented online payments through G-CASH and GrabPay wallets using the Paymongo API, ensuring a seamless donation experience for benefactors.
- Integrated login functionality with Google accounts, enhancing user accessibility and convenience.
- Implemented all CRUD (Create, Read, Update, Delete) functionalities, expertly managing data interactions and ensuring optimal system performance.
### Frontend Development: 

- Connected the application to the Ethereum blockchain using web3.js, enabling real-time interaction with the blockchain.
- Designed static pages for the FAQ and About Us sections, offering a comprehensive understanding of the charitable platform's mission and operations.
- Established the connection between the backend and frontend using inertia.js, facilitating smooth and efficient data flow and enhancing the overall user experience.

### Testing

- Documented, created, and executed tests to ensure the code functions as intended and adheres to the project requirements, assuring the reliability and functionality of the application.
- Presented a compelling PowerPoint and performed a live demonstration to showcase the application's capabilities to stakeholders.
- Conducted user acceptance testing by creating an online survey and gathering valuable feedback from seven potential app users, thus ensuring the platform's usability and meeting the needs of its intended audience.
## GitHub Repository

[View on GitHub](https://github.com/simonpangan/charitAble)