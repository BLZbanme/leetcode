/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    const map = new Map(
        [
            ["A", "a"],
            ["B", "b"],
            ["C", "c"],
            ["D", "d"],
            ["E", "e"],
            ["F", "f"],
            ["G", "g"],
            ["H", "h"],
            ["I", "i"],
            ["J", "j"],
            ["K", "k"],
            ["L", "l"],
            ["M", "m"],
            ["N", "n"],
            ["O", "o"],
            ["P", "p"],
            ["Q", "q"],
            ["R", "r"],
            ["S", "s"],
            ["T", "t"],
            ["U", "u"],
            ["V", "v"],
            ["W", "w"],
            ["X", "x"],
            ["Y", "y"],
            ["Z", "z"]
        ]
    );
    let strArr = str.split("");
    for(let i = 0; i < strArr.length; i++){
        if(map.has(strArr[i])){
            strArr[i] = map.get(strArr[i]);
        }
    }
    return strArr.join("");
};

const toLowerCase = (str) => {
    //Calculate Ascii diff from a to A
    const DIFF = ('a'.charCodeAt(0) - 'A'.charCodeAt(0));
    return Array
        .from(str)
        .map( ch => ( ch >= 'A' && ch <= 'Z' ) ? String.fromCharCode(ch.charCodeAt(0) + DIFF) : ch )
        .join('');
};

var toLowerCase = function(str) {
    const Diff = ('a'.charCodeAt(0) - 'A'.charCodeAt(0));
    return str.split("").map(e => {return (e >= 'A' && e <= 'Z') ? String.fromCharCode(e.charCodeAt(0) + Diff) : e}).join("");
}


toLowerCase("Hello")