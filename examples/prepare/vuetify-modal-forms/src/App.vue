<template>
  <header>
    <h1>
      Пример для v-dlg
    </h1>
  </header>

  <main>
    Скоро будет ...
    <br/>
    <v-btn @click="showModal">Show</v-btn>
    <v-btn @click="handleDelete">Delete</v-btn>
  </main>
  <modal v-model="modal.visible" :title="modal.title">
    <component :is="modal.form"></component>
  </modal>
</template>

<script setup>
import Modal from "@/components/Modal.vue";
import { useModalStore } from "@/stores/modal.js";
import EditForm from "@/components/forms/EditForm.vue";
import DeleteForm from "@/components/forms/DeleteForm.vue";

const modal = useModalStore();

function showModal() {
  modal.open('Test Modal', EditForm)
}

function handleDelete() {
  modal.open('Delete', DeleteForm)
}
</script>
