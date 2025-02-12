<template>
  <div class="gif-container">
    <img :src="image" alt="image"/>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string
}>()
</script>

<style>

.gif-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>