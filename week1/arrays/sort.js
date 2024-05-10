const fruits = ["Banana", "Orange", "Apple", "Mango"];

// sorts an array alphabetically
console.log(fruits.sort());

// reverses the elements of an array    
console.log(fruits.reverse());

// a safe way to sort an array without altering the original array  
const vegetables = ["Potato", "Tomato", "Cabbage"]; 

console.log(vegetables);
const sorted = vegetables.toSorted();
console.log(sorted);
console.log(vegetables);

// a safe way to reverse an array without altering the original array   
const reversed = vegetables.toReversed();   
console.log(reversed);
console.log(vegetables);

// Numeric sort
const points = [40, 100, 1, 5, 25, 10];

// sort() works for string and incorrectly for numbers
const point = (a, b) => a - b;
newPoints = points.sort(point);
console.log(newPoints);

// sorting array of numbers in random order
const numbers = [136, 354, 100, 45, 2, 65];

console.log(numbers);
let random_sort = () => { return 0.5 - Math.random() };
console.log(numbers.sort(random_sort));

function fisher_sort(arr)  {
    for (let i = (arr.length - 1); i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = arr[i];
        arr[i] = arr[j];
        arr[j] = k
    }
}
console.log(fisher_sort(numbers));

// min and max of array
min_val = Math.min(...numbers);
max_val = Math.max(...numbers); 

console.log(min_val);
console.log(max_val);   


