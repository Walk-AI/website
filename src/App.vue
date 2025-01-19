<template>
  <RootLayout>

    <HeaderBar/>
    <TransitionRouterView fast/>

  </RootLayout>
</template>

<script setup lang="ts">
import {RouterView} from "vue-router";
import HeaderBar from "./components/HeaderBar.vue";
import TransitionRouterView from "./components/transitions/TransitionRouterView.vue";
import RootLayout from "./components/layout/RootLayout.vue";
</script>

<style lang="scss">

</style>