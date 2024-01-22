class AutomationStoreHomePage_PO {
  accessAutoStoreHomePage() {
    cy.visit("https://www.automationteststore.com/");
  }

  clickOnHairCareProduct() {
    cy.get("a[href*='product/category&path']").contains("Hair Care").click();
  }
}
export default AutomationStoreHomePage_PO;
