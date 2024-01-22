/// <reference types = "cypress"/>

describe("Verify checkboxes", () => {
  beforeEach(() => {
    cy.navigateToCheckboxespage();
  });
  it("Check and validate checkboxes", () => {
    // cy.get("#checkboxes > :nth-child(1) > input").check();
    // cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked");

    cy.get("#checkboxes > :nth-child(1) > input").as("option1");
    cy.get("@option1").check().should("be.checked");
  });

  it("Uncheck and validate that checkbox has been unchecked", () => {
    cy.get(":nth-child(5) > input").as("option3");
    cy.get("@option3").uncheck().should("not.be.checked");
  });

  it("Check multiple checkboxes", () => {
    cy.get("input[type='checkbox']")
      .check(["option-1", "option-2", "option-3", "option-4"])
      .should("be.checked");
  });
});
