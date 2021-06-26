import * as cypress from "cypress";
import { ADD_QUERY_PARAM_BUTTON_COMPONENT_BUTTON } from "../../src/cypressTypes/types";

class AddQueryParamButton {
  get CTA() {
    return cy.get(`[data-testid=${ADD_QUERY_PARAM_BUTTON_COMPONENT_BUTTON}]`);
  }
}

export const addQueryParamButton = new AddQueryParamButton();
