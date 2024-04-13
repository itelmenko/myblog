<template>
  <label>
    <div v-if="label" class="label">
      {{ label }}
    </div>
    <TextInput v-bind="$attrs">
      <template v-for="(slot, name) in $slots" v-slot:[name]="item">
        <slot :name="name" v-bind="item"></slot>
      </template>
    </TextInput>
  </label>
</template>

<script setup>
import TextInput from "@/components/nested-with-named-slots/TextInput.vue";

defineProps({
  label: {
    type: String
  }
});
</script>

<style scoped>
.label {
  font-weight: 500;
}
</style>
