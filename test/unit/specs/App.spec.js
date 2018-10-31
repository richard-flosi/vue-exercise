import Vuex from 'vuex';
import { shallow, createLocalVue } from 'vue-test-utils';
import App from '@/App';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('App.vue', () => {
  it('should render the App', () => {
    const wrapper = shallow(App, {
      mocks: {
        $store: {
          state: {
            loading: true,
            errors: [],
          },
        },
      },
      localVue,
    });
    expect(wrapper.vm.$el.textContent.trim()).to.equal('');
  });
  it('should render the App with errors', () => {
    const wrapper = shallow(App, {
      mocks: {
        $store: {
          state: {
            loading: false,
            errors: ['Test error'],
          },
        },
      },
      localVue,
    });
    expect(wrapper.vm.$el.textContent.trim()).to.equal('Errors');
  });
});
