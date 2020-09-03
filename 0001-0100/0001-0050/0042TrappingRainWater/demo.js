function trap(height) {
    var res = 0;
    var N = height.length;
    for (var i = 1; i < N - 1; i++) {
        var maxLeft = 0;
        var maxRight = 0;
        for (var j = i; j >= 0; j--) {
            maxLeft = Math.max(maxLeft, height[j]);
        }
        for (var j = i; j < N; j++) {
            maxRight = Math.max(maxRight, height[j]);
        }
        res += Math.min(maxLeft, maxRight) - height[i];
    }
    return res;
}
;

function trap(height) {
    if (!height) {
        return 0;
    }

    let res = 0;
    const N = height.length;
    const leftMax = Array(N);
    const rightMax = Array(N);
    leftMax[0] = height[0];
    for (let i = 1; i < N; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i - 1]);
    }

    rightMax[N - 1] = height[N - 1];
    for (let i = N - 2; i >= 0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i + 1]);
    }

    for (let i = 1; i < N - 1; i++) {
        res += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return res;
}

function trap(height) {
    let res = 0;
    let current = 0;
    const stack = [];
    while (current < height.length) {
        while (stack.length && height[current] > height[stack[stack.length - 1]]) {
            let top = stack.pop();
            if (!stack.length) {
                break;
            }
            let distance = current - stack[stack.length - 1] - 1;
            let boundedHeight = Math.min(height[current], height[stack[stack.length - 1]] - height[top]);
            res += distance * boundedHeight;
        }
        stack.push(current++);
    }
    return res;
}

function trap(height) {
    let left = 0;
    let right = height.length - 1;
    let res = 0;
    let leftMax = 0;
    let rightMax = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= leftMax ? (leftMax = height[left]) : res += (leftMax - height[left]);
            left++;
        }
        else {
            height[right] >= rightMax ? (rightMax = height[right]) : res += (rightMax - height[right]);
            right--;
        }
    }
    return res;
}