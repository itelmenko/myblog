import { ref } from 'vue'

/**
 * Содержимое хранилища. Здесь может быть больше данных
 */
const counter = ref(0)

// Функция для подключения хранилища внутри компонентов
function useState() {
  return { counter }
}

export default useState
