# Installation

## Direct Download / CDN

https://unpkg.com/vue-braintree/dist/vue-braintree 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-braintree@{{ $version }}/dist/vue-braintree.js
 
Include vue-braintree after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-braintree/dist/vue-braintree.js"></script>
```

## NPM

```sh
$ npm install vue-braintree
```

## Yarn

```sh
$ yarn add vue-braintree
```

When used with a module system, you must explicitly install the `vue-braintree` via `Vue.use()`:

```javascript
import Vue from 'vue'
import vue-braintree from 'vue-braintree'

Vue.use(vue-braintree)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `vue-braintree` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com//vue-braintree.git node_modules/vue-braintree
$ cd node_modules/vue-braintree
$ npm install
$ npm run build
```

