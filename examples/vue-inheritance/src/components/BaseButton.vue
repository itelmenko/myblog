<template>
<button v-on:click="increment"><slot/> [<span>{{ index }}]</span></button>
</template>
<script>
export default {
  name: 'BaseButton',
  data() {
    return {
      index: 1,
    }
  },
  methods: {

    increment() {
      this.index++;
    }

  }
}
</script>