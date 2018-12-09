/**
 * Description
 For a given sorted array (ascending order) and a target number, find the first index of this number in
 O(log n) time complexity.

 If the target number does not exist in the array, return -1.

 Have you met this question in a real interview?
 Example
 If the array is [1, 2, 3, 3, 4, 5, 10], for given target 3, return 2.

 Challenge:
 If the count of numbers is bigger than 2^32, can your code work properly?

 */

/**
 * @param nums: The integer array.
 * @param target: Target to find.
 * @return: The first position of target. Position starts from 0.
 */
const binarySearch = function (nums, target) {

    if(nums.length === 0){
        return -1;
    }

    let low = 0;
    let high = nums.length - 1;

    let result = -1;

    while(low <= high){
        let mid = Math.floor((high - low)/2 + low);
        if(nums[mid] === target){
            result = mid;
            high = mid - 1;
        }else if(nums[mid] > target){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }

    return result;
};

console.log(binarySearch([1,4,4,5,7,7,8,9,9,10], 4));
