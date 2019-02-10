> This exercices are part of FreeCodeCamp, here is my way to solve it, if you have any question please contact me! English or Spanish

**"Don't practice until you get right. Practice until you can't get it wrong." Unknown**

1. *Sum All Numbers in a Range* We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.

2. *Diff Two Arrays* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Note
You can return the array with its elements in any order. 

3. *Seek and Destroy* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
Note
You have to use the arguments object.

4. *Wherefore art thou* Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array. 
For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

5. *Spinal Tap Case* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

6. *Pig Latin* Translate the provided string to pig latin. Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay". If a word begins with a vowel you just add "way" to the end. Input strings are guaranteed to be English words in all lowercase.

7. *Search and Replace* Perform a search and replace on the sentence using the arguments provided and return the new sentence. First argument is the sentence to perform the search and replace on. Second argument is the word that you will be replacing (before). Third argument is what you will be replacing the second argument with (after).
Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

8. *DNA Pairing* The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array. Base pairs are a pair of AT and CG. Match the missing element to the provided character. Return the provided character as the first element in each array. For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]] The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

9. *Missing letters* Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.

10. *Sorted Union* Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays. In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array. The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

11. *Convert HTML Entities* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.



