// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let k = 0; // starting row index for next iteration
    let l = 0; // start column index for next iteration
    let lastRow = n.length - 1; // ending row index for next iteration
    let lastColumn; // ending column index for next iteration
    if (lastRow >= 0) {
        lastColumn = n[0].length - 1;
    } else {
        return [];
    }

    while (k <= lastRow && l <= lastColumn) {
        // printing first row
        for (let i = l; i <= lastColumn; ++i) {
            console.log(n[k][i]);
        }
        ++k;

        //printing last column
        for(let i = k ; i <= lastRow ; ++i){
            console.log(n[i][lastColumn]);
        }
        --lastColumn;

        //printing last row
        if( k <= lastRow){
            for(let i = lastColumn ; i >= l; --i){
                console.log(n[lastRow][i]);
            }
            --lastRow;
        }

        //printing first column
        if( l <= lastColumn){
            for(let i = lastRow ; i >= k ; --i){
                console.log(n[i][l]);
            }
            ++l;
        }
    }
}

let n = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18]
];
matrix(n);
module.exports = matrix;
