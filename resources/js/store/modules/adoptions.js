import Api from "@/api/Api";

const state = {
  adoptions: [],
  adoption: {
    id: "",
    name: "",
    description: "",
    vaccinated: false,
    neutered: false,
    kind: "",
    size: "",
    age: 0,
    race: "",
    gender: "",
    primary_image: null,
    secondary_image: null,
    thirdary_image: null,
    published: false,
    shelter_id: false,
  },
  regions: [],
  genders: ['Αρσενικό', 'Θηλυκό'],
  kinds: ['Σκύλος', 'Γάτα', 'Άλλο'],
  categories: ['Υιοθεσία', 'Χάθηκε', 'Βρέθηκε'],
  sizes: ['Μικρό < 10 kg', 'Μεσσαίο < 25 kg', 'Μεγάλο > 25 kg'],
  loading: true,
  tableHeaders: [
    { text: "Id", value: "id" },
    { text: "Όνομα", value: "name" },
    { text: "Δημοσιευμένο", value: "published" },
    { text: "Επιλογές", value: "actions", sortable: false },
  ],
  rules: {
    name: [
      (v) => !!v || "Name is Required",
    ],
    description: [
      (v) => !!v || "Description is Required",
    ],
    kind: [
      (v) => !!v || "Kind is Required",
    ],
    gender: [
      (v) => !!v || "Gender is Required",
    ],
    race: [
      (v) => !!v || "Race is Required",
    ],
    age: [
      (v) => !!v || "Age is Required",
    ],
    size: [
      (v) => !!v || "Size  is Required",
    ],
  },
};

const getters = {
  adoptions(state) {
    return state.adoptions;
  },
  adoption(state) {
    return state.adoption;
  },
  regions(state) {
    return state.regions;
  },
  genders(state) {
    return state.genders;
  },
  categories(state) {
    return state.categories;
  },
  sizes(state) {
    return state.sizes;
  },
  kinds(state) {
    return state.kinds;
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
  async getAdoptions({ commit }, filters) {
    state.loading = true;
    let params = {};

    params.params = {
      page: filters.options.page,
      pageSize: filters.options.itemsPerPage,
      search: filters.filters.search,
    };

    return await Api.get("/adoptions", params).then((response) => {
      commit("setAdoptions", response.data);

      setTimeout(() => {
        state.loading = false;
      }, 600);
    });
  },
  async getAdoption({ commit }, id) {
    return new Promise(async (resolve, reject) => {
      await Api.get(`/adoptions/${id}`)
        .then((response) => {
          commit("setAdoption", response.data.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  async getAdoptionsFront({ commit }, filters) {
    state.loading = true;
    let params = {};

    params.params = {
      kind: filters.kind,
      minAge: filters.minAge,
      maxAge: filters.maxAge,
      size: filters.size,
      regions: filters.regions,
      genders: filters.genders,
      kinds: filters.kinds,
      sizes: filters.sizes,
      neutered: filters.neutered,
      search: filters.search,
    };

    return await Api.get("/visitor/adoptions", params).then((response) => {
      commit("setAdoptions", response.data);

      setTimeout(() => {
        state.loading = false;
      }, 600);
    });
  },
  async getAdoptionFront({ commit }, id) {
    return new Promise(async (resolve, reject) => {
      await Api.get(`/visitor/adoptions/${id}`)
        .then((response) => {
          commit("setAdoption", response.data.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  async getThreePetsForAdoption({ commit }) {
    state.loading = true;

    return await Api.get("/visitor/three-adoptions").then((response) => {
      commit("setAdoptions", response.data);

      setTimeout(() => {
        state.loading = false;
      }, 600);
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
  async deleteAdoption({ commit }, id) {
    return new Promise(async (resolve, reject) => {
      await Api.delete(`/adoptions/${id}`)
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
  setAdoptions(state, adoptions) {
    state.adoptions = adoptions;
  },
  setAdoption(state, adoption) {
    state.adoption = adoption;
  },
  setRegions(state, regions) {
    state.regions = regions;
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
