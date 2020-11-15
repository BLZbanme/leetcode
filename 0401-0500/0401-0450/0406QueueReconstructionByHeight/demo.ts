function reconstructQueue(people: number[][]): number[][] {
    people.sort((a, b) => {
        return a[0] - b[0] || b[1] - a[1];
    })

    const N = people.length;
    const ans: Array<Array<number>> = Array(N).fill(0).map(e => []);

    for (let person of people) {
        let spaces = person[1] + 1;
        for (let i = 0; i < N; i++) {
            if (!ans[i].length) {
                --spaces;
                if (spaces == 0) {
                    ans[i] = person;
                    break;
                }
            }
        }
    }

    return ans;
};

console.log(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]))
//[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]