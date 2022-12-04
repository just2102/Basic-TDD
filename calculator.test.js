import { calculator } from "./calculator";

test('adds numbers correctly', () => {
    expect(calculator.add(5,10)).toEqual(15)
})
test('subtracts numbers correctly',() => {
    expect(calculator.subtract(40,5)).toEqual(35)
})
test('divides numbers correctly',() => {
    expect(calculator.divide(156,6)).toEqual(26)
})
test('multiplies numbers correctly',() => {
    expect(calculator.multiply(333,124)).toEqual(41292)
})
