<template>
  <v-app>
    <go-back-button :routeName="'posts'"></go-back-button>
    <v-container fluid class="elevation-22 form">
      <v-form ref="form">
        <div class="container-fluid">
          <v-text-field
            v-model="post.title"
            :rules="validation.title"
            class="required"
            label="Τίτλος"
          />
          <v-switch v-model="post.published" label="Δημοσιευμένο"></v-switch>
          <editor
            api-key="no-api-key"
            v-model="post.description"
            :rules="validation.description"
            :init="{
              height: 250,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help',
            }"
          />
          <v-img
            class="mt-5 mb-5"
            width="150"
            height="150"
            :src="imageBase64"
          />
          <v-file-input
            show-size
            counter
            outlined
            :rules="validation.image"
            prepend-icon="mdi-paperclip"
            accept="image/png, image/jpeg, image/jpg"
            @change="onFileChange"
            label="Εικόνα"
          ></v-file-input>
          <v-select
            :items="blogs.data"
            v-model="post.blog_id"
            :rules="validation.blog"
            item-text="title"
            item-value="id"
            label="Blog"
          ></v-select>
          <div class="submit-btn">
            <div class="submit-btn">
              <v-btn color="success" dark @click="create()">Create Post</v-btn>
            </div>
          </div>
        </div>
      </v-form>
    </v-container>
  </v-app>
</template>

<script>
import Api from "@/api/Api";
import { mapGetters, mapActions } from "vuex";
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "CreatePost",
  components: {
    editor: Editor,
  },
  data() {
    return {
      post: {
        title: "",
        description: "",
        image: null,
        published: false,
        blog_id: 0,
      },
      imageBase64: "",
    };
  },
  methods: {
    ...mapActions({
      getBlogs: "blogs/getBlogs",
    }),
    create() {
      let formData = new FormData();
      formData.append("title", this.post.title);
      formData.append("description", this.post.description);
      formData.append("image", this.post.image);
      formData.append("published", this.post.published == true ? 1 : 0);
      formData.append("blog_id", this.post.blog_id);

      Api.post("posts", formData)
        .then((response) => {
          this.$toast.success("Post successfully created.");
          this.$router.push({ name: "posts" });
        })
        .catch((error) => {
          this.$toast.error(error.response.data.errorDescriptions[0]);
        });
    },
    createImage(file) {
      this.post.image = file;
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imageBase64 = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    onFileChange(file) {
      if (!file) {
        return;
      }

      this.createImage(file);
    },
  },
  computed: {
    ...mapGetters({
      validation: "posts/validationRules",
      blogs: "blogs/blogs",
    }),
  },
  mounted() {
    this.getBlogs({ options: {}, filters: {} });
  },
};
</script>
