export const sortArr = (arr, name) => {
  const result = arr.sort((a, b) => {

    if (a[name] > b[name]) {
      return 1
    }

    if (a[name] < b[name]) {
      return -1
    }
    return 0
  })
  return result
}