import Vuex from 'vuex';
import { shallow, createLocalVue } from 'vue-test-utils';
import MyPosts from '@/components/MyPosts';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('MyPosts.vue', () => {
  it('should render MyPosts', () => {
    const wrapper = shallow(MyPosts, {
      mocks: {
        $store: {
          state: {
            posts: [{ userId: 1, id: 1, title: 'Title', body: 'Body' }],
          },
        },
      },
      localVue,
    });
    expect(wrapper.vm.$el.textContent.trim()).to.equal('My Posts');
  });
});
