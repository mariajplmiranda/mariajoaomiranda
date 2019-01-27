<template>
  <transition name="modal-fade">
    <div class="modal">
      <div class="overlay"></div>
      <div class="modal-content">
        <div @click="close" class="close">x</div>
        <slot name="header"></slot>
        <slot name="body"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  mounted() {
    document.body.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) {
        this.close();
      }
    });
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style>
@import '../variables';
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease
}

.modal {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.7);
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  transform: translateY(-50%);
  max-width: 50%;
  min-height: 100px;
  background: var(--white);
  padding: 50px;
  font-weight: 100;
  border-radius: 5px;

  @media (--tablet) {
    max-width: 80%;
  }

  @media (--mobile) {
    max-width: 100%;
    padding: 25px;
  }

  & h1 {
    margin-top: 0;
    text-align: center;
  }

  & small {
    @apply --small-font;
    display: block;
    margin-top: 10px;
  }
}

.close {
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
  font-size: 25px;
}
</style>
