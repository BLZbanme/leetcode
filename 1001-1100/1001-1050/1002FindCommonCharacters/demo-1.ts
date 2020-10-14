function commonChars(A: string[]): string[] {
    let tmpArr = A.map(e => e.split(""));
    return tmpArr.reduce((pre, cur) => {
        return pre.filter(e => {
            let index = cur.indexOf(e);
            if (index == -1) {
                return false;
            }
            else {
                cur[index] = "#";
                return true;
            }
        });
    })
};

