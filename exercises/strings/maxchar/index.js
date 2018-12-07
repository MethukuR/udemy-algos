// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let strArr = str.split('');

    let charMap = strArr.reduce((tempMap, curChar) => {
        if(!tempMap[curChar]){
            tempMap[curChar]=1;
        }else{
            tempMap[curChar]+=1;
        }

        return tempMap;
    },{})

    let maxChar;
    let maxCharLength=0;

    Object.keys(charMap).forEach(char =>{
        if(charMap[char] > maxCharLength){
            maxCharLength= charMap[char];
            maxChar= char;
        }
    })

    return maxChar;
}

module.exports = maxChar;
