<template>
  <v-app>
    <go-back-button :routeName="'adoptions'"></go-back-button>
    <v-container fluid class="elevation-22 form">
      <v-form ref="form">
        <div class="container-fluid">
          <v-text-field v-model="adoption.name" label="Name" />
          <v-text-field
            v-model="adoption.description"
            :rules="validation.description"
            class="required"
            label="Description"
          />
          <v-text-field
            v-model="adoption.race"
            :rules="validation.race"
            label="Race"
          />
          <v-text-field
            type="number"
            v-model="adoption.age"
            :rules="validation.age"
            label="Age"
          />
          <v-switch v-model="adoption.vaccinated" label="Vaccinated"></v-switch>
          <v-switch v-model="adoption.neutered" label="Neutered"></v-switch>
          <v-switch v-model="adoption.published" label="Published"></v-switch>
          <v-img
            class="mt-5 mb-5"
            width="150"
            height="150"
            :src="
              primaryImageBase64 ? primaryImageBase64 : adoption.primaryImageUrl
            "
          />
          <v-file-input
            show-size
            counter
            outlined
            class="required"
            :rules="validation.primary_image"
            prepend-icon="mdi-paperclip"
            accept="image/png, image/jpeg, image/jpg"
            @change="onFileChange"
            label="Primary Image"
          ></v-file-input>
          <v-img
            v-if="adoption.secondaryImageUrl || secondaryImageBase64"
            class="mt-5 mb-5"
            width="150"
            height="150"
            :src="
              secondaryImageBase64
                ? secondaryImageBase64
                : adoption.secondaryImageUrl
            "
          />
          <v-file-input
            show-size
            counter
            outlined
            :rules="validation.secondary_image"
            prepend-icon="mdi-paperclip"
            accept="image/png, image/jpeg, image/jpg"
            @change="onSecondFileChange"
            label="Secondary Image"
          ></v-file-input>
          <v-img
            class="mt-5 mb-5"
            width="150"
            height="150"
            :src="
              thirdaryImageBase64
                ? thirdaryImageBase64
                : adoption.thirdaryImageUrl
            "
          />
          <v-file-input
            show-size
            counter
            outlined
            :rules="validation.thirdary_image"
            prepend-icon="mdi-paperclip"
            accept="image/png, image/jpeg, image/jpg"
            @change="onThirdFileChange"
            label="Thirdary Image"
          ></v-file-input>
          <v-select
            :items="kinds"
            v-model="adoption.kind"
            :rules="validation.kind"
            class="required"
            label="Kind"
          ></v-select>
          <v-select
            :items="genders"
            v-model="adoption.gender"
            :rules="validation.gender"
            class="required"
            label="Gender"
          ></v-select>
          <v-select
            :items="sizes"
            v-model="adoption.size"
            :rules="validation.size"
            class="required"
            label="Size"
          ></v-select>
          <v-select
            v-if="user.role == 'admin'"
            :items="shelters.data"
            v-model="adoption.shelter_id"
            :rules="validation.shelter_id"
            item-text="name"
            item-value="id"
            label="Shelter"
          ></v-select>
          <div class="submit-btn">
            <v-dialog v-model="showDialog" persistent max-width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="success" dark @click="submit()"
                  >Update Adoption</v-btn
                >
              </template>
              <v-card>
                <v-card-title> Important </v-card-title>
                <v-card-text class="dialogs">
                  <p>You are about to update the adoption</p>
                </v-card-text>
                <v-card-actions>
                  <v-btn color="blue darken-1" text @click="showDialog = false">
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
      </v-form>
    </v-container>
  </v-app>
</template>

<script>
import Api from "@/api/Api";
import { mapActions, mapGetters } from "vuex";
import { deletionMixin } from "Mixins/deletionMixin";

export default {
  name: "EditAdoption",
  mixins: [deletionMixin],
  data() {
    return {
      showDialog: false,
      primaryImageBase64: null,
      secondaryImageBase64: null,
      thirdaryImageBase64: null,
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
  methods: {
    ...mapActions({
      getAdoption: "adoptions/getAdoption",
      getShelters: "shelters/getShelters",
    }),
    submit() {
      if (this.$refs.form.validate()) {
        this.showDialog = true;
      }
    },
    update() {
      let formData = new FormData();
      formData.append("_method", "PUT");
      formData.append("name", this.adoption.name);
      formData.append("description", this.adoption.description);
      formData.append("age", this.adoption.age);
      formData.append("kind", this.adoption.kind);
      formData.append("size", this.adoption.size);
      formData.append("race", this.adoption.race);
      formData.append("gender", this.adoption.gender);
      formData.append("published", this.adoption.published == true ? 1 : 0);

      if (this.adoption.shelter_id && this.user.role == "admin") {
        formData.append("shelter_id", this.adoption.shelter_id);
      }

      formData.append("vaccinated", this.adoption.vaccinated == true ? 1 : 0);
      formData.append("neutered", this.adoption.neutered == true ? 1 : 0);
      formData.append("activated", this.adoption.activated == true ? 1 : 0);

      if (this.adoption.primary_image) {
        formData.append("primary_image", this.adoption.primary_image);
      }

      if (this.adoption.secondary_image) {
        formData.append("secondary_image", this.adoption.secondary_image);
      }

      if (this.adoption.thirdary_image) {
        formData.append("thirdary_image", this.adoption.thirdary_image);
      }

      Api.post(`adoptions/${this.adoption.id}`, formData)
        .then((response) => {
          this.$toast.success("Adoption successfully updated.");
          this.$router.push({ name: "adoptions" });
        })
        .catch((error) => {
          this.$toast.error(error.response.data.errorDescriptions[0]);
        });
    },
    createImage(file) {
      this.adoption.primary_image = file;
      const reader = new FileReader();

      reader.onload = (e) => {
        this.primaryImageBase64 = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    createSecondImage(file) {
      this.adoption.secondary_image = file;
      const reader = new FileReader();

      reader.onload = (e) => {
        this.secondaryImageBase64 = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    createThirdImage(file) {
      this.adoption.thirdary_image = file;
      const reader = new FileReader();

      reader.onload = (e) => {
        this.thirdaryImageBase64 = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    onFileChange(file) {
      if (!file) {
        return;
      }

      this.createImage(file);
    },
    onSecondFileChange(file) {
      if (!file) {
        return;
      }

      this.createSecondImage(file);
    },
    onThirdFileChange(file) {
      if (!file) {
        return;
      }

      this.createThirdImage(file);
    },
  },
  computed: {
    ...mapGetters({
      adoption: "adoptions/adoption",
      validation: "adoptions/validationRules",
      shelters: "shelters/shelters",
      categories: "adoptions/categories",
      genders: "adoptions/genders",
      sizes: "adoptions/sizes",
      kinds: "adoptions/kinds",
    }),
  },
  mounted() {
    this.getAdoption(this.$route.params.id);

    if (this.user.role == "admin") {
      this.getShelters({ options: {}, filters: {} });
    }
  },
};
</script>
