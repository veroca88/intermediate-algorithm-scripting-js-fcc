/* 14. *Smallest Common Multiple* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters. The range will be an array of two numbers that will not necessarily be in numerical order. For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */
function smallestCommons (arr) {
  function smallCommonMultiple (n, min, max) {
    for (var i = min; i < max; i++) {
      if (n % i !== 0) {
        return false
      }
    }
    return true
  }

  var max = Math.max(arr[0], arr[1])
  var min = Math.min(arr[0], arr[1])
  var multiple = max
  while (!smallCommonMultiple(multiple, min, max)) {
    multiple += max
  }
  return multiple
}
console.log(smallestCommons([1, 5]))
console.log(smallestCommons([13, 1]))
console.log(smallestCommons([28, 12]))
