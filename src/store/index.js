import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const mutations = {
  receivePosts(state, posts) {
    state.posts = posts;
    state.loading = false;
  },
  receiveErrors(state, errors) {
    state.errors = errors;
    state.loading = false;
  },
};

export const actions = {
  async fetchPosts({ commit }) {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      commit('receivePosts', response.data);
    } catch (error) {
      commit('receiveErrors', [`Error fetching posts: ${error}`]);
    }
  },
};

export default new Vuex.Store({
  modules: {},
  state: {
    currentUserId: 1,
    loading: true,
    posts: [],
    errors: [],
  },
  mutations,
  actions,
});

