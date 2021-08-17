<template>
  <div v-for="post in posts" class="post">
    <div><strong>Title:</strong>{{ post.title }}</div>
    <div><strong>Description:</strong>{{ post.body }}</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.post {
  padding: 15px;
  border: solid 2px teal;
  margin-top: 15px;
  border-radius: 5px;
}
</style>
