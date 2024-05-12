import { defineStore } from 'pinia'

/**
 * Описываем хранилище вместе с методами (actions)
 */
export const useCounterStore = defineStore('counter', {
  state: () => ({ counter: 0 }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    }
  }
})
