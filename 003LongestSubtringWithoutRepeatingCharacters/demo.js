var lengthOfLongestSubstring = function(s) {
    var maxlength = 0;
    let i = 0;
    while(i < s.length){
        let j = i + 1;
        while(j < s.length){
            var sub = s.substring(i, j);
            if(sub.indexOf(s.charAt(j)) == -1){
                j++;
                continue;
            }else{
                maxlength == maxlength > sub.length ? maxlength : sub.length;
                i = sub.indexOf(s.charAt(j));
                break;
            }
        };
        if(j == s.length){
            return maxlength > j - i - 1 ? maxlength : j - i - 1;
        }
        i++;
    }
    return maxlength;
};