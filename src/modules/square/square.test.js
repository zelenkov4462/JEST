import {square, squarePow} from './square'


describe('square', () => {
    let mockValue;
    //Перед каждым тестирование вызовется
    beforeEach(() => {
    //    Добавить в БД
    })

    //Один раз перед всеми тестами
    beforeAll(() => {})

    test('Корректное значение', () => {
        expect(square(5)).toBe(25)
        expect(square(5)).toBeLessThan(26)
        expect(square(5)).toBeGreaterThan(24)
        expect(square(5)).not.toBeUndefined()
    })

    afterEach(() => {
    //    удалить из БД
    })
    afterAll(() => {})
})

describe('squarePow', () => {
    test('функция pow', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        squarePow(2)
        expect(spyMathPow).toBeCalledTimes(1)
    })
    test('функция pow2', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        squarePow(1)
        expect(spyMathPow).toBeCalledTimes(0)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })
})