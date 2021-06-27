import { init } from "../helpers/init";
import { app } from "../helpers/app";
import { addQueryParamButton } from "../helpers/addQueryParamButton";
import { dropDownMenu } from "../helpers/DropDownMenu";
import { heroImage } from "../helpers/HeroImage";
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
  it("should have a dropdown menu", () => {
    dropDownMenu.selectBox.should("exist");
  });
  it("should have dropdown menu with 4 items", () => {
    dropDownMenu.optionItem.should("have.length", 4);
  });
  it("should have options of GET in the dropdown menu", () => {
    dropDownMenu.selectBox.select("GET").should("have.value", "GET");
  });
  it("should have options of POST in the dropdown menu", () => {
    dropDownMenu.selectBox.select("POST").should("have.value", "POST");
  });
  it("should have options of PUT in the dropdown menu", () => {
    dropDownMenu.selectBox.select("PUT").should("have.value", "PUT");
  });
  it("should have options of DELETE in the dropdown menu", () => {
    dropDownMenu.selectBox.select("DELETE").should("have.value", "DELETE");
  });
  it('should have an image with a src of "/postman-logo+text-320x132.png"', () => {
    heroImage.image.should(
      "have.attr",
      "src",
      "/postman-logo+text-320x132.png"
    );
  });
});
