<template>
  <div class="component-border pl-1 mb-1 ms-1">
    <h1>
      Scoped Slot Example
    </h1>
    <counter-renderless v-slot="{ count, increment }">
      <p>Count: {{ count }}</p>
      <p>
        <button @click="increment">Increment</button>
      </p>
    </counter-renderless>
  </div>
</template>
<script>
import CounterRenderless from "./CounterRenderless";
export default {
  components: {
    CounterRenderless
  }
}
</script>