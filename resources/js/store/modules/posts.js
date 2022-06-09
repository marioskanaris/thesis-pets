import Api from "@/api/Api";

const state = {
  posts: [],
  post: {
    id: 0,
    title: "",
    description: "",
    image: "",
    published: false,
    blog_id: 0,
  },
  latestPosts: [],
  loading: true,
  tableHeaders: [
    { text: "Id", value: "id" },
    { text: "Τίτλος", value: "title" },
    { text: "Δημοσιευμένο", value: "published" },
    { text: "Blog", value: "blog" },
    { text: "Επιλογές", value: "actions", sortable: false },
  ],
  rules: {
    title: [
      (v) => !!v || "Title is Required",
    ],
    description: [
      (v) => !!v || "Description is Required",
    ],
    image: [
      (v) => !!v || "Image is Required",
    ],
    blog: [
      (v) => !!v || "Blog is Required",
    ],
  },
};

const getters = {
  posts(state) {
    return state.posts;
  },
  post(state) {
    return state.post;
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
  async getPosts({ commit }, filters) {
    state.loading = true;
    let params = {};

    params.params = {
      page: filters.options.page,
      pageSize: filters.options.itemsPerPage,
      search: filters.filters.search,
    };

    return await Api.get("/posts", params).then((response) => {
      commit("setPosts", response.data);

      setTimeout(() => {
        state.loading = false;
      }, 600);
    });
  },
  async getThreeLatestPosts({ commit }) {
    state.loading = true;

    return await Api.get('/visitor/posts/three-latest').then((response) => {
      commit("setPosts", response.data);

      setTimeout(() => {
        state.loading = false;
      }, 600);
    });
  },
  async getPost({ commit }, id) {
    return new Promise(async (resolve, reject) => {
      await Api.get(`/posts/${id}`)
        .then((response) => {
          commit("setPost", response.data.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  async getVisitorPost({ commit }, id) {
    return new Promise(async (resolve, reject) => {
      await Api.get(`/visitor/posts/${id}`)
        .then((response) => {
          commit("setPost", response.data.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  async deletePost({ commit }, id) {
    return new Promise(async (resolve, reject) => {
      await Api.delete(`/posts/${id}`)
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
  setPosts(state, posts) {
    state.posts = posts;
  },
  setPost(state, post) {
    state.post = post;
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
