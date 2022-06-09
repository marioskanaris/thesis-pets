<template>
  <section :style="home_hero_media_overlay_image" id="section-home-hero-media-overlay" class="home_hero_media_overlay_image color--white pt--xlg pb--xlg"> 
    <div class="section--boxed max--1400 anim-elem pt--lg pb--lg">
      <div class="col--100 cols--um p--sm pt--md pb--md ">
        <div class="col--45 mtb--auto um-ml--md">
            <h2 class="font--45 weight--400 mb--sm">Υιοθέτησε τώρα έναν χνουδωτό φίλο.</h2>
            <div class="pt--md mt--sm cols--ul font--16">
              <div class="mb--lg">
                <a href="realmstudio.gr" class="p--sm mr--sm main-button"> 
                  Υιοθέτησε κατοικίδιο
                </a>
              </div>
              <div>
                <a href="realmstudio.gr" class="p--sm main-button"> 
                  Μάθε περισσότερα
                </a>
              </div>  
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomeHeroMediaOverlay",
  data() {
    return {
      home_hero_media_overlay_image: {backgroundImage: "url(images/homepage-hero-image.jpg)"}
    };
  },
    computed: {
    ...mapGetters({
      regions: "announcements/regions",
      shelters: "shelters/shelters",
    }),
  },
  methods: {
    myEventHandler(e) {
      if (width >= 767) {
        this.home_hero_media_overlay_image = {backgroundImage: "url(images/homepage-hero-image.jpg)"};
      }
      else {
        this.home_hero_media_overlay_image = {backgroundImage: "url(images/homepage-hero-image-mobile.jpg)"};
      }
    }
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  mounted() {
    const width = window.innerWidth;

    if (width >= 767) {
      this.home_hero_media_overlay_image = {backgroundImage: "url(images/homepage-hero-image.jpg)"};
    }
    else {
      this.home_hero_media_overlay_image = {backgroundImage: "url(images/homepage-hero-image-mobile.jpg)"};
    }
  }
};
</script>

<style scoped>

</style>
