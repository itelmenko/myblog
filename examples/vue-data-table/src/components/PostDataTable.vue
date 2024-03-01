<template>
  <div>
<!--    options.page = {{ options.page }}; totalItems = {{totalItems}}; loading = {{loading}}; serverItems.length: {{serverItems.length}};
    pageCount = {{ pageCount }}-->

    <table>
      <thead>
        <tr :class="{ 'data-loading': loading }">
          <th v-for="field in headers" :key="field">
            {{ field.title }}
          </th>
        </tr>
      </thead>
      <tbody>
      <tr v-if="!loading">
        <td :colspan="headers.length">
          <div class="progress-bar">
            <div class="progress-bar-value"></div>
          </div>
        </td>
      </tr>
      <tr v-for="item in serverItems" :key="item" :class="{ 'data-loading': loading }">
        <td v-for="field in headers" :key="field.key">{{ item[field.key] }}</td>
      </tr>
      </tbody>
      <tfoot>
        <tr>
          <td :colspan="headers.length">
            <button
                :disabled="options.page === 1"
                @click="prevPage">
              Previous
            </button>
            Page # {{options.page}} from {{pageCount}}
            <button
                :disabled="options.page >= pageCount"
                @click="nextPage">
              Next
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
import { getPosts } from '@/api/posts.js'
import {computed, onMounted, reactive, ref} from 'vue'

const serverItems = ref([])
const loading = ref(true)
const totalItems = ref(0)

const headers = [
  {
    title: 'ID',
    align: 'end',
    sortable: true,
    key: 'id',
    width: '7em'
  },
  {
    title: 'Title',
    align: 'start',
    sortable: true,
    key: 'title',
    width: '100%'
  },
]

const defaults = {
  page: 1,
  itemsPerPage: 10,
  sortBy: 'id'
}

const options = reactive(defaults)

const pageCount = computed(() => Math.ceil(totalItems.value/options.itemsPerPage));

function nextPage(){
  options.page ++;
  loadData()
}

function prevPage() {
  options.page --;
  loadData()
}

function covertOptionsToQueryParams(opts) {
  const result = {
    _limit: opts.itemsPerPage,
    _page: opts.page
  }

  if (opts.sortBy.length) {
    result._sort = opts.sortBy[0].key
    result._order = opts.sortBy[0].order ? opts.sortBy[0].order : 'asc'
  }

  return result
}

async function loadData() {
  loading.value = true
  const params = covertOptionsToQueryParams(options)

  const data = await getPosts(params)
  serverItems.value = data.data
  totalItems.value = data.headers['x-total-count']
  loading.value = false
}

onMounted(loadData)
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}
.data-loading {
  opacity: 0.5;
}
table td, table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tbody tr:nth-child(even){background-color: #f2f2f2;}

table tbody tr:hover {background-color: #ddd;}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  /*background-color: #0db6d8;
  color: white;*/
}
</style>
