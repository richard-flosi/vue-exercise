import Vuex from 'vuex';
import { shallow, createLocalVue } from 'vue-test-utils';
import OtherPosts from '@/components/OtherPosts';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('OtherPosts.vue', () => {
  it('should render OtherPosts', () => {
    const wrapper = shallow(OtherPosts, {
      mocks: {
        $store: {
          state: {
            posts: [{ userId: 1, id: 1, title: 'Title', body: 'Body' }],
          },
        },
      },
      localVue,
    });
    expect(wrapper.vm.$el.textContent.trim()).to.equal('Other Posts');
  });
});
