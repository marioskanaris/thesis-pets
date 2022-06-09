import { sidebar } from "./data";

const state = {
  sidebar: sidebar,
};

const getters = {
  sidebar: (state) => {
    return state.sidebar;
  },
};

export default {
  namespaced: true,
  state,
  getters,
};
