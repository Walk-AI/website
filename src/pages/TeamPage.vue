<template>
  <Container class="row shrink gap-4 team-page">
    <div class="title-1 text-center text-primary">Meet the Team</div>
    <Container class="team shrink horizontal-align-center gap-5 overflow-visible">


      <TeamMemberCard v-for="member in members" :key="member.name" :name="member.name" :title="member.title"
                      :bio="member.bio" :img="member.img" :linkedin="member.linkedin"/>
    </Container>
    <Footer></Footer>
  </Container>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import TeamMemberCard from "../components/TeamMemberCard.vue";

interface TeamMember {
  name: string
  title: string
  bio?: string
  img: string
  linkedin: string
}

const base = import.meta.env.BASE_URL;

const members: TeamMember[] = [
  {
    name: 'Elroie Agam',
    title: 'CEO',
    bio: 'Elroie is the CEO of our company',
    img: base + 'team/elroie.png',
    linkedin: 'https://www.linkedin.com/in/elroieagam/'
  },
  {
    name: 'Eyal Agam',
    title: 'COO',
    bio: 'Eyal is the COO of our company',
    img: base + 'team/eyal.png',
    linkedin: 'https://www.linkedin.com/in/eyal-agam-3009011ba/'
  },
  {
    name: 'Alexander Shugaev',
    title: 'CTO',
    bio: 'Alexander is the CTO of our company',
    img: base + 'team/alexander.png',
    linkedin: 'https://www.linkedin.com/in/alexander-shugaev/'
  }
]
</script>
<style lang="scss">
.team-page {
  .footer {
    position: absolute;
    bottom: 0;
  }
}

.team {
  grid-auto-flow: column;


}

@media (max-width: 800px) {
  .team-page {
    .footer {
      position: relative;
    }
  }
  .team {
    grid-auto-flow: row;
  }
}
</style>