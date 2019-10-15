import subdomainVisits from './811.subdomain-visits'

describe('subdomain visits',()=>{
    test('input ["9001 discuss.leetcode.com"] return ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]',()=>{
        expect(subdomainVisits(["9001 discuss.leetcode.com"])).toEqual(["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]);
    });
    test('input ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"] return ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]',()=>{
        expect(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"])).toEqual(["900 google.mail.com","901 mail.com","951 com","50 yahoo.com","1 intel.mail.com","5 wiki.org","5 org"])
    })
})