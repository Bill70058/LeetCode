import toGoatLatin from './824.generation'

describe('to goatlatin', () => {
    test('input "I speak Goat Latin" return "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"', () => {
        expect(toGoatLatin("I speak Goat Latin")).toEqual("Imaa peaksmaaa oatGmaaaa atinLmaaaaa");
    });
    test('input "The quick brown fox jumped over the lazy dog" return "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"', () => {
        expect(toGoatLatin("The quick brown fox jumped over the lazy dog")).toEqual("heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa");
    });
})