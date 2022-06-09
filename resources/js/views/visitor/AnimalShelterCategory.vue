<template>
  <div>
    <main-header></main-header>
    <main-navigation></main-navigation>
    <animal-shelter-filters></animal-shelter-filters>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import AnimalShelterFilters from "./components/animalshelter/AnimalShelterFilters";
import MainNavigation from './components/MainNavigation';

export default {
  name: "AnimalShelter",
  components: {
    MainHeader,
    MainFooter,
    AnimalShelterFilters,
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
