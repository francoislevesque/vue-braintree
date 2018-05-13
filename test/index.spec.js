import { mount } from '@vue/test-utils'
import Payment from '../src/components/Payment.vue'
import Plugin from '../src/main'
import Vue from 'vue'

describe ('Plugin', () => {
    it('can use plugin', () => {
        Vue.use(Plugin)
        expect(Object.keys(Vue.options.components)).toContain('v-braintree')
    })
})

describe ('Payment', () => {

    let wrapper;
    let btnText = 'Pay now'
    let btnClass = 'button'

    beforeEach(() => {
        wrapper = mount(Payment, {
            propsData: {
                btnText: btnText,
                btnClass: btnClass,
                token: 'xxx'
            }
        })
    })

    it('has loading to false by default', () => {
        expect(wrapper.vm.loading).toBe(false)
    })

    it ('presents the correct button text', () => {
        expect(wrapper.html()).toContain(btnText)
    })

    it ('has the correct button class', () => {
        expect(wrapper.find('button').classes()).toContain(btnClass)
    })
})
