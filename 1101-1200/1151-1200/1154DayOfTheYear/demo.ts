function dayOfYear(date: string): number {
    let arr = date.split("-").map(e => +e);
    let daysNum = 0;
    const pinMonths = new Set([1, 3, 5, 7, 8, 10]);
    const map = new Map();
    for (let i = 1; i <= arr[1]; i++) {
        map.set(i, daysNum)
        if (pinMonths.has(i)) {
            daysNum += 31;
        }
        else if (i !== 2) {
            daysNum += 30;
        }
        else {
            daysNum += 28;
        }
    }
    let days = map.get(arr[1]) + arr[2];
    if (arr[0] % 4 !== 0 || (arr[0] % 100 == 0 && arr[0] % 400 !== 0) || arr[1] < 3) {
        return days;
    }

    return days + 1;
};

console.log(dayOfYear("2019-01-09")) //9
console.log(dayOfYear("2019-02-10")) //41
console.log(dayOfYear("2003-03-01")) //60
console.log(dayOfYear("2004-03-01")) //61
console.log(dayOfYear("2000-03-01")) //61
console.log(dayOfYear("2100-03-01")) //60
console.log(dayOfYear("2016-02-29")) //60