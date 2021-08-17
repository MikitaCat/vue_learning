<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.btn {
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
