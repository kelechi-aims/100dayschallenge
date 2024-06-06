// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) return [];
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    let current = sortedIntervals[0];
    for (let i = 1; i < sortedIntervals.length; i++) {
        if (current[1] >= sortedIntervals[i][0]) {
            current[1] = Math.max(current[1], sortedIntervals[i][1]);
        } else {
            result.push(current);
            current = sortedIntervals[i];
        } 
        
    }
    return result.concat([current])

}
module.exports = merge;

// Example 1:
//const intervals = [[1,3],[2,6],[8,10],[15,18]];
//console.log(merge(intervals));
// Example 2:
//const intervals2 = [[1,4],[4,5]];
//console.log(merge(intervals2));

//const interval3 = [[1, 2]];
//console.log(merge(interval3));