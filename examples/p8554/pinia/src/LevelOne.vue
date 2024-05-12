<template>
  <div class="level level-1">
    <span class="value">Level 1. Value: {{ store.counter }}</span>
    <!-- Обращаемся к методам хранилища -->
    <button @click="store.increment">+</button>
    <button @click="store.decrement">-</button>
    <level-two></level-two>
  </div>
</template>

<script setup>
import LevelTwo from './LevelTwo.vue'
import { useCounterStore } from './state.js'

/**
 * Подключаем хранилище в каомпонент
 * и будем с ним работать напряму и через методы
 */
const store = useCounterStore()
</script>

<style scoped>
.level-1 {
  background-color: yellow;
  margin: 0;
}
</style>
