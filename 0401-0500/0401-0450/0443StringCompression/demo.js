/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let num = 0;
    let tmp = "";
    let index = 0;
    for (let i = 0; i < chars.length; i++) {
        if (tmp !== chars[i]) {
            let stack = [];
            if (num > 1) {
                while (num) {
                    stack.push(num % 10);
                    num = Math.floor(num / 10);
                }
                let len = stack.length;
                while (len) {
                    chars[index++] = "" + stack[--len];
                }
            }
            tmp = chars[i];
            chars[index++] = tmp;
            num = 1;
        }
        else {
            num++;
        }
    }
    if (num != 1) {
        let stack = [];
        while (num) {
            stack.push(num % 10);
            num = Math.floor(num / 10);
        }
        let len = stack.length;
        while (len) {
            chars[index++] = "" + stack[--len];
        }
    }
    return index;
};

var compress = function(chars) {
    let indexAns = 0;
    let index = 0;
    while (index < chars.length) {
        let cur = chars[index];
        let count = 0;
        while (index < chars.length && chars[index] == cur) {
            count++;
            index++;
        }
        chars[indexAns++] = cur;
        if (count != 1) {
            let tmp = count.toString();
            for (let i = 0; i < tmp.length; i++) {
                chars[indexAns++] = tmp[i];
            }
        }
    }
    return indexAns;
}

console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]))

console.log(compress(["a","a","b","b","c","c","c"]))

console.log(compress(["a"]))

