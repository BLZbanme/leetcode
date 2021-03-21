/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = new Map([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']],
    ]);
    
    const result = [];
    const length = digits.length;
    const arr = [];

    const dfs = (index) => {
        if (length === index) {
            result.push(arr.join(''));
            return;
        }
        const cur = map.get(digits[index]);
        for (let char of cur) {
            arr.push(char);
            dfs(index + 1);
            arr.pop();
        }
    }
    length && dfs(0);
    return result;
};

console.log(letterCombinations('23')) //["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations('')) //[]
console.log(letterCombinations('2')) //["a","b","c"]