import Api from "@/api/Api";

const state = {
  lostPets: [],
  lostPet: {
    id: "",
    name: "",
    description: "",
    region: "",
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
    shelter_id: false,
    published: false,
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
    ]
  },
};

const getters = {
  lostPets(state) {
    return state.lostPets;
  },
  lostPet(state) {
    return state.lostPet;
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
  async getLostPets({ commit }, filters) {
    state.loading = true;
    let params = {};

    params.params = {
      page: filters.options.page,
      pageSize: filters.options.itemsPerPage,
      search: filters.filters.search,
    };

    return await Api.get("/lost-pets", params).then((response) => {
      commit("setLostPets", response.data);

      setTimeout(() => {
        state.loading = false;
      }, 600);
    });
  },
  async getLostPet({ commit }, id) {
    return new Promise(async (resolve, reject) => {
      await Api.get(`/lost-pets/${id}`)
        .then((response) => {
          commit("setLostPet", response.data.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  async getLostPetsFront({ commit }, filters) {
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

    return await Api.get("/visitor/lost-pets", params).then((response) => {
      commit("setLostPets", response.data);

      setTimeout(() => {
        state.loading = false;
      }, 600);
    });
  },
  async getLostPetFront({ commit }, id) {
    return new Promise(async (resolve, reject) => {
      await Api.get(`/visitor/lost-pets/${id}`)
        .then((response) => {
          commit("setLostPet", response.data.data);
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
  async deleteLostPet({ commit }, id) {
    return new Promise(async (resolve, reject) => {
      await Api.delete(`/lost-pets/${id}`)
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
  setLostPets(state, lostPets) {
    state.lostPets = lostPets;
  },
  setLostPet(state, lostPet) {
    state.lostPet = lostPet;
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
