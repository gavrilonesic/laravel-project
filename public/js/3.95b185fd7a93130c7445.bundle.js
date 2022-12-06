(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/review/ProductReviewsComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/review/ProductReviewsComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    product: {
      type: Object
    },
    startPage: {
      type: Number,
      "default": 1
    }
  },
  data: function data() {
    return {
      searchText: '',
      sortBy: 'most-recent',
      reviews: {},
      response: {},
      currentPage: 0
    };
  },
  watch: {
    product: function product(newValue, oldValue) {
      this.currentPage = 1;
      this.getResults(this.currentPage);
    }
  },
  mounted: function mounted() {
    var page = this.startPage > 0 ? this.startPage : 1;
    var self = this;
    this.getResults(page);
    this.$root.$on('reviewCreated', function (review) {
      self.reviews.unshift(review);
    });
  },
  methods: {
    search: function search() {
      if (this.searchText === '' || this.searchText.length === 0) {
        return false;
      }

      this.getResults(1, {
        sortBy: this.sortBy,
        searchText: this.searchText
      });
    },
    getResults: function getResults() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var self = this;
      var $parent = $(this.$el);

      if (data === undefined) {
        data = {
          sortBy: this.sortBy
        };
      }

      $parent.busyLoad('show');
      var vars = location.search.split('&').filter(function (e) {
        return e.search('page=') === -1;
      }).filter(function (e) {
        return e.length > 0;
      });
      var delimiter = vars.length > 0 ? '&' : '?';
      var link = '/review/' + this.product.id + delimiter + 'page=' + page;
      $.ajax({
        url: link,
        type: 'GET',
        dataType: 'json',
        data: data
      }).done(function (response) {
        self.response = response;
        self.reviews = response.data;
        self.currentPage = response.current_page;
      }).always(function () {
        $parent.busyLoad('hide');

        try {
          if (callback !== undefined) {
            callback();
          }
        } catch (e) {}
      });
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/review/ProductReviewsComponent.vue?vue&type=template&id=dfb18f36&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/review/ProductReviewsComponent.vue?vue&type=template&id=dfb18f36& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      [_c("product-review-form", { attrs: { product: _vm.product } })],
      1
    ),
    _vm._v(" "),
    _c("div", [
      _c("div", { staticClass: "d-flex flex-column h-100" }, [
        _c(
          "div",
          {
            staticClass:
              "d-flex flex-row align-items-center justify-content-between w-100"
          },
          [
            _c(
              "h1",
              {
                staticClass:
                  "font-weight-bold text-dark line-height-1-1 h5 mb-0"
              },
              [_vm._v("\n\t\t\t\t\tCustomer Reviews\n\t\t\t\t")]
            ),
            _vm._v(" "),
            _vm.response.total !== undefined &&
            _vm.response.total !== null &&
            _vm.response.total !== 0
              ? _c("span", { staticClass: "text-muted-4" }, [
                  _vm._v(
                    "\n\t\t\t\t\t" +
                      _vm._s(_vm.response.total) +
                      " Reviews\n\t\t\t\t"
                  )
                ])
              : _vm._e()
          ]
        ),
        _vm._v(" "),
        _c("hr", { staticClass: "border-muted-1 w-100 mt-2" })
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "d-flex flex-row flex-wrap align-items-center justify-content-between w-100"
        },
        [
          _c("div", [
            _c(
              "div",
              {
                staticClass:
                  "input-group font-family-open-sans min-w-md-240px mb-0"
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.searchText,
                      expression: "searchText"
                    }
                  ],
                  staticClass:
                    "form-control rounded-0 border-right-0 bg-secondary border-secondary",
                  attrs: {
                    type: "text",
                    placeholder: "Search Reviews",
                    "aria-label": "Search Reviews"
                  },
                  domProps: { value: _vm.searchText },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.searchText = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "input-group-append" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn bg-secondary border-left-0 rounded-0 border-secondary",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.search()
                        }
                      }
                    },
                    [_c("i", { staticClass: "fas fa-search text-muted-4" })]
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", [
            _c(
              "div",
              {
                staticClass:
                  "input-group font-family-open-sans min-w-md-300px mb-0 d-flex flex-row align-items-center"
              },
              [
                _c(
                  "label",
                  {
                    staticClass: "text-muted-4 mb-0 text-nowrap mr-3",
                    attrs: { for: "sort-by" }
                  },
                  [_vm._v("Sort By")]
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
                      "form-control min-w-md-240px border-secondary text-center text-dark rounded-0 bg-secondary-",
                    attrs: { id: "sort-by", name: "sortBy" },
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
                          return _vm.getResults(_vm.currentPage)
                        }
                      ]
                    }
                  },
                  [
                    _c("option", { attrs: { value: "most-recent" } }, [
                      _vm._v("Most recent")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "popular-reviews" } }, [
                      _vm._v("Popular reviews")
                    ])
                  ]
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _vm.response.total !== undefined &&
      _vm.response.total !== null &&
      _vm.response.total !== 0
        ? _c("div", [
            _c(
              "div",
              { staticClass: "py-4 mt-3" },
              _vm._l(_vm.reviews, function(review) {
                return _c("product-review", {
                  key: review.id,
                  attrs: { "review-data": review }
                })
              }),
              1
            )
          ])
        : _c("div", [_vm._m(0)])
    ]),
    _vm._v(" "),
    _c(
      "div",
      [
        _c("pagination", {
          staticClass: "flex-wrap",
          attrs: { limit: 3, data: _vm.response, align: "right" },
          on: { "pagination-change-page": _vm.getResults }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert bg-secondary mt-4 rounded-0" }, [
      _c("span", { staticClass: "lead font-family-open-sans" }, [
        _vm._v("No customer reviews for this product.")
      ])
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

/***/ "./resources/js/components/review/ProductReviewsComponent.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/review/ProductReviewsComponent.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductReviewsComponent_vue_vue_type_template_id_dfb18f36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductReviewsComponent.vue?vue&type=template&id=dfb18f36& */ "./resources/js/components/review/ProductReviewsComponent.vue?vue&type=template&id=dfb18f36&");
/* harmony import */ var _ProductReviewsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductReviewsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/review/ProductReviewsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductReviewsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductReviewsComponent_vue_vue_type_template_id_dfb18f36___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductReviewsComponent_vue_vue_type_template_id_dfb18f36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/review/ProductReviewsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/review/ProductReviewsComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/review/ProductReviewsComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReviewsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductReviewsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/review/ProductReviewsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReviewsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/review/ProductReviewsComponent.vue?vue&type=template&id=dfb18f36&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/review/ProductReviewsComponent.vue?vue&type=template&id=dfb18f36& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReviewsComponent_vue_vue_type_template_id_dfb18f36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductReviewsComponent.vue?vue&type=template&id=dfb18f36& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/review/ProductReviewsComponent.vue?vue&type=template&id=dfb18f36&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReviewsComponent_vue_vue_type_template_id_dfb18f36___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReviewsComponent_vue_vue_type_template_id_dfb18f36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);