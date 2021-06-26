import { render, screen } from "@testing-library/react";
import content from "../../content.json";
import AddQueryParamButton from "./AddQueryParamButton";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("AddQueryParamButton", () => {
  const { buttonText } = content.addQueryParamButton;
  test("renders text Add Params", () => {
    render(
      <Provider store={store}>
        <AddQueryParamButton />
      </Provider>
    );
    const text = screen.getByText(buttonText);
    expect(text).toBeInTheDocument();
  });
});
