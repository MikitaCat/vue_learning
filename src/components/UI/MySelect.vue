<template>
  <select @change="changeValue">
    <option disabled value="">
      Choose your list
    </option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeValue(event) {
      this.$emit("selectValue", event.target.value);
    },
  },
};
</script>

<style></style>
