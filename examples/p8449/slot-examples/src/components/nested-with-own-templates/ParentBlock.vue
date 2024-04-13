<template>
  <div class="parent-block-with-own-template">
    <div>Parent Content</div>
    <ChildBlock border="1px dashed darkslategray" background="lightcoral" :style="{ color: props.color }" v-bind="$attrs">
      <slot />
    </ChildBlock>
  </div>
</template>

<script setup>
import ChildBlock from "@/components/nested-with-own-templates/ChildBlock.vue";
const props = defineProps({
  color: {
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
