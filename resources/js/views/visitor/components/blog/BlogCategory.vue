<template>
  <section class="section-blog bg--light pb--lg">
    <h2
      class="
        blog-main-image
        pb--xlg
        pt--xlg
        text--center
        font--45
        color--accent
      "
      style="background-image: url('images/blog-dog.jpg')"
    >
      Blogs
    </h2>
    <div class="cols--um max--1500 font--14 pt--md pb--md section--boxed">
      <div class="m-mb--sm">
        <a href="/home" class="color--dark">Αρχική σελίδα</a>&nbsp;>&nbsp;
        <span class="color--brand">Blogs</span>
      </div>

      <div class="mr--lg p--relative category_filters_search">
        <input
          type="text"
          class="input-search bg--white"
          placeholder="Αναζήτηση Blog"
          v-model="filters.search"
          name="fname"
        />
        <i class="fa fa-search color--brand" aria-hidden="true"></i>
      </div>
    </div>

    <div
      class="col--100 max--1300 mlr--auto blog-posts-list before--load"
      :class="customEffect"
    >
      <div
        v-for="(blog, index) in blogs.data"
        :key="index"
        class="
          col--30
          m-col--100
          blog-posts-post
          text--center
          pr--sm
          pl--sm
          pb--sm
          mb--md
        "
      >
        <a href="#">
          <img :src="blog.imageUrl" width="100%" />
        </a>
        <div class="mt--sm mb--md">
          <a class="font--20" href="/blog">{{ blog.title }}</a>
        </div>
        <div>
          <a class="font--14 main-button" :href="'/blogs/' + blog.id"
            >Read More</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "BlogCategory",
  data() {
    return {
      customEffect: "",
      awaitingSearch: false,
      filters: {
        search: "",
      },
    };
  },
  methods: {
    ...mapActions({
      getBlogs: "blogs/getBlogsFront",
    }),
    queryBlogs() {
      if (!this.awaitingSearch) {
        this.awaitingSearch = true;

        setTimeout(() => {
          this.getBlogs(this.filters);
          this.awaitingSearch = false;
        }, 600);
      }
    },
  },
  watch: {
    filters: {
      handler() {
        this.queryBlogs();
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters({
      blogs: "blogs/blogs",
    }),
  },
  mounted() {
    this.queryBlogs();

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
.section-blog .blog-main-image {
  background-size: cover;
}
.section-blog .blog-posts-list .blog-posts-post {
  display: inline-block;
}
</style>
