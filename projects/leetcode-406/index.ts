/*
 * @Author: junchao
 * @Date: 2022-02-18 14:56:28
 * @LastEditTime: 2022-02-18 15:13:12
 * @LastEditors: junchao
 * @Description: https://leetcode-cn.com/problems/queue-reconstruction-by-height/
 * @FilePath: /algorithm/projects/leetcode-406/index.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
function reconstructQueue(people: number[][]): number[][] {
    people.sort((a, b) => {
        if (a[0] == b[0]) {
            return a[1] - b[1];
        }
        return b[0] - a[0];
    })
    let res: number[][] = []
    people.forEach(item => {
        res.splice(item[1], 0, item)
    })
    return res;
};