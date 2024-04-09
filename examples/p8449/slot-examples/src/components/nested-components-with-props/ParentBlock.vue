<template>
  <ChildBlock class="parent-block-with-props" border="1px dashed darkslategray" background="lightcoral" :style="{ color: props.color }">
    <slot />
  </ChildBlock>
</template>
<script setup>
import ChildBlock from "@/components/nested-components-with-props/ChildBlock.vue";

const props = defineProps({
  color: {
    type: String,
    default: "black"
  }
});
</script>

