/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let index = 0;
    let result = [];
    let length = A.length;
    for(let i = 0; i < length; i++){
        if (A[i] >= 0 || i == length - 1){
            let left = 1;
            let right = 0;
            while(index - left >= 0 && index + right < A.length){
                if(A[index - left] + A[index + right] <= 0){
                    result.push(A[index + right] ** 2);
                    right++;
                }else{
                    result.push(A[index - left] **2);
                    left++;
                }
            }
            while(index - left >= 0){
                result.push(A[index - left] **2);
                left++;
            }
            while(index + right < A.length){
                result.push(A[index + right] ** 2);
                right++;
            }
            return result;
        }else{
            index++;
        }
    }
};

sortedSquares([-1])
sortedSquares([-7,-3,2,3,11])
sortedSquares([2,3,11])