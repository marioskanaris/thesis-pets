<template>
  <v-footer class="footer d-flex flex-row-reverse">
    <div>
      <v-btn @click="toggleMode()" elevation="0" class="mr-3"
        ><span class="overline">{{ this.modeText }} Mode</span></v-btn
      >
      <span class="ml-auto overline">Pets &copy;2022</span>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      modeText: "Light",
      isDark: null,
    };
  },
  mounted() {
    this.onRefresh();
  },
  methods: {
    toggleMode() {
      this.isDark = !this.isDark;
      localStorage.setItem("isDark", this.isDark);
      this.modeText = this.isDark ? "Dark" : "Light";
    },
    onRefresh() {
      let onRefreshValue = JSON.parse(localStorage.getItem("isDark"));
      if (onRefreshValue) {
        this.isDark = onRefreshValue;
      } else {
        this.isDark = false;
      }
    },
  },
  watch: {
    isDark: {
      handler() {
        if (this.isDark == true) {
          this.$vuetify.theme.dark = true;
        } else {
          this.$vuetify.theme.dark = false;
        }
      },
    },
  },
};
</script>
