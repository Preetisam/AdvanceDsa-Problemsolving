// Map, filter, reduce : Higher order function;
// HOF => hof are those function which can take fun as an argument

// Map

let arr = [ 2, 3, 4, 5, 6, 7, 8, 9 ];

// if we want to create another arr with double of its items
// let answer = [];
// for (let i = 0; i < arr.length; i++){
//     answer = arr[i] * 2;
// }
// console.log(answer);

// same as above from Map fun
let ans = arr.map((elem) => elem * 2);

// Filter
let array = [ 2, 3, 4, 5, 6, 7, 8, 9 ];
// we want even or odd to filter, just for example

// with for loop
// for (let i = 0; i < array.length; i++){
//     if (array[i] % 2 === 0) {
//        let  filerArr = array[i];
//     }
// }
// console.log(filerArr)

// with filter function
let filteredArray = array.filter((el) => el % 2 != 0);
console.log(filteredArray);

// Reduce
// sum all the elements in the array
let toSum = [ 2, 3, 4, 5, 6, 7, 8, 9 ];

let sumOfElements = toSum.reduce(el, (prev) => el + prev);
console.log(sumOfElements);
