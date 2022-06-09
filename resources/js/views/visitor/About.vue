<template>
  <div>
    <main-header></main-header>
    <main-navigation></main-navigation>
    <about-media-with-text></about-media-with-text>
    <about-media-with-text-cat></about-media-with-text-cat>
    <about-faqs></about-faqs>
    <main-footer></main-footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import AboutMediaWithText from './components/about/AboutMediaWithText';
import AboutMediaWithTextCat from './components/about/AboutMediaWithTextCat';
import AboutFaqs from './components/about/AboutFaqs';
import MainNavigation from './components/MainNavigation';

export default {
  name: "About",
  components: {
    MainHeader,
    MainFooter,
    AboutMediaWithText,
    AboutMediaWithTextCat,
    AboutFaqs,
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
