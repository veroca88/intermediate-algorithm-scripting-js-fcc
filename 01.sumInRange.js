/* 1. *Sum All Numbers in a Range* We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45. */
function sumAll (arr) {
  let sumInRange = 0
  if (arr[0] < arr[1]) {
    for (let i = arr[0]; i <= arr[1]; i++) {
      sumInRange += i
    }
    console.log(sumInRange)
  }
  if (arr[0] > arr[1]) {
    for (let j = arr[1]; j <= arr[0]; j++) {
      sumInRange += j
    }
    console.log(sumInRange)
  }
}
sumAll([1, 4])
sumAll([4, 1])
sumAll([5, 10])
sumAll([10, 5])
