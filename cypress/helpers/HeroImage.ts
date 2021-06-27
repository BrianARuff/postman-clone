import * as cypress from "cypress";
import { HERO_IMAGE_COMPONENT_IMAGE } from "../../src/cypressTypes/types";

class HeroImage {
  get image() {
    return cy.get(`[data-testid=${HERO_IMAGE_COMPONENT_IMAGE}]`);
  }
}

export const heroImage = new HeroImage();
