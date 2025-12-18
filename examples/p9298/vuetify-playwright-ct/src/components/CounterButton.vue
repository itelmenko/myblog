<template>
  <v-card class="pa-4" max-width="400">
    <v-card-title class="text-h6 mb-4">
      Счетчик кликов
    </v-card-title>
    
    <v-card-text>
      <div class="text-h4 text-center mb-4">
        {{ count }}
      </div>
      
      <v-btn
        color="primary"
        size="large"
        block
        @click="increment"
        data-testid="increment-button"
      >
        Увеличить
      </v-btn>
      
      <v-btn
        color="error"
        size="large"
        block
        class="mt-2"
        @click="reset"
        data-testid="reset-button"
        :disabled="count === 0"
      >
        Сбросить
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}

const reset = () => {
  count.value = 0
}

// Expose for testing
defineExpose({
  count,
  increment,
  reset,
})
</script>





