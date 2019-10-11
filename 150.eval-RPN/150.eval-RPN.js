/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function(tokens) {
    let answer = [];
    for(let n of tokens){
        if(n === '+'){
            answer.push(answer.pop() + answer.pop());
        }else if(n === '-'){
            answer.push(-answer.pop() + answer.pop());
        }else if(n === '*'){
            answer.push(answer.pop() * answer.pop());
        }else if(n === '/'){
            let num = answer.pop();
            answer.push(parseInt(answer.pop()/num));
        }else {
            answer.push(parseInt(n));
        }
    }
    return answer.pop();
};

// evalRPN(["4","13","5","/","+"])
module.exports = evalRPN;
