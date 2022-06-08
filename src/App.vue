<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;*//* 示例的css样式 */
  margin: 0px;
  text-align: center;
  height: 100%;
}
html,body {
  margin: 0px;
  padding: 0px;
  border: 0px;
  height: 100%;
}
</style>
