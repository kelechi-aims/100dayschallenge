/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function(grid) {
    const n = grid.length;
    const dr = [0, 0, 1, -1]; // Direction vectors for row
    const dc = [1, -1, 0, 0]; // Direction vectors for column
    let maxSafeness = -1;
    
    // Function to check if a cell is within the grid boundaries
    const isValidCell = (r, c) => {
        return r >= 0 && r < n && c >= 0 && c < n;
    };
    
    // Function to perform BFS
    const bfs = () => {
        const visited = Array.from({ length: n }, () => Array(n).fill(false)); // Visited array
        const queue = []; // Queue for BFS traversal
        
        queue.push([0, 0, 0]); // Push starting cell (0, 0) with safeness factor 0
        
        while (queue.length > 0) {
            const [r, c, safeness] = queue.shift(); // Dequeue cell and safeness factor
            
            // Update maxSafeness if safeness factor is greater
            maxSafeness = Math.max(maxSafeness, safeness);
            
            // Mark current cell as visited
            visited[r][c] = true;
            
            // Explore adjacent cells
            for (let i = 0; i < 4; i++) {
                const nr = r + dr[i];
                const nc = c + dc[i];
                
                // Check if adjacent cell is within grid boundaries and not visited
                if (isValidCell(nr, nc) && !visited[nr][nc]) {
                    // Calculate Manhattan distance from adjacent cell to any thief
                    let minManhattan = Infinity;
                    for (let row = 0; row < n; row++) {
                        for (let col = 0; col < n; col++) {
                            if (grid[row][col] === 1) {
                                const manhattan = Math.abs(nr - row) + Math.abs(nc - col);
                                minManhattan = Math.min(minManhattan, manhattan);
                            }
                        }
                    }
                    
                    // Push adjacent cell to queue with updated safeness factor
                    queue.push([nr, nc, Math.max(safeness, minManhattan)]);
                }
            }
        }
    };
    
    bfs(); // Perform BFS traversal
    
    return maxSafeness;       
};

// Example usage:
const grid = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
];
console.log(maximumSafenessFactor(grid)); // Output: 4