export default {
  data() {
    return {
      mixinData1: 1,
    }
  },
  created() {
    console.info(`Mixin's (1) hook "created"`);
  },
  methods: {
    decrement() {
      this.index--;
    }
  }
};