<template>
  <main class="about">
    <div>
      <h1>This is an about page</h1>
      <div v-if="visible" class="hidden-area">
        <h2>Hidden area</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in nulla id mi sodales dapibus.
        </p>
      </div>
      <button v-else class="my-button" @click="visible = true">Show hidden area</button>
      <div class="backend-section">
        <p>Load data from backend: <span class="message" v-if="backendMessage">{{ backendMessage }}</span></p>
        <button v-if="!backendMessage" class="load-button" @click="load()">Load</button>
      </div>
    </div>
  </main>
</template>

<script setup>
import {ref} from 'vue'
import axios from '@/axios.js'

const visible = ref()
const backendMessage = ref()

async function load() {
  const result = (await axios.get('/some/url')).data
  backendMessage.value = result.message
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.backend-section {
  margin-top: 1em;
}
</style>
