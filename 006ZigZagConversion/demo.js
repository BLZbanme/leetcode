var convert = function(s, numRows) {
    if(numRows == 1){
        return s;
    }
    var tmpArray = [];
    for(let i = 0; i < numRows; i++){
        tmpArray.push(new Array());
    }
    var charArray = s.split('');
    var divNum = numRows * 2 - 2; 
    for(let i = 0; i < charArray.length; i++){
        var tmp = i % divNum;
        if(tmp < numRows){
            tmpArray[tmp].push(charArray[i]);
        }else{
            tmpArray[divNum - tmp].push(charArray[i]); 
        }
    }
    var result = '';
    for(let i = 0; i < tmpArray.length; i++){
        for(let j = 0; j < tmpArray[i].length; j++){
            result += tmpArray[i][j];
        }
    }
    return result;
};
convert("PAYPALISHIRING", 4);
convert("A", 1);