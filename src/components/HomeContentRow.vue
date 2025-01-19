<template>

  <Container class="col home-content-row" :class="{
    flip: flip
  }">
    <AppGif v-if="flip" :image="image"/>

    <Container class="content-wrapper center-y">

      <Container class="title-1 text-primary align-content-end">

        <slot name="title">
          {{ title }}
        </slot>
      </Container>
      <Container class="align-content-start">
        <p>

          <slot name="text">
            {{ text }}
          </slot>
        </p>
      </Container>
    </Container>
    <AppGif v-if="!flip" :image="image"/>

  </Container>
</template>

<script setup lang="ts">
import AppGif from "./AppGif.vue";

const props = defineProps<{
  title: string
  text: string
  image: string
  flip?: boolean
}>()
</script>

<style lang="scss">
.home-content-row {
  max-width: 1000px;

  .content-wrapper {

  }


}
</style>