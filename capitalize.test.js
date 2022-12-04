import { capitalize } from "./capitalize";

test('capitalizes first letter of word correctly', () => {
    expect(capitalize('abrakadabra')).toEqual('Abrakadabra')
})