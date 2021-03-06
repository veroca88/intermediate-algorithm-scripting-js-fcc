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

12. *Sum All Odd Fibonacci Numbers* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num. The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8. For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

13. *Sum All Primes* Sum all the prime numbers up to and including the provided number. A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two. The provided number may not be a prime.

14. *Smallest Common Multiple* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters. The range will be an array of two numbers that will not necessarily be in numerical order. For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

15. *Drop it* Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it. Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

16. *Steamroller* Flatten a nested array. You must account for varying levels of nesting.

17. *Steamroller* Flatten a nested array. You must account for varying levels of nesting.

18. *BinaryTranslation* Return an English translated sentence of the passed binary string.

19. *Everything Be True* Check if the predicate (second argument) is truthy on all elements of a collection (first argument). In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

**JavaScript Algorithms and Data Structures Projects**

20. *Palindrome Checker* Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

21. *Roman Numeral Converter* Convert the given number into a roman numeral. 
All roman numerals answers should be provided in upper-case.

22. *Caesars Cipher* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount. A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on. Write a function which takes a ROT13 encoded string as input and returns a decoded string. All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

23. *Telephone Number Validator* Return true if the passed string looks like a valid US phone number. The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants): 
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.







