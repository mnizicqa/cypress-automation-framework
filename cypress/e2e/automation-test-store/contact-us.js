describe("Test Contact Us form via Automation Test Store", () => {
  before(() => {
    cy.fixture("userDetails").as("user");
  });
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://www.automationteststore.com/");
    //cy.xpath("//a[contains(@href, 'contact')]").click();
    cy.get("a[href$='contact']")
      .click()
      .then(function (clickedLinkText) {
        cy.log("Clicked Link Text: " + clickedLinkText.text());
      });
    cy.get("@user").then((user) => {
      cy.get("#ContactUsFrm_first_name").type(user.first_name);
      cy.get("#ContactUsFrm_email").type(user.email);
    });
    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get("#ContactUsFrm_enquiry").type(
      "What is the maximum discount I get when I order bulk shipments?"
    );
    cy.get("button[title='Submit']").click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
    cy.log("Test has completed!");
  });
});
