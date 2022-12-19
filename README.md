Пирамида тестирования: 

1) end-to-end - e2e - 10%;
2) integration - 20-30%;
3) Snapshot - скриншотные тесты;
4) Unit test - 70-80%


describe, test(it), render, expect

toBe, toBeLessThan, toBeGreaterThan, toBeUndefined, 

.not.toBeUndefined() - отрицание

getByText, getByRole

toBeInTheDocument, toBeNull, toMatchSnapshot


Перед каждым тестирование вызовется
    beforeEach(() => {
    //    Добавить в БД
    })
    
Один раз перед всеми тестами
    beforeAll(() => {})
    
test('функция pow2', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        squarePow(1)
        expect(spyMathPow).toBeCalledTimes(0)
    })
