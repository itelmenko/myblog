<script>
import Parent from "./Parent"
export default {
  name: 'ChildExtend',
  extends: Parent,
  data() {
    return {
      title: 'Child',
      actions: [
        { text: 'Increment', handler: this.increment },
        { text: 'Decrement', handler: this.decrement },
        { text: 'Clear', handler: this.clear },
      ]
    }
  },
  created() {
    console.info(`Child's hook "created"`);
  },
  methods: {
    decrement() {
      this.index--;
    }
  }
}
</script>