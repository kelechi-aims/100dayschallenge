// using recursion: Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subset = (nums) => {
    let answer = [];

    const generate = (index, subset) => {
        answer.push(subset);

        for (let i = index; i < nums.length; i++) {
            generate(i + 1, [...subset, nums[i]]);
        }
    }
    generate(0, []);
    return answer
}

// Examples usage
console.log(subset([1,2,3]));