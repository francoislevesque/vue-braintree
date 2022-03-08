import Vue from "vue";
import Payment from "./Payment.vue";
import "./plugin";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Payment),
}).$mount("#app");
