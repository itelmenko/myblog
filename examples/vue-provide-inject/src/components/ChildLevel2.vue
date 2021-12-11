<template>
  <div class="level2">
    <h4>Child Level 2</h4>
    <p>
      <strong>Parent local value injected into level 2:</strong> {{ injectedStaticValue }}
    </p>
    <p>
      <strong>Parent local reactive value #1 injected into level 2:</strong> {{ injectedReactiveValue1 }}
    </p>
    <button @click="clearReactiveValue1">Erase parent reactive value #1 direct in level 2</button>
    <p>
      <strong>Parent local reactive value #2 injected into level 2:</strong> {{ injectedReactiveValue2 }}
    </p>
    <button @click="clearReactiveValue2">Erase parent reactive value #2 via injected method</button>
    <button @click="clearReactiveValue2Broken">Erase parent reactive value #2 direct in level 2 (will not work)</button>
  </div>
</template>

<script>
import {inject} from "vue";

export default {
  setup() {
    const injectedStaticValue = inject("providedStaticValue", 'Default value for static if not provided');

    const injectedReactiveValue1 = inject('providedReactiveValue1', 'Default for reactive #1');
    const injectedReactiveValue2 = inject('providedReactiveValue2', 'Default for reactive #2');

    function clearReactiveValue1 () {
      injectedReactiveValue1.value = ''
    }

    const clearReactiveValue2 = inject("clearReactiveValue")

    function clearReactiveValue2Broken () {
      injectedReactiveValue2.value = ''
    }

    return {
      injectedStaticValue,
      injectedReactiveValue1,
      injectedReactiveValue2,
      clearReactiveValue1,
      clearReactiveValue2,
      clearReactiveValue2Broken
    }
  }
}
</script>

<style lang="css">
.level2 {
  border: 1px solid dodgerblue;
  padding: 7px;
  border-radius: 6px;
}
.level2 button {
  margin-inline-end: 1em;
  margin-bottom: 1em;
}
</style>
