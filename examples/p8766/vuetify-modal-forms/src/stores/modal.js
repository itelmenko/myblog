import { ref, shallowRef } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const visible = ref(false)
  const title = ref('')
  const form = shallowRef()
  const props = ref()

  function open(modalTitle, content, data) {
    visible.value = true
    title.value = modalTitle
    form.value = content
    props.value = data
  }

  function close() {
    visible.value = false
  }

  return { visible, form, title, props, open, close }
})
