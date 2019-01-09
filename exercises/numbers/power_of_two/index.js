/**
 * Description:
 * -----------
 Using O(1) time to check whether an integer n is a power of 2.

 Example
 For n=4, return true;

 For n=5, return false;

 Challenge
 O(1) time

 */

/**
 * @param n: An integer
 * @return: True or false
 */
const checkPowerOf2 = function (n) {
    if(n <= 0 ){
        return false;
    }
    return (!(n & n - 1));
};


