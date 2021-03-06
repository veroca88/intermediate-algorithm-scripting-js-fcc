/* 22. Caesars Cipher One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount. A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on. Write a function which takes a ROT13 encoded string as input and returns a decoded string. All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */
function rot13 (str) { // LBH QVQ VG!
  let newStr = str.split('')
  var test = newStr.map(newStr, function (letter) {
    var x = letter.charCodeAt(0)
    if (x < 65 || x > 90) {
      return String.fromCharCode(x)
    } else if (x < 78) {
      return String.fromCharCode(x + 13)
    } return String.fromCharCode(x - 13)
  }).join('')

  return test
}
rot13('SERR PBQR PNZC')
