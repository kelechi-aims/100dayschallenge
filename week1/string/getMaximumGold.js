/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let maximumGold = 0;

    // Helper function to perform depth first search
    const depthFirstSearch = (row, col, currentGold) => {
        // check if the cell is within bounds and contains gold
        if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 0) {
            return;
        }
        const goldInCell = grid[row][col];
        // Mark the cell as visited by setting its value to 0
        grid[row][col] = 0;
        // using recursion to explore all four directions
        depthFirstSearch(row - 1, col, currentGold + goldInCell);
        depthFirstSearch(row + 1, col, currentGold + goldInCell);
        depthFirstSearch(row, col - 1, currentGold + goldInCell);
        depthFirstSearch(row, col + 1, currentGold + goldInCell);

        // Restore the original value of the  cell after exploration
        grid[row][col] = goldInCell;

        // Update the maximum gold value
        maximumGold = Math.max(maximumGold, currentGold + goldInCell);
    }
    // Iterate through each cell in the grid
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // if the cell contains gold, perform depth first search
            if (grid[row][col] !== 0) {
                depthFirstSearch(row, col, 0);
            }
        }
    }
    return maximumGold;
}

    

// Example usage
const grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]];
console.log(getMaximumGold(grid));