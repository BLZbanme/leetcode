function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    //队列queue中存储当前步伐所能对应的字符串
  const queue: Array<string> = [beginWord];
  //初始化为1步	
  let count = 1;
  while (queue.length) {
        //步数，当前队列的个数
      let tmp = queue.length;
        //步数加1
      count++;
      while (tmp--) {
          //拿出一个字符串now
          let now = queue.shift();
          for (let i = 0; i < wordList.length; i++) {
              //判断wordList中是否有该字符串转一个字符可以变成的字符串
              if (checkTwoStr(now, wordList[i])) {
                  //如果直接能得到endWord则返回步数
                  if (wordList[i] === endWord) {
                      return count;
                  }
                  //否则，queue中新增能到达的字符
                  queue.push(wordList[i]);
                  //易知，所需要的最短的步数是不可能走回头路的，所以把走过的wordList[i]直接置空，防止重走
                  wordList[i] = "";
              }
          }
      }
  }

  return 0;
};

function checkTwoStr(str1: string | undefined, str2: string) {
  if (!str1 || !str2 || str1.length !== str2.length) {
      return false;
  }
  let result = false;
  for (let i = 0; i < str1.length; i++) {
      if (str1[i] != str2[i]) {
          if (!result) {
              result = true;
          }else {
              return false;
          }
      }
  }
  return result;
}

console.log(ladderLength('leet', 'code', ["lest", "leet", "lose", "code", "lode", "robe", "lost"])); //6
console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])); //5
console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log"])); //0