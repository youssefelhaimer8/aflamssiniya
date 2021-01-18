import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import "./plugins/axios";
import "./plugins/meta";
import Ads from "vue-google-adsense";
import VueAnalytics from "vue-analytics";
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";
import Notifications from "vue-notification";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import VEmojiPicker from "v-emoji-picker";
import VueTimeago from "vue-timeago";

Vue.use(VueTimeago, {
  name: "timeago", // Component name, `timeago` by default
  locale: "ar", // Default locale
  // We use `date-fns` under the hood
  // So you can use all locales from it
  locales: {
    en: require("date-fns/locale/en"),
    ar: require("date-fns/locale/ar"),
  },
});
Vue.use(VEmojiPicker);
Vue.use(Loading);
Vue.use(Notifications);
Vue.use(require("vue-script2"));
Vue.use(Ads.Adsense);
Vue.use(Ads.InArticleAdsense);
Vue.use(Ads.InFeedAdsense);
Vue.use(VueAnalytics, {
  id: "UA-77738190-10",
});
Vue.use(VuePlyr, {
  plyr: {},
});
Vue.config.productionTip = false;
Vue.prototype.$theme = vuetify.framework.theme;
new Vue({
  router,
  store,

  vuetify,
  render: (h) => h(App),
}).$mount("#app");
