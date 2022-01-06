class Solution:
    def simplifyPath(self, path: str) -> str:
        pathArr = path.split('/')
        stack = []
        for cur in pathArr:
            if cur:
                if cur == '.':
                    continue
                elif cur == '..':
                    stack and stack.pop()
                else:
                    stack.append(cur)
        return '/' + '/'.join(stack)
                