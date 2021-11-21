"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution:
    def maxDepth(self, root: 'Node') -> int:
        if not root:
            return 0
        maxVal = 0
        for child in root.children:
            maxVal = max(maxVal, self.maxDepth(child))
        return 1 + maxVal