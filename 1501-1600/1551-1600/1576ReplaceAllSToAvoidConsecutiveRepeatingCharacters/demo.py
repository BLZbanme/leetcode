class Solution:
    chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g'
        'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z'
    ]
    def modifyString(self, s: str) -> str:
        sArr = list(s)
        N = len(s)
        for i in range(N):
            left = '' if not i else sArr[i - 1]
            right = '' if i == N - 1 else sArr[i + 1]
            if sArr[i] == '?':
                for c in self.chars:
                    if left != c and right != c:
                        sArr[i] = c
                        break
        return ''.join(sArr)       

print(Solution().modifyString("?zs"))