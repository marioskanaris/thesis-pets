<template>
  <section
    :class="{ filters_fullscreen: showfilters }"
    class="section-animalshelter bg--light m-pb--none pb--lg"
  >
    <!-- Mobile Filters -->
    <div
      :class="{ el__block: showfilters }"
      class="
        category_filters_wrapper category_filters_wrapper_mobile
        col--100
        font--12
        mb--md
        p--lg
        color--accent
        bg--white
        el__hidden
        mobile
      "
    >
      <div class="cols">
        <h3 class="pb--sm font--25">Φίλτρα</h3>
        <i
          @click="showfilters = !showfilters"
          :class="{ el__block: showfilters }"
          class="fas fa-times el__hidden font--25"
        ></i>
      </div>
      <div>
        <div class="cols">
          <h4 class="font--20">Περιοχή</h4>
          <i
            :class="{ close_filter: showFilterInfo1 }"
            class="
              fa-solid fa-angle-up
              font--18
              accordion_filter
              clickable
              mr--xlg
            "
            @click="showFilterInfo1 = !showFilterInfo1"
          ></i>
        </div>
        <div :class="{ close_filter: showFilterInfo1 }">
          <label
            v-for="(region, index) in regions"
            :key="index"
            class="category_filter font--16 weight--400"
            >{{ region }}
            <input
              type="checkbox"
              @change="queryShelters()"
              :value="region"
              v-model="checkedRegions"
              class=""
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <hr width="30%" />
      </div>
    </div>
    <h2
      :class="{ el__hidden: showfilters }"
      class="animalshelter-main-image text--center font--45 color--accent"
      style="background-image: url('images/arxiki-eikona-shelter-page.jpg')"
    >
      Φιλοζωικές
    </h2>
    <div
      :class="{ el__hidden: showfilters }"
      class="cols--um font--14 pt--md pb--md section--boxed"
    >
      <div class="m-mb--sm">
        <a href="/home" class="color--dark">Αρχική σελίδα</a>&nbsp;>&nbsp;<span
          class="color--brand"
          >Φιλοζωικές</span
        >
      </div>
      <div class="mr--lg p--relative category_filters_search">
        <input
          type="text"
          class="input-search bg--white"
          placeholder="Αναζήτηση Φιλοζωικής"
          name="fname"
          v-model="filters.search"
        />
        <i class="fa fa-search color--brand" aria-hidden="true"></i>
      </div>
    </div>
    <div class="section--boxed col--100 cols--um">
      <!-- Desktop Filters -->
      <div
        class="
          category_filters_wrapper
          col--30
          font--12
          mb--md
          color--accent
          desktop
        "
      >
        <div class="cols">
          <h3 class="pb--sm font--25">Φίλτρα</h3>
        </div>
        <div>
          <div class="cols">
            <h4 class="font--20">Περιοχή</h4>
            <i
              :class="{ close_filter: showFilterInfo1 }"
              class="
                fa-solid fa-angle-up
                font--18
                accordion_filter
                clickable
                mr--xlg
              "
              @click="showFilterInfo1 = !showFilterInfo1"
            ></i>
          </div>
          <div :class="{ close_filter: showFilterInfo1 }">
            <label
              v-for="(region, index) in regions"
              :key="index"
              class="category_filter font--16 weight--400"
              >{{ region }}
              <input
                type="checkbox"
                @change="queryShelters()"
                :value="region"
                v-model="checkedRegions"
              />
              <span class="checkmark"></span>
            </label>
          </div>
          <hr width="75%" />
        </div>
      </div>

      <div
        class="um--hidden col--100 text-right pt--sm"
        :class="{ el__hidden: showfilters }"
      >
        <a
          @click="showfilters = !showfilters"
          class="category_filters_button font--16 secondary-button clickable"
          >Φίλτρα</a
        >
      </div>

      <div
        v-if="shelters.data.length"
        class="col--70 animalshelter-posts-list m-text--center before--load"
        :class="customEffect"
      >
        <div
          v-for="(shelter, index) in shelters.data"
          :key="index"
          class="
            col--30
            m-col--100
            animalshelter-posts-post
            p--sm
            mr--sm
            mb--sm
          "
          :class="{ el__hidden: showfilters }"
        >
          <a 
              :href="'/animal-shelters/' + shelter.id">
            <img :src="shelter.imageUrl" width="100%" />
          </a>
          <div class="font--20 mt--sm weight--700">
            <a 
              :href="'/animal-shelters/' + shelter.id">{{ shelter.name }}</a>
          </div>
          <div class="font--12 pb--sm">
            <a 
              :href="'/animal-shelters/' + shelter.id">{{ shelter.region }}</a>
          </div>
          <p class="font--14 mb--sm">
            {{ shelter.description }}
          </p>
          <div class="mb--sm">
            <a
              class="font--14 secondary-button small-button"
              :href="'/animal-shelters/' + shelter.id"
              >Πληροφορίες Φιλοζωικής</a
            >
          </div>
        </div>

        <div class="col--100">
          <nav class="archive-pagination">
            <ul v-if="this.shelters.meta">
              <li v-for="index in this.shelters.meta.last_page" :key="index">
                <button @click="changePage(index)" class="current page-numbers">
                  {{ index }}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="col--100" v-else>
        <p class="text--center font--20">
          Δυστυχώς δεν βρέθηκαν διαθέσιμες Φιλοζωικές
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AnimalShelterFilters",
  data() {
    return {
      awaitingSearch: false,
      showfilters: false,
      customEffect: "",
      showFilterInfo1: false,
      paginationNumbers: 1,
      checkedRegions: [],
      filters: {
        page: 1,
        pageSize: 6,
        search: "",
        regions: [],
      },
    };
  },
  watch: {
    filters: {
      handler() {
        this.queryShelters();
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions({
      getRegions: "shelters/getRegions",
      getShelters: "shelters/getSheltersFront",
    }),
    queryShelters() {
      if (!this.awaitingSearch) {
        this.filters.regions = this.checkedRegions;
        this.awaitingSearch = true;

        setTimeout(() => {
          this.getShelters(this.filters);
          this.awaitingSearch = false;
        }, 600);
      }
    },
    changePage(index) {
      this.filters.page = index;
      this.queryShelters();
    },
  },
  computed: {
    ...mapGetters({
      regions: "shelters/regions",
      shelters: "shelters/shelters",
    }),
  },
  mounted() {
    this.getRegions();
    this.queryShelters();

    setTimeout(
      function () {
        this.customEffect = "on--load";
      }.bind(this),
      500
    );
  },
};
</script>

<style scoped>
.section-animalshelter .animalshelter-main-image {
  background-size: cover;
  padding-bottom: 150px;
  padding-top: 150px;
  color: white;
}
.section-animalshelter .animalshelter-posts-list .animalshelter-posts-post {
  display: inline-block;
  border: solid 1px #52a35f54;
  border-radius: 15px;
}
@media (max-width: 767px) {
  .section-animalshelter
    .animalshelter-posts-list
    .animalshelter-posts-post
    img {
    width: 70%;
  }
  .section-animalshelter .animalshelter-main-image {
    padding-bottom: 50px;
    padding-top: 50px;
  }
}

.section-animalshelter i.accordion_filter {
  transform: rotate(0deg);
  transition: all 0.5s ease-in-out;
}

.section-animalshelter i.accordion_filter.close_filter {
  transform: rotate(180deg);
  transition: all 0.5s ease-in-out;
}
.category_filters_wrapper div.close_filter {
  display: none;
}
.filters_fullscreen {
  position: absolute;
  background: white;
  height: 100%;
}
</style>
