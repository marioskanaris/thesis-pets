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
            :src="imageBase64 ? imageBase64 : blog.imageUrl"
          />
          <v-file-input
            show-size
            counter
            outlined
            prepend-icon="mdi-paperclip"
            accept="image/png, image/jpeg, image/jpg"
            @change="onFileChange"
            label="Εικόνα"
          ></v-file-input>
          <div class="submit-btn">
            <div class="submit-btn">
              <v-dialog v-model="showDialog" persistent max-width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="success" dark @click="submit()"
                    >Update Blog</v-btn
                  >
                </template>

                <v-card>
                  <v-card-title> Important </v-card-title>
                  <v-card-text class="dialogs">
                    <p>You are about to update the blog</p>
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

export default {
  name: "EditBlog",
  mixins: [deletionMixin],
  data() {
    return {
      showDialog: false,
      imageBase64: null,
    };
  },
  methods: {
    ...mapActions({
      getBlog: "blogs/getBlog",
    }),
    submit() {
      if (this.$refs.form.validate()) {
        this.showDialog = true;
      }
    },
    update() {
      let formData = new FormData();
      formData.append("_method", "PUT");
      formData.append("title", this.blog.title);

      if (this.blog.image) {
        formData.append("image", this.blog.image);
      }

      this.showDialog = false;

      Api.post(`blogs/${this.blog.id}`, formData)
        .then((response) => {
          this.$toast.success("Blog successfully updated.");
          this.$router.push({ name: "blogs" });
        })
        .catch((error) => {
          this.$toast.error(error.response.data.errors);
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
      blog: "blogs/blog",
      validation: "blogs/validationRules",
    }),
  },
  mounted() {
    this.getBlog(this.$route.params.id);
  },
};
</script>
