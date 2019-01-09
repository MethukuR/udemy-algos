/**
 * Description:
 * -----------
 Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in ZigZag-order.

 Example:
 --------
 Given a matrix:
 [
 [1, 2,  3,  4],
 [5, 6,  7,  8],
 [9,10, 11, 12]
 ]
 return [1, 2, 5, 9, 6, 3, 4, 7, 10, 11, 8, 12]
 */

/**
 * @param matrix: An array of integers
 * @return: An array of integers
 */
const printZMatrix = function (matrix) {

    let k = 0;
    let l = 1;
    let lastRow = matrix.length - 1;
    let lastColumn;
    if(lastRow >= 0){
        lastColumn = matrix[0].length - 1;
    }else{
        return [];
    }

    let zigZagArray = [matrix[0][0]];
    let dir = true;
    while( k <= lastRow && l <= lastColumn){
        if(dir){
            while( l >= 0 && l <= lastColumn  && k >=0 && k <=lastRow){
                zigZagArray.push(matrix[k][l]);
                ++k;
                --l;
            }
        }else{
            while( l >= 0 && l <= lastColumn  && k >=0 && k <=lastRow){
                zigZagArray.push(matrix[k][l]);
                --k;
                ++l;
            }
        }

        if( k === lastRow+1){
            --k;
            l += 2;
        }

        if( l === lastColumn+1){
            --l;
            k += 2;
        }

        if( k === -1){
            ++k;
        }
        if(l === -1){
            ++l;
        }

        dir = !dir;
    }
    //zigZagArray.push(matrix[k][l]);

    return zigZagArray;
};
let n = [
    [1,  2,   3,  4,  5,  6],
    [7,  8,   9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18]
];
console.log(printZMatrix(n));

