<template>
  <data-table :headers="headers" ref="dataTable" :load-data-function="getPosts">
    <!-- Используем слот для колонки alerts. Имя - item.actions -->
    <template v-slot:[`item.actions`]="{ row }">
      <div class="icons-group">
        <!-- В обработчик кнопки передаем данные row из внутреннего компонента -->
        <button class="icon-btn info" @click="handleEdit(row)">
          <svg-icon type="mdi" :path="editIcon"></svg-icon>
        </button>

        <button class="icon-btn alert" @click="handleDelete(row)">
          <svg-icon type="mdi" :path="deleteIcon"></svg-icon>
        </button>
      </div>
    </template>
  </data-table>
</template>

<script setup>
import { ref } from 'vue'
import { getPosts } from '@/api/posts.js'
import DataTable from '@/components/DataTable.vue'

import SvgIcon from '@jamescoyle/vue-icon'
import { mdiTextBoxEdit as editIcon, mdiTextBoxRemove as deleteIcon } from '@mdi/js'

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
  },
  // Столбец для кнопок
  {
    title: 'Actions',
    align: 'center',
    sortable: false,
    key: 'actions'
  }
]

const dataTable = ref()

function handleEdit(post) {
  /**
   * В обработчиках мы можем использовать данные всей строки таблицы,
   * так как из внутреннего (дочернего) компонента передается вся строка
   */
  if (confirm(`Edit the post #${post.id}?`)) {
    alert('TODO: Display edit form')
  }
}

function handleDelete(post) {
  if (confirm(`Delete post #${post.id}?`)) {
    alert('TODO: Call server API')
    dataTable.value.loadData()
  }
}
</script>
