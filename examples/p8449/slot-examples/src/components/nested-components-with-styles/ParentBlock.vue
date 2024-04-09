<template>
  <ChildBlock class="parent-block-style">
    <slot />
  </ChildBlock>
</template>
<script setup>
import ChildBlock from "@/components/nested-components-with-styles/ChildBlock.vue";
</script>

<style>
.parent-block-style {
  background-color: lightcoral;
  border: 1px dashed darkslategray;
}
</style>
