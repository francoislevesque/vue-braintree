<template>
  <div class="payment">
    <div ref="dropin" />
    <slot
      name="button"
      :submit="submit"
    >
      <button
        :class="btnClass"
        @click="submit"
      >
        {{ btnText }}
      </button>
    </slot>
  </div>
</template>

<script>
import dropIn from "braintree-web-drop-in";
export default {
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
      default: () => []
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
      validator: (value) => {
        return typeof value === "object";
      }
    }
  },
  data() {
    return {
      instance: null, // The DropIn Instance
    };
  },
  mounted() {
    // Create config
    let config = {
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
      disabled: this.disabled,
    };
    // Create dropin
    dropIn.create(config, (createErr, instance) => {
      if (createErr) {
        // An error in the create call is likely due to
        // incorrect configuration values or network issues.
        // An appropriate error will be shown in the UI.
        this.$emit("loadFail", createErr);
        return;
      }
      this.instance = instance;
      // Load event
      this.$emit("load", this.instance);
    });
  },
  beforeDestroy () {
    if (this.instance) {
      this.instance.teardown((err) => {
        if (err) {
          console.error("An error occurred during teardown:", err);
        }
      });
    }
  },
  methods: {
    submit (event) {
      if (event) {
        event.preventDefault();
      }
      let requestPaymentConfig = {};
      if (this.threeDSecure === true) {
        requestPaymentConfig.threeDSecure = this.threeDSecureParameters;
      }
      this.instance.requestPaymentMethod(requestPaymentConfig, (err, payload) => {
        if (err) {
          // No payment method is available.
          // An appropriate error will be shown in the UI.
          this.$emit("error", err);
          return;
        }
        this.$emit("success", payload);
      });
    }
  }
};
</script>
