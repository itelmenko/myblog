<template>
  <div
    class="child-block-with-own-template"
    :style="{ backgroundColor: props.backgroundColorStyle, border: props.borderStyle }"
  >
    <div>Child Content</div>
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  backgroundColorStyle: {
    type: String,
    default: "yellowgreen"
  },
  borderStyle: {
    type: String,
    default: "none"
  }
});
</script>

<style>
.child-block-with-own-template {
  margin: 7px 0;
  padding: 7px;
  border-radius: 5px;
}
</style>
