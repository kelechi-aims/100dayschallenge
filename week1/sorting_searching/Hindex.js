/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => b - a);
    let n = citations.length;
    for (let i = 0; i < n; i++) {
        let h = n - i;
        if (citations[i] >= h) {
            return h;
        }
    }
    return 0
 };

 // Example usage
 const citations = [100];
 console.log(hIndex(citations));