import Vue from "vue";
import App from "./App";
import router from "./router/router.js";
import store from "./store/index";
import Loading from "./components/lib/loading";
import CenterContainer from "./components/lib/center-container";

import "./assets/styles/shards-dashboards.1.1.0.min.css";
import "./assets/styles/extras.1.1.0.min.css";
import "./assets/styles/extras.1.1.0.min.css";
import "./assets/scripts/extras.1.1.0.min.js";
import "./assets/scripts/shards-dashboards.1.1.0.min.js";

Vue.config.productionTip = false;

Vue.component("loading", Loading);
Vue.component("center-container", CenterContainer);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
