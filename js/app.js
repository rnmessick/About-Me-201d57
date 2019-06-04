'use strict';

// Array demonstration
// Array is a collection of values
/*arrays store their values at an index
first item always starts at 0

We access items in an array with  bracket notation
ex. array[2]
access the array at <position || index> 2

elements are always separated by commas
elements can be any valid javascript value but mixing types is considered bad practice

properties on arrays
length

*/
var emptyArray = [];
var quizAnswers = ['a', 'b', 'c', 'd', 'e'];
var arrayOfThings = ['string', {}, ['thing'], console.log, undefined, null, 0, 2, true, false];

console.log('10th thing in array is ' + arrayOfThings[9]);
console.log('9th index of the array is ' + arrayOfThings[9]);

console.log(quizAnswers);
console.log (quizAnswers[2] === 'c');
console.log(quizAnswers);

quizAnswers[2] = 'z'; 

console.log('I have this number of quiz answers: ' + quizAnswers.length);

console.log(quizAnswers);
//console.log(arrayOfThings);
