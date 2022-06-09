<template>
  <div>
    <main-header></main-header>
    <main-navigation></main-navigation>
    <animal-shelter-info></animal-shelter-info>
    <animal-shelter-announcements></animal-shelter-announcements>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import AnimalShelterInfo from "./components/animalshelter/AnimalShelterInfo";
import AnimalShelterAnnouncements from "./components/animalshelter/AnimalShelterAnnouncements";
import MainNavigation from './components/MainNavigation';

export default {
  name: "AnimalShelter",
  components: {
    MainHeader,
    MainFooter,
    AnimalShelterInfo,
    AnimalShelterAnnouncements,
    MainNavigation,
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style scoped>
</style>
