const bal = [300, 200, 100];

console.log(bal);
console.log(bal[0]);
console.log(bal.length);
console.log(bal.sort());
console.log(bal[bal.length - 1]);

console.log('----------------------------');

const fruits = new Array('pear','orange', 'banana');

console.log(fruits);

fruits.push('apple');

console.log(fruits);
console.log(fruits[2]);
console.log(typeof(fruits));
console.log(fruits.length);
console.log(fruits.sort());

console.log('----------------------------');

num = new Array(4);
pen = [1];

console.log(num);
console.log(pen);
console.log(Array.isArray(pen));
console.log(Array.isArray(num));
console.log(pen instanceof Array);