// Using recursion: Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

/**
 * @param {number} number
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(number, k) {
    const result = [];

    const helper = (start, combination) => {
        if (combination.length === k) {
            result.push(combination);
            return;
        }

        for (let i = start; i <= number; i++) {
            helper(i + 1, combination.concat(i));
        }
    };
    
    helper(1, []);

    return result;
}

// Example usage:
const result = combine(4, 2);
console.log(result);