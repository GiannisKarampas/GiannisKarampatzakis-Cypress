import { SearchPage } from "../../pages/search.page";

describe("Unibet Blog Search Feature - Invalid search", () => {
  it("Should display no results message for an invalid search term", () => {
    cy.visit("/");
    SearchPage.searchTerm("xyzxyz123");
    cy.get("#post-0").then(($element) => {
      const messageText = $element.text();
      cy.log("Displayed message:", messageText);
    });
    cy.get("#post-0").should("be.visible").and("contain.text", "Nothing Found");
  });
});
