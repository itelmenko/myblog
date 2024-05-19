<template>
  <v-form validate-on="submit lazy" @submit.prevent="handleSubmit">
    <v-text-field
        v-model="data.name"
        variant="outlined"
        label="Имя"
    ></v-text-field>

    <v-textarea v-model="data.description" label="Описание" variant="outlined"></v-textarea>

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
import { reactive, ref, toRefs } from "vue";

const props = defineProps({
  id: { type: String },
  name: { type: String },
  description: { type: String }
})

const emit = defineEmits(['done'])

const loading = ref(false)
const data = reactive(toRefs(props))

function handleSubmit()
{
  loading.value = true
  console.log(`Updating ${props.id}...`)
  loading.value = false
  emit('done')
}

</script>
