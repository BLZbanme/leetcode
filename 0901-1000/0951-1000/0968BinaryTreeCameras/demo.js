function minCameraCover(root) {
    const minCam = (root) => {
        if (!root) {
            return {
                withCam: Infinity,
                noCamWatchByDad: 0,
                noCamWatchBySon: 0
            }
        }

        const left = minCam(root.left);
        const right = minCam(root.right);

        const withCam = 1 + Math.min(
            left.noCamWatchByDad + right.noCamWatchByDad,
            left.withCam + right.noCamWatchByDad,
            left.noCamWatchByDad, right.withCam
        )

        const noCamWatchByDad = Math.min(
            left.withCam + right.withCam,
            left.withCam + right.noCamWatchBySon,
            left.noCamWatchBySon + right.withCam,
            left.noCamWatchBySon + right.noCamWatchBySon
        )

        const noCamWatchBySon = Math.min(
            left.withCam + right.withCam,
            left.withCam + right.noCamWatchBySon,
            left.noCamWatchBySon + right.withCam
        )
        return { withCam, noCamWatchByDad, noCamWatchBySon };
    }

    const res = minCam(root);
    return Math.min(res.withCam, res.noCamWatchBySon);
};

console.log(minCameraCover({"val":0,"left":null,"right":{"val":0,"left":null,"right":{"val":0,"left":null,"right":null}}}));