/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    for(let i = 0; i < height.length; i++){
        for(let j = i +1; j <height.length; j++){
            let v = (j - i) * Math.min(height[i], height[j]);
            max = max > v ? max : v;
        }
    }
    return max;
};

var maxArea = function(height) {
    let max = 0;
    let start = 0;
    let end = height.length - 1;
    while(start <= end){
        let low = 0;
        let h = end - start;
        if(height[end] > height[start]){
            low = height[start++];
        }else{
            low = height[end--];
        }
        max = max > low * h ? max : low * h;
    }
    return max;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));