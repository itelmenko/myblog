<script setup lang="ts">
import TextInput from "@/components/TextInput.vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch, faEnvelope } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <h1>Text fields with icons and buttons</h1>
  <div class="row">Lorem ipsum ...</div>
  <div class="row">
    <TextInput></TextInput>
  </div>
  <div class="row">
    <TextInput>
      <template #prepend><FontAwesomeIcon :icon="faSearch" class="icon" /></template>
      <template #append><input type="submit" value="Search" class="button" /></template>
    </TextInput>
  </div>
  <div class="row">
    <TextInput>
      <template #append><FontAwesomeIcon :icon="faEnvelope" class="icon" /></template>
    </TextInput>
  </div>
</template>

<style scoped>
.row + .row {
  margin-top: 12px;
}
</style>
