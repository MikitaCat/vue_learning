<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: teal;
  border: solid 1px teal;
  box-shadow: 3px 1px 1px teal;
}

.btn:hover {
  background: teal;
  color: white;
  transition: 0.3s;
}
</style>
