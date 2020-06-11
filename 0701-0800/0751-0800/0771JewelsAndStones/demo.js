/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let set = new Set(J.split(""));
  let res = 0;
  for(let i = 0; i < S.length; i++){
    if(set.has(S[i])){
        res++;
    }
  }  
  return res;
};

numJewelsInStones("aA", "aAAbbbb");
numJewelsInStones("z", "ZZ");