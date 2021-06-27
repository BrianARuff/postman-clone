import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import MainHeader from "./MainHeader.tsx";

describe("Main Header", () => {
  test('renders the text "Postman Clone"', () => {
    render(
      <Provider store={store}>
        <MainHeader />
      </Provider>
    );
    const postmanCloneText = screen.getByText(/Postman Clone/);
    expect(postmanCloneText).toBeInTheDocument();
  });
});
