import {mapArrToString} from './mapArrToString'

describe('Проверка работы функции', () => {
    test('Только числа', () => {
        // Для проверки содержимого массива или объекта
        // используют метод .toEqual
        //т.к. проверка не пройдет из-за разных
        // ссылок у массива или объекта
        expect(mapArrToString([1,2,3])).toEqual(['1', '2', '3'])
    })
    test('числа, строки и др', () => {
        expect(mapArrToString([1,2,3, 'a', 'b', null, undefined])).toEqual(['1', '2', '3'])
    })
    test('Пустой массив', () => {
        expect(mapArrToString([])).toEqual([])
    })
    test('Отрицание', () => {
        expect(mapArrToString([1,2,3])).not.toEqual([1,2,3])
    })
})