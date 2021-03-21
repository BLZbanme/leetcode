/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    const result = [];
    const arr = [];

    const dfs = (left, right) => {
        if (left === n && right === n) {
            result.push(arr.join(''));
            return;
        }
        if (left < n) {
            arr.push('(');
            dfs(left + 1, right);
            arr.pop();
        }
        
        if (right < n && left > right) {
            arr.push(')');
            dfs(left, right + 1);
            arr.pop();
        }
    }

    dfs(0, 0);
    return result;
};

console.log(generateParenthesis(3)) //["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)) //["()"]