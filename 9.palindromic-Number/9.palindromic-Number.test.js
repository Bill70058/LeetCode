import isPalindromic from './9.palindromic-Number'

test('输入0输出true',()=>{
    expect(isPalindromic(0)).toBe(true);
});
test('输入负数输出false',()=>{
    expect(isPalindromic(-10)).toBe(false);
});
test('输入个位数是零的数输出false',()=>{
    expect(isPalindromic(120)).toBe(false);
});
test('输入回文数输出true',()=>{
    expect(isPalindromic(121)).toBe(true);
});
test('输入非回文数输出false',()=>{
    expect(isPalindromic(123)).toBe(false);
});