function canConstruct1(ransomNote: string, magazine: string): boolean {
    const aCode = 'a'.charCodeAt(0);
    const arr = Array(26).fill(0);
    for (let i = 0; i < magazine.length; i++) {
        arr[magazine.charCodeAt(i) - aCode]++;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        arr[ransomNote.charCodeAt(i) - aCode]--;
    }
    return arr.every(e => e >= 0);
};

function canConstruct(ransomNote: string, magazine: string): boolean {
    const aCode = 'a'.charCodeAt(0);
    const arr = Array(26).fill(0);
    for (let i = 0; i < magazine.length; i++) {
        arr[magazine.charCodeAt(i) - aCode]++;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (arr[ransomNote.charCodeAt(i) - aCode] > 0) {
            arr[ransomNote.charCodeAt(i) - aCode]--;
        }
        else {
            return false;
        }
    }
    return true;
};