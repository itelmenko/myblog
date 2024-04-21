<template>
  <!-- Определяем свойства по-умолчанию для элементов нижних уровней -->
  <ParentBlock class="grand-block-with-props" backgroundColorStyle="orange" textColorStyle="white">
    <slot />
  </ParentBlock>
</template>
<script setup>
import ParentBlock from "@/components/nested-with-props/ParentBlock.vue";

/**
 * Компонент третьего уровня иерархии.
 * У него есть свои свойства
 * и в то же время он как-бы "наследует" свойства ChildBlock и ParentBlock
 */
</script>
