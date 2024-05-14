let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(text.length);

// Extracting string characters methods

let char = text.charAt(2); // returns the character at a specified index(position) in a string
console.log(char);

let char2 = text.charCodeAt(2); // returns the Unicode of the character at a specified index    
console.log(char2);

let letter = text.at(2); // also returns the character at a specified index, but allows negative indexes onlik
console.log(letter);
console.log(text.at(-2));

let letter2 = text[2];
console.log(letter2);
console.log(text.charAt(-2));

// Extracting string parts method
let text2 = "Apple, Banana, Kiwi";

// Using slice method to extract parts of a string
let part  = text2.slice(7, 13); // extracts a part of a string and returns the extracted part in a new string
console.log(part);
let part2 = text2.slice(7); // omitting the second parameter, it will slice out the rest of the string
console.log(part2);

let part3 = text2.slice(-12); // If a parameter is negative, the position is counted from the end of the string
console.log(part3);

let part4 = text2.slice(-12, -6); // slicing out a portion of a string position -12 to position -6
console.log(part4);

// Using substring method to extract parts of a string
let sub = text2.substring(7, 13); // similar to slice, but start and end values less than 0 are treated as 0
console.log(sub);

// Using substr method to extract parts of a string
let sub2 = text2.substr(7, 6); // similar to substring, but the second parameter specifies the length of the extracted string
console.log(sub2);

let sub3 = text2.substr(7); // omitting the second parameter, will slice out the rest of the string
console.log(sub3);

let sub4 = text2.substr(-4);
console.log(sub4);

// Converting to Upper and Lower Case
let text3 = "Hello World";
let upper = text3.toUpperCase();
console.log(upper);
let lower = text3.toLowerCase();
console.log(lower);

// Joining two or more strings
let str1 = "Hello";
let str2 = "World";
let str3 = str1.concat(" ", str2);
console.log(str3);

// Removing whitespace from a string
let text4 = "   Hello World!   "; // Removing whitespace from sides of a string

let trim = text4.trim();
console.log(trim);

let trim2 = text4.trimStart(); // Removes whitespace from the start of a string 
console.log(trim2);

let trim3 = text4.trimEnd();
console.log(trim3);

// String pads, if not string, first convert to string before padding
let text5 = "5";
let padded = text5.padStart(4, "0"); // pads a string with another string(s)
console.log(padded);
let padded2 = text5.padEnd(4, "0"); // pads a string with another string(s)
console.log(padded2);

// Create copies of a string
let text6 = "Hello World";
let copy = text6.slice();
console.log(copy);

let copy2 = text6.substring();
console.log(copy2);

let copy3 = text6.substr();
console.log(copy3);

let copy4 = text6.split(); // converts it to array
console.log(copy4);

let copy5 = text6.repeat(1); // syntax: string.repeat(count), count parameter is required
console.log(copy5);


// Replacing string content
let text7 = "Please visit Microsoft!";

let newText = text7.replace("Microsoft", "W3Schools"); // replacing the first match and it is case sensitive
console.log(newText);


// use regular expression anf /g flag to replace all matches
let text8 = "Please visit Microsoft and Microsoft!";
let newText2 = text8.replace(/Microsoft/g, "W3Schools");
console.log(newText2);