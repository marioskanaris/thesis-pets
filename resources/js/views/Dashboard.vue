<template>
  <v-app>
    <Header></Header>
    <!-- App's sidebar -->
    <sidebar></sidebar>

    <v-main>
      <v-container class="px-4 pb-10 fill-height" fluid>
        <v-row class="mb-auto">
          <v-col>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-snackbar
      v-model="snackbar.showing"
      timeout="3000"
      :color="snackbar.color"
      top
      @click.native="close"
    >
      <h4>{{ displayTitle(snackbar.color) }}</h4>
      <b>{{ snackbar.text }}</b>
    </v-snackbar>

    <Footer></Footer>
  </v-app>
</template>
<script>
import Sidebar from "Views/Sidebar";
import Header from "Views/Header";
import Footer from "Views/Footer";

import { mapActions, mapState } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapState("snackbar", ["snackbar"]),
  },
  methods: {
    ...mapActions({
      dismissSnackBar: "snackbar/dismissSnackBar",
    }),
    displayTitle(title) {
      return title ? title.charAt(0).toUpperCase() + title.slice(1) : "";
    },
    close() {
      this.dismissSnackBar();
    },
  },
  components: {
    Sidebar: Sidebar,
    Header: Header,
    Footer: Footer
  },
  mounted() {
    
  },
};
</script>
