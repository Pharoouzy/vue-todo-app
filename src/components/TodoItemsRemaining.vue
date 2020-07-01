<template>
  <div>{{ remaining }} items left</div>
</template>

<script>
export default {
  name: "TodoItemsRemaining",
  props: {
    remaining: {
      type: Number,
      required: true
    }
  }
};
</script>
