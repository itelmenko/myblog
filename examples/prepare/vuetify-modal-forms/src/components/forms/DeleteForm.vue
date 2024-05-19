<template>
  <v-alert type="warning">Вы действительно хотите удалить запись?</v-alert>
  <v-btn :loading="loading" @click="handleClick">Delete</v-btn>
</template>

<script setup>
import { ref } from "vue";
import { useModalStore } from "@/stores/modal.js";

defineProps({
  id: String
})

const modal = useModalStore()
const loading = ref(false)

function handleClick() {
  loading.value = true
  console.log('Deleting ...')
  loading.value = false
  modal.close();
}
</script>
