/// <reference types = "cypress"/>

describe("JSON Object", () => {
  it("Json Object Examples", () => {
    const exampleObject = { key: "Tom", key2: "Jones" };
    cy.log(exampleObject[key]); // Tom
    cy.log(exampleObject[key2]); // Jones
    cy.log(exampleObject.key2); // Jones
  });
});