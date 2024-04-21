<template>
  <div class="custom-text-input-container">
    <!-- Выводим тег label, только если передана подпись в виде свойства или слота -->
    <label v-if="$slots.label || label" :for="$attrs.id">
      <slot name="label">
        {{ label }}
      </slot>
    </label>
    <TextInput v-bind="$attrs">
      <!-- Пробрасываем все слоты на следующий уровень -->
      <template v-for="(slot, name) in $slots" v-slot:[name]="slotProps">
        <slot :name="name" v-bind="slotProps"></slot>
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
