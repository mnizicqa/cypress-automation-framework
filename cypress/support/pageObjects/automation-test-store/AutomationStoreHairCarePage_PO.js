class AutomationStoreHairCarePage_PO {
  addProductsToBasket() {
    globalThis.data.productNames.forEach((element) => {
      cy.addProductToBasket(element).then(() => {
        // debugger;
      });
    });
    cy.get(".dropdown-toggle > .fa").click().debug();
  }
}

export default AutomationStoreHairCarePage_PO;
