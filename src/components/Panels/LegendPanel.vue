<template>
<div id="legendDiv"></div>
</template>
<script>
import esriLoader from "esri-loader";
import { appconfig } from "../../assets/config.js";
export default {
  props:['mapinfo'],
  data() { return{}
  },
  methods: {
    createWidget() {
      esriLoader.loadModules(["esri/widgets/Legend"], appconfig.options).then(([Legend]) => {
          new Legend({
            container: "legendDiv",
            //container: document.createElement("div"),
            view: this.mapinfo
          });
        });
    }
  },
  watch: {
      mapinfo: function(){
          //console.log('MapView Set From Parent - Creating Legend');
          this.createWidget();
      }
  }
  //doesn't work because of the lag when creating the map
//   mounted() {
//     console.log(this.mapinfo);
//     this.createWidget();
//   }
};
</script>
<style >
</style>