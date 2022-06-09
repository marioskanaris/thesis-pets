<template>
  <section
    :class="{ filters_fullscreen: showfilters }"
    class="section-adoption-announcements bg--grey pb--xlg pt--xlg m-p--md"
  >
    <div class="col--100 m-col--90 max--1300 mlr--auto">
      <div class="cols--um">
        <h3 class="text--center font--30 ml--sm">
          Μερικά από τα κατοικίδια για υιοθεσία
        </h3>
        <div class="m-mt--md m-mb--md text--center">
          <a
            class="font--14 secondary-button small-button mr--sm"
            href="/adoptions"
            >Δες περισσότερα</a
          >
        </div>
      </div>

      <div class="cols--um cols--wrap">
        <div
          v-for="(announcement, index) in announcements.data"
          :key="index"
          class="col--30 m-col--100 animal-shelter-announcement p--sm um-m--sm"
          :class="{ el__hidden: showfilters }"
        >
          <a href="/post">
            <img :src="announcement.primaryImageUrl" width="100%" />
          </a>
          <div class="font--20 mt--sm weight--700">
            <a href="/post">{{ announcement.name }}</a>
          </div>
          <div class="font--12 pb--sm">
            <a href="/blog">{{ announcement.region }}</a>
          </div>
          <p class="font--14 mb--sm">
            {{ announcement.description }}
          </p>
          <div class="cols justify--start">
            <span class="color--brand font--16 weight--700">Είδος:</span>
            <span class="font--14 mt--auto ml-1">{{ announcement.kind }}</span>
          </div>
          <div class="cols justify--start">
            <span class="color--brand font--16 weight--700">Φύλο:</span>
            <span class="font--14 mt--auto ml-1">{{
              announcement.gender
            }}</span>
          </div>
          <div class="cols justify--start mb--sm">
            <span class="color--brand font--16 weight--700">Ηλικία:</span>
            <span class="font--14 mt--auto ml-1"
              >{{ announcement.age }} Χρόνων</span
            >
          </div>
          <div class="mb--sm">
            <a
              class="font--14 secondary-button small-button"
              :href="'/adoptions/' + announcement.id"
              >Πληροφορίες Κατοικιδίου</a
            >
          </div>
        </div>
      </div>
      <div class="mb--sm mt--lg text--center"></div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AdoptionAnnouncements",
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      getThreePetsForAdoption: "announcements/getThreePetsForAdoption",
    }),
  },
  computed: {
    ...mapGetters({
      announcements: "announcements/announcements",
    }),
  },
  mounted() {
    this.getThreePetsForAdoption();
  },
};
</script>

<style scoped>
.section-adoption-announcements .animalshelter-main-image {
  background-size: cover;
  padding-bottom: 150px;
  padding-top: 150px;
  color: white;
}
.section-adoption-announcements .animal-shelter-announcement {
  display: inline-block;
  border: solid 1px #52a35f54;
  border-radius: 15px;
}
@media (max-width: 767px) {
  .section-adoption-announcements .animalshelter-main-image {
    padding-bottom: 50px;
    padding-top: 50px;
  }
}
</style>
