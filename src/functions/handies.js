export const isObject = (obj) => obj instanceof Object && obj.constructor === Object

export const isInt = (value) => {
  if (Number.isNaN(value)) {
    return false
  }
  const x = parseFloat(value)
  // eslint-disable-next-line no-bitwise
  return (x | 0) === x
}
