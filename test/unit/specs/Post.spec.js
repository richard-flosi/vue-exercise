import Vue from 'vue';
import Post from '@/components/Post';

describe('Post.vue', () => {
  it('should render a Post', () => {
    const Constructor = Vue.extend(Post);
    const vm = new Constructor({ propsData: { post: { userId: 1, id: 1, title: 'Title', body: 'Body' } } }).$mount();
    expect(vm.$el.textContent.trim()).to.equal('Title: Title User Id: 1 Post Id: 1 Body');
  });
});
