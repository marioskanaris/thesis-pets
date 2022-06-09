<template>
  <v-data-table
    :headers="tableHeaders"
    :items="shelters.data"
    no-data-text="No items were found."
    :loading="loading"
    :footer-props="{ 'items-per-page-options': [10, 20, 30, 40, 50] }"
    :server-items-length="shelters.meta ? shelters.meta.total : 0"
    :options.sync="options"
    class="elevation-22"
  >
    <template v-slot:item.activated="{ item }">
      <v-chip :color="item.activated ? 'green' : 'red'" dark>
        {{ item.activated ? "Activated" : "Inactive" }}
      </v-chip>
    </template>
    <template v-slot:top>
      <v-toolbar flat class="align-center justify-center">
        <div class="w-50 d-flex flex-row align-items-center">
          <v-text-field
            v-model="filters.search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          >
          </v-text-field>
        </div>
        <v-btn color="primary" @click="createShelter()"
          >Δημιουργία Νέας Φιλοζωικής</v-btn
        >
      </v-toolbar>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <v-icon @click="editShelter(item)" class="mr-2">mdi-pencil</v-icon>
      <v-icon @click="deleteShelterDialog(item)" class="mr-2"
        >mdi-delete</v-icon
      >
    </template>
  </v-data-table>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { deletionMixin } from "Mixins/deletionMixin";

export default {
  name: "shelters",
  mixins: [deletionMixin],
  data() {
    return {
      awaitingSearch: false,
      showDialog: false,
      filters: {
        search: "",
      },
      options: {},
    };
  },
  watch: {
    options: {
      handler() {
        this.queryShelters();
      },
    },
    filters: {
      handler() {
        this.options.page = 1;
        this.queryShelters();
      },
      deep: true,
    },
  },
  mounted() {
    this.queryShelters();
  },
  beforeDestroy() {
    this.$root.$off("resetRoute");
  },
  methods: {
    ...mapActions({
      getShelters: "shelters/getShelters",
    }),
    ...mapMutations({
      setLoading: "shelters/setLoading",
    }),
    createShelter() {
      this.$router.push({ name: "shelters-create" });
    },
    editShelter(item) {
      this.$router.push({ name: "shelters-edit", params: { id: item.id } });
    },
    deleteShelterDialog(item) {
      this.deletionModal(item.id, "shelters/deleteShelter", item.title);
      this.queryShelters();
    },
    submit() {
      this.showDialog = true;
    },
    queryShelters() {
      if (!this.awaitingSearch) {
        this.awaitingSearch = true;

        setTimeout(() => {
          this.getShelters({ options: this.options, filters: this.filters });
          this.awaitingSearch = false;
        }, 600);
      }
    },
    refreshList() {
      this.queryShelters();
    },
  },
  computed: {
    ...mapGetters({
      shelters: "shelters/shelters",
      tableHeaders: "shelters/tableHeaders",
      loading: "shelters/loading",
    }),
  },
};
</script>
