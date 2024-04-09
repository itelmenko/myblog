<template>
  <div class="child-block-with-props" :style="{ backgroundColor: props.background, border: props.border } ">
    <slot />
    {{ styles }}
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
  margin: 7px;
  padding: 7px;
  border-radius: 5px;
}
</style>

