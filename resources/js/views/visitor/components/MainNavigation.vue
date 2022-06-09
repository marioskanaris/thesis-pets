<template>
  <section class="section_navigation bg--light">
    <!-- Mobile navigation menu -->
    <div class="section--boxed max--1200 anim-elem">
      <div class="col--100 cols p--sm text--center">
        <div class="col--25 font--35 cols mt--auto mb--auto">
            <i @click="show_burger_menu = !show_burger_menu" class="fas fa-bars color--brand mr--auto"></i>
        </div>
        <div class="col--45">
          <a href="/" class="font--25 color--brand clickable logo--icon">
            <router-link to="/">
              <logo></logo>
            </router-link>
          </a>
        </div>
        <div class="col--25 font--35 cols mt--auto mb--auto">
          <a class="ml--auto" href="/admin/home">
            <i class="fa-solid fa-user color--brand"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Mobile burger menu -->
    <div :class="{ display_burger_menu: show_burger_menu }" class="section_burger_menu bg--white">
      <div class="cols logo--icon">
        <logo></logo>
        <a @click="show_burger_menu = !show_burger_menu" class="font--25 color--brand clickable mt--auto">
          <i class="fas fa-times clickable font--35"></i>
        </a>
      </div>
      <hr>
      <h3 class="color--accent font--25 mb-3">Υιοθεσία</h3>
      <a class="cols justify--start ml-3 color--brand" href="/adoptions">
        <i class="fas fa-dog el__block mr-2 font--30"></i>
        <span class="font--25">Σκύλου</span>
      </a>
      <a class="cols justify--start ml-3 color--brand" href="/adoptions">
        <i class="fas fa-cat el__block mr-2 font--30"></i>
        <span class="font--25">Γάτας</span>
      </a>
      
      <hr>
      <h3 class="color--accent font--25 mb-3">Ψάχνω για</h3>
      <a class="cols justify--start ml-3 color--brand" href="/lost-pets">
        <i class="fas fa-paw el__block mr-2 font--30"></i>
        <span class="font--25">Χαμένο κατοικίδιο</span>
      </a>
      <a class="cols justify--start ml-3 color--brand" href="/found-pets">
        <i class="fas fa-tag el__block mr-2 font--30"></i>
        <span class="font--25">Ιδιοκτήτη κατοικιδίου</span>
      </a>
      <hr>
      <a class="cols justify--start ml-3 color--brand" href="/animal-shelters">
        <i class="fas fa-hand-holding-heart el__block mr-2 font--30"></i>
        <span class="font--25">Φιλοζωικές</span>
      </a>
      <hr>
      <a class="cols justify--start ml-3 color--brand" href="/blogs">
        <i class="far fa-paste el__block mr-2 font--30"></i>
        <span class="font--25">Blog</span>
      </a>
      <hr>
      <a class="cols justify--start ml-3 color--brand" href="/about">
        <i class="fas fa-users el__block mr-2 font--30"></i>
        <span class="font--25">Σχετικά με εμάς</span>
      </a>
      <hr>
      <a class="cols justify--start ml-3 color--brand" href="/admin/home">
        <i class="fas fa-user el__block mr-2 font--30"></i>
        <span class="font--25">Λογαριασμός</span>
      </a>
    </div>

    <!-- Mobile Menu bottom bar -->
    <div class="section_mobile_bar col--100 cols justify--center p--fixed bg--white pt--sm pb--sm">
      <div class="col--30 text--center color--brand">
        <a href="/">
          <i class="fas fa-home el__block font--35"></i>
          <span class="font--16">Αρχική</span>
        </a>
      </div>
      <div class="col--30 text--center color--brand">
        <a href="/adoptions">
          <i class="fas fa-dog el__block font--35"></i>
          <span class="font--16">Υιοθεσία</span>
        </a>
      </div>
      <div class="col--30 text--center color--brand">
        <a href="/animal-shelters">
          <i class="fas fa-hand-holding-heart el__block font--35"></i>
          <span class="font--16">Φιλοζωικές</span>
        </a>
      </div>

    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Logo from "./icons/Logo";

export default {
  name: "MainNavigation",
  mounted() {
  },
  components: {
    Logo,
  },
  data() {
    return {
      menu: false,
      show_burger_menu: false,
    };
  },
};
</script>

<style scoped>

@media (min-width: 1000px) {
  .section_navigation,.section_mobile_bar,.section_burger_menu {
    display: none;
  }
}
.section_mobile_bar {
  z-index: 99;
  bottom: 0;
}
.section_burger_menu.display_burger_menu {
  transform: translateX(0%);
  transition: var(--trans-600);
}
.section_burger_menu {
  position: fixed;
  top: 0;
  background: white;
  height: 100%;
  width: 100%;
  padding: 30px;
  z-index: 9999;
  overflow: auto;
  transform: translateX(-101%);
  transition: var(--trans-600);
  display: flex;
  flex-direction: column;
}

</style>
