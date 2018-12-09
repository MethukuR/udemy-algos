/**
 * Description:
 Given a list, each element in the list can be a list or integer. flatten it into a simply list with integers.

 If the element in the given list is a list, it can contain list too.

 Have you met this question in a real interview?

 Example:
 Given [1,2,[1,2]], return [1,2,1,2].

 Given [4,[3,[2,[1]]]], return [4,3,2,1].

 Challenge:
 Do it in non-recursive.
 */

const flatten = function(nestedArr){

    let flattenedArr = [];

    while (nestedArr.length){
        let element = nestedArr.shift();
        if(Array.isArray(element)){
            nestedArr = nestedArr.concat(element)
        }else{
            flattenedArr.push(element);
        }
    }

    return flattenedArr;
};

console.log(flatten([0,[1,[2,[3,[4,[5]]]]]]));
