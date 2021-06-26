import { init } from "../helpers/init";
import { app } from "../helpers/app";

describe("App component", () => {
  beforeEach(() => {
    init.default();
  });
  it('has the text "..."', () => {
    app.container.should("contain.text", "Postman Clone");
  });
});
