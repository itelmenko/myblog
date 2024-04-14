<template>
  <div class="nested-slots-in-same-component">
    <h1>Nested Slots In Same Component</h1>
    <p>TextInput with default button and icon</p>
    <TextInput></TextInput>
    <p>TextInput with custom button without icon</p>
    <TextInput>
      <template #button>
        <button class="button">Save</button>
      </template>
    </TextInput>
    <p>TextInput with custom icon</p>
    <TextInput>
      <template #icon>
        <FontAwesomeIcon :icon="faSave" class="icon" />
      </template>
    </TextInput>
  </div>
</template>
<script setup>
import TextInput from "@/components/nested-slots-in-same-component/TextInput.vue";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>
