/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    let orderArray = preorder.split(',');
    let cur = orderArray[0];
    let stack = [];
    let i = 0;
    while (stack.length || (cur != '#' && cur)) {
        while (cur != '#' && cur) {
            stack.push(cur);
            cur = orderArray[++i];
        }
        stack.pop();
        if (i < orderArray.length - 1) {
            cur = orderArray[++i];
        }
        else {
            return false;
        }
    }
    return i == orderArray.length - 1 || i == orderArray.length;
};

var isValidSerialization = function(preorder) {
    let orderArray = preorder.split(',');
    let diff = 1;
    orderArray.forEach(e => {
        if (--diff < 0) {
            return false;
        }
        if (e != '#') {
            diff += 2;
        }
    });
    return !diff;
}

console.log(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#"))
console.log(isValidSerialization("1,#"))
console.log(isValidSerialization("9,#,#,1"))