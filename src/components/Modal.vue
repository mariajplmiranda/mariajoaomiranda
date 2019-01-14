<template>
  <div v-if="htmlContent">
    <div class="overlay"></div>
    <div class="modal-content">
      <div @click="close" class="close">x</div>
      <div v-html="htmlContent"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['htmlContent'],
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
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    min-height: 100px;
    background: var(--lightGrey);
    padding: 10px;
  }

  .close {
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
  }
</style>
