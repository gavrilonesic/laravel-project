(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-cart-component"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductCartComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/ProductCartComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: ['product'],
  methods: {
    reduceQuantity: function reduceQuantity() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      } else {
        this.quantity = 1;
      }
    },
    raiseQuantity: function raiseQuantity() {
      this.selectedQuantity++;
    }
  },
  data: function data() {
    return {
      quantity: 1,
      invalidQuantity: false
    };
  },
  watch: {
    selectedQuantity: function selectedQuantity(newValue) {
      this.$emit('selectedQuantityUpdated', newValue);
    }
  },
  computed: {
    originalTotal: function originalTotal() {
      return this.selectedQuantity * this.product.original_price;
    },
    total: function total() {
      return this.selectedQuantity * this.product.price;
    },
    selectedQuantity: {
      get: function get() {
        return this.quantity;
      },
      // setter
      set: function set(newValue) {
        if (Number.parseInt(newValue) < 999 && Number.parseInt(newValue) > 0) {
          this.quantity = Number.parseInt(newValue);
          this.invalidQuantity = false;
        } else {
          this.invalidQuantity = true;
          toast('Invalid <span class="text-danger">product quantity</span>, please set a valid quantity then continue.');
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductCartComponent.vue?vue&type=template&id=20df2d19&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/ProductCartComponent.vue?vue&type=template&id=20df2d19& ***!
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
  return _c("div", [
    _vm.product.availability !== null
      ? _c(
          "div",
          {
            staticClass:
              "d-flex flex-row align-items-center justify-content-between w-100"
          },
          [
            _c("div", { staticClass: "btn-group mr-3 mr-md-2 mr-lg-3" }, [
              _c(
                "button",
                {
                  staticClass: "btn text-hover-darker rounded-0 px-0",
                  attrs: { type: "button" },
                  on: { click: _vm.reduceQuantity }
                },
                [_c("i", { staticClass: "fas fa-minus" })]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.number",
                    value: _vm.selectedQuantity,
                    expression: "selectedQuantity",
                    modifiers: { number: true }
                  }
                ],
                staticClass:
                  "form-control text-center border-0 font-size-1-3rem mb-0 p-0 w-44px",
                style: _vm.invalidQuantity ? "background-color: #ffa4a4" : "",
                attrs: { step: "1", type: "text", value: "1" },
                domProps: { value: _vm.selectedQuantity },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.selectedQuantity = _vm._n($event.target.value)
                  },
                  blur: function($event) {
                    return _vm.$forceUpdate()
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn text-hover-darker rounded-0 px-0",
                  attrs: { type: "button" },
                  on: { click: _vm.raiseQuantity }
                },
                [_c("i", { staticClass: "fas fa-plus" })]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "d-flex flex-nowrap align-items-center justify-content-between"
              },
              [
                _c(
                  "div",
                  { staticClass: "mr-3 pr-1 min-w-90px" },
                  [
                    _vm.product.original_price != _vm.product.price &&
                    _vm.product.original_price > 0
                      ? _c("money-component", {
                          staticClass:
                            "text-decoration-line-through text-muted font-weight-bolder font-family-open-sans mb-0 h5",
                          attrs: { value: _vm.originalTotal }
                        })
                      : _vm._e(),
                    _vm._v("\n\t\t\t\t\t \n            \t\t"),
                    _c("money-component", {
                      staticClass:
                        "text-dark font-weight-bolder font-family-open-sans mb-0 h3",
                      attrs: { value: _vm.total }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-nowrap" },
                  [
                    _c(
                      "add-to-cart-component",
                      {
                        attrs: {
                          quantity: _vm.selectedQuantity,
                          "product-id": _vm.product.id
                        }
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-highlight py-2 text-uppercase btn-lg min-w-180px min-w-sm-210px min-h-44px"
                          },
                          [
                            _c(
                              "small",
                              {
                                staticClass:
                                  "py-1 d-block font-weight-bold font-size-0-9rem"
                              },
                              [_vm._v("Add To Cart")]
                            )
                          ]
                        )
                      ]
                    )
                  ],
                  1
                )
              ]
            )
          ]
        )
      : _c("div", { staticClass: "d-block w-100" }, [_vm._m(0)])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-danger" }, [
      _c("p", { staticClass: "m-0" }, [_vm._v("Out of Stock")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/product/ProductCartComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/product/ProductCartComponent.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductCartComponent_vue_vue_type_template_id_20df2d19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductCartComponent.vue?vue&type=template&id=20df2d19& */ "./resources/js/components/product/ProductCartComponent.vue?vue&type=template&id=20df2d19&");
/* harmony import */ var _ProductCartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductCartComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/product/ProductCartComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductCartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductCartComponent_vue_vue_type_template_id_20df2d19___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductCartComponent_vue_vue_type_template_id_20df2d19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/product/ProductCartComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/product/ProductCartComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/product/ProductCartComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductCartComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductCartComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/product/ProductCartComponent.vue?vue&type=template&id=20df2d19&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/product/ProductCartComponent.vue?vue&type=template&id=20df2d19& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCartComponent_vue_vue_type_template_id_20df2d19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductCartComponent.vue?vue&type=template&id=20df2d19& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductCartComponent.vue?vue&type=template&id=20df2d19&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCartComponent_vue_vue_type_template_id_20df2d19___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCartComponent_vue_vue_type_template_id_20df2d19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);