import store from "@/store/";

export const toast = {
  success(message) {
    store.dispatch("snackbar/setSnackBar", { text: message, color: "success" });
  },
  warning(message) {
    store.dispatch("snackbar/setSnackBar", { text: message, color: "warning" });
  },
  error(message) {
    store.dispatch("snackbar/setSnackBar", { text: message, color: "error" });
  },
};
