<template>
  <div class="container">

    <br>

    <h1>Braintree Demo</h1>

    <v-braintree 
      authorization="eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpGVXpJMU5pSXNJbXRwWkNJNklqSXdNVGd3TkRJMk1UWXRjMkZ1WkdKdmVDSXNJbWx6Y3lJNklrRjFkR2g1SW4wLmV5SmxlSEFpT2pFMU56VTFOemMzTmpNc0ltcDBhU0k2SWpobU0yWTVaRGN4TFdGbU1HTXRORFV6TWkxaU9UWTBMVFpoTUdSa09EVTFOR014T1NJc0luTjFZaUk2SW5nM05ESm9lbmg2WjNnMloyc3lNek1pTENKcGMzTWlPaUpCZFhSb2VTSXNJbTFsY21Ob1lXNTBJanA3SW5CMVlteHBZMTlwWkNJNkluZzNOREpvZW5oNlozZzJaMnN5TXpNaUxDSjJaWEpwWm5sZlkyRnlaRjlpZVY5a1pXWmhkV3gwSWpwbVlXeHpaWDBzSW5KcFoyaDBjeUk2V3lKdFlXNWhaMlZmZG1GMWJIUWlYU3dpYjNCMGFXOXVjeUk2ZTMxOS5wTEdtZ0VDS3JFRldtQndVY21XcVVzOTBqSU5GZlRiS19tU25JVG9pOXpKOTc2a2QwRkFNM3Q2dHJZMmpjbVI4cEN3UF9UNi1Wc2RfQVI3TVppUnlfQSIsImNvbmZpZ1VybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy94NzQyaHp4emd4NmdrMjMzL2NsaWVudF9hcGkvdjEvY29uZmlndXJhdGlvbiIsImdyYXBoUUwiOnsidXJsIjoiaHR0cHM6Ly9wYXltZW50cy5zYW5kYm94LmJyYWludHJlZS1hcGkuY29tL2dyYXBocWwiLCJkYXRlIjoiMjAxOC0wNS0wOCJ9LCJjaGFsbGVuZ2VzIjpbImN2diJdLCJlbnZpcm9ubWVudCI6InNhbmRib3giLCJjbGllbnRBcGlVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMveDc0Mmh6eHpneDZnazIzMy9jbGllbnRfYXBpIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhdXRoVXJsIjoiaHR0cHM6Ly9hdXRoLnZlbm1vLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhbmFseXRpY3MiOnsidXJsIjoiaHR0cHM6Ly9vcmlnaW4tYW5hbHl0aWNzLXNhbmQuc2FuZGJveC5icmFpbnRyZWUtYXBpLmNvbS94NzQyaHp4emd4NmdrMjMzIn0sInRocmVlRFNlY3VyZUVuYWJsZWQiOnRydWUsInBheXBhbEVuYWJsZWQiOnRydWUsInBheXBhbCI6eyJkaXNwbGF5TmFtZSI6IldpdGlmeSIsImNsaWVudElkIjoiQVlycnV0QUFleDdPUkFhQS02RmFOc2JtTUpOUEoxQ0xJWHljd0EyVGRwMFJTZjdCSkRsLVFIYi10RllaZ19EckN4Q283V0ZsWi1fQUlkeEwiLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjpmYWxzZSwiZW52aXJvbm1lbnQiOiJvZmZsaW5lIiwidW52ZXR0ZWRNZXJjaGFudCI6ZmFsc2UsImJyYWludHJlZUNsaWVudElkIjoibWFzdGVyY2xpZW50MyIsImJpbGxpbmdBZ3JlZW1lbnRzRW5hYmxlZCI6dHJ1ZSwibWVyY2hhbnRBY2NvdW50SWQiOiJ3aXRpZnkiLCJjdXJyZW5jeUlzb0NvZGUiOiJVU0QifSwibWVyY2hhbnRJZCI6Ing3NDJoenh6Z3g2Z2syMzMiLCJ2ZW5tbyI6Im9mZiJ9"
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
