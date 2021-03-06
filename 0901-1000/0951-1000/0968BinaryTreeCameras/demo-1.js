const minCameraCover = (root) => {
    const minCam = (root) => {
        if (root == null) {   // base case
            return {
                withCam: Infinity,
                noCamWatchByDad: 0,
                noCamWatchBySon: 0
            };
        }
        const left = minCam(root.left);   // 以左儿子为根的左子树的minCam
        const right = minCam(root.right); // 以右儿子为根的右子树的minCam
        // 下面相当于状态转移方程
        const withCam = 1 + Math.min(     
            left.noCamWatchByDad + right.noCamWatchByDad,
            left.withCam + right.noCamWatchByDad,
            left.noCamWatchByDad + right.withCam
        );

        const noCamWatchByDad = Math.min(
            left.withCam + right.withCam,
            left.withCam + right.noCamWatchBySon,
            left.noCamWatchBySon + right.withCam,
            left.noCamWatchBySon + right.noCamWatchBySon
        );

        const noCamWatchBySon = Math.min(
            left.withCam + right.withCam,
            left.withCam + right.noCamWatchBySon,
            left.noCamWatchBySon + right.withCam
        );

        return { withCam, noCamWatchByDad, noCamWatchBySon };
    };

    const res = minCam(root); // 相当于dp[root]
    return Math.min(res.withCam, res.noCamWatchBySon); // 相当于 dp[root][0]、dp[root][2]
};

  console.log(minCameraCover({"val":0,"left":null,"right":{"val":0,"left":null,"right":{"val":0,"left":null,"right":null}}}));
  
