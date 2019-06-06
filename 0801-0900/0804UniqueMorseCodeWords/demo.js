/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const map = new Map(
        [
            ["a", ".-"],
            ["b", "-..."],
            ["c", "-.-."],
            ["d", "-.."],
            ["e", "."],
            ["f", "..-."],
            ["g", "--."],
            ["h", "...."],
            ["i", ".."],
            ["j", ".---"],
            ["k", "-.-"],
            ["l", ".-.."],
            ["m", "--"],
            ["n", "-."],
            ["o", "---"],
            ["p", ".--."],
            ["q", "--.-"],
            ["r", ".-."],
            ["s", "..."],
            ["t", "-"],
            ["u", "..-"],
            ["v", "...-"],
            ["w", ".--"],
            ["x", "-..-"],
            ["y", "-.--"],
            ["z", "--.."]
        ]
    );
    let set = new Set();
    let tmp;
    for(let i = 0; i < words.length; i++){
        tmp = '';
        for(let j = 0; j < words[i].length; j++){
            tmp += map.get(words[i][j]);
        }
        set.add(tmp);
    }
    return set.size;
};

var uniqueMorseRepresentations = function(words) {
    const arr = [
        ".-","-...", "-.-.", "-..", ".", "..-.","--.", "....",
        "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.",
        "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-",
        "-.--", "--.."
    ]
    let set = new Set();
    let tmp;
    for(let i = 0; i < words.length; i++){
        tmp = '';
        for(let j = 0; j < words[i].length; j++){
            tmp += arr[words[i][j].charCodeAt() - 'a'.charCodeAt()];
        }
        set.add(tmp);
    }
    return set.size;
};