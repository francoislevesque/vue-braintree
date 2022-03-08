import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Payment from "@/Payment.vue";
import VueBraintree from "@/index";

describe("Payment.vue", () => {
  it("renders props.btnText when passed", () => {
    const authorization = "xxxxxxxx";
    const btnText = "Pay Now";
    const wrapper = shallowMount(Payment, {
      propsData: { authorization, btnText }
    });
    expect(wrapper.text()).toMatch(btnText);
  });
  it("uses authorization.props", () => {
    const authorization = "xxxxxxxx";
    const wrapper = mount(Payment, {
      propsData: { authorization }
    });
    expect(wrapper.props().authorization).toBe(authorization);
  });
});

it("adds a component to the Vue prototype", () => {
  const localVue = createLocalVue();
  localVue.use(VueBraintree);
  expect(Object.keys(localVue.options.components)).toContain("v-braintree");
});