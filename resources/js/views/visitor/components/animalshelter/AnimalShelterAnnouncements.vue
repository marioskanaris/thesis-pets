<template>
  <section
    :class="{ filters_fullscreen: showfilters }"
    class="
      section-animal-shelter-announcements
      bg--grey
      pb--xlg
      pt--xlg
      m-p--md
    "
  >
    <div class="col--100 m-col--90 max--1300 um-mlr--auto">
      <h3 class="text--center font--30 mb--md">
        Μερικά από τα κατοικίδια που έχουμε
      </h3>
      <div class="cols--um cols--wrap">
        <div
          v-for="(pet, index) in pets"
          :key="index"
          class="col--20 m-col--100 animal-shelter-announcement p--sm um-m--sm"
          :class="{ el__hidden: showfilters }"
        >
          <a href="/post">
            <img :src="pet.primaryImageUrl" width="100%" />
          </a>
          <div class="font--20 mt--sm weight--700">
            <a href="/post">{{ pet.name }}</a>
          </div>
          <div class="font--12 pb--sm">
            <a href="/blog">{{ pet.region }}</a>
          </div>
          <p class="font--14 mb--sm">
            {{ pet.description }}
          </p>
          <div class="cols justify--start">
            <span class="color--brand font--16 weight--700">Είδος:</span>
            <span class="font--14 mt--auto ml-1">{{ pet.kind }}</span>
          </div>
          <div class="cols justify--start">
            <span class="color--brand font--16 weight--700">Φύλο:</span>
            <span class="font--14 mt--auto ml-1">{{ pet.gender }}</span>
          </div>
          <div class="cols justify--start mb--sm">
            <span class="color--brand font--16 weight--700">Ηλικία:</span>
            <span class="font--14 mt--auto ml-1">{{ pet.age }} Χρόνων</span>
          </div>
          <div class="mb--sm">
            <a
              class="font--14 secondary-button small-button"
              :href="'/' + pet.categorySlug + '/' + pet.id"
              >Πληροφορίες Κατοικιδίου</a
            >
          </div>
        </div>
      </div>
      <div class="mb--sm mt--lg text--center">
        <a class="font--14 secondary-button small-button" href="#"
          >Δες περισσότερα</a
        >
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AnimalShelterAnnouncements",
  data() {
    return {
      showfilters: false,
    };
  },
  methods: {
    ...mapActions({
      getPets: "shelters/getPets",
    }),
  },
  computed: {
    ...mapGetters({
      pets: "shelters/pets",
    }),
  },
  mounted() {
    this.getPets(this.$route.params.id);
  },
};
</script>

<style scoped>
.section-animal-shelter-announcements .animalshelter-main-image {
  background-size: cover;
  padding-bottom: 150px;
  padding-top: 150px;
  color: white;
}
.section-animal-shelter-announcements .animal-shelter-announcement {
  display: inline-block;
  border: solid 1px #52a35f54;
  border-radius: 15px;
}
@media (max-width: 767px) {
  .section-animal-shelter-announcements .animalshelter-main-image {
    padding-bottom: 50px;
    padding-top: 50px;
  }
}
</style>
