import axios from 'axios';
import { actions, mutations } from '@/store';

describe('actions', () => {
  it('should fetchPosts', async () => {
    const commitApi = { commit: () => {} };
    const commitMock = sinon.mock(commitApi);
    commitMock.expects('commit').once();
    await actions.fetchPosts(commitApi);
    commitMock.verify();
  });
  it('should catch errors during fetchPosts', async () => {
    const get = sinon.stub(axios, 'get').throws('Test Error');
    const commitApi = { commit: () => {} };
    const commitMock = sinon.mock(commitApi);
    commitMock.expects('commit').once();
    await actions.fetchPosts(commitApi);
    commitMock.verify();
    get.restore();
  });
});

describe('mutations', () => {
  it('should receivePosts', () => {
    const state = { loading: true, posts: [] };
    const posts = [{ userId: 1, id: 1, title: 'Title', body: 'Body' }];
    mutations.receivePosts(state, posts);
    expect(state.posts).to.equal(posts);
    expect(state.loading).to.equal(false);
  });
  it('should receiveErrors', () => {
    const state = { loading: true, errors: [] };
    const errors = ['Test error'];
    mutations.receiveErrors(state, errors);
    expect(state.errors).to.equal(errors);
    expect(state.loading).to.equal(false);
  });
});
