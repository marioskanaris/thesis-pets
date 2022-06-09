<template>
  <div>
    <main-header></main-header>
    <main-navigation></main-navigation>
    <lost-pet-filters></lost-pet-filters>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import LostPetFilters from './components/lostpet/LostPetFilters';
import MainNavigation from './components/MainNavigation';

export default {
  name: "LostPetCategory",
  components: {
    MainHeader,
    MainFooter,
    LostPetFilters,
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
