<template>
<div class="row">
  <div class="col-xs-3">
<button v-if="!loggedIn" @click.stop="login" type="button" class="btn btn-primary">Login</button>
<button v-if="loggedIn" @click.stop="logout" type="button" class="btn btn-danger">Logout</button>
</div>
<div v-if="loggedIn" class="col-xs-9 text-center">
<span class="middle">Welcome {{username}}</span>
</div>
</div>
</template>
<script>
import esriLoader from "esri-loader";
export default {
  data() {
    return {
      loggedIn: false,
      username: "",
      identityManagerJSON:""
    };
  },
  methods: {
    login() {
      esriLoader
        .loadModules([
          "esri/identity/OAuthInfo",
          "esri/identity/IdentityManager",
          "dijit/Dialog",
        ])
        .then(([OAuthInfo, esriId, Dialog]) => {
          console.log("loggin in");
          let info = new OAuthInfo({
            appId: "dzxNzduCQLIQNfGM",
            portalUrl: "https://gis-dev.eon.faa.gov/gis",
            popup: true,
            //authNamespace: "facilities",
            //popupCallbackUrl: `${this.baseUrl}/oauth-callback.html`
          });
          console.log(esriId);
          esriId.on('onondialog-create', function(event){console.log('dialog created');})
        //   esriId.dialog = new Dialog({
        //       title: "MyDialog",
        //       content: "TestContent",
        //       style: "width: 500px;"
        //   });
        //setInterval(function(){console.log(esriId.dialog);}, 1000);
          esriId.on('credential-create', function(event){console.log('credential created');})
          
          //console.log(esriId);
          esriId.registerOAuthInfos([info]);
          esriId.getCredential(info.portalUrl + "/sharing", {oAuthPopupConfirmation: false}).then((event)=>{
              console.log(event.userId);
              this.loggedIn = true;
              this.username = event.userId;
              this.identityManagerJSON = esriId.toJSON();
            });
          esriId.checkSignInStatus(info.portalUrl + "/sharing")
            .then(()=> {
              console.log("signed in");
            })
            .catch(() => {
              console.log("not signed in");
            //   esriId.getCredential(info.portalUrl + "/sharing", {
            //     oAuthPopupConfirmation: false
            //   });
            });
        });
    },
    logout() {
        esriLoader.loadModules(["esri/identity/IdentityManager"]).then(([esriId]) => {
      console.log("logging out");
      esriId.initialize(this.identityManagerJSON);
      esriId.destroyCredentials();
      this.loggedIn = false;
    });
  }
  }
};
</script>
<style>
.middle {
    line-height: 30px;}
    </style>