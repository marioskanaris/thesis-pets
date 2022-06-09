<template>
  <section
    :class="{ filters_fullscreen: showfilters }"
    class="section-adoption bg--light m-pb--none pb--lg"
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
          <h4 class="font--20">Είδος</h4>
          <i
            :class="{ close_filter: showFilterInfo6 }"
            class="
              fa-solid fa-angle-up
              font--18
              accordion_filter
              clickable
              mr--xlg
            "
            @click="showFilterInfo6 = !showFilterInfo6"
          ></i>
        </div>
        <div :class="{ close_filter: showFilterInfo6 }">
          <label
            class="category_filter font--16 weight--400"
            v-for="(kind, index) in kinds"
            :key="index"
            >{{ kind }}
            <input
              type="checkbox"
              @change="queryFoundPets()"
              :value="kind"
              v-model="checkedKinds"
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <hr width="75%" />
      </div>

      <div>
        <div class="cols">
          <h4 class="font--20">Μέγεθος</h4>
          <i
            :class="{ close_filter: showFilterInfo4 }"
            class="
              fa-solid fa-angle-up
              font--18
              accordion_filter
              clickable
              mr--xlg
            "
            @click="showFilterInfo4 = !showFilterInfo4"
          ></i>
        </div>
        <div :class="{ close_filter: showFilterInfo4 }">
          <label
            class="category_filter font--16 weight--400"
            v-for="(size, index) in sizes"
            :key="index"
            >{{ size }}
            <input
              type="checkbox"
              @change="queryFoundPets()"
              :value="size"
              v-model="checkedSizes"
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <hr width="75%" />
      </div>

      <div>
        <div class="cols">
          <h4 class="font--20">Φύλο</h4>
          <i
            :class="{ close_filter: showFilterInfo3 }"
            class="
              fa-solid fa-angle-up
              font--18
              accordion_filter
              clickable
              mr--xlg
            "
            @click="showFilterInfo3 = !showFilterInfo3"
          ></i>
        </div>
        <div :class="{ close_filter: showFilterInfo3 }">
          <label
            v-for="(gender, index) in genders"
            :key="index"
            class="category_filter font--16 weight--400"
            >{{ gender }}
            <input
              type="checkbox"
              @change="queryFoundPets()"
              :value="gender"
              v-model="checkedGenders"
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <hr width="75%" />
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
              @change="queryFoundPets()"
              :value="region"
              v-model="checkedRegions"
            />
            <span class="checkmark"></span>
          </label>
          <hr width="30%" />
        </div>
      </div>
    </div>
    <h2
      :class="{ el__hidden: showfilters }"
      class="animalshelter-main-image text--center font--45 color--accent"
      style="
        background-image: url('images/arxiki-eikona-anazitisi-xamenou-katikidiou.jpg');
      "
    >
      Αναζήτηση Ιδιοκτήτη Χαμένου Κατοικιδίου
    </h2>
    <div
      :class="{ el__hidden: showfilters }"
      class="cols--um font--14 pt--md pb--md section--boxed"
    >
      <div class="m-mb--sm">
        <a href="/home" class="color--dark">Αρχική σελίδα</a>&nbsp;>&nbsp;<span
          class="color--brand"
          >Αναζήτηση Ιδιοκτήτη Χαμένου Κατοικιδίου</span
        >
      </div>
      <div class="mr--lg p--relative category_filters_search">
        <input
          type="text"
          class="input-search bg--white"
          placeholder="Αναζήτηση Κατοικιδίου"
          name="fname"
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
            <h4 class="font--20">Είδος</h4>
            <i
              :class="{ close_filter: showFilterInfo6 }"
              class="
                fa-solid fa-angle-up
                font--18
                accordion_filter
                clickable
                mr--xlg
              "
              @click="showFilterInfo6 = !showFilterInfo6"
            ></i>
          </div>
          <div :class="{ close_filter: showFilterInfo6 }">
            <label
              class="category_filter font--16 weight--400"
              v-for="(kind, index) in kinds"
              :key="index"
              >{{ kind }}
              <input
                type="checkbox"
                @change="queryFoundPets()"
                :value="kind"
                v-model="checkedKinds"
              />
              <span class="checkmark"></span>
            </label>
          </div>
          <hr width="75%" />
        </div>

        <div>
          <div class="cols">
            <h4 class="font--20">Μέγεθος</h4>
            <i
              :class="{ close_filter: showFilterInfo4 }"
              class="
                fa-solid fa-angle-up
                font--18
                accordion_filter
                clickable
                mr--xlg
              "
              @click="showFilterInfo4 = !showFilterInfo4"
            ></i>
          </div>
          <div :class="{ close_filter: showFilterInfo4 }">
            <label
              class="category_filter font--16 weight--400"
              v-for="(size, index) in sizes"
              :key="index"
              >{{ size }}
              <input
                type="checkbox"
                @change="queryFoundPets()"
                :value="size"
                v-model="checkedSizes"
              />
              <span class="checkmark"></span>
            </label>
          </div>
          <hr width="75%" />
        </div>

        <div>
          <div class="cols">
            <h4 class="font--20">Φύλο</h4>
            <i
              :class="{ close_filter: showFilterInfo3 }"
              class="
                fa-solid fa-angle-up
                font--18
                accordion_filter
                clickable
                mr--xlg
              "
              @click="showFilterInfo3 = !showFilterInfo3"
            ></i>
          </div>
          <div :class="{ close_filter: showFilterInfo3 }">
            <label
              v-for="(gender, index) in genders"
              :key="index"
              class="category_filter font--16 weight--400"
              >{{ gender }}
              <input
                type="checkbox"
                @change="queryFoundPets()"
                :value="gender"
                v-model="checkedGenders"
              />
              <span class="checkmark"></span>
            </label>
          </div>
          <hr width="75%" />
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
                @change="queryFoundPets()"
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
        v-for="(foundPet, index) in foundPets.data"
        :key="index"
        class="col--70 adoption-posts-list m-text--center before--load"
        :class="customEffect"
      >
        <div
          class="col--30 m-col--100 adoption-posts-post p--sm mr--sm mb--sm"
          :class="{ el__hidden: showfilters }"
        >
          <a href="/post">
            <img :src="foundPet.primaryImageUrl" width="100%" />
          </a>
          <div class="font--20 mt--sm weight--700">
            <a href="/post">{{ foundPet.name }}</a>
          </div>
          <div class="font--12 pb--sm">
            <a href="/blog">{{ foundPet.region }}</a>
          </div>
          <p class="font--14 mb--sm">
            {{ foundPet.description }}
          </p>
          <div class="cols justify--start">
            <span class="color--brand font--16 weight--700">Είδος:</span>
            <span class="font--14 mt--auto ml-1">{{ foundPet.kind }}</span>
          </div>
          <div class="cols justify--start">
            <span class="color--brand font--16 weight--700">Φύλο:</span>
            <span class="font--14 mt--auto ml-1">{{ foundPet.gender }}</span>
          </div>
          <div class="cols justify--start mb--sm">
            <span class="color--brand font--16 weight--700">Ηλικία:</span>
            <span class="font--14 mt--auto ml-1"
              >{{ foundPet.age }} Χρόνων</span
            >
          </div>
          <div class="mb--sm">
            <a
              class="font--14 secondary-button small-button"
              :href="'/found-pets/' + foundPet.id"
              >Πληροφορίες Κατοικιδίου</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "LostPetOwnerFilters",
  data() {
    return {
      showfilters: false,
      customEffect: "",
      showFilterInfo1: true,
      showFilterInfo2: true,
      showFilterInfo3: true,
      showFilterInfo4: false,
      showFilterInfo5: false,
      showFilterInfo6: false,
      filters: {
        kinds: [],
        minAge: null,
        maxAge: null,
        age: 0,
        sizes: [],
        genders: [],
        neutered: null,
        regions: [],
        search: "",
      },
      awaitingSearch: false,
      checkedRegions: [],
      checkedGenders: [],
      checkedKinds: [],
      checkedSizes: [],
      minAge: 0,
      MaxAge: 0,
    };
  },
  methods: {
    ...mapActions({
      getFoundPetsFront: "foundPets/getFoundPetsFront",
      getRegions: "foundPets/getRegions",
    }),
    queryFoundPets() {
      if (!this.awaitingSearch) {
        this.filters.regions = this.checkedRegions;
        this.filters.genders = this.checkedGenders;
        this.filters.kinds = this.checkedKinds;
        this.filters.sizes = this.checkedSizes;
        this.filters.minAge = this.minAge;
        this.filters.maxAge = this.maxAge;
        this.awaitingSearch = true;

        setTimeout(() => {
          this.getFoundPetsFront(this.filters);
          this.awaitingSearch = false;
        }, 600);
      }
    },
    setAges(min, max) {
      this.minAge = min;
      this.maxAge = max;

      this.queryFoundPets();
    },
  },
  watch: {
    filters: {
      handler() {
        this.queryFoundPets();
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters({
      foundPets: "foundPets/foundPets",
      regions: "foundPets/regions",
      kinds: "foundPets/kinds",
      genders: "foundPets/genders",
      sizes: "foundPets/sizes",
    }),
  },
  mounted() {
    this.queryFoundPets();
    this.getRegions();

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
.section-adoption .animalshelter-main-image {
  background-size: cover;
  padding-bottom: 150px;
  padding-top: 150px;
  color: white;
}
.section-adoption .adoption-posts-list .adoption-posts-post {
  display: inline-block;
  border: solid 1px #52a35f54;
  border-radius: 15px;
}
@media (max-width: 767px) {
  .section-adoption .adoption-posts-list .adoption-posts-post img {
    width: 70%;
  }
  .section-adoption .animalshelter-main-image {
    padding-bottom: 50px;
    padding-top: 50px;
  }
}

.section-adoption i.accordion_filter {
  transform: rotate(0deg);
  transition: all 0.5s ease-in-out;
}

.section-adoption i.accordion_filter.close_filter {
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
