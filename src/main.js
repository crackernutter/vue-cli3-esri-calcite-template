import Vue from 'vue';
import App from './App.vue';

import esriLoader from 'esri-loader';
import {appconfig} from './assets/config.js';

Vue.config.productionTip = false
console.log(process.env.NODE_ENV); 
console.log(process.env.VUE_APP_TITLE);
esriLoader.loadModules([
  "bootstrap/Dropdown",
  "calcite-maps/calcitemaps-v0.9"], 
  appconfig.options).then(([])=>{
    console.log('loaded Moddhules')
    new Vue({
      render: h => h(App),
    }).$mount('#app')
    
  
  
  });



