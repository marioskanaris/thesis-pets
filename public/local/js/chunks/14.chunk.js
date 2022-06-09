(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/menu/LostPets.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/menu/LostPets.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var Mixins_deletionMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Mixins/deletionMixin */ "./resources/js/mixins/deletionMixin.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "lostPets",
  mixins: [Mixins_deletionMixin__WEBPACK_IMPORTED_MODULE_1__["deletionMixin"]],
  data: function data() {
    return {
      awaitingSearch: false,
      showDialog: false,
      filters: {
        search: ""
      },
      options: {}
    };
  },
  watch: {
    options: {
      handler: function handler() {
        this.queryLostPets();
      }
    },
    filters: {
      handler: function handler() {
        this.options.page = 1;
        this.queryLostPets();
      },
      deep: true
    }
  },
  mounted: function mounted() {
    this.queryLostPets();
  },
  beforeDestroy: function beforeDestroy() {
    this.$root.$off("resetRoute");
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getLostPets: "lostPets/getLostPets"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])({
    setLoading: "lostPets/setLoading"
  })), {}, {
    createLostPet: function createLostPet() {
      this.$router.push({
        name: "lost-pets-create"
      });
    },
    editLostPet: function editLostPet(item) {
      this.$router.push({
        name: "lost-pets-edit",
        params: {
          id: item.id
        }
      });
    },
    deleteLostPetDialog: function deleteLostPetDialog(item) {
      this.deletionModal(item.id, "lostPets/deleteLostPet", item.title);
      this.queryLostPets();
    },
    submit: function submit() {
      this.showDialog = true;
    },
    queryLostPets: function queryLostPets() {
      var _this = this;

      if (!this.awaitingSearch) {
        this.awaitingSearch = true;
        setTimeout(function () {
          _this.getLostPets({
            options: _this.options,
            filters: _this.filters
          });

          _this.awaitingSearch = false;
        }, 600);
      }
    },
    refreshList: function refreshList() {
      this.queryLostPets();
    }
  }),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    lostPets: "lostPets/lostPets",
    tableHeaders: "lostPets/tableHeaders",
    loading: "lostPets/loading"
  }))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/menu/LostPets.vue?vue&type=template&id=57a5e0d9&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/menu/LostPets.vue?vue&type=template&id=57a5e0d9& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-data-table", {
    staticClass: "elevation-22",
    attrs: {
      headers: _vm.tableHeaders,
      items: _vm.lostPets.data,
      "no-data-text": "No items were found.",
      loading: _vm.loading,
      "footer-props": { "items-per-page-options": [10, 20, 30, 40, 50] },
      "server-items-length": _vm.lostPets.meta ? _vm.lostPets.meta.total : 0,
      options: _vm.options
    },
    on: {
      "update:options": function($event) {
        _vm.options = $event
      }
    },
    scopedSlots: _vm._u(
      [
        {
          key: "item.published",
          fn: function(ref) {
            var item = ref.item
            return [
              _c(
                "v-chip",
                {
                  attrs: { color: item.published ? "green" : "red", dark: "" }
                },
                [
                  _vm._v(
                    "\n      " +
                      _vm._s(item.published ? "Published" : "Unpublished") +
                      "\n    "
                  )
                ]
              )
            ]
          }
        },
        {
          key: "top",
          fn: function() {
            return [
              _c(
                "v-toolbar",
                {
                  staticClass: "align-center justify-center",
                  attrs: { flat: "" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "w-50 d-flex flex-row align-items-center" },
                    [
                      _c("v-text-field", {
                        attrs: {
                          "append-icon": "mdi-magnify",
                          label: "Αναζήτηση",
                          "single-line": "",
                          "hide-details": ""
                        },
                        model: {
                          value: _vm.filters.search,
                          callback: function($$v) {
                            _vm.$set(_vm.filters, "search", $$v)
                          },
                          expression: "filters.search"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.createLostPet()
                        }
                      }
                    },
                    [_vm._v("Δημιουργία Νέου Χαμένου Κατοικιδίου")]
                  )
                ],
                1
              )
            ]
          },
          proxy: true
        },
        {
          key: "item.actions",
          fn: function(ref) {
            var item = ref.item
            return [
              _c(
                "v-icon",
                {
                  staticClass: "mr-2",
                  on: {
                    click: function($event) {
                      return _vm.editLostPet(item)
                    }
                  }
                },
                [_vm._v("mdi-pencil")]
              ),
              _vm._v(" "),
              _c(
                "v-icon",
                {
                  staticClass: "mr-2",
                  on: {
                    click: function($event) {
                      return _vm.deleteLostPetDialog(item)
                    }
                  }
                },
                [_vm._v("mdi-delete")]
              )
            ]
          }
        }
      ],
      null,
      true
    )
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/mixins/deletionMixin.js":
/*!**********************************************!*\
  !*** ./resources/js/mixins/deletionMixin.js ***!
  \**********************************************/
