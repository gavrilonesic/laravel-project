(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-modal-component"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cart/CartModalComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cart/CartModalComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {//
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
  props: ['checkoutUrl'],
  data: function data() {
    return {
      isOpen: false,
      loaded: false,
      showSuccessAlert: false,
      cartItems: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    var self = this;
    this.load();
    this.$root.$on('openCart', function () {
      self.open();
    });
    this.$root.$on('cartItemAdded', function (cartItem) {
      toast('New item added to your cart.');
      _this.showSuccessAlert = true; // if item doesnt exist in cart
      // push it to cart items list
      // else return new car item 

      var itemExists = _this.cartItems.filter(function (item) {
        return item.id === cartItem.id;
      }).length !== 0;

      if (itemExists) {
        _this.cartItems = _this.cartItems.map(function (item) {
          if (item.id === cartItem.id) {
            return cartItem;
          }

          return item;
        });
      } else {
        _this.cartItems.push(cartItem);
      }

      checkoutEcommerceEvent(_this.availabeCartItems, 1);

      _this.open();

      setTimeout(_this.hideSuccessAlert, 3000);
    });
  },
  methods: {
    openCheckoutLink: function openCheckoutLink() {
      location.href = this.checkoutUrl;
    },
    load: function load() {
      var self = this;
      $.ajax({
        url: '/cart',
        type: 'GET'
      }).done(function (response) {
        self.loaded = true;
        self.cartItems = response.cartItems;
        self.$root.$emit('cartLoaded', response);
      }).fail(function () {
        self.cartItems = [];
      });
    },
    open: function open() {
      if (this.loaded !== true) {
        this.load();
      }

      this.isOpen = true;
      var self = this;
      setTimeout(function () {
        $(self.$refs.cart).modal('show');
      }, 350);
    },
    close: function close() {
      this.isOpen = false;
      $(this.$refs.cart).modal('hide');
    },
    hideSuccessAlert: function hideSuccessAlert() {
      this.showSuccessAlert = false;
    }
  },
  computed: {
    isEmpty: function isEmpty() {
      return this.cartItems.filter(function (item) {
        return item.deleted === false;
      }).length === 0;
    },
    totalItems: function totalItems() {
      if (this.cartItems.length === 0) {
        return 0;
      }

      return this.cartItems.map(function (item) {
        if (item.deleted === true) {
          return 0;
        }

        return item.quantity;
      }).reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      });
    },
    availabeCartItems: function availabeCartItems() {
      if (this.cartItems.length === 0) {
        return [];
      }

      return this.cartItems.filter(function (item) {
        return item.deleted === false;
      });
    },
    cartOriginalSubtotal: function cartOriginalSubtotal() {
      if (this.cartItems.length === 0) {
        return 0;
      }

      return this.cartItems.map(function (item) {
        if (item.deleted === true) {
          return 0;
        }

        var price = item.attributes.price !== undefined && item.attributes.price !== null ? item.attributes.price : item.price;
        return price * item.quantity;
      }).reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      });
    },
    cartSubtotal: function cartSubtotal() {
      if (this.cartItems.length === 0) {
        return 0;
      }

      return this.cartItems.map(function (item) {
        if (item.deleted === true) {
          return 0;
        }

        return item.price * item.quantity;
      }).reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      });
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cart/CartModalComponent.vue?vue&type=template&id=08c59384&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cart/CartModalComponent.vue?vue&type=template&id=08c59384& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    "div",
    {
      ref: "cart",
      staticClass: "modal",
      attrs: { tabindex: "-1", role: "dialog" }
    },
    [
      _c(
        "div",
        { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header border-0 pb-0" }, [
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button", "aria-label": "Close" },
                  on: {
                    click: function($event) {
                      return _vm.close()
                    }
                  }
                },
                [
                  _c("span", { attrs: { "aria-hidden": "true" } }, [
                    _vm._v("×")
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "modal-body line-height-1-4 font-family-open-sans font-size-1rem"
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "row",
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        $event.preventDefault()
                      }
                    }
                  },
                  [
                    _vm.isEmpty
                      ? _c("div", { staticClass: "col-12" }, [
                          _c(
                            "div",
                            { staticClass: "alert alert-danger text-center" },
                            [
                              _vm._v(
                                "\n                                Your cart is empty.\n                            "
                              )
                            ]
                          )
                        ])
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12" }, [
                    _c(
                      "div",
                      { staticClass: "list-group" },
                      _vm._l(_vm.availabeCartItems, function(cartItem) {
                        return _c("cart-item-component", {
                          key: cartItem.id,
                          staticClass: "list-group-item p-0 border-secondary",
                          attrs: { item: cartItem }
                        })
                      }),
                      1
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            !_vm.isEmpty
              ? _c(
                  "div",
                  {
                    staticClass:
                      "modal-footer d-flex flex-row align-items-center justify-content-between border-0"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "font-weight-normal font-family-open-sans mb-0 h6"
                      },
                      [
                        _c(
                          "kbd",
                          { staticClass: "py-1 text-dark-2 bg-white" },
                          [
                            _c("span", [_vm._v("SUBTOTAL")]),
                            _vm._v(" "),
                            _vm.cartOriginalSubtotal !== _vm.cartSubtotal
                              ? _c("money-component", {
                                  staticClass:
                                    "text-decoration-line-through text-muted font-weight-normal font-family-open-sans mb-0 h6 mr-n1",
                                  attrs: { value: _vm.cartOriginalSubtotal }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _c("money-component", {
                              staticClass:
                                "text-dark font-weight-bolder font-family-open-sans mb-0 h5",
                              attrs: { value: _vm.cartSubtotal }
                            })
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "btn-group text-uppercase" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-secondary px-4 py-2 text-uppercase mt-3",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.close()
                            }
                          }
                        },
                        [
                          _c("small", { staticClass: "py-1 d-block" }, [
                            _vm._v("Close")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-highlight px-4 py-2 text-uppercase mt-3",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.openCheckoutLink()
                            }
                          }
                        },
                        [
                          _c("small", { staticClass: "py-1 d-block" }, [
                            _vm._v("Checkout")
                          ])
                        ]
                      )
                    ])
                  ]
                )
              : _vm._e()
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
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

/***/ "./resources/js/components/cart/CartModalComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/cart/CartModalComponent.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CartModalComponent_vue_vue_type_template_id_08c59384___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartModalComponent.vue?vue&type=template&id=08c59384& */ "./resources/js/components/cart/CartModalComponent.vue?vue&type=template&id=08c59384&");
/* harmony import */ var _CartModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartModalComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cart/CartModalComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CartModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CartModalComponent_vue_vue_type_template_id_08c59384___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CartModalComponent_vue_vue_type_template_id_08c59384___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cart/CartModalComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cart/CartModalComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/cart/CartModalComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CartModalComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cart/CartModalComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cart/CartModalComponent.vue?vue&type=template&id=08c59384&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/cart/CartModalComponent.vue?vue&type=template&id=08c59384& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartModalComponent_vue_vue_type_template_id_08c59384___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CartModalComponent.vue?vue&type=template&id=08c59384& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cart/CartModalComponent.vue?vue&type=template&id=08c59384&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartModalComponent_vue_vue_type_template_id_08c59384___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartModalComponent_vue_vue_type_template_id_08c59384___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);