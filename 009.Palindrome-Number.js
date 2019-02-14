/**
 * URL: https://leetcode-cn.com/problems/palindrome-number
 * 难度: Easy
 * 
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 *
 *
 * 示例 :
 * 输入: 121
 * 输出: true
 *
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 */


 /**
 * @param {number} x
 * @return {boolean}
 * 
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 */
var isPalindrome = function(x) {
    if(x < 0) return false
    
    var a = x
    var b = 0
    while(a) {
        b = (b * 10) + a % 10
        a = Math.floor(a / 10)
        // console.log(b, a, x)
    }
    if(b == x){
        return true
    }else{
        return false
    }
    
};