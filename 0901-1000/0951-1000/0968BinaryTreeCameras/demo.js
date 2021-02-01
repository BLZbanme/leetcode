"use strict";
// function minCameraCover(root: TreeNode | null): number {
//     const minCam = (root: TreeNode | null, placeCam: boolean, watched: boolean): number => {
//         if (!root) {
//             if (placeCam) {
//                 return Infinity;
//             }
//             else {
//                 return 0;
//             }
//         }
//         if (placeCam) {
//             return 1 + Math.min(
//                 minCam(root.left, false, true) + minCam(root.right, false, true),
//                 minCam(root.left, true, true) + minCam(root.right, false, true),
//                 minCam(root.left, false, true) + minCam(root.right, true, true),
//             )
//         }
//         else {
//             if (watched) {
//                 return Math.min(
//                     minCam(root.left, true, true) + minCam(root.right, true, true),
//                     minCam(root.left, true, true) + minCam(root.right, false, false),
//                     minCam(root.left, false, false) + minCam(root.right, true, true),
//                     minCam(root.left, false, false) + minCam(root.right, false, false),
//                 )
//             }
//             else {
//                 return Math.min(
//                     minCam(root.left, true, true) + minCam(root.right, true, true),
//                     minCam(root.left, true, true) + minCam(root.right, false, false),
//                     minCam(root.left, false, false) + minCam(root.right, true, true),
//                 )
//             }
//         }
//     }
//     return Math.min(minCam(root, true, true), minCam(root, false, false));
// };
function minCameraCover(root) {
    var minCam = function (root) {
        if (!root) {
            return {
                withCam: Infinity,
                noCamWatchByDad: 0,
                noCamWatchBySon: 0
            };
        }
        var left = minCam(root.left);
        var right = minCam(root.right);
        var withCam = 1 + Math.min(left.noCamWatchByDad + right.noCamWatchByDad, left.withCam + right.noCamWatchByDad, left.noCamWatchByDad, right.withCam);
    };
    return Math.min(minCam(root, true, true), minCam(root, false, false));
}
;
