import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";
import Vue from "vue";
import store from "./store";
import router from "./router";
import App from "./App.vue";
import { toast } from "@/helpers/toast";
import GlobalComponents from "./globalComponents";

Vue.directive("can", function (el, binding, vnode) {
  if (!binding.arg) return;
  if (binding.arg === 'delete') {
    if (process.env.MIX_SUPER_ADMINS.indexOf(UserEmail) === -1) {
      el.classList.add("no-perm");
    }
  }
});

Vue.use(Vuetify);
Vue.use(GlobalComponents);
Vue.prototype.$toast = toast;

new Vue({
  store,
  router,
  vuetify: new Vuetify({
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: "#52A35F",
          secondary: "#1c9930",
          accent: "#82B1FF",
          error: "#b8231c",
          info: "#2196F3",
          success: "#158a32",
          warning: "#FFC107",
        },
        light: {
          primary: "#52A35F",
        },
      },
    },
  }),
  render: (h) => h(App),
  components: { App },
}).$mount("#app");
