/* 13. *Sum All Primes* Sum all the prime numbers up to and including the provided number. A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two. The provided number may not be a prime. */
function sumPrimes (num) {
  var primeNum = []
  for (var i = 2; i <= num; i++) {
    var count = 0
    for (var j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++
      }
    }
    if (count === 2) {
      primeNum.push(i)
    }
  }
  return primeNum.reduce((acc, curr) => acc + curr)
}
sumPrimes(10)
sumPrimes(977)
