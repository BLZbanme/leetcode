function accountsMerge(accounts: string[][]): string[][] {
    const emailToIndex = new Map<string, number>();
    const emailToName = new Map();
    let emailsCount = 0;
    for (const account of accounts) {
        const name = account[0];
        const size = account.length;
        for (let i = 1; i < size; i++) {
            const email = account[i];
            if (!emailToIndex.has(email)) {
                emailToIndex.set(email, emailsCount++);
                emailToName.set(email, name);
            }
        }
    }

    const uf = new UnionFindNow(emailsCount);
    for (const account of accounts) {
        const firstEmail = account[1];
        const firstIndex = emailToIndex.get(firstEmail)!;
        const size = account.length;
        for (let i = 2; i < size; i++) {
            const nextEmail = account[i];
            const nextIndex = emailToIndex.get(nextEmail)!;
            uf.union(firstIndex, nextIndex);
        }
    }

    const indexToEmails = new Map();
    for (const email of emailToIndex.keys()) {
        const index = uf.findRoot(emailToIndex.get(email)!);
        const account = indexToEmails.get(index) || [];
        account.push(email);
        indexToEmails.set(index, account);
    }

    const merged = [];
    for (const emails of indexToEmails.values()) {
        emails.sort();
        const name = emailToName.get(emails[0]);
        const account = [];
        account.push(name);
        account.push(...emails);
        merged.push(account);
    }
    return merged;
};

class UnionFindNow {
    parent: Array<number>
    
    constructor(n: number) {
        this.parent = Array(n).fill(-1);
    }

    findRoot(x: number): number {
        if (this.parent[x] === - 1) return x;
        return this.findRoot(this.parent[x]);
    }

    union(x: number, y: number): boolean {
        let xRoot = this.findRoot(x);
        let yRoot = this.findRoot(y);
        if (xRoot === yRoot) return false;
        this.parent[xRoot] = yRoot;
        return true;
    }
}