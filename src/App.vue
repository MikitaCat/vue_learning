// Component MarkUp
<template>
  <div>
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

.post {
  padding: 15px;
  border: solid 2px teal;
  margin-top: 15px;
}
</style>
