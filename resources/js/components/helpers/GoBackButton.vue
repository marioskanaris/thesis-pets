<template>
  <div class="pr-1 pb-5">
    <v-row justify="end">
      <v-btn color="primary" class="white--text m-2" @click="goBack()"
        >Επιστροφη</v-btn
      >
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["routeName"],
  methods: {
    goBack() {
      this.$router.push({ name: this.routeName });
    },
  },
};
</script>
