/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const sortedScore= score.toSorted((a, b) => b - a);
    const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];

    const answer = [];
    for (let i = 0; i < score.length; i++) {
        const position = sortedScore.indexOf(score[i]) + 1;
        
        if (position <= 3) {
            answer.push(medals[position - 1]);
            continue;
        } else{
            answer.push(position.toString());
        }
    }
    return answer;
}

// Example usage
const score = [5, 4, 10, 8, 2, 1];
console.log(findRelativeRanks(score));