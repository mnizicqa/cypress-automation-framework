describe("Inspect Automation Store Items", () => {
  beforeEach(function () {
    cy.visit("https://www.automationteststore.com/");
  });
  it("Click on the item using header", () => {
    cy.get(
      "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname"
    ).click();
  });

  it("Click on the item using text", () => {
    cy.get(".prdocutname")
      .contains("Skinsheen Bronzer Stick")
      .click()
      .then(function (itemHeaderText) {
        console.log("Selected Item Header Text: " + itemHeaderText.text());
      });
  });

  it("Click on the item using index", () => {
    cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
  });
});
