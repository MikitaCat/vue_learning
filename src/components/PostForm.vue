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
    <button @click="createPost" class="btn">Create</button>
  </form>
</template>

<script>
export default {
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

.btn {
  align-self: flex-end;
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: solid 1px teal;
}

.btn:hover {
  background: teal;
  color: white;
  transition: 0.3s;
}
</style>
