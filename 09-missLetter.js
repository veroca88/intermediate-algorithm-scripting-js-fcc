/* 9. *Missing letters* Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined. */
function fearNotLetter (str) {
  const alphabet = ('abcdefghijklmnopqrstuvwxyz')
  let start = alphabet.indexOf(str[0])
  for (let i = start; i < start + str.length; i++) {
    if (!str.includes(alphabet[i])) {
      return alphabet[i]
    }
  }
  return undefined
}
