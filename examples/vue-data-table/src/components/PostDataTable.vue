<template>
  <table class="data-table">
    <thead>
      <tr :class="{ 'data-table__row_loading': loading }">
        <th
          v-for="field in headers"
          :key="field.key"
          :style="{ width: field.width, minWidth: field.width }"
          :class="{ 'data-table__th-sortable': field.sortable }"
          @click="handleToggleSortAction(field)"
        >
          {{ field.title }}
          <template v-if="options.sortBy === field.key">
            <svg-icon
              type="mdi"
              class="icon"
              v-if="options.sortDir === 'asc'"
              :path="ascSortIcon"
            ></svg-icon>
            <svg-icon
              type="mdi"
              class="icon"
              v-if="options.sortDir === 'desc'"
              :path="descSortIcon"
            ></svg-icon>
          </template>
        </th>
      </tr>
      <tr v-if="loading" class="data-datatable__progress">
        <td :colspan="headers.length">
          <div class="progress-bar">
            <div class="progress-bar__value"></div>
          </div>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in pageItems" :key="item" :class="{ 'data-table__row_loading': loading }">
        <td v-for="field in headers" :key="field.key" :style="{ textAlign: field.align }">
          {{ item[field.key] }}
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td :colspan="headers.length">
          <div class="data-table__footer-content">
            <button
              class="icon-btn"
              :disabled="options.page === 1"
              @click="handlePreviousPageAction"
            >
              <svg-icon type="mdi" :path="previousIcon"></svg-icon>
            </button>
            page #{{ options.page }} from {{ pagesCount }}
            <button
              class="icon-btn"
              :disabled="options.page >= pagesCount"
              @click="handleNextPageAction"
            >
              <svg-icon type="mdi" :path="nextIcon"></svg-icon>
            </button>
          </div>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script setup>
import { getPosts } from '@/api/posts.js'
import { computed, onMounted, reactive, ref } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon'
import {
  mdiArrowLeft as previousIcon,
  mdiArrowRight as nextIcon,
  mdiArrowDown as ascSortIcon,
  mdiArrowUp as descSortIcon
} from '@mdi/js'
import { covertDataTableOptionsToQueryParams, convertApiResponceToDataTableOptions } from '@/api/helpers.js'

const pageItems = ref([])
const loading = ref(true)
const totalItemsCount = ref(0)

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

const options = reactive({
  page: 1,
  itemsPerPage: 10,
  sortBy: 'id',
  sortDir: 'asc'
})

const pagesCount = computed(() => Math.ceil(totalItemsCount.value / options.itemsPerPage))

function handleNextPageAction() {
  options.page++
  loadData()
}

function handlePreviousPageAction() {
  options.page--
  loadData()
}

function handleToggleSortAction(filed) {
  if (!filed.sortable) {
    return
  }

  const filedName = filed.key
  if (options.sortBy === filedName) {
    if (options.sortDir === 'asc') {
      options.sortDir = 'desc'
    } else {
      options.sortBy = null
    }
  } else {
    options.sortBy = filedName
    options.sortDir = 'asc'
  }

  loadData()
}

async function loadData() {
  loading.value = true

  const params = covertDataTableOptionsToQueryParams(options)
  const data = convertApiResponceToDataTableOptions(await getPosts(params))
  pageItems.value = data.items
  totalItemsCount.value = data.total

  loading.value = false
}

onMounted(loadData)
</script>

<style>
.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table td,
.data-table th {
  border: 1px solid #ddd;
  padding: 8px;
}

.data-table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

.data-table tbody tr:hover {
  background-color: #ddd;
}

.data-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
}

.data-table__row_loading {
  opacity: 0.5;
}

.data-datatable__progress td {
  padding: 0;
  position: relative;
  border: none;
}

.data-datatable__progress .progress-bar {
  position: absolute;
  left: 0;
  bottom: 0;
}

.data-table__footer-content {
  display: flex;
  align-items: center;
  justify-content: right;
}

.data-table__th-sortable {
  cursor: pointer;
}

.data-table__th-sortable .icon {
  vertical-align: middle;
}
</style>
