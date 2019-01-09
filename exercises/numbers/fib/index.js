// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     let fib = new Array(n);
//     fib[0] = 0;
//     fib[1] = 1;
//
//     for(let i = 2; i < n; ++i){
//         fib[i] = fib[i-1] + fib[i-2];
//     }
//
//     return fib[n-1];
// }



/**
 *  (O(Log n) Time)
 Below is one more interesting recurrence formula that can be used to find n’th Fibonacci Number in O(Log n)
 time.

 If n is even then k = n/2:
 F(n) = [2*F(k-1) + F(k)]*F(k)

 If n is odd then k = (n + 1)/2
 F(n) = F(k)*F(k) + F(k-1)*F(k-1)
 *
 *
 */
// Need to implement using tail call optimization
let fib = [];

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

//console.log(fibOptimized(25000));

const fibTailOptimized = (n, current, total )=>{
    if( n === 0 ){
        return current;
    }

    return fibTailOptimized(n-1, total, current+total);
};

console.log(fibTailOptimized(10, 0, 1));
module.exports = fib;
