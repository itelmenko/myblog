<template>
  <div class="text-input-container">
    <input type="text" v-bind="$attrs" class="field" />
    <slot name="button">
      <button class="button">
        <slot name="icon">
          <FontAwesomeIcon :icon="faCheck" class="icon" />
        </slot>
      </button>
    </slot>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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
    min-width: 50px;
    &:active {
      background: #004d40;
    }
  }
}
</style>
