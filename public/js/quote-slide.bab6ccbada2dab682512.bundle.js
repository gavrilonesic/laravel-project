(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quote-slide"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quote/QuoteSlide.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/quote/QuoteSlide.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      quote: {
        name: '',
        email: '',
        phone: '',
        content: ''
      },
      errors: [],
      formSubmitted: false
    };
  },
  methods: {
    submit: function submit() {
      var self = this;
      $(self.$el).busyLoad('show');
      $.ajax({
        url: '/quote',
        type: 'POST',
        data: this.quote
      }).done(function (response) {
        self.errors = [];
        self.formSubmitted = true;
      }).fail(function (response) {
        self.errors = response.responseJSON;
      }).always(function () {
        $(self.$el).busyLoad('hide');
      });
    }
  },
  computed: {
    hasErrors: function hasErrors() {
      return this.errors.length !== 0;
    },
    hasValidData: function hasValidData() {
      var emailRegix = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var isEmailValid = this.quote.email.split('').length > 3 && emailRegix.test(this.quote.email);

      if (!isEmailValid) {
        return false;
      }

      if (this.quote.name.split('').length === 0) {
        return false;
      }

      if (this.quote.phone.split('').length < 9) {
        return false;
      }

      if (this.quote.content.split('').length <= 1) {
        return false;
      }

      return true;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quote/QuoteSlide.vue?vue&type=template&id=af54df1a&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/quote/QuoteSlide.vue?vue&type=template&id=af54df1a& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "form-group" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.quote.name,
            expression: "quote.name"
          }
        ],
        staticClass: "form-control",
        style: _vm.formSubmitted ? "opacity: 0.7;" : "",
        attrs: {
          disabled: _vm.formSubmitted,
          placeholder: "Name",
          type: "text"
        },
        domProps: { value: _vm.quote.name },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.quote, "name", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.quote.email,
            expression: "quote.email"
          }
        ],
        staticClass: "form-control",
        style: _vm.formSubmitted ? "opacity: 0.7;" : "",
        attrs: {
          disabled: _vm.formSubmitted,
          placeholder: "Email Address",
          type: "email"
        },
        domProps: { value: _vm.quote.email },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.quote, "email", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.quote.phone,
            expression: "quote.phone"
          }
        ],
        staticClass: "form-control",
        style: _vm.formSubmitted ? "opacity: 0.7;" : "",
        attrs: {
          disabled: _vm.formSubmitted,
          placeholder: "Phone",
          type: "tel"
        },
        domProps: { value: _vm.quote.phone },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.quote, "phone", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("textarea", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.quote.content,
            expression: "quote.content"
          }
        ],
        staticClass: "form-control",
        style: _vm.formSubmitted ? "opacity: 0.7;" : "",
        attrs: {
          disabled: _vm.formSubmitted,
          placeholder: "Message",
          cols: "30",
          rows: "3"
        },
        domProps: { value: _vm.quote.content },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.quote, "content", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group text-right" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-highlight px-5 rounded-sides-pill-sm",
          attrs: { disabled: !_vm.hasValidData || _vm.formSubmitted },
          on: {
            click: function($event) {
              return _vm.submit()
            }
          }
        },
        [_vm._v("Submit!")]
      )
    ]),
    _vm._v(" "),
    _vm.formSubmitted
      ? _c("div", [
          _c("div", { staticClass: "alert alert-success" }, [
            _vm._v(
              "\n\t\t\tThank you, we'll have a quote ready in 20 business minutes.\n\t\t"
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.hasErrors
      ? _c("div", [
          _c("div", { staticClass: "alert alert-danger" }, [
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
                        "\n\t        \t\t\t" + _vm._s(item) + "\n\t        \t\t"
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

/***/ "./resources/js/components/quote/QuoteSlide.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/quote/QuoteSlide.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuoteSlide_vue_vue_type_template_id_af54df1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuoteSlide.vue?vue&type=template&id=af54df1a& */ "./resources/js/components/quote/QuoteSlide.vue?vue&type=template&id=af54df1a&");
/* harmony import */ var _QuoteSlide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuoteSlide.vue?vue&type=script&lang=js& */ "./resources/js/components/quote/QuoteSlide.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuoteSlide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuoteSlide_vue_vue_type_template_id_af54df1a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuoteSlide_vue_vue_type_template_id_af54df1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/quote/QuoteSlide.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/quote/QuoteSlide.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/quote/QuoteSlide.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteSlide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./QuoteSlide.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quote/QuoteSlide.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteSlide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/quote/QuoteSlide.vue?vue&type=template&id=af54df1a&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/quote/QuoteSlide.vue?vue&type=template&id=af54df1a& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteSlide_vue_vue_type_template_id_af54df1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./QuoteSlide.vue?vue&type=template&id=af54df1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quote/QuoteSlide.vue?vue&type=template&id=af54df1a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteSlide_vue_vue_type_template_id_af54df1a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuoteSlide_vue_vue_type_template_id_af54df1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);