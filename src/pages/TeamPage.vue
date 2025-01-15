<template>
  <div class="team-members">
    <TeamMemberCard v-for="member in members" :key="member.name" :name="member.name" :title="member.title"
                    :bio="member.bio" :img="member.img" :linkedin="member.linkedin"/>
  </div>
</template>

<script setup lang="ts">
import TeamMemberCard from "../components/TeamMemberCard.vue";

interface TeamMember {
  name: string
  title: string
  bio?: string
  img: string
  linkedin: string
}

const members: TeamMember[] = [
  {
    name: 'Elroie Agam',
    title: 'CEO',
    bio: 'Elroie is the CEO of our company',
    img: '/team/elroie.png',
    linkedin: 'https://www.linkedin.com/in/elroieagam/'
  },
  {
    name: 'Eyal Agam',
    title: 'COO',
    bio: 'Eyal is the COO of our company',
    img: '/team/eyal.png',
    linkedin: 'https://www.linkedin.com/in/eyal-agam-3009011ba/'
  }, {
    name: 'Eli Veffer',
    title: 'CTO',
    bio: 'Eli is the CTO of our company',
    img: '/team/eli.png',
    linkedin: 'https://www.linkedin.com/in/eliveffer/'
  }
]
</script>
<style lang="scss">
.team-members {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;


}
</style>