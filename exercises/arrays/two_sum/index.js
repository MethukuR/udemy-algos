/**
 * Two Sum:
 Given an array of integers, find two numbers such that they add up to a specific target number.

 The function twoSum should return indices of the two numbers such that they add up to the target, where
 index1 must be less than index2. Please note that your returned answers (both index1 and index2) are
 zero-based.

 Example
 numbers=[2, 7, 11, 15], target=9

 return [0, 1]

 Challenge:
 ---------
 Either of the following solutions are acceptable:
 O(n) Space, O(nlogn) Time
 O(n) Space, O(n) Time

 Notice:
 You may assume that each input would have exactly one solution
 */

/**
 * @param numbers: An array of Integer
 * @param target: target = numbers[index1] + numbers[index2]
 * @return: [index1, index2] (index1 < index2)
 */
const twoSum = function (numbers, target) {

    let numCountMap = new Map();
    let indices = [];

    for(let i = 0; i < numbers.length; ++i){
        let temp = target - numbers[i];
        if( temp > 0 && numCountMap.has(temp) && numCountMap.get(temp) !== i){
            indices = [numCountMap.get(temp), i];
            break;
        }
        numCountMap.set(numbers[i],i);
    }

    return indices;
};

console.log(twoSum([2,7,11,15], 9));
