/**
 * Description:
 Given a sorted array and a target value, return the index if the target is found. If not, return the index
 where it would be if it were inserted in order.

 You may assume NO duplicates in the array.

 Example
 [1,3,5,6], 5 → 2

 [1,3,5,6], 2 → 1

 [1,3,5,6], 7 → 4

 [1,3,5,6], 0 → 0

 Challenge
 O(log(n)) time
 */

/**
 * @param A: an integer sorted array
 * @param target: an integer to be inserted
 * @return: An integer
 */
const searchInsert = function (A, target) {
    if(A.length === 0 || target < A[0]){
        return 0;
    }

    if(target > A[A.length-1]){
        return A.length;
    }

    let low = 0;
    let high = A.length -1;
    let mid;
    let position;
    while(low <= high){
        mid = Math.floor((high - low )/2 ) + low;
        if(A[mid] === target){
            position = mid;
            break;
        }else if(A[mid] > target){
            high = mid-1;
            position = mid;
        }else{
            low = mid+1;
            position = mid+1;
        }
    }

    return position;
};

console.log(searchInsert([1,3,5,6,8,9],7));
