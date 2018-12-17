<template>
<div class="calcite-map calcite-map-absolute">
    <div id="mapViewDiv"></div>
</div>
</template>
<script>
import esriLoader from "esri-loader";
import {appconfig} from "../assets/config.js";
export default {
  data() {
    return {mapView: null};
  },
  methods: {
    loadMap() {
      esriLoader
        .loadModules(
          [
            "esri/Map",
            "esri/layers/FeatureLayer",
            "esri/views/MapView",

            // Widgets
            "esri/widgets/Home",
            "esri/widgets/Zoom",
            "esri/widgets/Compass",
            "esri/widgets/Search",
            "esri/widgets/BasemapToggle",
            "esri/widgets/ScaleBar",
            "esri/widgets/Attribution",
            "esri/widgets/Expand",
            "calcite-maps/calcitemaps-arcgis-support-v0.9",
            "dojo/domReady!"
          ],
          appconfig.options
        )
        .then(
          ([
            Map,
            FeatureLayer,
            MapView,
            Home,
            Zoom,
            Compass,
            Search,
            BasemapToggle,
            ScaleBar,
            Attribution,
            Expand,
            CalciteMapArcGISSupport
          ]) => {
            var map = new Map({
              basemap: "oceans"
            });

            var featureLayer = new FeatureLayer({
              url:
                "https://services3.arcgis.com/AIhXi099WVQHFHhq/arcgis/rest/services/Trails_2000_Database/FeatureServer/0",
              renderer: appconfig.renderer,
              title: "Durango Trails",
              popupTemplate: appconfig.template
            });

            map.add(featureLayer);

            // View
            var mapView = new MapView({
              container: "mapViewDiv",
              map: map,
              center: [-107.8, 37.3],
              zoom: 11,
              padding: {
                top: 50,
                bottom: 0
              },
              ui: { components: [] }
            });

            this.$parent.mapView = mapView;
            //this.mapView = mapView;

            // Popup and panel sync
            //mapView.when(function(){
            //  CalciteMapArcGISSupport.setPopupPanelSync(mapView);
            //});

            // Search - add to navbar
            var searchWidget = new Search({
              container: "searchWidgetDiv",
              view: mapView
            });
            CalciteMapArcGISSupport.setSearchExpandEvents(searchWidget);

            // Map widgets
            var home = new Home({
              view: mapView
            });
            mapView.ui.add(home, "top-left");

            var zoom = new Zoom({
              view: mapView
            });
           mapView.ui.add(zoom, "top-left");

            var compass = new Compass({
              view: mapView
            });
            mapView.ui.add(compass, "top-left");

            var basemapToggle = new BasemapToggle({
              view: mapView,
              container: document.createElement("div"),
              secondBasemap: "satellite"
            });

            var expandBasemapToggler = new Expand({
              view: mapView,
              name: "basemap",
              content: basemapToggle.domNode,
              expandIconClass: "esri-icon-basemap"
            });

            mapView.ui.add(expandBasemapToggler, "top-right");

            //mapView.ui.add(basemapToggle, "bottom-right");

            var scaleBar = new ScaleBar({
              view: mapView
            });
            mapView.ui.add(scaleBar, "bottom-left");

            var attribution = new Attribution({
              view: mapView
            });
            mapView.ui.add(attribution, "manual");
          }
        );
    }
  },
  watch: {},
  mounted: function(){
      //console.log('Map Component Mounted');
      this.loadMap();
  }, 
  // provide: function(){
  //   return {
  //     mapView: this.mapView
  //   }
  // }
};
</script>