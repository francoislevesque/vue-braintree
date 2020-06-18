# Events

## load

```html
<v-braintree @load="onLoad"></v-braintree>
```
Called with the Braintree Drop-In instance when done initializing. You can call all regular <a href="https://braintree.github.io/braintree-web-drop-in/docs/current/Dropin.html">Drop-In methods</a>

## loadFail

```html
<v-braintree @loadFail="onLoadFail"></v-braintree>
```
Will return an error if the Drop-in component could not be mounted. An error in the create call is likely due to incorrect configuration values or network issues. An appropriate error will be shown in the UI.

## success

```html
<v-braintree @success="success()"></v-braintree>
```
The payment method request was successfull. A payload is returned with the nonce.
```js
// Example Payload
{
    nonce: 'tokencc_bc_97pfjd_33j357_skh8fj_8ysm4x_j6z',
    description: "Ending in 11",
    type: "CreditCard",
    details: {
        bin: "411111",
        cardType: "Visa",
        expirationMonth: "12",
        expirationYear: "2023",
        lastFour: "1111",
        lastTwo: "11"
    },
    binData: {
        commercial:"Unknown"
        countryOfIssuance:"Unknown"
        debit:"Unknown"
        durbinRegulated:"Unknown"
        healthcare:"Unknown"
        issuingBank:"Unknown"
        payroll:"Unknown"
        prepaid:"Unknown"
        productId:"Unknown"
    }
}
```

## error

```html
<v-braintree @error="error"></v-braintree>
```
The selected or entered payment method is not available (bad card number, missing fields, rejected card, etc.). An error is returned with a message.
