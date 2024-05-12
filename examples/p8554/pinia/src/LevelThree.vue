<template>
  <div class="level level-3">
    <span class="value">
      Level 3. Value: {{ store.counter }}.
      <!-- Используем getter, как computed -->
      Double: {{ store.doubleCount }}
    </span>
    <button @click="store.increment">+</button>
    <button @click="store.decrement">-</button>
  </div>
</template>

<script setup>
import { useCounterStore } from './state.js'

const store = useCounterStore()
</script>

<style scoped>
.level-3 {
  background-color: white;
}
</style>
