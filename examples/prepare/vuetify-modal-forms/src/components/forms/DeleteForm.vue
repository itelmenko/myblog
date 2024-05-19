<template>
  <v-alert type="warning">Вы действительно хотите удалить запись &ldquo;{{ props.name }}&rdquo;?</v-alert>
  <v-btn :loading="loading" block @click="handleClick" class="mt-2">Удалить</v-btn>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  id: String,
  name: { type: String }
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
