(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/review/ProductReview.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/review/ProductReview.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Vue, $) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['reviewData'],
  data: function data() {
    return {
      expended: false,
      updatedCounter: '',
      isUpdated: false,
      review: {}
    };
  },
  mounted: function mounted() {
    this.review = JSON.parse(JSON.stringify(this.reviewData));
    Vue.set(this.review, 'description', this.review.description);
    this.loadLocalStorage();
  },
  methods: {
    loadLocalStorage: function loadLocalStorage() {
      var stored = localStorage.getItem('r-' + this.review.id + '-r');

      if (stored !== null) {
        this.isUpdated = true;
      }

      this.updatedCounter = stored;
    },
    update: function update(action) {
      if (this.isUpdated) {
        toast('<span class="font-family-open-sans">You already rated this review</span>');
        return false;
      }

      var elm = this.$el;
      var self = this;
      $(elm).busyLoad('show');
      $.ajax({
        url: '/review/' + this.review.id,
        type: 'PUT',
        dataType: 'json',
        data: {
          action: action
        }
      }).done(function (response) {
        self.$set(self.review, 'like_counter', response.like_counter);
        self.$set(self.review, 'report_counter', response.report_counter);
        self.$set(self.review, 'dislike_counter', response.dislike_counter);
        self.review = response;
        self.isUpdated = true;
        self.updatedCounter = action;

        try {
          localStorage.setItem('r-' + self.review.id + '-r', action);
        } catch (e) {}
      }).fail(function (response) {
        try {
          alert(response.responseJSON.message);
        } catch (e) {
          alert('Something went wrong, try again later.');
        }
      }).always(function () {
        $(elm).busyLoad('hide');
      });
    }
  },
  computed: {
    isRecommended: function isRecommended() {
      return this.review.grade >= 2.5;
    },
    truncatedDescription: function truncatedDescription() {
      try {
        return truncate(this.review.description, 345);
      } catch (e) {
        return '';
      }
    },
    isTruncated: function isTruncated() {
      if (this.review.description !== undefined) {
        try {
          return this.review.description.split('').length >= 345;
        } catch (e) {
          console.log(e);
          return false;
        }
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/review/ProductReview.vue?vue&type=template&id=0928f75b&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/review/ProductReview.vue?vue&type=template&id=0928f75b& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "row border-bottom font-family-open-sans py-4 mb-3" },
    [
      _c("div", { staticClass: "col-7 col-md-2 order-md-1 order-1" }, [
        _c(
          "div",
          { staticClass: "d-flex flex-column mb-4 mb-md-0" },
          [
            _c("div", { staticClass: "mb-1 mb-md-3 pb-1 text-nowrap" }, [
              _vm._v(_vm._s(_vm.review.formatted_date))
            ]),
            _vm._v(" "),
            _c("star-rating", {
              attrs: {
                increment: 0.5,
                "read-only": true,
                "show-rating": false,
                "active-color": "#FEB731",
                "star-size": 20,
                rating: _vm.review.grade
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-12 col-md-7 order-md-2 order-3" }, [
        _c(
          "div",
          {
            staticClass: "position-relative",
            staticStyle: { "margin-bottom": "-55px", "z-index": "1" }
          },
          [
            _c(
              "h1",
              { staticClass: "mb-1 mb-md-3 font-weight-normal h6 text-dark-3" },
              [_vm._v(_vm._s(_vm.review.name))]
            ),
            _vm._v(" "),
            _c(
              "h2",
              { staticClass: "mb-2 mb-md-3 font-weight-normal h5 text-dark-2" },
              [_vm._v(_vm._s(_vm.review.title))]
            ),
            _vm._v(" "),
            _c("p", { staticClass: "lead" }),
            _vm.expended === false
              ? _c(
                  "p",
                  { staticClass: "font-size-1rem line-height-1-5 h-90px m-0" },
                  [
                    _vm._v(
                      "\n\t\t\t\t\t" +
                        _vm._s(_vm.truncatedDescription) +
                        "\n\t\t\t\t"
                    )
                  ]
                )
              : _c(
                  "p",
                  {
                    staticClass: "font-size-1rem line-height-1-5 m-0",
                    class: _vm.isTruncated ? "min-h-160px h-100 pb-3" : ""
                  },
                  [
                    _vm._v(
                      "\n\t\t\t\t\t" +
                        _vm._s(_vm.review.description) +
                        "\n\t\t\t\t"
                    )
                  ]
                ),
            _vm._v(" "),
            _c("p")
          ]
        ),
        _vm._v(" "),
        _c("div", {
          staticClass: "pt-3",
          staticStyle: {
            background:
              "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
            transform: "rotate(-180deg)",
            height: "40px",
            "z-index": "2",
            position: "relative"
          }
        }),
        _vm._v(" "),
        _vm.expended === false && _vm.isTruncated
          ? _c(
              "div",
              {
                staticClass: "bg-white",
                staticStyle: { "z-index": "2", position: "relative" }
              },
              [
                _c("div", { staticClass: "text-center" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "cursor-pointer pt-1 pb-1 d-block text-decoration-underline text-dark-2",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.expended = true
                        }
                      }
                    },
                    [_vm._v("Read More")]
                  )
                ])
              ]
            )
          : _vm.expended === true && _vm.isTruncated
          ? _c("div", { staticClass: "bg-white text-center" }, [
              _c(
                "span",
                {
                  staticClass:
                    "cursor-pointer pt-1 pb-1 d-block text-decoration-underline text-pink",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.expended = false
                    }
                  }
                },
                [_vm._v("Read Less")]
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "bg-white mt-3 py-2 d-flex flex-row align-items-center justify-content-start"
          },
          [
            _c("div", { staticClass: "mr-4 font-size-0-9rem" }, [
              _vm._v("\n\t\t\t\tWas this helpful?\n\t\t\t")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mr-3 d-flex flex-row align-items-center small" },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "text-center mr-1 border border-muted-4 d-flex align-items-center justify-content-center",
                    staticStyle: { width: "22px", height: "22px" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.update("like")
                      }
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "fas fa-thumbs-up",
                      class:
                        (_vm.updatedCounter === "like"
                          ? "text-success"
                          : "text-dark-3") +
                        (_vm.isUpdated
                          ? ""
                          : " cursor-pointer text-hover-success")
                    })
                  ]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "text-muted-4 small" }, [
                  _vm._v(
                    "\n\t\t\t\t\t" +
                      _vm._s(_vm.review.like_counter) +
                      "\n\t\t\t\t"
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mr-3 d-flex flex-row align-items-center small" },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "text-center mr-1 border border-muted-4 d-flex align-items-center justify-content-center",
                    staticStyle: { width: "22px", height: "22px" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.update("dislike")
                      }
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "fas fa-thumbs-down",
                      class:
                        (_vm.updatedCounter === "dislike"
                          ? "text-danger"
                          : "text-dark-3") +
                        (_vm.isUpdated
                          ? ""
                          : " cursor-pointer text-hover-danger")
                    })
                  ]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "text-muted-4 small" }, [
                  _vm._v(
                    "\n\t\t\t\t\t" +
                      _vm._s(_vm.review.dislike_counter) +
                      "\n\t\t\t\t"
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "d-flex flex-row align-items-center small" },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "text-center mr-1 border border-muted-4 d-flex align-items-center justify-content-center",
                    staticStyle: { width: "22px", height: "22px" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.update("report")
                      }
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "fas fa-flag",
                      class:
                        (_vm.updatedCounter === "report"
                          ? "text-danger"
                          : "text-dark-3") +
                        (_vm.isUpdated
                          ? ""
                          : " cursor-pointer text-hover-danger")
                    })
                  ]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "text-muted-4 small" }, [
                  _vm._v(
                    "\n\t\t\t\t\t" +
                      _vm._s(_vm.review.report_counter) +
                      "\n\t\t\t\t"
                  )
                ])
              ]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-5 col-md-3 order-md-3 order-2" }, [
        _c("div", { staticClass: "d-flex flex-row flex-nowrap opacity-0-85" }, [
          _c(
            "div",
            {
              staticClass: "border border-muted-5 text-center rounded-0 mr-2",
              staticStyle: { width: "20px", height: "20px" },
              style: _vm.isRecommended ? "padding: 1px;" : ""
            },
            [
              _c("i", {
                staticClass: "fas",
                class: _vm.isRecommended
                  ? "text-highlight fa-check"
                  : "text-danger fa-times"
              })
            ]
          ),
          _vm._v(" "),
          _c("span", { staticClass: "text-dark-2" }, [
            _vm.isRecommended
              ? _c("span", [_vm._v("Recommend")])
              : _c("span", [_vm._v("Did not recommend")]),
            _vm._v("\n\t\t\t\tthis product\n\t\t\t")
          ])
        ])
      ])
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

/***/ "./resources/js/components/review/ProductReview.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/review/ProductReview.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductReview_vue_vue_type_template_id_0928f75b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductReview.vue?vue&type=template&id=0928f75b& */ "./resources/js/components/review/ProductReview.vue?vue&type=template&id=0928f75b&");
/* harmony import */ var _ProductReview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductReview.vue?vue&type=script&lang=js& */ "./resources/js/components/review/ProductReview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductReview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductReview_vue_vue_type_template_id_0928f75b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductReview_vue_vue_type_template_id_0928f75b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/review/ProductReview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/review/ProductReview.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/review/ProductReview.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductReview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/review/ProductReview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/review/ProductReview.vue?vue&type=template&id=0928f75b&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/review/ProductReview.vue?vue&type=template&id=0928f75b& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReview_vue_vue_type_template_id_0928f75b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductReview.vue?vue&type=template&id=0928f75b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/review/ProductReview.vue?vue&type=template&id=0928f75b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReview_vue_vue_type_template_id_0928f75b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReview_vue_vue_type_template_id_0928f75b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);