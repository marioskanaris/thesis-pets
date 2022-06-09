<template>
  <div>
    <main-header></main-header>
    <main-navigation></main-navigation>
    <lost-pet-info></lost-pet-info>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import LostPetInfo from "./components/lostpet/LostPetInfo";
import MainNavigation from './components/MainNavigation';

export default {
  name: "LostPet",
  components: {
    MainHeader,
    MainFooter,
    LostPetInfo,
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
