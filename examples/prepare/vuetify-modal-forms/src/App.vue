<template>
  <header>
    <h1>
      Пример для v-dlg
    </h1>
  </header>

  <main>
    <p>
      Используйте кнопки ниже для вызова диалогов
    </p>
    <br/>
    <v-btn @click="showModal">Редактирование</v-btn>
    <v-btn @click="handleDelete">Удаление</v-btn>
  </main>
  <app-modal v-model="modal.visible">
    <component :is="modal.form" v-bind="modal.props" :title="modal.title" @done="modal.close()"></component>
  </app-modal>
</template>

<script setup>
import AppModal from "@/components/AppModal.vue";
import { useModalStore } from "@/stores/modal.js";
import EditForm from "@/components/forms/EditForm.vue";
import DeleteForm from "@/components/forms/DeleteForm.vue";

const modal = useModalStore();

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
.v-btn + .v-btn {
  margin-inline-start: 7px;
}
</style>
