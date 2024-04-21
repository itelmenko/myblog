<template>
  <!-- Определяем свойства по-умолчанию для вложенного элемента -->
  <!-- и применяем свойства текущего к style -->
  <ChildBlock
    class="parent-block-with-props"
    borderStyle="1px dashed darkslategray"
    backgroundColorStyle="lightcoral"
    :style="{ color: props.textColorStyle }"
  >
    <!-- Основной слот (слот по-умолчанию) ParentBlock -->
    <slot />
  </ChildBlock>
</template>
<script setup>
import ChildBlock from "@/components/nested-with-props/ChildBlock.vue";

/**
 * Компонент второго уровня иерархии.
 * У него есть свои свойства
 * и в то же время он как-бы "наследует" свойства ChildBlock
 */
const props = defineProps({
  textColorStyle: {
    type: String,
    default: "black"
  }
});
</script>
