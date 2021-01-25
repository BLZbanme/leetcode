function numEquivDominoPairs1(dominoes: number[][]): number {
    const n = dominoes.length;
    const tmpArr = [];
    const uf = new UnionFind1128(n);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if((dominoes[i][0] === dominoes[j][0] && dominoes[i][1] === dominoes[j][1])
                || (dominoes[i][0] === dominoes[j][1] && dominoes[i][1] === dominoes[j][0])
            ) {
                tmpArr.push([i, j])
            }
        }
    }
    for (const arr of tmpArr) {
        const [x, y] = arr;
        uf.union(x, y);
    }
    return uf.setNum();
};

class UnionFind1128 {
    parent: Array<number>
    num: number = 0
    size: Array<number>

    constructor(n: number) {
        this.parent = Array(n).fill(-1);
        this.size = Array(n).fill(1);
    }

    find(x: number): number {
        if (this.parent[x] === -1) return x;
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }

    union(x: number, y: number): boolean {
        const xRoot = this.find(x);
        const yRoot = this.find(y);
        if (xRoot === yRoot) return false;
        this.parent[xRoot] = yRoot;
        this.size[yRoot] += this.size[xRoot];
        return true;
    }

    setNum() {
        let num = 0;
        this.parent.forEach((e, index) => {
            if (e === -1) {
                num += Cm2(this.size[index])
            }
        })
        return num;
    }
}

function Cm2(m: number): number {
    return m * (m - 1) / 2;
}

function numEquivDominoPairs(dominoes: number[][]): number {
    const num = Array(100).fill(0);
    let ret = 0;
    for (const domino of dominoes) {
        const val = domino[0] < domino[1] ? domino[0] * 10 + domino[1] : domino[1] * 10 + domino[0];
        ret += num[val];
        num[val]++;
    }
    return ret;
}

console.log(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]])) // 1