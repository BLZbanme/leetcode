var arrayPairSum = function(nums) {
    return nums.sort((a, b) => a - b).filter((v, index) => index % 2 == 0).reduce((a, b) => a + b);
};
