// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let charMapA = formCharMap(stringA);
    let charMapB = formCharMap(stringB);

    let isAnagram = true;
    Object.keys(charMapA).forEach(key => {
        if(charMapA[key] !== charMapB[key]){
            isAnagram = false;
            return;
        }
    });
    return isAnagram;
}

function formCharMap(str){
    let strArr = str.split('');

    return strArr.reduce((tempMap, curChar) => {
        if(!tempMap[curChar]){
            tempMap[curChar]=1;
        }else{
            tempMap[curChar]+=1;
        }

        return tempMap;
    },{})
}

module.exports = anagrams;
