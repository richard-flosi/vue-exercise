<template>
  <div>
    <h2>My Posts</h2>
    <Post v-for="post in posts" :key="post.id" v-bind:post="post" />
  </div>
</template>

<script>
import Vuex from 'vuex';
import Post from '@/components/Post';

export default {
  name: 'MyPosts',
  components: {
    Post,
  },
  computed: Vuex.mapState({
    posts: state => state.posts.filter(post => post.userId === state.currentUserId),
  }),
};
</script>
