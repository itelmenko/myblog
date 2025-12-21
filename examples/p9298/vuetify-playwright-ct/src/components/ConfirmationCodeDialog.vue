<template>
  <v-dialog
    v-model="model"
    max-width="520"
    data-testid="confirmation-code-dialog"
  >
    <v-card>
      <v-card-title class="text-h6" data-testid="title">
        {{ props.title }}
      </v-card-title>

      <v-card-text>
        <v-text-field
          v-model="code"
          label="Код подтверждения"
          autocomplete="one-time-code"
          inputmode="numeric"
          data-testid="code-input"
        />
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          variant="text"
          data-testid="cancel"
          @click="onCancel"
        >
          Отмена
        </v-btn>
        <v-btn
          color="primary"
          variant="text"
          data-testid="approve"
          @click="onApprove"
        >
          ОК
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Ввод кода подтвеждения',
})

const model = defineModel<boolean>({ default: false })

const emit = defineEmits<{
  cancel: []
  approve: [code: string]
}>()

const code = ref('')

watch(model, (isOpen) => {
  // При каждом открытии начинаем с пустого значения.
  if (isOpen) code.value = ''
})

function onCancel() {
  model.value = false
  emit('cancel')
}

function onApprove() {
  model.value = false
  emit('approve', code.value)
}
</script>