(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-component"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/ProductComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    product: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    productClass: {
      type: String,
      "default": function _default() {
        return 'img-fluid rounded-lg img-responsive w-auto d-block m-auto max-h-280px h-auto';
      }
    },
    viewType: {
      type: String,
      "default": function _default() {
        return 'grid';
      }
    }
  },
  data: function data() {
    return {
      timeout: null
    };
  },
  created: function created() {
    try {
      if (this.product.main_image == 'storage/notfound.png' || this.product.main_image == '/storage/notfound.png') {
        this.product.main_image = 'notfound.png';
      }
    } catch (e) {}
  },
  mounted: function mounted() {
    try {
      if (localStorage.scrollPosition !== null && localStorage.scrollPosition !== 0 && localStorage.scrollPosition != '0') {
        if (parseInt(localStorage.scrollPosition) <= $(document).height()) {
          $("html, body").animate({
            scrollTop: localStorage.scrollPosition
          }, 100);
          localStorage.setItem('scrollPosition', 0);
        }
      }
    } catch (e) {}
  },
  methods: {
    showProduct: function showProduct() {
      var elm = $(this.$el).find('.card');
      var url = route('product.show', this.product.slug).url();

      try {
        localStorage.setItem("scrollPosition", $(document).scrollTop());
      } catch (e) {}

      $(elm).busyLoad('hide');
      $(elm).busyLoad('show');

      if (this.timeout !== null && this.timeout !== undefined) {
        clearTimeout(this.timeout);
      }

      try {
        window.dataLayer.push({
          'event': 'productClick',
          'ecommerce': {
            'click': {
              'actionField': {
                'list': 'Product click'
              },
              'products': [{
                'id': this.product.id,
                'name': this.product.name,
                'price': this.product.price,
                'position': 1
              }]
            }
          },
          'eventCallback': function eventCallback() {
            $(elm).busyLoad('hide');
            document.location = url;
          }
        });
        this.timeout = setTimeout(function () {
          $(elm).busyLoad('hide');
          document.location = url;
        }, 600);
      } catch (e) {
        $(elm).busyLoad('hide');
        document.location = url;
      }
    }
  },
  computed: {
    inStock: function inStock() {
      return parseInt(this.product.availability_id) !== 0;
    },
    viewClass: function viewClass() {
      if (this.viewType === 'custom') {
        return '';
      }

      if (this.viewType === 'grid') {
        return 'mb-4 col-lg-4 col-md-6 col-sm-6 col-12';
      }

      if (this.viewType === 'grid-large') {
        return 'mb-4 col-sm-6 col-12';
      }

      return 'mb-4 col-12';
    },
    productLink: function productLink() {
      var slug = this.product.slug;

      if (slug === '' || slug.length === '') {
        slug = this.product.id;
      }

      return route('product.show', slug).url();
    },
    productImage: function productImage() {
      try {
        var img = this.product.main_image;

        if (img == 'storage/notfound.png' || img == '/storage/notfound.png') {
          img = 'notfound.png';
        }

        return img.replace('//', '/');
      } catch (e) {
        return this.product.main_image;
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductComponent.vue?vue&type=style&index=0&id=26eda659&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/ProductComponent.vue?vue&type=style&index=0&id=26eda659&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-container .card[data-v-26eda659] {\n  transition: box-shadow 0.3s ease-in-out;\n}\n.product-container .card[data-v-26eda659]:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductComponent.vue?vue&type=style&index=0&id=26eda659&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/ProductComponent.vue?vue&type=style&index=0&id=26eda659&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductComponent.vue?vue&type=style&index=0&id=26eda659&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductComponent.vue?vue&type=style&index=0&id=26eda659&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductComponent.vue?vue&type=template&id=26eda659&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/ProductComponent.vue?vue&type=template&id=26eda659&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
      class: "product-container rounded-lg " + _vm.viewClass,
      attrs: { "data-id": _vm.product.id }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "card position-relative m-0 h-100 border-0 position-relative rounded-lg"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "rounded-lg d-flex h-100 align-items-center justify-content-center"
            },
            [
              _c(
                "a",
                {
                  staticClass:
                    "text-center d-flex align-items-center justify-content-center min-h-180px rounded-lg",
                  attrs: { href: _vm.productLink },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.showProduct()
                    }
                  }
                },
                [
                  _c("img", {
                    directives: [
                      {
                        name: "lazy",
                        rawName: "v-lazy",
                        value: "/storage/" + _vm.productImage,
                        expression: "'/storage/' + productImage"
                      }
                    ],
                    class: _vm.productClass,
                    attrs: {
                      "data-error": "/storage/notfound.png",
                      "data-loading": "/storage/notfound.png",
                      src: "/storage/notfound.png",
                      "data-src": "/storage/notfound.png",
                      alt: _vm.product.name
                    }
                  })
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "mt-auto mb-0" }, [
            _c(
              "div",
              { staticClass: "px-0 d-flex flex-column pb-0 max-h-300px" },
              [
                _c(
                  "div",
                  { staticClass: "d-flex flex-column justify-content-end" },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "p-2 d-flex flex-column",
                        staticStyle: { "min-height": "85px" }
                      },
                      [
                        _c(
                          "h3",
                          {
                            staticClass:
                              "text-left card-title font-weight-bold h6 mb-auto mt-0"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "text-dark-2 d-block mb-2 font-family-open-sans",
                                attrs: {
                                  href: _vm.productLink,
                                  title: _vm.product.name
                                },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.showProduct()
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t                        " +
                                    _vm._s(
                                      _vm._f("truncate")(_vm.product.name, 60)
                                    ) +
                                    "\n\t\t\t                    "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-flex flex-row align-items-center mb-2"
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
                                value: _vm.product.review_avg,
                                callback: function($$v) {
                                  _vm.$set(_vm.product, "review_avg", $$v)
                                },
                                expression: "product.review_avg"
                              }
                            }),
                            _vm._v("\n\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t"),
                            _vm.product.review_count > 0
                              ? _c(
                                  "span",
                                  {
                                    staticClass:
                                      "text-muted-3 mt-1 font-family-open-sans small"
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t(" +
                                        _vm._s(_vm.product.review_count) +
                                        ")\n\t\t\t\t\t\t\t\t"
                                    )
                                  ]
                                )
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "mb-0 mt-auto d-flex flex-row align-items-center justify-content-between font-family-open-sans"
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass: "text-dark-3 font-weight-bold h6"
                              },
                              [
                                _vm.product.children !== undefined &&
                                _vm.product.children !== null &&
                                _vm.product.children.length > 0
                                  ? _c("span", [
                                      _vm._v(
                                        "\n\t\t\t                \t\t\tFrom\n\t\t\t                \t\t"
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(
                                  "\n\t\t                \t\t\t" +
                                    _vm._s(
                                      _vm._f("currency")(_vm.product.price)
                                    ) +
                                    "\n\t\t                \t\t"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _vm.product.original_price != _vm.product.price &&
                            _vm.product.original_price > 0
                              ? _c(
                                  "strike",
                                  { staticClass: "text-secondary-7 small" },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t" +
                                        _vm._s(
                                          _vm._f("currency")(
                                            _vm.product.original_price
                                          )
                                        ) +
                                        "\n\t\t\t\t\t\t\t\t"
                                    )
                                  ]
                                )
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm.product.is_free_shipping
                          ? _c("div", [
                              _vm.product.free_shipping_option == "Free 2-day"
                                ? _c(
                                    "span",
                                    { staticClass: "text-danger small" },
                                    [_vm._v("+ FREE 2-DAY SHIPPING")]
                                  )
                                : _c(
                                    "span",
                                    { staticClass: "text-danger small" },
                                    [_vm._v("+ FREE SHIPPING")]
                                  )
                            ])
                          : _vm._e()
                      ]
                    )
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "px-2 py-2 text-center d-flex flex-row mt-auto mb-0 align-self-end align-items-center justify-content-between w-100 buttons-overlay-container"
            },
            [
              _c(
                "div",
                { staticClass: "w-100 d-flex flex-column max-w-180px mx-auto" },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-highlight px-4 py-2 text-uppercase text-nowrap shadow",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.$root.$emit(
                            "showProductChildren",
                            _vm.product,
                            _vm.product.children
                          )
                        }
                      }
                    },
                    [
                      _c("small", { staticClass: "py-1" }, [
                        _vm._v("Add to cart")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "btn-group mt-2 shadow" },
                    [
                      _c(
                        "a",
                        {
                          staticClass:
                            "btn btn-outline-muted-4 px-4 py-2 text-uppercase max-w-169px mx-auto",
                          attrs: { href: _vm.productLink }
                        },
                        [
                          _c(
                            "small",
                            {
                              staticClass: "py-1 font-weight-border text-nowrap"
                            },
                            [_vm._v("View More")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("add-to-favorites", {
                        staticClass:
                          "btn btn-outline-muted-4 border-left-0 text-uppercase max-w-169px mx-auto py-0",
                        attrs: {
                          context: "short",
                          icon: "fa-star",
                          defaultFilled: "true",
                          product: _vm.product
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ]
          )
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

/***/ "./resources/js/components/product/ProductComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/product/ProductComponent.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductComponent_vue_vue_type_template_id_26eda659_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductComponent.vue?vue&type=template&id=26eda659&scoped=true& */ "./resources/js/components/product/ProductComponent.vue?vue&type=template&id=26eda659&scoped=true&");
/* harmony import */ var _ProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/product/ProductComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProductComponent_vue_vue_type_style_index_0_id_26eda659_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductComponent.vue?vue&type=style&index=0&id=26eda659&lang=scss&scoped=true& */ "./resources/js/components/product/ProductComponent.vue?vue&type=style&index=0&id=26eda659&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductComponent_vue_vue_type_template_id_26eda659_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductComponent_vue_vue_type_template_id_26eda659_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "26eda659",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/product/ProductComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/product/ProductComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/product/ProductComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/product/ProductComponent.vue?vue&type=style&index=0&id=26eda659&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/product/ProductComponent.vue?vue&type=style&index=0&id=26eda659&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductComponent_vue_vue_type_style_index_0_id_26eda659_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductComponent.vue?vue&type=style&index=0&id=26eda659&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductComponent.vue?vue&type=style&index=0&id=26eda659&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductComponent_vue_vue_type_style_index_0_id_26eda659_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductComponent_vue_vue_type_style_index_0_id_26eda659_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductComponent_vue_vue_type_style_index_0_id_26eda659_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductComponent_vue_vue_type_style_index_0_id_26eda659_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductComponent_vue_vue_type_style_index_0_id_26eda659_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/product/ProductComponent.vue?vue&type=template&id=26eda659&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/product/ProductComponent.vue?vue&type=template&id=26eda659&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductComponent_vue_vue_type_template_id_26eda659_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductComponent.vue?vue&type=template&id=26eda659&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductComponent.vue?vue&type=template&id=26eda659&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductComponent_vue_vue_type_template_id_26eda659_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductComponent_vue_vue_type_template_id_26eda659_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);