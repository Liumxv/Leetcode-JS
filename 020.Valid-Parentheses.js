/**
 * URL: https://leetcode-cn.com/problems/valid-parentheses/
 * 难度: Easy
 * 
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
	* 左括号必须用相同类型的右括号闭合。
	* 左括号必须以正确的顺序闭合。
	* 注意空字符串可被认为是有效字符串。
 *
 *
 * 示例 :
 * 输入: "{[]}"
 * 输出: true
 * 
 */


 /**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {
        '{':'}',
        '(':')',
        '[':']'
    }
    var list = []
    if((s.length % 2) == 0){
        if(s.length = 0){
            return ture
        }else{
            for(var i = 0; i < s.length; i++){
                let j = s.charAt(i)
                let index = -2
                if(j == '}'){
                    index = list.indexOf('{')
                }else if(j == ')'){
                    index = list.indexOf('(')
                }else if(j == ']'){
                    index = list.indexOf('[')
                }else{
                    list.push(j)
                }
                if(index == -1){
                    return false
                }else if(index >= 0){
                    list.pop(index)
                }
            }
            if(list.length == 0){
                return true
            }else{
                return false   
            }
        }
    }else{
        return false
    }
};