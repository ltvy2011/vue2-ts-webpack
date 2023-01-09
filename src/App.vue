<template>
  <div>
    <title>WEBPACK</title>
    <h1 class="badge bg-primary text-wrap">Vue 3 TS</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  data() {
    return {
      a: 1,
    };
  },
});
</script>

<style lang="scss" scoped>
h1 {
  color: blue !important;
}
title {
  display: block;
  font-size: large;
}
</style>
