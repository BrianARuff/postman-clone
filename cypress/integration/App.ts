import { init } from "../helpers/init";
import { app } from "../helpers/app";
import { addQueryParamButton } from "../helpers/addQueryParamButton";
import content from "../../src/content.json";

describe("App Page", () => {
  const { buttonText } = content.addQueryParamButton;

  beforeEach(() => {
    init.default();
    init.visitHomePage();
  });
  it("should exist", () => {
    app.container.should("exist");
  });
  it(`should have the text ${buttonText}`, () => {
    addQueryParamButton.CTA.should("have.text", buttonText);
  });
});
