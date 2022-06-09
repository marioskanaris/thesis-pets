import Vue from "vue";
import Vuex from "vuex";
import snackbar from "./modules/snackbar";
import users from "./modules/users";
import blogs from "./modules/blogs";
import posts from "./modules/posts";
import shelters from "./modules/shelters";
import adoptions from "./modules/adoptions";
import lostPets from "./modules/lostPets";
import foundPets from "./modules/foundPets";
import auth from "./auth";
import sidebar from "./sidebar/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    snackbar,
    sidebar,
    users,
    blogs,
    posts,
    shelters,
    adoptions,
    lostPets,
    foundPets,
  },
  strict: false,
});
