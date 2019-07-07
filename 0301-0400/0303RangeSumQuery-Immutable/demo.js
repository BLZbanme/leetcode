/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let len = nums.length;
    var tmpArray = new Array(len);
    for(let i = 0; i < len; i++){
        tmpArray[i] = new Array(len);
    }
    for(let i = 0; i < len; i++){
        tmpArray[i][i] = nums[i];
        for(let j = i + 1; j < len; j++){
            tmpArray[i][j] = tmpArray[i][j - 1] +  nums[j];
        }
    }
    this.tmpArray = tmpArray;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.tmpArray[i][j];
};


var NumArray = function(nums) {
    let len = nums.length;
    var tmpArray = new Array(len);
    tmpArray[0] = nums[0];
    for(let i = 1; i < len; i++){
        tmpArray[i] = tmpArray[i - 1] + nums[i];
    }
    this.tmpArray = tmpArray;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.tmpArray[j] - (i > 0 ? this.tmpArray[i - 1] : 0);
};


var NumArray = function(nums) {
    let len = nums.length;
    var tmpArray = new Array(len + 1);
    tmpArray[0] = 0;
    for(let i = 0; i < len; i++){
        tmpArray[i + 1] = tmpArray[i] + nums[i];
    }
    this.tmpArray = tmpArray;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.tmpArray[j + 1] - this.tmpArray[i];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

var obj = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(obj.sumRange(0, 2));
console.log(obj.sumRange(2, 5));
console.log(obj.sumRange(0, 5));
console.log(obj.sumRange(3, 5));
