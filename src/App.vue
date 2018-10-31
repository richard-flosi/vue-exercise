<template>
  <div id="app">
    <div v-if="loading"><Loader /></div>
    <div v-else-if="hasErrors">
      <h1>Errors</h1>
      <Error v-for="error in errors" :key="error" v-bind:error="error" />
    </div>
    <div v-else>
      <span style="display:flex;justify-content:space-between;">
        <span style="padding:10px;">
          <MyPosts />
        </span>
        <span style="padding:10px;">
          <OtherPosts />
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex';
import Loader from '@/components/Loader';
import Error from '@/components/Error';
import MyPosts from '@/components/MyPosts';
import OtherPosts from '@/components/OtherPosts';

export default {
  name: 'App',
  components: {
    Loader,
    Error,
    MyPosts,
    OtherPosts,
  },
  computed: Vuex.mapState({
    loading: state => state.loading,
    hasErrors: state => state.errors.length > 0,
    errors: state => state.errors,
  }),
};
</script>
