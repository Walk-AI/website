<template>
  <div class="vw-100 vh-100">

    <div class="background-roads"></div>
    <div class="z-1 position-relative vh-100 vw-100">

      <Container class="root-container">
        <HeaderBar/>

        <TransitionRouterView fast/>

      </Container>
    </div>

  </div>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import {RouterView} from "vue-router";
import HeaderBar from "./components/HeaderBar.vue";
import TransitionRouterView from "./components/transitions/TransitionRouterView.vue";
import RootLayout from "./components/layout/RootLayout.vue";
</script>

<style lang="scss">

.root-container {
  grid-template-rows: max-content 1fr max-content;

}

.background-roads {
  position: fixed;
  width: 100vw;
  height: 100vw;
  background-image: url('/images/roads.png');
  background-size: contain;
  background-position: center;
  opacity: 0.1;
  pointer-events: none;
  z-index: 0;
}
</style>