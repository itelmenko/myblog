<template>
  <div class="text-input-container">
    <slot name="prepend"></slot>
    <input type="text" v-bind="$attrs" class="field" />
    <slot name="append"></slot>
  </div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false
});
</script>

<style lang="scss">
.text-input-container {
  --primary-color: #00695c;
  display: inline-flex;
  flex: 1 1 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  align-items: center;
  width: 100%;

  .icon {
    padding-inline-start: 0.5rem;
    padding-inline-end: 0.5rem;
  }

  &:focus-within {
    border-color: var(--primary-color);
    .icon {
      color: var(--primary-color);
    }
  }

  input.field {
    border: 0;
    padding: 0.5rem;
    flex: 1;

    &:focus,
    &:focus-visible {
      outline: none;
    }
  }

  .button {
    background: var(--primary-color);
    border: 0;
    color: white;
    padding: 0.5rem;
    border-radius: 0;
    cursor: pointer;
    &:active {
      background: #004d40;
    }
  }
}
</style>
