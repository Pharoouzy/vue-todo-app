<template>
  <div>
    <button :class="{ active: filter == 'all' }" @click="filter = 'all'">
      All
    </button>
    <button :class="{ active: filter == 'active' }" @click="filter = 'active'">
      Active
    </button>
    <button
      :class="{ active: filter == 'completed' }"
      @click="filter = 'completed'"
    >
      Completed
    </button>
  </div>
</template>

<script>
import { EventBus } from "@/libs/event-bus";
export default {
  name: "TodoFiltered",
  props: {
    filter: {
      type: String,
      required: true
    }
  },
  methods: {
    allChecked() {
      EventBus.$emit("checkAllChanged", this.anyRemaining);
    }
  }
};
</script>
