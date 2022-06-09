<template>
  <v-data-table
    :headers="tableHeaders"
    :items="blogs.data"
    no-data-text="No items were found."
    :loading="loading"
    :footer-props="{ 'items-per-page-options': [10, 20, 30, 40, 50] }"
    :server-items-length="blogs.meta ? blogs.meta.total : 0"
    :options.sync="options"
    class="elevation-22"
  >
    <template v-slot:item.totalPosts="{ item }">
      <v-chip color="orange" dark>
        {{ item.totalPosts }}
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
        <v-btn color="primary" @click="createBlog()"
          >Δημιουργία Νέου Blog</v-btn
        >
      </v-toolbar>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <v-icon @click="editBlog(item)" class="mr-2">mdi-pencil</v-icon>
      <v-icon @click="deleteBlogDialog(item)" class="mr-2">mdi-delete</v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { deletionMixin } from "Mixins/deletionMixin";

export default {
  name: "blogs",
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
        this.queryBlogs();
      },
    },
    filters: {
      handler() {
        this.options.page = 1;
        this.queryBlogs();
      },
      deep: true,
    },
  },
  mounted() {
    this.queryBlogs();
  },
  beforeDestroy() {
    this.$root.$off("resetRoute");
  },
  methods: {
    ...mapActions({
      getBlogs: "blogs/getBlogs",
    }),
    ...mapMutations({
      setLoading: "blogs/setLoading",
    }),
    createBlog() {
      this.$router.push({ name: "blogs-create" });
    },
    editBlog(item) {
      this.$router.push({ name: "blogs-edit", params: { id: item.id } });
    },
    deleteBlogDialog(item) {
      if (item.totalPosts) {
        this.$toast.warning(
          `Blog cannot be deleted, ${item.totalPosts} posts are connected with this blog.`
        );
        return;
      }

      this.deletionModal(item.id, "blogs/deleteBlog", item.title);
      this.queryBlogs();
    },
    submit() {
      this.showDialog = true;
    },
    queryBlogs() {
      if (!this.awaitingSearch) {
        this.awaitingSearch = true;

        setTimeout(() => {
          this.getBlogs({ options: this.options, filters: this.filters });
          this.awaitingSearch = false;
        }, 600);
      }
    },
    refreshList() {
      this.queryBlogs();
    },
  },
  computed: {
    ...mapGetters({
      blogs: "blogs/blogs",
      tableHeaders: "blogs/tableHeaders",
      loading: "blogs/loading",
    }),
  },
};
</script>
