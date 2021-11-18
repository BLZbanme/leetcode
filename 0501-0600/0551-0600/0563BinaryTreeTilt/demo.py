# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.count = 0

    def findTilt(self, root: TreeNode) -> int:
        self.count = 0
        self.dfs(root)
        return self.count
    def dfs(self, node):
        if not node:
            return 0
        
        left = self.dfs(node.left)
        right = self.dfs(node.right)
        self.count += abs(left - right)
        return node.val + left + right