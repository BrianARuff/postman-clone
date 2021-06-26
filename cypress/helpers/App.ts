import * as cypress from "cypress";
import { APP_PAGE_MAIN_CONTAINER } from "../types";

class App {
  get container() {
    return cy.get(`[data-testid=${APP_PAGE_MAIN_CONTAINER}]`);
  }
}

export const app = new App();
