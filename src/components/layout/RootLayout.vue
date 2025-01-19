<template>
  <div class="vh-100 vw-100 root-container">
    <div class="background-roads"></div>
    <slot></slot>

  </div>
</template>

<script setup lang="ts">

import {onMounted} from "vue";

onMounted(() => {
})
</script>

<style lang="scss">
#popovers {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  pointer-events: none;

}

.background-roads {
  position: absolute;
  width: 100vw;
  height: 100%;
  z-index: 0;
  background-image: url('/images/roads.png');
  background-size: contain;
  background-position: center;
  opacity: 0.1;
  pointer-events: none;
}
</style>
