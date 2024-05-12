<template>
  <div class="level level-1">
    <span class="value">Level 1. Value: {{ counter }}</span>
    <!-- Здесь мы обращаемся прямо к данным хранилища -->
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    <level-two></level-two>
  </div>
</template>

<script setup>
import LevelTwo from './LevelTwo.vue'
import useState from './state.js'

// Подключаем хранилище и будем работать с данными как с локальными
const { counter } = useState()
</script>

<style scoped>
.level-1 {
  background-color: yellow;
  margin: 0;
}
</style>
