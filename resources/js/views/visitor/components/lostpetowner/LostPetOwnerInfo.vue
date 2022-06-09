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
        >&nbsp;>&nbsp;<span class="color--brand">{{ foundPet.name }}</span>
      </div>
      <div class="cols--um col--100">
        <div class="col--50">
          <img :src="foundPet.primaryImageUrl" width="100%" />
        </div>
        <div class="col--50 ml--lg m-mt--md">
          <h2 class="color--brand">Αναζήτηση Ιδιοκτήτη χαμένου κατοικιδίου</h2>
          <hr />
          <div class="justify--start">
            <h3 class="color--accent font--20">
              {{ foundPet.name }}
            </h3>
            <p class="font--14">
              <span class="color--brand weight--700 mr-1">Περιγραφή:</span>
              {{ foundPet.description }}
            </p>
            <div class="col--100 cols--um font--16">
              <div class="col--50">
                <p>
                  <i class="fas fa-dog color--brand mr-2"></i
                  ><span class="color--brand weight--700">Είδος:</span>
                  {{ foundPet.kind }}
                </p>
                <p>
                  <i class="fas fa-venus-mars color--brand mr-2"></i
                  ><span class="color--brand weight--700">Φύλο:</span>
                  {{ foundPet.gender }}
                </p>
                <p>
                  <i class="fas fa-paw color--brand mr-2"></i
                  ><span class="color--brand weight--700">Μέγεθος:</span>
                  {{ foundPet.size }}
                </p>
                <p>
                  <i class="fas fa-location-dot color--brand mr-2"></i
                  ><span class="color--brand weight--700">Περιοχή:</span>
                  {{ foundPet.region }}
                </p>
              </div>
            </div>
          </div>
          <hr />
          <h3 class="mb--sm">Στοιχεία Επικοινωνίας</h3>
          <h4 v-if="foundPet.user" class="color--brand font--20 mb--sm">
            {{ foundPet.user.name }}
          </h4>
          <div v-if="foundPet.user" class="font--16">
            <a
              href="mailto:filizoikiilioupolis@gmail.com"
              class="cols justify--start"
            >
              <i class="fa fa-envelope color--brand mt--auto mb--auto mr-2"></i>
              {{ foundPet.user.email }}
            </a>

            <a href="tel:21010102102" class="cols justify--start mt--sm">
              <i
                class="fa fa-phone-alt color--brand mt--auto mb--auto mr-2"
              ></i>
              {{ foundPet.user.phone }}
            </a>
          </div>
        </div>
      </div>
      <h3 class="mt--xlg mb--md text--center">Εικόνες Κατοικιδίου</h3>
      <div class="col--100 cols">
        <div class="col--30">
          <img :src="foundPet.primaryImageUrl" width="100%" />
        </div>
        <div class="col--30">
          <img :src="foundPet.secondaryImageUrl" width="100%" />
        </div>
        <div class="col--30">
          <img :src="foundPet.thirdaryImageUrl" width="100%" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "LostPetOwnerInfo",
  data() {
    return {
      showfilters: false,
      customEffect: "",
      paginationNumbers: 1,
    };
  },
  methods: {
    ...mapActions({
      getFoundPetFront: "foundPets/getFoundPetFront",
    }),
  },
  computed: {
    ...mapGetters({
      foundPet: "foundPets/foundPet",
    }),
  },
  mounted() {
    this.getFoundPetFront(this.$route.params.id);
  },
};
</script>
<style scoped>
</style>