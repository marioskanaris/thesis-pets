import store from "@/store/";

export const deletionMixin = {
    methods: {
        /**
         * Open the confirmation modal
         *
         * @param item (item data)
         * @param route (e.g. "blogs/deleteBlog")
         * @param itemName (e.g. "Blog")
         */
        deletionModal: function (item, route, itemName) {
            this.$root.$confirmation
                .open(`Delete ${itemName}`, "Are you sure?", { color: "red" })
                .then((confirm) => {
                    if (confirm) this.deleteItem(item, route, itemName);
                });
        },
        /**
         * Perform the actual deletion
         *
         * @param item (item data)
         * @param route (e.g. "blogs/deleteBlog")
         * @param itemName (e.g. "Blog 1")
         */
        deleteItem(item, route, itemName) {
            store
                .dispatch(route, item)
                .then(() => {
                    store.dispatch("snackbar/setSnackBar", {
                        text: `${itemName} was deleted successfully!`,
                        color: "success",
                    });
                    this.awaitingSearch = false;
                    this.refreshList();
                })
                .catch((error) => {
                    if (error.response) {
                        store.dispatch("snackbar/setSnackBar", {
                            text: "Something went wrong: "+error.response.data.errorDescriptions.toString(),
                            color: "error",
                        });
                    }
                });
        },
    }
}