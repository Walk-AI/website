<template>
  <div>
    <img :src="image" alt="image"/>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string
}>()
</script>

<style scoped>

</style>