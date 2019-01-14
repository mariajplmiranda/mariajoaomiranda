<template>
  <button @click="onClick" type="button">{{text}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: ['text', 'onClick'],
};
</script>

<style scoped>
  button {
    font-family: var(--main-font);
    background-color: var(--white);
    color: var(--mainColor);
    text-transform: uppercase;
    border-radius: 5px;
    border-width: 0;
    padding: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    &:active {
      background-color: var(--mainColor);
      color: var(--white);
    }

    &:active,
    &:hover,
    &:focus {
      outline: none;
    }

    &:disabled {
      pointer-events: none;
      background: var(--lightGrey);
      color: var(--white);
    }
  }
</style>
