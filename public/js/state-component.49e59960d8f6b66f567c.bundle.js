(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["state-component"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/address/StateComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/address/StateComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['label', 'cssClass', 'addressType', 'selectedStateId'],
  data: function data() {
    return {
      state_id: null,
      states: [],
      state: null
    };
  },
  watch: {
    selectedStateId: function selectedStateId(newValue) {
      var _this = this;

      newValue = parseInt(newValue);

      if (isNaN(newValue)) {
        return false;
      }

      if (this.states.length > 0) {
        var state = this.states.filter(function (state) {
          return state.value == _this.selectedStateId;
        });

        try {
          if (state[0] !== undefined) {
            this.state = state[0].abv;
          }
        } catch (e) {}
      }
    },
    states: function states(newValue, oldValue) {
      var _this2 = this;

      if (newValue.length > 0) {
        var stateId = null;

        if (this.state_id == null) {
          stateId = localStorage.getItem(this.addressType + '.state_id');
          stateId = stateId === null || this.state_id == 'null' ? '' : this.state_id;
        }

        if (stateId !== undefined && stateId !== null) {
          this.state_id = stateId;
        }

        if (this.state == null) {
          this.state = localStorage.getItem(this.addressType + '.state');
          this.state = this.state === null || this.state == 'null' ? '' : this.state;
        }

        if (this.state != null && (isNaN(parseInt(this.state_id)) || parseInt(this.state_id) === 0)) {
          var states = this.states.filter(function (state) {
            return state.abv == _this2.state;
          });

          try {
            this.state_id = states[0] !== undefined ? states[0].value : null;
            localStorage.setItem(this.addressType + '.state_id', this.state_id);
          } catch (e) {
            console.log(e);
          }
        }
      }
    },
    state: function state(value, oldValue) {
      try {
        if (value !== undefined && value !== null) {
          var states = this.states.filter(function (state) {
            return state.abv == value;
          });

          try {
            this.state_id = states[0] !== undefined ? states[0].value : null;
          } catch (e) {
            console.log(e);
          }
        } else {
          this.state_id = null;
        }

        localStorage.setItem(this.addressType + '.state', value);
        localStorage.setItem(this.addressType + '.state_id', this.state_id);
      } catch (e) {}
    }
  },
  mounted: function mounted() {
    this.getStates();
  },
  methods: {
    getStates: function getStates() {
      var self = this;
      $.ajax({
        url: '/api/country/1/state',
        type: 'GET',
        dataType: 'json'
      }).done(function (response) {
        try {
          self.states = response.data.map(function (state) {
            return {
              label: state.name,
              abv: state.abv,
              value: state.id
            };
          });

          if (isNaN(parseInt(self.selectedStateId)) === false) {
            var state = self.states.filter(function (state) {
              return state.value == self.selectedStateId;
            });

            try {
              if (state[0] !== undefined) {
                self.state = state[0].abv;
              }
            } catch (e) {}
          }
        } catch (e) {}
      }).fail(function (error) {
        self.states = [];
      });
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/address/StateComponent.vue?vue&type=template&id=0bf0f0dc&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/address/StateComponent.vue?vue&type=template&id=0bf0f0dc& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      "label",
      { staticClass: "text-dark font-weight-bold", attrs: { for: "state" } },
      [
        _c("span", { staticClass: "text-danger font-weight-bolder" }, [
          _vm._v("*")
        ]),
        _vm._v("\n\t\t" + _vm._s(_vm.label) + "\n\t")
      ]
    ),
    _vm._v(" "),
    _c(
      "select",
      {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.state,
            expression: "state"
          }
        ],
        ref: "state",
        class: _vm.cssClass,
        attrs: {
          name: "state",
          autocomplete: "shipping region",
          width: "100%"
        },
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
              _vm.state = $event.target.multiple
                ? $$selectedVal
                : $$selectedVal[0]
            },
            function($event) {
              return _vm.$root.$emit(
                "getStateCities",
                _vm.addressType,
                _vm.state
              )
            }
          ]
        }
      },
      [
        _c("option", { attrs: { value: "" } }, [_vm._v("-- Select --")]),
        _vm._v(" "),
        _vm._l(_vm.states, function(state) {
          return _c("option", { domProps: { value: state.abv } }, [
            _vm._v(_vm._s(state.label))
          ])
        })
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "d-none" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.state_id,
            expression: "state_id"
          }
        ],
        attrs: { type: "hidden", name: _vm.addressType + "_address_state_id" },
        domProps: { value: _vm.state_id },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.state_id = $event.target.value
          }
        }
      })
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

/***/ "./resources/js/components/address/StateComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/address/StateComponent.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StateComponent_vue_vue_type_template_id_0bf0f0dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StateComponent.vue?vue&type=template&id=0bf0f0dc& */ "./resources/js/components/address/StateComponent.vue?vue&type=template&id=0bf0f0dc&");
/* harmony import */ var _StateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StateComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/address/StateComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StateComponent_vue_vue_type_template_id_0bf0f0dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StateComponent_vue_vue_type_template_id_0bf0f0dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/address/StateComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/address/StateComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/address/StateComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./StateComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/address/StateComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/address/StateComponent.vue?vue&type=template&id=0bf0f0dc&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/address/StateComponent.vue?vue&type=template&id=0bf0f0dc& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StateComponent_vue_vue_type_template_id_0bf0f0dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./StateComponent.vue?vue&type=template&id=0bf0f0dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/address/StateComponent.vue?vue&type=template&id=0bf0f0dc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StateComponent_vue_vue_type_template_id_0bf0f0dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StateComponent_vue_vue_type_template_id_0bf0f0dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);