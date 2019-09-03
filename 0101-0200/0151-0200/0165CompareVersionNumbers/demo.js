/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let arr1 = version1.split(".");
    let arr2 = version2.split(".");
    const N1 = arr1.length;
    const N2 = arr2.length;
    for (var i = 0; i < N1 && i < N2; i++) {
        if (+arr1[i] < +arr2[i]) {
            return -1;
        }
        else if (+arr1[i] > +arr2[i]) {
            return 1;
        }
    }
    if (i < N1) {
        let tmp = arr1.slice(i).some(e => +e !== 0);
        return tmp ? 1 : 0;
    }
    else if (i < N2) {
        let tmp = arr2.slice(i).some(e => +e !== 0);
        return tmp ? -1 : 0;
    }
    return 0;
};

var compareVersion = function(version1, version2) {
    let arr1 = version1.split(".").map(e => +e);
    let arr2 = version2.split(".").map(e => +e);
    const N1 = arr1.length;
    const N2 = arr2.length;
    for (var i = 0; i < N1 && i < N2; i++) {
        if (arr1[i] < arr2[i]) {
            return -1;
        }
        else if (arr1[i] > arr2[i]) {
            return 1;
        }
    }
    if (i < N1) {
        return arr1.slice(i).some(e => e !== 0) ? 1 : 0;
    }
    else if (i < N2) {
        return arr2.slice(i).some(e => e !== 0) ? -1 : 0;
    }
    return 0;
};

console.log(compareVersion("19.8.3.17.5.01.0.0.4.0.0.0.0.0.0.0.0.0.0.0.0.0.00.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.000000.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.000000",
"19.8.3.17.5.01.0.0.4.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0000.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.000000"))

console.log(compareVersion("1.01", "1.001"))
console.log(compareVersion("1.0", "1.0.0"))
console.log(compareVersion("1.0.1", "1"))
console.log(compareVersion("7.5.2.4", "7.5.3"))
