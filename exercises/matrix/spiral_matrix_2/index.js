/**
 *  Description:
 *  -----------
 Given an integer n, generate a square matrix filled with elements from 1 to n^2 in spiral order.

 Example:
 -------
 Given n = 3,

 You should return the following matrix:

 [
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
 ]
 */

/**
 * @param n: An integer
 * @return: a square matrix
 */
const generateMatrix = function (n) {
     if(n === 0){
         return [];
     }

     if(n === 1){
         return [[1]];
     }

     //create nXn matrix
    let spiralMatrix = new Array(n);
    for (let i = 0; i < n; i++) {
        spiralMatrix[i] = new Array(n);
    }

    let counter = 1;
    let k = 0; // starting row index for next iteration
    let l = 0; // start column index for next iteration
    let lastRow = n - 1; // ending row index for next iteration
    let lastColumn = n - 1; // ending column index for next iteration

    while (k <= lastRow && l <= lastColumn) {
        // insert first row
        for (let i = l; i <= lastColumn; ++i) {
            spiralMatrix[k][i] = counter++;
        }
        ++k;

        //insert last column
        for(let i = k ; i <= lastRow ; ++i){
            spiralMatrix[i][lastColumn] = counter++;
        }
        --lastColumn;

        //insert last row
        if( k <= lastRow){
            for(let i = lastColumn ; i >= l; --i){
                spiralMatrix[lastRow][i] = counter++;
            }
            --lastRow;
        }

        //insert first column
        if( l <= lastColumn){
            for(let i = lastRow ; i >= k ; --i){
                spiralMatrix[i][l] = counter++;
            }
            ++l;
        }
    }

    return spiralMatrix;
};


