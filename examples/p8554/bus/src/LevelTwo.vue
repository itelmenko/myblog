<template>
  <div class="level level-2">
    <span class="value">Level 2. Value: {{ counter }}</span>
    <level-three></level-three>
  </div>
</template>

<script setup>
import LevelThree from './LevelThree.vue'
import { ref, onMounted } from 'vue'
import emitter from './emitter.js'

const counter = ref(0)

function updateCounter(data) {
  counter.value = data.value
}

onMounted(() => {
  emitter.on('counter:update', updateCounter)
})
</script>

<style scoped>
.level-2 {
  background-color: greenyellow;
}
</style>
