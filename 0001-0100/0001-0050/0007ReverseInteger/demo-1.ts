function reverse1(x: number): number {
    if (!x) return 0;
    const max = 2 ** 31 - 1;
    const flag = x >= 0;
    flag || (x = -x)
    let cur = 0;
    while (x > 0) {
        let tmp = x % 10;
        x = Math.floor(x / 10);
        if (cur > (max - tmp) / 10) {
            return 0;
        }
        else {
            cur = cur * 10 + tmp;
        }
    }
    return flag ? cur : -cur;
};

function reverse(x: number): number {
    const max = Math.floor((2 ** 31 - 1) / 10);
    const min = Math.ceil((-(2 ** 31)) / 10);
    let res = 0;
    while (x != 0) {
        let tmp = x % 10;
        x = x >= 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
        if (res > max || (res === max && tmp > 7)) return 0;
        if (res < min || (res === min && tmp < -8)) return 0;
        res = res * 10 + tmp;
    }
    return res;
}

console.log(reverse(-123))
console.log(reverse(-2147483648))