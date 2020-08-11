/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(" ").map(e => e.split("").reverse().join("")).join(" ");
};

reverseWords("Let's take LeetCode contest");