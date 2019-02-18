/* 14. *Smallest Common Multiple* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters. The range will be an array of two numbers that will not necessarily be in numerical order. For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */
function smallestCommons (arr) {
  var sortedArr = arr.sort(function (a, b) {
    return a - b
  })
  var newArr = []

  for (var i = sortedArr[0]; i <= sortedArr[arr.length - 1]; i++) {
    newArr.push(i)
  }
  var condition = true
  var smallestMultiple = 0
  while (condition) {
    smallestMultiple++
    for (var j = sortedArr[0]; j <= sortedArr[arr.length - 1]; j++) {
      if (smallestMultiple % j !== 0) {
        break
      } else if (j === sortedArr[arr.length - 1]) {
        condition = false
      }
    }
  }
  return smallestMultiple
}

console.log(smallestCommons([1, 13]))
console.log(smallestCommons([23, 18]))
console.log(smallestCommons([1, 5]))
console.log(smallestCommons([5, 1]))
