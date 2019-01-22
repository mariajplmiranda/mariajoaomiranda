<template>
  <div>
    <div class="container">
      <div class="background">
        <div v-if="!play" class="bckg-img" />
        <Video v-if="play" src="./static/media/video1080p.mp4" />
      </div>
      <div class="logo-section">
        <img class="logo" src="@/assets/logobrancohor.png"/>
        <div class="time">JUNE 22, 2019</div>
        <div @click="() => play = !play">play</div>
      </div>
      <div class="cta-section">
        <Button text="Call for sponsors" :onClick="() => showsCallForSponsor = true" />
        <Button text="Call for speakers" :onClick="() => showsCallForSpeaker = true" />
      </div>
    </div>
    <Modal v-if="showsModal" @close="closeModal">
      <CallForSponsor v-if="showsCallForSponsor" />
      <CallForSpeaker v-if="showsCallForSpeaker" />
    </Modal>
  </div>
</template>

<script>
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import Video from '@/components/Video';
import CallForSponsor from '@/pages/CallForSponsor';
import CallForSpeaker from '@/pages/CallForSpeaker';

export default {
  name: 'Homepage',
  data: () => ({
    showsCallForSponsor: false,
    showsCallForSpeaker: false,
    play: false,
  }),
  components: {
    Button,
    Modal,
    CallForSponsor,
    CallForSpeaker,
    Video,
  },
  computed: {
    showsModal() {
      return this.showsCallForSponsor || this.showsCallForSpeaker;
    },
  },
  methods: {
    closeModal() {
      this.showsCallForSponsor = false;
      this.showsCallForSpeaker = false;
    },
  },
};
</script>

<style scoped>
@import '../variables';

.container {
  position: relative;
  height: 90vh;
  color: var(--white);
}

.background {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

video {
}

.bckg-img {
  background: var(--textColor) url('../assets/bckg.jpg') no-repeat center center / cover;
  width: 100%;
  height: 100%;
  filter:
    grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.8);
}

.logo-section {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;

  & .logo {
    width: 40%;

    @media (--tablet) {
      width: 70%;
    }

    @media (--mobile) {
      width: 90%;
    }
  }

  & .time {
    @apply --medium-font;
    font-family: var(--secondary-font);
  }
}

.cta-section {
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: translateY(50%);
  text-align: center;

  & > button:not(:last-child) {
    margin-right: 30px;
  }
}
</style>
