// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.Commands.add("navigateToHomepage", () => {
  cy.visit("/");
});

Cypress.Commands.add("navigateToCheckboxespage", () => {
  cy.visit("/" + "Dropdown-Checkboxes-RadioButtons/index.html");
});

Cypress.Commands.add("navigateToDatePickerPage", () => {
  cy.visit("/" + "Datepicker/index.html");
});

Cypress.Commands.add("selectProduct", (productName) => {
  cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    if ($el.text().includes(productName)) {
      cy.wrap($el).click();
    }
  });
});

Cypress.Commands.add("addProductToBasket", (productName) => {
  cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    if ($el.text() == productName) {
      cy.log($el.text());
      cy.get(".productcart").eq(index).click();
    }
  });
});

Cypress.Commands.add("uploadFile", (fileName) => {
  cy.visit("/");
  cy.get("#file-upload").invoke("removeAttr", "target").click();
  cy.get("#myFile").selectFile("cypress/fixtures/laptop.png");
  cy.get("#submit-button").click();
  cy.url().should("include", "filename=laptop.png");
});

Cypress.Commands.add(
  "contactUsFormSubmission",
  (firstName, lastName, email, comment, $selector, textToLocate) => {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get("textarea.feedback-input").type(comment);
    cy.get('[type="submit"]').click();
    cy.get($selector).contains(textToLocate);
  }
);

Cypress.Commands.add("selectDropdownListValue", () => {
  cy.visit("/");
  cy.get("#dropdown-checkboxes-radiobuttons")
    .invoke("removeAttr", "target")
    .click();

  cy.get("#dropdowm-menu-1").select("c#");
  cy.get("#dropdowm-menu-2").select("testng").should("have.value", "testng");
  cy.get("#dropdowm-menu-3").select("JQuery").contains("JQuery");

  cy.get("#dropdowm-menu-2").select("maven").should("have.value", "maven");
  cy.get("#dropdowm-menu-2").select("TestNG").contains("TestNG");
});

Cypress.Commands.add("showAllHairCareProducts", () => {
  cy.get("a[href*='product/category&path']").contains("Hair Care").click();
  cy.get(".fixed_wrapper .prdocutname")
    .eq(1)
    .invoke("text")
    .as("productThumbnail");
  cy.get("@productThumbnail").its("length").should("be.gt", 10);
  cy.get("@productThumbnail").should(
    "include",
    "Pantene Pro-V Conditioner, Classic Care"
  );

  Cypress.Commands.add("validateProductThumbnail", () => {
    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail").should("have.length", 16);
    cy.get("@productThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  Cypress.Commands.add("calculateTotalPrice", () => {
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("saleItemPrice");

    let itemsTotal = 0;
    cy.get("@itemPrice").then(($linkText) => {
      let itemsPriceTotal = 0;
      let itemPrice = $linkText.split("$");
      let i;
      for (i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        itemsPriceTotal += Number(itemPrice[i]);
      }
      itemsTotal += itemsPriceTotal;
      cy.log("Non sale price items total: " + itemsPriceTotal);
    });

    cy.get("@saleItemPrice")
      .then(($linkText) => {
        let saleItemsPrice = 0;
        let saleItemPrice = $linkText.split("$");
        let i;
        for (i = 0; i < saleItemPrice.length; i++) {
          cy.log(saleItemPrice[i]);
          saleItemsPrice += Number(saleItemPrice[i]);
        }
        itemsTotal += saleItemsPrice;
        cy.log("Sale items price total: " + saleItemsPrice);
      })
      .then(() => {
        cy.log(
          "Total item price of both non sale and sale products is :" +
            itemsTotal
        );
        expect(itemsTotal).to.equal(660.5);
      });
  });
});
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
