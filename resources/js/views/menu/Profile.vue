<template>
  <v-app>
    <progress-circular
      v-bind:show-loading="isLoading"
      v-bind:show-overlay="isLoading"
    />

    <go-back-button :routeName="'users'"></go-back-button>
    <v-container fluid class="elevation-22 form">
      <v-form ref="form">
        <div class="container-fluid">
          <v-text-field
            v-model="user.name"
            :rules="validation.name"
            class="required"
            label="Όνομα"
          />
          <v-text-field
            v-model="user.email"
            :rules="validation.email"
            class="required"
            label="Email"
          />
          <v-text-field
            v-model="user.phone"
            :rules="validation.phone"
            class="required"
            label="Τηλέφωνο"
          />
          <div class="cols">
            <div class="submit-btn">
              <v-dialog v-model="showDialog" persistent max-width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="success" dark @click="submit()"
                    >Ενημέρωση Προφίλ</v-btn
                  >
                </template>

                <v-card>
                  <v-card-title> Important </v-card-title>
                  <v-card-text class="dialogs">
                    <p>Είσαστε σίγουροι;</p>
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
            <div class="submit-btn">
              <v-dialog
                v-model="showDialogDeleteProfile"
                persistent
                max-width="500"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="red" dark @click="submitDeleteProfile()"
                    >Διαγραφή Προφίλ</v-btn
                  >
                </template>

                <v-card>
                  <v-card-title> Important </v-card-title>
                  <v-card-text class="dialogs">
                    <p>Είσαστε σίγουροι;</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="showDialog = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="deleteProfile()">
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
import ProgressCircular from "Components/helpers/ProgressCircular";

export default {
  name: "profile",
  components: {
    ProgressCircular,
  },
  data() {
    return {
      timezones: [],
      showDialog: false,
      showDialogDeleteProfile: false,
      isLoading: false,
    };
  },
  methods: {
    ...mapActions({
      getUser: "users/getProfile",
    }),
    submit() {
      if (this.$refs.form.validate()) {
        this.showDialog = true;
      }
    },
    submitDeleteProfile() {
      this.showDialogDeleteProfile = true;
    },
    update() {
      this.showDialog = false;
      this.isLoading = true;

      Api.put("profile-update", this.user)
        .then((response) => {
          this.$toast.success("Το προφίλ ενημερώθηκε επιτυχώς.");
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          this.$toast.error(error.response.data.errorDescriptions[0]);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    deleteProfile() {
      this.showDialog = false;
      this.isLoading = true;

      Api.delete("profile-delete")
        .then((response) => {
          localStorage.removeItem("user");

          this.$toast.success("Το προφίλ διαγράφηκε.");
          this.$router.push("/login");
        })
        .catch((error) => {
          this.$toast.error(error.response.data.errorDescriptions[0]);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  computed: {
    ...mapGetters({
      user: "users/user",
      validation: "users/validationRules",
    }),
  },
  mounted() {
    this.getUser();
  },
};
</script>
