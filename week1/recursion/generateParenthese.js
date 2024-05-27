// Question: Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = (n) => {
    const answer = [];

    const generate = (str, open, close) => {
        if (str.length === n * 2) {
            answer.push(str);
            return;
        }

        if (open < n) {
            generate(str + '(', open + 1, close);
        }

        if (close < open) {
            generate(str + ')', open, close + 1);
        }
    };
    generate('', 0, 0);
    return answer;
}
// Example Usage
const n = 3;
console.log(generateParenthesis(n));