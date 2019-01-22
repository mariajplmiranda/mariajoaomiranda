<template>
  <video
    :src="src"
    :autoplay="autoplay"
  />
</template>

<script>
export default {
  name: 'Video',
  props: {
    src: {
      type: String
    }, 
    autoplay: {
      type: Boolean,
      default: true
    },
  },
};
</script>