/*! exports provided: deletionMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletionMixin", function() { return deletionMixin; });
/* harmony import */ var _store___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/ */ "./resources/js/store/index.js");

var deletionMixin = {
  methods: {
    /**
     * Open the confirmation modal
     *
     * @param item (item data)
     * @param route (e.g. "blogs/deleteBlog")
     * @param itemName (e.g. "Blog")
     */
    deletionModal: function deletionModal(item, route, itemName) {
      var _this = this;

      this.$root.$confirmation.open("Delete ".concat(itemName), "Are you sure?", {
        color: "red"
      }).then(function (confirm) {
        if (confirm) _this.deleteItem(item, route, itemName);
      });
    },

    /**
     * Perform the actual deletion
     *
     * @param item (item data)
     * @param route (e.g. "blogs/deleteBlog")
     * @param itemName (e.g. "Blog 1")
     */
    deleteItem: function deleteItem(item, route, itemName) {
      var _this2 = this;

      _store___WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(route, item).then(function () {
        _store___WEBPACK_IMPORTED_MODULE_0__["default"].dispatch("snackbar/setSnackBar", {
          text: "".concat(itemName, " was deleted successfully!"),
          color: "success"
        });
        _this2.awaitingSearch = false;

        _this2.refreshList();
      })["catch"](function (error) {
        if (error.response) {
          _store___WEBPACK_IMPORTED_MODULE_0__["default"].dispatch("snackbar/setSnackBar", {
            text: "Something went wrong: " + error.response.data.errorDescriptions.toString(),
            color: "error"
          });
        }
      });
    }
  }
};

/***/ }),

/***/ "./resources/js/views/menu/LostPets.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/menu/LostPets.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LostPets_vue_vue_type_template_id_57a5e0d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LostPets.vue?vue&type=template&id=57a5e0d9& */ "./resources/js/views/menu/LostPets.vue?vue&type=template&id=57a5e0d9&");
/* harmony import */ var _LostPets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LostPets.vue?vue&type=script&lang=js& */ "./resources/js/views/menu/LostPets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LostPets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LostPets_vue_vue_type_template_id_57a5e0d9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LostPets_vue_vue_type_template_id_57a5e0d9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */







_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_5__["VChip"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_6__["VDataTable"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["VTextField"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_9__["VToolbar"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/menu/LostPets.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/menu/LostPets.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/menu/LostPets.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LostPets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LostPets.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/menu/LostPets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LostPets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/menu/LostPets.vue?vue&type=template&id=57a5e0d9&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/menu/LostPets.vue?vue&type=template&id=57a5e0d9& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LostPets_vue_vue_type_template_id_57a5e0d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LostPets.vue?vue&type=template&id=57a5e0d9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/menu/LostPets.vue?vue&type=template&id=57a5e0d9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LostPets_vue_vue_type_template_id_57a5e0d9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LostPets_vue_vue_type_template_id_57a5e0d9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);