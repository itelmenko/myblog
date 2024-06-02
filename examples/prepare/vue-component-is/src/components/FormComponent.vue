<script setup>
import { reactive } from 'vue'

const props = defineProps({
  title: String,
  description: String
})

const data = reactive({ ...props })

function handleSubmit() {
  alert('Form data: ' + JSON.stringify(data))
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="title"> Title: </label>
      <input type="text" id="title" v-model="data.title" />
    </div>
    <div>
      <label for="description"> Description: </label>
      <textarea id="description" v-model="data.description"></textarea>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
label {
  display: block;
}

form {
  width: 380px;
}

input,
textarea,
button {
  min-width: 100%;
}
</style>
