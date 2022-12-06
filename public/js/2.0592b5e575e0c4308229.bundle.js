(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/review/ProductReviewForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/review/ProductReviewForm.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      review: {
        title: '',
        name: '',
        grade: 4.5,
        email: '',
        description: ''
      },
      formSubmitted: false,
      errors: [],
      reviewed: false
    };
  },
  mounted: function mounted() {
    var self = this;
    self.reviewed = false;
    var item = localStorage.getItem('rp-' + this.product.id);

    if (item !== null && parseInt(item) === parseInt(this.product.id) && !isNaN(parseInt(item))) {
      this.reviewed = true;
    }
  },
  methods: {
    submit: function submit() {
      if (!this.hasValidData) {
        alert('Name and email fields are required');
        return false;
      }

      var self = this;
      $.ajax({
        url: '/review/' + this.product.id,
        type: 'POST',
        dataType: 'json',
        data: this.review
      }).done(function (response) {
        self.errors = [];
        self.formSubmitted = true;
        self.$root.$emit('reviewCreated', response);
        localStorage.setItem('rp-' + self.product.id, self.product.id);
        self.reviewed = true;
      }).fail(function (response) {
        try {
          self.errors = response.responseJSON.errors;
        } catch (e) {}
      });
    }
  },
  computed: {
    hasErrors: function hasErrors() {
      return this.errors.length !== 0;
    },
    hasValidData: function hasValidData() {
      var emailRegix = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var isEmailValid = this.review.email.split('').length > 3 && emailRegix.test(this.review.email);

      if (!isEmailValid) {
        return false;
      }

      if (this.review.title.split('').length < 3) {
        return false;
      }

      if (this.review.name.split('').length < 3) {
        return false;
      }

      if (this.review.description.split('').length < 3) {
        return false;
      }

      return true;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/review/ProductReviewForm.vue?vue&type=template&id=19114cbf&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/review/ProductReviewForm.vue?vue&type=template&id=19114cbf& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _vm.reviewed === false
    ? _c("div", { staticClass: "mb-5 pb-5" }, [
        _c("div", { staticClass: "mb-4 d-flex flex-column h-100" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mb-3" },
            [
              _c(
                "p",
                { staticClass: "text-muted-3 font-family-open-sans mb-1" },
                [_vm._v("\n\t\t\t\tOverall rating\n\t\t\t")]
              ),
              _vm._v(" "),
              _c("star-rating", {
                attrs: {
                  increment: 0.5,
                  "show-rating": false,
                  "active-color": "#FEB731",
                  "star-size": 25,
                  rating: 4.5
                },
                model: {
                  value: _vm.review.grade,
                  callback: function($$v) {
                    _vm.$set(_vm.review, "grade", $$v)
                  },
                  expression: "review.grade"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "max-w-500px" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { staticClass: "text-dark font-size-0-9rem mb-2" }, [
                _vm._v("Add a headline")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.review.title,
                    expression: "review.title"
                  }
                ],
                staticClass: "form-control rounded-0",
                style: _vm.formSubmitted ? "opacity: 0.7;" : "",
                attrs: {
                  disabled: _vm.formSubmitted,
                  type: "text",
                  max: "99",
                  required: ""
                },
                domProps: { value: _vm.review.title },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.review, "title", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "d-flex flex-row w-100 mt-2 mb-3" }, [
            _c("div", { staticClass: "w-100 max-w-500px mr-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c(
                  "label",
                  { staticClass: "text-dark font-size-0-9rem mb-2" },
                  [_vm._v("Add your name")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.review.name,
                      expression: "review.name"
                    }
                  ],
                  staticClass: "form-control rounded-0",
                  style: _vm.formSubmitted ? "opacity: 0.7;" : "",
                  attrs: {
                    disabled: _vm.formSubmitted,
                    type: "text",
                    max: "99",
                    required: ""
                  },
                  domProps: { value: _vm.review.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.review, "name", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "w-100 max-w-500px" }, [
              _c("div", { staticClass: "form-group mb-0" }, [
                _c(
                  "label",
                  { staticClass: "text-dark font-size-0-9rem mb-2" },
                  [_vm._v("Add your email")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.review.email,
                      expression: "review.email"
                    }
                  ],
                  staticClass: "form-control rounded-0",
                  style: _vm.formSubmitted ? "opacity: 0.7;" : "",
                  attrs: {
                    disabled: _vm.formSubmitted,
                    type: "email",
                    max: "99",
                    required: ""
                  },
                  domProps: { value: _vm.review.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.review, "email", $event.target.value)
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("hr", { staticClass: "border-muted-1 mt-0 mb-4 w-100" }),
          _vm._v(" "),
          _c("div", { staticClass: "pt-2" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { staticClass: "text-dark font-size-0-9rem mb-2" }, [
                _vm._v("Write your review")
              ]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.review.description,
                    expression: "review.description"
                  }
                ],
                staticClass: "form-control rounded-0 p-3",
                attrs: {
                  disabled: _vm.formSubmitted,
                  cols: "30",
                  rows: "10",
                  maxlength: "600",
                  placeholder: "Review summary"
                },
                domProps: { value: _vm.review.description },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.review, "description", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "font-family-open-sans mt-2 text-right" },
                [
                  _c("span", { staticStyle: { color: "#F2994A" } }, [
                    _vm._v(_vm._s(_vm.review.description.length))
                  ]),
                  _vm._v(" of "),
                  _c("span", { staticClass: "text-dark" }, [_vm._v("600")]),
                  _vm._v(" characters\n\t\t\t\t")
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-right mt-4" }, [
            _c(
              "button",
              {
                staticClass:
                  "btn btn-highlight px-4 py-2 text-uppercase btn-lg min-h-44px",
                attrs: { type: "button", disabled: _vm.formSubmitted },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.submit()
                  }
                }
              },
              [
                _c(
                  "small",
                  {
                    staticClass:
                      "px-2 py-1 text-uppercase d-block font-weight-bold font-size-0-9rem"
                  },
                  [_vm._v("Submit review")]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "w-100" }, [
            _vm.formSubmitted
              ? _c("div", [
                  _c("div", { staticClass: "alert alert-success mt-3" }, [
                    _vm._v("\n\t\t\t\t\tThank you.\n\t\t\t\t")
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.hasErrors
              ? _c("div", [
                  _c("div", { staticClass: "alert alert-danger mt-3" }, [
                    _c("strong", [_vm._v(_vm._s(_vm.errors.message))]),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "mb-0" },
                      _vm._l(_vm.errors.errors, function(items, index) {
                        return _c(
                          "li",
                          _vm._l(items, function(item, key) {
                            return _c("p", { staticClass: "m-0" }, [
                              _vm._v(
                                "\n\t\t\t        \t\t\t" +
                                  _vm._s(item) +
                                  "\n\t\t\t        \t\t"
                              )
                            ])
                          }),
                          0
                        )
                      }),
                      0
                    )
                  ])
                ])
              : _vm._e()
          ])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-3" }, [
      _c(
        "h1",
        { staticClass: "font-weight-bold text-dark mb-2 line-height-1-1 h5" },
        [_vm._v("\n\t\t\t\tReview This Product\n\t\t\t")]
      ),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass: "text-muted-3 lead font-size-1rem font-family-open-sans"
        },
        [_vm._v("\n\t\t\t\tShare your thoughts with other customers.\n\t\t\t")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "max-w-500px mb-1" }, [
      _c("hr", { staticClass: "border-muted-1" })
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

/***/ "./resources/js/components/review/ProductReviewForm.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/review/ProductReviewForm.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductReviewForm_vue_vue_type_template_id_19114cbf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductReviewForm.vue?vue&type=template&id=19114cbf& */ "./resources/js/components/review/ProductReviewForm.vue?vue&type=template&id=19114cbf&");
/* harmony import */ var _ProductReviewForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductReviewForm.vue?vue&type=script&lang=js& */ "./resources/js/components/review/ProductReviewForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductReviewForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductReviewForm_vue_vue_type_template_id_19114cbf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductReviewForm_vue_vue_type_template_id_19114cbf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/review/ProductReviewForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/review/ProductReviewForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/review/ProductReviewForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReviewForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductReviewForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/review/ProductReviewForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReviewForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/review/ProductReviewForm.vue?vue&type=template&id=19114cbf&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/review/ProductReviewForm.vue?vue&type=template&id=19114cbf& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReviewForm_vue_vue_type_template_id_19114cbf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductReviewForm.vue?vue&type=template&id=19114cbf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/review/ProductReviewForm.vue?vue&type=template&id=19114cbf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReviewForm_vue_vue_type_template_id_19114cbf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReviewForm_vue_vue_type_template_id_19114cbf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);