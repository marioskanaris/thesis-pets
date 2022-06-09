<template>
  <v-dialog
    ref="dialog"
    v-model="dialog"
    :max-width="options.width"
    :style="{ zIndex: options.zIndex }"
    @keydown.esc="cancel"
    @keydown.enter="agree"
  >
    <v-card>
      <v-toolbar class="mb-2" dark :color="options.color" dense flat>
        <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text class="text-center" v-show="!!message">
        {{ message }}
      </v-card-text>
      <v-checkbox
        v-if="options.checkbox"
        v-model="checkboxValue"
        true-value="1"
        :label="options.checkboxLabel"
        style="padding-left: 15px"
      ></v-checkbox>
      <v-divider class="mx-4"></v-divider>
      <v-card-actions class="pt-0">
        <v-spacer></v-spacer>
        <v-btn
          color="primary darken-1"
          text
          @click.native="agree"
          :disabled="options.disabled == 1"
          >Confirm</v-btn
        >
        <v-btn color="grey" text @click.native="cancel">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
/**
 * Vuetify Confirm Dialog component
 *
 * Insert component where you want to use it:
 * <confirm ref="confirm"></confirm>
 *
 * Call it:
 * this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' }).then((confirm) => {})
 * Or use await:
 * if (await this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' })) {
 *   // yes
 * }
 * else {
 *   // cancel
 * }
 *
 * Alternatively you can place it in main App component and access it globally via this.$root.$confirm
 * <template>
 *   <v-app>
 *     ...
 *     <confirm ref="confirm"></confirm>
 *   </v-app>
 * </template>
 *
 * mounted() {
 *   this.$root.$confirm = this.$refs.confirm.open
 * }
 */
export default {
  data: () => ({
    dialog: false,
    resolve: null,
    reject: null,
    message: null,
    title: null,
    checkboxValue: null,
    options: {
      color: "primary",
      disabled: 0,
      width: 290,
      zIndex: 200,
      checkbox: null,
      checkboxLabel: "",
    },
  }),
  methods: {
    open(title, message, options) {
      this.resetOptions();
      this.dialog = true;
      this.title = title;
      this.message = message;
      this.options = Object.assign(this.options, options);
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    agree() {
      if (this.options.checkbox) {
        this.checkboxValue = this.checkboxValue ?? false;
        this.resolve({ invalidate: this.checkboxValue, confirm: true });
        this.checkboxValue = null;
      } else {
        this.resolve(true);
      }
      this.dialog = false;
    },
    cancel() {
      this.resolve(false);
      this.dialog = false;
    },
    resetOptions() {
      this.options = {
        color: "primary",
        disabled: 0,
        width: 290,
        zIndex: 200,
      };
    },
  },
};
</script>
