<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import './variables';

html {
  height: 100vh;
}

body {
  margin: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

#app {
  font-family: var(--main-font);
  color: var(--textColor);
  margin: 0;
  height: 100vh;
}
</style>
