describe("The Dashboard", () => {
  it("loads successfully", () => {
    cy.visit("http://localhost:3001");

    cy.screenshot();
  });
  it("shows pie chart"),
    () => {
      cy.get(setNpsdata);
    };
  it("shows bar chart", () => {
    cy.get(".chart").get((chart) => {
      // we can assert anything about the chart really
      expect(chart.height()).to.be.greaterThan(200);
      cy.screenshot();
    });
  });
  it("shows responses", () => {
    cy.contains + "Responses";
    cy.screenshot();
  });
});
