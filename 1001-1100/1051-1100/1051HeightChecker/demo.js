/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let arr = [];
    heights.forEach((a) => arr.push(a));
    arr.sort((a, b) => a - b);
    let res = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != heights[i]){
            res++;
        }
    }
    return res;
};

var heightChecker = function(heights) {
    let arr = Array.from(heights);
    arr.sort((a, b) => a - b);
    let res = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != heights[i]){
            res++;
        }
    }
    return res;
};

var heightChecker = function(heights) {
    let arr = [...heights];
    arr.sort((a, b) => a - b);
    let res = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != heights[i]){
            res++;
        }
    }
    return res;
};

var heightChecker = function(heights) {
    let arr = heights.slice();
    arr.sort((a, b) => a - b);
    let res = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != heights[i]){
            res++;
        }
    }
    return res;
};

var heightChecker = function(heights) {
    let arr = JSON.parse(JSON.stringify(heights));
    arr.sort((a, b) => a - b);
    let res = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != heights[i]){
            res++;
        }
    }
    return res;
};
heightChecker([10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]);
heightChecker([1,1,1,1,1,1,1,1]);
heightChecker([1,1,4,2,1,3]);