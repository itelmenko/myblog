<script setup>
import { ref } from 'vue'
import TextComponent from '@/components/TextComponent.vue'
import ImgComponent from '@/components/ImgComponent.vue'
import FormComponent from '@/components/FormComponent.vue'

const settings = {
  text: { component: TextComponent, data: {} },
  img: { component: ImgComponent, data: { width: '380px', title: 'Sample picture' } },
  form: {
    component: FormComponent,
    data: { title: 'Some name', description: 'Some very long text' }
  }
}

const selected = ref('text')
</script>

<template>
  <header>
    <h1>Динамические компоненты</h1>
  </header>

  <main>
    <p>Select a component</p>

    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>text</option>
      <option>img</option>
      <option>form</option>
    </select>

    <h2>Result</h2>

    <!-- Здесь будет отображаться выбранный компонент -->
    <component :is="settings[selected].component" v-bind="settings[selected].data"></component>
  </main>
</template>

<style>
header,
main {
  margin-inline-start: 2em;
  margin-inline-end: 2em;
}

h2 {
  margin-top: 7px;
}

select {
  padding: 5px;
  min-width: 380px;
}

.text,
form,
img {
  border: 1px solid darkgray;
  margin-top: 7px;
  padding: 5px;
  border-radius: 5px;
}
</style>
