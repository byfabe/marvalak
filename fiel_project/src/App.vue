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
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  cursor: url("./assets/images/standard.cur"), auto;
}
a {
  text-decoration: none;
}
@font-face {
  font-family: Aquifer;
  src: url("./assets/Aquifer.otf");
}
@font-face {
  font-family: antiqua;
  src: url("./assets/antiqua.ttf");
}
canvas {
  position: fixed;
  pointer-events: none;
  z-index: 100;
  width: 100%;
  height: 100%;
}
</style>
