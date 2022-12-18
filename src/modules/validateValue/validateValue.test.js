import {validateValue} from './validateValue'

test('Валидация значения', () => {
    expect(validateValue(50)).toBe(true)
})
// describe позволяет писать несколько тестов
describe('Валидация значения - несколько вариантов', () => {
    test('Корректное значение', () => {
        expect(validateValue(50)).toBe(true)
    })
    test('Пограничное значение снизу', () => {
        expect(validateValue(0)).toBe(true)
    })
    test('Пограничное значение сверху', () => {
        expect(validateValue(100)).toBe(true)
    })
    test('Меньше значение', () => {
        expect(validateValue(-50)).toBe(false)
    })
    test('Больше значение', () => {
        expect(validateValue(150)).toBe(false)
    })
})