// Component MarkUp
<template>
  <div class="app">
    <my-button @click.native="showDialog" style="margin: 15px 0;"
      >Create Post</my-button
    >
    <my-dialog :show="dialogVisible" @hide="hideDialog">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list @remove="removePost" :posts="posts" />
  </div>
</template>

<script>
//imports
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
      posts: [
        { id: 1, title: "Lorem Ipsum", body: "Some text for post 1" },
        { id: 2, title: "Lorem Ipsu", body: "Some text for post 111" },
        { id: 3, title: "Lorem Ips", body: "Some text for post 1234" },
        { id: 4, title: "Lorem Ip", body: "Some text for post 5678" },
      ],
      dialogVisible: false,
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

    // inputTitle(event) {
    //   this.title = event.target.value;
    // },
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
