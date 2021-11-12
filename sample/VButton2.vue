<template>
  <button>{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    text: String,
  },
});
</script>
