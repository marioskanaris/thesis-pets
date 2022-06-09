<template>
  <section class="section_blog bg--light pb--lg pt--lg">
    <div class="max--1400 mlr--auto pt--sm">
      <div class="text--center">
        <div class="blog_list_article_info font--12">
          <a class="pr--sm">{{ post.date }}</a>
          <a href="#">Blog</a>
          <a class="pl--sm">{{ post.user }}</a>
          <h1 class="blog_article_title font--40 mt--sm mb--sm">
            {{ post.title }}
          </h1>
        </div>
        <img :src="post.imageUrl" width="30%" />
        <div class="social-media-icons pt--sm pb--sm">
          <a href="//www.facebook.com/sharer.php?u=#">
            <i class="fa-brands fa-facebook-f fa-lg"></i>
          </a>
          <a href="//twitter.com/share?text=#">
            <i class="fa-brands fa-twitter fa-lg"></i>
          </a>
        </div>
      </div>
      <div class="section_blog_wrapper section--boxed col--100 cols--um">
        <div
          class="col--30 blog_list_article_info font--12 mb--md color--accent"
        >
          <h3 class="pb--sm">Νεότερα άρθρα</h3>
          <div
            v-for="(post, index) in latestPosts.data"
            v-bind:key="index"
            class="blog_list_article_popular_posts mb--sm cols--flex"
          >
            <div class="col--35">
              <a href="#">
                <img :src="post.imageUrl" alt="blog-dog" width="100%" />
              </a>
            </div>
            <div
              class="col--65 blog_list_article_side font--12 mtb--auto pl--sm"
            >
              <a href="#">{{ post.title }}</a>
            </div>
          </div>
        </div>
        <div class="col--70 blog_list_articles m-text--center">
          <div class="article_content">
            <p v-html="post.description"></p>
          </div>
          <hr class="mt--sm mb--sm article_line" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ArticlePost",
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      getVisitorPost: "posts/getVisitorPost",
      getLatestPosts: "blogs/getLatestPosts",
    }),
  },
  computed: {
    ...mapGetters({
      post: "posts/post",
      latestPosts: "blogs/latestPosts",
    }),
  },
  mounted() {
    this.getVisitorPost(this.$route.params.post);
    this.getLatestPosts(this.$route.params.blog);
  },
};
</script>

<style scoped>
</style>
