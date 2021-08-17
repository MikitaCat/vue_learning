// Component MarkUp
<template>
  <div class="app">
    <post-form @create="createPost" />
    <post-list :posts="posts" />
  </div>
</template>

<script>
//imports
import PostList from "./components/PostList.vue";
import PostForm from "./components/PostForm.vue";
//Component model
export default {
  // Components registration
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "Lorem Ipsum", body: "Some text for post 1" },
        { id: 2, title: "Lorem Ipsu", body: "Some text for post 111" },
        { id: 3, title: "Lorem Ips", body: "Some text for post 1234" },
        { id: 4, title: "Lorem Ip", body: "Some text for post 5678" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
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
