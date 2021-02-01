"use strict";
function rob(root) {
    if (!root) {
        return 0;
    }
    var helper = function (node) {
        var leftStick = 0;
        var leftNoStick = 0;
        if (node.left) {
            var _a = helper(node.left), stick_1 = _a.stick, noStick_1 = _a.noStick;
            leftStick = stick_1;
            leftNoStick = noStick_1;
        }
        var rightStick = 0;
        var rightNoStick = 0;
        if (node.right) {
            var _b = helper(node.right), stick_2 = _b.stick, noStick_2 = _b.noStick;
            rightStick = stick_2;
            rightNoStick = noStick_2;
        }
        return {
            stick: node.val + leftNoStick + rightNoStick,
            noStick: Math.max(leftStick, leftNoStick) + Math.max(rightStick, rightNoStick)
        };
    };
    var _a = helper(root), stick = _a.stick, noStick = _a.noStick;
    return Math.max(stick, noStick);
}
;
