# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:

    def countPairs(self, root: TreeNode, distance: int) -> int:
        self.res = 0

        def dfs(treeNode: any):
            if not treeNode:
                return []

            if not treeNode.left and not treeNode.right:
                return [1]

            leftArr = dfs(treeNode.left)
            rightArr = dfs(treeNode.right)
            
            for leftItem in leftArr:
                for rightItem in rightArr:
                    if leftItem + rightItem <= distance:
                        self.res += 1

            return [item + 1 for item in leftArr + rightArr]

        dfs(root)
        return self.res
    
    

