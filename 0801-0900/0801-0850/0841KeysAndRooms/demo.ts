function canVisitAllRooms11(rooms: number[][]): boolean {
    const set = new Set([0]);
    const N = rooms.length;
    const dfs = (index: number): void => {
        if (set.size == N) {
            return;
        }
        let now = rooms[index];
        if (!now.length) {
            return;
        }

        while (now.length) {
            let tmp = now.shift();
            set.add(tmp);
            dfs(tmp);
        }
    }
    dfs(0);
    return set.size === N;
};

function canVisitAllRooms(rooms: number[][]): boolean {
    const N = rooms.length;
    const visited:Array<boolean> = (Array(N) as any).fill(false);

    let num = 0;
    const dfs = (index: number) :void => {
        visited[index] = true;
        num++;
        for (let i of rooms[index]) {
            if (!visited[i]) {
                dfs(i);
            }
        }
    }

    dfs(0);

    return num === N;
};

console.log(canVisitAllRooms([[1],[2],[3],[]])); // true;

console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]])); // true;