<template>
  <div>
    <label>
      <input type="checkbox" :checked="!anyRemaining" @change="allChecked" />
      Check All
    </label>
  </div>
</template>

<script>
import { EventBus } from "@/libs/event-bus";
export default {
  name: "TodoCheckAll",
  props: {
    anyRemaining: {
      type: Boolean,
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
