import esriLoader from 'esri-loader';
import {appconfig} from './assets/config.js';

//import 'promise-polyfill/src/polyfill';
//require('es6-promise').polyfill();
import Vue from 'vue';
//import PanelGroup from './components/PanelGroup.vue';
import Panel from './components/Panel.vue';

import Navbar from './components/Navbar.vue';
import InfoPanel from './components/content/InfoPanel.vue';
import LegendPanel from './components/content/LegendPanel.vue';
import QueryPanel from './components/content/QueryPanel.vue';
import LoginPanel from './components/content/LoginPanel.vue';
import EsriMap from './components/Map.vue'; 

import '../node_modules/calcite-maps/dist/css/calcite-maps-bootstrap.min-v0.9.css';
import '../node_modules/calcite-maps/dist/css/calcite-maps-arcgis-4.x.min-v0.9.css';
import './assets/styles.css'; 

//esriLoader.loadCss('https://js.arcgis.com/4.9/esri/css/main.css');
//set page attributes


esriLoader.loadModules([
  //used for ui elements
"bootstrap/Dropdown",
"calcite-maps/calcitemaps-v0.9"], appconfig.options)
.then(() => {
  //console.log(process.env.NODE_ENV); 
//console.log(process.env.VUE_APP_TITLE); 
  new Vue({
    el: "#app",
    data:{
      panels:[
        {id: 1, "panelid": "info-panel", "name": "Info", "glyphicon": "glyphicon glyphicon-info-sign"},
        {id: 2, "panelid": "legend-panel", "name": "Legend", "glyphicon": "glyphicon glyphicon-list-alt"},
        {id: 3, "panelid": "query-panel", "name": "Query", "glyphicon": "glyphicon glyphicon-search"},
        {id: 4, "panelid": "login-panel", "name": "Login", "glyphicon": "glyphicon glyphicon-user"}
        //{id: 3, "datatarget": "testpanel", "name": "Test", "glyphicon": "glyphicon glyphicon-list-alt"},

      ],
      activePanel:null,
      mapView:null,
      title: "Esri Webpack Vue Boilerplate"
      
    },
    components: {"navbar": Navbar, "panel-template":Panel, "info-panel":InfoPanel, "legend-panel":LegendPanel, 'query-panel':QueryPanel, "esri-map": EsriMap, 'login-panel': LoginPanel}
  });

});
