<template>
  <section
    :class="{ filters_fullscreen: showfilters }"
    class="section-adoption-info bg--light pt--lg pb--lg"
  >
    <div class="section--boxed max--1300 mlr--auto justify--center">
      <div class="m-mb--sm font--14 mb--sm">
        <a href="/home" class="color--dark">Αρχική σελίδα</a>&nbsp;>&nbsp;<a
          href="/lost-pets"
          class="color--dark"
          >Αναζήτηση Χαμένου Κατοικιδίου</a
        >&nbsp;>&nbsp;<span class="color--brand">{{ lostPet.name }}</span>
      </div>
      <div class="cols--um col--100">
        <div class="col--50">
          <img :src="lostPet.primaryImageUrl" width="100%" />
        </div>
        <div class="col--50 ml--lg m-mt--md">
          <h2 class="color--brand">Χαμένο Κατοικίδιο</h2>
          <hr />
          <div class="justify--start">
            <h3 class="color--accent font--20">{{ lostPet.name }}</h3>
            <p class="font--14">
              <span class="color--brand weight--700 mr-1">Περιγραφή:</span>
              {{ lostPet.description }}
            </p>
            <div class="col--100 cols--um font--16">
              <div class="col--50">
                <p>
                  <i class="fas fa-dog color--brand mr-2"></i
                  ><span class="color--brand weight--700">Είδος:</span>
                  {{ lostPet.kind }}
                </p>
                <p>
                  <i class="fas fa-venus-mars color--brand mr-2"></i
                  ><span class="color--brand weight--700">Φύλο:</span>
                  {{ lostPet.gender }}
                </p>
                <p>
                  <i class="fas fa-paw color--brand mr-2"></i
                  ><span class="color--brand weight--700">Μέγεθος:</span>
                  {{ lostPet.size }}
                </p>
                <p>
                  <i class="fas fa-location-dot color--brand mr-2"></i
                  ><span class="color--brand weight--700">Περιοχή:</span>
                  {{ lostPet.region }}
                </p>
              </div>
            </div>
          </div>
          <hr />
          <h3 class="mb--sm">Στοιχεία Επικοινωνίας</h3>
          <h4 v-if="lostPet.user" class="color--brand font--20 mb--sm">
            {{ lostPet.user.name }}
          </h4>
          <div class="font--16" v-if="lostPet.user">
            <a
              href="mailto:filizoikiilioupolis@gmail.com"
              class="cols justify--start"
            >
              <i class="fa fa-envelope color--brand mt--auto mb--auto mr-2"></i>
              {{ lostPet.user.email }}
            </a>

            <a href="tel:21010102102" class="cols justify--start mt--sm">
              <i
                class="fa fa-phone-alt color--brand mt--auto mb--auto mr-2"
              ></i>
              2109912345
            </a>
          </div>
        </div>
      </div>
      <h3 class="mt--xlg mb--md text--center">Εικόνες Κατοικιδίου</h3>
      <div class="col--100 cols">
        <div class="col--30">
          <img :src="lostPet.primaryImageUrl" width="100%" />
        </div>
        <div class="col--30">
          <img :src="lostPet.secondaryImageUrl" width="100%" />
        </div>
        <div class="col--30">
          <img :src="lostPet.thirdaryImageUrl" width="100%" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "LostPetInfo",
  data() {
    return {
      showfilters: false,
      customEffect: "",
      paginationNumbers: 1,
    };
  },
  methods: {
    ...mapActions({
      getLostPetFront: "lostPets/getLostPetFront",
    }),
  },
  computed: {
    ...mapGetters({
      lostPet: "lostPets/lostPet",
    }),
  },
  mounted() {
    this.getLostPetFront(this.$route.params.id);
  },
};
</script>
<style scoped>
</style>