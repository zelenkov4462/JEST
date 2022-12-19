import { createReduxStore } from "../../store/store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "../../components/router/AppRouter";
import { render } from "@testing-library/react";

export const renderTestApp = (component, options) => {
  const store = createReduxStore(options?.initialState);

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[options?.route]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>
  );
};
