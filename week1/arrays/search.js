const fruits = ['Apple', 'Orange', 'Apple', 'Mango'];

// searches an array for a value and returns the index of the first occurrence.
let position = fruits.indexOf('Apple') + 1;

console.log(position);

let position2 = fruits.indexOf('Apple', 1);

console.log(position2);

console.log(fruits.lastIndexOf('Apple'));

// checks if an element is present in an array.
console.log(fruits.includes('Apple'));

// returns the value of the first array element that passes a test function
function fruit(fruit) {
    return fruit === 'Apple';
}   
console.log(fruits.find(fruit));

const numbers = [4, 9, 16, 25, 29];

const myFunction = (value, index, array) => {
    return value > 18;
}
let first = numbers.find(myFunction);

console.log(first);

// returns the index of the first array element that passes a test function
let first_index = numbers.findIndex(myFunction);

console.log(first_index);

// returns the value of the last array element that passes a test function
let last = numbers.findLast(myFunction);
console.log(last);

// returns the index of the last array element that passes a test function
let last_index = numbers.findLastIndex(myFunction);
console.log(last_index);