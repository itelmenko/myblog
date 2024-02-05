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
import {ref, reactive, toRefs} from 'vue'

const props = defineProps({
  headers: { type: Array, required: true },
  apiDataRequest: { type: Function, required: true },
  sortBy: { type: Array, default: () => [] },
  itemsPerPage: { type: Number, default: 10 }
})

const defaults = {
  page: 1,
  itemsPerPage: props.itemsPerPage,
  sortBy: props.sortBy,
}

const options = reactive(defaults)

const { headers } = toRefs(props);

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
  const data = await  props.apiDataRequest(covertOptionsToQueryParams(options))
  serverItems.value = data.data
  totalItems.value = data.headers['x-total-count']
  loading.value = false
}
</script>
