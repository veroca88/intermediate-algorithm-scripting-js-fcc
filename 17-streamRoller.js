/* 17. *Steamroller* Flatten a nested array. You must account for varying levels of nesting. */
function steamrollArray (arr) {
  let newArr = []

  flatter(arr)
  function flatter (arr) {
    arr.forEach(function (item) {
      if (!Array.isArray(item)) {
        newArr.push(item)
      } else {
        flatter(item)
      }
    })
  }
  return newArr
}
console.log(steamrollArray([1, [2], [3, [[4]]]]))
