function isLongPressedName1(name: string, typed: string): boolean {
    const queue1: Array<obj> = []
    const queue2: Array<obj> = []
    helper(queue1, name)
    helper(queue2, typed)
    if (queue1.length != queue2.length) {
        return false;
    }
    for (let i = 0; i < queue1.length; i++) {
        if (queue1[i].val != queue2[i].val || queue1[i].num > queue2[i].num) {
            return false;
        }
    }
    return true;
};

class obj {
    public val: string
    public num: number

    constructor(val: string, num: number) {
        this.val = val;
        this.num = num;
    }
}

function helper(arr: Array<obj>, str: string) {
    for (let i = 0; i < str.length; i++) {
        if (arr.length && arr[arr.length - 1].val == str[i]) {
            arr[arr.length - 1].num++;
        }
        else {
            arr.push(new obj(str[i], 1))
        }
    }
}

function isLongPressedName(name: string, typed: string): boolean {
    let i = 0;
    let j = 0;
    while (j < typed.length) {
        if (i < name.length && name[i] === typed[j]) {
            i++;
            j++;
        }
        else if (j > 0 && typed[j] == typed[j - 1]) {
            j++;
        }
        else {
            return false;
        }
    }
    return i === name.length;
}

console.log(isLongPressedName("alex", "aaleex")) //true
console.log(isLongPressedName("sawwd", "ssaaedd")) //false
console.log(isLongPressedName("leelee", "lleeelee")) //true
console.log(isLongPressedName("laiden", "laiden")) //true