<template>
  <section
    class="section_header bg--light"
    v-bind:class="{ section_header_scroll: scrollPosition > 43 }"
  >
    <div class="section--boxed max--1200 anim-elem">
      <div
        class="col--100 cols--um p--sm font--12 text--center"
        v-bind:class="{ 'color--light': scrollPosition > 43 }"
      >
        <div class="col--35 cols--um mt--auto mb--auto">
          <div class="col--50">
            <a class="font--18" href="/adoptions">Υιοθεσία </a>
          </div>
          <div class="col--50 dropdown">
            <a class="font--18" href="#"
              >Αναζήτηση
              <i
                class="
                  fa-solid fa-angle-up
                  font--18
                  clickable
                  mt--auto
                  mb--auto
                "
              ></i>
            </a>
            <div class="menu-dropdown-content p--sm text--left">
              <a class="font--14" href="/lost-pets">Χαμένου κατοικιδίου</a>
              <hr />
              <a class="font--14" href="/found-pets"
                >Ιδιοκτήτη χαμένου κατοικιδίου</a
              >
            </div>
          </div>
          <div class="col--50">
            <a class="font--18" href="/animal-shelters">Φιλοζωικές</a>
          </div>
        </div>
        <div class="col--20">
          <a href="/" class="font--25 color--brand clickable logo--icon">
            <router-link to="/">
              <logo></logo>
            </router-link>
          </a>
        </div>
        <div class="col--45 cols--um mt--auto mb--auto">
          <div class="col--10">
            <router-link to="/blogs" class="font--18 clickable">
              Blog</router-link
            >
          </div>
          <div class="col--40">
            <router-link to="/about" class="font--18 clickable">
              Σχετικά με εμάς</router-link
            >
          </div>
          <div class="col--25">
            <router-link to="/contact" class="font--18 clickable"
              >Επικοινωνία</router-link
            >
          </div>
          <div class="col--25">
            <a v-if="user" class="font--18">
              <div class="col--50 dropdown">
                <a class="font--18 cols" href="/admin/home/">
                  <i
                    class="fa-solid fa-user color--brand"
                    style="margin-right: 5px"
                  ></i>
                  <a href="/admin/home">
                    {{ user.name }}
                  </a>
                  <i
                    class="
                      fa-solid fa-angle-up
                      font--18
                      clickable
                      ml-1
                      mt--auto
                      mb--auto
                    "
                  ></i>
                </a>
                <div
                  class="menu-dropdown-content menu-dropdown-logout text--left"
                >
                  <v-list-item class="font--14" @click="logout()"
                    >Αποσύνδεση</v-list-item
                  >
                </div>
              </div>
            </a>

            <a v-else class="font--18" href="/login"
              ><i
                class="fa-solid fa-user color--brand"
                style="margin-right: 5px"
              ></i
              >Είσοδος</a
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="top_arrow"
      v-bind:class="{ top_arrow_scroll: scrollPosition > 43 }"
    >
      <a href="#">
        <lottie-player
          src="https://assets8.lottiefiles.com/packages/lf20_HM8G1P.json"
          background="transparent"
          speed="0.5"
          style="width: 60px; height: 60px"
          loop
          autoplay
        ></lottie-player>
      </a>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Logo from "./icons/Logo";

export default {
  name: "MainHeader",
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  components: {
    Logo,
  },
  data() {
    return {
      scrollPosition: null,
      user: JSON.parse(localStorage.getItem("user")),
      menu: false,
    };
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    logout() {
      this.menu = false;
      this.signOut().finally(() => {
        this.$router.push("/login");
      });
    },
    ...mapActions({
      signOut: "auth/signOut",
    }),
  },
};
</script>

<style scoped>
.section_header {
  box-shadow: 0px 0 7px #538152;
  z-index: 2;
}

@media (max-width: 1000px) {
  .section_header {
    display: none;
  }
}
/* Arrow back in top */
.top_arrow {
  display: none;
}
.top_arrow_scroll {
  display: inherit;
  position: fixed;
  right: 2%;
  bottom: 5%;
  transform: rotate(180deg);
  z-index: 99;
}

.section_header_scroll {
  transition: top 1s linear;
  position: fixed;
  box-shadow: 0px 0 7px #538152;
  background-color: var(--color-brand);
  z-index: 9;
}

/* Menu Dropdown */
.dropdown {
  position: relative;
  display: inline-block;
}

.menu-dropdown-content {
  display: none;
  position: absolute;
  z-index: 1;
  background: white;
  box-shadow: 0px 0 3px #538152;
  color: var(--color-accent);
  border-radius: 0px 0px 10px 10px;
  min-width: 275px;
}
.menu-dropdown-content.menu-dropdown-logout {
  min-width: auto;
}

.section_header_scroll .menu-dropdown-content {
  background-color: var(--color-brand);
  color: white;
}

.menu-dropdown-content a {
  text-decoration: none;
  display: block;
}

.dropdown:hover .menu-dropdown-content {
  display: block;
}
.dropdown .fa-angle-up {
  transform: rotate(180deg);
  transition: all 0.5s ease-in-out;
}

.dropdown:hover .fa-angle-up {
  transform: rotate(0deg);
  transition: all 0.5s ease-in-out;
}
</style>
