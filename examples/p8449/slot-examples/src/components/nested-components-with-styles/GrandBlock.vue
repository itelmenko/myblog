<template>
  <ParentBlock class="grand-block">
    <slot />
  </ParentBlock>
</template>
<script setup>
import ParentBlock from "@/components/nested-components-with-styles/ParentBlock.vue";
</script>

<style>
.grand-block {
  background-color: coral;
  color: white;
}
</style>
