var longestPalindrome = function(s) {
    var charArray = s.split("");
    var max = 0;
    var mid = 0;
    for(let i = 1 ; i < s.length; i++){
        if(charArray[i] == charArray[i - 1]){
            let cha = 1;
            let len = 2;
            while(i - cha >= 1 && i + cha + 1 <= s.length ){
                if(charArray[i - cha - 1] != charArray[i + cha]){
                    break;
                }
                len += 2;
                cha++;
            }
            if(max < len){
                max = len;
                mid = i;
            }
        }
        let cha = 1;
        let len = 1;
        while(i - cha >= 0 && i + cha + 1 <= s.length ){
            if(charArray[i - cha] != charArray[i + cha]){
                break;
            }
            len += 2;
            cha++;
        }   
        if(max < len){
            max = len;
            mid = i;
        }
    }
    if(max == 0){
        return s.charAt(0);
    }
    if(max % 2 == 0){
        return s.substring(mid - max / 2 , mid + max / 2);
    }
    return s.substring(mid - Math.floor(max / 2), mid + 1 + Math.floor(max / 2));
};

longestPalindrome("babad");
longestPalindrome("cbbd");
longestPalindrome("bb");
longestPalindrome("a");