const fruits = ['banana', 'oranges', 'pineapple'];

console.log(fruits);
// array's length
console.log(fruits.length);

// converting array to string
fruits_string = fruits.toString();
console.log(fruits_string);

// getting array's elements at a particular index
console.log(fruits.at(2));
console.log(fruits[2]);

// accessing elements from end of array
console.log(fruits.at(-1));

// converting array to string with separator
joining = fruits.join(':');
console.log(joining);

// removing last element from array
fru = fruits.pop();
console.log(fru);
console.log(fruits);

// Adding element to the end of array
fruits.push('pear');
console.log(fruits);

// removing first element from array
let fruit = fruits.shift();
console.log(fruit);
console.log(fruits);

// Adding element to the beginning of array
fruits.unshift('strawberry');
console.log(fruits);

// changing value of an element
fruits[1] = 'kiwi';
console.log(fruits);

// deleting element from array, this leaves a hole in the array
delete fruits[1];
console.log(fruits);

// replacing element in array
fruits[1] = 'kiwi';
console.log(fruits);

// merging arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9]
let arr4 = arr1.concat(arr2, arr3);
console.log(arr4);
console.log(arr4.concat(87));

// copying elements from one array to another
let fruits_copywithin = fruits.copyWithin(1, 2);
console.log(fruits_copywithin);
console.log(fruits);

console.log(arr1.copyWithin(1, 2));
console.log(arr2.copyWithin(1, 0, 1));

// converting multi-dimensional array into a one-dimensional array
const myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(myArray);
const myArray1 = myArray.flat();
console.log(myArray1);
console.log(myArray);

// adding elements to array at a specific position
console.log(fruits);
new_fruits = fruits.splice(1, 0, 'mango', 'apple', 'guava');
console.log(new_fruits);
console.log(fruits);

newer_fruits = fruits.splice(1, 1, 'mango', 'guava');
console.log(newer_fruits);
console.log(fruits);

console.log(fruits.splice(6, 1));

// removing elements from array without altering the original array
console.log(fruits);
const update_fruits = fruits.toSpliced(1, 3);
console.log(update_fruits);
console.log(fruits);

console.log("-----------------------");
// deleting with slice
console.log(fruits);
const veg = fruits.slice(4, -1);
console.log(veg);
console.log(fruits);