<template>
  <div class="component-border pl-1 mb-1 ms-1">
    <h3>
      {{ title }}
    </h3>
    <div>
      <p>Param: {{ param }}</p>
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
export default {
  name: 'Parent',
  props: {
    param: { type: String, default: '' },
  },
  data() {
    return {
      title: 'Parent',
      index: 0,
      actions: [
        { text: 'Increment', handler: this.increment },
      ]
    }
  },
  created() {
    console.info(`Parent's hook "created" for component "${this.title}"`);
  },
  methods: {
    clear() {
      this.index = 0;
    },
    increment() {
      this.index++;
    },
  }
}
</script>