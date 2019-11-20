# Vue Braintree

`VueBraintree` plugin is plugin for [Vue.js](http://vuejs.org) to quickly integrate the Braintree Drop In in a Vue.js application.

![Braintree Drop In](https://developers.braintreepayments.com/img/developers/client-sdk-drop-in-web.png)

- Works with: Credit Cards, Paypal, Apple Pay, Google Pay, etc.
- Choose your own language. Available in English, French, Spanish, etc.
- Fully customizable 

[Get started](./started/) or play with the [demo](https://github.com/francoislevesque/vue-braintree/tree/dev/demo) (see [`README.md`](https://github.com/francoislevesque/vue-braintree/) to run them).

## Quick start
Import the plugin in your Vue Application.

```javascript
import Vue from 'vue'
import vue-braintree from 'vue-braintree'

Vue.use(vue-braintree)
```

In order to use the Drop-in UI, you'll first need to get a tokenization key from the [Control Panel](https://developers.braintreepayments.com/guides/authorization/tokenization-key/) or [generate a client token on your server](https://developers.braintreepayments.com/start/hello-server/ruby#generate-a-client-token). This will be your `authorization` used when creating Drop-in.

```html
<v-braintree 
    authorization="xxxxxxxxxxxxxxxxxxxxxx"
    @success="onSuccess"
    @error="onError"
></v-braintree>
```
```javascript
export default {
  methods: {
    onSuccess (payload) {
      let nonce = payload.nonce;
      // Do something great with the nonce...
    },
    onError (error) {
      let message = error.message;
      // Whoops, an error has occured while trying to get the nonce
    }
  }
}
```
