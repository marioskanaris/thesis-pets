<template>
  <v-app>
    <go-back-button :routeName="'blogs'"></go-back-button>
    <v-container fluid class="elevation-22 form">
      <v-form ref="form">
        <div class="container-fluid">
          <v-text-field
            v-model="blog.title"
            :rules="validation.title"
            class="required"
            label="Τίτλος"
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
          <div class="submit-btn">
            <div class="submit-btn">
              <v-btn color="success" dark @click="create()">Create Blog</v-btn>
            </div>
          </div>
        </div>
      </v-form>
    </v-container>
  </v-app>
</template>

<script>
import Api from "@/api/Api";
import { mapGetters } from "vuex";

export default {
  name: "CreateBlog",
  data() {
    return {
      blog: {
        title: "",
        image: "",
      },
      imageBase64: "",
    };
  },
  methods: {
    create() {
      let formData = new FormData();
      formData.append("title", this.blog.title);
      formData.append("image", this.blog.image);

      Api.post("blogs", formData)
        .then((response) => {
          this.$toast.success("Blog successfully created.");
          this.$router.push({ name: "blogs" });
        })
        .catch((error) => {
          this.$toast.error(error.response.data.errors.title[0]);
        });
    },
    createImage(file) {
      this.blog.image = file;
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
      validation: "blogs/validationRules",
    }),
  },
};
</script>
