import Vue from "vue";
import App from "./App";
import router from "./router/router";
import store from "./store";
import Loading from "./components/lib/loading";
import CenterContainer from "./components/lib/center-container";

import "../src/assets/styles/shards-dashboards.1.1.0.min.css";
import "../src/assets/styles/extras.1.1.0.min.css";
import "../src/assets/styles/extras.1.1.0.min.css";
import "../src/assets/scripts/extras.1.1.0.min.js";
import "../src/assets/scripts/shards-dashboards.1.1.0.min.js";
import "../src/assets/scripts/app/app-components-overview.1.1.0.js";

Vue.config.productionTip = false;

Vue.component("loading", Loading);
Vue.component("center-container", CenterContainer);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
