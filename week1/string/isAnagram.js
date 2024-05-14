/**
 * @param {string} s 
 * @param {string} t 
 * @return {boolean} 
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const charCount = {};
    for (const char of s) {
        charCount[char] = charCount[char] + 1 || 1;
    }
    for (const char of t) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }
    for (const char in charCount) {
        if (charCount[char] !== 0) {
            return false;
        }
    }
    return true;



}