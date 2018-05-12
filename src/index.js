import config, { setOptions } from './config'
import Payment from './components/Payment.vue'

export default {

    install (Vue, options) {

        /*
        |--------------------------------------------------------------------------
        | Set Config Options
        |--------------------------------------------------------------------------
        */

        //setOptions(Object.assign(config, options))

        /*
        |--------------------------------------------------------------------------
        | Components
        |--------------------------------------------------------------------------
        */

        //Vue.component('v-braintree', Payment)
    }
}
