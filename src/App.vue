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
:root {
  --mainColor: #C74540;
  --textColor: #4c4c4c;
  --white: #fff;
  --lightGrey: #e4e4e4;
  --main-font: 'Rubik', sans-serif;
  --secondary-font: 'Josefin Slab', cursive;
}

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
