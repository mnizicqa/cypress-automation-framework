class Homepage_PO {
  visitHomePage() {
    cy.visit(Cypress.env("webdriveruni_homepage"), { timeout: 60000 });
  }

  clickOnContactUsButton() {
    cy.get("#contact-us")
      .invoke("removeAttr", "target")
      .click({ timeout: 8000 });
  }
}
export default Homepage_PO;
