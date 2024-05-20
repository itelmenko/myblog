<template>
  <v-dialog max-width="600">
    <slot></slot>
  </v-dialog>
</template>

<script setup>

defineEmits(['close'])
</script>
