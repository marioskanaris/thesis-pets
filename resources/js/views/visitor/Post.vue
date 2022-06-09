<template>
  <div>
    <main-header></main-header>
    <main-navigation></main-navigation>
    <article-post></article-post>
    <main-footer></main-footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import ArticlePost from './components/post/ArticlePost';
import MainNavigation from './components/MainNavigation';

export default {
  name: "Post",
  components: {
    MainHeader,
    MainFooter,
    ArticlePost,
    MainNavigation
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
