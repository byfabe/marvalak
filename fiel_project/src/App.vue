<template>
  <div id="nav">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
@font-face {
  font-family: Aquifer;
  src: url("./assets/Aquifer.otf");
}
canvas {
  position: fixed;
  pointer-events: none;
  z-index: 100;
  width: 100%;
  height: 100%;
}
</style>
