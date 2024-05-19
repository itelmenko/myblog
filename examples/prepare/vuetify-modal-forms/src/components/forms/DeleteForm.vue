<template>
  <v-alert type="warning">Вы действительно хотите удалить запись {{ props.id }}?</v-alert>
  <v-btn :loading="loading" block @click="handleClick" class="mt-2">Удалить</v-btn>
</template>

<script setup>
import { ref } from "vue";
import { useModalStore } from "@/stores/modal.js";

const props = defineProps({
  id: String
})

const modal = useModalStore()
const loading = ref(false)

function handleClick() {
  loading.value = true
  console.log(`Deleting ${props.id}...`)
  loading.value = false
  modal.close();
}
</script>
