// __tests__/example.test.js

// Esimerkki funktio testattavaksi
function sum(a, b) {
    return a + b; // Palauttaa lukujen summan
}

// Testiryhmä
describe('Perustesti kirjastolle', () => {

    test('1 + 1 pitäisi olla 2', () => {
        const result = sum(1, 1);
        expect(result).toBe(2);
    });

    test('5 + 7 pitäisi olla 12', () => {
        const result = sum(5, 7);
        expect(result).toBe(12);
    });

});
