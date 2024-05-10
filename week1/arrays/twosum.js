/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 function twosum(num, target) {
    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
 }

 // Example usage:
const nums = [3, 2, 4];
const target = 7;
console.log(twosum(nums, target)); 