/**
 * Description:
 Given a rotated sorted array, recover it to sorted array in-place.

 Have you met this question in a real interview?
 Clarification
 What is rotated array?

 For example, the orginal array is [1,2,3,4], The rotated array of it can be [1,2,3,4], [2,3,4,1], [3,4,1,2], [4,1,2,3]
 Example
 [4, 5, 1, 2, 3] -> [1, 2, 3, 4, 5]

 Challenge
 In-place, O(1) extra space and O(n) time.

 */

/**
 * @param nums: An integer array
 * @return:
 */
const recoverRotatedSortedArray = function (nums) {

    for(let i = 1 ; i < nums.length ; ++i){
        if(nums[i-1] > nums[i]){
            rotateLeft(nums, i-1);
            break;
        }

    }

    return nums;
};

function rotateLeft(nums, offset){
    reverse(nums, 0, offset);
    reverse(nums, offset+1, nums.length-1);
    reverse(nums, 0, nums.length-1);
}

function reverse(arr, start, end) {

    while(start <= end){
        let temp = arr[start];
        arr[start]= arr[end];
        arr[end] = temp;
        ++start;
        --end;
    }

}

console.log(recoverRotatedSortedArray([4, 5, 1, 2, 3]));



