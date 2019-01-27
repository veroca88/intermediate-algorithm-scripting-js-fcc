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