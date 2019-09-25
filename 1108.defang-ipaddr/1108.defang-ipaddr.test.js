import defangIpaddr from './1108.defang-ipaddr'

describe('defang ipaddr',()=>{
    test('input 1.1.1.1 return 1[.]1[.]1[.]1',()=>{
        expect(defangIpaddr('1.1.1.1')).toEqual('1[.]1[.]1[.]1');
    });
    test('input 255.100.50.0 return 255[.]100[.]50[.]0',()=>{
        expect(defangIpaddr('255.100.50.0')).toEqual('255[.]100[.]50[.]0');
    })
})