/**
 * @param {string} s 
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const t = s.toLowerCase().replace(/[^0-9^a-z^A-Z]/gi, '');
    const m = t.split("").reverse().join("");
    if (t === m) {
        return true;
    }
    return false;
}

// Example usage
const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));

const t = "race a car";
console.log(isPalindrome(t));