<template>
  <section class="bg--light">
    <div class="section--boxed max--1200 anim-elem pt--xlg pb--xlg">
      <a href="/article"
        ><h3 class="color--accent font--35 text--center pb--md">
          Ανακοινώσεις και νέα
        </h3></a
      >
      <div class="col--100 p--sm cols--um">
        <div
          v-for="(post, index) in latestPosts.data"
          v-bind:key="index"
          class="col--30 m-col--100"
        >
          <a :href="'/blogs/' + post.blog_id + '/posts/' + post.id">
            <img :src="post.imageUrl" alt="blog-dog" width="100%" />
          </a>
          <div class="mt--sm mb--sm max--300">
            <a
              class="font--20 color--accent"
              :href="'/blogs/' + post.blog_id + '/posts/' + post.id"
              >{{ post.title }}</a
            >
          </div>
          <div>
            <span class="blog-posts-date font--14 color--accent"
              >Ημερομηνία: {{ post.date }}</span
            >
          </div>
          <a
            class="font--14 color--dark"
            :href="'/blogs/' + post.blog_id + '/posts/' + post.id"
            >Διάβασε περισσότερα</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomeBlogPosts",
  mounted() {},
  data() {
    return {
      showFaq1: false,
      showFaq2: false,
      showFaq3: false,
      showFaq4: false,
      showFaq5: false,
    };
  },
  methods: {
    ...mapActions({
      getThreeLatestPosts: "posts/getThreeLatestPosts",
    }),
  },
  computed: {
    ...mapGetters({
      latestPosts: "posts/posts",
    }),
  },
  mounted() {
    this.getThreeLatestPosts();
  },
};
</script>

<style scoped>
/* Section Blog post starts here */
.blog-posts-date {
  color: #606060;
}

/* Section Blog post ends here */
</style>
