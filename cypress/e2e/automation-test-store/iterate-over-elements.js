/// <reference types = "cypress"/>

describe("Iterate over elements", () => {
  beforeEach(() => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path']").contains("Hair Care").click();
  });
  it("Show all hair care products", () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text());
    });
  });

  it("Add product to basket", () => {
    cy.selectProduct("Pantene Pro-V Conditioner, Classic Care");
  });

  it("Add another product to basket", () => {
    cy.selectProduct("Seaweed Conditioner");
  });

  it("Add another product to basket 2", () => {
    cy.selectProduct("Curls to straight Shampoo");
  });
});
