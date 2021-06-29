import { screen, render, fireEvent } from "@testing-library/react";
import InputField from "./InputField";
import { Provider } from "react-redux";
import store from "../../redux/store";
import {
  INPUT_FIELD_COMPONENT_FORM,
  INPUT_FIELD_COMPONENT_KEY_VALUE_INPUT,
  INPUT_FIELD_COMPONENT_VALUE_INPUT,
} from "../../cypressTypes/types";

describe("InputField", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <InputField />
      </Provider>
    );
  });
  it("should have have a form", () => {
    const form = screen.getByTestId(INPUT_FIELD_COMPONENT_FORM);
    expect(form).toBeInTheDocument();
  });
  it("should have two input fields", () => {
    const keyValueInput = screen.getByTestId(
      INPUT_FIELD_COMPONENT_KEY_VALUE_INPUT
    );
    const valueInput = screen.getByTestId(INPUT_FIELD_COMPONENT_VALUE_INPUT);
    expect(keyValueInput).toBeInTheDocument();
    expect(valueInput).toBeInTheDocument();
  });
  it("should have a button", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
