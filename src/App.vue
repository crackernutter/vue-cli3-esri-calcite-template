<template>
  <div id="app">
    <Home msg="Welcome to Your Vue.js App"/>
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

</style>