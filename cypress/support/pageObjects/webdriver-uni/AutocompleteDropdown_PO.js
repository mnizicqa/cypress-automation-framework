class AutocompleteDropdown_PO {
  selectAutocompleteDropdownValue() {
    cy.visit("/");
    cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click();

    cy.get("#myInput").type("A");

    cy.get("#myInputautocomplete-list >*")
      .each(($el, $index, $list) => {
        const product = $el.text();
        const productToSelect = "Apple";

        if (product == productToSelect) {
          $el.trigger("click");

          cy.get("#submit-button").click();
          cy.url().should("include", productToSelect);
        }
      })
      .then(() => {
        cy.get("#myInput").type("G");

        cy.get("#myInputautocomplete-list >*").each(($el, $index, $list) => {
          const prod = $el.text();

          if (prod.includes("Grapes")) {
            cy.wrap($el).click();

            cy.get("#submit-button").click();
            cy.url().should("include", "Grapes");
          }
        });
      });
  }
}
export default AutocompleteDropdown_PO;
