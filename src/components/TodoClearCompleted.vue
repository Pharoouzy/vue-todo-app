<template>
  <button v-if="showClearCompletedButton" @click="clearCompleted">
    Clear Completed
  </button>
</template>

<script>
import { EventBus } from "@/libs/event-bus";
export default {
  name: "TodoClearCompleted",
  props: {
    showClearCompletedButton: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    clearCompleted() {
      EventBus.$emit("clearCompletedTodos");
    }
  }
};
</script>
