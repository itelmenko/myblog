<template>
  <v-data-table-server
      :headers="headers"
      v-model:page="options.page"
      v-model:items-per-page="options.itemsPerPage"
      v-model:sort-by="options.sortBy"
      :items-length="totalItems"
      :items="serverItems"
      :loading="loading"
      item-value="id"
      @update:options="handleUpdateOptions"
  ></v-data-table-server>
</template>

<script setup>
import {ref, reactive} from 'vue'
import { getPosts } from "@/api/posts.js";

const defaults = {
  page: 1,
  itemsPerPage: 10,
  sortBy: [ { key: 'id', order: 'asc' } ],
}

const options = reactive(defaults)

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
  },
]

const serverItems = ref([])
const loading = ref(true)
const totalItems =  ref(0)

function covertOptionsToQueryParams(opts) {
  const result = {
    _limit: opts.itemsPerPage,
    _page: opts.page,
  }

  if (opts.sortBy.length) {
    result._sort = opts.sortBy[0].key
    result._order = opts.sortBy[0].order ? opts.sortBy[0].order : 'asc'
  }

  return result
}

async function handleUpdateOptions () {
  loading.value = true
  const data = await getPosts(covertOptionsToQueryParams(options))
  serverItems.value = data.data
  totalItems.value = data.headers['x-total-count']
  loading.value = false
}
</script>
