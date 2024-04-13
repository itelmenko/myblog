<template>
  <div class="grand-block-with-own-template">
    <div>Grand Content</div>
    <ParentBlock
      class="grand-block-with-props"
      backgroundColorStyle="orange"
      textColorStyle="white"
      v-bind="$attrs"
    >
      <slot />
    </ParentBlock>
  </div>
</template>
<script setup>
import ParentBlock from "@/components/nested-with-own-templates/ParentBlock.vue";
</script>

<style>
.grand-block-with-own-template {
  margin: 7px 0;
  padding: 7px;
  border-radius: 5px;
  border: 1px solid green;
}
</style>
