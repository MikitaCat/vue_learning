<template>
  <input :value="value" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    value: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style>
.input {
  width: 100%;
  border: solid 1px teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
