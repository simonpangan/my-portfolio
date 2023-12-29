---
theme: page
prev: false
---

# Bandersnatch

## Introduction

Bandersnatch is a website created to facilitate interactive theater experiences by allowing the audience to choose the next scenario they would like to see. The project is based on the following technologies :

- [**Laravel**](https://laravel.com/)
- [**XState**](https://xstate.js.org/)
- [**React.JS**](https://react.dev/)
- [**Ant Design**](https://ant.design/)
- [**Tailwind CSS**](https://tailwindcss.com/)
- [**Inertia**](https://inertiajs.com/)
- [**Websockets via Ably**](https://ably.com/)

## Problem

Interactive questions and answers can be managed using tools like Google Forms or Kahoot. However, these technologies come with a drawback: they don't allow the facilitator to show the next question based on the most popular answer from the current question. This limitation led to the development of Bandersnatch, a solution aimed at providing interactive theater experiences for production design students at Benilde. Bandersnatch empowers the audience by letting them pick the next scenario they'd like to see. This effectively addresses the issue posed by existing technologies and significantly enriches the interactive nature of theater participation.
	
## Sample

Below are screenshots of the final output:

<template v-for="item in pics">
  <div align="center" >
    <img :src="`../assets/img/bandersnatch/${item.src}.png`" :alt="item.alt" 
      style="width: 100%"
    />
  </div>

  <center>
    ({{ item.title }})
  </center>
  <br />
</template>

<script setup>
import { ref } from 'vue'

const pics = ref([
 {
    src: "home",
    alt: "Bandersnatch landing Page",
    title: "landing page"
  },
  {
    src: "password",
    alt: "Bandersnatch Audience Password",
    title: "audience login"
  },
  {
    src: "waiting",
    alt: "Bandersnatch Audience Waiting for the admin to start",
    title: "audience waiting for the admin to start the questions"
  },
  {
    src: "questions",
    alt: "Bandersnatch Sample Question",
    title: "sample question"
  },
  {
    src: "questions-done",
    alt: "Bandersnatch After Answering",
    title: "after answering"
  },
  {
    src: "end",
    alt: "Bandersnatch Audience Password",
    title: "end page after the questions"
  },
  {
    src: "admin-login",
    alt: "Bandersnatch admin login",
    title: "admin login"
  },
  {
    src: "admin-start",
    alt: "Bandersnatch admin start",
    title: "admin landing page"
  },
  {
    src: "admin-question",
    alt: "Bandersnatch sample question",
    title: "admin sample question"
  },
  {
    src: "admin-questions-with-prev",
    alt: "Bandersnatch Question with prev button",
    title: "admin sample question with previous button"
  },
  {
    src: "admin-done",
    alt: "Bandersnatch admin login",
    title: "admin end page after questions"
  }
])
</script>