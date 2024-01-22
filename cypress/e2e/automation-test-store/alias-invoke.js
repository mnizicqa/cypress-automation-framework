/// <reference types = "cypress"/>

describe("Iterate over elements", () => {
  beforeEach(() => {
    cy.visit("https://www.automationteststore.com/");
  });
  it("Show all hair care products", () => {
    cy.showAllHairCareProducts();
  });

  it("Validate product thumbnail", () => {
    cy.validateProductThumbnail();
  });

  it("Calculate total price of non sale and sale products", () => {
    cy.calculateTotalPrice();
  });
});
