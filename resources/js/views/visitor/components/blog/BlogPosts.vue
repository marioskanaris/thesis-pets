<template>
  <section class="section-blog bg--light pb--lg pt--lg">
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
      Blog title
    </h2>
    <div class="section--boxed col--100 cols--um mt--md">
      <div class="col--30 font--12 mb--md color--accent">
        <h3 class="pb--sm">Νεότερα άρθρα</h3>
        <div
          class="blog_list_article_popular_posts mb--sm cols--flex"
          v-for="(post, index) in latestPosts.data"
          v-bind:key="index"
        >
          <div class="col--35">
            <a href="#">
              <img :src="post.imageUrl" alt="blog-dog" width="100%" />
            </a>
          </div>
          <div class="col--65 blog_list_article_side font--12 mtb--auto pl--sm">
            <a href="#">{{ post.title }}</a>
          </div>
        </div>
      </div>
      <div
        class="col--70 blog-posts-list m-text--center before--load"
        :class="customEffect"
      >
        <div
          v-for="(post, index) in blog.posts"
          v-bind:key="index"
          class="col--30 m-col--100 blog-posts-post text--center pr--sm pb--sm"
        >
          <a :href="'/blogs/' + blog.id + '/posts/' + post.id">
            <img :src="post.imageUrl" width="100%" />
          </a>
          <div class="font--12 pt--sm pb--sm">
            <a :href="'/blogs/' + blog.id">Blog</a>
            <span class="pl--sm">{{ post.user }}</span>
          </div>
          <a
            class="font--20"
            :href="'/blogs/' + blog.id + '/posts/' + post.id"
            >{{ post.title }}</a
          >
          <p class="font--14">
            {{
              post.description.replace(/(<([^>]+)>)/gi, "").substring(0, 100)
            }}...
          </p>
          <a class="font--14" :href="'/blogs/' + blog.id + '/posts/' + post.id"
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
  name: "BlogPosts",
  data() {
    return {
      customEffect: "",
    };
  },
  methods: {
    ...mapActions({
      getBlog: "blogs/getBlogFront",
      getLatestPosts: "blogs/getLatestPosts",
    }),
  },
  computed: {
    ...mapGetters({
      blog: "blogs/blog",
      latestPosts: "blogs/latestPosts",
    }),
  },
  mounted() {
    this.getBlog(this.$route.params.id);
    this.getLatestPosts(this.$route.params.id);

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
