<template>
  <div class="member-card">
    <div class="profile-image">
      <img :src="props.img" alt="image"/>
    </div>
    <div class="profile-info">

      <div class="profile-name">
        {{ props.name }}
      </div>
      <div class="profile-linkedin">
        <a :href="props.linkedin" target="_blank">
          <img src="/linkedin.png" alt="linkedin" width="20px" height="20px"/>
        </a>
      </div>

      <div class="profile-title">
        {{ props.title }}
      </div>


    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  name: string
  title: string
  bio?: string
  img: string
  linkedin: string
}>()

</script>

<style lang="scss">

.member-card {
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: max-content max-content;

  .profile-image {
    width: 15vw;
    height: 15vw;
    overflow: clip;
    border-radius: 20px;
    background-color: var(--color-primary-light);

    img {
      width: 100%;
      height: auto;
    }
  }

  .profile-info {
    display: grid;
    gap: 10px;
    padding: 10px;
    grid-template-columns: 1fr;

    grid-template-areas:
      "profile-name profile-linkedin"
      "profile-title profile-title";


    .profile-name {
      font-size: 1.5rem;
      font-weight: bold;
      grid-area: profile-name;

    }

    .profile-title {
      font-size: 1.2rem;
      font-weight: bold;
      grid-area: profile-title;
    }

    .profile-bio {
      font-size: 1rem;
      grid-area: profile-bio;
    }

    .profile-linkedin {
      grid-area: profile-linkedin;
      background: white;
      width: 32px;
      height: 32px;
      border-radius: 8px;
      padding: 2px;
      transition: all var(--transition);

      a {
        width: 100%;
        height: 100%;
        color: var(--color-primary);
        text-decoration: none;
        transition: color var(--transition);


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
  }
}

</style>