<template>
  <div class="child-block-with-props" :style="{ backgroundColor: props.background, border: props.border } ">
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
.child-block-with-props {
  margin: 7px 0;
  padding: 7px;
  border-radius: 5px;
}
</style>

