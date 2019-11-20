<template>
  <div class="container">

    <br>

    <h1>Braintree Demo</h1>

    <v-braintree 
      authorization="sandbox_s9rx6c2c_x742hzxzgx6gk233"
      :paypal="{flow: 'vault'}"
      @load="onLoad"
      @loadFail="onLoadFail"
      @success="onSuccess"
      @error="onError"
    ></v-braintree>

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
