/**
 * @param {string} s 
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let str = '';
    for (let i of s) {
        const index = str.indexOf(s[i]);
        if (index !== -1) {
            str = str.slice(index + 1);
        }
        str += s[i];
        max = Math.max(max, str.length);
    }
    return max;
}


const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));   