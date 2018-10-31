<template>
  <div>
    <h3>Title: {{ post.title }}</h3>
    <div>User Id: {{ post.userId }}</div>
    <div>Post Id: {{ post.id }}</div>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: ['post'],
};
</script>
