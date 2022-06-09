<template>
  <v-data-table
    :headers="tableHeaders"
    :items="posts.data"
    no-data-text="No items were found."
    :loading="loading"
    :footer-props="{ 'items-per-page-options': [10, 20, 30, 40, 50] }"
    :server-items-length="posts.meta ? posts.meta.total : 0"
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
        <v-btn color="primary" @click="createPost()"
          >Δημιουργία Νέου Άρθρου</v-btn
        >
      </v-toolbar>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <v-icon @click="editPost(item)" class="mr-2">mdi-pencil</v-icon>
      <v-icon @click="deletePostDialog(item)" class="mr-2">mdi-delete</v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { deletionMixin } from "Mixins/deletionMixin";

export default {
  name: "posts",
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
        this.queryPosts();
      },
    },
    filters: {
      handler() {
        this.options.page = 1;
        this.queryPosts();
      },
      deep: true,
    },
  },
  mounted() {
    this.queryPosts();
  },
  beforeDestroy() {
    this.$root.$off("resetRoute");
  },
  methods: {
    ...mapActions({
      getPosts: "posts/getPosts",
    }),
    ...mapMutations({
      setLoading: "posts/setLoading",
    }),
    createPost() {
      this.$router.push({ name: "posts-create" });
    },
    editPost(item) {
      this.$router.push({ name: "posts-edit", params: { id: item.id } });
    },
    deletePostDialog(item) {
      this.deletionModal(item.id, "posts/deletePost", item.title);
      this.queryPosts();
    },
    submit() {
      this.showDialog = true;
    },
    queryPosts() {
      if (!this.awaitingSearch) {
        this.awaitingSearch = true;

        setTimeout(() => {
          this.getPosts({ options: this.options, filters: this.filters });
          this.awaitingSearch = false;
        }, 600);
      }
    },
    refreshList() {
      this.queryPosts();
    },
  },
  computed: {
    ...mapGetters({
      posts: "posts/posts",
      tableHeaders: "posts/tableHeaders",
      loading: "posts/loading",
    }),
  },
};
</script>
