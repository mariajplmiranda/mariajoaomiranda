<template>
  <div class="homepage">
    <Modal :showsModal="showsModal" @close="closeModal">
      <CallForSponsor v-if="showsCallForSponsor" />
      <CallForSpeaker v-if="showsCallForSpeaker" />
    </Modal>
    <div class="container">
      <div class="background">
        <div
          class="bckg-img"
          :class="{hide: play}"
        />
        <video
          :class="{hide: !play}"
          src="@/assets/Agile.mp4"
          autoplay
          loop
        />
      </div>
      <div class="logo-section">
        <img class="logo" src="@/assets/logobrancohor.png"/>
        <div class="time">JUNE 22, 2019</div>
        <div @click="() => play = !play" :class="{ isPlaying: play, paused: !play }">
          <img class="play" src="@/assets/play.svg" />
          <img class="pause" src="@/assets/pause.svg" />
        </div>
      </div>
      <div class="cta-section">
        <Button text="Call for sponsors" :onClick="() => showsCallForSponsor = true" />
        <Button text="Call for speakers" :onClick="() => showsCallForSpeaker = true" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button';
import Modal from '@/components/Modal';
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

.homepage {
  display: flex;
  flex-direction: column;
}

.container {
  position: relative;
  height: 90vh;
  color: var(--white);
  z-index: 1;
}

.background {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.bckg-img {
  background: var(--textColor) url('../assets/bckg.jpg') no-repeat center center / cover;
  width: 100%;
  height: 100%;
  filter:
    grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.8);
  opacity: 1;
  transition: opacity 0.5s ease;

  &.hide {
    opacity: 0;
    width: 0;
    height: 0;
  }
}

video {
  opacity: 1;
  transition: opacity 0.5s ease;

  &.hide {
    opacity: 0;
  }
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
    margin-top: 5px;
    margin-bottom: 10px;
  }
}

.play,
.pause {
  display: none;
  opacity: 1;
  transition: opacity 0.5s ease;
  cursor: pointer;
  position: absolute;
  width: 100%;

  @media (--desktop) {
    display: block;
  }

  & img {
    width: 30px;
    cursor: pointer;
  }
}

.isPlaying,
.paused {
  position: relative;
  width: 30px;
  height: 30px;
  margin: 0 auto;
}

.isPlaying {
  & .play {
    opacity: 0;
  }
}

.paused {
  & .pause {
    opacity: 0;
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
