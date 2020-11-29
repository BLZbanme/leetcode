function reorganizeString(S: string): string {
    const N = S.length;
    const aCode = 'a'.charCodeAt(0);
    const arr = Array(26).fill(0);
    for (let i = 0; i < N; i++) {
        arr[S.charCodeAt(i) - aCode]++;
    }
    let max = Math.max(...arr);
    if (max > ((N + 1) >> 1)) return '';
    
    const reorganizeArray = Array(N);
    let evenIndex = 0;
    let oddIndex = 1;
    const half = N >> 1;
    for (let i = 0; i < 26; i++) {
        const c = String.fromCharCode(aCode + i);
        while (arr[i] > 0 && arr[i] <= half && oddIndex < N) {
            reorganizeArray[oddIndex] = c;
            arr[i]--;
            oddIndex += 2;
        }
        while (arr[i] > 0) {
            reorganizeArray[evenIndex] = c;
            arr[i]--;
            evenIndex += 2;
        }
    }
    return reorganizeArray.join('')
};