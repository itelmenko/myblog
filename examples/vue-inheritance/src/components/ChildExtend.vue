<script>
import Parent from "./Parent"

export default {
  name: 'Child',

  extends: Parent,

  data() {
    return {
      title: 'Child',
    }
  },
  created() {
    console.info(`Child's hook "created"`);
    this.multiply(5);
  },
  methods: {
    increment() {
      this.index++;
    },
    multiply(value) {
      this.index = this.index*value;
    }
  }
}
</script>