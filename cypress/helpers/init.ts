class Init {
  default() {
    cy.server();
    return cy.visit("https://youthful-sinoussi-a2ed6a.netlify.app/");
  }
}

export const init = new Init();
