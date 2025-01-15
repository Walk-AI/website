<template>
  <div class="grid header-wrapper">
    <div class="logo">
      <img src="/brand/logo-full.svg" alt="logo"/>
    </div>
    <div class="navbar">
      <RouterLink class="nav-item" to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/team">Team</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/waitlist">Waitlist</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.header-wrapper {
  display: grid;
  grid-template-columns: 1fr max-content;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--color-background);
  backdrop-filter: blur(8px);

  .logo {
    height: 52px;

    img {
      height: 100%;
      width: auto;
    }
  }

  .navbar {
    display: grid;
    grid-template-columns: repeat(5, max-content);
    justify-items: end;
    width: max-content;

    a {
      text-align: center;
      padding: 1rem;
      text-decoration: none;
      color: var(--color-text);
      transition: color var(--transition);

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