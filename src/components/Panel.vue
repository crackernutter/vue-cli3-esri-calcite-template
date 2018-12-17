<template>
<transition name="slide-fade">
  <div class="calcite-panels calcite-panels-right calcite-text-light calcite-bg-dark panel-group" v-show="this.$parent.activePanel===panelid">
<div v-bind:id="panelid" class="panel">
      <div id="headingInfo" class="panel-heading" role="tab">
        <div class="panel-title">
          <a class="panel-toggle" role="button"  aria-expanded="true" ><span :class="glyphicon" aria-hidden="true"></span><span class="panel-label">{{title}}</span></a> 
          <a class="panel-close" role="button" v-on:click="$parent.activePanel=''" tabindex="0" ><span class="esri-icon esri-icon-close" aria-hidden="true"></span></a>  
        </div>
      </div>
      <div id="collapseInfo" role="tabpanel" aria-labelledby="headingInfo">
        <div class="panel-body">
          <slot></slot>
        </div>
     </div>
    </div>
  </div>
</transition>
    </template>
    <script>
export default {
  //inject: ['mapView'],
  props: ['panelid', 'title', 'glyphicon'],
  data() {
    return {};
  }
};
</script>
<style>
</style>