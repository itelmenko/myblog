<template>
  <!-- С помощью свойств компонента влияем на его внешний вид -->
  <div
    class="child-block-with-props"
    :style="{ backgroundColor: props.backgroundColorStyle, border: props.borderStyle }"
  >
    <!-- Основной слот (слот по-умолчанию) ChildBlock -->
    <slot />
  </div>
</template>

<script setup>
/**
 * Компонент нижнего уровня иерархии вложенности.
 * У него есть свои свойства и слот.
 */
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
.child-block-with-props {
  margin: 7px 0;
  padding: 7px;
  border-radius: 5px;
}
</style>
