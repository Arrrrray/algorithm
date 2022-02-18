/*
 * @Author: junchao
 * @Date: 2022-02-17 22:47:12
 * @LastEditTime: 2022-02-17 23:03:41
 * @LastEditors: junchao
 * @Description: https://leetcode-cn.com/problems/jump-game/
 * @FilePath: /algorithm/projects/leetcode-55/index.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
function canJump(nums: number[]): boolean {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > k) return false;
        k = Math.max(k, i + nums[i]);
    }
    return true;

};