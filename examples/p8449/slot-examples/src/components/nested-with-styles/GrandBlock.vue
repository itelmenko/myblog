<template>
  <ParentBlock class="grand-block-style">
    <slot />
  </ParentBlock>
</template>
<script setup>
import ParentBlock from "@/components/nested-with-styles/ParentBlock.vue";
</script>

<style>
.grand-block-style {
  background-color: orange;
  color: white;
}
</style>
