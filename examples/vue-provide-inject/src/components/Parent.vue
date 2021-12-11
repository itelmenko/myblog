<template>
  <div class="parent">
    <h2>Parent</h2>
    <input type="text" v-model="reactiveValue1"/>
    <p>
      <strong>Parent local value #1:</strong> {{ reactiveValue1 }}
    </p>
    <input type="text" v-model="reactiveValue2"/>
    <p>
      <strong>Parent local value #2:</strong> {{ reactiveValue2 }}
    </p>
    <child-level1></child-level1>
  </div>
</template>

<script>
import {ref, provide, readonly} from 'vue'
import ChildLevel1 from "./ChildLevel1";

export default {
  components: {ChildLevel1},
  setup() {
    provide("providedStaticValue", 'Hello from parent');

    const reactiveValue1 = ref('Default value for reactive #1')
    provide('providedReactiveValue1', reactiveValue1);

    const reactiveValue2 = ref('Default value for reactive #2')
    provide('providedReactiveValue2', readonly(reactiveValue2));

    const clearReactiveValue2 = () => {
      reactiveValue2.value = ''
    }
    provide('clearReactiveValue', clearReactiveValue2)

    return {
      reactiveValue1,
      reactiveValue2
    }
  }
}
</script>

<style lang="css">
  .parent {
    border: 1px solid #2c3e50;
    padding: 7px;
    border-radius: 6px;
  }
</style>
