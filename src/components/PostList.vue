<template>
  <div>
    <div v-if="posts.length > 0">
      <h3>All Posts:</h3>
      <post-item
        @remove="$emit('remove', post)"
        :key="post.id"
        :post="post"
        v-for="post in posts"
      />
    </div>
    <h2 v-else>There aren't Posts yet</h2>
  </div>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
