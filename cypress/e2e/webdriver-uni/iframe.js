/// <reference types = "cypress"/>

describe("Test Iframe and Modal", () => {
  it("Handling Iframes and Modals", () => {
    cy.visit("/");
    cy.get("#iframe").invoke("removeAttr", "target").click();

    cy.get("#frame").then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframe");
    });

    cy.get("@iframe").find("#button-find-out-more").click();
    cy.get("@iframe").find("#myModal").as("modal");

    cy.get("@modal").should(
      "contain",
      "Welcome to webdriveruniversity.com we sell a wide range of electrical goods"
    );

    cy.get("@modal").contains("Close").click();
  });
});
