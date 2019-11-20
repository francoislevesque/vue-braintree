import { shallowMount } from '@vue/test-utils'
import Payment from '@/Payment.vue'

describe('Payment.vue', () => {
  it('renders props.authorization when passed', () => {
    const authorization = 'xxxxxxxx'
    const btnText = 'Pay Now'
    const wrapper = shallowMount(Payment, {
      propsData: { authorization, btnText }
    })
    expect(wrapper.text()).toMatch(btnText)
  })
})
