export default {
  data: () => ({
    count: 0
  }),
  methods: {
    increment() {
      this.count++;
    }
  },
  render(createElement) {
    return createElement('div',
      this.$scopedSlots.default({
        count: this.count,
        increment: this.increment,
      })
    );
  }
}