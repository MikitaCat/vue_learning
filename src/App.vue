// Component MarkUp
<template>
  <div class="app">
    <form>
      <h4>Add New Post</h4>
      <input class="input" type="text" placeholder="Post title" />
      <input class="input" type="text" placeholder="Post Body" />
      <button class="btn">Create</button>
    </form>
    <div v-for="post in posts" class="post">
      <div><strong>Title:</strong>{{ post.title }}</div>
      <div><strong>Description:</strong>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
//Component model
export default {
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
  methods: {},
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

.post {
  padding: 15px;
  border: solid 2px teal;
  margin-top: 15px;
}

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
