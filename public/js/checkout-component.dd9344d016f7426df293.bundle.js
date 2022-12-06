(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-component"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/checkout/CheckoutComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/checkout/CheckoutComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _helpers_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/errors */ "./resources/js/helpers/errors.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['name', 'email', 'phone', 'routeUrl', 'validateUrl', 'errors', 'addresses'],
  data: function data() {
    return {
      selectedAddress: null,
      cartItems: [],
      shippingSelected: false,
      showPaymentOptions: false,
      validationErrors: undefined,
      loading: false,
      checkout: {
        name: '',
        email: '',
        phone: '',
        billingAddress: {
          address_1: "",
          address_2: "",
          city: "",
          state_id: "",
          zipcode: ""
        },
        shippingAddress: {
          address_1: "",
          address_2: "",
          city: "",
          state_id: "",
          zipcode: ""
        },
        validatedAddress: undefined,
        shippingAddressDifferent: false,
        paymentMethod: 'credit_card'
      }
    };
  },
  watch: {
    selectedAddress: function selectedAddress(newValue) {
      if (newValue !== null) {
        this.$root.$emit('selectedAddressUpdated', newValue);
      }
    },
    'checkout.shippingAddressDifferent': {
      handler: function handler(newValue) {
        localStorage.setItem('checkout.shippingAddressDifferent', newValue);
      }
    },
    'checkout.name': {
      handler: function handler(newValue) {
        if (newValue != '') {
          localStorage.setItem('checkout.name', newValue);
        }
      }
    },
    'checkout.phone': {
      handler: function handler(newValue) {
        if (newValue != '') {
          localStorage.setItem('checkout.phone', newValue);
        }
      }
    },
    'checkout.email': {
      handler: function handler(newValue) {
        if (newValue != '') {
          localStorage.setItem('checkout.email', newValue);
        }
      }
    },
    'checkout.paymentMethod': {
      handler: function handler(newValue) {
        this.$root.$emit('paymentMethodUpdated', newValue);
      }
    }
  },
  mounted: function mounted() {
    var self = this;
    this.$root.$on('validationAddressCompleted', function (selectedAddress) {
      try {
        self.checkout.validatedAddress = selectedAddress;
        self.submit($(self.$el).serialize() + '&' + $.param({
          'validatedAddress': self.checkout.validatedAddress
        }));
      } catch (e) {}
    });
    this.$root.$on('validationAddressClosed', function (selectedAddress) {//
    });
    this.validationErrors = this.errors;

    if (this.validationErrors === undefined || this.validationErrors.errors === undefined) {
      this.validationErrors.errors = {};
    }

    this.$root.$on('cartContentLoaded', function (cartItems) {
      self.cartItems = cartItems;
    });

    if (this.name !== undefined) {
      this.checkout.name = this.name;
    }

    if (this.email !== undefined) {
      this.checkout.email = this.email;
    }

    if (this.phone !== undefined) {
      this.checkout.phone = this.phone;
    }

    self.loadLocalStorage();
  },
  methods: {
    loadLocalStorage: function loadLocalStorage() {
      this.checkout.name = localStorage.getItem('checkout.name');
      this.checkout.email = localStorage.getItem('checkout.email');
      this.checkout.phone = localStorage.getItem('checkout.phone');
      this.checkout.shippingAddressDifferent = localStorage.getItem('checkout.shippingAddressDifferent') == 'true' ? 'true' : 'false';
      this.checkout.name = this.checkout.name == null || this.checkout.name == 'null' ? '' : this.checkout.name;
      this.checkout.email = this.checkout.email == null || this.checkout.email == 'null' ? '' : this.checkout.email;
      this.checkout.phone = this.checkout.phone == null || this.checkout.phone == 'null' ? '' : this.checkout.phone;
      this.checkout.shippingAddressDifferent = this.checkout.shippingAddressDifferent == null || this.checkout.shippingAddressDifferent == 'null' ? '' : this.checkout.shippingAddressDifferent;
    },
    resetLocalStorage: function resetLocalStorage() {
      localStorage.setItem('checkout.name', '');
      localStorage.setItem('checkout.email', '');
      localStorage.setItem('checkout.phone', '');
      localStorage.setItem('checkout.shippingAddressDifferent', '');
      localStorage.setItem('shipping.zipcode', '');
      localStorage.setItem('shipping.address_1', '');
      localStorage.setItem('shipping.address_2', '');
      localStorage.setItem('shipping.city', '');
      localStorage.setItem('shipping.state', '');
      localStorage.setItem('shipping.state_id', '');
      localStorage.setItem('zipcode', '');
      localStorage.setItem('billing.address_1', '');
      localStorage.setItem('billing.address_2', '');
      localStorage.setItem('billing.city', '');
      localStorage.setItem('billing.state', '');
      localStorage.setItem('billing.state_id', '');
      location.reload();
    },
    storeCheckoutData: function storeCheckoutData() {
      localStorage.setItem('checkout', JSON.stringify(this.checkout));
    },
    updateShippingSelected: function updateShippingSelected(shipping) {
      if (_typeof(shipping) === 'object' && shipping !== undefined) {
        this.shippingSelected = true;
      } else {
        this.shippingSelected = false;
      }
    },
    executeCheckout: function executeCheckout() {
      if (this.shippingSelected === false) {
        return;
      }

      var self = this;
      this.loading = true;
      $('#app').busyLoad('hide');
      $('#app').busyLoad('show');
      $.ajax({
        url: route('checkout.execute'),
        type: 'POST',
        dataType: 'json',
        data: $(self.$el).serialize() + '&' + $.param({
          'validatedAddress': self.checkout.validatedAddress
        })
      }).done(function (response) {
        window.onbeforeunload = undefined;
        location.href = response;
      }).fail(function (response) {
        self.showPaymentOptions = false;

        try {
          self.validationErrors = Object.assign({}, self.validationErrors, response.responseJSON);
          self.validationErrors.message = self.$set(self.validationErrors, 'message', response.responseJSON.message);
          self.validationErrors.errors = self.$set(self.validationErrors, 'errors', response.responseJSON.errors);
        } catch (e) {}

        setTimeout(function () {
          $([document.documentElement, document.body]).animate({
            scrollTop: $('#error-container').offset().top
          }, 20);
        }, 250);
      }).always(function (response) {
        self.loading = false;
        $('#app').busyLoad('hide');
      });
    },
    submit: function submit(data) {
      var self = this;
      this.loading = true;
      this.validationErrors = undefined;
      $('#app').busyLoad('hide');
      $('#app').busyLoad('show');
      $.ajax({
        url: this.routeUrl,
        type: 'POST',
        dataType: 'json',
        data: data
      }).done(function (response) {
        self.showPaymentOptions = true;

        window.onbeforeunload = function () {
          return "You have attempted to leave this page. Are you sure?";
        };

        setTimeout(function () {
          $([document.documentElement, document.body]).animate({
            scrollTop: $('#shipping-container').offset().top - ($('.sticky-header').height() + 20)
          }, 20);
        }, 300);
      }).fail(function (response) {
        self.validationErrors = Object.assign({}, self.validationErrors, response.responseJSON);
        self.validationErrors.message = self.$set(self.validationErrors, 'message', response.responseJSON.message);
        self.validationErrors.errors = self.$set(self.validationErrors, 'errors', response.responseJSON.errors);
      }).always(function () {
        self.loading = false;
        $('#app').busyLoad('hide');
      });
    },
    validate: function validate() {
      var self = this;
      this.loading = true;
      this.validationErrors = undefined;
      $('#app').busyLoad('show');
      $.ajax({
        url: this.validateUrl,
        type: 'POST',
        dataType: 'json',
        data: $(this.$el).serialize()
      }).done(function (response) {
        self.$root.$emit('validateAddress', response);
      }).fail(function (response) {
        try {
          self.validationErrors = Object.assign({}, self.validationErrors, response.responseJSON);
          self.validationErrors.message = self.$set(self.validationErrors, 'message', response.responseJSON.message);
          self.validationErrors.errors = self.$set(self.validationErrors, 'errors', response.responseJSON.errors);
        } catch (e) {}
      }).always(function () {
        self.loading = false;
        $('#app').busyLoad('hide');
      });
    },
    hasError: function hasError(attribute) {
      if (this.validationErrors === undefined) {
        return false;
      }

      if (this.validationErrors.length === 0) {
        return false;
      }

      if (this.validationErrors.errors === undefined) {
        return false;
      }

      return _helpers_errors__WEBPACK_IMPORTED_MODULE_0__["default"].has(this.validationErrors.errors, attribute);
    },
    getError: function getError(attribute) {
      return _helpers_errors__WEBPACK_IMPORTED_MODULE_0__["default"].get(this.validationErrors.errors, attribute);
    },
    getValidationClass: function getValidationClass(attribute) {
      if (!this.hasErrors) {
        return '';
      }

      if (this.hasError(attribute)) {
        return 'is-invalid';
      }

      return 'is-valid';
    }
  },
  computed: {
    hasErrors: function hasErrors() {
      return this.validationErrors !== undefined && this.validationErrors.message !== undefined;
    },
    errorsList: function errorsList() {
      if (this.validationErrors !== undefined && this.validationErrors.errors !== undefined) {
        return this.validationErrors.errors;
      }

      return {};
    },
    canCheckout: function canCheckout() {
      return this.cartItems.length > 0;
    },
    canUsePaypal: function canUsePaypal() {
      var subscriptionItemsCount = 0;
      var regularItemsCount = 0;
      this.cartItems.map(function (item) {
        try {
          if (item.attributes.is_subscription !== undefined && item.attributes.is_subscription !== null && item.attributes.is_subscription === true) {
            subscriptionItemsCount++;
          } else {
            regularItemsCount++;
          }
        } catch (e) {
          regularItemsCount++;
        }
      });

      if (subscriptionItemsCount > 1) {
        return false;
      }

      if (regularItemsCount > 0 && subscriptionItemsCount > 0) {
        return false;
      }

      if (regularItemsCount === 0 && subscriptionItemsCount === 1) {
        return true;
      }

      return true;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/checkout/CheckoutComponent.vue?vue&type=style&index=0&id=8815c58e&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/checkout/CheckoutComponent.vue?vue&type=style&index=0&id=8815c58e&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nform[data-v-8815c58e] {\n\ttransition: filter 1s ease-in;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/checkout/CheckoutComponent.vue?vue&type=style&index=0&id=8815c58e&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/checkout/CheckoutComponent.vue?vue&type=style&index=0&id=8815c58e&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CheckoutComponent.vue?vue&type=style&index=0&id=8815c58e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/checkout/CheckoutComponent.vue?vue&type=style&index=0&id=8815c58e&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/checkout/CheckoutComponent.vue?vue&type=template&id=8815c58e&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/checkout/CheckoutComponent.vue?vue&type=template&id=8815c58e&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    "form",
    {
      staticClass: "needs-validation jq-checkout-form",
      attrs: { novalidate: "", method: "POST" }
    },
    [
      _vm._t("default"),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row mb-5" }, [
        _c("div", { staticClass: "col-12" }, [
          _c(
            "div",
            {
              staticClass:
                "d-flex flex-row flex-nowrap align-items-center justify-content-center",
              staticStyle: { opacity: "0.8" }
            },
            [
              _c("div", {
                staticClass: "bg-highlight rounded-lg flex-fill text-white",
                staticStyle: { height: "8px" }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "text-nowrap bg-highlight mx-n1 text-white rounded-circle d-flex align-items-center justify-content-center text-center small",
                  staticStyle: {
                    "font-size": "50%",
                    height: "36px",
                    width: "36px",
                    "z-index": "1"
                  }
                },
                [_vm._v("\n\t    \t\t\t\tStep 1\n\t    \t\t\t")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "bg-secondary text-muted flex-fill mx-n1",
                  staticStyle: { height: "8px" }
                },
                [
                  _c("div", {
                    class: _vm.showPaymentOptions
                      ? "bg-highlight text-white w-100"
                      : "bg-highlight text-muted w-75",
                    staticStyle: { height: "8px" }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "text-nowrap rounded-circle d-flex align-items-center justify-content-center text-center small",
                  class: _vm.showPaymentOptions
                    ? "bg-highlight text-white"
                    : "bg-secondary text-muted",
                  staticStyle: {
                    "font-size": "50%",
                    height: "36px",
                    width: "36px",
                    "z-index": "1"
                  }
                },
                [_vm._v("\n\t    \t\t\t\tStep 2\n\t    \t\t\t")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "rounded-lg flex-fill mx-n1 bg-secondary",
                  staticStyle: { height: "8px" }
                },
                [
                  _c("div", {
                    staticClass: "w-75",
                    class: _vm.showPaymentOptions
                      ? "bg-highlight text-white"
                      : "bg-secondary text-muted",
                    staticStyle: { height: "8px" }
                  })
                ]
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showPaymentOptions === false,
              expression: "showPaymentOptions === false"
            }
          ]
        },
        [
          _c("div", { staticClass: "position-relative" }, [
            _vm.addresses !== undefined &&
            _vm.addresses !== null &&
            _vm.addresses.length > 0
              ? _c("div", { staticClass: "mb-5" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("hr", { staticClass: "border-muted-1 mt-0" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "list-group" },
                        _vm._l(_vm.addresses, function(address) {
                          return _c(
                            "div",
                            {
                              staticClass:
                                "list-group-item list-group-item-action list-group-item-secondary d-flex flex-row align-items-center justify-content-between",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  _vm.selectedAddress = address
                                }
                              }
                            },
                            [
                              _c("div", [
                                address.address_1 !== null
                                  ? _c("span", [
                                      _vm._v(_vm._s(address.address_1) + " "),
                                      _c("br")
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                address.address_2 !== null
                                  ? _c("span", [
                                      _vm._v(_vm._s(address.address_2) + " "),
                                      _c("br")
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                address.city !== null
                                  ? _c("span", [
                                      _vm._v(_vm._s(address.city) + ", ")
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                address.state !== undefined
                                  ? _c("span", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t       \t\t\t\t" +
                                          _vm._s(address.state.abv) +
                                          ", \n\t\t\t\t\t\t       \t\t\t"
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                address.zipcode
                                  ? _c("span", [
                                      _vm._v(_vm._s(address.zipcode) + ", ")
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                address.country !== null &&
                                address.country.iso !== undefined
                                  ? _c("span", [
                                      _vm._v(_vm._s(address.country.iso))
                                    ])
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.selectedAddress,
                                      expression: "selectedAddress"
                                    }
                                  ],
                                  attrs: { type: "radio" },
                                  domProps: {
                                    value: address,
                                    checked: _vm._q(
                                      _vm.selectedAddress,
                                      address
                                    )
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.selectedAddress = address
                                    }
                                  }
                                })
                              ])
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _vm.selectedAddress !== null
                        ? _c("div", { staticClass: "text-right" }, [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn py-2 text-uppercase btn-lg min-w-180px min-w-sm-210px min-h-44px btn-danger mt-3",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.selectedAddress = null
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t       \t\t\tClear\n\t\t\t\t\t       \t\t"
                                )
                              ]
                            )
                          ])
                        : _vm._e()
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-5" },
              [
                _c("div", { staticClass: "row" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-12 col-lg-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.checkout.name,
                            expression: "checkout.name"
                          }
                        ],
                        class:
                          "form-control form-control rounded-0 border bg-secondary-1 border-muted-6 " +
                          _vm.getValidationClass("name"),
                        attrs: {
                          type: "text",
                          id: "name",
                          placeholder: "Enter your name",
                          required: "",
                          name: "name"
                        },
                        domProps: { value: _vm.checkout.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.checkout, "name", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.hasError("name")
                        ? _c(
                            "div",
                            { staticClass: "invalid-feedback d-block" },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\t" +
                                  _vm._s(_vm.getError("name")) +
                                  "\n\t\t\t\t\t\t\t\t"
                              )
                            ]
                          )
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6 col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(4),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.checkout.phone,
                            expression: "checkout.phone"
                          }
                        ],
                        class:
                          "form-control form-control rounded-0 border bg-secondary-1 border-muted-6 " +
                          _vm.getValidationClass("phone"),
                        attrs: {
                          type: "tel",
                          id: "phone",
                          placeholder: "3105551212",
                          required: "",
                          name: "phone"
                        },
                        domProps: { value: _vm.checkout.phone },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.checkout, "phone", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.hasError("phone")
                        ? _c(
                            "div",
                            { staticClass: "invalid-feedback d-block" },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\t" +
                                  _vm._s(_vm.getError("phone")) +
                                  "\n\t\t\t\t\t\t\t\t"
                              )
                            ]
                          )
                        : _c("div", { staticClass: "mt-2 small" }, [
                            _c("i", { staticClass: "fas fa-info-circle" }),
                            _vm._v(
                              " Needed for delivery purposes.\n\t\t                        "
                            )
                          ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6 col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(5),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.checkout.email,
                            expression: "checkout.email"
                          }
                        ],
                        class:
                          "form-control form-control rounded-0 border bg-secondary-1 border-muted-6 " +
                          _vm.getValidationClass("email"),
                        attrs: {
                          type: "email",
                          id: "email",
                          placeholder: "email@example.com",
                          required: "",
                          name: "email"
                        },
                        domProps: { value: _vm.checkout.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.checkout, "email", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.hasError("email")
                        ? _c(
                            "div",
                            { staticClass: "invalid-feedback d-block" },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\t" +
                                  _vm._s(_vm.getError("email")) +
                                  "\n\t\t\t\t\t\t\t\t"
                              )
                            ]
                          )
                        : _c("div", { staticClass: "mt-2 small" }, [
                            _c("i", { staticClass: "fas fa-info-circle" }),
                            _vm._v(
                              " Needed for delivery purposes.\n\t\t                        "
                            )
                          ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("address-component", {
                  attrs: {
                    address: _vm.checkout.billingAddress,
                    errors: _vm.errorsList,
                    "on-checkout": "true",
                    "address-type": "billing"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-5", attrs: { id: "shipping-address" } },
              [
                _c("div", { staticClass: "mb-4" }, [
                  _c(
                    "h4",
                    {
                      staticClass:
                        "d-flex justify-content-between align-items-end mb-1"
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "font-weight-normal text-dark h4 mb-0" },
                        [_vm._v("Shipping address")]
                      ),
                      _vm._v(" "),
                      _vm.checkout.shippingAddressDifferent == "true"
                        ? _c("small", [_vm._m(6)])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c("hr", { staticClass: "border-muted-1 mt-0" })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _c(
                    "div",
                    { staticClass: "custom-control custom-radio mb-2" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.checkout.shippingAddressDifferent,
                            expression: "checkout.shippingAddressDifferent"
                          }
                        ],
                        staticClass: "custom-control-input",
                        attrs: {
                          type: "radio",
                          value: "false",
                          id: "ship-to-billing-address",
                          name: "shipping_address_different"
                        },
                        domProps: {
                          checked: _vm._q(
                            _vm.checkout.shippingAddressDifferent,
                            "false"
                          )
                        },
                        on: {
                          change: function($event) {
                            return _vm.$set(
                              _vm.checkout,
                              "shippingAddressDifferent",
                              "false"
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "custom-control-label text-dark",
                          attrs: { for: "ship-to-billing-address" }
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t                Ship to My Billing Address\n\t\t\t\t            "
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "custom-control custom-radio" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.checkout.shippingAddressDifferent,
                          expression: "checkout.shippingAddressDifferent"
                        }
                      ],
                      staticClass: "custom-control-input",
                      attrs: {
                        type: "radio",
                        value: "true",
                        id: "shipping_address_different",
                        name: "shipping_address_different"
                      },
                      domProps: {
                        checked: _vm._q(
                          _vm.checkout.shippingAddressDifferent,
                          "true"
                        )
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(
                            _vm.checkout,
                            "shippingAddressDifferent",
                            "true"
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "custom-control-label text-dark",
                        attrs: { for: "shipping_address_different" }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t                Ship to a Different Address\n\t\t\t\t            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm.checkout.shippingAddressDifferent == "true"
                  ? _c(
                      "div",
                      { staticClass: "mb-4" },
                      [
                        _c("address-component", {
                          attrs: {
                            address: _vm.checkout.shippingAddress,
                            errors: _vm.errorsList,
                            "on-checkout": "true",
                            "address-type": "shipping"
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showPaymentOptions === false,
                  expression: "showPaymentOptions === false"
                }
              ],
              staticClass: "my-5 text-right"
            },
            [
              _c(
                "button",
                {
                  staticClass:
                    "btn btn-outline-muted-4 py-2 text-uppercase btn-lg min-w-180px min-w-sm-210px min-h-44px mr-1",
                  attrs: { type: "button", disabled: _vm.loading },
                  on: {
                    click: function($event) {
                      return _vm.resetLocalStorage()
                    }
                  }
                },
                [
                  _c(
                    "small",
                    {
                      staticClass:
                        "py-1 font-weight-border font-size-0-85rem font-size-sm-0-9rem"
                    },
                    [_vm._v("Reset Form")]
                  )
                ]
              ),
              _vm._v(" "),
              _vm.canCheckout
                ? _c(
                    "button",
                    {
                      staticClass:
                        "btn py-2 text-uppercase btn-lg min-w-180px min-w-sm-210px min-h-44px",
                      class: _vm.hasErrors ? " btn-danger" : "btn-highlight",
                      attrs: { disabled: _vm.loading, type: "button" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.validate()
                        }
                      }
                    },
                    [
                      _c(
                        "small",
                        {
                          staticClass:
                            "py-1 d-block font-weight-bold font-size-0-9rem"
                        },
                        [
                          !_vm.hasErrors
                            ? _c("span", [
                                _vm.loading === false
                                  ? _c("span", [_vm._v("Continue")])
                                  : _c("span", [
                                      _c("i", {
                                        staticClass:
                                          "fas fa-spinner fa-pulse mr-2"
                                      }),
                                      _vm._v(
                                        "\n\t\t            \t\t\tPlease wait\n\t\t            \t\t"
                                      )
                                    ])
                              ])
                            : _c("span", [
                                _c("i", { staticClass: "fas fa-sync mr-2" }),
                                _vm._v(
                                  "\n\t\t        \t\t\tTRY AGAIN\n\t\t        \t\t"
                                )
                              ])
                        ]
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.hasErrors
                ? _c(
                    "div",
                    {
                      staticClass: "mt-3 alert alert-danger text-left",
                      attrs: { id: "error-container" }
                    },
                    [
                      _c("div", { staticClass: "d-flex flex-row" }, [
                        _vm._m(7),
                        _vm._v(" "),
                        _c("div", [
                          _vm._v(
                            "\n\t\t        \t\t\t" +
                              _vm._s(_vm.validationErrors.message) +
                              "\n\t\t        \t\t"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm.validationErrors.errors
                        ? _c("div", { staticClass: "mt-2" }, [
                            _c(
                              "ul",
                              { staticClass: "mt-0" },
                              _vm._l(_vm.validationErrors.errors, function(
                                error
                              ) {
                                return _c("li", [
                                  _vm._v(
                                    _vm._s(
                                      error[0] !== undefined &&
                                        error[0] !== null
                                        ? error[0]
                                        : ""
                                    )
                                  )
                                ])
                              }),
                              0
                            )
                          ])
                        : _vm._e()
                    ]
                  )
                : _vm._e()
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm.showPaymentOptions === true
        ? _c(
            "div",
            { staticClass: "mb-5", attrs: { id: "shipping-container" } },
            [
              _c("api-shipping-options", {
                staticClass: "mb-4 mt-2",
                attrs: { title: "Choose your shipping method" },
                on: {
                  shippingSelected: function($event) {
                    return _vm.updateShippingSelected($event)
                  }
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.showPaymentOptions === true
        ? _c("div", [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12 mt-3" }, [
                _c(
                  "h4",
                  {
                    staticClass:
                      "d-flex justify-content-between align-items-end mb-1"
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "font-weight-normal text-dark h4 mb-0" },
                      [_vm._v("Payment method")]
                    ),
                    _vm._v(" "),
                    _vm.checkout.paymentMethod == "credit_card"
                      ? _c("small", [_vm._m(8)])
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c("hr", { staticClass: "border-muted-1 mt-0" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "btn-group-toggle d-flex flex-row align-items-center",
                    attrs: { "data-toggle": "buttons" }
                  },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "btn font-family-open-sans btn-white mr-2 rounded px-3 d-flex align-items-center flex-nowrap",
                        class:
                          _vm.checkout.paymentMethod == "credit_card"
                            ? "active"
                            : "",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.checkout.paymentMethod = "credit_card"
                          }
                        }
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.checkout.paymentMethod,
                              expression: "checkout.paymentMethod"
                            }
                          ],
                          attrs: {
                            name: "payment_method",
                            type: "radio",
                            value: "credit_card"
                          },
                          domProps: {
                            checked: _vm._q(
                              _vm.checkout.paymentMethod,
                              "credit_card"
                            )
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(
                                _vm.checkout,
                                "paymentMethod",
                                "credit_card"
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("i", { staticClass: "fas fa-2x fa-credit-card" }),
                        _vm._v("  Credit card\n\t\t\t\t\t  \t")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass:
                          "btn font-family-open-sans btn-white rounded px-3 d-flex align-items-center flex-nowrap",
                        class:
                          _vm.checkout.paymentMethod == "paypal"
                            ? "active"
                            : "",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.checkout.paymentMethod = "paypal"
                          }
                        }
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.checkout.paymentMethod,
                              expression: "checkout.paymentMethod"
                            }
                          ],
                          attrs: {
                            name: "payment_method",
                            type: "radio",
                            value: "paypal"
                          },
                          domProps: {
                            checked: _vm._q(
                              _vm.checkout.paymentMethod,
                              "paypal"
                            )
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(
                                _vm.checkout,
                                "paymentMethod",
                                "paypal"
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("i", { staticClass: "fab fa-2x fa-cc-paypal" }),
                        _vm._v("  Paypal\n\t\t\t\t\t  \t")
                      ]
                    )
                  ]
                )
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "my-5" }, [
        _vm.showPaymentOptions === true
          ? _c("div", { staticClass: "my-5 text-right" }, [
              _vm.canUsePaypal === false &&
              _vm.checkout.paymentMethod === "paypal"
                ? _c("div", [
                    _c(
                      "div",
                      { staticClass: "alert alert-danger mb-5 text-left" },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\tPayPal supports only one subscription or multiple one-time charge items in cart\n\t\t\t\t\t"
                        )
                      ]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.checkout.paymentMethod === "credit_card" &&
              _vm.shippingSelected === true
                ? _c(
                    "div",
                    { staticClass: "col-12 text-left" },
                    [
                      _c("credit-card-component", {
                        staticClass: "mt-5 mx-auto"
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "btn btn-outline-muted-4 py-2 text-uppercase btn-lg min-w-180px min-w-sm-210px min-h-44px mr-1",
                  attrs: { type: "button", disabled: _vm.loading },
                  on: {
                    click: function($event) {
                      _vm.showPaymentOptions = false
                    }
                  }
                },
                [
                  _c(
                    "small",
                    {
                      staticClass:
                        "py-1 font-weight-border font-size-0-85rem font-size-sm-0-9rem"
                    },
                    [_vm._v("Return Back")]
                  )
                ]
              ),
              _vm._v(" "),
              _vm.checkout.paymentMethod === "credit_card" ||
              (_vm.checkout.paymentMethod === "paypal" && _vm.canUsePaypal)
                ? _c(
                    "button",
                    {
                      staticClass:
                        "btn py-2 text-uppercase btn-lg min-w-180px min-w-sm-210px min-h-44px btn-highlight",
                      attrs: {
                        type: "button",
                        disabled: _vm.loading || _vm.shippingSelected === false
                      },
                      on: {
                        click: function($event) {
                          return _vm.executeCheckout()
                        }
                      }
                    },
                    [
                      _c(
                        "small",
                        {
                          staticClass:
                            "py-1 d-block font-weight-bold font-size-0-9rem"
                        },
                        [
                          !_vm.hasErrors
                            ? _c("span", [
                                _vm.loading === false
                                  ? _c("span", [_vm._v("Confirm order")])
                                  : _c("span", [
                                      _c("i", {
                                        staticClass:
                                          "fas fa-spinner fa-pulse mr-2"
                                      }),
                                      _vm._v(
                                        "\n\t\t            \t\t\tPlease wait\n\t\t            \t\t"
                                      )
                                    ])
                              ])
                            : _c("span", [
                                _c("i", { staticClass: "fas fa-sync mr-2" }),
                                _vm._v(
                                  "\n\t\t        \t\t\tTRY AGAIN\n\t\t        \t\t"
                                )
                              ])
                        ]
                      )
                    ]
                  )
                : _vm._e()
            ])
          : _vm._e()
      ])
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row mb-2" }, [
      _c("div", { staticClass: "col-12 text-center mt-2" }, [
        _c(
          "h1",
          {
            staticClass:
              "text-dark h2 mb-3 line-height-1-1 d-flex flex-row align-items-center justify-content-center"
          },
          [
            _c("span", { staticClass: "small mr-2" }, [
              _c("i", { staticClass: "fas fa-shield-alt" })
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("Secure Checkout")])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h4",
      { staticClass: "d-flex justify-content-between align-items-end mb-1" },
      [
        _c("span", { staticClass: "font-weight-normal text-dark h4 mb-0" }, [
          _vm._v("Your Addresses")
        ]),
        _vm._v(" "),
        _c("small", [
          _c("small", [
            _c("span", { staticClass: "text-danger font-weight-bolder" }, [
              _vm._v("*")
            ]),
            _vm._v(" Required Fields\n\t\t\t\t\t\t            ")
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 mb-3" }, [
      _c(
        "h4",
        { staticClass: "d-flex justify-content-between align-items-end mb-1" },
        [
          _c("span", { staticClass: "font-weight-normal text-dark h4 mb-0" }, [
            _vm._v("Personal information")
          ]),
          _vm._v(" "),
          _c("small", [
            _c("small", [
              _c("span", { staticClass: "text-danger font-weight-bolder" }, [
                _vm._v("*")
              ]),
              _vm._v(" Required Fields\n\t\t\t\t\t\t            ")
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("hr", { staticClass: "border-muted-1 mt-0" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "text-dark font-size-0-9rem mb-2" }, [
      _c("span", { staticClass: "text-danger font-weight-bolder" }, [
        _vm._v("*")
      ]),
      _vm._v("\n\t\t\t        \t\t\t\tFull Name\n\t\t\t        \t\t\t")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "text-dark font-size-0-9rem mb-2" }, [
      _c("span", { staticClass: "text-danger font-weight-bolder" }, [
        _vm._v("*")
      ]),
      _vm._v("\n\t        \t\t\t\t\t\tPhone\n\t        \t\t\t\t\t")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "text-dark font-size-0-9rem mb-2" }, [
      _c("span", { staticClass: "text-danger font-weight-bolder" }, [
        _vm._v("*")
      ]),
      _vm._v("\n\t\t                \t\t\tEmail\n\t\t                \t\t")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("small", [
      _c("span", { staticClass: "text-danger font-weight-bolder" }, [
        _vm._v("*")
      ]),
      _vm._v(" Required Fields\n\t\t\t\t\t            ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pr-3" }, [
      _c("i", { staticClass: "fas fa-exclamation-triangle" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("small", [
      _c("span", { staticClass: "text-danger font-weight-bolder" }, [
        _vm._v("*")
      ]),
      _vm._v(" Required Fields\n\t\t\t\t            ")
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

/***/ "./resources/js/components/checkout/CheckoutComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/checkout/CheckoutComponent.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutComponent_vue_vue_type_template_id_8815c58e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutComponent.vue?vue&type=template&id=8815c58e&scoped=true& */ "./resources/js/components/checkout/CheckoutComponent.vue?vue&type=template&id=8815c58e&scoped=true&");
/* harmony import */ var _CheckoutComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckoutComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/checkout/CheckoutComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CheckoutComponent_vue_vue_type_style_index_0_id_8815c58e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckoutComponent.vue?vue&type=style&index=0&id=8815c58e&scoped=true&lang=css& */ "./resources/js/components/checkout/CheckoutComponent.vue?vue&type=style&index=0&id=8815c58e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CheckoutComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CheckoutComponent_vue_vue_type_template_id_8815c58e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CheckoutComponent_vue_vue_type_template_id_8815c58e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8815c58e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/checkout/CheckoutComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/checkout/CheckoutComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/checkout/CheckoutComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CheckoutComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/checkout/CheckoutComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/checkout/CheckoutComponent.vue?vue&type=style&index=0&id=8815c58e&scoped=true&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/checkout/CheckoutComponent.vue?vue&type=style&index=0&id=8815c58e&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComponent_vue_vue_type_style_index_0_id_8815c58e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CheckoutComponent.vue?vue&type=style&index=0&id=8815c58e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/checkout/CheckoutComponent.vue?vue&type=style&index=0&id=8815c58e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComponent_vue_vue_type_style_index_0_id_8815c58e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComponent_vue_vue_type_style_index_0_id_8815c58e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComponent_vue_vue_type_style_index_0_id_8815c58e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComponent_vue_vue_type_style_index_0_id_8815c58e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComponent_vue_vue_type_style_index_0_id_8815c58e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/checkout/CheckoutComponent.vue?vue&type=template&id=8815c58e&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/checkout/CheckoutComponent.vue?vue&type=template&id=8815c58e&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComponent_vue_vue_type_template_id_8815c58e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CheckoutComponent.vue?vue&type=template&id=8815c58e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/checkout/CheckoutComponent.vue?vue&type=template&id=8815c58e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComponent_vue_vue_type_template_id_8815c58e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComponent_vue_vue_type_template_id_8815c58e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/errors.js":
/*!****************************************!*\
  !*** ./resources/js/helpers/errors.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  has: function has(errors, attribute) {
    if (errors.length === false) {
      return false;
    }

    return errors.hasOwnProperty(attribute);
  },
  get: function get(errors, attribute) {
    if (errors.length === 0) {
      return false;
    }

    if (errors.hasOwnProperty(attribute)) {
      return Object.entries(errors).filter(function (key) {
        return key[0] == attribute;
      }).map(function (key) {
        return key[1][0];
      }).pop();
    }
  }
});

/***/ })

}]);