const state = {
    snackbar: {},
};

const actions = {
    setSnackBar({commit}, snackbar) {
        snackbar.showing = true;
        commit("SET_SNACKBAR", snackbar);
    },
    dismissSnackBar({commit}) {
        commit("SET_SNACKBAR", {showing: false});
    }
};

const mutations = {
    SET_SNACKBAR(state, snackbar) {
        state.snackbar = snackbar;
    },
};

export default {
    namespaced: true,

    state,
    actions,
    mutations,
};
