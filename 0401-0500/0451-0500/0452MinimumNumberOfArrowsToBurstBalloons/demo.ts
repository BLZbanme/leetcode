function findMinArrowShots1(points: number[][]): number {
    if (!points || !points.length) {
        return 0;
    }
    points.sort((a, b) => {
        return a[0] - b[0] || a[1] - b[1]
    })
    let left = points[0][0];
    let right = points[0][1];
    let count = 0;
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] <= right && points[i][1] >= left) {
            left = Math.max(left, points[i][0]);
            right = Math.min(right, points[i][1]);
        }
        else {
            count++;
            left = points[i][0];
            right = points[i][1];
        }
    }
    return count + 1;
};

function findMinArrowShots(points: number[][]): number {
    if (!points.length) return 0

    points.sort((a, b) => a[1] - b[1])
    let pos = points[0][1];
    let count = 1;
    for (let balloon of points) {
        if (balloon[0] > pos) {
            pos = balloon[1]
            count++;
        }
    }
    return count;
}