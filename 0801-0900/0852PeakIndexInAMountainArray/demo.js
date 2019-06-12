/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    let lo = 1, hi = A.length - 2;
    return twoFind(A, lo, hi);
};

function twoFind(arr, lo, hi){
    let mid = parseInt((lo + hi) / 2);
    if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]){
        return mid;
    }
    if(arr[mid] < arr[mid + 1]){
        return twoFind(arr, mid + 1, hi);
    }
    if(arr[mid] < arr[mid - 1]){
        return twoFind(arr, lo, mid - 1);
    }
}


peakIndexInMountainArray([0,1,0])
peakIndexInMountainArray([0,2,1,0])
peakIndexInMountainArray([0,1,2,1,0])