<template>
  <Container class="row shrink member-card overflow-visible z-2">
    <div class="profile-image card p-0 border-secondary">
      <img :src="props.img" alt="image"/>
    </div>
    <Container class="profile-info">

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


    </Container>
  </Container>
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
  cursor: pointer;
  width: max-content;


  &:hover {
    .profile-image {
      transform: scale(1.05);
      border-color: var(--color-primary);
    }
  }

  .profile-image {
    width: 15vw;
    height: 15vw;
    overflow: clip;

    border-radius: 20px;
    transition: all var(--snap-ease);

    img {
      width: 100%;
      height: auto;
    }
  }

  .profile-info {

    grid-template-areas:
      "profile-name profile-linkedin"
      "profile-title profile-title";
    grid-template-columns: max-content max-content;
    justify-content: center;
    align-items: center;


    .profile-name {
      font-size: 1.5rem;
      font-weight: bold;
      grid-area: profile-name;

    }

    .profile-title {
      font-size: 1.2rem;
      font-weight: bold;
      grid-area: profile-title;
      text-align: center;
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

@media (max-width: 800px) {
  .member-card {

    .profile-image {
      width: 80vw;
      height: 80vw;
      max-width: 300px;
      max-height: 300px;
    }
  }

}

</style>