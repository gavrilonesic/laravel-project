(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-page-component"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductPageComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/ProductPageComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['product', 'options', 'startPage'],
  data: function data() {
    return {
      selectedProduct: this.product,
      selectedQuantity: 1
    };
  },
  methods: {
    scrollTo: function scrollTo(elementId) {
      if ($(elementId).length === 0) {
        return false;
      }

      $([document.documentElement, document.body]).animate({
        scrollTop: $(elementId).offset().top
      }, 20);
    }
  },
  computed: {
    arrivalDate: function arrivalDate() {
      var date = new Date();
      var result = new Date();
      result.setDate(date.getDate() + 5);
      return result.toLocaleString('en-us', {
        weekday: 'long',
        month: 'short',
        day: 'numeric'
      });
    },
    mainImageUrl: function mainImageUrl() {
      var url = window.location.protocol + '//' + window.location.host;
      var img = '' + this.selectedProduct.main_image;
      img = img.replace(url, '');
      var join = img[0] === '/' ? '' : '/';
      return url + join + img;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductPageComponent.vue?vue&type=style&index=0&id=2113120a&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/ProductPageComponent.vue?vue&type=style&index=0&id=2113120a&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.tab-content.font-weight-normal b[data-v-2113120a], .tab-content.font-weight-normal strong[data-v-2113120a]{\n\tfont-weight: 500 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductPageComponent.vue?vue&type=style&index=0&id=2113120a&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/ProductPageComponent.vue?vue&type=style&index=0&id=2113120a&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductPageComponent.vue?vue&type=style&index=0&id=2113120a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductPageComponent.vue?vue&type=style&index=0&id=2113120a&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductPageComponent.vue?vue&type=template&id=2113120a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/ProductPageComponent.vue?vue&type=template&id=2113120a&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "col-12 d-block d-sm-none" },
      [_vm._t("breadcrumb")],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col-12 d-block d-sm-none" }, [
      _c("h2", { staticClass: "h2 mt-3 font-size-1-3rem line-height-1-8rem" }, [
        _vm._v(_vm._s(_vm.selectedProduct.name))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-5 col-lg-6" }, [
      _vm.selectedProduct.status !== 1
        ? _c("div", [
            _vm.selectedProduct.status === 0
              ? _c("div", [_vm._m(0)])
              : _vm.selectedProduct.status === 2
              ? _c("div", [
                  _c(
                    "div",
                    { staticClass: "alert alert-warning text-center" },
                    [
                      _vm._v(
                        "\n\t\t\t\t\tDraft Product, not published yet.\n\t\t\t\t"
                      )
                    ]
                  )
                ])
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "product--image__wrapper alert alert-light text-center d-flex flex-column align-items-center"
        },
        [
          _c("product-images-component", {
            attrs: { product: _vm.selectedProduct }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "mt-3 mb-2 mb-md-0 text-center" }, [
        _c("ul", { staticClass: "list-inline small" }, [
          _c("li", { staticClass: "list-inline-item px-1" }, [
            _c(
              "a",
              {
                staticClass: "text-muted-2",
                attrs: {
                  target: "_blank",
                  href:
                    "https://www.facebook.com/sharer/sharer.php?u=" +
                    _vm.route("product.show", _vm.selectedProduct.slug)
                }
              },
              [_c("i", { staticClass: "fab fa-2x fa-facebook-square" })]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-inline-item px-1" }, [
            _c(
              "a",
              {
                staticClass: "text-muted-2",
                attrs: {
                  target: "_blank",
                  href:
                    "https://twitter.com/intent/tweet?text=" +
                    _vm.route("product.show", _vm.selectedProduct.slug)
                }
              },
              [_c("i", { staticClass: "fab fa-2x fa-twitter-square" })]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-inline-item px-1" }, [
            _c(
              "a",
              {
                staticClass: "text-muted-2",
                attrs: {
                  target: "_blank",
                  href:
                    "http://pinterest.com/pin/create/button/?url=" +
                    _vm.route("product.show", _vm.selectedProduct.slug) +
                    "&media=" +
                    _vm.mainImageUrl +
                    "&description=" +
                    _vm.selectedProduct.name
                }
              },
              [_c("i", { staticClass: "fab fa-2x fa-pinterest-square" })]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-7 col-lg-6 min-h-md-500px" },
      [
        _c(
          "div",
          { staticClass: "d-none d-sm-block" },
          [_vm._t("breadcrumb")],
          2
        ),
        _vm._v(" "),
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
                    "\n\t\t\t\t" +
                      _vm._s(_vm.selectedProduct.brand.name) +
                      "\n\t\t\t"
                  )
                ])
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "d-flex flex-row align-items-center mb-3" },
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
                  _vm.$set(_vm.selectedProduct, "review_avg", $$v)
                },
                expression: "selectedProduct.review_avg"
              }
            }),
            _vm._v("\n\t\t\t \n\t\t\t"),
            _vm.selectedProduct.review_count > 0
              ? _c(
                  "span",
                  {
                    staticClass:
                      "text-muted-4 mt-1 font-family-open-sans small cursor-pointer text-decoration-underline",
                    on: {
                      click: function($event) {
                        return _vm.scrollTo("#reviews")
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n\t\t\t\t(\n\t\t\t\t\t" +
                        _vm._s(_vm.selectedProduct.review_count) +
                        "\n\t\t\t\t\t"
                    ),
                    _vm.selectedProduct.review_count === 1
                      ? _c("span", [_vm._v("Review")])
                      : _c("span", [_vm._v("Reviews")]),
                    _vm._v("\n\t\t\t\t)\n\t\t\t")
                  ]
                )
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _vm.selectedProduct.description_text !== "" &&
        _vm.selectedProduct.description_text !== null
          ? _c("div", [
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
                          "\n\t\t\t\t\t" +
                            _vm._s(
                              _vm._f("truncate")(
                                _vm.selectedProduct.description_text,
                                220
                              )
                            ) +
                            "\n\t\t\t\t\t "
                        ),
                        _c(
                          "a",
                          {
                            staticClass:
                              "font-weight-bold text-decoration-underline",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.scrollTo(
                                  "#product-description-" + _vm.product.id
                                )
                              }
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
        _c("div", { staticClass: "my-4" }, [
          _c("div", { staticClass: "form-group" }, [_c("zipcode-component")], 1)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "my-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c(
              "span",
              { staticClass: "font-weight-bolder text-dark mb-1 d-block" },
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
                  ? _c("span", { staticClass: "text-green" }, [
                      _c("i", { staticClass: "fas fa-check-circle" }),
                      _vm._v(" In stock.\n\t\t\t\t\t")
                    ])
                  : _vm.selectedProduct.availability !== null &&
                    _vm.selectedProduct.availability.id === 0
                  ? _c("span", { staticClass: "text-danger" }, [
                      _c("i", { staticClass: "fas fa-times-circle" }),
                      _vm._v(" Out of stock\n\t\t\t\t\t")
                    ])
                  : _c("span", { staticClass: "text-danger" }, [
                      _c("i", { staticClass: "fas fa-times-circle" }),
                      _vm._v(" Out of stock\n\t\t\t\t\t")
                    ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "my-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c(
              "span",
              { staticClass: "font-weight-bolder text-dark mb-1 d-block" },
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
                    "\n\t\t\t\t\t\tArrives by " +
                      _vm._s(_vm.arrivalDate) +
                      "\n\t\t\t\t\t"
                  )
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _vm._t("shipping-label"),
        _vm._v(" "),
        _vm.options.length > 0
          ? _c("div", { staticClass: "my-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c(
                  "span",
                  { staticClass: "font-weight-bolder text-dark mb-1 d-block" },
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
                          attrs: { name: "option", type: "radio" },
                          domProps: {
                            value: _vm.product,
                            checked: _vm._q(_vm.selectedProduct, _vm.product)
                          },
                          on: {
                            change: function($event) {
                              _vm.selectedProduct = _vm.product
                            }
                          }
                        }),
                        _vm._v(
                          " \n\t\t\t\t    \t\t" +
                            _vm._s(_vm.product.option_name) +
                            "\n\t\t\t\t  \t"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.options, function(productItem) {
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
                            attrs: { name: "option", type: "radio" },
                            domProps: {
                              value: productItem,
                              checked: _vm._q(_vm.selectedProduct, productItem)
                            },
                            on: {
                              change: function($event) {
                                _vm.selectedProduct = productItem
                              }
                            }
                          }),
                          _vm._v(
                            " \n\t\t\t\t    \t\t" +
                              _vm._s(productItem.option_name) +
                              "\n\t\t\t\t  \t"
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
        _c("div", { staticClass: "my-4" }, [
          _c(
            "div",
            {
              staticClass:
                "pt-3 d-flex flex-row flex-nowrap align-items-center justify-content-end"
            },
            [
              _c(
                "div",
                { staticClass: "h6 mb-0 line-height-1-1 mr-3" },
                [_vm._t("subscription-label")],
                2
              ),
              _vm._v(" "),
              _c(
                "product-subscribe-component",
                {
                  staticClass:
                    "btn btn-outline-muted-4 py-2 text-uppercase btn-lg min-w-180px min-w-sm-210px min-h-44px",
                  attrs: {
                    quantity: _vm.selectedQuantity,
                    product: _vm.selectedProduct
                  }
                },
                [
                  _c(
                    "small",
                    {
                      staticClass:
                        "py-1 font-weight-border font-size-0-85rem font-size-sm-0-9rem"
                    },
                    [_vm._v("subscribe and save")]
                  )
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("hr", { staticClass: "border-dark" }),
        _vm._v(" "),
        _c("div", { staticClass: "my-4" }, [
          _c(
            "div",
            {
              staticClass:
                "d-flex flex-row flex-wrap align-items-center justify-content-end"
            },
            [
              _c("product-cart-component", {
                staticClass:
                  "d-flex flex-row align-items-center justify-content-end w-100",
                attrs: { product: _vm.selectedProduct },
                on: {
                  selectedQuantityUpdated: function($event) {
                    _vm.selectedQuantity = $event
                  }
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("hr", { staticClass: "border-dark" }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "d-flex align-items-center justify-content-end" },
          [_c("add-to-favorites", { attrs: { product: _vm.selectedProduct } })],
          1
        )
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col-12 min-h-md-400px" }, [
      _vm._m(1),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "tab-content font-weight-norma pt-3",
          attrs: { id: "product-description-" + _vm.product.id }
        },
        [
          _c(
            "div",
            {
              staticClass: "tab-pane fade show active",
              attrs: {
                id: "how-it-works",
                role: "tabpanel",
                "aria-labelledby": "how-it-works"
              }
            },
            [
              _c("div", [
                _vm.selectedProduct.description !== undefined &&
                _vm.selectedProduct.description !== null &&
                _vm.selectedProduct.description !== ""
                  ? _c("div", [
                      _c(
                        "h2",
                        {
                          staticClass: "font-size-1-3rem font-weight-bold mb-3"
                        },
                        [_vm._v("Description")]
                      ),
                      _c("div", {
                        staticClass:
                          "font-weight-normal line-height-1-4 font-size-0-95rem",
                        domProps: {
                          innerHTML: _vm._s(_vm.selectedProduct.description)
                        }
                      })
                    ])
                  : _c("div", [
                      _vm._v(
                        "\n\t\t\t  \t\t\tNothing to show under this section yet.\n\t\t\t  \t\t"
                      )
                    ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "tab-pane fade",
              attrs: {
                id: "how-to-use",
                role: "tabpanel",
                "aria-labelledby": "how-to-use-tab"
              }
            },
            [
              _vm.selectedProduct.how_to_use !== undefined &&
              _vm.selectedProduct.how_to_use !== null &&
              _vm.selectedProduct.how_to_use !== ""
                ? _c("div", [
                    _c(
                      "h2",
                      { staticClass: "font-size-1-3rem font-weight-bold mb-3" },
                      [_vm._v("How to use")]
                    ),
                    _c("div", {
                      staticClass:
                        "font-weight-normal line-height-1-4 font-size-0-95rem",
                      domProps: {
                        innerHTML: _vm._s(_vm.selectedProduct.how_to_use)
                      }
                    })
                  ])
                : _c("div", [
                    _vm._v(
                      "\n\t\t  \t\t\tNothing to show under this section yet.\n\t\t  \t\t"
                    )
                  ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "tab-pane fade",
              attrs: {
                id: "ingredients",
                role: "tabpanel",
                "aria-labelledby": "ingredients-tab"
              }
            },
            [
              _vm.selectedProduct.ingredients !== undefined &&
              _vm.selectedProduct.ingredients !== null &&
              _vm.selectedProduct.ingredients !== ""
                ? _c("div", [
                    _c(
                      "h2",
                      { staticClass: "font-size-1-3rem font-weight-bold mb-3" },
                      [_vm._v("Ingredients")]
                    ),
                    _c("div", {
                      staticClass:
                        "font-weight-normal line-height-1-4 font-size-0-95rem",
                      domProps: {
                        innerHTML: _vm._s(_vm.selectedProduct.ingredients)
                      }
                    })
                  ])
                : _c("div", [
                    _vm._v(
                      "\n\t\t  \t\t\tNothing to show under this section yet.\n\t\t  \t\t"
                    )
                  ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "tab-pane fade",
              attrs: {
                id: "reviews-tab",
                role: "tabpanel",
                "aria-labelledby": "reviews"
              }
            },
            [
              _c(
                "div",
                { attrs: { id: "reviews" } },
                [
                  _c("product-reviews-component", {
                    attrs: {
                      product: _vm.selectedProduct,
                      "start-page": _vm.startPage
                    }
                  })
                ],
                1
              )
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-danger text-center" }, [
      _c("strong", [_vm._v("Currenty Disabled")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "nav border-bottom mb-4 pb-1 flex-nowrap" },
      [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass:
                "nav-link px-0 text-dark-active box-shadow-green-active py-3 active text-uppercase mr-2 mr-sm-3 mr-md-4 mr-lg-5 text-center font-size-0-88rem line-height-1-6 font-size-sm-0-95rem",
              attrs: {
                "data-toggle": "tab",
                href: "#how-it-works",
                "aria-selected": "true",
                role: "tab"
              }
            },
            [_vm._v("\n\t\t\t\t\tHow it works\n\t\t\t\t")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass:
                "nav-link px-0 text-dark-active box-shadow-green-active py-3 text-uppercase mr-2 mr-sm-3 mr-md-4 mr-lg-5 text-center font-size-0-88rem line-height-1-6 font-size-sm-0-95rem",
              attrs: {
                "data-toggle": "tab",
                href: "#how-to-use",
                "aria-selected": "false",
                role: "tab"
              }
            },
            [_vm._v("\n\t\t\t\t\tHow to use\n\t\t\t\t")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass:
                "nav-link px-0 text-dark-active box-shadow-green-active py-3 text-uppercase mr-2 mr-sm-3 mr-md-4 mr-lg-5 text-center font-size-0-88rem line-height-1-6 font-size-sm-0-95rem",
              attrs: {
                "data-toggle": "tab",
                href: "#ingredients",
                "aria-selected": "false",
                role: "tab"
              }
            },
            [_vm._v("\n\t\t\t\t\tIngredients\n\t\t\t\t")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass:
                "nav-link px-0 text-dark-active box-shadow-green-active py-3 text-uppercase mr-2 mr-sm-3 mr-md-4 mr-lg-5 text-center font-size-0-88rem line-height-1-6 font-size-sm-0-95rem",
              attrs: {
                "data-toggle": "tab",
                href: "#reviews-tab",
                "aria-selected": "false",
                role: "tab"
              }
            },
            [_vm._v("\n\t\t\t\t\tReviews\n\t\t\t\t")]
          )
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

/***/ "./resources/js/components/product/ProductPageComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/product/ProductPageComponent.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductPageComponent_vue_vue_type_template_id_2113120a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductPageComponent.vue?vue&type=template&id=2113120a&scoped=true& */ "./resources/js/components/product/ProductPageComponent.vue?vue&type=template&id=2113120a&scoped=true&");
/* harmony import */ var _ProductPageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductPageComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/product/ProductPageComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProductPageComponent_vue_vue_type_style_index_0_id_2113120a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductPageComponent.vue?vue&type=style&index=0&id=2113120a&scoped=true&lang=css& */ "./resources/js/components/product/ProductPageComponent.vue?vue&type=style&index=0&id=2113120a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProductPageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductPageComponent_vue_vue_type_template_id_2113120a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductPageComponent_vue_vue_type_template_id_2113120a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2113120a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/product/ProductPageComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/product/ProductPageComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/product/ProductPageComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductPageComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductPageComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/product/ProductPageComponent.vue?vue&type=style&index=0&id=2113120a&scoped=true&lang=css&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/product/ProductPageComponent.vue?vue&type=style&index=0&id=2113120a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPageComponent_vue_vue_type_style_index_0_id_2113120a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductPageComponent.vue?vue&type=style&index=0&id=2113120a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductPageComponent.vue?vue&type=style&index=0&id=2113120a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPageComponent_vue_vue_type_style_index_0_id_2113120a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPageComponent_vue_vue_type_style_index_0_id_2113120a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPageComponent_vue_vue_type_style_index_0_id_2113120a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPageComponent_vue_vue_type_style_index_0_id_2113120a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPageComponent_vue_vue_type_style_index_0_id_2113120a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/product/ProductPageComponent.vue?vue&type=template&id=2113120a&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/product/ProductPageComponent.vue?vue&type=template&id=2113120a&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPageComponent_vue_vue_type_template_id_2113120a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductPageComponent.vue?vue&type=template&id=2113120a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductPageComponent.vue?vue&type=template&id=2113120a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPageComponent_vue_vue_type_template_id_2113120a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPageComponent_vue_vue_type_template_id_2113120a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);