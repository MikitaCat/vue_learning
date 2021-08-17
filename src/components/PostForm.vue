<template>
  <form @submit.prevent>
    <h4>Add New Post</h4>
    <my-input
      v-model="post.title"
      class="input"
      type="text"
      placeholder="Post title"
    />
    <my-input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="Post Body"
    />
    <my-button
      style="align-self: flex-end; margin-top: 15px"
      @click="createPost"
      >Create</my-button
    >
  </form>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
import MyInput from "./UI/MyInput.vue";
export default {
  components: { MyButton, MyInput },
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
