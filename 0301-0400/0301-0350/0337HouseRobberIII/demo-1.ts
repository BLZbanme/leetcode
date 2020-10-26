function rob(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    const helper = (node: TreeNode): {stick: number, noStick: number} => {
        let leftStick = 0;
        let leftNoStick = 0;
        if (node.left) {
            const { stick, noStick } = helper(node.left);
            leftStick = stick;
            leftNoStick = noStick;
        }
        
        let rightStick = 0;
        let rightNoStick = 0;
        if (node.right) {
            const { stick, noStick } = helper(node.right);
            rightStick = stick;
            rightNoStick = noStick;
        }

        return {
            stick: node.val + leftNoStick + rightNoStick,
            noStick: Math.max(leftStick, leftNoStick) + Math.max(rightStick, rightNoStick)
        }
    }

    const { stick, noStick } = helper(root);
    return Math.max(stick, noStick);    
};