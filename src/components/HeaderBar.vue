<template>
  <Container class="col header-wrapper horizontal-align-between vertical-align-center py-2 px-4">

    <div class="logo">
      <img src="/brand/logo-full.svg" alt="logo"/>
    </div>
    <Container class="col gap-5 navbar title-4 vertical-align-center">

      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/team">Team</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/waitlist">Waitlist</RouterLink>
    </Container>
  </Container>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.header-wrapper {
  backdrop-filter: blur(8px);
  height: max-content;

  .logo {
    height: 52px;

    img {
      height: 100%;
      width: auto;
    }
  }

  .navbar {

    a {
      text-decoration: none;
      color: var(--color-text);
      transition: color var(--snap-ease);

      &:hover {
        color: var(--color-primary);
      }
    }

    .router-link-active {
      color: var(--color-primary);
    }
  }
}
</style>