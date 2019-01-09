/**
 * Description:
 *
 A robot is located at the top-left corner of a m x n grid.

 The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right
 corner of the grid.

 How many possible unique paths are there?

 m and n will be at most 100.


 Count all possible paths from top left to bottom right of a mXn matrix
 The problem is to count all the possible paths from top left to bottom right of a mXn matrix with the constraints that
 from each cell you can either move only to right or down

 Examples :

 Input :  m = 2, n = 2;
 Output : 2
 There are two paths
 (0, 0) -> (0, 1) -> (1, 1)
 (0, 0) -> (1, 0) -> (1, 1)

 Input :  m = 2, n = 3;
 Output : 3
 There are three paths
 (0, 0) -> (0, 1) -> (0, 2) -> (1, 2)
 (0, 0) -> (0, 1) -> (1, 1) -> (1, 2)
 (0, 0) -> (1, 0) -> (1, 1) -> (1, 2)
 */

/**
 * @param m: positive integer (1 <= m <= 100)
 * @param n: positive integer (1 <= n <= 100)
 * @return: An integer
 */
const uniquePaths = function (m, n) {

    if(m === 0 || n === 0){
        return 0;
    }

    if(m === 1 || n === 1){
        return 1;
    }

    let count = new Array(m);
    for (let i = 0; i < m; i++) {
        count[i] = new Array(n);
    }

    // Count of paths to reach any cell in first column is 1
    for (let i = 0; i < m; i++) {
        count[i][0] = 1;
    }

    // Count of paths to reach any cell in first column is 1
    for (let i = 0; i < n; i++) {
        count[0][i] = 1;
    }

    // Calculate count of paths for other cells in
    // bottom-up manner using the recursive solution
    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            count[i][j] = count[i-1][j] + count[i][j-1];
        }
    }

    return count[m-1][n-1];
};
