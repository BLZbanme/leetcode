function removeDuplicateLetters(s: string): string {
    const vis = Array(26).fill(false);
    const num = Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);
    for (let i  = 0; i < s.length; i++) {
        num[s.charCodeAt(i) - aCode]++;
    }
    const str:Array<string> = [];
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (!vis[ch.charCodeAt(0) - aCode]) {
            while (str.length > 0 && str[str.length - 1] > ch) {
                if (num[str[str.length - 1].charCodeAt(0) - aCode] > 0) {
                    vis[str[str.length - 1].charCodeAt(0) - aCode] = false
                    str.pop()
                }
                else {
                    break;
                }
            }
            vis[ch.charCodeAt(0) - aCode] = true
            str.push(ch)
        }
        num[ch.charCodeAt(0) - aCode]--;
    }
    return str.join('')
};