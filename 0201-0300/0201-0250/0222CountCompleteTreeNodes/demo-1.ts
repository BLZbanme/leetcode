import { exists } from "fs";

function countNodes1(root: TreeNode | null): number {
    if (!root) {
        return 0
    }
    const queue = [root];
    let count = 0;
    while (queue.length) {
        let tmp = queue.length;
        for (let i = 0; i < tmp; i++) {
            let cur = queue.shift();
            count++;
            if (cur!.left && cur!.right) {
                queue.push(cur!.left);
                queue.push(cur!.right);
                continue;
            }
            if (!cur!.left) {
                return count * 2 - 1;
            }
            if (!cur!.right) {
                return count * 2;
            }
        }
    }
    return 0;
};

const exists = (root: TreeNode, level: number, k: number) => {
    let bits = 1 << (level - 1);
    let node: TreeNode | null = root;
    while (node && bits > 0) {
        if (!(bits & k)) {
            node = node.left;
        }
        else {
            node = node.right;
        }
        bits >>= 1;
    }
    return node !== null;
}

function countNodes(root: TreeNode | null): number {
    if (!root) {
        return 0
    }
    let level = 0;
    let node = root;
    while (node.left) {
        level++;
        node = node.left;
    }
    let low = 1 << level;
    let high = (1 << (level + 1)) - 1;
    while (low < high) {
        const mid = low + ((high - low + 1) >> 1);
        if (exists(root, level, mid)) {
            low = mid;
        }
        else {
            high = mid - 1
        }
    }
    return low;
}