/*
 * @Author: junchao
 * @Date: 2022-02-14 16:04:45
 * @LastEditTime: 2022-02-14 16:07:06
 * @LastEditors: junchao
 * @Description: https://leetcode-cn.com/problems/assign-cookies/
 * @FilePath: /algorithm/projects/leetcode-455/index.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
function findContentChildren(g: number[], s: number[]): number {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    const numOfChildren: number = g.length;
    const numOfCookies: number = s.length;
    let count:number = 0;
    for (let i = 0, j = 0; i < numOfChildren && j < numOfCookies; i++, j++) {
        while (j < numOfCookies && g[i] > s[j]) {
            j++;
        }
        if (j < numOfCookies) {
            count++;
        }
    }
    return count;
};