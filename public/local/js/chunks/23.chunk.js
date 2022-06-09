(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Shelters/Create.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/Shelters/Create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/Api */ "./resources/js/api/Api.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
  name: "CreateShelter",
  data: function data() {
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
        activated: false
      },
      imageBase64: ""
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    getRegions: "shelters/getRegions"
  })), {}, {
    create: function create() {
      var _this = this;

      var formData = new FormData();
      formData.append("name", this.shelter.name);
      formData.append("description", this.shelter.description);
      formData.append("image", this.shelter.image);
      formData.append("address", this.shelter.address);
      formData.append("email", this.shelter.email);
      formData.append("phone", this.shelter.phone);
      formData.append("region", this.shelter.region);
      formData.append("afm", this.shelter.afm);
      formData.append("activated", this.shelter.activated == true ? 1 : 0);
      _api_Api__WEBPACK_IMPORTED_MODULE_0__["default"].post("shelters", formData).then(function (response) {
        _this.$toast.success("Shelter successfully created.");

        _this.$router.push({
          name: "shelters"
        });
      })["catch"](function (error) {
        _this.$toast.error(error.response.data.errorDescriptions[0]);
      });
    },
    createImage: function createImage(file) {
      var _this2 = this;

      this.shelter.image = file;
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
    validation: "shelters/validationRules",
    regions: "shelters/regions"
  })),
  mounted: function mounted() {
    this.getRegions();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Shelters/Create.vue?vue&type=template&id=c2d9697a&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/Shelters/Create.vue?vue&type=template&id=c2d9697a& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("go-back-button", { attrs: { routeName: "shelters" } }),
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
                  attrs: { rules: _vm.validation.name, label: "Όνομα" },
                  model: {
                    value: _vm.shelter.name,
                    callback: function($$v) {
                      _vm.$set(_vm.shelter, "name", $$v)
                    },
                    expression: "shelter.name"
                  }
                }),
                _vm._v(" "),
                _c("v-switch", {
                  attrs: { label: "Activated" },
                  model: {
                    value: _vm.shelter.activated,
                    callback: function($$v) {
                      _vm.$set(_vm.shelter, "activated", $$v)
                    },
                    expression: "shelter.activated"
                  }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  staticClass: "required",
                  attrs: {
                    rules: _vm.validation.description,
                    label: "Περιγραφή"
                  },
                  model: {
                    value: _vm.shelter.description,
                    callback: function($$v) {
                      _vm.$set(_vm.shelter, "description", $$v)
                    },
                    expression: "shelter.description"
                  }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  staticClass: "required",
                  attrs: { rules: _vm.validation.address, label: "Διεύθυνση" },
                  model: {
                    value: _vm.shelter.address,
                    callback: function($$v) {
                      _vm.$set(_vm.shelter, "address", $$v)
                    },
                    expression: "shelter.address"
                  }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  staticClass: "required",
                  attrs: { rules: _vm.validation.afm, label: "ΑΦΜ" },
                  model: {
                    value: _vm.shelter.afm,
                    callback: function($$v) {
                      _vm.$set(_vm.shelter, "afm", $$v)
                    },
                    expression: "shelter.afm"
                  }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  staticClass: "required",
                  attrs: { rules: _vm.validation.email, label: "Email" },
                  model: {
                    value: _vm.shelter.email,
                    callback: function($$v) {
                      _vm.$set(_vm.shelter, "email", $$v)
                    },
                    expression: "shelter.email"
                  }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  staticClass: "required",
                  attrs: { rules: _vm.validation.phone, label: "Τηλέφωνο" },
                  model: {
                    value: _vm.shelter.phone,
                    callback: function($$v) {
                      _vm.$set(_vm.shelter, "phone", $$v)
                    },
                    expression: "shelter.phone"
                  }
                }),
                _vm._v(" "),
                _c("v-img", {
                  staticClass: "mt-5 mb-5",
                  attrs: { width: "150", height: "150", src: _vm.imageBase64 }
                }),
                _vm._v(" "),
                _c("v-file-input", {
                  attrs: {
                    "show-size": "",
                    counter: "",
                    outlined: "",
                    rules: _vm.validation.image,
                    "prepend-icon": "mdi-paperclip",
                    accept: "image/png, image/jpeg, image/jpg",
                    label: "Εικόνα"
                  },
                  on: { change: _vm.onFileChange }
                }),
                _vm._v(" "),
                _c("v-select", {
                  staticClass: "required",
                  attrs: {
                    items: _vm.regions,
                    rules: _vm.validation.region,
                    label: "Περιφέρεια"
                  },
                  model: {
                    value: _vm.shelter.region,
                    callback: function($$v) {
                      _vm.$set(_vm.shelter, "region", $$v)
                    },
                    expression: "shelter.region"
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "submit-btn" }, [
                  _c(
                    "div",
                    { staticClass: "submit-btn" },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "success", dark: "" },
                          on: {
                            click: function($event) {
                              return _vm.create()
                            }
                          }
                        },
                        [_vm._v("Create Shelter")]
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

/***/ "./resources/js/views/components/Shelters/Create.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/components/Shelters/Create.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_c2d9697a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=c2d9697a& */ "./resources/js/views/components/Shelters/Create.vue?vue&type=template&id=c2d9697a&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/components/Shelters/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VFileInput */ "./node_modules/vuetify/lib/components/VFileInput/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VSwitch */ "./node_modules/vuetify/lib/components/VSwitch/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_c2d9697a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_c2d9697a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */










_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VFileInput: vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_7__["VFileInput"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__["VForm"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_9__["VImg"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["VSelect"],VSwitch: vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_11__["VSwitch"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/components/Shelters/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/components/Shelters/Create.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/components/Shelters/Create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Shelters/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/components/Shelters/Create.vue?vue&type=template&id=c2d9697a&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/components/Shelters/Create.vue?vue&type=template&id=c2d9697a& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_c2d9697a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=c2d9697a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Shelters/Create.vue?vue&type=template&id=c2d9697a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_c2d9697a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_c2d9697a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);