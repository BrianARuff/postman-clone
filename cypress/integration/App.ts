import { init } from "../helpers/init";
import { app } from "../helpers/app";
import { addQueryParamButton } from "../helpers/addQueryParamButton";
import { heroImage } from "../helpers/HeroImage";
import { jsonTextArea } from "../helpers/JSONTextAreaButton";

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
  it('should have an image with a src of "/postman-logo+text-320x132.png"', () => {
    heroImage.image.should(
      "have.attr",
      "src",
      "/postman-logo+text-320x132.png"
    );
  });
  it('should have a button that says "SET JSON"', () => {
    jsonTextArea.button.should("have.text", "Set JSON");
  });
});
