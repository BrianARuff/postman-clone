import * as cypress from "cypress";

class Init {
  default() {
    cy.server();
  }
  visitHomePage() {
    cy.visit("http://localhost:3000");
  }
}

export const init = new Init();
