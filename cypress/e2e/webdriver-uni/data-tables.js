describe("Handling data", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#data-table").invoke("removeAttr", "target").click();
  });
  it("Calculate and assert the total age of all users", () => {
    const userDetails = [];
    let numb = 0;
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        userDetails[index] = $el.text();
      })
      .then(() => {
        let i;
        for (i = 0; i < userDetails.length; i++) {
          if (Number(userDetails[i])) {
            numb += Number(userDetails[i]);
          }
        }
        cy.log("Found total age: " + numb);
        expect(numb).to.eq(322);
      });
  });

  it("Calculate and assert the age of a given user based on last name", () => {
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Woods")) {
        cy.get("#thumbnail-1 tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (age) {
            const userAge = age.text();
            expect(userAge).to.eq("80");
          });
      }
    });
  });
});
