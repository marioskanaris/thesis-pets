<template>
  <v-app-bar class="ng-toolbar" app fixed>
    <div class="d-custom-flex align-items-center navbar-left">
      <div class="site-logo-wrap d-custom-flex ml-0 align-items-center">
        <h2 class="text-capitalize ml-5">{{ this.$route.meta.title }}</h2>
      </div>
    </div>
    <div class="navbar-right">
      <v-btn icon large @click="toggleFullScreen" class="full-screen ma-0">
        <v-icon color="#9e9e9e">mdi-fullscreen</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import screenfull from "screenfull";

export default {
  name: "Header",
  methods: {
    toggleFullScreen() {
      screenfull.toggle();
    },
  },
};
</script>
