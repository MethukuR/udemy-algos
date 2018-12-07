// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let strArr = str.split('');
    let i = 0;
    let j = strArr.length-1;
    while(i<j){
        let temp = strArr[i];
        strArr[i] = strArr[j];
        strArr[j] = temp;
        ++i;
        --j;
    }
    return strArr.join('');
}
 
module.exports = reverse;
