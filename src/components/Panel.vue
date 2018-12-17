<template>
<transition name="slide-fade">
  <div class = 'calcite-panels calcite-panels-right calcite-text-light calcite-bg-dark panel-group' v-show="this.$parent.activePanel===panelid" v-bind:id="panelid">
<div class="panel">
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition-delay:.2s;
  transition: all .2s ease;
}

/* .slide-fade-leave-active {
  transition: all .2s ease;
} */
.slide-fade-enter /*.slide-fade-leave-to*/
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(400px);
}

#bottom-panel {
  margin-bottom: 0 ;
}
#bottom-panel .panel-body {
  width: 100% !important;
  height: 350px !important;
}

#bottom-panel{
  position: absolute;
  bottom: 0 !important;
  top: auto !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 300 !important;
}

</style>