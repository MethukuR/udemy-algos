/**
 * Count ways to reach the n’th stair:
 * ==================================
 There are n stairs, a person standing at the bottom wants to reach the top. The person can climb either 1 stair or 2
 stairs at a time. Count the number of ways, the person can reach the top.

 Input: n = 1
 Output: 1
 There is only one way to climb 1 stair

 Input: n = 2
 Output: 2
 There are two ways: (1, 1) and (2)

 Input: n = 4
 Output: 5
 (1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (1, 2, 1), (2, 2)

 We can easily find recursive nature in above problem. The person can reach n’th stair from either (n-1)’th stair or
 from (n-2)’th stair. Let the total number of ways to reach n’t stair be ‘ways(n)’. The value of ‘ways(n)’ can be
 written as following.

 ways(n) = ways(n-1) + ways(n-2)
 The above expression is actually the expression for Fibonacci numbers, but there is one thing to notice, the value of
 ways(n) is equal to fibonacci(n+1).

 ways(1) = fib(2) = 1
 ways(2) = fib(3) = 2
 ways(3) = fib(4) = 3

 So we can use function for fibonacci numbers to find the value of ways(n).

 Generalization of the above problem:
 ===================================
 How to count number of ways if the person can climb up to m stairs for a given value m? For example if m is 4, the
 person can climb 1 stair or 2 stairs or 3 stairs or 4 stairs at a time.

 We can write the recurrence as following.

 ways(n, m) = ways(n-1, m) + ways(n-2, m) + ... ways(n-m, m)
 */

/**
 * @param n: An integer
 * @return: An integer
 */
const climbStairs = function (n) {
    return fibOptimized(n);
};

let fib = [];

// returns n+1th fibonacci number
function fibOptimized(n){

    // Base cases
    if (n === 0){
        return 0;
    }

    if (n === 1 || n === 2){
        return (fib[n] = 1);
    }

    if(fib[n]){
        return fib[n];
    }

    let k = (n&1) ? Math.floor((n+1)/2) : Math.floor(n/2);

    fib[n] = (n&1) ? (fibOptimized(k-1)*fibOptimized(k-1) + fibOptimized(k)*fibOptimized(k)) :
        (2*fibOptimized(k-1) + fibOptimized(k))*fibOptimized(k);

    return fib[n];
}

console.log(fibOptimized(5));
