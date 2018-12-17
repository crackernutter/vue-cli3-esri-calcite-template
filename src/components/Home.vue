<template>
  <!-- Navbar -->

  <div id="Home">
    <navbar @panel-change="activePanel = $event"></navbar>
    <!-- Map  -->
    <esri-map></esri-map>
    <panel-template v-for="panel in panels" :title="panel.name" :panelid="panel.panelid" :glyphicon="panel.glyphicon" :key="panel.id">
      <component v-bind:is="panel.panelid" v-bind:mapinfo="mapView"></component>
    </panel-template>

<!-- 
<panel-template v-bind:title="'Bottom'" v-bind:panelid="'bottom-panel'" v-bind:key="7" v-bind:glyphicon="'glyphicon glyphicon-list-alt'">
  <bottom-panel/>
  </panel-template>  -->

<div v-show="activePanel==='bottom-panel'">
      <div id="bottom-panel" class="panel">
        <div id="headingInfo" class="panel-heading">
          <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
          <span class="panel-label"> About</span>
          <a style="float:right;" role="button" tabindex="0" v-on:click="activePanel=''">
            <span class="esri-icon esri-icon-close" aria-hidden="true"></span>
          </a>
        </div>
        <div class="panel-body">
          <div id='newlegend'></div>
        </div>
      </div>
    </div>



  </div>
</template>

<script>

import Panel from './Panel.vue';
import Navbar from './Navbar.vue';
import EsriMap from './Map.vue';

import InfoPanel from './Panels/InfoPanel.vue';
import LegendPanel from './Panels/LegendPanel.vue';
import QueryPanel from './Panels/QueryPanel.vue';
import LoginPanel from './Panels/LoginPanel.vue';
import BottomPanel from './Panels/BottomPanel.vue'; 
 
//const req = require.context('./Panels', true, /.*\.vue$/)
//console.log(req.keys());

export default {
  name: 'Home',
  props: {
    msg: String
  },
  data: function() { return {
      panels:[
        {id: 1, "panelid": "info-panel", "name": "Info", "glyphicon": "glyphicon glyphicon-info-sign"},
        {id: 2, "panelid": "legend-panel", "name": "Legend", "glyphicon": "glyphicon glyphicon-list-alt"},
        {id: 3, "panelid": "query-panel", "name": "Query", "glyphicon": "glyphicon glyphicon-search"},
        {id: 4, "panelid": "login-panel", "name": "Login", "glyphicon": "glyphicon glyphicon-user"},
        {id: 5, "panelid": "bottom-panel", "name": "Bottom", "glyphicon": "glyphicon glyphicon-list-alt"}
      ],
      activePanel:null,
      mapView:null,
      title: "Esri Webpack Vue Boilerplate2"
      
    }},
    components: {"bottom-panel": BottomPanel, "navbar": Navbar, "panel-template":Panel, "info-panel":InfoPanel, "legend-panel":LegendPanel, 'query-panel':QueryPanel, "esri-map": EsriMap, 'login-panel': LoginPanel}
}
</script>