/**
 * Description:
 Given an array of integers, find a contiguous subarray which has the largest sum.

 The subarray should contain at least one number.

 Example:
 Given the array [−2,2,−3,4,−1,2,1,−5,3], the contiguous subarray [4,−1,2,1] has the largest sum = 6.

 Challenge:
 Can you do it in time complexity O(n)?
 */

/**
 * @param nums: A list of integers
 * @return: A integer indicate the sum of max subarray
 */
const maxSubArray = function (nums) {

    let maxSoFar = nums[0];
    let currentMax = nums[0];

    for(let i = 1; i < nums.length; ++i){
        currentMax = Math.max(nums[i] , currentMax+nums[i]);
        maxSoFar = Math.max(maxSoFar, currentMax);
    }

    return maxSoFar;
};

const minSubArray = function (nums) {

    let minSoFar = nums[0];
    let currentMin = nums[0];

    for(let i = 1; i < nums.length; ++i){
        currentMin = Math.max(nums[i] , currentMin+nums[i]);
        minSoFar = Math.max(minSoFar, currentMin);
    }

    return minSoFar;
};
