<template>
  <div class="component-border pl-1 mb-1 ms-1">
    <h3>
      {{ title }}
    </h3>
    <div>
      <p>mixinData1: {{ mixinData1 }}</p>
      <p>mixinData2: {{ mixinData2 }}</p>
      <p>Data: {{ index }}</p>
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
import incrementMixin from "@/mixins/incrementMixin"
import decrementMixin from "@/mixins/decrementMixin";
export default {
  name: 'Mix',
  mixins: [ incrementMixin, decrementMixin ],
  data() {
    return {
      title: 'Mix',
      index: 0,
      actions: [
        { text: 'Increment', handler: this.increment },
        { text: 'Decrement', handler: this.decrement },
        { text: 'Clear', handler: this.clear },
      ]
    }
  },
  created() {
    console.info(`Mix component hook "created"`);
  },
  methods: {
    clear() {
      this.index = 0;
    },
  }
}
</script>