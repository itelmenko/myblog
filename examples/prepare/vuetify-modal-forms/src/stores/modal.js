import { ref, shallowRef } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const visible = ref(false)
  const title = ref('')
  const form = shallowRef()

  function open(modalTitle, content)
  {
    visible.value = true
    title.value = modalTitle
    form.value = content
  }

  function close()
  {
    visible.value = false
  }

  return { visible, form, title, open, close }
})
