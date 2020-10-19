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

console.log(backspaceCompare("ab#c", "ad#c")) //true
console.log(backspaceCompare("ab##", "c#d#")) //true
console.log(backspaceCompare("a##c", "#a#c")) //true
console.log(backspaceCompare("a#c", "b")) //false