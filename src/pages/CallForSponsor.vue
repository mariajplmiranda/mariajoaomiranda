<template>
  <div>
    <h1>Call for Sponsors</h1>
    <small>
      Commit Porto is a tech conference that brings together professionals who tackle challenges in
      software development with the latest technologies. Now in its fifth edition the conference is
      only possible due to the generous support of our sponsors.
    </small>
    <small>
      Together we are able to invite a high quality panel of speakers from different backgrounds
      that have in common a love for technology and for sharing their knowledge with our
      participants.
    </small>
    <small>
      If your company wants to be part of Commit Porto ’19, you can reach out to us via the form
      bellow. Find all we have to offer in our prospectus.
    </small>
    <div class="form">
      <input v-model="name" placeholder="tell us your name">
      <input v-model="email" placeholder="provide us an e-mail">
      <Button text="Send!" isSecondary={true} />
    </div>
    <small>
      We are also happy to answer any questions via our email
      <a href="mailto:partnerships@commitporto.com">partnerships@commitporto.com</a>.<br/>
      Let’s put tech in the center stage of Porto.
    </small>
  </div>
</template>

<script>
import Button from '@/components/Button';

export default {
  name: 'CallForSponsor',
  data: () => ({
    name: '',
    email: '',
  }),
  components: {
    Button,
  },
};
</script>

<style scoped>
.form {
  display: flex;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;

  & input {
    flex-grow: 1;
    flex-basis: 0;
    margin-right: 20px;
  }

  @media (--mobile) {
    flex-direction: column;

    & input {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>
