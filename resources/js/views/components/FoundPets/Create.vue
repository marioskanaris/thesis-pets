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
            label="Περιγραφή"
          />
          <v-text-field
            v-model="foundPet.race"
            :rules="validation.race"
            label="Ράτσα"
          />
          <v-text-field
            type="number"
            v-model="foundPet.age"
            :rules="validation.age"
            label="Ηλικία"
          />
          <v-switch v-model="foundPet.vaccinated" label="Vaccinated"></v-switch>
          <v-switch v-model="foundPet.neutered" label="Neutered"></v-switch>
          <v-switch v-model="foundPet.published" label="Published"></v-switch>
          <v-img
            v-if="primaryImageBase64"
            class="mt-5 mb-5"
            width="150"
            height="150"
            :src="primaryImageBase64"
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
            label="Προτερεύον εικόνα"
          ></v-file-input>
          <v-img
            v-if="secondaryImageBase64"
            class="mt-5 mb-5"
            width="150"
            height="150"
            :src="secondaryImageBase64"
          />
          <v-file-input
            show-size
            counter
            outlined
            :rules="validation.secondary_image"
            prepend-icon="mdi-paperclip"
            accept="image/png, image/jpeg, image/jpg"
            @change="onSecondFileChange"
            label="Δευτερεύον εικόνα"
          ></v-file-input>
          <v-img
            v-if="thirdaryImageBase64"
            class="mt-5 mb-5"
            width="150"
            height="150"
            :src="thirdaryImageBase64"
          />
          <v-file-input
            show-size
            counter
            outlined
            :rules="validation.thirdary_image"
            prepend-icon="mdi-paperclip"
            accept="image/png, image/jpeg, image/jpg"
            @change="onThirdFileChange"
            label="Τριτεύον εικόνα"
          ></v-file-input>
          <v-select
            :items="regions"
            v-model="foundPet.region"
            :rules="validation.region"
            class="required"
            label="Περιφέρεια"
          ></v-select>
          <v-select
            :items="kinds"
            v-model="foundPet.kind"
            :rules="validation.kind"
            class="required"
            label="Είδος"
          ></v-select>
          <v-select
            :items="genders"
            v-model="foundPet.gender"
            :rules="validation.gender"
            class="required"
            label="Γένος"
          ></v-select>
          <v-select
            :items="sizes"
            v-model="foundPet.size"
            :rules="validation.size"
            class="required"
            label="Μέγεθος"
          ></v-select>
          <v-select
            :items="shelters.data"
            v-model="foundPet.shelter_id"
            :rules="validation.shelter_id"
            item-text="name"
            item-value="id"
            label="Φιλοζωική"
          ></v-select>
          <div class="submit-btn">
            <div class="submit-btn">
              <v-btn color="success" dark @click="create()"
                >Δημιουργία Εντοπισμένου κατοικιδίου</v-btn
              >
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

export default {
  name: "CreateShelter",
  data() {
    return {
      foundPet: {
        id: "",
        name: "",
        region: "",
        description: "",
        vaccinated: false,
        neutered: false,
        shelter_id: null,
        kind: "",
        size: "",
        age: 0,
        race: "",
        gender: "",
        published: false,
        primary_image: null,
        secondary_image: null,
        thirdary_image: null,
      },
      primaryImageBase64: "",
      secondaryImageBase64: "",
      thirdaryImageBase64: "",
    };
  },
  methods: {
    ...mapActions({
      getRegions: "foundPets/getRegions",
      getShelters: "shelters/getShelters",
    }),
    create() {
      let formData = new FormData();
      formData.append("name", this.foundPet.name);
      formData.append("description", this.foundPet.description);
      formData.append("region", this.foundPet.region);
      formData.append("age", this.foundPet.age);
      formData.append("kind", this.foundPet.kind);
      formData.append("size", this.foundPet.size);
      formData.append("race", this.foundPet.race);
      formData.append("gender", this.foundPet.gender);

      if (this.foundPet.shelter_id) {
        formData.append("shelter_id", this.foundPet.shelter_id);
      }

      formData.append("published", this.foundPet.published == true ? 1 : 0);

      formData.append("vaccinated", this.foundPet.vaccinated == true ? 1 : 0);
      formData.append("neutered", this.foundPet.neutered == true ? 1 : 0);
      formData.append("activated", this.foundPet.activated == true ? 1 : 0);
      formData.append("primary_image", this.foundPet.primary_image);

      if (this.foundPet.secondary_image) {
        formData.append("secondary_image", this.foundPet.secondary_image);
      }

      if (this.foundPet.thirdary_image) {
        formData.append("thirdary_image", this.foundPet.thirdary_image);
      }

      Api.post("found-pets", formData)
        .then((response) => {
          this.$toast.success("FoundPet successfully created.");
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
      validation: "foundPets/validationRules",
      regions: "foundPets/regions",
      categories: "foundPets/categories",
      genders: "foundPets/genders",
      sizes: "foundPets/sizes",
      kinds: "foundPets/kinds",
      shelters: "shelters/shelters",
    }),
  },
  mounted() {
    this.getRegions();
    this.getShelters({ options: {}, filters: {} });
  },
};
</script>
