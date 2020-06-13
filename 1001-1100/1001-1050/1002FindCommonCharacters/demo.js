/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let arrayList = [];
    for(let str of A){
        let arr = new Array(26).fill(0);
        for(let i = 0; i < str.length; i++){
            arr[str[i].charCodeAt() - 'a'.charCodeAt()]++;
        }
        arrayList.push(arr);
    }
    let res = [];
    for(let i = 0; i < 26; i++){
        let min = 100;
        for(let j = 0; j < arrayList.length; j++){
            if(arrayList[j][i] < min){
                min = arrayList[j][i];
            }
        }
        for(let k = 0; k < min; k++){
            res.push(String.fromCharCode(i + 'a'.charCodeAt()));
        }
    }
    return res;
};

var commonChars = function(A){
    let arr = new Array(26).fill(100);
    for(let str of A){
        let tmpArr = new Array(26).fill(0);
        str.split("").forEach((v) => {
            tmpArr[v.charCodeAt() - 'a'.charCodeAt()]++;
        })
        for(let i = 0; i < 26; i++){
            arr[i] = Math.min(arr[i], tmpArr[i]);
        }
    }
    let res = [];
    for(let i = 0; i < 26; i++){
        for(let k = 0; k < arr[i]; k++){
            res.push(String.fromCharCode(i + 'a'.charCodeAt()));
        }
    }
    return res;
}

var commonChars = function(A){
    let res = A[0].split("");
    for(let i = 1; i < A.length; i++){
        let tmp = A[i].split("");
        res = res.filter(e => tmp.indexOf(e) > -1 ? tmp[tmp.indexOf(e)] = 1 : false);
    }
    return res;
}

commonChars(["bella","label","roller"])

commonChars(["cool","lock","cook"])