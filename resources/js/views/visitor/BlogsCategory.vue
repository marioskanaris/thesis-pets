<template>
  <div>
    <main-header></main-header>
    <main-navigation></main-navigation>
    <blog-category></blog-category>
    <main-footer></main-footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import BlogCategory from './components/blog/BlogCategory.vue';
import MainNavigation from './components/MainNavigation';

export default {
  name: "BlogsCategory",
  components: {
    MainHeader,
    MainFooter,
    BlogCategory,
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
