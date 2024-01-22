/// <reference types = "cypress"/>

describe("Test File Upload", () => {
  it("Upload a file...", () => {
    cy.uploadFile("cypress/fixtures/laptop.png");
  });
  it("Upload no file...", () => {
    cy.visit("/");
    cy.get("#file-upload").invoke("removeAttr", "target").click();
    cy.get("#submit-button").click();
  });
});
