# 733. Flood Fill

An `image` is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

Given a coordinate `(sr, sc)` representing the starting pixel (row and column) of the flood fill, and a pixel value `newColor`, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

At the end, return the modified image.

**Example 1:**

```
Input: 
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: 
From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected 
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.
```



**Note:**

The length of `image` and `image[0]` will be in the range `[1, 50]`.

The given starting pixel will satisfy `0 <= sr < image.length` and `0 <= sc < image[0].length`.

The value of each color in `image[i][j]` and `newColor` will be an integer in `[0, 65535]`.



#### 2020.08.16

#### 	我的思路：

dfs，今天试试ts

​	时间复杂度O(R - L)

```typescript
function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    if (image == undefined || image.length === 0) {
        return [[]];
    }

    const M = image.length;
    const N = image[0].length;
    const visited: Array<boolean[]> = Array(M);

    for (let i = 0; i < M; i++) {
        visited[i] = Array(N).fill(false);
    }
    
    let curColor = image[sr][sc];

    const dfs = (i: number, j: number): void => {
        if (i < 0 || j < 0 || i == M ||j == N || visited[i][j]) {
            return;
        }
        visited[i][j] = true;
        if (image[i][j] == curColor) {
            image[i][j] = newColor;
            dfs(i - 1, j);
            dfs(i, j + 1);
            dfs(i + 1, j);
            dfs(i, j - 1);
        }
        return;
    }

    dfs(sr, sc);

    return image;
};
```

