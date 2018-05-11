import { expect } from 'chai'
import Vue from 'vue'
import VueBraintree from '../src/index'
import Payment from '../src/components/Payment.vue'
import { mount } from '@vue/test-utils'

describe ('general', () => {
	it('can register component', () => {
        Vue.use(VueBraintree)
        expect(Object.keys(Vue.options.components)).to.include('v-braintree')
    })

    /*it('can register component', () => {
        const wrapper = mount(Payment, {
            propsData: {
                token: 'xxx'
            }
        })
        const vm = wrapper.vm
        expect(wrapper.html).to.contain('Pay')
    })*/
})
