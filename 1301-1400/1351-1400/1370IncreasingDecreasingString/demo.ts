function sortString(s: string): string {
    const arr = Array(26).fill(0)
    const aCode = 'a'.charCodeAt(0)
    const N = s.length;
    for (let i = 0; i < N; i++) {
        arr[s.charCodeAt(i) - aCode]++;
    }
    let i = 0;
    let result = '';
    while (i < N) {
        for (let j = 0; j < 26; j++) {
            if (arr[j]) {
                arr[j]--;
                result += String.fromCharCode(j + aCode);
                i++;
            }
        }
        for (let j = 25; j >= 0; j--) {
            if (arr[j]) {
                arr[j]--;
                result += String.fromCharCode(j + aCode);
                i++;
            }
        }
    }
    return result;
};