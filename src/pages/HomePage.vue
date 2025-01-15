<template>
  <div class="home-container">
    <HomeContentRow v-for="item in content" :title="item.title" :text="item.text" :image="item.image"
                    :flip="item.flip"/>
  </div>
</template>

<script setup lang="ts">

import HomeContentRow from "../components/HomeContentRow.vue";

const content = [
  {
    title: 'STAY CONNECTED',
    text: 'Share your fascinating adventures online and explore the journeys of fellow walkers. Expand your circle of friends by adding other walkers, following their trips, or joining them. Engage with the community by posting, commenting, and reviewing on the platform.',
    image: '1.png',
    flip: false,
  }, {
    title: 'PLAN AHEAD',
    text: 'Plan your next adventure effortlessly with our advanced AI-powered tools or opt for a manual approach with personalized tips from fellow walkers. Organize your trips, save them privately, or share them publicly to inspire and connect with others as you go.',
    image: '2.png',
    flip: true,
  }, {
    title: "BE ORGANIZED",
    text: "Enhance your trip with recommended activities to stay organized on your journey. Easily modify your plans, explore new adventures, and gain access to exclusive deals and special offers, ensuring a well-rounded and exciting travel experience.",
    image: '3.png',
    flip: false,
  }
]
</script>

<style lang="scss">
.home-container {
  display: grid;

}
</style>