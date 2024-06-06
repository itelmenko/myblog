<template>
  <v-card :title="title">
    <v-card-text class="form-layout__content">
      <slot></slot>
    </v-card-text>
    <v-card-actions>
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  title: { type: String }
})
</script>

<style>
.form-layout__content {
  overflow-y: auto;
  padding-top: 12px !important;
}
</style>
