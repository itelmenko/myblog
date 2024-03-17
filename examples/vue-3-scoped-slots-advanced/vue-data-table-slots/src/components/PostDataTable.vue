<template>
  <data-table :headers="headers" :load-data-function="getPosts"></data-table>
</template>

<script setup>
import { getPosts } from '@/api/posts.js'
import DataTable from '@/components/DataTable.vue'

/**
 * Настройки колонок
 */
const headers = [
  {
    title: 'ID',
    align: 'end',
    sortable: true,
    key: 'id',
    width: '5em'
  },
  {
    title: 'Title',
    align: 'start',
    sortable: true,
    key: 'title',
    width: '100%'
  }
]
</script>
