describe("Test Datepicker", () => {
  beforeEach(() => {
    cy.navigateToDatePickerPage();
  });
  it("Select date from the datepicker", () => {
    // let date = new Date();
    // date.setDate(date.getDate());
    // cy.log(date.getDate());

    // let date2 = new Date();
    // date2.setDate(date.getDate() + 5);
    // cy.log(date2.getDate());

    cy.get(".input-group-addon").click();
    let date = new Date();
    date.setDate(date.getDate() + 86);

    let futureYear = date.getFullYear();
    let futureMonth = date.toLocaleString("en-US", { month: "long" });
    let futureDay = date.getDate();

    cy.log("Future year to select: " + futureYear);
    cy.log("Future month is: " + futureMonth);
    cy.log("Future day is: " + futureDay);

    function selectMonthAndYear() {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          if (!currentDate.text().includes(futureYear)) {
            cy.get(".next").first().click();
            selectMonthAndYear();
          }
        })
        .then((currentDate) => {
          cy.get(".datepicker-dropdown")
            .find(".datepicker-switch")
            .first()
            .then((currentDate) => {
              if (!currentDate.text().includes(futureMonth)) {
                cy.get(".next").first().click();
                selectMonthAndYear();
              }
            });
        });
    }

    function selectFutureDay() {
      cy.get("[class='day']").contains(futureDay).click();
    }
    selectMonthAndYear();
    selectFutureDay();
  });
});
