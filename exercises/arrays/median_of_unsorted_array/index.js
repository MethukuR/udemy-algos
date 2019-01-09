/**
 * Given an array and a number k where k is smaller than the size of the array, we need to find the
 * k’th smallest element() in the given array. It is given that all array elements are distinct.

 Examples:

 Input: arr[] = {7, 10, 4, 3, 20, 15}
 k = 3
 Output: 7

 Input: arr[] = {7, 10, 4, 3, 20, 15}
 k = 4
 Output: 10

 Algorithm:

 kthSmallest(arr[0..n-1], k)
 1) Divide arr[] into ⌈n/5⌉ groups where size of each group is 5
 except possibly the last group which may have less than 5 elements.

 2) Sort the above created ⌈n/5⌉ groups and find median
 of all groups. Create an auxiliary array 'median[]' and store medians
 of all ⌈n/5⌉ groups in this median array.

 // Recursively call this method to find median of median[0..⌈n/5⌉-1]
 3) medOfMed = kthSmallest(median[0..⌈n/5⌉-1], ⌈n/10⌉)

 4) Partition arr[] around medOfMed and obtain its position.
 pos = partition(arr, n, medOfMed)

 5) If pos == k return medOfMed
 6) If pos > k return kthSmallest(arr[l..pos-1], k)
 7) If pos < k return kthSmallest(arr[pos+1..r], k-pos+l-1)

 The first four steps are used to obtain a good point for partitioning the array
 (to make sure that there are not too many elements either side of pivot).
 */

/**
 * @param nums: A list of integers
 * @return: An integer denotes the middle number of the array
 */
const median = function (nums) {
    if(nums.length === 0){
        return;
    }

    if(nums.length === 1){
        return nums[0];
    }

    let k = Math.floor(nums.length/2);
    let low = 0;
    let high = nums.length - 1;
    return getKthSmallestElement(nums, low, high, k);

};

function getKthSmallestElement(arr, low, high, k){
    let n = high-low+1;

    if( k > 0 && k <= n){

        let median = new Array(Math.floor((n+4)/5));

        let tempArr = arr;
        let i;
        for(i = 0; i < median.length-1; ++i){
            median[i] = getMedian(tempArr.slice(i*5+low, i*5+low+5),5);
        }

        if(n%5 === 0){
            median[i] = getMedian(tempArr.slice(i*5+low, i*5+low+5),5);
            ++i;
        }else{
            median[i] = getMedian(tempArr.slice(i*5+low, i*5+low+(n%5)+1), n%5);
            ++i
        }

        let medOfMed = (i === 1) ? median[i-1] : getKthSmallestElement(median, low, high, Math.floor(i/2));

        let partitionIndex = doPartition(median, low, high, medOfMed);

        if (partitionIndex - low == k - 1) {
            return arr[partitionIndex];
        }

        if (partitionIndex - low > k - 1) {
            return getKthSmallestElement(arr, low, partitionIndex - 1, k);
        }

        return getKthSmallestElement(arr, partitionIndex + 1, high, k - (partitionIndex + 1) + low);
    }

    return -1;
}

function getMedian(arr,arrLength){
    arr.sort();
    return arr[Math.floor(arrLength/2)];
}

function doPartition(arr, low, high, pivot){

    for(let i = low; i < high ; ++i){
        if(arr[i] === pivot){
            swap(arr, i, high);
            break;
        }
    }

    let pIndex = low;

    for(let i = low; i < high ; ++i){
        if(arr[i] <= pivot){
            swap(arr, i, pIndex);
            ++pIndex;
        }
    }

    swap(arr, pIndex, high);

    return pIndex;
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(median([7, 10, 4, 3, 20, 15]));