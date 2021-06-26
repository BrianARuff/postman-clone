import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import App from "./App";

describe("App", () => {
  test("renders text 'GET'", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const GET_text = screen.getByText(/GET/i);
    expect(GET_text).toBeInTheDocument();
  });
});
