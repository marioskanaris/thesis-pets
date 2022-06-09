import Api from "@/api/Api";

const state = {
  users: [],
  user: {
    id: "",
    name: "",
    role: "",
    email: "",
  },
  loading: true,
  tableHeaders: [
    { text: "Id", value: "id" },
    { text: "Όνομα", value: "name" },
    { text: "Ρόλος", value: "role" },
    { text: "Email", value: "email" },
    { text: "Επιλογές", value: "actions", sortable: false },
  ],
  rules: {
    name: [
      (v) => !!v || "Name is Required",
    ],
    email: [
      (v) => !!v || "Email is Required",
    ],
    phone: [
      (v) => !!v || "Phone is Required",
    ],
  },
};

const getters = {
  users(state) {
    return state.users;
  },
  user(state) {
    return state.user;
  },
  tableHeaders(state) {
    return state.tableHeaders;
  },
  validationRules(state) {
    return state.rules;
  },
  loading(state) {
    return state.loading;
  },
};

const actions = {
  async getUsers({ commit }, filters) {
    state.loading = true;
    let params = {};

    params.params = {
      page: filters.options.page,
      pageSize: filters.options.itemsPerPage,
      search: filters.filters.search,
    };

    return await Api.get("/users", params).then((response) => {
      commit("setUsers", response.data);

      setTimeout(() => {
        state.loading = false;
      }, 600);
    });
  },
  async getUser({ commit }, id) {
    return new Promise(async (resolve, reject) => {
      await Api.get(`/users/${id}`)
        .then((response) => {
          commit("setUser", response.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  async getProfile({ commit }) {
    return new Promise(async (resolve, reject) => {
      await Api.get('/profile')
        .then((response) => {
          commit("setUser", response.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
};

const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
  setUser(state, user) {
    state.user = user;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
};

export default {
  namespaced: true,

  state,
  getters,
  actions,
  mutations,
};
