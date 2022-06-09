<template>
  <v-app>
    <go-back-button :routeName="'lostPets'"></go-back-button>
    <v-container fluid class="elevation-22 form">
      <v-form ref="form">
        <div class="container-fluid">
          <v-text-field v-model="lostPet.name" label="Όνομα" />
          <v-text-field
            v-model="lostPet.description"
            :rules="validation.description"
            class="required"
            label="Περιγραφή"
          />
          <v-text-field
            v-model="lostPet.race"
            :rules="validation.race"
            label="Ράτσα"
          />
          <v-text-field
            type="number"
            v-model="lostPet.age"
            :rules="validation.age"
            label="Ηλικία"
          />
          <v-switch v-model="lostPet.vaccinated" label="Vaccinated"></v-switch>
          <v-switch v-model="lostPet.neutered" label="Neutered"></v-switch>
          <v-switch v-model="lostPet.published" label="Published"></v-switch>
          <v-img
            class="mt-5 mb-5"
            width="150"
            height="150"
            :src="
              primaryImageBase64 ? primaryImageBase64 : lostPet.primaryImageUrl
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
            v-if="lostPet.secondaryImageUrl || secondaryImageBase64"
            class="mt-5 mb-5"
            width="150"
            height="150"
            :src="
              secondaryImageBase64
                ? secondaryImageBase64
                : lostPet.secondaryImageUrl
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
                : lostPet.thirdaryImageUrl
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
            :items="regions"
            v-model="lostPet.region"
            :rules="validation.region"
            class="required"
            label="Region"
          ></v-select>
          <v-select
            :items="kinds"
            v-model="lostPet.kind"
            :rules="validation.kind"
            class="required"
            label="Kind"
          ></v-select>
          <v-select
            :items="genders"
            v-model="lostPet.gender"
            :rules="validation.gender"
            class="required"
            label="Gender"
          ></v-select>
          <v-select
            :items="sizes"
            v-model="lostPet.size"
            :rules="validation.size"
            class="required"
            label="Size"
          ></v-select>
          <v-select
            :items="shelters.data"
            v-model="lostPet.shelter_id"
            :rules="validation.shelter_id"
            item-text="name"
            item-value="id"
            label="Shelter"
          ></v-select>
          <div class="submit-btn">
            <v-dialog v-model="showDialog" persistent max-width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="success" dark @click="submit()"
                  >Update LostPet</v-btn
                >
              </template>
              <v-card>
                <v-card-title> Important </v-card-title>
                <v-card-text class="dialogs">
                  <p>You are about to update the lostPet</p>
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
  name: "EditLostPet",
  mixins: [deletionMixin],
  data() {
    return {
      showDialog: false,
      primaryImageBase64: null,
      secondaryImageBase64: null,
      thirdaryImageBase64: null,
    };
  },
  methods: {
    ...mapActions({
      getLostPet: "lostPets/getLostPet",
      getShelters: "shelters/getShelters",
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
      formData.append("name", this.lostPet.name);
      formData.append("description", this.lostPet.description);
      formData.append("region", this.lostPet.region);
      formData.append("age", this.lostPet.age);
      formData.append("kind", this.lostPet.kind);
      formData.append("size", this.lostPet.size);
      formData.append("race", this.lostPet.race);
      formData.append("gender", this.lostPet.gender);
      formData.append("published", this.lostPet.published == true ? 1 : 0);

      if (this.lostPet.shelter_id) {
        formData.append("shelter_id", this.lostPet.shelter_id);
      }

      formData.append("vaccinated", this.lostPet.vaccinated == true ? 1 : 0);
      formData.append("neutered", this.lostPet.neutered == true ? 1 : 0);
      formData.append("activated", this.lostPet.activated == true ? 1 : 0);

      if (this.lostPet.primary_image) {
        formData.append("primary_image", this.lostPet.primary_image);
      }

      if (this.lostPet.secondary_image) {
        formData.append("secondary_image", this.lostPet.secondary_image);
      }

      if (this.lostPet.thirdary_image) {
        formData.append("thirdary_image", this.lostPet.thirdary_image);
      }

      Api.post(`lost-pets/${this.lostPet.id}`, formData)
        .then((response) => {
          this.$toast.success("LostPet successfully updated.");
          this.$router.push({ name: "lost-pets" });
        })
        .catch((error) => {
          this.$toast.error(error.response.data.errorDescriptions[0]);
        });
    },
    createImage(file) {
      this.lostPet.primary_image = file;
      const reader = new FileReader();

      reader.onload = (e) => {
        this.primaryImageBase64 = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    createSecondImage(file) {
      this.lostPet.secondary_image = file;
      const reader = new FileReader();

      reader.onload = (e) => {
        this.secondaryImageBase64 = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    createThirdImage(file) {
      this.lostPet.thirdary_image = file;
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
      lostPet: "lostPets/lostPet",
      validation: "lostPets/validationRules",
      regions: "shelters/regions",
      shelters: "shelters/shelters",
      categories: "lostPets/categories",
      genders: "lostPets/genders",
      sizes: "lostPets/sizes",
      kinds: "lostPets/kinds",
    }),
  },
  mounted() {
    this.getLostPet(this.$route.params.id);
    this.getShelters({ options: {}, filters: {} });
    this.getRegions();
  },
};
</script>
