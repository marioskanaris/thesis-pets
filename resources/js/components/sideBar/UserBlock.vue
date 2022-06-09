<template>
  <div class="d-flex flex-row align-items-center">
    <div>
      <v-list-item-title class="sidebar-title">
        {{ this.surname }}
      </v-list-item-title>
    </div>
    <div class="ml-3">
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        bottom
        offset-y
        left
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" class="elevation-0 ml-5">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-card>
          <template>
            <v-list-item @click="toHomePage()">
              <v-icon small class="mr-4">mdi-account-box</v-icon>
              <span>{{ user.name }}</span>
            </v-list-item>
          </template>
          <v-divider class="ma-0 pa-0"></v-divider>
          <v-divider class="ma-0 pa-0"></v-divider>
          <template>
            <v-list-item @click="logout()">
              <v-icon small class="mr-4">mdi-logout</v-icon>
              <span>Logout</span>
            </v-list-item>
          </template>
        </v-card>
      </v-menu>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Api from "@/api/Api";

export default {
  name: "UserBlock",
  props: ["user"],
  data() {
    return {
      menu: false,
      surname: "",
    };
  },
  methods: {
    ...mapActions({
      signOut: "auth/signOut",
    }),
    runMigrations() {
      Api.get("runMigrations")
        .then((res) => {
          this.$toast.success("Migrations ran successfully");
        })
        .catch((err) => {
          this.$toast.error("An error occured");
        });
    },

    logout() {
      this.menu = false;
      this.signOut().finally(() => {
        this.$router.push("/login");
      });
    },

    toHomePage() {
      this.menu = false;
      if (this.$route.path != "/admin/home") {
        this.$router.push({ path: "/admin/home" });
      }
    },

    openServiceConfiguration() {
      return window.open("/legacy/DM/dm_manage_services_list.php", "_blank");
    },
    openNextDayCancellationConfiguration() {
      return window.open(
        "/legacy/Cancellations/dm_manage_cancellations_list.php",
        "_blank"
      );
    },
    openUrlResolver() {
      this.$router.push({ path: "/admin/url-resolver" });
    },
    openDBSnaphosts() {
      this.$router.push({ path: "/admin/DBSnapshots" });
    },
    openAuditLogs() {
      this.$router.push({ path: "/admin/audit-logs" });
    },
  },
  mounted() {},
};
</script>
