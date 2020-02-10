# Configuration

The component is fully configurable. 

Prop | Description | Type | Default 
--- | --- | --- | --- 
authorization | The client token generated from the server | String | *required* |
paypal | [Configure PayPal](https://developers.braintreepayments.com/guides/drop-in/setup-and-integration/javascript/v3#paypal) | Object | |
paypalCredit | [Configure PayPal Credit](https://developers.braintreepayments.com/guides/drop-in/setup-and-integration/javascript/v3#paypal-credit) | Object | |
venmo | [Configure Venmo](https://developers.braintreepayments.com/guides/drop-in/setup-and-integration/javascript/v3#venmo) | Object | |
applePay | [Configure Apple Pay](https://developers.braintreepayments.com/guides/drop-in/setup-and-integration/javascript/v3#apple-pay) | Object | |
googlePay | [Configure Google Pay](https://developers.braintreepayments.com/guides/drop-in/setup-and-integration/javascript/v3#google-pay) | Object | |
locale | The desired locale (<a href="https://github.com/braintree/braintree-web-drop-in/tree/master/src/translations">available locales</a>) | String | `en_US` |
translations | Custom translations. See the default translations for [a full list of translation strings](https://github.com/braintree/braintree-web-drop-in/blob/master/src/translations/en_US.js). | Object | |
btnText | The button text | String | 'Pay' |
btnClass | The button class | String | 'btn btn-primary' |
vaultManager | If you authorize Drop-in using client tokens generated with customer_ids, you can also enable customers to remove saved payment methods from their Vault records. | Boolean | false
threeDSecure | To enable 3DS. **You must generate a client token if you want to use 3D Secure (3DS). Tokenization keys can't be used to verify 3D Secure enabled cards.**. | Boolean | false
threeDSecureParameters | The client informations when 3DS is enabled. | Object | null

## Enable 3D Secure

Enable threeDSecure on the component and add the required parameters. 

::: danger

You must generate a client token if you want to use 3D Secure (3DS). Tokenization keys can't be used to verify 3D Secure enabled cards.

:::

```
<v-braintree
    authorization="xxxxxxxxxxxxxxxxxx"
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
>
</v-braintree>
```

## Replace the button

The submit button is in a scoped slot, so you can replace it with any other component as necessary. For example, using a Vuetify button:

```Vue
<v-braintree authorization="xxxxxxxxxxxxxxxxxx">
  <template v-slot:button="slotProps">
    <v-btn @click="slotProps.submit" color="success">Fancy button</v-btn>
  </template>
</v-braintree>
```
