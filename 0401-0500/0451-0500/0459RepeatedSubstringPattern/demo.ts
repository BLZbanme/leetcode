function repeatedSubstringPattern22(s: string): boolean {
    for (let i = s.length >> 1; i > 0; i--) {
        let tmp = s.slice(0, i);
        let reg = new RegExp(tmp, 'g');
        if (s.replace(reg, "") === "") {
            return true;
        }
    }
    return false;
};

function repeatedSubstringPattern1(s: string): boolean {
    const N = s.length;
    for (let i = 0; i * 2 <= N; i++) {
        if (N % i == 0) {
            let match = true;
            for (let j = i; j < N; j++) {
                if (s[j] != s[j - i]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return true;
            }
        }
    }
    return false;
}

function repeatedSubstringPattern(s: string): boolean {
    return (s + s).indexOf(s, 1) != s.length;
}