/// <reference types = "cypress"/>

describe("Verify radio buttons", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();
  });
  it("Check specific buttons", () => {
    cy.get("#radio-buttons").find("[type='radio']").first().check();
    cy.get("#radio-buttons").find("[type='radio']").eq(1).check();
  });

  it("Validate the states of specific radio buttons", () => {
    cy.get("[value='lettuce']").should("not.be.checked");
    cy.get("[value='pumpkin']").should("be.checked");

    cy.get("[value='lettuce']").check();
    cy.get("[value='lettuce']").should("be.checked");
    cy.get("[value='pumpkin']").should("not.be.checked");

    cy.get("[value='cabbage']").should("be.disabled");
  });
});
