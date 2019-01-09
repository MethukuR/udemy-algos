/**
 *
 * Description :
 *
 Follow up for "Unique Paths":

 Now consider if some obstacles are added to the grids. How many unique paths would there be?

 An obstacle and empty space is marked as 1 and 0 respectively in the grid.

 m and n will be at most 100.

 Example:
 For example,
 There is one obstacle in the middle of a 3x3 grid as illustrated below.

 [
 [0,0,0],
 [0,1,0],
 [0,0,0]
 ]
 The total number of unique paths is 2.
 */

/**
 * @param obstacleGrid: A list of lists of integers
 * @return: An integer
 */
const uniquePathsWithObstacles = function (obstacleGrid) {

    let m = obstacleGrid.length;
    if( m === 0){
        return 0;
    }

    let n = obstacleGrid[0].length;

    if(n === 0){
        return 0;
    }

    let count = new Array(m);
    for (let i = 0; i < m; i++) {
        count[i] = new Array(n);
    }

    //initializing the left corner if no obstacle there
    count[0][0] = (obstacleGrid[0][0] === 0) ? 1 : 0;


    // Count of paths to reach any cell in first column is 1
    for (let i = 1; i < m; i++) {
        count[i][0] = (obstacleGrid[i][0] === 0) ? count[i-1][0] : 0;
    }

    // Count of paths to reach any cell in first column is 1
    for (let i = 1; i < n; i++) {
        count[0][i] = (obstacleGrid[0][1] === 0) ? count[0][i-1] : 0;

    }

    // Calculate count of paths for other cells in
    // bottom-up manner using the recursive solution
    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            count[i][j] = (obstacleGrid[i][j] === 0) ? count[i-1][j] + count[i][j-1] : 0;
        }
    }

    return count[m-1][n-1];
};

console.log(uniquePathsWithObstacles([
    [0,0,0],
    [0,1,0],
    [0,0,0]
]));
