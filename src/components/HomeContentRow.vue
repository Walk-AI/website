<template>
  <div class="grid home-content-row" :class="{
    flip: flip
  }">
    <div v-if="flip">

      <slot name="image">
        <img :src="image" alt="image"/>
      </slot>
    </div>


    <div class="content-wrapper">

      <h1 class="title">

        <slot name="title">
          {{ title }}
        </slot>
      </h1>
      <p>

        <slot name="text">
          {{ text }}
        </slot>
      </p>
    </div>
    <div v-if="!flip">

      <slot name="image">
        <img :src="image" alt="image"/>
      </slot>
    </div>

  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  text: string
  image: string
  flip?: boolean
}>()
</script>

<style lang="scss">
.home-content-row {
  grid-template-columns: 1fr 1fr;

  .content-wrapper {
    display: grid;
    place-content: center;
    grid-template-rows: max-content max-content;

    h1 {
      margin: 0;
    }


  }


}
</style>