import Vue from 'vue';
import Loader from '@/components/Loader';

describe('Loader.vue', () => {
  it('should render Loading...', () => {
    const Constructor = Vue.extend(Loader);
    const vm = new Constructor().$mount();
    expect(vm.$el.textContent.trim()).to.equal('Loading...');
  });
});
