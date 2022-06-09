<template>
  <div>
    <main-header></main-header>
    <main-navigation></main-navigation>
    <blog-posts></blog-posts>
    <main-footer></main-footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import BlogPosts from "./components/blog/BlogPosts";
import MainNavigation from './components/MainNavigation';

export default {
  name: "Blog",
  components: {
    MainHeader,
    MainFooter,
    BlogPosts,
    MainNavigation,
  },
};
</script>
