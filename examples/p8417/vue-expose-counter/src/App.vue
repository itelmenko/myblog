<template>
  <main>
    <my-counter ref="counter"></my-counter>
    <button @click="counter.reset()">Reset</button>
  </main>
  <footer>
    <button @click="counter.increment()">counter.increment()</button>
  </footer>
</template>
<script>
import MyCounter from '@/components/MyCounter.vue'
import { ref } from 'vue'

export default {
  components: {
    MyCounter
  },
  setup() {
    const counter = ref()

    return { counter }
  }
}
</script>

<style>
#app {
  margin: 0 auto;
  padding: 15px;
  width: 360px;
  border: 1px gainsboro solid;
  border-radius: 6px;
}
footer {
  margin-top: 15px;
}
label + button,
button + button {
  margin-inline-start: 5px;
}
</style>
