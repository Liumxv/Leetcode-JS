/**
 * URL: https://leetcode-cn.com/problems/reverse-integer/
 * 难度: Easy
 * 
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 *
 * 示例 :
 * 输入: 123
 * 输出: 321
 * 
 * 注意:
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 */


 /**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var sign = x > 0
    var result = 0
    var x = Math.abs(x)
    while(x){
        result = result * 10 + (x % 10)
        x = Math.floor(x / 10)
    }
    if(!sign){
        result *= -1
    }
    
    if(result > Math.pow(2, 31) - 1){return 0}
    if(result < Math.pow(-2, 31)){return 0}
    
    return result
};