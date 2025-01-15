<template>
  <div class="grid">
    <HeaderBar class="sticky-top"/>
    <RouterView/>
  </div>
</template>

<script setup lang="ts">
import {RouterView} from "vue-router";
import HeaderBar from "./components/HeaderBar.vue";
</script>

<style lang="scss">

.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1000;
}

</style>