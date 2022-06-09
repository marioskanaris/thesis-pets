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
            label="Όνομα"
          />
          <v-switch v-model="shelter.activated" label="Activated"></v-switch>
          <v-text-field
            v-model="shelter.description"
            :rules="validation.description"
            class="required"
            label="Περιγραφή"
          />
          <v-text-field
            v-model="shelter.address"
            :rules="validation.address"
            class="required"
            label="Διεύθυνση"
          />
          <v-text-field
            v-model="shelter.afm"
            :rules="validation.afm"
            class="required"
            label="ΑΦΜ"
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
            label="Τηλέφωνο"
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
            :items="regions"
            v-model="shelter.region"
            :rules="validation.region"
            class="required"
            label="Περιφέρεια"
          ></v-select>
          <div class="submit-btn">
            <div class="submit-btn">
              <v-btn color="success" dark @click="create()"
                >Create Shelter</v-btn
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
      shelter: {
        name: "",
        region: "",
        address: "",
        description: "",
        image: null,
        email: "",
        phone: "",
        afm: "",
        activated: false,
      },
      imageBase64: "",
    };
  },
  methods: {
    ...mapActions({
      getRegions: "shelters/getRegions",
    }),
    create() {
      let formData = new FormData();
      formData.append("name", this.shelter.name);
      formData.append("description", this.shelter.description);
      formData.append("image", this.shelter.image);
      formData.append("address", this.shelter.address);
      formData.append("email", this.shelter.email);
      formData.append("phone", this.shelter.phone);
      formData.append("region", this.shelter.region);
      formData.append("afm", this.shelter.afm);
      formData.append("activated", this.shelter.activated == true ? 1 : 0);

      Api.post("shelters", formData)
        .then((response) => {
          this.$toast.success("Shelter successfully created.");
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
      validation: "shelters/validationRules",
      regions: "shelters/regions",
    }),
  },
  mounted() {
    this.getRegions();
  },
};
</script>
