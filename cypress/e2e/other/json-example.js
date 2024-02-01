/// <reference types = "cypress"/>

describe("JSON Object", () => {
  it("Json Object Examples", () => {
    const exampleObject = {
      first_name: "Tom",
      last_name: "Jones",
    };

    const exampleArrayOfValues = ["Sophie", "Jim", "Timothy"];

    const users = {
      firstName: "James",
      lastName: "Jameson",
      age: 30,
      Students: [
        {
          firstName: "Sarah",
          lastName: "Marshall",
        },
        {
          firstName: "Jessica",
          lastName: "Parker",
        },
      ],
    };

    const exampleArrayOfObjects = [
      { name: "Obi-Wan" },
      { last_name: "Kenobi" },
      { rank: "Jedi Master" },
    ];
    cy.log(exampleObject["first_name"]); // Tom
    cy.log(exampleObject["last_name"]); // Jones
    cy.log(exampleObject.last_name); // Jones

    cy.log(exampleArrayOfValues[0]); // Sophie
    cy.log(exampleArrayOfValues[1]); // Jim

    cy.log(users.Students[1].lastName); // Parker
    cy.log(users.Students[0].firstName); // Sarah

    cy.log(exampleArrayOfObjects[0].name);
    cy.log(exampleArrayOfObjects[1].last_name);
    cy.log(exampleArrayOfObjects[2].rank);
  });
});
