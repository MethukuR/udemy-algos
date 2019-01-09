/**
 * Count number of bits to be flipped to convert A to B:
 * -----------------------------------------------------
 Given two numbers ‘a’ and b’. Write a program to count number of bits needed to be flipped to convert ‘a’ to
 ‘b’.

 Example :
 ---------
 Input : a = 10, b = 20
 Output : 4
 Binary representation of a is 00001010
 Binary representation of b is 00010100
 We need to flip highlighted four bits in a
 to make it b.

 Input : a = 7, b = 10
 Output : 3
 Binary representation of a is 00000111
 Binary representation of b is 00001010
 We need to flip highlighted three bits in a to make it b.

 Algorithm:
 ----------
 1. Calculate XOR of A and B.
 a_xor_b = A ^ B
 2. Count the set bits in the above
 calculated XOR result.
 countSetBits(a_xor_b)
 XOR of two number will have set bits only at those places where A differs from B.
 */

/**
 * @param a: An integer
 * @param b: An integer
 * @return: An integer
 */
const bitSwapRequired = function (a, b) {
    return countSetBits(a^b);
};

function countSetBits(xoredValue){
    let count = 0;
    while(xoredValue){
        xoredValue &=xoredValue-1;
        count++;
    }
    return count;
}

console.log(bitSwapRequired(1, -1));

