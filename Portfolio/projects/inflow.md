---
theme: page
---

<script setup>
  import Inflow from './Inflow.vue'
</script>

# Inflow

## Introduction

"Inflow" was created as the final academic project for the web development subject, utilizing the Laravel framework. The primary goal of this project is to enhance Benilde's student information system flowchart by providing more comprehensive information about each subject, going beyond the mere display of subject codes. The name "Inflow" is derived from "information overflow," symbolizing the project's intent. The project is based on the following technologies :

- [**Laravel**](https://laravel.com/)
- [**Bootstrap**](https://getbootstrap.com/)
- [**jQuery**](https://jquery.com/)

## Problem

<Inflow :images="{
		largeURL:
			'../assets/img/flowchart.png',
		thumbnailURL:
			'../assets/img/flowchart.png',
		width: 3000,
		height: 2000,
		alt: 'Inflow'
	}" 
/>

The picture above depicts the current flowchart of Benilde's student information system as of the writing. As a former student, I often found it challenging to decipher the meaning of subject codes. While some subjects are easily recognizable, others remain unclear. Additionally, there is an issue with not knowing whether a subject is a major or minor or what topics it covers for students interested in advanced study.

Furthermore, the system lacks clear information on when a student can retake a failed subject or when they can take a particular subject should they wish not to follow the provided flowchart. This lack of clarity can lead to confusion and delays in academic progress.

Another glaring problem is the lack of timely updates, as evidenced by the top-left section still displaying the student as a freshman despite being in their junior year.

To validate these concerns, we conducted a survey with 40 Benildean student participants. The findings revealed that 30% of the participants stated that they were not aware of the elective courses available within their program. Furthermore, only 20% stated that they knew the topics and coverage of study for their future subjects. Of significant note, a substantial 92.5% of the participants expressed a strong desire for an interactive student information system flowchart.
## Solution

To address these shortcomings, the academic project "Inflow" was developed. Its main objective is to enhance the student information system flowchart by providing comprehensive subject information that goes beyond mere codes, symbolizing its intent to tackle the issue of "information overflow." With "Inflow," students can access detailed subject descriptions, determine their major or minor status, and explore potential topics for advanced study. Moreover, the system offers clear information on subject retakes and helps students make informed decisions about their academic path. Through these improvements, "Inflow" aims to streamline and optimize the student's academic journey at Benilde.

<Inflow :images="{
		largeURL:
			'../assets/img/inflow-sample.png',
		thumbnailURL:
			'../assets/img/inflow-sample.png',
		width: 4000,
		height: 2000,
	}" 
/>

## Contributions

- **Lead Backend Developer** : Lead the backend development, ensuring a robust and efficient system.
- **Team Coordination** : Managed the team's collaboration by assigning tasks and overseeing progress to achieve project milestones.
- **Module Integration**: Integrated my work with contributions from my group mates using Git and Github, creating a cohesive and functional system.

## GitHub Repository

[View on GitHub](https://github.com/simonpangan/BenildeProjects/tree/master/inflow-project)