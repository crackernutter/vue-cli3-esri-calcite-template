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
          "esri/identity/IdentityManager"
        ])
        .then(([OAuthInfo, esriId]) => {
          let info = new OAuthInfo({
            appId: "dzxNzduCQLIQNfGM",
            portalUrl: "https://gis-dev.eon.faa.gov/gis",
            popup: true,
            //authNamespace: "facilities",
            //popupCallbackUrl: `${this.baseUrl}/oauth-callback.html`
          });
          esriId.registerOAuthInfos([info]);
          esriId.getCredential(info.portalUrl + "/sharing", {oAuthPopupConfirmation: false}).then((event)=>{
              this.loggedIn = true;
              this.username = event.userId;
              this.identityManagerJSON = esriId.toJSON();
            });
          // esriId.checkSignInStatus(info.portalUrl + "/sharing")
          //   .then(()=> {
          //     console.log("signed in");
          //   })
          //   .catch(() => {
          //     console.log("not signed in");
          //   });
        });
    },
    logout() {
      esriLoader.loadModules(["esri/identity/IdentityManager"]).then(([esriId]) => {
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