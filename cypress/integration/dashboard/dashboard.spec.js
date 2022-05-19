import Responses from "../../../src/components/Responses";

describe("The Dashboard", () => {
  it("loads successfully", () => {
    cy.visit("http://localhost:3000");
  });

  it("shows bar chart", () => {
    cy.get(".chart").get((chart) => {
      cy.screenshot();
    });
  });

  it("shows responses", () => {
    cy.get(".response").get((response) => {
      cy.screenshot();
    });
  });
});
