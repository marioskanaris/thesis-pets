<template>
  <v-navigation-drawer
    app
    elevation="24"
    permanent
    :width="drawerWidth"
    :value="drawer"
  >
    <v-list>
      <v-list-item class="justify-space-between head-section">
        <v-list-item-icon
          class="col--100 cols cursor ml-2"
          @click="openDrawer()"
        >
          <div class="cols">
            <router-link class="logo--icon" to="/"><logo></logo></router-link>
            <v-list-item
              class="user-block"
              :style="{ visibility: drawer == false ? 'visible' : 'hidden' }"
              v-if="user != null"
            >
              <user-block v-bind:user="user"></user-block>
            </v-list-item>
          </div>
        </v-list-item-icon>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list>
      <template v-for="(item, index) in sidebar">
        <template v-if="item.items == null">
          <router-link
            v-if="item.roles.includes(user.role)"
            v-bind:key="index"
            style="text-decoration: none"
            :to="{ name: item.name, params: { id: 0 } }"
            @click.native="refresh(item)"
          >
            <v-list-item class="entities-list" dense>
              <v-list-item-icon class="mr-4">
                <v-icon :color="$vuetify.theme.dark ? '#ffffff' : '#3d3c39'">
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title v-if="!drawer"
                >{{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </router-link>
        </template>
        <template v-else>
          <v-list-group :value="false" :ripple="false" :no-action="false">
            <template v-slot:prependIcon>
              <v-icon
                class="pl-4 mr-3"
                :color="$vuetify.theme.dark ? '#ffffff' : '#3d3c39'"
              >
                {{ item.icon }}
              </v-icon>
            </template>
            <template v-slot:activator>
              <v-list-item dense>
                <v-list-item-title class="ml-3" v-if="!drawer"
                  >{{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </template>
            <template v-for="(subItem, subIndex) in item.items">
              <router-link
                v-bind:key="subIndex"
                style="text-decoration: none"
                :to="{ name: subItem.name, params: { id: 0 } }"
                @click.native="refresh(subItem)"
              >
                <v-list-item class="sub-entities-list" dense>
                  <v-list-item-icon class="mr-4">
                    <v-icon
                      :color="$vuetify.theme.dark ? '#ffffff' : '#3d3c39'"
                    >
                      {{ subItem.icon }}
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title v-if="!drawer"
                    >{{ subItem.title }}
                  </v-list-item-title>
                </v-list-item>
              </router-link>
            </template>
          </v-list-group>
        </template>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import adminRoutes from "@/router/admin";
import UserBlock from "Components/sideBar/UserBlock";
import { mapGetters } from "vuex";
import Logo from "./visitor/components/icons/Logo";

export default {
  name: "SideBar",
  components: {
    UserBlock,
    Logo,
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      drawer: false,
      adminPages: adminRoutes.children,
    };
  },
  created() {
    this.getInitialState();
  },
  methods: {
    getInitialState() {
      let initialValue = JSON.parse(localStorage.getItem("drawer"));
      if (initialValue) {
        this.drawer = initialValue;
      } else {
        this.drawer = false;
      }
    },
    closeDrawer() {
      this.drawer = true;
      localStorage.setItem("drawer", this.drawer);
    },
    openDrawer() {
      if (this.drawer == false) {
        if (this.$route.name != "home") {
          this.$router.push({ name: "home" });
        }
      } else {
        this.drawer = false;
        localStorage.setItem("drawer", this.drawer);
      }
    },
    refresh(route) {
      if (route.name == this.$route.name) {
        this.$root.$emit("resetRoute", this.$route.name);
      }
    },
  },
  computed: {
    drawerWidth: {
      get: function () {
        if (this.drawer == false) {
          return 200;
        } else {
          return 55;
        }
      },
    },

    ...mapGetters({
      sidebar: "sidebar/sidebar",
    }),
  },
};
</script>

<style>
.cursor {
  cursor: pointer;
}

.v-list-item .v-list-item__icon {
  margin-right: 16px !important;
}

.v-list-item .v-list-item__title {
  font-size: 16px;
}

.v-navigation-drawer .sub-entities-list {
  padding-left: 30px !important;
}

.v-list-group__header.v-list-item.v-list-item--link.theme--light {
  max-height: 40px !important;
  min-height: 40px !important;
}

.v-list-item__icon.v-list-group__header__prepend-icon {
  max-height: 5px !important;
  min-height: 5px !important;
}

.router-link-active > div {
  background-color: rgba(150, 171, 192, 0.2);
}
.head-section .user-block {
  visibility: visible;
  position: absolute;
  right: 10px;
  top: 30px;
}
</style>
