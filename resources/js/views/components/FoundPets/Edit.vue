<template>
  <v-app>
    <go-back-button :routeName="'foundPets'"></go-back-button>
    <v-container fluid class="elevation-22 form">
      <v-form ref="form">
        <div class="container-fluid">
          <v-text-field v-model="foundPet.name" label="Name" />
          <v-text-field
            v-model="foundPet.description"
            :rules="validation.description"
            class="required"
            label="Description"
          />
          <v-text-field
            v-model="foundPet.race"
            :rules="validation.race"
            label="Race"
          />
          <v-text-field
            type="number"
            v-model="foundPet.age"
            :rules="validation.age"
            label="Age"
          />
          <v-switch v-model="foundPet.vaccinated" label="Vaccinated"></v-switch>
          <v-switch v-model="foundPet.neutered" label="Neutered"></v-switch>
          <v-switch v-model="foundPet.published" label="Published"></v-switch>
          <v-img
            class="mt-5 mb-5"
            width="150"
            height="150"
            :src="
              primaryImageBase64 ? primaryImageBase64 : foundPet.primaryImageUrl
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
            v-if="foundPet.secondaryImageUrl || secondaryImageBase64"
            class="mt-5 mb-5"
            width="150"
            height="150"
            :src="
              secondaryImageBase64
                ? secondaryImageBase64
                : foundPet.secondaryImageUrl
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
                : foundPet.thirdaryImageUrl
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
            v-model="foundPet.region"
            :rules="validation.region"
            class="required"
            label="Region"
          ></v-select>
          <v-select
            :items="kinds"
            v-model="foundPet.kind"
            :rules="validation.kind"
            class="required"
            label="Kind"
          ></v-select>
          <v-select
            :items="genders"
            v-model="foundPet.gender"
            :rules="validation.gender"
            class="required"
            label="Gender"
          ></v-select>
          <v-select
            :items="sizes"
            v-model="foundPet.size"
            :rules="validation.size"
            class="required"
            label="Size"
          ></v-select>
          <v-select
            :items="shelters.data"
            v-model="foundPet.shelter_id"
            :rules="validation.shelter_id"
            item-text="name"
            item-value="id"
            label="Shelter"
          ></v-select>
          <div class="submit-btn">
            <v-dialog v-model="showDialog" persistent max-width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="success" dark @click="submit()"
                  >Update FoundPet</v-btn
                >
              </template>
              <v-card>
                <v-card-title> Important </v-card-title>
                <v-card-text class="dialogs">
                  <p>You are about to update the foundPet</p>
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
  name: "EditFoundPet",
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
      getFoundPet: "foundPets/getFoundPet",
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
      formData.append("name", this.foundPet.name);
      formData.append("description", this.foundPet.description);
      formData.append("region", this.foundPet.region);
      formData.append("age", this.foundPet.age);
      formData.append("kind", this.foundPet.kind);
      formData.append("size", this.foundPet.size);
      formData.append("race", this.foundPet.race);
      formData.append("gender", this.foundPet.gender);
      formData.append("published", this.foundPet.published == true ? 1 : 0);

      if (this.foundPet.shelter_id) {
        formData.append("shelter_id", this.foundPet.shelter_id);
      }

      formData.append("vaccinated", this.foundPet.vaccinated == true ? 1 : 0);
      formData.append("neutered", this.foundPet.neutered == true ? 1 : 0);
      formData.append("activated", this.foundPet.activated == true ? 1 : 0);

      if (this.foundPet.primary_image) {
        formData.append("primary_image", this.foundPet.primary_image);
      }

      if (this.foundPet.secondary_image) {
        formData.append("secondary_image", this.foundPet.secondary_image);
      }

      if (this.foundPet.thirdary_image) {
        formData.append("thirdary_image", this.foundPet.thirdary_image);
      }

      Api.post(`found-pets/${this.foundPet.id}`, formData)
        .then((response) => {
          this.$toast.success("Found Pet successfully updated.");
          this.$router.push({ name: "found-pets" });
        })
        .catch((error) => {
          this.$toast.error(error.response.data.errorDescriptions[0]);
        });
    },
    createImage(file) {
      this.foundPet.primary_image = file;
      const reader = new FileReader();

      reader.onload = (e) => {
        this.primaryImageBase64 = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    createSecondImage(file) {
      this.foundPet.secondary_image = file;
      const reader = new FileReader();

      reader.onload = (e) => {
        this.secondaryImageBase64 = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    createThirdImage(file) {
      this.foundPet.thirdary_image = file;
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
      foundPet: "foundPets/foundPet",
      validation: "foundPets/validationRules",
      regions: "shelters/regions",
      shelters: "shelters/shelters",
      categories: "foundPets/categories",
      genders: "foundPets/genders",
      sizes: "foundPets/sizes",
      kinds: "foundPets/kinds",
    }),
  },
  mounted() {
    this.getFoundPet(this.$route.params.id);
    this.getShelters({ options: {}, filters: {} });
    this.getRegions();
  },
};
</script>
