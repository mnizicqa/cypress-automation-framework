class ContactUs_PO {
  contactUsFormSubmission(
    firstName,
    lastName,
    email,
    comment,
    $selector,
    textToLocate
  ) {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get("textarea.feedback-input").type(comment);
    cy.get('[type="submit"]').click();
    cy.get($selector).contains(textToLocate, { timeout: 30000 });
    cy.screenshot();
    cy.screenshot("Make a contact form submission");
  }
  checkPageTitleAndUrl() {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
  }
}
export default ContactUs_PO;
