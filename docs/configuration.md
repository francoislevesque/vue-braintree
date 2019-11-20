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
