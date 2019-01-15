<template>
  <div>
    Commit Porto is a tech conference that brings together professionals who tackle challenges in software development with the latest technologies. Now in its fifth edition the conference is only possible due to the generous support of our sponsors.
    <br /><br />
    Together we are able to invite a high quality panel of speakers from different backgrounds that have in common a love for technology and for sharing their knowledge with our participants.
    <br /><br />
    If your company wants to be part of Commit Porto ’19, you can reach out to us via the form bellow. Find all we have to offer in our prospectus.
    <br /><br />
    <div>
      <input v-model="name" placeholder="name">
      <input v-model="email" placeholder="email">
      <Button text="Send!" />
    </div>
    <br /><br />
    We are also happy to answer any questions via our email <a href="mailto:partnerships@commitporto.com">partnerships@commitporto.com</a>.
    <br /><br />
    Let’s put tech in the center stage of Porto.
  </div>
</template>

<script>
import Button from '@/components/Button';

export default {
  name: 'CallForSponsor',
  components: {
    Button,
  }
};
</script>
