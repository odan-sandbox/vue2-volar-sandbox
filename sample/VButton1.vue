<template>
  <button>{{ text }}</button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    text: String,
  },
});
</script>
