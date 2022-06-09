<template>
  <v-overlay v-if="showOverlay" z-index="100">
    <v-progress-circular
      v-if="showLoading"
      indeterminate
      color="primary"
    ></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
  name: "ProgressCircular",
  props: ["showLoading", "showOverlay"],
};
</script>
