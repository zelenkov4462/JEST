import { render, screen, fireEvent } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

// fireEvent - это объект, предназначенный
// для работы с событиями

import App from "./App";

//Методы -

// find используется для работы с асинхронным кодом

// findBy...- возвращает один элемент, findAll - массив

// getBy..., getAll - обязательно должен найтись элемент
// на странице, иначе выбрасывается ошибка и тест падает

// queryBy..., queryAll - возможность убедиться,
// что элемента нет на страницу

describe("TEST APP", () => {
  test("renders learn react link", () => {
    render(<App />);
    const helloElement = screen.getByText(/hello/i);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/value/i);
    //.toBeInTheDocument - проверка появился наш элемент
    // в дереве DOM или нет
    expect(helloElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    // Для отладки теста - .debug()
    // screen.debug()

    expect(input).toMatchSnapshot();
  });

  test("query test", () => {
    render(<App />);
    const elementDOM = screen.queryByText(/hello world/i);
    expect(elementDOM).toBeNull();
  });

  test("find test", async () => {
    render(<App />);
    const elementDOM = await screen.findByText(/data/i);
    expect(elementDOM).toBeInTheDocument();
    expect(elementDOM).toHaveStyle({ color: "red" });
    // screen.debug()
  });

  test("CLICK EVENT", () => {
    render(<App />);
    const btn = screen.getByTestId("toggle-btn");
    expect(screen.queryByTestId("toggle-elem")).toBeNull();

    // fireEvent - смотри выше - нужен для событий,
    // т.к. у btn нет никаких свойств,
    // а мы проверяем на Click

    fireEvent.click(btn);
    //После нажатия на кнопку проверяем,
    // что элемент появился на странице

    expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
  });

  test("INPUT TEST", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/value/i);
    // expect(screen.queryByTestId('value-elem')).toContainHTML('')
    expect(screen.getByTestId("value-elem")).toContainHTML("");

    //fireEvent - это искуственное взаимодействие
    // с интерактивными элементами на странице

    fireEvent.input(input, {
      target: { value: "12345" },
    });

    // expect(screen.queryByTestId("value-elem")).toContainHTML("12345");
    expect(screen.getByTestId("value-elem")).toContainHTML("12345");
  });

  // используем userEvent вместо fireEvent -
  // т.к. полностью расширяет свойства для элементов,
  // с которыми взаимодействует пользователь

  // Отличие - userEvent - не работает с
  // конкретными событиями, а воспроизводит
  // действия пользователя
  // (нажатия кнопок, движения мыши и т.д.)

  test("INPUT TEST with userEvent", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/value/i);
    expect(screen.getByTestId("value-elem")).toContainHTML("");

    userEvent.type(input, "12345");

    expect(screen.getByTestId("value-elem")).toContainHTML("12345");
  });
});
