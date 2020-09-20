function canPermutePalindrome11(s: string): boolean {
    const map = new Map<string, boolean>();
    for (let i = 0; i < s.length; i++) {
        let tmp = map.get(s[i]);
        if (tmp == undefined) {
            map.set(s[i], false);
        }
        else {
            map.set(s[i], !tmp);
        }
    }
    let flag = false;
    for (let [key, value] of map) {
        if (!value) {
            if (!flag) {
                flag = true;
            }
            else {
                return false;
            }
        }
    }

    return true;
};

function canPermutePalindrome(s: string): boolean {
    const set = new Set<string>();
    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) {
            set.delete(s[i]);
        }
        else {
            set.add(s[i]);
        }
    }

    return set.size <= 1;
};

console.log(canPermutePalindrome("tactcoa")); //true