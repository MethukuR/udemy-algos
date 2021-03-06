/**
 * Given an unsorted array of integers, find a subarray which adds to a given number. If there are more than one
 * subarrays with the sum as the given number, print any of them.

 Examples:

 Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
 Ouptut: Sum found between indexes 2 and 4

 Input: arr[] = {10, 2, -2, -20, 10}, sum = -10
 Ouptut: Sum found between indexes 0 to 3

 Input: arr[] = {-10, 0, 2, -2, -20, 10}, sum = 20
 Ouptut: No subarray with given sum exists

 A simple solution is to consider all subarrays one by one and check if sum of every subarray is equal to given sum or
 not. The complexity of this solution would be O(n^2).

 An efficient way is to use a map. The idea is to maintain sum of elements encountered so far in a variable
 (say curr_sum). Let the given number is sum. Now for each element, we check if curr_sum – sum exists in the map or not.
 If we found it in the map that means, we have a subarray present with given sum, else we insert curr_sum into the map
 and proceed to next element. If all elements of the array are processed and we didn’t find any subarray with given sum,
 then subarray doesn’t exists.

 */


