<template>
  <ParentBlock class="grand-block-style">
    <slot />
  </ParentBlock>
</template>
<script setup>
import ParentBlock from "@/components/nested-components-with-styles/ParentBlock.vue";
</script>

<style>
.grand-block-style {
  background-color: coral;
  color: white;
}
</style>
