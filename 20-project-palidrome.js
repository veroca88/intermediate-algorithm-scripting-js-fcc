/* 20. *Palindrome Checker* Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. */
function palindrome (str) {
  var noSensitive = str.toLowerCase().replace(/\W|\_|\*/gi, '')
  var reverseNoSensitive = noSensitive.split('').reverse().join('')
  if (reverseNoSensitive === noSensitive) {
    return true
  } else {
    return false
  }
}
palindrome('eye')
