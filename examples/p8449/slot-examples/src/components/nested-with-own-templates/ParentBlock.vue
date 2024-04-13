<template>
  <div class="parent-block-with-own-template">
    <div>Parent Content</div>
    <ChildBlock
      borderStyle="1px dashed darkslategray"
      backgroundColorStyle="lightcoral"
      :style="{ color: props.textColorStyle }"
      v-bind="$attrs"
    >
      <slot />
    </ChildBlock>
  </div>
</template>

<script setup>
import ChildBlock from "@/components/nested-with-own-templates/ChildBlock.vue";
const props = defineProps({
  textColorStyle: {
    type: String,
    default: "black"
  }
});
</script>

<style>
.parent-block-with-own-template {
  margin: 7px 0;
  padding: 7px;
  border-radius: 5px;
  border: 1px solid blueviolet;
}
</style>
