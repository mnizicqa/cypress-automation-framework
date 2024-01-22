import AutomationStoreHomePage_PO from "../../support/pageObjects/automation-test-store/AutomationStoreHomePage_PO";
import AutomationStoreHairCarePage_PO from "../../support/pageObjects/automation-test-store/AutomationStoreHairCarePage_PO";
/// <reference types = "cypress"/>

describe("Add multiple items to basket", () => {
  const automationstorehomepage = new AutomationStoreHomePage_PO();
  const automationstorehaircarepage = new AutomationStoreHairCarePage_PO();

  before(() => {
    cy.fixture("products").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    automationstorehomepage.accessAutoStoreHomePage();
    automationstorehomepage.clickOnHairCareProduct();
  });

  it("Add specific items to basket", () => {
    automationstorehaircarepage.addProductsToBasket();
  });
});
