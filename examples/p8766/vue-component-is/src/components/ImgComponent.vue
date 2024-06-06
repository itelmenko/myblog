<script setup>
defineProps({
  width: String,
  title: String
})
</script>

<template>
  <img src="@/assets/logo.svg" :title="title" :alt="title" :width="width" />
</template>
