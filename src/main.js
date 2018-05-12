import Payment from '@/components/Payment.vue'

export default {

    install (Vue, options) {
        Vue.component('v-braintree', Payment)
    }
}
