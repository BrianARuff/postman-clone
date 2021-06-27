import * as cypress from "cypress";
import {
  DROP_DOWN_MENU_COMPONENT_SELECT_BOX,
  DROP_DOWN_MENU_COMPONENT_OPTION_ITEM,
} from "../../src/cypressTypes/types";

class DropDownMenu {
  get selectBox() {
    return cy.get(`[data-testid=${DROP_DOWN_MENU_COMPONENT_SELECT_BOX}]`);
  }
  get optionItem() {
    return cy.get(`[data-testid=${DROP_DOWN_MENU_COMPONENT_OPTION_ITEM}]`);
  }
}

export const dropDownMenu = new DropDownMenu();
