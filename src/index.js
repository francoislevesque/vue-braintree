import Payment from './Payment.vue'

const version = '__VERSION__'

const install = Vue => {
  Vue.component('v-braintree', Payment)
}

const plugin = {
  install,
  version
}

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
