// Component MarkUp
<template>
  <div class="app">
    <my-button @click.native="showDialog" style="margin: 15px 0;"
      >Create Post</my-button
    >
    <my-dialog :show="dialogVisible" @hide="hideDialog">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list @remove="removePost" :posts="posts" v-if="!isLoading" />
    <p v-else>Loading...</p>
  </div>
</template>

<script>
//imports
import axios from "axios";
import PostList from "./components/PostList.vue";
import PostForm from "./components/PostForm.vue";
import MyDialog from "./components/UI/MyDialog.vue";
import MyButton from "./components/UI/MyButton.vue";

//Component model
export default {
  // Components registration
  components: {
    PostList,
    PostForm,
    MyDialog,
    MyButton,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isLoading: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },

    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },

    showDialog() {
      this.dialogVisible = true;
    },

    hideDialog() {
      this.dialogVisible = false;
    },

    async fetchPosts() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
        console.log(response);
      } catch (e) {
        alert(e);
      } finally {
        this.isLoading = false;
      }
    },

    // inputTitle(event) {
    //   this.title = event.target.value;
    // },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
