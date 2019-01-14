<template>
  <div>
    <div class="container">
      <div class="bckg" />
      <div class="logo-section">
        <img class="logo" src="@/assets/logobrancohor.png"/>
        <div class="time">JUNE 22, 2019</div>
      </div>
      <div class="cta-section">
        <Button text="Call for sponsors" :onClick="openModal" />
        <Button text="Call for speakers" :onClick="openModal" />
      </div>
    </div>
    <Modal :htmlContent="modalHtmlContent" @close="closeModal">
    </Modal>
  </div>
</template>

<script>
import Button from '@/components/Button';
import Modal from '@/components/Modal';
// import CallForSponsor from './CallForSponsor.html';

export default {
  name: 'Homepage',
  data: () => ({
    modalHtmlContent: '',
  }),
  components: {
    Button,
    Modal,
  },
  methods: {
    openModal() {
      this.modalHtmlContent = '<div>ola</div>';
    },
    closeModal() {
      this.modalHtmlContent = '';
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  height: 90vh;
  color: var(--white);
}

.bckg {
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
  text-align: center;

  & .logo {
    width: 500px;
  }

  & .time {
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
