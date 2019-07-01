/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length == 0){
        return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    res.push(intervals.reduce((acc, cur) => {
        if(acc[1] >= cur[0]){
            if(acc[1] < cur[1]){
                acc[1] = cur[1];
            }
            return acc;
        }else{
            res.push(acc);
            return cur;
        }
    }));
    return res;
};

var merge = function(intervals) {

}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));

console.log(merge([[1,4],[4,5]]));

console.log(merge([[1,4],[4,5], [5, 6]]));


console.log(merge([[1,4]]));


console.log(merge([[8,10], [15,18], [1,3],[2,6]]));