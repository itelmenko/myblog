<template>
  <ChildBlock
    class="parent-block-with-props"
    borderStyle="1px dashed darkslategray"
    backgroundColorStyle="lightcoral"
    :style="{ color: props.textColorStyle }"
  >
    <slot />
  </ChildBlock>
</template>
<script setup>
import ChildBlock from "@/components/nested-with-props/ChildBlock.vue";

const props = defineProps({
  textColorStyle: {
    type: String,
    default: "black"
  }
});
</script>
