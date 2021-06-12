<template>
  <div class="component-border pl-1 mb-1 ms-1">
    <h3>
      Example Composition API
    </h3>
    <div>
      <p>Count: {{ count }}</p>
      <p>
        <button
          v-for="(action, index) in actions"
          v-bind:key="index"
          @click="action.handler"
          class="me-1">
          {{ action.text }}
        </button>
      </p>
    </div>
  </div>
</template>
<script>
import { ref } from '@vue/composition-api';
import useIncrement from "../briks/useIncrement";
import useDecrement from "../briks/useDecrement";

export default {
  setup: () => {

    const count = ref(0);
    const { increment } = useIncrement(count);
    const { decrement } = useDecrement(count);

    function clear() {
      count.value = 0;
    }

    const actions = ref([
      { text: 'Increment', handler: increment },
      { text: 'Decrement', handler: decrement },
      { text: 'Clear', handler: clear },
    ]);

    return {
      actions,
      count,
      increment,
      clear,
      decrement
    }
  },
};
</script>