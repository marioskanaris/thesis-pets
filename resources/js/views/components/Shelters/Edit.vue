<template>
  <v-app>
    <go-back-button :routeName="'shelters'"></go-back-button>
    <v-container fluid class="elevation-22 form">
      <v-form ref="form">
        <div class="container-fluid">
          <v-text-field
            v-model="shelter.name"
            :rules="validation.name"
            class="required"
            label="Name"
          />
          <v-switch v-model="shelter.activated" label="Activated"></v-switch>
          <v-text-field
            v-model="shelter.description"
            :rules="validation.description"
            class="required"
            label="Description"
          />
          <v-text-field
            v-model="shelter.address"
            :rules="validation.address"
            class="required"
            label="Address"
          />
          <v-text-field
            v-model="shelter.afm"
            :rules="validation.afm"
            class="required"
            label="AFM"
          />
          <v-text-field
            v-model="shelter.email"
            :rules="validation.email"
            class="required"
            label="Email"
          />
          <v-text-field
            v-model="shelter.phone"
            :rules="validation.phone"
            class="required"
            label="Phone"
          />
          <v-img
            class="mt-5 mb-5"
            width="150"
            height="150"
            :src="imageBase64 ? imageBase64 : shelter.imageUrl"
          />
          <v-file-input
            show-size
            counter
            outlined
            :rules="validation.image"
            prepend-icon="mdi-paperclip"
            accept="image/png, image/jpeg, image/jpg"
            @change="onFileChange"
            label="Image"
          ></v-file-input>
          <v-select
            :items="regions"
            v-model="shelter.region"
            :rules="validation.region"
            class="required"
            label="Region"
          ></v-select>
          <div class="submit-btn">
            <div class="submit-btn">
              <v-dialog v-model="showDialog" persistent max-width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="success" dark @click="submit()"
                    >Update Shelter</v-btn
                  >
                </template>

                <v-card>
                  <v-card-title> Important </v-card-title>
                  <v-card-text class="dialogs">
                    <p>You are about to update the shelter</p>
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
  name: "EditShelter",
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
      getShelter: "shelters/getShelter",
      getRegions: "shelters/getRegions",
    }),
    submit() {
      if (this.$refs.form.validate()) {
        this.showDialog = true;
      }
    },
    update() {
      let formData = new FormData();
      formData.append("_method", "PUT");
      formData.append("name", this.shelter.name);
      formData.append("description", this.shelter.description);
      formData.append("address", this.shelter.address);
      formData.append("email", this.shelter.email);
      formData.append("phone", this.shelter.phone);
      formData.append("afm", this.shelter.afm);
      formData.append("region", this.shelter.region);
      formData.append("activated", this.shelter.activated ? 1 : 0);

      if (this.shelter.image) {
        formData.append("image", this.shelter.image);
      }

      this.showDialog = false;

      Api.post(`shelters/${this.shelter.id}`, formData)
        .then((response) => {
          this.$toast.success("Shelter successfully updated.");
          this.$router.push({ name: "shelters" });
        })
        .catch((error) => {
          this.$toast.error(error.response.data.errorDescriptions[0]);
        });
    },
    createImage(file) {
      this.shelter.image = file;
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
      shelter: "shelters/shelter",
      validation: "shelters/validationRules",
      regions: "shelters/regions",
    }),
  },
  mounted() {
    this.getShelter(this.$route.params.id);
    this.getRegions();
  },
};
</script>
