<template>
  <v-data-table
    :headers="tableHeaders"
    :items="adoptions.data"
    no-data-text="Δεν βρέθηκαν υιοθεσίες"
    :loading="loading"
    :footer-props="{ 'items-per-page-options': [10, 20, 30, 40, 50] }"
    :server-items-length="adoptions.meta ? adoptions.meta.total : 0"
    :options.sync="options"
    class="elevation-22"
  >
    <template v-slot:item.published="{ item }">
      <v-chip :color="item.published ? 'green' : 'red'" dark>
        {{ item.published ? "Published" : "Unpublished" }}
      </v-chip>
    </template>
    <template v-slot:top>
      <v-toolbar flat class="align-center justify-center">
        <div class="w-50 d-flex flex-row align-items-center">
          <v-text-field
            v-model="filters.search"
            append-icon="mdi-magnify"
            label="Αναζήτηση"
            single-line
            hide-details
          >
          </v-text-field>
        </div>
        <v-btn color="primary" @click="createAdoption()"
          >Δημιουργία Νέας Υιοθεσίας</v-btn
        >
      </v-toolbar>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <v-icon @click="editAdoption(item)" class="mr-2">mdi-pencil</v-icon>
      <v-icon @click="deleteAdoptionDialog(item)" class="mr-2"
        >mdi-delete</v-icon
      >
    </template>
  </v-data-table>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { deletionMixin } from "Mixins/deletionMixin";

export default {
  name: "Adoptions",
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
        this.queryAdoptions();
      },
    },
    filters: {
      handler() {
        this.options.page = 1;
        this.queryAdoptions();
      },
      deep: true,
    },
  },
  mounted() {
    this.queryAdoptions();
  },
  beforeDestroy() {
    this.$root.$off("resetRoute");
  },
  methods: {
    ...mapActions({
      getAdoptions: "adoptions/getAdoptions",
    }),
    ...mapMutations({
      setLoading: "adoptions/setLoading",
    }),
    createAdoption() {
      this.$router.push({ name: "adoptions-create" });
    },
    editAdoption(item) {
      this.$router.push({
        name: "adoptions-edit",
        params: { id: item.id },
      });
    },
    deleteAdoptionDialog(item) {
      this.deletionModal(item.id, "adoptions/deleteAdoption", item.title);
      this.queryAdoptions();
    },
    submit() {
      this.showDialog = true;
    },
    queryAdoptions() {
      if (!this.awaitingSearch) {
        this.awaitingSearch = true;

        setTimeout(() => {
          this.getAdoptions({
            options: this.options,
            filters: this.filters,
          });
          this.awaitingSearch = false;
        }, 600);
      }
    },
    refreshList() {
      this.queryAdoptions();
    },
  },
  computed: {
    ...mapGetters({
      adoptions: "adoptions/adoptions",
      tableHeaders: "adoptions/tableHeaders",
      loading: "adoptions/loading",
    }),
  },
};
</script>
