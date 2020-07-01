<template>
  <div>{{ remaining }} items left</div>
</template>

<script>
export default {
  name: "TodoItemsRemaining",
  computed: {
    remaining() {
      return this.$store.getters.remaining;
    }
  }
};
</script>
