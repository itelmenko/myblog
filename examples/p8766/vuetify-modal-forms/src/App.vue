<template>
  <v-app>
    <header>
      <h1>Пример для v-dlg и v-navigation-drawer</h1>
    </header>

    <main>
      <p>Используйте кнопки ниже для вызова форм</p>
      <br />
      <v-btn @click="showModal">Редактирование</v-btn>
      <v-btn @click="handleDelete">Удаление</v-btn>
    </main>

    <!-- В слот модального окна встраиваем нужный компонент динамически -->
    <app-modal v-model="modal.visible">
      <component
        :is="modal.form"
        v-bind="modal.props"
        :title="modal.title"
        @done="modal.close()"
      ></component>
    </app-modal>
  </v-app>
</template>

<script setup>
import AppModal from '@/components/AppModal.vue'
import { useModalStore } from '@/stores/modal.js'
import EditForm from '@/components/forms/EditForm.vue'
import DeleteForm from '@/components/forms/DeleteForm.vue'

const modal = useModalStore()

function showModal() {
  modal.open('Редактировать запись', EditForm, {
    id: 'JH219zA',
    name: 'Большой каньон',
    description: 'Гранд-Каньон в Аризоне – это уникальное природное образование.'
  })
}

function handleDelete() {
  modal.open('Удалить запись', DeleteForm, { id: 'oAuu378', name: 'Крупная рыба' })
}
</script>

<style>
header,
main {
  margin-inline-start: 2em;
  margin-inline-end: 2em;
}
.v-btn + .v-btn {
  margin-inline-start: 7px;
}
</style>
