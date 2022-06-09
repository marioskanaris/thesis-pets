(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Blogs/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/Blogs/Edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/Api */ "./resources/js/api/Api.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var Mixins_deletionMixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Mixins/deletionMixin */ "./resources/js/mixins/deletionMixin.js");
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
  name: "EditBlog",
  mixins: [Mixins_deletionMixin__WEBPACK_IMPORTED_MODULE_2__["deletionMixin"]],
  data: function data() {
    return {
      showDialog: false,
      imageBase64: null
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    getBlog: "blogs/getBlog"
  })), {}, {
    submit: function submit() {
      if (this.$refs.form.validate()) {
        this.showDialog = true;
      }
    },
    update: function update() {
      var _this = this;

      var formData = new FormData();
      formData.append("_method", "PUT");
      formData.append("title", this.blog.title);

      if (this.blog.image) {
        formData.append("image", this.blog.image);
      }

      this.showDialog = false;
      _api_Api__WEBPACK_IMPORTED_MODULE_0__["default"].post("blogs/".concat(this.blog.id), formData).then(function (response) {
        _this.$toast.success("Blog successfully updated.");

        _this.$router.push({
          name: "blogs"
        });
      })["catch"](function (error) {
        _this.$toast.error(error.response.data.errors);
      });
    },
    createImage: function createImage(file) {
      var _this2 = this;

      this.blog.image = file;
      var reader = new FileReader();

      reader.onload = function (e) {
        _this2.imageBase64 = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    onFileChange: function onFileChange(file) {
      if (!file) {
        return;
      }

      this.createImage(file);
    }
  }),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    blog: "blogs/blog",
    validation: "blogs/validationRules"
  })),
  mounted: function mounted() {
    this.getBlog(this.$route.params.id);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Blogs/Edit.vue?vue&type=template&id=23c8259c&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/Blogs/Edit.vue?vue&type=template&id=23c8259c& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "v-app",
    [
      _c("go-back-button", { attrs: { routeName: "blogs" } }),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "elevation-22 form", attrs: { fluid: "" } },
        [
          _c("v-form", { ref: "form" }, [
            _c(
              "div",
              { staticClass: "container-fluid" },
              [
                _c("v-text-field", {
                  staticClass: "required",
                  attrs: { rules: _vm.validation.title, label: "Τίτλος" },
                  model: {
                    value: _vm.blog.title,
                    callback: function($$v) {
                      _vm.$set(_vm.blog, "title", $$v)
                    },
                    expression: "blog.title"
                  }
                }),
                _vm._v(" "),
                _c("v-img", {
                  staticClass: "mt-5 mb-5",
                  attrs: {
                    width: "150",
                    height: "150",
                    src: _vm.imageBase64 ? _vm.imageBase64 : _vm.blog.imageUrl
                  }
                }),
                _vm._v(" "),
                _c("v-file-input", {
                  attrs: {
                    "show-size": "",
                    counter: "",
                    outlined: "",
                    "prepend-icon": "mdi-paperclip",
                    accept: "image/png, image/jpeg, image/jpg",
                    label: "Εικόνα"
                  },
                  on: { change: _vm.onFileChange }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "submit-btn" }, [
                  _c(
                    "div",
                    { staticClass: "submit-btn" },
                    [
                      _c(
                        "v-dialog",
                        {
                          attrs: { persistent: "", "max-width": "500" },
                          scopedSlots: _vm._u([
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { color: "success", dark: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.submit()
                                        }
                                      }
                                    },
                                    [_vm._v("Update Blog")]
                                  )
                                ]
                              }
                            }
                          ]),
                          model: {
                            value: _vm.showDialog,
                            callback: function($$v) {
                              _vm.showDialog = $$v
                            },
                            expression: "showDialog"
                          }
                        },
                        [
                          _vm._v(" "),
                          _c(
                            "v-card",
                            [
                              _c("v-card-title", [_vm._v(" Important ")]),
                              _vm._v(" "),
                              _c("v-card-text", { staticClass: "dialogs" }, [
                                _c("p", [
                                  _vm._v("You are about to update the blog")
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "blue darken-1",
                                        text: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.showDialog = false
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                    Cancel\n                  "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "blue darken-1",
                                        text: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.update()
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                    Proceed\n                  "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ],
              1
            )
          ])
        ],
        1
      )
    ],
    1
  )
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

/***/ "./resources/js/views/components/Blogs/Edit.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/components/Blogs/Edit.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_23c8259c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=23c8259c& */ "./resources/js/views/components/Blogs/Edit.vue?vue&type=template&id=23c8259c&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/components/Blogs/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VFileInput */ "./node_modules/vuetify/lib/components/VFileInput/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_23c8259c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_23c8259c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__["VDialog"],VFileInput: vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_9__["VFileInput"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__["VForm"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_11__["VImg"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/components/Blogs/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/components/Blogs/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/components/Blogs/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Blogs/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/components/Blogs/Edit.vue?vue&type=template&id=23c8259c&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/components/Blogs/Edit.vue?vue&type=template&id=23c8259c& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_23c8259c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=23c8259c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Blogs/Edit.vue?vue&type=template&id=23c8259c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_23c8259c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_23c8259c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);