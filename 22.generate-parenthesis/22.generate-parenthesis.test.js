import generateParenthesis from './22.generate-parenthesis'

describe('generate parenthesis', () => {
    test('input 3 return ["((()))","(()())","(())()","()(())","()()()"]', () => {
        expect(generateParenthesis(3)).toEqual(["((()))", "(()())", "(())()", "()(())", "()()()"])
    })
})