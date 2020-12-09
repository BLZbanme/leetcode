function lemonadeChange(bills: number[]): boolean {
    const map = new Map([[5, 0], [10, 0]])
    for (let bill of bills) {
        if (bill === 5) {
            map.set(5, (map.get(5) || 0) + 1);
        }
        else if (bill === 10) {
            let tmp = map.get(5);
            if (tmp) {
                map.set(5, tmp - 1);
                map.set(10, (map.get(10) || 0) + 1)
            }
            else {
                return false;
            }
        }
        else {
            let tmp1 = map.get(10);
            let tmp2 = map.get(5) || 0;
            if (tmp1 && tmp2) {
                map.set(10, tmp1 - 1);
                map.set(5, tmp2 - 1);
            }
            else if (tmp2 > 2) {
                map.set(5, tmp2 - 3);
            }
            else {
                return false;
            }
        }
    }
    return true;
};

console.log(lemonadeChange([5,5,5,10,20])) // true
console.log(lemonadeChange([5,5,10])) // true
console.log(lemonadeChange([10,10])) // false
console.log(lemonadeChange([5,5,10,10,20])) // false