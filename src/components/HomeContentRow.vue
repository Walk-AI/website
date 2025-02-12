<template>

  <Container class="home-content-row" :class="{
    flip: flip
  }">
    <AppGif :image="image" class="app-gif"/>

    <Container class="content-wrapper center-y">

      <Container class="title-1 text-primary align-content-end">

        <slot name="title">
          {{ title }}
        </slot>
      </Container>
      <Container class="text-wrapper">
        <p>

          <slot name="text">
            {{ text }}
          </slot>
        </p>
      </Container>
    </Container>


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
  grid-template-areas: "app-gif content-wrapper";

  &.flip {
    grid-template-areas: "content-wrapper app-gif";
  }

  .app-gif {
    grid-area: app-gif;
  }

  .content-wrapper {
    grid-area: content-wrapper;
  }


}


@media (max-width: 800px) {
  .home-content-row {

    grid-template-areas: "content-wrapper" "app-gif";
    grid-template-columns: 100%;
    grid-template-rows: max-content max-content;
    justify-content: center;
    justify-items: center;
    overflow: hidden;

    &.flip {
      grid-template-areas: "content-wrapper" "app-gif";
    }

    .app-gif {
      padding-block-start: 1rem;
      width: 80vw;
      max-width: 300px;
      max-height: 80vh;

    }

    .content-wrapper {
      padding-top: 3rem;
      justify-content: center;

      .title-1 {
        text-align: center;
        font-size: 2.5rem;
      }

      .text-wrapper {
        text-align: center;
        max-width: 85vw;
      }
    }


  }
}
</style>