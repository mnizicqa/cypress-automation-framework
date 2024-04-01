import Homepage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import ContactUs_PO from "../../support/pageObjects/webdriver-uni/ContactUs_PO";

describe("Test Contact Us form via WebDriverUni", () => {
  Cypress.config("defaultCommandTimeout", 20000);
  const homepage = new Homepage_PO();
  const contactUsPage = new ContactUs_PO();

  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    homepage.visitHomePage();
    homepage.clickOnContactUsButton();
  });

  it("Should be able to submit a successful submission via contact us form", () => {
    const contactUsPage = new ContactUs_PO();
    contactUsPage.checkPageTitleAndUrl();
    contactUsPage.contactUsFormSubmission(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "I am learning Cypress automation framework",
      "h1",
      "Thank You for your Message!"
    );
  });

  it("Should not be able to submit a successful submission via contact us form as all field are required", () => {
    if (Cypress.isBrowser("!firefox")) {
      contactUsPage.checkPageTitleAndUrl();
      contactUsPage.contactUsFormSubmission(
        Cypress.env("first_name"),
        data.last_name,
        " ",
        "I am learning Cypress automation framework",
        "body",
        "Error: Invalid email address"
      );
    }
  });
});
