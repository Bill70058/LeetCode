import evalRPN from './150.eval-RPN'

describe('eval RPN',()=>{
    test('input ["2","1","+","3","*"] return 9',()=>{
        expect(evalRPN(["2","1","+","3","*"])).toEqual(9);
    });
    test('input ["4","13","5","/","+"] return 6',()=>{
        expect(evalRPN(["4","13","5","/","+"])).toEqual(6);
    });
})