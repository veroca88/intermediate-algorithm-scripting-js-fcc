/* 6. *Pig Latin* Translate the provided string to pig latin. Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay". If a word begins with a vowel you just add "way" to the end. Input strings are guaranteed to be English words in all lowercase. */
function translatePigLatin (str) {
  var vowels = (/[aeiou]/ig)
  var newWord = ''
  var vowelIdx = str.indexOf(str.match(vowels)[0])
  if (str[0].match(vowels)) {
    newWord = str + 'way'
  } else {
    newWord = str.substring(vowelIdx) + str.substring(0, vowelIdx) + 'ay'
  }
  console.log(newWord)
}

translatePigLatin('california')
  translatePigLatin('eight')
translatePigLatin('algorithm')
translatePigLatin('paragraphs')
translatePigLatin('strength')
