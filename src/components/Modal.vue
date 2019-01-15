<template>
  <div>
    <div class="overlay"></div>
    <div class="modal-content">
      <div @click="close" class="close">x</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['htmlContent'],
  mounted() {
    document.body.addEventListener('keyup', e => {
      if (e.keyCode === 27) {
        this.close();
      }
    })
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-content {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    transform: translateY(-50%);
    min-width: 50%;
    max-width: 50%;
    min-height: 100px;
    background: var(--lightGrey);
    padding: 50px;
    font-weight: 100;
    border-radius: 5px;
  }

  .close {
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
  }
</style>
