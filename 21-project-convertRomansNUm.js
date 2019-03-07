/* 21. *Roman Numeral Converter* Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case. */
function convertToRoman (num) {
  var ordinals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  var romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  var finalNumber = []
  let renum = num
  while (finalNumber.reduce((curr, value) => curr + value, 0) < num) {
    const idx = ordinals.findIndex(element => renum - element >= 0)
    finalNumber.push(ordinals[idx])
    renum -= ordinals[idx]
  }
  return finalNumber.map(element => romans[ordinals.indexOf(element)]).join('')
}

convertToRoman(36)
