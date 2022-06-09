<template>
  <div>
    <main-header></main-header>
    <main-navigation></main-navigation>
    <home-hero-media-overlay></home-hero-media-overlay>
    <home-media-with-text-about></home-media-with-text-about>
    <home-media-with-text-dog></home-media-with-text-dog>
    <home-medias-with-overlay></home-medias-with-overlay>
    <home-media-with-text-cat></home-media-with-text-cat>
    <home-blog-posts></home-blog-posts>
    <main-footer></main-footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import HomeMediaWithTextAbout from './components/home/HomeMediaWithTextAbout';
import HomeHeroMediaOverlay from './components/home/HomeHeroMediaOverlay';
import HomeMediaWithTextDog from './components/home/HomeMediaWithTextDog';
import HomeMediaWithTextCat from './components/home/HomeMediaWithTextCat';
import HomeMediasWithOverlay from './components/home/HomeMediasWithOverlay';
import HomeBlogPosts from './components/home/HomeBlogPosts';
import MainFooter from './components/MainFooter';
import MainHeader from './components/MainHeader';
import MainNavigation from './components/MainNavigation';


export default {
  name: "Home",
  components: {
    MainHeader,
    MainNavigation,
    MainFooter,
    HomeMediaWithTextAbout,
    HomeHeroMediaOverlay,
    HomeMediaWithTextDog,
    HomeMediaWithTextCat,
    HomeMediasWithOverlay,
    HomeBlogPosts
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
