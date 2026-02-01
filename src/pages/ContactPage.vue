<template>
  <Container class="row shrink horizontal-align-center vertical-align-center gap-5 contact-page">
    <div class="title-1 text-center text-primary py-4">Contact Us</div>
    <Container class="col shrink card text-center px-4 py-3 gap-4 overflow-visible">
      <Container class="row shrink gap-3 overflow-visible">
        <Container>
          <div class="title-2 text-secondary">Our Offices</div>
          <div class="title-4">Manhattan New York, NY</div>
        </Container>
        <Container class="row shrink">
          <div class="title-2 text-secondary">Email</div>
          <div class="title-4">contact@walkai.io</div>
        </Container>
        <Container class="overflow-visible horizontal-align-center">
          <div class="title-2 text-secondary">Social</div>
          <Container class="col shrink gap-2 overflow-visible">
            <SocialLink link="https://www.linkedin.com/company/walk-ai/" :image="base + 'linkedin.png'"
              alt="linkedin" />

            <SocialLink link="" :image="base + 'twitter.png'" alt="x.com" />

            <SocialLink link="" :image="base + 'instagram.png'" alt="instagram" />

            <SocialLink link="" :image="base + 'facebook.png'" alt="facebook" />
          </Container>
        </Container>

      </Container>
      <!--      <form class="contact-form p-4">-->

      <!--        <Container class="row shrink gap-4">-->

      <!--          <Container class="input">-->
      <!--            <label for="name">Name</label>-->
      <!--            <input type="text" placeholder="Name">-->
      <!--          </Container>-->
      <!--          <Container class="input">-->
      <!--            <label for="email">Email</label>-->
      <!--            <input type="email" placeholder="Email">-->
      <!--          </Container>-->

      <!--          <Container class="input row shrink">-->
      <!--            <label for="message">Message</label>-->
      <!--            <textarea rows="4" placeholder="Message"></textarea>-->
      <!--          </Container>-->
      <!--          <button class="button">Send</button>-->
      <!--        </Container>-->
      <!--      </form>-->
    </Container>
    <Footer></Footer>
  </Container>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import SocialLink from "../components/SocialLink.vue";

const base = import.meta.env.BASE_URL;
</script>

<style lang="scss">
.contact-page {
  min-height: 100vh;

  .footer {
    position: absolute;
    bottom: 0;
  }
}

.contact-form {
  width: 300px;
}
</style>