/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    const stack1 = [];
    const stack2 = [];
    let i = 0;
    let j = 0;
    const N1 = S.length;
    const N2 = T.length;
    while (i < N1 || j < N2) {
        if (i < N1) {
            if (S[i] != "#") {
                stack1.push(S[i]);
            }
            else {
                stack1.length && stack1.pop();
            }
        }
        if (j < N2) {
            if (T[j] != "#") {
                stack2.push(T[j]);
            }
            else {
                stack2.length && stack2.pop();
            }
        }
        i++;
        j++;
    }
    return stack1.join("") === stack2.join("")
};

var backspaceCompare = function(S, T) {
    let i = S.length - 1;
    let j = T.length - 1;
    let skipS = 0;
    let skipT = 0;
    while (i >= 0 || j >= 0) {
        while (i >= 0) {
            if (S[i] == '#') {
                skipS++;
                i--;
            }
            else if (skipS > 0) {
                skipS--;
                i--;
            }
            else {
                break;
            }
        }
        while (j >= 0) {
            if (T[j] == '#') {
                skipT++;
                j--;
            }
            else if (skipT > 0) {
                skipT--;
                j--;
            }
            else {
                break;
            }
        }
        if (i >= 0 && j >= 0) {
            if (S[i] != T[j]) {
                return false;
            }
        }
        else {
            if (i >= 0 || j >= 0) {
                return false;
            }
        }
        i--;
        j--;
    }
    return true;
}

console.log(backspaceCompare("ab#c", "ad#c")) //true
console.log(backspaceCompare("ab##", "c#d#")) //true
console.log(backspaceCompare("a##c", "#a#c")) //true
console.log(backspaceCompare("a#c", "b")) //false