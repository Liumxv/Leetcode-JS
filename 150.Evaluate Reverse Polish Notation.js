/**
 * URL: https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/
 * 难度: Normal
 * 
 * 根据逆波兰表示法，求表达式的值。
 *
 *
 * 示例 :
 * 输入: ["2", "1", "+", "3", "*"]
 * 输出: 9
 * 
 * 注意:
 * ((2 + 1) * 3) = 9
 */


var isOperator = (token) => {
	return "+-*/".indexOf(token) != -1
}

var calculator = (left, right, operator) => {
	switch (operator){
		case "+": return left + right; break;
		case "-": return left - right; break;
		case "*": return left * right; break;
		default : return left / right; 
	}

}

 /**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
	var stack = [];
	for(index in tokens){
		let token = tokens[index]
		if (isOperator(tokens[index])) {
			let right = parseInt(stack.pop())
			let left = parseInt(stack.pop())
			stack.push(calculator(left, right, token))
		}else{
			stack.push(parseInt(token))
		}
	}
	return stack.pop()
};