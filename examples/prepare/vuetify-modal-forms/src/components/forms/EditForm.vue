<template>
  <v-form validate-on="submit lazy" @submit.prevent="handleSubmit">
    <v-text-field
        v-model="data.name"
        label="Name"
    ></v-text-field>

    <v-btn
        :loading="loading"
        class="mt-2"
        text="Submit"
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

import { reactive, ref } from "vue";
import { useModalStore } from "@/stores/modal.js";

const modal = useModalStore()
const loading = ref(false)
const data = reactive({
  name: props.name
})

function handleSubmit()
{
  loading.value = true
  console.log('Updating ...')
  loading.value = false
  modal.close();
}

</script>
