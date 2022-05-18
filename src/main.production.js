const urlCdnStyle = [
    "https://fonts.googleapis.com/css?family=Material+Icons",
    "https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.2.45/css/materialdesignicons.min.css",
    "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
]

// adding CDN css font url
urlCdnStyle.forEach(CdnStyleUrl => {
    console.log("add style cdn url : ", CdnStyleUrl)
    let styleTag = document.createElement("link");
    styleTag.href = CdnStyleUrl;
    styleTag.rel = "stylesheet"
    document.getElementsByTagName('head')[0].appendChild(styleTag);
})


import Vue from "vue";
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);
let vuetify = new Vuetify({});

import vueCustomElement from "vue-custom-element";

Vue.use(vueCustomElement);

import sedooCounter from "./components/sedoo-counter"
import sedooDashboard from "./components/sedoo-dashboard"
import sedooFairDashboard from "./components/sedoo-fair-dashboard"
import sedooDoiDashboard from "./components/sedoo-doi-dashboard"
import sedooPermalinksDashboard from "./components/sedoo-permalinks-dashboard"
import sedooDoiState from "./components/sedoo-doi-state"
import sedooPermalinksState from "./components/sedoo-permalinks-state"

sedooCounter.vuetify = vuetify;
sedooDashboard.vuetify = vuetify;
sedooFairDashboard.vuetify = vuetify;
sedooDoiDashboard.vuetify = vuetify;
sedooDoiState.vuetify = vuetify;
sedooPermalinksDashboard.vuetify = vuetify;
sedooPermalinksState.vuetify = vuetify;

Vue.config.productionTip = false;



import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);


Vue.customElement(sedooCounter.name, sedooCounter)
Vue.customElement(sedooDashboard.name, sedooDashboard)
Vue.customElement(sedooFairDashboard.name, sedooFairDashboard)
Vue.customElement(sedooDoiDashboard.name, sedooDoiDashboard)
Vue.customElement(sedooDoiState.name, sedooDoiState)
Vue.customElement(sedooPermalinksState.name, sedooPermalinksState)
Vue.customElement(sedooPermalinksDashboard.name, sedooPermalinksDashboard)

