/**
 Description:
 ============
 Given a string and an offset, rotate string by offset. (rotate from left to right)

 Example
 Given "abcdefg".

 offset=0 => "abcdefg"
 offset=1 => "gabcdef"
 offset=2 => "fgabcde"
 offset=3 => "efgabcd"
 Challenge
 Rotate in-place with O(1) extra memory.

 (The Reversal Algorithm) :

 Algorithm :

 rotate(arr[], d, n)
 reverse(arr[], 1, d) ;
 reverse(arr[], d + 1, n);
 reverse(arr[], 1, n);
 Let AB are the two parts of the input array where A = arr[0..d-1] and B = arr[d..n-1]. The idea of the algorithm is :

 Reverse A to get ArB, where Ar is reverse of A.
 Reverse B to get ArBr, where Br is reverse of B.
 Reverse all to get (ArBr) r = BA.
 Example :
 Let the array be arr[] = [1, 2, 3, 4, 5, 6, 7], d =2 and n = 7
 A = [1, 2] and B = [3, 4, 5, 6, 7]

 Reverse A, we get ArB = [2, 1, 3, 4, 5, 6, 7]
 Reverse B, we get ArBr = [2, 1, 7, 6, 5, 4, 3]
 Reverse all, we get (ArBr)r = [3, 4, 5, 6, 7, 1, 2]

 *
 */

const rotateString = (str, offset) => {

    if(str.length === 0){
        return;
    }
    offset = offset%str.length;

    let reversedString = rotateRight(str.split(""), str.length - offset);
    console.log(reversedString);

};

function rotateRight(str, offset){
    reverse(str, 0, offset-1);
    reverse(str,  offset, str.length-1);
    reverse(str, 0, str.length-1);

    return str.join("");
}

function reverse(str, start, end){

    while(start < end){
        let temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        ++start;
        --end;
    }
}

rotateString("abcdefg",2);

