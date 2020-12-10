function predictPartyVictory1(senate: string): string {
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

console.log(predictPartyVictory('RD')) //Radiant
console.log(predictPartyVictory('RDD')) //Dire