<template>
  <v-form validate-on="submit lazy" @submit.prevent="handleSubmit">
    <v-text-field
        v-model="data.name"
        variant="outlined"
        label="Имя"
    ></v-text-field>

    <v-btn
        :loading="loading"
        class="mt-2"
        text="Сохранить изменения"
        type="submit"
        block
    ></v-btn>
  </v-form>
</template>

<script setup>
const props = defineProps({
  id: { type: String },
  name: { type: String }
})

const emit = defineEmits(['done'])

import { reactive, ref } from "vue";

const loading = ref(false)
const data = reactive({
  id: props.id,
  name: props.name
})

function handleSubmit()
{
  loading.value = true
  console.log(`Updating ${props.id}...`)
  loading.value = false
  emit('done')
}

</script>
