// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi]
// represent the start and the end of the ith interval and intervals is sorted in ascending order
// by starti. You are also given an interval newInterval = [start, end] 
// that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti
// and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Note that you don't need to modify intervals in-place. You can make a new array and return it.

const merge = require('./merge');
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const arr = [...intervals, newInterval];
    arr.sort((a, b) => a[0] - b[0]);
    const result = [];
    let current = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (current[1] >= arr[i][0]) {
            current[1] = Math.max(current[1], arr[i][1]);
        } else {
            result.push(current);
            current = arr[i];
        }
    }
    result.push(current);
    return result;
};

// Example
const intervals = [[1,3],[6,9]]
const newInterval = [2,5]
console.log(insert(intervals, newInterval));
