<template>
  <section class="section-footer bg--accent color--light pb--sm pt--sm">
    <div class="section--boxed max--1400 anim-elem">
      <div class="col--100 cols--um p--sm font--12">
        <div class="col--35">
          <a href="#">
            <logo></logo>
          </a>
          <div class="pb--sm pt--sm">
            Το petfind παρέχει ότι καλύτερο για την αναζήτηση κατοικίδιών από
            της καλύτερες φιλοζωικές με σκοπό κάθε χνουδωτός μας φίλος να βρει
            ένα ζεστό σπίτι.
          </div>
          <div class="social-media-icons">
            <a href="#">
              <i class="fa-brands fa-facebook-f fa-lg"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-instagram fa-lg"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-tiktok fa-lg"></i>
            </a>
          </div>
        </div>
        <div class="col--55" style="display: inline-flex">
          <div class="col--50">
            <h3 class="font--30">Βασικές σελίδες</h3>
            <div class="font--14">
              <ul>
                <li><a href="/adoptions"> Υιοθεσία</a></li>
                <li>
                  <a href="/lost-pets"> Αναζήτηση Χαμένου κατοικιδίου</a>
                </li>
                <li>
                  <a href="/found-pets"
                    >Αναζήτηση Ιδιοκτήτη χαμένου κατοικιδίου</a
                  >
                </li>
                <li><a href="/animal-shelters"> Φιλοζωικές</a></li>
              </ul>
            </div>
          </div>
          <div class="col--50">
            <h3 class="font--30">Πληροφορίες</h3>
            <div class="font--14">
              <ul>
                <li><a href="/about"> Σχετικά με εμάς</a></li>
                <li><a href="/blogs-category"> Blog</a></li>
                <li>
                  <a v-if="user" href="/admin/home"> Λογαριασμός</a>
                  <a v-else href="/login"> Είσοδος Λογαριασμού</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col--100 cols--um p--sm font--12">
        <div class="col--40">
          <div class="subfooter-copyright-text pb--sm max--600">
            Το petfind παρέχει ότι καλύτερο για την αναζήτηση κατοικίδιών από
            της καλύτερες φιλοζωικές με σκοπό κάθε χνουδωτός μας φίλος να βρει
            ένα ζεστό σπίτι.
          </div>
          <div class="subfooter-links-menu">
            <a href="/contact">Επικοινωνία</a>
          </div>
        </div>
        <div class="col--60">
          <div class="subfooter-creator text--center m-text--left">
            Δημιουργήθηκε από τον
            <a
              target="_blank"
              href="https://www.linkedin.com/in/marios-kanaris-3023121a4/"
              >Μάριο Κανάρη</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Logo from "./icons/Logo";

export default {
  name: "MainFooter",
  components: {
    Logo,
  },
  mounted() {},
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
};
</script>

<style scoped>
/* Footer starts here */
.section-footer .subfooter-copyright-text {
  line-height: 1;
}
.section-footer .subfooter-links-menu a {
  margin-right: 10px;
}
.section-footer .subfooter-creator a {
  text-decoration: none;
}
/* Footer ends here */
</style>
