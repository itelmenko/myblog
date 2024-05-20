<template>
  <v-form @submit.prevent="handleSubmit">
    <form-layout :title="props.title">
      <template #default>
          <v-text-field
              v-model="data.name"
              variant="outlined"
              label="Имя"
          ></v-text-field>

          <v-textarea v-model="data.description" label="Описание" variant="outlined"></v-textarea>
      </template>
      <template #actions>
        <v-btn
            :loading="loading"
            color="primary"
            class="mt-2"
            text="Сохранить изменения"
            type="submit"
            block
        ></v-btn>
      </template>
    </form-layout>
  </v-form>
</template>

<script setup>
import { reactive, ref, toRefs } from "vue";
import FormLayout from "@/components/forms/FormLayout.vue";

const props = defineProps({
  id: { type: String },
  name: { type: String },
  description: { type: String },
  title: { type: String },
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
