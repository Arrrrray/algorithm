/*
 * @Author: junchao
 * @Date: 2022-02-17 22:17:19
 * @LastEditTime: 2022-02-17 22:34:30
 * @LastEditors: junchao
 * @Description: https://leetcode-cn.com/problems/non-decreasing-array/
 * @FilePath: /algorithm/projects/leetcode-655/index.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
function checkPossibility(nums: number[]): boolean {
    if (nums.length < 2) return true;
    let flag = nums[0] <= nums[1] ? true : false; // 标识是否还能修改
    // 遍历时，每次需要看连续的三个元素
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1])  // 出现递减
        {
            if (flag)   // 如果还有修改机会，进行修改
            {
                if (nums[i + 1] >= nums[i - 1])// 修改方案1
                    nums[i] = nums[i + 1];
                else                            // 修改方案2
                    nums[i + 1] = nums[i];
                flag = false;                   // 用掉唯一的修改机会
            }
            else        // 没有修改机会，直接结束
                return false;
        }
    }
    return true;
};