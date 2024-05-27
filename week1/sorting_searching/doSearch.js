/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var doSearch = function(arr, target) {
    var min = 0;
    var max = arr.length - 1;
    var guess;
    var count = 0;
    while (min <= max) {
        count++;
        guess = Math.floor((min + max) / 2);
        if (arr[guess] === target) {
            console.log(count);
            return guess;
        } else if (arr[guess] < target) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
        
    }
    return -1;
}

// Example usage
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
console.log(doSearch(primes, 73));