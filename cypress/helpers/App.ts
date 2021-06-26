import * as cypress from "cypress";
import { APP_COMPONENT_MAIN_CONTAINER } from "../../src/cypressTypes/types";

class App {
  get container() {
    return cy.get(`[data-testid=${APP_COMPONENT_MAIN_CONTAINER}]`);
  }
}

export const app = new App();
