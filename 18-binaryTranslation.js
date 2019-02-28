/* 18. *BinaryTranslation* Return an English translated sentence of the passed binary string. */
function binaryAgent (str) {
  let split = str.split(' ')
  let newArr = []
  let result = []

  for (var i = 0; i < split.length; i++) {
    newArr.push(parseInt(split[i], 2))
    result.push(String.fromCharCode(newArr[i]))
  }
  return result.join('')
}

console.log(binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'))
