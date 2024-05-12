<template>
  <div class="level level-3">
    <span class="value">Level 3. Value: {{ counter }}</span>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import emitter from './emitter.js'

const counter = ref(0)

function updateCounter(data) {
  counter.value = data.value
}

function fire() {
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

onMounted(() => {
  emitter.on('counter:update', updateCounter)
})
</script>

<style scoped>
.level-3 {
  background-color: white;
}
</style>
