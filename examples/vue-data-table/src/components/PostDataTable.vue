<template>
  <div>
    options.page = {{ options.page }}; totalItems = {{totalItems}}; loading = {{loading}}; serverItems.length: {{serverItems.length}};
    pageCount = {{ pageCount }}

    <table>
      <thead>
        <tr v-if="!loading">
          <th v-for="field in headers" :key="field">
            {{ field.title }}
          </th>
        </tr>
      </thead>
      <tbody>
      <template v-if="!loading">
        <tr v-for="item in serverItems" :key="item">
          <td v-for="field in headers" :key="field.key">{{ item[field.key] }}</td>
        </tr>
      </template>
      <tr v-if="loading">
        <td>
          <div class="progress-bar">
            <div class="progress-bar-value"></div>
          </div>
        </td>
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
  {
    title: '',
    align: 'center',
    sortable: false,
    key: 'actions'
  }
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
}
</style>
