// Question 1 given two values, return the first one if it is falsy, otherwise return the second one
// function falsyOrTruthy(elem1,elem2){
//     return (!elem1) ? elem1 : elem2;
// }
// console.log(falsyOrTruthy(null,5))

// Question2 given an array, return its length
// function arrLength(arr){
//     return arr.length;
// }
// console.log(arrLength([1,2,3,4]));

// // Question 3 given an array, return the last element
// function arrLastElement (arr){
//     return arr[arr.length - 1];
// }
// console.log(arrLastElement([0,3,6,4,3]))

// Question 4 given an array, return the sum of every element
// function arrSum(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log(arrSum([2,2,2]))

// Question 5 gicen a number, add up all the numbers from one to the numbver that is given
// function progressiveSum(num){
//     let sum = 0;
//     for (let i = 1; i <= num; i++)
//     {
//         sum = sum + i;
//     }
//     return sum;
// }
// console.log(progressiveSum(10))

// Question 6 given a number in seconds, return this number in mm:ss format
// function calcTime(seconds){
//     let timerMinutes = Math.floor(seconds /60);
//     let timerSeconds = seconds % 60;

//     if (timerMinutes.toString().length === 1){
//         timerMinutes = "0" + timerMinutes
//     }

//     return timerMinutes + ":" + timerSeconds;
// }
// console.log(calcTime(70))

// Question 7 given an array of numbers, return the largest number of that array
// function getMax(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
//     console.log(getMax([1, 5, -10, 12]))

// Question 8 given a string, return the reversed string
// function reversedString(str){
//     let reverseString = "";
//     for (let i = 0; i < str.length; i++){
//         reverseString = str[i] + reverseString;
//     }
//     return reverseString
// }
// console.log(reversedString("abc"))

//Question 9 given an array of elements, return the same length array filled with 0's
// function covertToZeros(arr){
//     for ( let i = 0; i < arr.length; i++){
//         arr[i] = 0;
//     }
//     return arr;
// }
// console.log(covertToZeros([1,2,3,4]))

// Question 10 given an array of fruits, if it is an apple remove it from the array
// function removeApples(arr){
//     let noApples = []
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] !== "Apple"){
//             noApples.push(arr[i]);
//         }
//     }
//     return noApples;
// }
// console.log(removeApples(["Banana", "Orange", "Apple"]));

// Question 11 given an array of values, filter out all the falsy values and only return the truthy values
// function filterOutFalsy(arr){
//     return arr.filter(elem => !!elem === true)
// }
// console.log(filterOutFalsy(["", NaN, 500, null, false, 0]));

// Question 12 given an array of truthy and falsy values, return the same array of elements into its boolean value
// function convertToBoolean(arr){
//     return arr.map(elem => !!elem);
// }
// console.log(convertToBoolean(["", NaN, 500, null, false, 0]));