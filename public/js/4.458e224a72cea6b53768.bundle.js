(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shipping/ApiShippingOptions.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shipping/ApiShippingOptions.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['title'],
  data: function data() {
    return {
      shippingMethod: 0,
      shippingOptions: 0,
      loading: true,
      refreshAjaxRequest: null,
      ajaxRequest: null
    };
  },
  watch: {
    shippingMethod: function shippingMethod(newValue) {
      this.$emit('shippingSelected', newValue);
      localStorage.setItem('selected.shipping', JSON.stringify(newValue));
    }
  },
  mounted: function mounted() {
    var self = this;
    this.refresh();

    try {
      this.shippingMethod = JSON.parse(localStorage.getItem('selected.shipping'));
    } catch (e) {
      this.shippingMethod = 0;
    }

    if (this.shippingMethod === null || this.shippingMethod === undefined) {
      this.shippingMethod = 0;
    }

    if (!(_typeof(this.shippingMethod) === 'object' && this.shippingMethod.serviceCode !== undefined)) {
      this.shippingMethod = 0;
    }

    this.$root.$on('cartItemUpdated', function () {
      self.refresh();
    });
  },
  methods: {
    updateShipping: function updateShipping() {
      var self = this;

      if (this.shippingMethod === 0) {
        return false;
      }

      if (this.ajaxRequest !== null) {
        this.ajaxRequest.abort();
      }

      $('.jq-confirm-checkout').attr('disabled', true);
      this.ajaxRequest = $.ajax({
        url: 'shipping',
        type: 'PUT',
        data: this.shippingMethod
      }).done(function (response) {
        try {
          self.$root.$emit('shippingUpdated', self.shippingMethod);
        } catch (e) {}
      }).always(function () {});
    },
    refresh: function refresh() {
      var self = this;
      this.loading = true;
      $('.jq-confirm-checkout').attr('disabled', true);

      if (this.refreshAjaxRequest !== null) {
        this.refreshAjaxRequest.abort();
        this.loading = true;
      }

      self.shippingOptions = [];
      this.refreshAjaxRequest = $.ajax({
        url: '/shipping',
        type: 'GET'
      }).done(function (response) {
        if (response.length === 0) {
          $('#credit-card-container').remove();
          self.shippingOptions = Object.assign({}, self.shippingOptions, []);
          self.shippingOptions = [];
        } else {
          try {
            self.shippingOptions = Object.assign({}, self.shippingOptions, response);

            try {
              if (self.shippingMethod !== undefined && self.shippingMethod !== 0 && _typeof(self.shippingMethod) === 'object') {
                if (self.shippingOptions[self.shippingMethod.slug] !== undefined) {
                  self.shippingMethod = Object.assign({}, self.shippingMethod, self.shippingOptions[self.shippingMethod.slug]);
                }
              }
            } catch (e) {}

            self.updateShipping();
          } catch (e) {}
        }
      }).fail(function () {
        self.shippingOptions = [];
      }).always(function (response) {
        self.loading = false;
      });
    }
  },
  computed: {
    isShippingOptionsAvailable: function isShippingOptionsAvailable() {
      if (this.shippingOptions === 0) {
        window.onbeforeunload = undefined;
        return false;
      }

      if (Object.keys(this.shippingOptions).length === 0 && this.shippingOptions.constructor === Object) {
        window.onbeforeunload = undefined;
        return false;
      }

      if (this.shippingOptions.length === 0) {
        window.onbeforeunload = undefined;
        return false;
      }

      return true;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shipping/ApiShippingOptions.vue?vue&type=template&id=2a56233c&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shipping/ApiShippingOptions.vue?vue&type=template&id=2a56233c& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    _vm.isShippingOptionsAvailable
      ? _c("div", { staticClass: "mb-4" }, [
          _c(
            "h4",
            {
              staticClass: "d-flex justify-content-between align-items-end mb-1"
            },
            [
              _c(
                "span",
                { staticClass: "font-weight-normal text-dark h4 mb-0" },
                [_vm._v(_vm._s(_vm.title))]
              )
            ]
          ),
          _vm._v(" "),
          _c("hr", { staticClass: "border-muted-1 mt-0" })
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.loading && _vm.isShippingOptionsAvailable === false
      ? _c("div", { staticClass: "alert alert-primary rounded-lg w-100" }, [
          _vm._m(0)
        ])
      : !_vm.isShippingOptionsAvailable
      ? _c("div", { staticClass: "alert alert-danger rounded-lg w-100" }, [
          _c("p", [
            _vm._v("No valid shipping methods found for your location.")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-0 text-right" }, [
            _c(
              "a",
              {
                staticClass: "btn btn-outline-danger",
                attrs: { href: _vm.route("guest.checkout.index").url() }
              },
              [_vm._v("Edit my address")]
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.isShippingOptionsAvailable
      ? _c(
          "ul",
          { staticClass: "list-group list-unstyled w-100" },
          _vm._l(_vm.shippingOptions, function(shipping, slug) {
            return _c("li", [
              _c(
                "label",
                {
                  staticClass:
                    "align-items-center border-secondary list-group-item py-1 rounded-lg mb-1 list-group-item-secondary  list-group-item-action d-flex justify-content-between",
                  attrs: { for: "shipping-" + slug }
                },
                [
                  _c(
                    "span",
                    {
                      staticClass:
                        "text-capitalize d-flex flex-column justify-content-center align-items-start flex-fill text-dark flex-grow-1",
                      staticStyle: { "min-height": "49.5px" }
                    },
                    [
                      _c("span", { staticClass: "font-weight-bold" }, [
                        _vm._v(_vm._s(shipping.label))
                      ]),
                      _vm._v(" "),
                      shipping.deliveryDate !== undefined
                        ? _c("small", { staticClass: "text-muted" }, [
                            _vm._v(
                              "Delivered on " + _vm._s(shipping.deliveryDate)
                            )
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "code",
                    {
                      staticClass:
                        "flex-shrink-1 flex-fill text-right font-weight-bold py-0 text-dark"
                    },
                    [
                      shipping.cost > 0
                        ? _c("span", [
                            _vm.loading === false
                              ? _c("span", [
                                  _vm._v(
                                    _vm._s(_vm._f("currency")(shipping.cost))
                                  )
                                ])
                              : _c("span", { staticClass: "text-muted" }, [
                                  _vm._v("\n\t\t\t\t\t\t\tLoading.. "),
                                  _c("i", {
                                    staticClass: "fas fa-spinner fa-pulse"
                                  })
                                ])
                          ])
                        : shipping.cost === 0
                        ? _c("span", { staticClass: "text-primary" }, [
                            _vm._v("FREE SHIPPING")
                          ])
                        : _c("span", [_vm._v("\n\t\t\t\t\t\t--\n\t\t\t\t\t")])
                    ]
                  ),
                  _vm._v(" "),
                  _vm.loading === false
                    ? _c(
                        "span",
                        { staticClass: "flex-shrink-1 text-right ml-2 d-flex" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.shippingMethod,
                                expression: "shippingMethod"
                              }
                            ],
                            attrs: {
                              id: "shipping-" + slug,
                              name: "shipping_id",
                              disabled: _vm.loading,
                              type: "radio"
                            },
                            domProps: {
                              value: shipping,
                              checked: _vm._q(_vm.shippingMethod, shipping)
                            },
                            on: {
                              change: [
                                function($event) {
                                  _vm.shippingMethod = shipping
                                },
                                function($event) {
                                  return _vm.updateShipping()
                                }
                              ]
                            }
                          })
                        ]
                      )
                    : _vm._e()
                ]
              )
            ])
          }),
          0
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "d-flex flex-row align-items-center justify-content-between"
      },
      [
        _c("div", { staticClass: "mr-3" }, [
          _c("strong", { staticClass: "font-weight-semi-bold" }, [
            _vm._v("Please wait, Looking for available shipping options")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "fa-2x" }, [
          _c("i", { staticClass: "fas fa-spinner fa-pulse" })
        ])
      ]
    )
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

/***/ "./resources/js/components/shipping/ApiShippingOptions.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/shipping/ApiShippingOptions.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApiShippingOptions_vue_vue_type_template_id_2a56233c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiShippingOptions.vue?vue&type=template&id=2a56233c& */ "./resources/js/components/shipping/ApiShippingOptions.vue?vue&type=template&id=2a56233c&");
/* harmony import */ var _ApiShippingOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApiShippingOptions.vue?vue&type=script&lang=js& */ "./resources/js/components/shipping/ApiShippingOptions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ApiShippingOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ApiShippingOptions_vue_vue_type_template_id_2a56233c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ApiShippingOptions_vue_vue_type_template_id_2a56233c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/shipping/ApiShippingOptions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/shipping/ApiShippingOptions.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/shipping/ApiShippingOptions.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiShippingOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ApiShippingOptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shipping/ApiShippingOptions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiShippingOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shipping/ApiShippingOptions.vue?vue&type=template&id=2a56233c&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/shipping/ApiShippingOptions.vue?vue&type=template&id=2a56233c& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiShippingOptions_vue_vue_type_template_id_2a56233c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ApiShippingOptions.vue?vue&type=template&id=2a56233c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shipping/ApiShippingOptions.vue?vue&type=template&id=2a56233c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiShippingOptions_vue_vue_type_template_id_2a56233c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiShippingOptions_vue_vue_type_template_id_2a56233c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);