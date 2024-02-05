describe("Handling js alerts", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
  });
  it("Confirm that alerts contains the correct text", () => {
    cy.get("#button1").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });

  it("Validate js confirm alert box works correctly when clicking ok ", () => {
    cy.get("#button4").click();

    cy.on("window:confirm", (str) => {
      return true;
    });

    cy.get("#confirm-alert-text").contains("You pressed OK!");
  });

  it("Validate js confirm alert box works correctly when clicking cancel ", () => {
    cy.get("#button4").click();

    cy.on("window:confirm", (str) => {
      return false;
    });

    cy.get("#confirm-alert-text").contains("You pressed Cancel!");
  });

  it("Confirm that alerts contains the correct text using stub", () => {
    const stub = cy.stub();
    cy.on("window:confirm", stub);

    cy.get("#button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      })
      .then(() => {
        return true;
      })
      .then(() => {
        cy.get("#confirm-alert-text").contains("You pressed OK!");
      });
  });
});
