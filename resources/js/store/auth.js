import Axios from "axios";
import Api from "../api/Api";

export default {
  namespaced: true,
  state: {
    authenticated: false,
    user: null,
    errors: [],
    rules: {
      name: [
        (v) => !!v || "Name is Required",
      ],
      email: [
        (v) => !!v || "Email is Required",
      ],
      password: [
        (v) => !!v || "Password is Required",
      ],
      password_confirmation: [
        (v) => !!v || "Password confirmation is Required",
      ]
    },
    validationRegisterShelterRules: {
      name: [
        (v) => !!v || "Name is Required",
      ],
      email: [
        (v) => !!v || "Email is Required",
      ],
      password: [
        (v) => !!v || "Password is Required",
      ],
      phone: [
        (v) => !!v || "Phone is Required"
      ],
      password_confirmation: [
        (v) => !!v || "Password confirmation is Required",
      ]
    }
  },
  getters: {
    authenticated(state) {
      return state.authenticated;
    },
    user(state) {
      return state.user;
    },
    errors(state) {
      return state.errors;
    },
    validationRules(state) {
      return state.rules;
    },
    validationRegisterShelterRules(state) {
      return state.validationRegisterShelterRules;
    },
  },
  mutations: {
    SET_AUTHENTICATED(state, value) {
      state.authenticated = value;
    },

    SET_USER(state, value) {
      state.user = value;
    },

    SET_ERRORS(state, value) {
      state.errors = value;
    },
  },

  actions: {
    async signIn({ dispatch, commit }, credentials) {
      await Axios.get("/sanctum/csrf-cookie");
      await Api.post("/login", credentials).catch((err) => {
        alert(err.response.data.errors.message);
        commit("SET_ERRORS", err.response.data.errors);
      });

      return dispatch("getUser");
    },
    async register({ dispatch, commit }, credentials) {
      await Axios.get("/sanctum/csrf-cookie");
      await Api.post("/register", credentials).then((response) => {
        return dispatch("signIn", credentials);
      }).catch((err) => {
        commit("SET_ERRORS", err.response.data.errors);
      });
    },
    async registerShelter({ dispatch, commit }, credentials) {
      await Axios.get("/sanctum/csrf-cookie");
      await Api.post("/register-shelter", credentials).then((response) => {
        alert("Account created!");
      }).catch((err) => {
        commit("SET_ERRORS", err.response.data.errors);
      });
    },
    async signOut({ commit, dispatch }) {
      return new Promise(async (resolve, reject) => {
        await Api.post("/logout", {
          newUI: true,
        })
          .then((response) => {
            commit("SET_AUTHENTICATED", false);
            commit("SET_USER", null);
            localStorage.removeItem("user");
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    getUser({ commit }) {
      return Api.get("/user")
        .then((response) => {
          commit("SET_AUTHENTICATED", true);
          commit("SET_USER", response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
        })
        .catch(() => {
          commit("SET_AUTHENTICATED", false);
          commit("SET_USER", null);
          localStorage.removeItem("user");
        });
    },
    checkSession({ commit }) {
      return new Promise(async (resolve, reject) => {
        await Api.get("/check-session")
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};
