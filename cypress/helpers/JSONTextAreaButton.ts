import * as cypress from "cypress";
import { JSON_TEXT_AREA_BUTTON_BUTTON } from "../../src/cypressTypes/types";

class JSONTextAreaButton {
  get button() {
    return cy.get(`[data-testid=${JSON_TEXT_AREA_BUTTON_BUTTON}]`);
  }
}

export const jsonTextArea = new JSONTextAreaButton();
