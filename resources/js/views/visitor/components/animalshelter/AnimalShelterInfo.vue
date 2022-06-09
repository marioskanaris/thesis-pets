<template>
  <section
    :class="{ filters_fullscreen: showfilters }"
    class="section-animalshelter bg--light m-pb--none pt--lg pb--lg"
  >
    <div class="section--boxed max--1000 mlr--auto justify--center">
      <div class="cols--um">
        <img :src="shelter.imageUrl" style="max-width: 300px" />
        <div class="ml--lg m-mt--md">
          <h2>{{ shelter.name }}</h2>
          <hr />
          <a
            href="mailto:filizoikiilioupolis@gmail.com"
            class="cols justify--start"
          >
            <i
              class="
                fa fa-envelope
                color--brand
                mt--auto
                mb--auto
                mr-2
                font--20
              "
            ></i>
            {{ shelter.email }}
          </a>

          <a href="tel:21010102102" class="cols justify--start mt--sm">
            <i
              class="
                fa fa-phone-alt
                color--brand
                mt--auto
                mb--auto
                mr-2
                font--20
              "
            ></i>
            {{ shelter.phone }}
          </a>

          <div class="cols justify--start mt--sm mt--sm">
            <i
              class="
                fa fa-map-marker-alt
                color--brand
                mt--auto
                mb--auto
                mr-2
                font--20
              "
            ></i>
            {{ shelter.address }}
          </div>

          <div class="cols justify--start mt--sm">
            <i
              class="fa fa-clock color--brand mt--auto mb--auto mr-2 font--20"
            ></i>
            Καθημερινές 08.00-18.00 <br />
            Σαββατοκύριακα 09.00-14.00
          </div>
        </div>
      </div>
      <div class="justify--start mt--xlg">
        <h3>Σχετικά με εμάς</h3>
        <p>
          {{ shelter.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AnimalShelterInfo",
  data() {
    return {
      showfilters: false,
    };
  },
  methods: {
    ...mapActions({
      getShelterFront: "shelters/getShelterFront",
    }),
  },
  computed: {
    ...mapGetters({
      shelter: "shelters/shelter",
    }),
  },
  mounted() {
    this.getShelterFront(this.$route.params.id);
  },
};
</script>
<style scoped>
</style>