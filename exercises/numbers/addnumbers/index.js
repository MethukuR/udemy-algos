/**
1. A + B Problem
Write a function that add two numbers A and B.

Example
Given a=1 and b=2 return 3.

Challenge
Of course you can just return a + b to get accepted. But Can you challenge not do it like that?(You should not use + or any arithmetic operators.)

Clarification:

Are a and b both 32-bit integers?
Yes.

Can I use bit operation?
Sure you can.

 */

/**
Explanation:

First recall addition in primary school. e.g. 26 + 147 = 173. You start by 6+7=13, so you put 3 in the sum, and carry the one, and so forth -
that is: you add two digits and carry a one if necessary.

carry: 1
a: 26
b: 147
-----------------
sum: 173


The code does almost the same thing on binary numbers, but with a small tweak. Instead of taking one digit position at a time, it takes all in
one go. Instead of including the carry from position i-1 in i (i.e. including 1 when adding 2 and 4), the code add all caries in a second
iteration. So what it does is: 026+147 = 163 + 010 = 173 + 000

For the binary numbers a=6=00110 and b=7=00101 you get

First you find the carries; that is all positions where both a and b has its bit set: int carry = (a & b) ;

Then id does the addition of digits, ignoring the carry, and stores it in a: a = a ^ b; This will respond to 6+7=3 in the example.

The last part shifts the carry to the next digit position, i.e. ensuring the 1-carry in the example is "moved" from the 1's to the 10's:
carry << 1;

The while loop continues as long as there are carries that has not been included in the sum.
 */

/**
 * @param a: An integer
 * @param b: An integer
 * @return: The sum of a and b
 */
const aplusb = function (a, b) {

    while(b){
        let carry = a&b;
        a = a^b;
        b = carry<<1;
    }

    return a;
};

let sum = aplusb(3,5);
console.log(sum);