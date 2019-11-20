# Getting Started

> We will be using [ES2015](https://github.com/lukehoban/es6features) in the code samples in the guide.


## HTML

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-braintree/dist/vue-braintree.js"></script>

<div id="#app">
  <v-braintree 
    authorization="xxxxxxxxxxxxxxxxxxxxxx"
    @success="onSuccess"
    @error="onError"
  ></v-braintree>
</div>
```

## JavaScript

```javascript
import Vue from 'vue'
import vue-braintree from 'vue-braintree'

Vue.use(vue-braintree)
```

## Quick start

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
