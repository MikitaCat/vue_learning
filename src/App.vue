// Component MarkUp
<template>
  <div class="app">
    <h2>Posts Application</h2>
    <my-input v-model="searchQuery" />
    <div class="app__btns">
      <my-button @click.native="showDialog">Create Post</my-button>
      <my-select
        :modelValue="selectedSort"
        :options="sortOption"
        @selectValue="changeValue"
      />
    </div>
    <my-dialog :show="dialogVisible" @hide="hideDialog">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list
      @remove="removePost"
      :posts="searchInSortedPosts"
      v-if="!isLoading"
    />
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
import MySelect from "./components/UI/MySelect.vue";
import MyInput from "./components/UI/MyInput.vue";

//Component model
export default {
  // Components registration
  components: {
    PostList,
    PostForm,
    MyDialog,
    MyButton,
    MySelect,
    MyInput,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isLoading: false,
      selectedSort: "",
      searchQuery: "",
      sortOption: [
        { value: "title", name: "header" },
        { value: "body", name: "content" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.unshift(post);
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

    changeValue(value) {
      this.selectedSort = value;
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

  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
    },

    searchInSortedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },

  // watch: {
  //   selectedSort(newValue) {
  //     this.posts.sort((post1, post2) => {
  //       return post1[this.selectedSort]?.localeCompare(
  //         post2[this.selectedSort]
  //       );
  //     });
  //   },
  // },
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

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
</style>
