(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-component"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductsComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/ProductsComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    startPage: {
      type: Number,
      "default": 1
    },
    initialLoad: {
      type: Boolean,
      "default": true
    },
    displayCategoryName: {
      type: Boolean,
      "default": true
    },
    displayBreadcrumb: {
      type: Boolean,
      "default": true
    },
    displayFilters: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      response: null,
      products: {},
      viewType: 'grid',
      sortBy: 'relevance',
      perPage: 24,
      currentPage: 1
    };
  },
  mounted: function mounted() {
    var self = this;
    this.loadLocalStorage();
    this.$root.$on('refresh_products', function (response) {
      self.response = response;
      self.products = response.products;
      document.getElementById("site_title").textContent = 'Natural House | ' + response.category.name;
      document.getElementById("category_title").textContent = 'Natural House | ' + response.category.name;
      document.getElementById("category_description").textContent = response.category.description;
      document.getElementById("category_og:title").textContent = 'Natural House | ' + response.category.name;
      document.getElementById("category_og:description").textContent = response.category.description;
    });
    this.$root.$on('refreshProducts', function (page) {
      self.getResults(page, function () {
        $("html").animate({
          scrollTop: 0
        }, 100);
      });
    });

    if (this.initialLoad === true) {
      var page = this.startPage > 0 ? this.startPage : 1;
      this.getResults(page);
    }

    if (window.initProductsComponent !== undefined) {
      window.initProductsComponent();
    }
  },
  watch: {
    viewType: function viewType(newValue) {
      try {
        localStorage.setItem('viewType', JSON.stringify(newValue));
      } catch (e) {}
    }
  },
  methods: {
    loadLocalStorage: function loadLocalStorage() {
      var item = null;

      try {
        item = localStorage.getItem('viewType');
        item = JSON.parse(item);

        if (item !== undefined && item !== null) {
          this.viewType = item;
        }
      } catch (e) {
        console.log(e);
      }

      try {
        item = localStorage.getItem('sortBy');
        item = JSON.parse(item);

        if (item !== undefined && item !== null) {
          this.sortBy = item;
        }
      } catch (e) {
        console.log(e);
      }

      try {
        item = localStorage.getItem('perPage');
        item = JSON.parse(item);

        if (item !== undefined && item !== null) {
          this.perPage = item;
        }
      } catch (e) {
        console.log(e);
      }
    },
    saveLocalStorage: function saveLocalStorage() {
      try {
        localStorage.setItem('viewType', JSON.stringify(this.viewType));
      } catch (e) {}

      try {
        localStorage.setItem('sortBy', JSON.stringify(this.sortBy));
      } catch (e) {}

      try {
        localStorage.setItem('perPage', JSON.stringify(this.perPage));
      } catch (e) {}
    },
    getResults: function getResults() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var self = this;
      $('#app').busyLoad('show');
      var vars = location.search.split('&').filter(function (e) {
        return e.search('page=') === -1;
      }).filter(function (e) {
        return e.length > 0;
      });
      var delimiter = vars.length > 0 ? '&' : '?';
      var link = delimiter + 'page=' + page;
      var url = location.protocol + '//' + location.hostname + location.pathname + vars.join('&') + link;
      $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        data: {
          sortBy: this.sortBy,
          perPage: this.perPage
        }
      }).done(function (response) {
        self.response = response;
        self.products = response.products;
        self.currentPage = response.products.current_page;
        self.saveLocalStorage();
      }).always(function () {
        $('#app').busyLoad('hide');

        try {
          if (callback !== undefined) {
            callback();
          }
        } catch (e) {}
      });
    },
    getResultsWithPagination: function getResultsWithPagination() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.triggerHistory(page);
    },
    triggerHistory: function triggerHistory(page) {
      var state = History.getState();
      var vars = location.search.split('&').filter(function (e) {
        return e.search('page=') === -1;
      }).filter(function (e) {
        return e.length > 0;
      });
      var delimiter = vars.length > 0 ? '&' : '?';
      var link = delimiter + 'page=' + page;

      if (page === 1) {
        link = '';
      }

      var url = location.protocol + '//' + location.hostname + location.pathname + vars.join('&') + link;
      History.pushState({
        event: 'refreshProducts',
        page: page,
        state: 'pagination'
      }, document.title, url);
      state = History.getState();

      if (Object.keys(state.data).length === 0 && state.data.constructor === Object) {
        this.getResults(page, function () {
          $("html").animate({
            scrollTop: 0
          }, 100);
        });
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductsComponent.vue?vue&type=template&id=a12beb04&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/ProductsComponent.vue?vue&type=template&id=a12beb04& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    _vm.displayBreadcrumb === true &&
    _vm.response !== null &&
    _vm.response.category !== undefined
      ? _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c(
              "section",
              {
                staticClass:
                  "section section--breadcrumb text-left font-size-0-85rem"
              },
              [
                _c(
                  "div",
                  { staticClass: "text-dark-2" },
                  [
                    _c("a", { attrs: { href: "/" } }, [_vm._v("Home")]),
                    _vm._v(" "),
                    _vm._l(_vm.response.parentCategories, function(
                      category,
                      index
                    ) {
                      return _c(
                        "a",
                        {
                          class:
                            index == _vm.response.parentCategories.length - 1
                              ? "text-dark"
                              : "",
                          attrs: {
                            href: _vm
                              .route("category.filter", category.slug)
                              .url()
                          }
                        },
                        [
                          _c("span", { staticClass: "px-1" }, [_vm._v("/")]),
                          _vm._v(_vm._s(category.name) + "\n                \t")
                        ]
                      )
                    })
                  ],
                  2
                )
              ]
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.displayCategoryName === true &&
    _vm.response !== null &&
    _vm.response.category !== undefined &&
    _vm.response.category !== null
      ? _c("div", { staticClass: "row mt-3" }, [
          _c(
            "div",
            {
              staticClass:
                "col-12 text-left mt-4 text-dark-dark-5 d-flex flex-row flex-wrap align-items-end justify-content-between"
            },
            [
              _vm.response.category.name !== undefined
                ? _c(
                    "h1",
                    {
                      staticClass:
                        "h2 mb-0 font-size-1-5rem fon-size-md-2rem text-uppercase font-weight-light line-height-1-4"
                    },
                    [
                      _vm._v(
                        "\n\t\t\t\t" +
                          _vm._s(_vm.response.category.name) +
                          "\n\t\t\t"
                      )
                    ]
                  )
                : _vm.response.brandNames !== null &&
                  _vm.response.brandNames.length > 0
                ? _c(
                    "h1",
                    {
                      staticClass:
                        "flex-wrap mb-0 h3 mt-2 mt-lg-0 font-size-1-4rem fon-size-md-1-9rem fon-size-lg-2rem text-uppercase d-flex align-items-center justify-content-center font-weight-light"
                    },
                    _vm._l(_vm.response.brandNames, function(brandName, index) {
                      return _c("span", { staticClass: "mb-1" }, [
                        _vm._v(
                          "\n\t\t\t\t\t" + _vm._s(brandName) + "\n\t\t\t\t\t"
                        ),
                        index < _vm.response.brandNames.length - 1
                          ? _c("span", [_vm._v(",   ")])
                          : _vm._e()
                      ])
                    }),
                    0
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.response !== null && _vm.response.category !== undefined
                ? _c("div", [
                    _c("div", { staticClass: "text-right" }, [
                      _vm.response.products !== undefined
                        ? _c(
                            "span",
                            { staticClass: "text-muted-4 font-weight-light" },
                            [
                              _c("span", [
                                _vm._v(
                                  _vm._s(_vm.response.products.total) + " "
                                )
                              ]),
                              _vm._v(" "),
                              _vm.response.products.total > 1
                                ? _c("span", [_vm._v("Items")])
                                : _c("span", [_vm._v("Item")])
                            ]
                          )
                        : _vm._e()
                    ])
                  ])
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _vm._m(0)
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "form",
      {
        class:
          "row my-3 jq-filters-container " +
          (_vm.displayFilters ? "" : "justify-content-end")
      },
      [
        _vm.displayFilters
          ? _c("div", { staticClass: "col-12 col-sm-6 col-md-8 col-lg-10" }, [
              _c(
                "div",
                {
                  staticClass:
                    "form-group small d-flex flex-row align-items-center"
                },
                [
                  _c(
                    "label",
                    {
                      staticClass:
                        "font-weight-bold mb-0 text-capitalize text-nowrap text-black mr-1"
                    },
                    [_vm._v("Sort by")]
                  ),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.sortBy,
                          expression: "sortBy"
                        }
                      ],
                      staticClass:
                        "form-control form-control-sm max-w-130px text-center px-0 py-1 text-dark-3 rounded text-muted bg-white border-0",
                      attrs: { name: "sortBy" },
                      on: {
                        change: [
                          function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.sortBy = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                          function($event) {
                            return _vm.getResults()
                          }
                        ]
                      }
                    },
                    [
                      _c("option", { attrs: { value: "relevance" } }, [
                        _vm._v("Relevance")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "h-t-l" } }, [
                        _vm._v("Price Highest to Lowest")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "l-t-h" } }, [
                        _vm._v("Price Lowest to Highest")
                      ])
                    ]
                  )
                ]
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-2 col-sm-6 col-md-4 col-lg-2 text-right" },
          [
            _c("div", { staticClass: "d-none d-sm-flex form-group" }, [
              _c("div", { staticClass: "ml-auto mr-0 btn-group max-w-100px" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn d-none d-md-block border-0 rounded-0",
                    class:
                      _vm.viewType != "grid" ? "text-muted-1" : "text-muted-4",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.viewType = "grid"
                      }
                    }
                  },
                  [_c("i", { staticClass: "fas fa-th" })]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn border-0 rounded-0",
                    class:
                      _vm.viewType != "grid-large"
                        ? "text-muted-1"
                        : "text-muted-4",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.viewType = "grid-large"
                      }
                    }
                  },
                  [_c("i", { staticClass: "fas fa-th-large" })]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn border-0 rounded-0",
                    class:
                      _vm.viewType != "list" ? "text-muted-1" : "text-muted-4",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.viewType = "list"
                      }
                    }
                  },
                  [_c("i", { staticClass: "fas fa-bars" })]
                )
              ])
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _vm.response !== null && _vm.response.category !== undefined
      ? _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.products.data, function(product) {
            return _c("product-component", {
              key: product.id,
              attrs: { product: product, "view-type": _vm.viewType }
            })
          }),
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _vm.response !== null &&
      (_vm.response.products === undefined || _vm.response.products.total === 0)
        ? _c("div", { staticClass: "col-12 mt-4" }, [_vm._m(1)])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-12 mt-3" },
        [
          _c("pagination", {
            staticClass: "flex-wrap",
            attrs: { limit: 3, data: _vm.products, align: "right" },
            on: { "pagination-change-page": _vm.getResultsWithPagination }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("hr", { staticClass: "mt-2 border-muted-1" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "alert alert-warning alert-dismissible fade show",
        attrs: { role: "alert" }
      },
      [
        _vm._v(
          "\n\t\t\t\tNo products in this category match your filters.\n\t\t\t\t"
        ),
        _c(
          "button",
          {
            staticClass: "close",
            attrs: {
              type: "button",
              "data-dismiss": "alert",
              "aria-label": "Close"
            }
          },
          [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
        )
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

/***/ "./resources/js/components/product/ProductsComponent.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/product/ProductsComponent.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductsComponent_vue_vue_type_template_id_a12beb04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsComponent.vue?vue&type=template&id=a12beb04& */ "./resources/js/components/product/ProductsComponent.vue?vue&type=template&id=a12beb04&");
/* harmony import */ var _ProductsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/product/ProductsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductsComponent_vue_vue_type_template_id_a12beb04___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductsComponent_vue_vue_type_template_id_a12beb04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/product/ProductsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/product/ProductsComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/product/ProductsComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/product/ProductsComponent.vue?vue&type=template&id=a12beb04&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/product/ProductsComponent.vue?vue&type=template&id=a12beb04& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsComponent_vue_vue_type_template_id_a12beb04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsComponent.vue?vue&type=template&id=a12beb04& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductsComponent.vue?vue&type=template&id=a12beb04&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsComponent_vue_vue_type_template_id_a12beb04___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsComponent_vue_vue_type_template_id_a12beb04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);