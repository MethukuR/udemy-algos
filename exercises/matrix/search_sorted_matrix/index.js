/**
 * Description:
 * ===========
 Write an efficient algorithm that searches for a value in an m x n matrix.

 This matrix has the following properties:

 Integers in each row are sorted from left to right.
 The first integer of each row is greater than the last integer of the previous row.

 Example:
 Consider the following matrix:

 [
 [1, 3, 5, 7],
 [10, 11, 16, 20],
 [23, 30, 34, 50]
 ]
 Given target = 3, return true.

 Challenge
 O(log(n) + log(m)) time
 */

/**
 * @param matrix: matrix, a list of lists of integers
 * @param target: An integer
 * @return: a boolean, indicate whether matrix contains target
 */
const searchMatrix = function (matrix, target) {

    const rows = matrix.length;
    if (rows === 0) {
        return false;
    }
    const columns = matrix[0].length;
    if (columns === 0) {
        return false;
    }

    let i = 0;
    let j = columns - 1;

    let found = false;

    while (i < rows && j < columns) {
        if (matrix[i][j] === target) {
            found = true;
            break;
        } else if (matrix[i][j] >= target) {
            --j;
        } else {
            ++i;
        }
    }

    return found;
};

let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
];

console.log(searchMatrix([[]], 376));



