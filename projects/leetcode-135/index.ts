/*
 * @Author: junchao
 * @Date: 2022-02-14 15:28:29
 * @LastEditTime: 2022-02-14 16:04:22
 * @LastEditors: junchao
 * @Description: https://leetcode-cn.com/problems/candy/
 * @FilePath: /algorithm/projects/leetcode-135/index.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */

function candy(ratings: number[]): number {
    const left: number[] = new Array(ratings.length).fill(1);
    const right: number[] = new Array(ratings.length).fill(1);
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1;
        }
    }
    let count = left[ratings.length - 1];
    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            right[i] = right[i + 1] + 1;
        }
        count += Math.max(left[i], right[i]);
    }
    return count;
};