import { render, screen } from "@testing-library/react";
import HeroImage from "./HeroImage";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { HERO_IMAGE_COMPONENT_IMAGE } from "../../cypressTypes/types";

describe("HeroImage", () => {
  it("should render HeroImage component", () => {
    render(
      <Provider store={store}>
        <HeroImage
          src={process.env.PUBLIC_URL + "/postman-logo+text-320x132.png"}
        />
      </Provider>
    );
  });
  it("should display the postman logo", async () => {
    render(
      <Provider store={store}>
        <HeroImage
          src={process.env.PUBLIC_URL + "/postman-logo+text-320x132.png"}
        />
      </Provider>
    );
    const image = screen.getByTestId(HERO_IMAGE_COMPONENT_IMAGE);
    expect(image).toHaveAttribute("src", "/postman-logo+text-320x132.png");
  });
});
