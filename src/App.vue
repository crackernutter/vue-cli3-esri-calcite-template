<template>
  <div id="app">
    <Home/>
  </div>
</template>
<script>

import '../node_modules/calcite-maps/dist/css/calcite-maps-bootstrap.min-v0.9.css';
import '../node_modules/calcite-maps/dist/css/calcite-maps-arcgis-4.x.min-v0.9.css';
import './assets/styles.css'; 
import Home from './components/Home.vue'
export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>