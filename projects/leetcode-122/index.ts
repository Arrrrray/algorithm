/*
 * @Author: junchao
 * @Date: 2022-02-18 14:39:19
 * @LastEditTime: 2022-02-18 14:54:39
 * @LastEditors: junchao
 * @Description: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @FilePath: /algorithm/projects/leetcode-122/index.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
function maxProfit(prices: number[]): number {
    if (prices.length < 2) return 0;
    let max: number = 0;
    for (let i = 0; i < prices.length; i++) {
        let diff = prices[i] - prices[i - 1];
        if (diff > 0) {
            max += diff;
        }
    }
    return max;
};