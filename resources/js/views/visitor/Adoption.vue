<template>
  <div>
    <main-header></main-header>
    <main-navigation></main-navigation>
    <adoption-info></adoption-info>
    <adoption-announcements></adoption-announcements>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import AdoptionInfo from "./components/adoption/AdoptionInfo";
import AdoptionAnnouncements from "./components/adoption/AdoptionAnnouncements";
import MainNavigation from './components/MainNavigation';

export default {
  name: "Adoption",
  components: {
    MainHeader,
    MainFooter,
    AdoptionInfo,
    AdoptionAnnouncements,
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
