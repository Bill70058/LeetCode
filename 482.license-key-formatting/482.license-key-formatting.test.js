import licenseKeyFormatting from './482.license-key-formatting'

describe('license key formatting ', () => {
    test('input "5F3Z-2e-9-w",4 return "5F3Z-2E9W"', () => {
        expect(licenseKeyFormatting("5F3Z-2e-9-w", 4)).toEqual("5F3Z-2E9W");
    });
    test('input "2-5g-3-J",2 return "2-5G-3J"', () => {
        expect(licenseKeyFormatting("2-5g-3-J", 2)).toEqual("2-5G-3J");
    });
})