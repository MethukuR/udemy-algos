/**
 * Description:
 Compare two strings A and B, determine whether A contains all of the characters in B.

 The characters in string A and B are all Upper Case letters.

 The characters of B in A are not necessary continuous or ordered.

 Example
 For A = "ABCD", B = "ACD", return true.

 For A = "ABCD", B = "AABC", return false.

 */

/**
 * @param A: A string
 * @param B: A string
 * @return: if string A contains all of the characters in B return true else return false
 */
const compareStrings = function (A, B) {
    if( A === undefined || B === undefined){
        return false;
    }

    if(B.length === 0){
        return true;
    }

    let charArr = new Array(26);
    let isTrue = true;

    for(let i = 0; i < A.length; ++i){
        let charIndex = A.charCodeAt(i) - 65;
        charArr[charIndex] = charArr[charIndex] ? charArr[charIndex]+1 : 1;
    }

    for(let i = 0; i < B.length; ++i){
        let charIndex = B.charCodeAt(i) - 65;

        if(!charArr[charIndex]){
            isTrue = false;
            break;
        }

        --charArr[charIndex];

        if(charArr[charIndex] < 0){
            isTrue = false;
            break;
        }



    }

    return isTrue;
};

console.log(compareStrings("ABCD", "AABC"));
