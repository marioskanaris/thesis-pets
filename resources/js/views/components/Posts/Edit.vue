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
            label="Title"
          />
          <v-switch v-model="post.published" label="Published"></v-switch>
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
            :src="imageBase64 ? imageBase64 : post.imageUrl"
          />
          <v-file-input
            show-size
            counter
            outlined
            prepend-icon="mdi-paperclip"
            accept="image/png, image/jpeg, image/jpg"
            @change="onFileChange"
            label="Image"
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
              <v-dialog v-model="showDialog" persistent max-width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="success" dark @click="submit()"
                    >Update Post</v-btn
                  >
                </template>

                <v-card>
                  <v-card-title> Important </v-card-title>
                  <v-card-text class="dialogs">
                    <p>You are about to update the post</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="showDialog = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="update()">
                      Proceed
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </div>
        </div>
      </v-form>
    </v-container>
  </v-app>
</template>

<script>
import Api from "@/api/Api";
import { mapActions, mapGetters } from "vuex";
import { deletionMixin } from "Mixins/deletionMixin";
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "EditPost",
  mixins: [deletionMixin],
  components: {
    editor: Editor,
  },
  data() {
    return {
      showDialog: false,
      imageBase64: null,
    };
  },
  methods: {
    ...mapActions({
      getPost: "posts/getPost",
      getBlogs: "blogs/getBlogs",
    }),
    submit() {
      if (this.$refs.form.validate()) {
        this.showDialog = true;
      }
    },
    update() {
      let formData = new FormData();
      formData.append("_method", "PUT");
      formData.append("title", this.post.title);
      formData.append("description", this.post.description);

      if (this.post.image) {
        formData.append("image", this.post.image);
      }

      formData.append("published", this.post.published ? 1 : 0);
      formData.append("blog_id", this.post.blog_id);

      this.showDialog = false;

      Api.post(`posts/${this.post.id}`, formData)
        .then((response) => {
          this.$toast.success("Post successfully updated.");
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
      post: "posts/post",
      validation: "posts/validationRules",
      blogs: "blogs/blogs",
    }),
  },
  mounted() {
    this.getPost(this.$route.params.id);
    this.getBlogs({ options: {}, filters: {} });
  },
};
</script>
