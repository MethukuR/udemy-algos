/**
 * Description
 Merge two given sorted integer array A and B into a new sorted integer array.

 Have you met this question in a real interview?
 Example
 A=[1,2,3,4]

 B=[2,4,5,6]

 return [1,2,2,3,4,4,5,6]

 Challenge
 How can you optimize your algorithm if one array is very large and the other is very small?
 */

/**
 * @param A: sorted integer array A
 * @param B: sorted integer array B
 * @return: A new sorted integer array
 */


const mergeSortedArray = function (a, b) {

    let mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            mergedArray.push(a[i]);
            ++i;
        } else {
            mergedArray.push(b[j]);
            ++j;
        }

    }

    if (i < a.length) {
        mergedArray = [...mergedArray, ...a.slice(i, a.length)]
    }

    if (j < b.length) {
        mergedArray = [...mergedArray, ...b.slice(j, b.length)]
    }

    return mergedArray;
};

let a = [1, 2, 3, 4];

let b = [2, 4, 5, 6];

console.log(mergeSortedArray(a, b));
