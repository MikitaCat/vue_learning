<template>
  <div class="post">
    <div>
      <div><strong>Post ID: </strong>{{ post.id }}</div>
      <div><strong>Title: </strong>{{ post.title }}</div>
      <div><strong>Description: </strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button @click.native="$emit('remove', post)">Delete</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
export default {
  components: { MyButton },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: solid 2px teal;
  margin-top: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 5px 2px 2px teal;
  background: white;
}
</style>
