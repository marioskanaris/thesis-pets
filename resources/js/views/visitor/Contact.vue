<template>
  <div>
    <main-header></main-header>
    <main-navigation></main-navigation>
    <contact-form></contact-form>
    <main-footer></main-footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import ContactForm from './components/contact/ContactForm';
import MainNavigation from './components/MainNavigation';

export default {
  name: "Contact",
  components: {
    MainHeader,
    MainFooter,
    ContactForm,
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
