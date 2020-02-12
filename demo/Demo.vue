<template>
  <div class="container">

    <br>

    <h1>Braintree Demo</h1>

    <v-braintree 
      authorization="sandbox_9q89mhss_x742hzxzgx6gk233"
      :paypal="{flow: 'vault'}"
      :three-d-secure="true"
      :three-d-secure-parameters="{
        amount: 100, 
        email: 'francois@witify.io', 
        billingAddress: {
          givenName: 'John',
          surname: 'Doe',
          phoneNumber: '515 515 1234',
          streetAddress: '485 boul. dagenais E',
          extendedAddress: '1',
          locality: 'Laval',
          region: 'QC',
          postalCode: 'h7m5z5',
          countryCodeAlpha2: 'CA'
        }
      }"
      @load="onLoad"
      @loadFail="onLoadFail"
      @success="onSuccess"
      @error="onError"
    >
      <template v-slot:button="slotProps">
        <input type="submit" @click="slotProps.submit" class="btn btn-warning" value="Pay now!!" />
      </template>
    </v-braintree>

    <br>

    <button class="btn">
      Clear Payment Selection
    </button>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      instance: null
    }
  },
  methods: {
    onLoad (instance) {
      this.instance = instance;
    },
    onLoadFail (instance) {
      alert('load fail');
    },
    onSuccess (payload) {
      console.log("Success!", payload.nonce);
    },
    onError (error) {
      console.log("Error!", error);
    },
    clearPaymentSelection () {
      if (this.instance != null) {
        this.instance.clearSelectedPaymentMethod();
      }
    }
  }
}
</script>

<style>

</style>
