<template>
  <div id="app">
    <router-view> </router-view>
    <confirm ref="confirmation"></confirm>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$root.$confirmation = this.$refs.confirmation;
  },
};
</script>
