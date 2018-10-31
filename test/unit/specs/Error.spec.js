import Vue from 'vue';
import Error from '@/components/Error';

describe('Error.vue', () => {
  it('should render Error message', () => {
    const Constructor = Vue.extend(Error);
    const vm = new Constructor({ propsData: { error: 'Test Error Message' } }).$mount();
    expect(vm.$el.textContent.trim()).to.equal('Test Error Message');
  });
});
