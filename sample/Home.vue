<template>
  <div>
    <VButton1 />
    <VButton2 :text="10" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VButton1 from "./VButton1.vue";
import VButton2 from "./VButton2.vue";

const a: number = "";

export default Vue.extend({
  components: {
    VButton1,
    VButton2,
  },
});
</script>
