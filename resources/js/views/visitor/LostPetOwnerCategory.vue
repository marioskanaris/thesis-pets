<template>
  <div>
    <main-header></main-header>
    <main-navigation></main-navigation>
    <lost-pet-owner-filters></lost-pet-owner-filters>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import LostPetOwnerFilters from './components/lostpetowner/LostPetOwnerFilters';
import MainNavigation from './components/MainNavigation';

export default {
  name: "LostPetOwnerCategory",
  components: {
    MainHeader,
    MainFooter,
    LostPetOwnerFilters,
    MainNavigation,
  },
  data() {
    return {
      
    };
  },
  mounted() {},
};
</script>

<style scoped>

</style>
