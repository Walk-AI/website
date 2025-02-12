<template>
  <Container class="about-page">

    <h1 class="text-primary">About Walk.AI</h1>
    <div class="content">
      <p>
        At Walk.AI, we envision a world where planning a trip is as enjoyable and seamless as the journey itself.
        Our mission is to eliminate the complexities and frustrations of travel planning by providing an intelligent,
        comprehensive platform that caters to the unique preferences and needs of each traveler.
      </p>

      <h2 class="text-secondary">Where the Problem Starts</h2>
      <p>
        Planning a trip involves navigating a maze of information spread across various platforms, making it
        time-consuming and overwhelming. Travelers face several challenges:
      </p>
      <ul>
        <li>Scattered Information: Essential details about destinations, routes, and attractions are often spread across
          multiple websites and apps, requiring extensive research and effort.
        </li>
        <li>Lack of Personalization: Most travel planning tools fail to consider individual preferences, interests, and
          budgets, leading to generic recommendations that may not suit the traveler’s specific needs.
        </li>
        <li>Expertise and Knowledge Gap: Many travelers, especially first-timers, lack the necessary knowledge to plan a
          well-rounded trip, which includes understanding local transportation, cultural nuances, and finding suitable
          attractions.
        </li>
        <li>Group Coordination Difficulties: Planning a trip for a group or family with diverse interests can be
          challenging, as it requires balancing different preferences and ensuring everyone has a satisfying experience.
        </li>
      </ul>

      <h2 class="text-secondary">Where Our Solution Comes In</h2>
      <p>
        Walk.AI addresses these challenges by offering a smart, AI-driven travel planning platform that functions
        as a personal travel guide:
      </p>
      <ul>
        <li>Customized Travel Plans: Our advanced AI analyzes user preferences, past travel experiences, and specific
          interests to create customized travel plans. Whether you’re an adventure seeker, a culture enthusiast, or a
          family looking for a balanced trip, Walk.AI tailors the itinerary to match your needs.
        </li>
        <li>Detailed Explanations: Walk.AI provides detailed audio and text explanations of various sites and
          attractions,
          including historical insights, cultural information, and practical tips, ensuring you are well-informed and
          engaged throughout your journey.
        </li>
        <li>Personalized Recommendations: The app sends push notifications with personalized recommendations for nearby
          attractions, dining options, and events based on your location and preferences, ensuring you never miss out on
          exciting opportunities.
        </li>
        <li>Group Coordination Tools: To simplify group coordination, Walk.AI allows users to share plans, create group
          itineraries, and communicate within the app, ensuring everyone is on the same page and can enjoy a cohesive
          travel experience.
        </li>
        <li>Practical Tools: To further enhance the travel experience, Walk.AI includes practical tools such as currency
          converters, packing lists, and calendars. These features help you stay organized and prepared, reducing the
          stress of travel planning.
        </li>
      </ul>

      <h2 class="text-secondary">Our Team</h2>
      <p>
        Walk.AI is led by a team of passionate entrepreneurs: Elroie Agam, Eyal Agam. With extensive experience in
        management, strategic development, and technology, our founders are dedicated to creating a user-centric
        platform that transforms travel planning.
      </p>

      <h2 class="text-secondary">Join Us</h2>
      <p>
        As we continue to innovate and expand, we invite travelers and businesses to join us on this journey.
        Discover the future of travel planning with Walk.AI—where every trip is not just planned, but perfectly
        personalized.
      </p>
      <p>
        Experience the next generation of travel with Walk.AI, your intelligent travel companion.
      </p>
      <p>
        Join Walk.AI and embark on your next adventure with ease. Sign up now to join our waitlist and be part of
        the future of travel planning.
      </p>
      <h2 class="text-secondary">Frequently Asked Questions</h2>
      <ul>
        <li>
          <span>What is Walk.ai?</span>
          <p>Walk.ai is a smart travel planning platform that provides personalized itineraries, tailored
            recommendations,
            real-time information, and seamless booking options to simplify your travel planning experience.</p>
        </li>
        <li>
          <span>How does Walk.ai use AI to create personalized itineraries?</span>
          <p>Walk.ai uses advanced algorithms and AI technology to analyze your preferences, interests, and budget,
            creating customized travel plans that suit your unique needs.</p>
        </li>
        <li>
          <span>Is Walk.ai free to use?</span>
          <p>Walk.ai is totally free.</p>
        </li>
        <li>
          <span>How can I join the Walk.ai waitlist?</span>
          <p>To join our waitlist, simply enter your email address in the provided sign-up form on our website. You'll
            receive updates and early access to the Walk.ai platform once it launches.</p>
        </li>
        <li>
          <span>Is Walk.ai available for international travel planning?</span>
          <p>Yes, Walk.ai supports travel planning for destinations around the world. Whether you're planning a domestic
            getaway or an international adventure, our platform provides comprehensive tools and recommendations to make
            your trip a success.</p>
        </li>
      </ul>
      <Footer></Footer>
    </div>

  </Container>
</template>

<script setup lang="ts">

import Footer from "@/components/Footer.vue";
</script>

<style lang="scss">
.about-page {
  h1 {
    text-align: center;
  }

  .content {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 20px;
    background-color: var(--color-background);
    color: var(--color-text);
    font-family: var(--font-roboto);
    line-height: 1.6;
  }

  .content p {
    margin-bottom: 10px;
    text-align: left;
  }

  li {
    span {

      font-weight: bold;
    }
  }

  .content ul {
    list-style-type: disc;
    margin: 10px 0 10px 20px;
  }

  @media (min-width: 768px) {
    .content p {
      font-size: var(--font-size-small)
    }
  }

  @media (min-width: 1024px) {
    .content p {
      font-size: var(--font-size-small);
    }
  }
}
</style>
