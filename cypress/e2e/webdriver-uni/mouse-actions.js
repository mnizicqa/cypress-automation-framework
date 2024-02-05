describe("Test mouse actions", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();
  });

  it("I should be able to drag and drop a draggable item", () => {
    cy.get("#draggable").trigger("mousedown", { which: 1 });

    cy.get("#droppable").trigger("mouseover").trigger("mouseup");
  });

  it("I should be able to double click on a element", () => {
    cy.get("#double-click").dblclick();
  });

  it("I should be able to hold down the left mouse click on given element", () => {
    cy.get("#click-box")
      .trigger("mousedown", { which: 1 })
      .then(($element) => {
        expect($element).to.have.css("background-color", "rgb(0, 255, 0)");
      });
  });
});
