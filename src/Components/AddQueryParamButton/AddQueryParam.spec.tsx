import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import content from "../../content.json";
import AddQueryParamButton from "./AddQueryParamButton";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("AddQueryParamButton", () => {
  const onClick = jest.fn();

  test("renders text Add Params", () => {
    render(
      <Provider store={store}>
        <AddQueryParamButton
          setId={onClick}
          handleSetQueryParamsKey={onClick}
          handleSetQueryParamsValue={onClick}
          id={0}
        />
      </Provider>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
