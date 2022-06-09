<template>
  <div>
    <main-header></main-header>
    <main-navigation></main-navigation>
    <adoption-filters></adoption-filters>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import AdoptionFilters from "./components/adoption/AdoptionFilters";
import MainNavigation from './components/MainNavigation';

export default {
  name: "AdoptionCategory",
  components: {
    MainHeader,
    MainFooter,
    AdoptionFilters,
    MainNavigation,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style scoped>
</style>
