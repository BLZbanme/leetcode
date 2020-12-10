# 649. Dota2 Senate

In the world of Dota2, there are two parties: the `Radiant` and the `Dire`.

The Dota2 senate consists of senators coming from two parties. Now the senate wants to make a decision about a change in the Dota2 game. The voting for this change is a round-based procedure. In each round, each senator can exercise `one` of the two rights:

1. `Ban one senator's right`:
   A senator can make another senator lose **all his rights** in this and all the following rounds.
2. `Announce the victory`:
   If this senator found the senators who still have rights to vote are all from **the same party**, he can announce the victory and make the decision about the change in the game.

 

Given a string representing each senator's party belonging. The character 'R' and 'D' represent the `Radiant` party and the `Dire` party respectively. Then if there are `n` senators, the size of the given string will be `n`.

The round-based procedure starts from the first senator to the last senator in the given order. This procedure will last until the end of voting. All the senators who have lost their rights will be skipped during the procedure.

Suppose every senator is smart enough and will play the best strategy for his own party, you need to predict which party will finally announce the victory and make the change in the Dota2 game. The output should be `Radiant` or `Dire`.

**Example 1:**

```
Input: "RD"
Output: "Radiant"
Explanation: The first senator comes from Radiant and he can just ban the next senator's right in the round 1. 
And the second senator can't exercise any rights any more since his right has been banned. 
And in the round 2, the first senator can just announce the victory since he is the only guy in the senate who can vote.
```

 

**Example 2:**

```
Input: "RDD"
Output: "Dire"
Explanation: 
The first senator comes from Radiant and he can just ban the next senator's right in the round 1. 
And the second senator can't exercise any rights anymore since his right has been banned. 
And the third senator comes from Dire and he can ban the first senator's right in the round 1. 
And in the round 2, the third senator can just announce the victory since he is the only guy in the senate who can vote.
```

 

**Note:**

1. The length of the given string will in the range [1, 10,000].



#### 2020.12.11

#### 	我的思路：

纯模拟，没想到循环队列，很蠢！

```javascript
function predictPartyVictory(senate: string): string {
    const helper = (str: string) => {
        const rQueue: Array<number> = [];
        const dQueue: Array<number> = [];
        const rPreQueue: Array<number> = [];
        const dPreQueue: Array<number> = [];
        const strArr = str.split('')
        strArr.forEach((e: string, index: number) => {
            e === 'R' ? rQueue.push(index) : dQueue.push(index)
        })
        for (let i = 0; i < strArr.length; i++) {
            if (!strArr[i]) {
                continue
            }
            if (strArr[i] === 'R') {
                if (dQueue.length) {
                    strArr[dQueue.shift()!] = ''
                    rQueue.shift();
                    rPreQueue.push(i);
                }
                else {
                    if (dPreQueue.length) {
                        strArr[dPreQueue.shift()!] = ''
                    }
                    else {
                        return {
                            end: true,
                            result: 'Radiant'
                        }
                    }
                }
            }
            else {
                if (rQueue.length) {
                    strArr[rQueue.shift()!] = ''
                    dQueue.shift();
                    dPreQueue.push(i);
                }
                else {
                    if (rPreQueue.length) {
                        strArr[rPreQueue.shift()!] = ''
                    }
                    else {
                        return {
                            end: true,
                            result: 'Dire'
                        }
                    }
                }
            }
        }
        return {
            end: false,
            result: strArr.join('')
        }
    }
    let str = senate;
    while (true) {
        let res = helper(str)
        if (res.end) {
            return res.result;
        }
        str = res.result;
    }
};
```

#### 别人的思路：

##### 循环队列

```typescript
function predictPartyVictory(senate: string): string {
    const N = senate.length;
    const radiant = [];
    const dire = [];
    for (let i = 0; i < N; i++) {
        senate[i] === 'R' ? radiant.push(i) : dire.push(i);
    }

    while (radiant.length && dire.length) {
        if (radiant[0] < dire[0]) {
            radiant.push(radiant[0] + N);
        }
        else {
            dire.push(dire[0] + N);
        }
        radiant.shift();
        dire.shift();
    }
    return radiant.length ? 'Radiant' : 'Dire';
}
```
