<template>
  <v-app>
    <progress-circular
      v-bind:show-loading="isLoading"
      v-bind:show-overlay="isLoading"
    />
    <v-container class="elevation-15">
      Διαχειριστικό
    </v-container>
  </v-app>
</template>

<script>
import Api from "@/api/Api";
import ProgressCircular from "Components/helpers/ProgressCircular";

export default {
  data() {
    return {
      stats: null,
      isLoading: false,
    };
  },
  components: {
    ProgressCircular
  },
  methods: {
    async getStats() {
      this.isLoading = true;
      await Api.get("/stats")
        .then((response) => {
          this.stats = response.data;
        })
        .catch((err) => {
          console.err;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.getStats();
  },
};
</script>
