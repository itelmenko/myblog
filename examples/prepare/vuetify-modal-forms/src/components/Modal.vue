<template>
  <v-dialog
      max-width="600"
  >
    <v-card
        :title="title"
    >
      <v-card-text>
        <slot></slot>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
defineProps({
  title: { type: String, required: true }
})

defineEmits(['close'])
</script>
