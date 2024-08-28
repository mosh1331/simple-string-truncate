function truncateString (str, limit = 50, symbol = '...') {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string')
  }
  if (str.length === 0) {
    return ''
  }
  if (limit <= symbol.length) {
    throw new Error(
      'Limit must be greater than the length of the truncation symbol'
    )
  }
  if (str.length <= limit) {
    return str
  }
  return str.slice(0, limit - symbol.length) + symbol
}

module.exports = truncateString
