import { fireEvent, render, screen } from "@testing-library/react";
import content from "../../content.json";
import DropDownMenu from "./DropDownMenu";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { DROP_DOWN_MENU_COMPONENT_SELECT_BOX } from "../../cypressTypes/types";

describe("DropDown Menu", () => {
  it("should render the drop down menu", () => {
    render(
      <Provider store={store}>
        <DropDownMenu />
      </Provider>
    );
  });
  it("should have the text POST in the document after clicking the select menu and selecting POST", () => {
    render(
      <Provider store={store}>
        <DropDownMenu />
      </Provider>
    );
    const select = screen.getByTestId(DROP_DOWN_MENU_COMPONENT_SELECT_BOX);
    expect(select).toBeInTheDocument();
    fireEvent.click(screen.getByText(/POST/i));
    expect(screen.getByText(/POST/i)).toBeInTheDocument();
  });
});
