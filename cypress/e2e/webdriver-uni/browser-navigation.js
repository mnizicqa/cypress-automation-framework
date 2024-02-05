describe("Validate website navigation links", () => {
  it("Confirm links redirect to correct pages", () => {
    cy.visit("/");
    cy.get("#contact-us").invoke("removeAttr", "target").click();
    cy.url().should("include", "contactus");

    cy.go("back");
    cy.reload();
    cy.url().should("eq", "https://www.webdriveruniversity.com/");
    // cy.reload(true) // reload without using cache

    cy.go("forward");
    cy.url().should("include", "contactus");

    cy.go("back");
    cy.get("#login-portal").invoke("removeAttr", "target").click();
    cy.url().should("include", "Login-Portal");
    cy.go("back");

    cy.get("#to-do-list").invoke("removeAttr", "target").click();
    cy.url().should("include", "To-Do-List");
    cy.go("back");
  });
});
