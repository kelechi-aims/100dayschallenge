// returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found
let text = "Please locate where 'locate' occurs!";

let pos = text.indexOf("locate");
console.log(pos);

// returns the index of the last occurrence of a specified value in a string.
let index = text.lastIndexOf('locate');
console.log(index);

let index2 = text.lastIndexOf('locate', 20);    
console.log(index2);

// searches a string for a specified value and returns the position of the match. 
let search = text.search("locate");
console.log(search);

// using regular expression
let search2 = text.search(/locate/);
console.log(search2);

let search3 = text.search(/locate/i);
console.log(search3);

// returns an array of all matches in a string  
let matches = text.match(/locate/g);
console.log(matches);

let match2 = text.match(/lo/g);
console.log(match2);

// returns an iterator of all matches in a string   
let text2 = "I love cats. Cats are very easy to love. Cats are very popular."

let matchall = text2.matchAll(/Cats/gi);
console.log(matchall);
console.log(Array.from(matchall));

// returns true if a string contains a specified value  
let include = text.includes("locate");
console.log(include);

let include2 = text.includes("locate", 20); 
console.log(include2);

// returns true if a string begins with a specified value  
let start = text.startsWith("Please");
console.log(start);
let start2 = text.startsWith("please", 8);
console.log(start2);

// returns true if a string ends with a specified value
let end = text.endsWith('please');
console.log(end);
