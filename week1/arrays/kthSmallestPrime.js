/**
 * @param {number[]} arr 
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    const n = arr.length;
    const heap = [];

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            heap.push([arr[i] / arr[j], i, j]);
        }
    }
    heap.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < k - 1; i++) {
        heap.shift();
    }
    return [arr[heap[0][1]], arr[heap[0][2]]];
    //return [arr[heap[k - 1][1]], arr[heap[k - 1][2]]];

}

// Eample usage
const arr = [1,2,3,5];
const k = 3;
console.log(kthSmallestPrimeFraction(arr, k)); // Output: [2, 5]