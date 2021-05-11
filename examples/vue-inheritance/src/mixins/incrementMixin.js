export default {
  data() {
    return {
      mixinData2: 2,
    }
  },
  created() {
    console.info(`Mixin's (2) hook "created"`);
  },
  methods: {
    increment() {
      this.index++;
    },
  }
};