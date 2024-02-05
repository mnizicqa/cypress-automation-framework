describe("Cypress web security", () => {
  it("Validate visiting two different domains", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.visit("https://www.automationteststore.com/");
  });

  it("Validate visiting two different domains via user actions", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get("#automation-test-store").invoke("removeAttr", "target").click();
  });

  //   it.only("Origin command", () => {
  //     cy.origin("webdriveruniversity.com", () => {
  //       cy.visit("/");
  //     });

  //     cy.origin("automationstore.com", () => {
  //       cy.visit("/");
  //     });
  //   });
});
