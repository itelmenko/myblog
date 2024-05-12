<template>
  <div class="level level-1">
    <span class="value">Level 1. Value: {{ counter }}</span>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <level-two></level-two>
  </div>
</template>

<script setup>
import LevelTwo from './LevelTwo.vue'
import { ref, onMounted } from 'vue'
import emitter from './emitter.js'

// Локальная переменная для компонента
const counter = ref(0)

function fire() {
  // Отправка события глобальной шине
  emitter.emit('counter:update', { value: counter.value })
}

function increment() {
  counter.value++
  fire()
}

function decrement() {
  counter.value--
  fire()
}

function updateCounter(data) {
  // Обработчик событий от других компонентов
  counter.value = data.value
}

onMounted(() => {
  // Прикрепляем обработчик события
  emitter.on('counter:update', updateCounter)
})
</script>

<style scoped>
.level-1 {
  background-color: yellow;
  margin: 0;
}
</style>
