<template>
  <div class="social-link">
    <a :href="link" target="_blank">
      <img :src="image" :alt="alt" width="20px" height="20px"/>
    </a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  link: string
  image: string
  alt: string
}>()
</script>

<style lang="scss">
.social-link {
  background: white;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  padding: 2px;
  transition: all var(--snap-ease);

  a {
    width: 100%;
    height: 100%;
    color: var(--color-primary);
    text-decoration: none;
    transition: color var(--snap-ease);


    img {
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 8px;
    }

  }

  &:hover {
    transform: scale(1.1);

    background: var(--color-primary);

    a {
      color: var(--color-primary-dark);
    }
  }
}

</style>