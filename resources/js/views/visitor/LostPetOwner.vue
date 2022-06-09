<template>
  <div>
    <main-header></main-header>
    <main-navigation></main-navigation>
    <lost-pet-owner-info></lost-pet-owner-info>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import LostPetOwnerInfo from "./components/lostpetowner/LostPetOwnerInfo";
import MainNavigation from './components/MainNavigation';

export default {
  name: "LostPetOwner",
  components: {
    MainHeader,
    MainFooter,
    LostPetOwnerInfo,
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
