<template>
  <v-data-table
    :headers="tableHeaders"
    :items="lostPets.data"
    no-data-text="No items were found."
    :loading="loading"
    :footer-props="{ 'items-per-page-options': [10, 20, 30, 40, 50] }"
    :server-items-length="lostPets.meta ? lostPets.meta.total : 0"
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
        <v-btn color="primary" @click="createLostPet()"
          >Δημιουργία Νέου Χαμένου Κατοικιδίου</v-btn
        >
      </v-toolbar>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <v-icon @click="editLostPet(item)" class="mr-2">mdi-pencil</v-icon>
      <v-icon @click="deleteLostPetDialog(item)" class="mr-2"
        >mdi-delete</v-icon
      >
    </template>
  </v-data-table>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { deletionMixin } from "Mixins/deletionMixin";

export default {
  name: "lostPets",
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
        this.queryLostPets();
      },
    },
    filters: {
      handler() {
        this.options.page = 1;
        this.queryLostPets();
      },
      deep: true,
    },
  },
  mounted() {
    this.queryLostPets();
  },
  beforeDestroy() {
    this.$root.$off("resetRoute");
  },
  methods: {
    ...mapActions({
      getLostPets: "lostPets/getLostPets",
    }),
    ...mapMutations({
      setLoading: "lostPets/setLoading",
    }),
    createLostPet() {
      this.$router.push({ name: "lost-pets-create" });
    },
    editLostPet(item) {
      this.$router.push({
        name: "lost-pets-edit",
        params: { id: item.id },
      });
    },
    deleteLostPetDialog(item) {
      this.deletionModal(item.id, "lostPets/deleteLostPet", item.title);
      this.queryLostPets();
    },
    submit() {
      this.showDialog = true;
    },
    queryLostPets() {
      if (!this.awaitingSearch) {
        this.awaitingSearch = true;

        setTimeout(() => {
          this.getLostPets({
            options: this.options,
            filters: this.filters,
          });
          this.awaitingSearch = false;
        }, 600);
      }
    },
    refreshList() {
      this.queryLostPets();
    },
  },
  computed: {
    ...mapGetters({
      lostPets: "lostPets/lostPets",
      tableHeaders: "lostPets/tableHeaders",
      loading: "lostPets/loading",
    }),
  },
};
</script>
