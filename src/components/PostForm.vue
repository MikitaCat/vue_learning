<template>
  <form @submit.prevent>
    <h4>Add New Post</h4>
    <input
      v-model="post.title"
      class="input"
      type="text"
      placeholder="Post title"
    />
    <input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="Post Body"
    />
    <my-button style="align-self: flex-end" @click="createPost"
      >Create</my-button
    >
  </form>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
export default {
  components: { MyButton },
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

.input {
  width: 100%;
  border: solid 1px teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
