import { render } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { createReduxStore } from "../../store/store";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";
import { renderTestApp } from "../../tests/helpers/renderTestApp";

describe("Counter Test", function () {
  test("Test", async () => {
    const { getByTestId } = renderWithRedux(<Counter />, {
      counter: {
        value: 10,
      },
    });

    const incrementBtn = getByTestId("increment-btn");
    expect(getByTestId("value-title")).toHaveTextContent("10");
    userEvent.click(incrementBtn);
    expect(getByTestId("value-title")).toHaveTextContent("11");
  });

  test("Test with helper testApp", async () => {
    const { getByTestId } = renderTestApp(null, {
      route: "/",
      initialState: {
        counter: {
          value: 10,
        },
      },
    });

    const incrementBtn = getByTestId("increment-btn");
    expect(getByTestId("value-title")).toHaveTextContent("10");
    userEvent.click(incrementBtn);
    expect(getByTestId("value-title")).toHaveTextContent("11");
  });
});
