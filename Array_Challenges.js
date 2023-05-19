// 1. Always Hungry
// Write a function that is given an array and each time the value is "food" it should console log "yummy".
// If "food" was not present in the array console log "I'm hungry" once.

// arr1 = [1,"food",2,"food",3];
// arr2 = [1,2,3,4,5];

// function isHungry(arr){
//     yummyCount = 0;
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i] == "food"){
//             yummyCount++;
//             console.log("yummy");
//         }
//     }
//     if(yummyCount == 0){
//         console.log("I'm hungry");
//     }
// }

// isHungry(arr1);
// isHungry(arr2);

// 2. High Pass Filter
// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.

arr3 = [1,2,3,4,5,6,7,8,9,10];
// arr4 = [3,7,5,9,10,4,2,1,6,8];

// function higherThanX(arr,x){
//     var newArr = [];
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i] > x){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// console.log(higherThanX(arr3,5));
// console.log(higherThanX(arr4,4));

// 3. Better than average
// Given an array of numbers return a count of how many of the numbers are larger than the average.

// var arr5 = [1,2,3,4,5,6,7,8,9,10];

// function countOfLargerThanAvg(arr){
//     var sum = 0;
//     var countOfLarger = 0;
//     for(var i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     var avg = sum / arr.length;
//     console.log(avg);
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > avg){
//         countOfLarger += 1;
//         }
//     }
//     return countOfLarger;
// }

// console.log(countOfLargerThanAvg(arr5));

// 4. Array Reverse
// Write a function that will reverse the values an array and return them.

// function reverseArr(arr){
//     var newArr = [];
//     for(var i = arr.length -1; i >= 0; i--){
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

// console.log(reverseArr(arr3));

// function reverseArr2(arr){
//     for(var i = 0; i < arr.length/2; i++){
//         var temp = arr[i];
//         arr[i] = arr[arr.length-1-i];
//         arr[arr.length-1-i] = temp;
//     }
//     return arr;
// }

// console.log(reverseArr2(arr3));

// 5. Fibonacci Array
// Fibonacci numbers have been studied for years and appear often in nature. Write a function that will return 
// an array of Fibonacci numbers up to a given length n. 
// Fibonacci numbers are calculated by adding the last two values in the sequence together.
//  So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.

// function fibonacci(x){
//     var arr = [0,1];
//     for(var i = 2; i < x; i++){
//         arr.push(arr[i-1]+arr[i-2]);
//     }
//     return(arr);
// }

// console.log(fibonacci(10));