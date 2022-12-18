import {render, screen} from "@testing-library/react";

import List from './List'

const data = ['html', 'css', 'js']

// describe позволяет писать несколько тестов
describe('List component', () => {
    // начинаем со слова "test" или "it"
    //внутри название теста и функция проверки
    it('List renders', () => {
        render(<List items={data}/>)

        //Ожидаем что на странице есть список - ul
        expect(screen.getByRole('list')).toBeInTheDocument()

        //Ожидаем что в отрендированом компоненте есть слово html
        expect(screen.getByText('html')).toBeInTheDocument()
    })

    it ('List renders without data', () => {
        render(<List/>)

        //Для проверки отсутствия элемента на странице
        //используют метод query....
        //ожидаем что на странице не будет списка, т.кк выше
        //мы не передали в компонент пропс
        expect(screen.queryByRole('list')).toBeNull()
    })

//    Snapshot тестирование - создание слепков

    it('List snapshot', () => {
        const list = render(<List items={data}/>)

        expect(list).toMatchSnapshot()
    })
})