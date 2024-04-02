// Преобразование данных компонента в параметры API
export function covertDataTableOptionsToQueryParams(opts) {
  const result = {
    _limit: opts.itemsPerPage,
    _page: opts.page
  }

  if (opts.sortBy) {
    result._sort = opts.sortBy
    result._order = opts.sortDir ? opts.sortDir : 'asc'
  }

  return result
}

// Преобразование результата API в данные для компонента
export function convertApiResponceToDataTableOptions(data) {
  return { items: data.data, total: data.headers['x-total-count'] }
}
