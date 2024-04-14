<template>
  <div class="custom-text-input-container">
    <label v-if="$slots.label || label" :for="$attrs.id">
      <slot name="label">
        {{ label }}
      </slot>
    </label>
    <TextInput v-bind="$attrs">
      <template v-for="(slot, name) in $slots" v-slot:[name]="item">
        <slot :name="name" v-bind="item"></slot>
      </template>
    </TextInput>
  </div>
</template>

<script setup>
import TextInput from "@/components/nested-with-named-slots/TextInput.vue";

defineProps({
  label: {
    type: String
  }
});

defineOptions({
  inheritAttrs: false
});
</script>

<style scoped>
label {
  font-weight: 500;
}
</style>
