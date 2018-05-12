import { mount } from '@vue/test-utils'
import Payment from '../src/components/Payment.vue'
import expect from 'expect'

describe ('general', () => {

    let wrapper;
    let btnText = 'Pay now'
    let btnClass = 'button'

    beforeEach(() => {
        wrapper = mount(Payment, {
            propsData: {
                btnText: btnText,
                btnClass: btnClass
            }
        })
    })

    it('has loading to false by default', () => {
        expect(wrapper.vm.loading).toBe(false)
    })

    it ('loads when the button is clicked', () => {
        expect(wrapper.vm.loading).toBe(false)
        wrapper.find('button').trigger('click')
        expect(wrapper.vm.loading).toBe(true)
    })

    it ('presents the correct button text', () => {
        expect(wrapper.html()).toContain(btnText)
    });

    it ('has the correct button class', () => {
        expect(wrapper.html()).toContain(btnClass)
    });
})
