<template>
  <v-data-table
    :headers="tableHeaders"
    :items="users.data"
    no-data-text="No items were found."
    :loading="loading"
    :footer-props="{ 'items-per-page-options': [10, 20, 30, 40, 50] }"
    :server-items-length="users.meta ? users.meta.total : 0"
    :options.sync="options"
    class="elevation-22"
  >
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
      </v-toolbar>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <v-icon @click="editUser(item)" class="mr-2">mdi-pencil</v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { deletionMixin } from "Mixins/deletionMixin";

export default {
  mixins: [deletionMixin],
  name: "users",
  data() {
    return {
      awaitingSearch: false,
      filters: {
        search: "",
      },
      options: {},
    };
  },
  watch: {
    options: {
      handler() {
        this.queryUsers();
      },
    },
    filters: {
      handler() {
        this.options.page = 1;
        this.queryUsers();
      },
      deep: true,
    },
  },
  mounted() {
    this.queryUsers();
    this.$root.$on("resetRoute", (route) => {
      if (route == this.$route.name) {
        this.setLoading(true);
        this.queryUsers();
      }
    });
  },
  beforeDestroy() {
    this.$root.$off("resetRoute");
  },
  methods: {
    ...mapActions({
      getUsers: "users/getUsers",
    }),
    ...mapMutations({
      setLoading: "users/setLoading",
    }),
    editUser(item) {
      this.$router.push({ name: "users-edit", params: { id: item.id } });
    },
    queryUsers() {
      if (!this.awaitingSearch) {
        this.awaitingSearch = true;

        setTimeout(() => {
          this.getUsers({ options: this.options, filters: this.filters });
          this.awaitingSearch = false;
        }, 600);
      }
    },
    refreshList() {
      this.queryUsers();
    },
  },
  computed: {
    ...mapGetters({
      users: "users/users",
      tableHeaders: "users/tableHeaders",
      loading: "users/loading",
    }),
  },
};
</script>
