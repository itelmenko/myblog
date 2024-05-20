<template>
  <v-card :title="title">
    <v-card-text style="overflow-y: auto">
      <slot></slot>
    </v-card-text>
    <v-card-actions>
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  title: { type: String },
})
</script>
