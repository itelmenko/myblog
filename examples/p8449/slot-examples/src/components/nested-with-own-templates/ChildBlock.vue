<template>
  <div class="child-block-with-own-template" :style="{ backgroundColor: props.background, border: props.border }">
    <div>Child Content</div>
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  background: {
    type: String,
    default: "yellowgreen"
  },
  border: {
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
