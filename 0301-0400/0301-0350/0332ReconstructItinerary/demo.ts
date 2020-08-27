function findItinerary(tickets: string[][]): string[] {
    const map = new Map();
    tickets.forEach(e => {
        if (map.has(e[0])) {
            let arr = map.get(e[0]);
            arr.push(e[1]);
            arr.sort();
        }
        else {
            map.set(e[0], [e[1]])
        }
    })

    const result: Array<string> = [];
    function dfs(str: string): void {
        while (map.get(str) && map.get(str).length) {
            dfs(map.get(str).shift());
        }
        result.unshift(str);
    }
    dfs('JFK');
    return result;
};