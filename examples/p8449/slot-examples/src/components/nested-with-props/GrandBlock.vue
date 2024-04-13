<template>
  <ParentBlock class="grand-block-with-props" backgroundColorStyle="orange" textColorStyle="white">
    <slot />
  </ParentBlock>
</template>
<script setup>
import ParentBlock from "@/components/nested-with-props/ParentBlock.vue";
</script>
