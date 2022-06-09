<template>
  <section
    :class="{ filters_fullscreen: showfilters }"
    class="section-adoption-info bg--light pt--lg pb--lg"
  >
    <div class="section--boxed max--1300 mlr--auto justify--center">
      <div class="cols--um col--100">
        <div class="col--50">
          <img :src="adoption.primaryImageUrl" width="100%" />
        </div>
        <div class="col--50 ml--lg m-mt--md">
          <h2>{{ adoption.name }}</h2>
          <hr />
          <div class="justify--start">
            <p class="font--14">
              <span class="color--brand weight--700 mr-1">Περιγραφή:</span>
              {{ adoption.description }}
            </p>
            <div class="col--100 cols--um font--16">
              <div class="col--50">
                <p>
                  <i class="fas fa-dog color--brand mr-2"></i
                  ><span class="color--brand weight--700">Είδος:</span>
                  {{ adoption.kind }}
                </p>
                <p>
                  <i class="fas fa-venus-mars color--brand mr-2"></i
                  ><span class="color--brand weight--700">Φύλο:</span>
                  {{ adoption.gender }}
                </p>
                <p>
                  <i class="fas fa-paw color--brand mr-2"></i
                  ><span class="color--brand weight--700">Μέγεθος:</span>
                  {{ adoption.size }}
                </p>
                <p>
                  <i class="fas fa-cat color--brand mr-2"></i
                  ><span class="color--brand weight--700">Ηλικία:</span>
                  {{ adoption.age }}
                </p>
              </div>
              <div class="col--50">
                <p>
                  <i class="fas fa-syringe color--brand mr-2"></i
                  ><span class="color--brand weight--700">Εμβολιασμένο:</span>
                  {{ adoption.vaccinated }}
                </p>
                <p>
                  <i class="fas fa-briefcase-medical color--brand mr-2"></i
                  ><span class="color--brand weight--700">Στειρωμένο:</span>
                  {{ adoption.neutered }}
                </p>
              </div>
            </div>
          </div>
          <hr />
          <h3 class="mb--sm">Στοιχεία Επικοινωνίας</h3>
          <h4 class="color--brand font--20 mb--sm">Όνομα Φιλοζωικής</h4>
          <div class="font--16">
            <a
              href="mailto:filizoikiilioupolis@gmail.com"
              class="cols justify--start"
            >
              <i class="fa fa-envelope color--brand mt--auto mb--auto mr-2"></i>
              {{ adoption.shelter.email }}
            </a>

            <a href="tel:21010102102" class="cols justify--start mt--sm">
              <i
                class="fa fa-phone-alt color--brand mt--auto mb--auto mr-2"
              ></i>
              {{ adoption.shelter.phone }}
            </a>
          </div>
          <div class="mt--md">
            <a class="font--14 secondary-button small-button" href="#"
              >Επισκέψου τη φιλοζωική</a
            >
          </div>
        </div>
      </div>
      <h3 class="mt--xlg mb--md text--center">Εικόνες Κατοικιδίου</h3>
      <div class="col--100 cols">
        <div class="col--30">
          <img :src="adoption.primaryImageUrl" width="100%" />
        </div>
        <div class="col--30">
          <img :src="adoption.secondaryImageUrl" width="100%" />
        </div>
        <div class="col--30">
          <img :src="adoption.thirdaryImageUrl" width="100%" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AdoptionInfo",
  data() {
    return {
      awaitingSearch: false,
      customEffect: "",
      paginationNumbers: 1,
    };
  },
  methods: {
    ...mapActions({
      getAdoptionFront: "adoptions/getAdoptionFront",
    }),
  },
  computed: {
    ...mapGetters({
      adoption: "adoptions/adoption",
    }),
  },
  mounted() {
    this.getAdoptionFront(this.$route.params.id);
  },
};
</script>
<style scoped>
</style>