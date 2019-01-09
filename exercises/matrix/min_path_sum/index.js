/**
 * Description:
 *
 Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes
 the sum of all numbers along its path.

 You can only move either down or right at any point in time.
 */

/**
 * @param grid: a list of lists of integers
 * @return: An integer, minimizes the sum of all numbers along its path
 */

const minPathSum = function (cost) {
    let m = cost.length;
    let n = cost[0].length;

    if (m === 0 && n === 0) {
        return cost[m][n];
    }

    //constructing 2D array => totalCost[m][n]
    let totalCost = new Array(m);
    for (let i = 0; i < m; i++) {
        totalCost[i] = new Array(n);
    }

    totalCost[0][0] = cost[0][0];

    /* Initialize first row of total cost(tc) array */
    for (let i = 1; i < m; i++) {
        totalCost[i][0] = totalCost[i - 1][0] + cost[i][0];
    }

    /* Initialize first column of total cost(tc) array */
    for (let i = 1; i < n; i++) {
        totalCost[0][i] = totalCost[0][i - 1] + cost[0][i];
    }

    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            totalCost[i][j] = Math.min(totalCost[i-1][j], totalCost[i][j-1]) + cost[i][j];
        }
    }

    return totalCost[m-1][n-1];
};

console.log(minPathSum([[7,4,8,7,9,3,7,5,0],[1,8,2,2,7,1,4,5,7],[4,6,4,7,7,4,8,2,1],[1,9,6,9,8,2,9,7,2],[5,5,7,5,8,7,9,1,4],[0,7,9,9,1,5,3,9,4]]));