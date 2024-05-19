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
  <modal v-model="modal.visible" :title="modal.title">
    <component :is="modal.form" v-bind="modal.props"></component>
  </modal>
</template>

<script setup>
import Modal from "@/components/Modal.vue";
import { useModalStore } from "@/stores/modal.js";
import EditForm from "@/components/forms/EditForm.vue";
import DeleteForm from "@/components/forms/DeleteForm.vue";

const modal = useModalStore();

function showModal() {
  modal.open('Редактировать запись', EditForm, { id: 'JH219zA', name: 'Большой каньон' })
}

function handleDelete() {
  modal.open('Удалить запись', DeleteForm, { id: 'oAuu378' })
}
</script>

<style>
.v-btn + .v-btn {
  margin-inline-start: 7px;
}
</style>
