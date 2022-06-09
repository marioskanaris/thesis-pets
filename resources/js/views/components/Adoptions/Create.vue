<template>
  <v-app>
    <go-back-button :routeName="'adoptions'"></go-back-button>
    <v-container fluid class="elevation-22 form">
      <v-form ref="form">
        <div class="container-fluid">
          <v-text-field
            v-model="adoption.name"
            :rules="validation.name"
            class="required"
            label="Όνομα"
            required
          />
          <v-text-field
            v-model="adoption.description"
            :rules="validation.description"
            class="required"
            label="Περιγραφή"
            required
          />
          <v-select
            :items="kinds"
            v-model="adoption.kind"
            :rules="validation.kind"
            class="required"
            label="Είδος"
          ></v-select>
          <v-select
            :items="genders"
            v-model="adoption.gender"
            :rules="validation.gender"
            class="required"
            label="Γένος"
          ></v-select>
          <v-text-field
            v-model="adoption.race"
            :rules="validation.race"
            label="Ράτσα"
          />
          <v-text-field
            type="number"
            v-model="adoption.age"
            :rules="validation.age"
            label="Ηλικία"
          />
          <v-select
            :items="sizes"
            v-model="adoption.size"
            :rules="validation.size"
            class="required"
            label="Μέγεθος"
          ></v-select>
          <v-select
            v-if="user.role == 'admin'"
            :items="shelters.data"
            v-model="adoption.shelter_id"
            :rules="validation.shelter_id"
            item-text="name"
            item-value="id"
            label="Φιλοζωική"
          ></v-select>
          <v-switch
            v-model="adoption.vaccinated"
            label="Εμβολιασμένο"
          ></v-switch>
          <v-switch v-model="adoption.neutered" label="Στειρωμένο"></v-switch>
          <v-switch
            v-model="adoption.published"
            label="Δημοσιευμένο"
          ></v-switch>
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
            label="Βασική Εικόνα"
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
            label="Δεύτερη Εικόνα"
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
            label="Τρίτη Εικόνα"
          ></v-file-input>
          <div class="submit-btn">
            <div class="submit-btn">
              <v-btn color="success" dark @click="create()"
                >Δημιουργία Νέας Υιοθεσίας</v-btn
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
      user: JSON.parse(localStorage.getItem("user")),
      adoption: {
        id: "",
        name: "",
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
      getShelters: "shelters/getShelters",
    }),
    create() {
      if (!this.$refs.form.validate()) {
        return;
      }

      let formData = new FormData();
      formData.append("name", this.adoption.name);
      formData.append("description", this.adoption.description);
      formData.append("age", this.adoption.age);
      formData.append("kind", this.adoption.kind);
      formData.append("size", this.adoption.size);
      formData.append("race", this.adoption.race);
      formData.append("gender", this.adoption.gender);

      if (this.adoption.shelter_id && this.user.role == "admin") {
        formData.append("shelter_id", this.adoption.shelter_id);
      }

      formData.append("published", this.adoption.published == true ? 1 : 0);
      formData.append("vaccinated", this.adoption.vaccinated == true ? 1 : 0);
      formData.append("neutered", this.adoption.neutered == true ? 1 : 0);
      formData.append("activated", this.adoption.activated == true ? 1 : 0);
      formData.append("primary_image", this.adoption.primary_image);

      if (this.adoption.secondary_image) {
        formData.append("secondary_image", this.adoption.secondary_image);
      }

      if (this.adoption.thirdary_image) {
        formData.append("thirdary_image", this.adoption.thirdary_image);
      }

      Api.post("adoptions", formData)
        .then((response) => {
          this.$toast.success("Adoption successfully created.");
          this.$router.push({ name: "adoptions" });
        })
        .catch((error) => {
          alert(error.response.data.errorDescriptions);
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
      validation: "adoptions/validationRules",
      categories: "adoptions/categories",
      genders: "adoptions/genders",
      sizes: "adoptions/sizes",
      kinds: "adoptions/kinds",
      shelters: "shelters/shelters",
    }),
  },
  mounted() {
    if (this.user.role == "admin") {
      this.getShelters({ options: {}, filters: {} });
    }
  },
};
</script>
