<template>
  <div>
    <button :class="{ active: filter == 'all' }" @click="changeFilter('all')">
      All
    </button>
    <button
      :class="{ active: filter == 'active' }"
      @click="changeFilter('active')"
    >
      Active
    </button>
    <button
      :class="{ active: filter == 'completed' }"
      @click="changeFilter('completed')"
    >
      Completed
    </button>
  </div>
</template>

<script>
import { EventBus } from "@/libs/event-bus";
export default {
  name: "TodoFiltered",
  data() {
    return {
      filter: "all"
    };
  },
  methods: {
    allChecked() {
      EventBus.$emit("checkAllChanged", this.anyRemaining);
    },
    changeFilter(filter) {
      this.filter = filter;
      EventBus.$emit("filterChanged", filter);
    }
  }
};
</script>
