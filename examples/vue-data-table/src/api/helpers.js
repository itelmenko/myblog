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
