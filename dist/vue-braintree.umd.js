/*!
 * vue-braintree v2.2.0 
 * (c) 2022 
 * Released under the undefined License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('braintree-web-drop-in')) :
  typeof define === 'function' && define.amd ? define(['braintree-web-drop-in'], factory) :
  (global = global || self, global.VueBraintree = factory(global.dropIn));
}(this, (function (dropIn) { 'use strict';

  dropIn = dropIn && Object.prototype.hasOwnProperty.call(dropIn, 'default') ? dropIn['default'] : dropIn;

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  var script = {
    props: {
      authorization: {
        required: true,
        type: String
      },
      locale: {
        type: String,
        default: "en_US"
      },
      disabled: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      btnText: {
        type: String,
        default: "Pay"
      },
      btnClass: {
        type: String,
        default: "btn btn-primary"
      },
      paypal: {
        type: Object,
        default: undefined
      },
      paypalCredit: {
        type: Object,
        default: undefined
      },
      venmo: {
        type: Object,
        default: undefined
      },
      applePay: {
        type: Object,
        default: undefined
      },
      googlePay: {
        type: Object,
        default: undefined
      },
      translations: {
        type: Object,
        default: undefined
      },
      vaultManager: {
        type: Boolean,
        default: false
      },
      card: {
        type: Object,
        default: undefined
      },
      threeDSecure: {
        default: false,
        type: Boolean
      },
      threeDSecureParameters: {
        required: false,
        default: null,
        validator: function validator(value) {
          return _typeof(value) === "object";
        }
      }
    },
    data: function data() {
      return {
        instance: null // The DropIn Instance

      };
    },
    mounted: function mounted() {
      var _this = this;

      // Create config
      var config = {
        authorization: this.authorization,
        container: this.$refs.dropin,
        locale: this.locale,
        translations: this.translations,
        paypal: this.paypal,
        paypalCredit: this.paypalCredit,
        venmo: this.venmo,
        applePay: this.applePay,
        googlePay: this.googlePay,
        vaultManager: this.vaultManager,
        card: this.card,
        threeDSecure: this.threeDSecure,
        disabled: this.disabled
      }; // Create dropin

      dropIn.create(config, function (createErr, instance) {
        if (createErr) {
          // An error in the create call is likely due to
          // incorrect configuration values or network issues.
          // An appropriate error will be shown in the UI.
          _this.$emit("loadFail", createErr);

          return;
        }

        _this.instance = instance; // Load event

        _this.$emit("load", _this.instance);
      });
    },
    beforeDestroy: function beforeDestroy() {
      if (this.instance) {
        this.instance.teardown(function (err) {
          if (err) {
            console.error("An error occurred during teardown:", err);
          }
        });
      }
    },
    methods: {
      submit: function submit(event) {
        var _this2 = this;

        if (event) {
          event.preventDefault();
        }

        var requestPaymentConfig = {};

        if (this.threeDSecure === true) {
          requestPaymentConfig.threeDSecure = this.threeDSecureParameters;
        }

        this.instance.requestPaymentMethod(requestPaymentConfig, function (err, payload) {
          if (err) {
            // No payment method is available.
            // An appropriate error will be shown in the UI.
            _this2.$emit("error", err);

            return;
          }

          _this2.$emit("success", payload);
        });
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  /* script */
  const __vue_script__ = script;

  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"payment"},[_c('div',{ref:"dropin"}),_vm._v(" "),_vm._t("button",function(){return [_c('button',{class:_vm.btnClass,on:{"click":_vm.submit}},[_vm._v("\n      "+_vm._s(_vm.btnText)+"\n    ")])]},{"submit":_vm.submit})],2)};
  var __vue_staticRenderFns__ = [];

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Payment = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  var version = "2.2.0";

  var install = function install(Vue) {
    Vue.component("v-braintree", Payment);
  };

  var plugin = {
    install: install,
    version: version
  };

  if (typeof window !== "undefined" && window.Vue) {
    window.Vue.use(plugin);
  }

  return plugin;

})));
