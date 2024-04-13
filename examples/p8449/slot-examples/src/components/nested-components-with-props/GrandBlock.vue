<template>
  <ParentBlock class="grand-block-with-props" background="coral" color="white">
    <slot />
  </ParentBlock>
</template>
<script setup>
import ParentBlock from "@/components/nested-components-with-props/ParentBlock.vue";
</script>
