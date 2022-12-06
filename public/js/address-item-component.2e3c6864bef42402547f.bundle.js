(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-item-component"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/address/AddressItemComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/address/AddressItemComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/request */ "./resources/js/api/request.js");
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
  props: ['address', 'addressType', 'selectedAddressId', 'city', 'state'],
  data: function data() {
    return {
      addressId: 0
    };
  },
  created: function created() {
    if (parseInt(this.selectedAddressId) === this.address.id) {
      this.addressId = this.address.id;
    }
  },
  methods: {
    updateTaxAndAddress: function updateTaxAndAddress() {
      var _this = this;

      _api_request__WEBPACK_IMPORTED_MODULE_0__["default"].update(route('customer.address.update'), this.jsonRequestParam).then(function (response) {
        _this.$root.$emit('cartTaxUpdated', {
          zipcode: _this.address.zipcode,
          addressType: _this.addressType
        });
      })["catch"](function (response) {
        alert('Something went wrong!');
      });
    }
  },
  computed: {
    jsonRequestParam: function jsonRequestParam() {
      if (this.addressType == 'shipping') {
        return {
          shipping_address: this.addressId
        };
      }

      return {
        billing_address: this.addressId
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/address/AddressItemComponent.vue?vue&type=template&id=58cc1c3c&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/address/AddressItemComponent.vue?vue&type=template&id=58cc1c3c& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    "label",
    {
      staticClass:
        "mb-0 list-group-item list-group-item-secondary list-group-item-action d-flex justify-content-between align-items-center",
      attrs: { for: "address-" + _vm.address.id }
    },
    [
      _c("span", { staticClass: "text-capitalize flex-fill flex-grow-1" }, [
        _vm.address.address_1 != ""
          ? _c("span", [
              _vm._v("\n\t\t\t" + _vm._s(_vm.address.address_1) + " "),
              _c("br")
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.address.address_2 !== null && _vm.address.address_2 != ""
          ? _c("span", [
              _vm._v("\n\t\t\t" + _vm._s(_vm.address.address_2) + " "),
              _c("br")
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.city !== null && _vm.city != ""
          ? _c("span", [_vm._v("\n\t\t\t" + _vm._s(_vm.city) + " \n\t\t")])
          : _vm._e(),
        _vm._v(" "),
        _vm.state !== null && _vm.state != ""
          ? _c("span", [_vm._v("\n\t\t\t" + _vm._s(_vm.state.abv) + " \n\t\t")])
          : _vm._e(),
        _vm._v(" "),
        _vm.address.zipcode !== null && _vm.address.zipcode != ""
          ? _c("span", [
              _vm._v("\n\t\t\t" + _vm._s(_vm.address.zipcode) + "\n\t\t")
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "flex-shrink-1 text-right ml-2" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.addressId,
              expression: "addressId"
            }
          ],
          attrs: {
            id: "address-" + _vm.address.id,
            name: _vm.addressType + "_address",
            type: "radio"
          },
          domProps: {
            checked: parseInt(_vm.selectedAddressId) === _vm.address.id,
            value: _vm.address.id,
            checked: _vm._q(_vm.addressId, _vm.address.id)
          },
          on: {
            change: [
              function($event) {
                _vm.addressId = _vm.address.id
              },
              function($event) {
                return _vm.updateTaxAndAddress()
              }
            ]
          }
        })
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/api/request.js":
/*!*************************************!*\
  !*** ./resources/js/api/request.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var client = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: '/'
});
/* harmony default export */ __webpack_exports__["default"] = ({
  all: function all(path, params) {
    return client.get(path, params);
  },
  find: function find(path, id) {
    return client.get("".concat(path, "/").concat(id));
  },
  add: function add(path, data) {
    return client.post("".concat(path, "/"), data);
  },
  update: function update(path, id, data) {
    if (data !== undefined && id !== undefined) {
      return client.put("".concat(path, "/").concat(id), data);
    }

    return client.put("".concat(path), id);
  },
  "delete": function _delete(path, id) {
    return client["delete"]("".concat(path, "/").concat(id));
  }
});

/***/ }),

/***/ "./resources/js/components/address/AddressItemComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/address/AddressItemComponent.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddressItemComponent_vue_vue_type_template_id_58cc1c3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddressItemComponent.vue?vue&type=template&id=58cc1c3c& */ "./resources/js/components/address/AddressItemComponent.vue?vue&type=template&id=58cc1c3c&");
/* harmony import */ var _AddressItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddressItemComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/address/AddressItemComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddressItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddressItemComponent_vue_vue_type_template_id_58cc1c3c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddressItemComponent_vue_vue_type_template_id_58cc1c3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/address/AddressItemComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/address/AddressItemComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/address/AddressItemComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddressItemComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/address/AddressItemComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/address/AddressItemComponent.vue?vue&type=template&id=58cc1c3c&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/address/AddressItemComponent.vue?vue&type=template&id=58cc1c3c& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressItemComponent_vue_vue_type_template_id_58cc1c3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddressItemComponent.vue?vue&type=template&id=58cc1c3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/address/AddressItemComponent.vue?vue&type=template&id=58cc1c3c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressItemComponent_vue_vue_type_template_id_58cc1c3c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressItemComponent_vue_vue_type_template_id_58cc1c3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);