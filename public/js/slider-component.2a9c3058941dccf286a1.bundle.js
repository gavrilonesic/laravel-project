(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slider-component"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/general/SliderComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/general/SliderComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var multirange_multirange_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multirange/multirange.css */ "./node_modules/multirange/multirange.css");
/* harmony import */ var multirange_multirange_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multirange_multirange_css__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
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
    min: {
      type: Number,
      "default": 0
    },
    max: {
      type: Number,
      "default": 100
    }
  },
  data: function data() {
    return {
      minPrice: 0,
      maxPrice: 0
    };
  },
  mounted: function mounted() {
    this.minPrice = this.min;
    this.maxPrice = this.max; // window.multirange(this.$refs.range)
  },
  methods: {
    slider: function slider($event) {
      if (this.minPrice > this.maxPrice) {
        var tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }

      this.$emit('range-updated', {
        max: this.maxPrice,
        min: this.minPrice
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/multirange/multirange.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/multirange/multirange.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@supports (--css: variables) {\n\tinput[type=\"range\"].multirange {\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t\tdisplay: inline-block;\n\t\tvertical-align: top;\n\t}\n\n\tinput[type=\"range\"].multirange.original {\n\t\tposition: absolute;\n\t}\n\n\t\tinput[type=\"range\"].multirange.original::-webkit-slider-thumb {\n\t\t\tposition: relative;\n\t\t\tz-index: 2;\n\t\t}\n\n\t\tinput[type=\"range\"].multirange.original::-moz-range-thumb {\n\t\t\ttransform: scale(1); /* FF doesn't apply position it seems */\n\t\t\tz-index: 1;\n\t\t}\n\n\t\tinput[type=\"range\"].multirange::-moz-range-track {\n\t\t\tborder-color: transparent; /* needed to switch FF to \"styleable\" control */\n\t\t}\n\n\tinput[type=\"range\"].multirange.ghost {\n\t\tposition: relative;\n\t\tbackground: var(--track-background);\n\t\t--track-background: linear-gradient(to right,\n\t\t\t\ttransparent var(--low), var(--range-color) 0,\n\t\t\t\tvar(--range-color) var(--high), transparent 0\n\t\t\t) no-repeat 0 45% / 100% 40%;\n\t\t--range-color: hsl(190, 80%, 40%);\n\t}\n\n\t\tinput[type=\"range\"].multirange.ghost::-webkit-slider-runnable-track {\n\t\t\tbackground: var(--track-background);\n\t\t}\n\n\t\tinput[type=\"range\"].multirange.ghost::-moz-range-track {\n\t\t\tbackground: var(--track-background);\n\t\t}\n\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/multirange/multirange.css":
/*!************************************************!*\
  !*** ./node_modules/multirange/multirange.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../css-loader??ref--6-1!../postcss-loader/src??ref--6-2!./multirange.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/multirange/multirange.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/general/SliderComponent.vue?vue&type=template&id=53cdf2da&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/general/SliderComponent.vue?vue&type=template&id=53cdf2da& ***!
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
  return _c("div", [
    _c(
      "div",
      {
        staticClass:
          "d-flex flex-row flex-wrap align-items-center justify-content-between mb-4"
      },
      [
        _vm._t("default"),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "text-nowrap",
            staticStyle: { "font-size": "0.75rem" }
          },
          [
            _vm._v(
              _vm._s(
                _vm._f("truncate")(_vm._f("currencyInt")(_vm.minPrice), 7)
              ) +
                " - " +
                _vm._s(
                  _vm._f("truncate")(_vm._f("currencyInt")(_vm.maxPrice), 7)
                )
            )
          ]
        )
      ],
      2
    ),
    _vm._v(" "),
    _c("div", [
      _c(
        "div",
        { staticClass: "range-slider position-relative d-flex flex-row w-100" },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model.number",
                value: _vm.minPrice,
                expression: "minPrice",
                modifiers: { number: true }
              }
            ],
            staticClass: "multirange d-flex flex-fill w-100 original",
            attrs: {
              type: "range",
              multiple: "multiple",
              min: _vm.min,
              max: _vm.max,
              step: "10"
            },
            domProps: { value: _vm.minPrice },
            on: {
              change: function($event) {
                return _vm.slider($event)
              },
              __r: function($event) {
                _vm.minPrice = _vm._n($event.target.value)
              },
              blur: function($event) {
                return _vm.$forceUpdate()
              }
            }
          }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model.number",
                value: _vm.maxPrice,
                expression: "maxPrice",
                modifiers: { number: true }
              }
            ],
            staticClass: "multirange d-flex flex-fill w-100 ghost",
            staticStyle: {
              "--low": "0%",
              "--high": "100%",
              "--range-color": "#cb3955"
            },
            attrs: {
              type: "range",
              multiple: "multiple",
              min: _vm.min,
              max: _vm.max,
              step: "10"
            },
            domProps: { value: _vm.maxPrice },
            on: {
              change: function($event) {
                return _vm.slider($event)
              },
              __r: function($event) {
                _vm.maxPrice = _vm._n($event.target.value)
              },
              blur: function($event) {
                return _vm.$forceUpdate()
              }
            }
          })
        ]
      )
    ])
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

/***/ "./resources/js/components/general/SliderComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/general/SliderComponent.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SliderComponent_vue_vue_type_template_id_53cdf2da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SliderComponent.vue?vue&type=template&id=53cdf2da& */ "./resources/js/components/general/SliderComponent.vue?vue&type=template&id=53cdf2da&");
/* harmony import */ var _SliderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SliderComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/general/SliderComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SliderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SliderComponent_vue_vue_type_template_id_53cdf2da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SliderComponent_vue_vue_type_template_id_53cdf2da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/general/SliderComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/general/SliderComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/general/SliderComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SliderComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/general/SliderComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/general/SliderComponent.vue?vue&type=template&id=53cdf2da&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/general/SliderComponent.vue?vue&type=template&id=53cdf2da& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderComponent_vue_vue_type_template_id_53cdf2da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SliderComponent.vue?vue&type=template&id=53cdf2da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/general/SliderComponent.vue?vue&type=template&id=53cdf2da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderComponent_vue_vue_type_template_id_53cdf2da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderComponent_vue_vue_type_template_id_53cdf2da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);