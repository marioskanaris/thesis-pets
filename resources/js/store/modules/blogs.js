import Api from "@/api/Api";

const state = {
  blogs: [],
  blog: {
    id: "",
    title: "",
    image: "",
    posts: [],
  },
  latestPosts: [],
  loading: true,
  tableHeaders: [
    { text: "Id", value: "id" },
    { text: "Τίτλος", value: "title" },
    { text: "Άρθρα", value: "totalPosts" },
    { text: "Επιλογές", value: "actions", sortable: false },
  ],
  rules: {
    title: [
      (v) => !!v || "Title is Required",
    ]
  },
};

const getters = {
  blogs(state) {
    return state.blogs;
  },
  latestPosts(state) {
    return state.latestPosts;
  },
  blog(state) {
    return state.blog;
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
  async getBlogs({ commit }, filters) {
    state.loading = true;
    let params = {};

    params.params = {
      page: filters.options.page,
      pageSize: filters.options.itemsPerPage,
      search: filters.filters.search,
    };

    return await Api.get("/blogs", params).then((response) => {
      commit("setBlogs", response.data);

      setTimeout(() => {
        state.loading = false;
      }, 600);
    });
  },
  async getBlogsFront({ commit }, filters) {
    state.loading = true;
    let params = {};

    params.params = {
      search: filters.search,
    };

    return await Api.get("/visitor/blogs", params).then((response) => {
      commit("setBlogs", response.data);

      setTimeout(() => {
        state.loading = false;
      }, 600);
    });
  },
  async getBlog({ commit }, id) {
    return new Promise(async (resolve, reject) => {
      await Api.get(`/blogs/${id}`)
        .then((response) => {
          commit("setBlog", response.data.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  async getBlogFront({ commit }, id) {
    return new Promise(async (resolve, reject) => {
      await Api.get(`/visitor/blogs/${id}`)
        .then((response) => {
          commit("setBlog", response.data.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  async getLatestPosts({ commit }, id) {
    state.loading = true;

    return await Api.get(`/visitor/blog/${id}/latest-posts`).then((response) => {
      commit("setLatestPosts", response.data);

      setTimeout(() => {
        state.loading = false;
      }, 600);
    });
  },
  async deleteBlog({ commit }, id) {
    return new Promise(async (resolve, reject) => {
      await Api.delete(`/blogs/${id}`)
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
  setBlogs(state, blogs) {
    state.blogs = blogs;
  },
  setLatestPosts(state, latestPosts) {
    state.latestPosts = latestPosts;
  },
  setBlog(state, blog) {
    state.blog = blog;
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
