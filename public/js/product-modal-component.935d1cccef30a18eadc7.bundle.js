(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-modal-component"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductModalComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/ProductModalComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {var _methods$data$mounted;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = (_methods$data$mounted = {
  methods: {
    reduceQuantity: function reduceQuantity() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
    raiseQuantity: function raiseQuantity() {
      if (this.quantity < this.selectedProduct.quantity) {
        this.quantity += 1;
      }
    }
  },
  data: function data() {
    return {
      loading: false,
      quantity: 1,
      product: [],
      selectedProduct: [],
      products: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on('showProductChildren', function (product, products) {
      _this.product = product;
      _this.products = products;

      if (_this.products !== undefined && _this.products !== null && _this.products.length === 0) {
        _this.getProductOptions(_this.product);
      }

      _this.selectedProduct = _this.product;
      setTimeout(function () {
        $('#product-modal-component').modal('show');
      }, 250);
    });
    this.$root.$on('cartItemAdded', function () {
      $('#product-modal-component').modal('hide');
      var self = _this;
      setTimeout(function () {
        self.product = [];
        self.products = [];
        self.selectedProduct = [];
      }, 250);
    });
  }
}, _defineProperty(_methods$data$mounted, "methods", {
  getProductOptions: function getProductOptions(product) {
    var self = this;
    self.loading = true;
    $.ajax({
      url: route('product.index', product.id),
      type: 'POST',
      dataType: 'json'
    }).done(function (response) {
      self.products = response;
    }).fail(function (response) {
      self.products = [];
    }).always(function () {
      self.loading = false;
    });
  },
  close: function close() {
    $('#product-modal-component').modal('hide');
    var self = this;
    setTimeout(function () {
      self.loading = false;
      self.quantity = 1;
      self.product = [];
      self.selectedProduct = [];
      self.products = [];
    }, 250);
  }
}), _defineProperty(_methods$data$mounted, "computed", {
  currentProduct: function currentProduct() {
    if (this.selectedProduct === undefined || this.selectedProduct.id === this.product.id || this.selectedProduct.length === 0) {
      return this.product;
    }

    return this.selectedProduct;
  },
  arrivalDate: function arrivalDate() {
    var date = new Date();
    var result = new Date();
    result.setDate(date.getDate() + 5);
    return result.toLocaleString('en-us', {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    });
  }
}), _methods$data$mounted);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductModalComponent.vue?vue&type=template&id=475a66b8&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/ProductModalComponent.vue?vue&type=template&id=475a66b8& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      staticClass: "modal",
      attrs: {
        tabindex: "-1",
        "data-keyboard": "true",
        role: "dialog",
        "aria-hidden": "true",
        id: "product-modal-component",
        "data-backdrop": "static"
      }
    },
    [
      _c(
        "div",
        { staticClass: "modal-dialog modal-xl", attrs: { role: "document" } },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header pb-0 border-0" }, [
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button", "aria-label": "Close" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
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
            _c("div", { staticClass: "modal-body pt-0 pb-3 min-h-md-420px" }, [
              _c(
                "div",
                {
                  staticClass:
                    "px-3 row align-items-center justify-content-star"
                },
                [
                  _vm.selectedProduct.id !== undefined
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "col-lg-4 col-xl-6 mx-auto mb-0 w-100 text-center align-self-center align-items-center d-flex"
                        },
                        [
                          _c("img", {
                            directives: [
                              {
                                name: "lazy",
                                rawName: "v-lazy",
                                value:
                                  "/storage/" + _vm.selectedProduct.main_image,
                                expression:
                                  "'/storage/' + selectedProduct.main_image"
                              }
                            ],
                            staticClass:
                              "d-block h-auto mx-auto img-fluid w-100",
                            attrs: {
                              "data-error": "/storage/notfound.png",
                              "data-loading": "/images/px.png",
                              src: "/images/px.png",
                              "data-src":
                                "/storage/" + _vm.selectedProduct.main_image
                            }
                          })
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.selectedProduct.id !== undefined
                    ? _c(
                        "div",
                        { staticClass: "col-lg-8 col-xl-6 align-self-start" },
                        [
                          _c(
                            "h1",
                            {
                              staticClass:
                                "d-none d-sm-block font-weight-light text-dark mb-3 line-height-1-2 h3"
                            },
                            [_vm._v(_vm._s(_vm.selectedProduct.name))]
                          ),
                          _vm._v(" "),
                          _vm.selectedProduct.brand !== undefined &&
                          _vm.selectedProduct.brand !== null &&
                          _vm.selectedProduct.brand.name !== undefined
                            ? _c(
                                "h2",
                                {
                                  staticClass: "h6 font-weight-bold",
                                  staticStyle: { "min-height": "20px" }
                                },
                                [
                                  _c("span", [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t" +
                                        _vm._s(_vm.selectedProduct.brand.name) +
                                        "\n\t\t\t\t\t\t\t"
                                    )
                                  ])
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex flex-row align-items-center mb-3"
                            },
                            [
                              _c("star-rating", {
                                attrs: {
                                  increment: 0.5,
                                  "read-only": true,
                                  "show-rating": false,
                                  "star-size": 15,
                                  "active-color": "#FEB731"
                                },
                                model: {
                                  value: _vm.selectedProduct.review_avg,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.selectedProduct,
                                      "review_avg",
                                      $$v
                                    )
                                  },
                                  expression: "selectedProduct.review_avg"
                                }
                              }),
                              _vm._v("\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t"),
                              _vm.selectedProduct.review_count > 0
                                ? _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-muted-4 mt-1 font-family-open-sans small",
                                      on: {
                                        click: function($event) {
                                          return _vm.scrollTo("#reviews")
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(
                                            _vm.selectedProduct.review_count
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t"
                                      ),
                                      _vm.selectedProduct.review_count === 1
                                        ? _c("span", [_vm._v("Review")])
                                        : _c("span", [_vm._v("Reviews")]),
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t"
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.selectedProduct.description_text !== "" &&
                          _vm.selectedProduct.description_text !== null
                            ? _c("div", { staticClass: "text-left" }, [
                                _vm.product !== null
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "font-family-open-sans lead line-height-1-1 font-weight-light"
                                      },
                                      [
                                        _c("small", [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t\t" +
                                              _vm._s(
                                                _vm._f("truncate")(
                                                  _vm.selectedProduct
                                                    .description_text,
                                                  220
                                                )
                                              ) +
                                              " "
                                          ),
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "font-weight-bold text-decoration-underline text-nowrap",
                                              attrs: {
                                                href:
                                                  _vm.route(
                                                    "product.show",
                                                    _vm.selectedProduct.slug
                                                  ) +
                                                  "#product-description-" +
                                                  _vm.selectedProduct.id
                                              }
                                            },
                                            [_vm._v("See more")]
                                          )
                                        ])
                                      ]
                                    )
                                  : _vm._e()
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "my-4 align-items-center text-left"
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [_c("zipcode-component")],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "my-4 text-left" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "font-weight-bolder text-dark mb-1 d-block"
                                },
                                [_vm._v("Availability:")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "text-muted-3 font-weight-bolder font-family-open-sans"
                                },
                                [
                                  _vm.selectedProduct.availability !== null &&
                                  _vm.selectedProduct.availability.id === 1
                                    ? _c(
                                        "span",
                                        { staticClass: "text-green" },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-check-circle"
                                          }),
                                          _vm._v(
                                            " In stock.\n\t\t\t\t\t\t\t\t\t"
                                          )
                                        ]
                                      )
                                    : _vm.selectedProduct.availability !==
                                        null &&
                                      _vm.selectedProduct.availability.id === 0
                                    ? _c(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-times-circle"
                                          }),
                                          _vm._v(
                                            " Out of stock\n\t\t\t\t\t\t\t\t\t"
                                          )
                                        ]
                                      )
                                    : _c(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-times-circle"
                                          }),
                                          _vm._v(
                                            " Out of stock\n\t\t\t\t\t\t\t\t\t"
                                          )
                                        ]
                                      )
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "my-4 text-left" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "font-weight-bolder text-dark mb-1 d-block"
                                },
                                [_vm._v("Estimated Arrival Date: ")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "text-muted-3" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "cursor-pointer text-decoration-underline font-family-open-sans"
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\tArrives by " +
                                        _vm._s(_vm.arrivalDate) +
                                        "\n\t\t\t\t\t\t\t\t\t"
                                    )
                                  ]
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _vm.products.length > 0
                            ? _c("div", { staticClass: "my-4 text-left" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-weight-bolder text-dark mb-1 d-block"
                                    },
                                    [_vm._v("Count: ")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "btn-group-toggle",
                                      attrs: { "data-toggle": "buttons" }
                                    },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "btn font-family-open-sans btn-white rounded px-3 active",
                                          on: {
                                            click: function($event) {
                                              _vm.selectedProduct = _vm.product
                                            }
                                          }
                                        },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.selectedProduct,
                                                expression: "selectedProduct"
                                              }
                                            ],
                                            attrs: {
                                              name: "option",
                                              type: "radio"
                                            },
                                            domProps: {
                                              value: _vm.product,
                                              checked: _vm._q(
                                                _vm.selectedProduct,
                                                _vm.product
                                              )
                                            },
                                            on: {
                                              change: function($event) {
                                                _vm.selectedProduct =
                                                  _vm.product
                                              }
                                            }
                                          }),
                                          _vm._v(
                                            " \n\t\t\t\t\t\t\t\t    \t\t" +
                                              _vm._s(_vm.product.option_name) +
                                              "\n\t\t\t\t\t\t\t\t  \t"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.products, function(
                                        productItem
                                      ) {
                                        return _c(
                                          "label",
                                          {
                                            staticClass:
                                              "btn font-family-open-sans btn-white rounded px-3",
                                            on: {
                                              click: function($event) {
                                                _vm.selectedProduct = productItem
                                              }
                                            }
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.selectedProduct,
                                                  expression: "selectedProduct"
                                                }
                                              ],
                                              attrs: {
                                                name: "option",
                                                type: "radio"
                                              },
                                              domProps: {
                                                value: productItem,
                                                checked: _vm._q(
                                                  _vm.selectedProduct,
                                                  productItem
                                                )
                                              },
                                              on: {
                                                change: function($event) {
                                                  _vm.selectedProduct = productItem
                                                }
                                              }
                                            }),
                                            _vm._v(
                                              " \n\t\t\t\t\t\t\t\t    \t\t" +
                                                _vm._s(
                                                  productItem.option_name
                                                ) +
                                                "\n\t\t\t\t\t\t\t\t  \t"
                                            )
                                          ]
                                        )
                                      })
                                    ],
                                    2
                                  )
                                ])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.loading
                            ? _c("div", { staticClass: "my-4" }, [
                                _c("i", {
                                  staticClass: "fas fa-spinner fa-pulse fa-2x"
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("hr", { staticClass: "border-dark" }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex justify-content-end mt-auto mb-0"
                            },
                            [
                              _c("product-cart-component", {
                                staticClass:
                                  "d-flex flex-row align-items-center justify-content-center mr-auto ml-0",
                                attrs: { product: _vm.selectedProduct }
                              }),
                              _vm._v(" "),
                              _c("add-to-favorites", {
                                attrs: { product: _vm.selectedProduct }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("hr", { staticClass: "border-dark" })
                        ]
                      )
                    : _vm._e()
                ]
              )
            ])
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

/***/ "./resources/js/components/product/ProductModalComponent.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/product/ProductModalComponent.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductModalComponent_vue_vue_type_template_id_475a66b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductModalComponent.vue?vue&type=template&id=475a66b8& */ "./resources/js/components/product/ProductModalComponent.vue?vue&type=template&id=475a66b8&");
/* harmony import */ var _ProductModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductModalComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/product/ProductModalComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductModalComponent_vue_vue_type_template_id_475a66b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductModalComponent_vue_vue_type_template_id_475a66b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/product/ProductModalComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/product/ProductModalComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/product/ProductModalComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductModalComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductModalComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/product/ProductModalComponent.vue?vue&type=template&id=475a66b8&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/product/ProductModalComponent.vue?vue&type=template&id=475a66b8& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductModalComponent_vue_vue_type_template_id_475a66b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductModalComponent.vue?vue&type=template&id=475a66b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductModalComponent.vue?vue&type=template&id=475a66b8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductModalComponent_vue_vue_type_template_id_475a66b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductModalComponent_vue_vue_type_template_id_475a66b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);