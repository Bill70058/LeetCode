import longestCommonPrefix from './14.longest-Common-Prefix'

test('[abc,ab,ac,bc] return ""',()=>{
    expect(longestCommonPrefix(['ab','abc','ac','bc'])).toEqual("");
});
test('[abc,ab,ac] return a',()=>{
    expect(longestCommonPrefix(['ab','abc','ac'])).toEqual("a");
});
test('[abcd,abc,ab] return ab',()=>{
    expect(longestCommonPrefix(['abcd','abc','ab'])).toEqual("ab");
});
