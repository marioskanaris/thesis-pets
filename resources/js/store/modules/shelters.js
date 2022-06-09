import Api from "@/api/Api";

const state = {
  shelters: [],
  shelter: {
    id: "",
    name: "",
    region: "",
    address: "",
    description: "",
    image: null,
    email: "",
    afm: "",
    phone: "",
  },
  pets: [],
  regions: [],
  loading: true,
  tableHeaders: [
    { text: "Id", value: "id" },
    { text: "όνομα", value: "name" },
    { text: "Περιφέρεια", value: "region" },
    { text: "Ενεργοποιημένη", value: "activated" },
    { text: "Επιλογές", value: "actions", sortable: false },
  ],
  rules: {
    name: [
      (v) => !!v || "Name is Required",
    ]
  },
};

const getters = {
  shelters(state) {
    return state.shelters;
  },
  shelter(state) {
    return state.shelter;
  },
  regions(state) {
    return state.regions;
  },
  pets(state) {
    return state.pets;
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
  async getShelters({ commit }, filters) {
    state.loading = true;
    let params = {};

    params.params = {
      page: filters.options.page,
      pageSize: filters.options.itemsPerPage,
      search: filters.filters.search,
    };

    return await Api.get("/shelters", params).then((response) => {
      commit("setShelters", response.data);

      setTimeout(() => {
        state.loading = false;
      }, 600);
    });
  },
  async getSheltersFront({ commit }, filters) {
    state.loading = true;
    let params = {};

    params.params = {
      page: filters.page,
      pageSize: filters.pageSize,
      search: filters.search,
      regions: filters.regions,
    };

    return await Api.get("/visitor/shelters", params).then((response) => {
      commit("setShelters", response.data);

      setTimeout(() => {
        state.loading = false;
      }, 600);
    });
  },
  async getShelter({ commit }, id) {
    return new Promise(async (resolve, reject) => {
      await Api.get(`/shelters/${id}`)
        .then((response) => {
          commit("setShelter", response.data.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  async getShelterFront({ commit }, id) {
    return new Promise(async (resolve, reject) => {
      await Api.get(`/visitor/shelters/${id}`)
        .then((response) => {
          commit("setShelter", response.data.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  async getPets({ commit }, id) {
    return new Promise(async (resolve, reject) => {
      await Api.get(`/visitor/shelters/${id}/pets`)
        .then((response) => {
          commit("setPets", response.data.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  async getRegions({ commit }) {
    state.loading = true;

    return await Api.get("/regions").then((response) => {
      commit("setRegions", response.data);

      setTimeout(() => {
        state.loading = false;
      }, 600);
    });
  },
  async deleteShelter({ commit }, id) {
    return new Promise(async (resolve, reject) => {
      await Api.delete(`/shelters/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
};

const mutations = {
  setShelters(state, shelters) {
    state.shelters = shelters;
  },
  setShelter(state, shelter) {
    state.shelter = shelter;
  },
  setRegions(state, regions) {
    state.regions = regions;
  },
  setPets(state, pets) {
    state.pets = pets;
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
