/**
 * @param {number[]} nums
 * @return {boolen}
 */
var containsDuplicate = function(nums) {
    const uniqueSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (uniqueSet.has(nums[i])) {
            return true;
        }
        uniqueSet.add(nums[i]);
    }
    return false;
}
// Example usage
const nums = [1,2,3,1];
const nums1 = [1,2,3,4];
console.log(containsDuplicate(nums));  
console.log(containsDuplicate(nums1));