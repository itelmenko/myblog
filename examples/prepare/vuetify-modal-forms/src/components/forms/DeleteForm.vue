<template>
  <form-layout :title="props.title">
    <template #default>
      <v-alert type="warning">Вы действительно хотите удалить запись &ldquo;{{ props.name }}&rdquo;?</v-alert>
    </template>
    <template #actions>
      <v-btn :loading="loading" color="warning" block @click="handleClick" class="mt-2">Удалить</v-btn>
    </template>
  </form-layout>
</template>

<script setup>
import { ref } from "vue";
import FormLayout from "@/components/forms/FormLayout.vue";

const props = defineProps({
  id: String,
  name: { type: String },
  title: { type: String }
})

const emit = defineEmits(['done'])

const loading = ref(false)

function handleClick() {
  loading.value = true
  console.log(`Deleting ${props.id}...`)
  loading.value = false
  emit('done')
}
</script>
