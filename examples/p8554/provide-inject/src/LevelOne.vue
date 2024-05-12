<template>
  <div class="level level-1">
    <span class="value">Level 1. Value: {{ counter }}</span>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    <level-two></level-two>
  </div>
</template>

<script setup>
import LevelTwo from './LevelTwo.vue'
import { ref, provide } from 'vue'

// Локальная переменная для компонента
const counter = ref(0)

// Она будет доступной на уровнях ниже под именем globalCounter
provide('globalCounter', counter)
</script>

<style scoped>
.level-1 {
  background-color: yellow;
  margin: 0;
}
</style>
