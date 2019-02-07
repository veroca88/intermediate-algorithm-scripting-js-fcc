/* 10. *Sorted Union* Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays. In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array. The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.  */
function uniteUnique (arr) {
  const args = Array.prototype.slice.call(arguments)
  let result = []
  args.reduce(function (arr1, arr2) {
    return arr1.concat(arr2)
  }).forEach(function (item) {
    if (result.indexOf(item) < 0) {
      result.push(item)
    }
  })
  return result
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
