<template>
  <my-data-table
      :headers="headers"
      :api-data-request="apiDataRequest"
      :items-per-page="25"
      :sort-by="[ { key: 'id', order: 'asc' } ]"
  >
    <template v-slot:[`item.actions`]="{ item }">
      <v-btn @click="handleDelete(item)">REMOVE</v-btn>
    </template>
  </my-data-table>
</template>

<script setup>
import { getPosts } from "@/api/posts.js"
import MyDataTable from "@/components/MyDataTable.vue"

const headers = [
  {
    title: 'ID',
    align: 'end',
    sortable: true,
    key: 'id',
    width: '7em'
  }, {
    title: 'Title',
    align: 'start',
    sortable: true,
    key: 'title',
    width: '100%'
  }, {
    title: '',
    align: 'center',
    sortable: false,
    key: 'actions',
  },
]

async function apiDataRequest(optionsData) {
  return getPosts(optionsData)
}

function handleDelete(item) {
  alert(`REMOVE ${item.id}`)
}
</script>
