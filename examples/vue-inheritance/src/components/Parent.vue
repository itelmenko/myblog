<template>
  <div class="component-border pl-1 mb-1">
    <h1>
      {{ title }}
    </h1>
    <div>
      <p>Param: {{ param }}</p>
      <p>Data: {{ index }}</p>
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
    }
  },
  created() {
    console.info(`Parent's hook "created" for component "${this.title}"`);
    this.increment();
  },
  methods: {
    increment() {
      this.index++;
    }
  }
}
</script>