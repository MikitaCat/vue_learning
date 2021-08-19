// Component MarkUp
<template>
  <div class="app">
    <h2>Posts Application</h2>
    <my-input placeholder="Post searching..." v-model="searchQuery" />
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
    <div ref="observer" class="observer"></div>
    <!-- <div class="page__wrapper">
      <div
        class="page"
        :class="{ 'current-page': page === pageNumber }"
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div> -->
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
      page: 1,
      limit: 10,
      totalPages: 0,
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

    // changePage(pageNumber) {
    //   this.page = pageNumber;
    // },

    async fetchPosts() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (e) {
        alert(e);
      } finally {
        this.isLoading = false;
      }
    },

    async loadVorePosts() {
      try {
        this.page += 1;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert(e);
      }
    },

    // inputTitle(event) {
    //   this.title = event.target.value;
    // },
  },
  mounted() {
    this.fetchPosts();

    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadVorePosts();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },

  watch: {
    // page() {
    //   this.fetchPosts();
    // },
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

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: solid 1px black;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  margin-left: 10px;
}

.page:hover {
  background: teal;
  color: white;
  transition: 0.3s;
}

.current-page {
  background: teal;
  color: white;
  transition: 00.3s;
}

/* .observer {
  height: 30px;
  background: green;
} */
</style>
