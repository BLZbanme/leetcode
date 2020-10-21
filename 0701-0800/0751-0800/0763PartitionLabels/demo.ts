function partitionLabels(S: string): number[] {
    const result = []
    const arr = Array(26).fill(-1)
    const aCode = 'a'.charCodeAt(0)
    const strArr = S.split("")
    strArr.forEach((e, index) => {
        arr[e.charCodeAt(0) - aCode] = index
    })
    let i = 0
    while (i < S.length) {
        let start = i
        let tmp = arr[S.charCodeAt(i) - aCode]
        while (i < tmp) {
            if (arr[S.charCodeAt(i) - aCode] > tmp) {
                tmp = arr[S.charCodeAt(i) - aCode]
            }
            i++
        }
        i++
        result.push(i - start)
    }
    return result
}

console.log(partitionLabels("ababcbacadefegdehijhklij")) //[9, 7, 8]
console.log(partitionLabels("abc")) //[1, 1, 1]