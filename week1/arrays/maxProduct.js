/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let temp = maxProduct;
        maxProduct = Math.max(Math.max(maxProduct * nums[i], minProduct * nums[i]), nums[i]);
        minProduct = Math.min(Math.min(temp * nums[i], minProduct * nums[i]), nums[i]);
        result = Math.max(result, maxProduct);
    }

    return result;
};
